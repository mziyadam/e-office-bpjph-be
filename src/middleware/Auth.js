import jwt, { decode } from 'jsonwebtoken';
import db from '../db';

const Auth = {
  /**
   * Verify Token
   * @param {object} req
   * @param {object} res
   * @param {object} next
   * @returns {object|void} response object
   */
 
 
  async verifyTokenWeb(req, res, next) {
    
    const token = req.headers['x-access-key'];
   // console.log(JSON.stringify(req.headers))
    if(!token) {
      return res.status(400).send({ 'RC':'02','message': 'API Key tidak ada' });
    }
    try {
      const decoded = await jwt.verify(token, process.env.SECRET);
    //console.log(decoded);

      const text = 'SELECT * FROM eoffice.users WHERE nip = $1';
     // console.log(decoded);

      const { rows } = await db.query(text, [decoded.userId]);
      if(!rows[0]) {
        return res.status(400).send({ 'RC':'03','message': 'API Key tidak valid' });
      }
       req.user = { nip: decoded.userId, satker_id:decoded.unkerId,  jabatan_id:decoded.jabatanId, nik:decoded.nik};
      //console.log(req.user);

      next();
    } catch(error) {
      return res.status(400).send(error);
    }
  } ,

}

export default Auth;
