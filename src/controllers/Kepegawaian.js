
import db from '../db';
import dotenv from 'dotenv';
dotenv.config();



const Kepegawaian = {
  async crudCuti(req, res) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/api/kepegawaian/crudCuti';
    const method = 'POST';
    const findOneQuery = `select * from eoffice.cuti_crud  ($1,$2,$3,$4,$5::json)`;
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


  async crudLapHarian(req, res) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/api/kepegawaian/crudLapHarian';
    const method = 'POST';
    const findOneQuery = `select * from eoffice.lap_harian_crud  ($1,$2,$3,$4,$5::json)`;
    console.log(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body)]);
    try {
      const { rows, rowCount } = await db.query(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body)]);
      if (!rowCount) {
        return res.status(400).send({ 'RC': '05', 'message': 'Tidak Ada Data' });
      } else {
        var data = rows[0].data;
        var data_pegawai = rows[0].data_pegawai;
        return res.status(200).send({ 'RC': '00', 'message': 'Sukses', data, data_pegawai });
      }
    } catch (error) {
      //console.log(error);
      return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi Atau Data', error });
    }
  },
  async crudLapHarianTTE(req, res) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/api/kepegawaian/crudLapHarianTTE';
    const method = 'POST';
    const findOneQuery = `select * from eoffice.lap_harian_tte_crud  ($1,$2,$3,$4,$5::json)`;
    console.log(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body)]);
    try {
      const { rows, rowCount } = await db.query(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body)]);
      if (!rowCount) {
        return res.status(400).send({ 'RC': '05', 'message': 'Tidak Ada Data' });
      } else {
        var data = rows[0].data;
         return res.status(200).send({ 'RC': rows[0].rc, 'message': rows[0].message, data,  });
      }
    } catch (error) {
      //console.log(error);
      return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi Atau Data', error });
    }
  },
  async getAbsensiTemp(req, res) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/api/kepegawaian/getAbsensiTemp';
    const method = 'POST';
    const findOneQuery = `select * from eoffice.absen_temp_get  ($1,$2,$3,$4,$5::json)`;
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
  async getAbsensiTemp_v2(req, res) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/api/kepegawaian/getAbsensiTemp';
    const method = 'POST';
    const findOneQuery = `select * from eoffice.absen_v2_temp_get  ($1,$2,$3,$4,$5::json)`;
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
  async crudAbsensi(req, res) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/api/kepegawaian/crudAbsensi';
    const method = 'POST';
    const findOneQuery = `select * from eoffice.absensi_crud  ($1,$2,$3,$4,$5::json)`;
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
  async crudAbsensiv2(req, res) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/api/kepegawaian/crudAbsensi';
    const method = 'POST';
    const findOneQuery = `select * from eoffice.absensi_crud_v2  ($1,$2,$3,$4,$5::json)`;
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
  async cekSaldoCuti(req, res) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/api/kepegawaian/cek_saldo_cuti';
    const method = 'POST';
    const findOneQuery = `select * from eoffice.cek_saldo_cuti  ($1,$2,$3,$4,$5::json)`;
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



  async crudSkpKpKgb(req, res) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/api/kepegawaian/crudSkpKpKgb';
    const method = 'POST';
    const findOneQuery = `select * from eoffice.skp_kp_kgb_crud  ($1,$2,$3,$4,$5::json)`;
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

  async crudUangMakan(req, res) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/api/kepegawaian/crudUangMakan';
    const method = 'POST';
    const findOneQuery = `select * from eoffice.uang_makan_crud  ($1,$2,$3,$4,$5::json)`;
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

  async getUangMakanTemp(req, res) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/api/kepegawaian/getUangMakanTemp';
    const method = 'POST';
    const findOneQuery = `select * from eoffice.uang_makan_temp_get  ($1,$2,$3,$4,$5::json)`;
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

  async crudTukin(req, res) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/api/kepegawaian/crudTukin';
    const method = 'POST';
    const findOneQuery = `select * from eoffice.tukin_crud  ($1,$2,$3,$4,$5::json)`;
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
  async crudLKHTarget(req, res) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/api/kepegawaian/lkh/target';
    const method = 'POST';
    const findOneQuery = `select * from eoffice.t_laporan_harian_target_crud  ($1,$2,$3,$4,$5::json)`;
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
  async crudLKHRealisasi(req, res) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/api/kepegawaian/lkh/realisasi';
    const method = 'POST';
    const findOneQuery = `select * from eoffice.t_laporan_harian_realisasi_crud  ($1,$2,$3,$4,$5::json)`;
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
  async crudKetidakhadiran(req, res) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/api/kepegawaian/ketidakhadiran';
    const method = 'POST';
    const findOneQuery = `select * from eoffice.t_laporan_absen_crud  ($1,$2,$3,$4,$5::json)`;
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
  async crudPengaduanAbsensi(req, res) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/api/kepegawaian/pengaduanAbsensi';
    const method = 'POST';
    const findOneQuery = `select * from eoffice.t_pengaduan_absen_crud  ($1,$2,$3,$4,$5::json)`;
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
  async crudCuti2(req, res) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/api/kepegawaian/cuti';
    const method = 'POST';
    const findOneQuery = `select * from eoffice.t_cuti_crud  ($1,$2,$3,$4,$5::json)`;
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
  async jenisCuti(req, res) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/api/kepegawaian/jenisCuti';
    const method = 'POST';
    const findOneQuery = `select * from eoffice.get_ddl_jenis_cuti2 ()`;
    console.log(findOneQuery);
    try {
      const { rows, rowCount } = await db.query(findOneQuery);
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
  async ddlJenisCuti(req, res) {
      /// ddl header untuk web
      // const findOneQuery = `select * from eoffice.get_ddl_pegawai($1)`;
      const findOneQuery = `select * from eoffice.get_ddl_jenis_cuti2 ()`;
     console.log(findOneQuery);
      try {
      const { rows, rowCount } = await db.query(findOneQuery);
      if (!rowCount) {
        return res.status(400).send({ 'RC': '05', 'message': 'Tidak Ada Data' });
      } else {
        return res.status(200).send({ 'RC': '00', 'message': 'Sukses', rows });
      }
    } catch (error) {
      //console.log(error);
      return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi Atau Data', error });
    }
  },
}
export default Kepegawaian;

