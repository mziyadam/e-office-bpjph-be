
import db from '../db';
import dotenv from 'dotenv';
dotenv.config();



const Humas = {
  async crudAgendaPimpinan(req, res) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/api/humas/agenda_pimpinan/crud';
    const method = 'POST';
    const findOneQuery = `select * from eoffice.agenda_pimpinan_crud  ($1,$2,$3,$4,$5::json)`;
    console.log(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body)]);
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

  async dashboardAgendaPimpinan(req, res) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/api/humas/dashboard_agenda_pimpinan';
    const method = 'GET';
    const findOneQuery = `select * from eoffice.get_dashboard_agenda_pimpinan  ($1,$2,$3,$4)`;
    // console.log(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body)]);
    try {
      const { rows, rowCount } = await db.query(findOneQuery, [ip, path, method, req.user.nip]);
      if (!rowCount) {
        return res.status(400).send({ 'RC': '05', 'message': 'Tidak Ada Data' });
      } else {
        var data = rows[0].data;
        return res.status(200).send({ 'RC': rows[0].rc , 'message': rows[0].message, data });
      }
    } catch (error) {
      //console.log(error);
      return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi Atau Data', error });
    }
  },
}
export default Humas;

