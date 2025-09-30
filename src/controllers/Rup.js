
import db from '../db';
import dotenv from 'dotenv';
dotenv.config();



const Rup = {
  async crudRup(req, res) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/api/web/rup/crud';
    const method = 'POST';
    const findOneQuery = `select * from eoffice.rup_crud  ($1,$2,$3,$4,$5::json)`;
    console.log(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body)]);
 //  console.log(req.user.nip);
    try {
      const { rows, rowCount } = await db.query(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body)]);
      if (!rowCount) {
        return res.status(400).send({ 'RC': '05', 'message': 'Tidak Ada Data' });
      } else {
        var data = rows[0].data;
        return res.status(200).send({ 'RC': '00', 'message': 'Sukses', data });
      }
    } catch (error) {
      //console.log(error);
      return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi Atau Data', error });
    }
  },
  async crudRup2(req, res) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/api/web/rup/crud';
    const method = 'POST';
    const findOneQuery = `select * from eoffice.rup_crud  ($1,$2,$3,$4,$5::json)`;
    console.log(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body)]);
 //  console.log(req.user.nip);

    try {
      //const { rows, rowCount } = await db.query(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify('{"tipe":"select-rup-all","id_rup":"31d823cd-e210-416a-bbfb-6521a159e9bf"}')]);
      const { rows, rowCount } = await db.query(findOneQuery, [ip, path, method, req.user.nip, req.body]);
      
      if (!rowCount) {
        return res.status(400).send({ 'RC': '05', 'message': 'Tidak Ada Data' });
      } else {
        var data = rows[0].data;
        return res.status(200).send({ 'RC': '00', 'message': 'Sukses', data });
      }
    } catch (error) {
      //console.log(error);
      return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi Atau Data', error });
    }
  },
  async getDetailDdl(req, res) {
    /// ddl header untuk web
    const findOneQuery = `select * from eoffice.ddl_detail($1::smallint)`;
    console.log(findOneQuery, [req.params.header_id]);
    try {
      const { rows, rowCount } = await db.query(findOneQuery, [req.params.header_id]);
      if (!rowCount) {
        return res.status(200).send({ 'RC': '05', 'message': 'Tidak ada Data' });
      } else {
        return res.status(200).send({ 'RC': '00', 'message': 'Sukses', rows });
      }
    } catch (error) {
      return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi atau Data', error });
    }
  },
  async getWilayahDdl(req, res) {
    /// ddl header untuk web
    const findOneQuery = `select * from eoffice.get_ddl_wilayah($1,$2)`;
    console.log(findOneQuery, [req.body.id_daerah, req.body.level]);
    try {
      const { rows, rowCount } = await db.query(findOneQuery, [req.body.id_daerah, req.body.level]);
      if (!rowCount) {
        return res.status(200).send({ 'RC': '05', 'message': 'Tidak ada Data' });
      } else {
        return res.status(200).send({ 'RC': '00', 'message': 'Sukses', rows });
      }
    } catch (error) {
      return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi atau Data', error });
    }
  },
  async getPengangkatanDdl(req, res) {
    /// ddl header untuk web
    const findOneQuery = `select * from eoffice.get_ddl_pengangkatan()`;
    //console.log(findOneQuery, [req.body.id_daerah, req.body.level]);
    try {
      const { rows, rowCount } = await db.query(findOneQuery);
      if (!rowCount) {
        return res.status(200).send({ 'RC': '05', 'message': 'Tidak ada Data' });
      } else {
        return res.status(200).send({ 'RC': '00', 'message': 'Sukses', rows });
      }
    } catch (error) {
      return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi atau Data', error });
    }
  },
  
  async getApprovalDdl(req, res) {
    /// ddl header untuk web
    var param = {
      type:'get_ddl_approval',
      id_rup: req.params.id_rup
    }
    const findOneQuery = `select * from eoffice.f_rup_approval('','','','',$1::json)`;
    console.log(findOneQuery, [param]);
    try {
      const { rows, rowCount } = await db.query(findOneQuery, [param]);
      if (!rowCount) {
        return res.status(200).send({ 'RC': '05', 'message': 'Tidak ada Data' });
      } else {
        var data = rows[0].data;
        return res.status(200).send({ 'RC': '00', 'message': 'Sukses', data });
      }
    } catch (error) {
      return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi atau Data', error });
    }
  },
  
  async changeStatus(req, res) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/api/web/rup/approval';
    const method = 'POST';
    const findOneQuery = `select * from eoffice.f_rup_approval  ($1,$2,$3,$4,$5::json)`;
    console.log(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body)]);
    //console.log(req.user);
    try {
      const { rows, rowCount } = await db.query(findOneQuery, [ip, path, method, req.user.nip, req.body]);
      if (!rowCount) {
        return res.status(400).send({ 'RC': '05', 'message': 'Tidak Ada Data' });
      } else {
        var data = rows[0].data;
        console.log(rows);
        return res.status(200).send({ 'RC': '00', 'message': 'Sukses', data });
      }
    } catch (error) {
      console.log(error);
      return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi Atau Data', error });
    }
  },
  async getPokjaDdl(req, res) {
    /// ddl header untuk web
    const findOneQuery = `select * from eoffice.get_ddl_pokja($1)`;
    console.log(findOneQuery, [ req.params.tahun]);
    try {
      const { rows, rowCount } = await db.query(findOneQuery, [req.params.tahun]);
      if (!rowCount) {
        return res.status(200).send({ 'RC': '05', 'message': 'Tidak ada Data' });
      } else {
        return res.status(200).send({ 'RC': '00', 'message': 'Sukses', rows });
      }
    } catch (error) {
      return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi atau Data', error });
    }
  },
  
  async getDashboardData(req, res) {
    /// ddl header untuk web
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/api/web/get_dashboard_data';
    const method = 'GET';
    const findOneQuery = `select * from eoffice.get_dashboard_data($1,$2,$3,$4)`;
    console.log(findOneQuery, [ip, path, method, req.user.nip]);
    try {
      const { rows, rowCount } = await db.query(findOneQuery, [ip, path, method, req.user.nip]);
      if (!rowCount) {
        return res.status(200).send({ 'RC': '05', 'message': 'Tidak ada Data' });
      } else {
        var data = JSON.parse(JSON.stringify(rows[0].data));
        return res.status(200).send({ 'RC': '00', 'message': 'Sukses', data });
      }
    } catch (error) {
      return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi atau Data', error });
    }
  },
  
  async getLokasiPekerjaanDdl(req, res) {
    /// ddl header untuk web
    const findOneQuery = `select * from eoffice.get_ddl_lokasi_rup($1)`;
    console.log(findOneQuery, [req.params.id_rup]);
    try {
      const { rows, rowCount } = await db.query(findOneQuery, [req.params.id_rup]);
      if (!rowCount) {
        return res.status(200).send({ 'RC': '05', 'message': 'Tidak ada Data' });
      } else {
        return res.status(200).send({ 'RC': '00', 'message': 'Sukses', rows });
      }
    } catch (error) {
      return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi atau Data', error });
    }
  },
}
export default Rup;

