
import db from '../db';

var buster = require('buster');
var XlsxTemplate = require('../template/lib');
var fs = require('fs');
var pathtemp = require('path');
var etree = require('elementtree');



const Admin = {
  /**
   * Input Paket PPIU
   * @param {object} req
   * @param {object} res
   * @returns {object} data pergerakan jemaah
   */


  async getMenu(req, res) {
    const getMenuQuery = `select * from get_menu($1,$2)`;
    const getChildMenuQuery = `select * from get_child_menu($1,$2)`;
    try {
      const { rows, rowCount } = await db.query(getMenuQuery, [req.params.user_kategori, req.params.lang]);
      var i = 0;
      if (!rowCount) {
        return res.status(400).send({ 'RC': '04', 'message': 'Proses Gagal' });
      } else {
        const menu = rows;
        const rowsParentCount = rowCount;
        while (i < rowsParentCount) {
          const { rows, rowCount } = await db.query(getChildMenuQuery, [menu[i].id_menu, req.params.lang]);
          if (rowCount && rowCount > 0) {
            //console.log(rows);
            menu[i].items = rows;
          }
          i = i + 1;

        }
        return res.status(200).send({ 'RC': '00', 'message': 'Sukses', menu });
      }

    } catch (error) {
      return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi atau Data', error });
    }
  },
  async getAllowedPage(req, res) {
    const getMenuQuery = `select * from get_allowed_page($1)`;
    try {
      const { rows, rowCount } = await db.query(getMenuQuery, [req.params.user_kategori]);
      var i = 0;
      if (!rowCount) {
        return res.status(400).send({ 'RC': '04', 'message': 'Proses Gagal' });
      } else {
        const allowedpage = rows;
        return res.status(200).send({ 'RC': '00', 'message': 'Sukses', allowedpage });
      }

    } catch (error) {
      return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi atau Data', error });
    }
  },
  

  async crudUnker(req, res) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/api/web/master/unker';
    const method = 'POST';
    const findOneQuery = `select * from eoffice.unker_crud  ($1,$2,$3,$4,$5::json)`;
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
  async crudPokja(req, res) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/api/web/master/pokja/crud';
    const method = 'POST';
    const findOneQuery = `select * from eoffice.t_pokja_crud  ($1,$2,$3,$4,$5::json)`;
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
  async crudPokjaAnggota(req, res) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/api/web/master/pokjaanggota/crud';
    const method = 'POST';
    const findOneQuery = `select * from eoffice.t_pokja_anggota_crud  ($1,$2,$3,$4,$5::json)`;
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
  async crudParameterHeader(req, res) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/api/general/crudHeaders';
    const method = 'POST';
    const findOneQuery = `select * from eoffice.parameter_header_crud  ($1,$2,$3,$4,$5::json)`;
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
  async crudParameterDetail(req, res) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/api/general/crudDetails';
    const method = 'POST';
    const findOneQuery = `select * from eoffice.parameter_detail_crud  ($1,$2,$3,$4,$5::json)`;
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
  async crudSetting(req, res) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/api/web/master/satker';
    const method = 'POST';
    const findOneQuery = `select * from eoffice.setting_crud  ($1,$2,$3,$4,$5::json)`;
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
  async getSatkerDdl(req, res) {
    /// ddl header untuk web
    const findOneQuery = `select * from eoffice.get_ddl_satker($1::json)`;
    console.log(findOneQuery, [req.body]);
    try {
      const { rows, rowCount } = await db.query(findOneQuery, [req.body]);
      if (!rowCount) {
        return res.status(200).send({ 'RC': '05', 'message': 'Tidak ada Data' });
      } else {
        return res.status(200).send({ 'RC': '00', 'message': 'Sukses', rows });
      }
    } catch (error) {
      return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi atau Data', error });
    }
  },
  async getPegawaiDdl(req, res) {
    /// ddl header untuk web
    // const findOneQuery = `select * from eoffice.get_ddl_pegawai($1)`;
    const findOneQuery = `select * from eoffice.get_ddl_pegawai($1::smallint)`;
   console.log(findOneQuery, [req.params.eselon_level]);
    try {
      // const { rows, rowCount } = await db.query(findOneQuery, [req.params.jabatan_id]);
      const { rows, rowCount } = await db.query(findOneQuery, [req.params.eselon_level]);
      if (!rowCount) {
        return res.status(200).send({ 'RC': '05', 'message': 'Tidak ada Data' });
      } else {
        return res.status(200).send({ 'RC': '00', 'message': 'Sukses', rows });
      }
    } catch (error) {
      return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi atau Data', error });
    }
  },
  async getPegawaiDdl2(req, res) {
    /// ddl header untuk web
    // const findOneQuery = `select * from eoffice.get_ddl_pegawai($1)`;
    const findOneQuery = `select * from eoffice.get_ddl_pegawai2($1::smallint)`;
   //console.log(findOneQuery, [req.params.eselon_level]);
    try {
      // const { rows, rowCount } = await db.query(findOneQuery, [req.params.jabatan_id]);
      const { rows, rowCount } = await db.query(findOneQuery, [req.params.eselon_level]);
      if (!rowCount) {
        return res.status(200).send({ 'RC': '05', 'message': 'Tidak ada Data' });
      } else {
        return res.status(200).send({ 'RC': '00', 'message': 'Sukses', rows });
      }
    } catch (error) {
      return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi atau Data', error });
    }
  },
  async crudMenu(req, res) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/api/admin/crudMenu';
    const method = 'POST';
    const findOneQuery = `select * from eoffice.menu_crud  ($1::varchar,$2,$3,$4,$5::json)`;
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
  
  async crudTemplateIsiSurat(req, res) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/api/admin/surat/template';
    const method = 'POST';
    const findOneQuery = `select * from eoffice.template_isi_surat_crud  ($1,$2,$3,$4,$5::json)`;
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

  async crudRoleUser(req, res) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/api/admin/role_user/crud';
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
    const path = '/api/admin/role_user/crud';
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
  async crudProdukHukum(req, res) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/api/admin/crudProdukHukum';
    const method = 'POST';
    const findOneQuery = `select * from eoffice.m_produk_hukum_crud  ($1::varchar,$2,$3,$4,$5::json)`;
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

  async crudHariLibur(req, res) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/api/admin/crudHariLibur';
    const method = 'POST';
    const findOneQuery = `select * from eoffice.harilibur_crud  ($1::varchar,$2,$3,$4,$5::json)`;
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

  async crudJenisCuti(req, res) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/api/admin/crudJenisCuti';
    const method = 'POST';
    const findOneQuery = `select * from eoffice.m_jenis_cuti_crud  ($1::varchar,$2,$3,$4,$5::json)`;
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
  async crudKelasJabatan (req, res) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/api/admin/crudKelasJabatan';
    const method = 'POST';
    const findOneQuery = `select * from eoffice.m_kelas_jabatan_crud  ($1,$2,$3,$4,$5::json)`;
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
  async crudPegawai (req, res) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/api/admin/crudPegawai';
    const method = 'POST';
    const findOneQuery = `select * from eoffice.pegawai_crud ($1,$2,$3,$4,$5::json)`;
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
  async crudUnitKerjaPegawai (req, res) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/api/admin/crudUnitKerjaPegawai';
    const method = 'POST';
    const findOneQuery = `select * from eoffice.m_unit_kerja_pegawai_crud ($1,$2,$3,$4,$5::json)`;
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
  async getTTEDdl(req, res) {
    /// ddl header untuk web
    // const findOneQuery = `select * from eoffice.get_ddl_pegawai($1)`;
    const findOneQuery = `select * from eoffice.get_ddl_tte()`;
   console.log(findOneQuery );
    try {
      // const { rows, rowCount } = await db.query(findOneQuery, [req.params.jabatan_id]);
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
  async crudJenisCuti2(req, res) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/api/admin/crudJenisCuti2';
    const method = 'POST';
    const findOneQuery = `select * from eoffice.m_jenis_cuti_crud  ($1::varchar,$2,$3,$4,$5::json)`;
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

  async crudMesinError(req, res) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/api/admin/crudMesinError';
    const method = 'POST';
    const findOneQuery = `select * from eoffice.mesin_rusak_crud  ($1::varchar,$2,$3,$4,$5::json)`;
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
 
}
export default Admin;
