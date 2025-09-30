import moment from 'moment';
import db from '../db';
import Helper from './Helper';

const { check, validationResult } = require('express-validator/check');


const User = {
  /**
   * Login
   * @param {object} req
   * @param {object} res
   * @returns {object} user object
   */
   async login(req, res) {
   if (!req.body.userid || !req.body.password) {
     return res.status(400).send({'RC': '01','message': 'Userid/Password Tidak Boleh Kosong'});
   }

   const text = 'SELECT * FROM users WHERE user_id = $1';
   try {
     const { rows } = await db.query(text, [req.body.userid]);
     if (!rows[0]) {
       return res.status(400).send({'RC': '02','message': 'Userid/Password Salah'});
     }
     if(!Helper.comparePassword(rows[0].password, req.body.password)) {
       return res.status(400).send({ 'RC': '02','message': 'Userid/Password Salah' });
     }
     const token = Helper.generateToken(rows[0].user_id,rows[0].user_kategori);
     return res.status(200).send({ 'RC': '00','message':'Sukses',token });
   } catch(error) {
     return res.status(400).send(error)
   }
 },
 async Apilogin(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // return res.status(422).json({ errors: errors.array() });
    return res.status(422).json({ 'RC': '13','message': 'data request tidak valid', 'info':  errors.array() });
  }

  if (!req.body.userid || !req.body.password) {
    return res.status(400).send({'RC': '01','message': 'Userid/Password Tidak Boleh Kosong'});
  }
   //const token = 'tes'//Helper.generateToken(req.body.user_id,req.body.user_id);
  //console.log(token)

  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const path = 'api/login';
  const method = 'POST';
  
  const text = 'select * from elayanan.get_login_web($1,$2,$3,$4,$5)';
  //console.log(text, [ip, path, method,req.body.userid,req.body.password]) 

  try {
    const { rows } = await db.query(text, [ip, path, method,req.body.userid,req.body.password]);
    if (!rows[0]) {
      return res.status(200).send({'RC': '02','message': 'Userid/Password Salah'});
    }
    const row = rows[0];
    //console(row.organisasi_id)

    const token = Helper.generateToken(row.user_id,row.user_kategori,row.organisasi_id);
    row.token = token;
    return res.status(200).send({ 'RC': '00','message':'Sukses',token });
  } catch(error) {
    return res.status(400).send(error)
  }
},
 async weblogin(req, res) {
  if (!req.body.userid || !req.body.password) {
    return res.status(400).send({'RC': '01','message': 'Userid/Password Tidak Boleh Kosong'});
  }
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const path = 'web/login';
  const method = 'POST';
    
  const text = 'select * from eoffice.get_login_web($1,$2,$3,$4,$5)';
  console.log(text, [ip, path, method,'login',JSON.stringify(req.body)]) 

  try {
    const { rows } = await db.query(text, [ip, path, method,'login',JSON.stringify(req.body)]) 
    if (!rows[0]) {
      return res.status(200).send({'RC': '02','message': 'Userid/Password Salah'});
    }
    
    //add by asep
    if(rows[0].data == null){
  //    return res.status(400).send(rows[0]);
  return res.status(200).send({ 'RC': rows[0].rc,'message': rows[0].message });
   
}
    if(rows[0].rc == '03'){
     return res.status(200).send({ 'RC': rows[0].rc,'message': rows[0].message });
    }
    //end

    const row = rows[0];    
    const data = row.data;

      // console.log(JSON.stringify(row.data.employee[0].nip))

     const token = Helper.generateToken(data.employee[0].nip,data.employee[0].unker_id,data.employee[0].jabatan_id,data.employee[0].nik,);
     data.token = token;
    return res.status(200).send({ 'RC': row.rc,'message':row.message,data });
  } catch(error) {
    return res.status(400).send(error)
  }
},
  async create(req, res) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/api/web/user/crud';
    const method = 'POST';
    const createQuery = `select * from eoffice.user_crud ($1,$2,$3,$4,$5::json)`;
    console.log(createQuery, [ip, path, method, 'web', JSON.stringify(req.body)]);
    try {
      const { rows, rowCount } = await db.query(createQuery, [ip, path, method, 'web', JSON.stringify(req.body)]);
      if (!rowCount) {
        return res.status(400).send({ 'RC': '05', 'message': 'Tidak Ada Data' });
      } else {
        var data = rows[0].data;
        console.log(data);
        if(rows[0].rc == '00'){
          return res.status(200).send({ 'RC': '00', 'message': 'Sukses', data });
        }
        else{
          return res.status(200).send({ 'RC': '03', 'message': 'Gagal', data });
        }
      }
    } catch (error) {
      //console.log(error);
      return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi Atau Data', error });
    }
  },
  async getUserPpk(req, res) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/api/web/user/crud';
    const method = 'POST';
    const createQuery = `select * from eoffice.user_crud ($1,$2,$3,$4,$5::json)`;

    console.log(createQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body)]);
      
    try {
      const { rows, rowCount } = await db.query(createQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body)]);
      if (!rowCount) {
        return res.status(400).send({ 'RC': '05', 'message': 'Tidak Ada Data' });
      } else {
        var data = rows[0].data;
        console.log(data);
        return res.status(200).send({ 'RC': '00', 'message': 'Sukses', data });
      }
    } catch (error) {
      //console.log(error);
      return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi Atau Data', error });
    }
  },
  /**
   * Delete A User
   * @param {object} req
   * @param {object} res
   * @returns {void} return status code 204
   */
  async delete(req, res) {
    const deleteQuery = 'DELETE FROM tbl_users WHERE id=$1 returning *';
    try {
      const { rows } = await db.query(deleteQuery, [req.user.nip]);
      if(!rows[0]) {
        return res.status(404).send({'message': 'User Not Found'});
      }
      return res.status(204).send({ 'message': 'Deleted' });
    } catch(error) {
      return res.status(400).send(error);
    }
  },
   validate(method) {
    // console.log(check)
    switch (method) {

      case 'login': {
        return [
          [check('userid').isLength({ min: 3 }).withMessage('Userid Minimal 3 Karakter'),
           check('userid').isLength({ max: 10 }).withMessage('Userid Maksimal 10 Karakter'),
          check('password').not().isEmpty().withMessage('Tidak Boleh Kosong')]
        ]
      }
    }
  },
  async crudRoleUser(req, res) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/api/web/master/role_user/crud';
    const method = 'POST';
    const findOneQuery = `select * from eoffice.role_user_crud  ($1,$2,$3,$4,$5::json)`;
    console.log(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body)]);
 //  console.log(req.user.nip);
    try {
      const { rows, rowCount } = await db.query(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body)]);
      if (!rowCount || rows[0].rc!='00') {
        return res.status(200).send({ 'RC': rows[0].rc, 'message': rows[0].message});
      } else {
        var data = rows[0].data;
        return res.status(200).send({ 'RC': '00', 'message': 'Sukses', data });
      }
    } catch (error) {
      console.log(error);
      return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi Atau Data', error });
    }
  },
  async crudRoleMenu(req, res) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/api/web/master/role_user/crud';
    const method = 'POST';
    const findOneQuery = `select * from eoffice.role_menu_crud  ($1::varchar,$2::varchar,$3::varchar,$4::varchar,$5::json)`;
    console.log(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body)]);
 //  console.log(req.user.nip);
    try {
      const { rows, rowCount } = await db.query(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body)]);
      if (!rowCount || rows[0].rc!='00') {
        return res.status(200).send({ 'RC': rows[0].rc, 'message': rows[0].message});
      } else {
        var data = rows[0].data;
        return res.status(200).send({ 'RC': '00', 'message': 'Sukses', data });
      }
    } catch (error) {
      console.log(error);
      return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi Atau Data', error });
    }
  },
};

export default User;
