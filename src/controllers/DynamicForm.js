
import db from '../db';



const DynamicForm = {  
  async getFormFields(req, res) {
    /// ddl header untuk web
	const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/api/web/general/getformfields';
    const method = 'GET';    
    const findOneQuery = `select * from elayanan_form_get_fields($1,$2,$3,$4,$5,$6,$7, $8)`;
    console.log(findOneQuery, [ip, path, method, req.user.nip, req.params.type, req.params.parent_id, req.params.bahasa, req.params.registrasi_id  ]);
    try {
      const { rows, rowCount } = await db.query(findOneQuery, [ip, path, method, req.user.nip, req.params.type, req.params.parent_id, req.params.bahasa, req.params.registrasi_id]);
      if (!rowCount) {
        return res.status(200).send({ 'RC': '05', 'message': 'Tidak ada Data' });
      } else {
        return res.status(200).send({ 'RC': '00', 'message': 'Sukses', rows });
      }
    } catch (error) {
      return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi atau Data', error });
    }
  },
  async crudDynamicData(req, res) {
    /// ddl header untuk web
	const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/api/web/general/getformfields';
    const method = 'GET';    
    const findOneQuery = `select * from elayanan_crud_vue_dynamic_form_data($1,$2,$3,$4,$5::int,$6,$7::json,$8)`;
    //console.log([ip, path, method, 'test', req.params.type, req.params.parent_id]);
    try {
      const { rows, rowCount } = await db.query(findOneQuery, [ip, path, method, req.user.nip, req.body.tipe, req.body.id,req.body.data,req.body.is_complete]);
      if (!rowCount) {
        return res.status(200).send({ 'RC': '05', 'message': 'Tidak ada Data' });
      } else {
        return res.status(200).send({ 'RC': '00', 'message': 'Sukses', rows });
      }
    } catch (error) {
		console.log(error);
      return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi atau Data', error });
    }
  },
  async getDynamicData(req, res) {
    /// ddl header untuk web 
	const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/api/web/general/getDynamicData/:type/:parent_id';
    const method = 'GET';    
    const findOneQuery = `select * from elayanan_get_vue_dynamic_form_model_data($1,$2,$3,$4,$5,$6,$7)`;
    console.log(findOneQuery, [ip, path, method, req.user.nip, req.params.type, req.params.parent_id, req.params.bahasa]);
    try {
      const { rows, rowCount } = await db.query(findOneQuery, [ip, path, method, req.user.nip, req.params.type, req.params.parent_id, req.params.bahasa]);
      if (!rowCount) {
        return res.status(200).send({ 'RC': '05', 'message': 'Tidak ada Data' });
      } else {
        return res.status(200).send({ 'RC': '00', 'message': 'Sukses', rows });
      }
    } catch (error) {
      return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi atau Data', error });
    }
  },
  async tahap_get_status(req, res) {
    /// ddl header untuk web 
	const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/api/web/pusat/tahap_get_status/:no_registrasi/:tahap_id';
    const method = 'GET';    
    const findOneQuery = `select * from elayanan.tahap_get_status($1::varchar,$2::varchar,$3::varchar,$4::varchar,$5::uuid,$6::integer)`;
    console.log(findOneQuery, [ip, path, method, req.user.nip, req.params.no_registrasi, req.params.tahap_id]);
    try {
      const { rows, rowCount } = await db.query(findOneQuery, [ip, path, method, req.user.nip, req.params.no_registrasi, req.params.tahap_id]);
      if (!rowCount) {
        return res.status(200).send({ 'RC': '05', 'message': 'Tidak ada Data' });
      } else {
        return res.status(200).send({ 'RC': '00', 'message': 'Sukses', rows });
      }
    } catch (error) {
      return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi atau Data', error });
    }
  },
  async tahap_update_status(req, res) {
    /// ddl header untuk web
	const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/api/web/pusat/tahap_update_status/';
    const method = 'GET';    
    const findOneQuery = `select * from elayanan.tahap_update_status($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)`;
    console.log(findOneQuery, [ip, path, method, req.user.nip, 'Update', req.body.no_registrasi,req.body.tahap_id,req.body.id_status, req.body.scan_file, req.body.nama_file, req.body.keterangan, req.body.keterangan_en, req.body.keterangan_sa]);
    try {
      const { rows, rowCount } = await db.query(findOneQuery, [ip, path, method, req.user.nip, 'Update', req.body.no_registrasi,req.body.tahap_id,req.body.id_status, req.body.scan_file, req.body.nama_file, req.body.keterangan, req.body.keterangan_en, req.body.keterangan_sa]);
      if (!rowCount) {
        return res.status(200).send({ 'RC': '05', 'message': 'Tidak ada Data' });
      } else {
        return res.status(200).send({ 'RC': '00', 'message': 'Sukses', rows });
      }
    } catch (error) {
		console.log(error);
      return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi atau Data', error });
    }
  },
  async vendor_kirim_penawaran(req, res) {
    /// ddl header untuk web
	const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/api/web/general/getformfields';
    const method = 'GET';    
    const findOneQuery = `select * from elayanan.vendor_kirim_penawaran($1,$2,$3,$4,$5,$6,$7)`;
    console.log(findOneQuery, [ip, path, method, req.user.nip, 'Kirim Penawaran', req.body.registrasi_id,req.body.lang]);
    try {
      const { rows, rowCount } = await db.query(findOneQuery, [ip, path, method, req.user.nip, 'Kirim Penawaran', req.body.registrasi_id,req.body.lang]);
      if (!rowCount) {
        return res.status(200).send({ 'RC': '05', 'message': 'Tidak ada Data' });
      } else {
        return res.status(200).send({ 'RC': '00', 'message': 'Sukses', rows });
      }
    } catch (error) {
		console.log(error);
      return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi atau Data', error });
    }
  },
  async tahap_draft_status(req, res) {
    /// ddl header untuk web
	const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/api/web/pusat/tahap_draft_status/';
    const method = 'GET';    
    const findOneQuery = `select * from elayanan.draft_update_status($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)`;
    console.log(findOneQuery, [ip, path, method, req.user.nip, 'Update', req.body.no_registrasi,req.body.tahap_id,req.body.id_status, req.body.scan_file, req.body.nama_file, req.body.keterangan, req.body.keterangan_en, req.body.keterangan_sa]);
    try {
      const { rows, rowCount } = await db.query(findOneQuery, [ip, path, method, req.user.nip, 'Update', req.body.no_registrasi,req.body.tahap_id,req.body.id_status, req.body.scan_file, req.body.nama_file, req.body.keterangan, req.body.keterangan_en, req.body.keterangan_sa]);
      if (!rowCount) {
        return res.status(200).send({ 'RC': '05', 'message': 'Tidak ada Data' });
      } else {
        return res.status(200).send({ 'RC': '00', 'message': 'Sukses', rows });
      }
    } catch (error) {
		console.log(error);
      return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi atau Data', error });
    }
  },
}
export default DynamicForm;
