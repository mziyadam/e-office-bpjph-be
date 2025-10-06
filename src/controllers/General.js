
import db from '../db';



const General = {
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
  async getWebTertujuDdl(req, res) {
    /// ddl header untuk web
    const findOneQuery = `select * from eoffice.get_ddl_tertuju()`;
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
  async getWebDetailDdl(req, res) {
    /// ddl header untuk web
    const findOneQuery = `select * from eoffice.ddl_detail($1::smallint)`;
    // console.log(findOneQuery, [req.params.header_id]);
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

  async getNextStatus(req, res) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/api/web/general/getNextStatus';
    const method = 'POST';
    const findOneQuery = `select * from eoffice.get_next_status  ($1,$2,$3)`;
    console.log(findOneQuery, [req.user.nip, req.params.status_id, req.params.type_surat]);
    try {
      const { rows, rowCount } = await db.query(findOneQuery, [req.user.nip, req.params.status_id, req.params.type_surat]);
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

  async getUnkerDdl(req, res) {
    /// ddl header untuk web
    const findOneQuery = `select * from eoffice.get_ddl_unker($1)`;
    //console.log(findOneQuery, [req.params.level_id]);
    try {
      const { rows, rowCount } = await db.query(findOneQuery, [req.params.level_id]);
      if (!rowCount) {
        return res.status(200).send({ 'RC': '05', 'message': 'Tidak ada Data' });
      } else {
        return res.status(200).send({ 'RC': '00', 'message': 'Sukses', rows });
      }
    } catch (error) {
      return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi atau Data', error });
    }
  },

  async getWebDetailDdlAll(req, res) {
    /// ddl header untuk web
    const findOneQuery = `select * from ddl_detail_all($1::smallint)`;
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
  async getWebHeaderDdl(req, res) {
    /// ddl header untuk web
    const findOneQuery = `select * from ddl_header()`;
    //console.log('inquiry pembayaran untuk nomor registrasi: ');
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
  async getWebDetailDdlLang(req, res) {
    /// ddl header untuk web
    const findOneQuery = `select * from ddl_detail($1::smallint,$2)`;
    console.log(findOneQuery, [req.params.header_id, req.params.lang]);
    try {
      const { rows, rowCount } = await db.query(findOneQuery, [req.params.header_id, req.params.lang]);
      if (!rowCount) {
        return res.status(200).send({ 'RC': '05', 'message': 'Tidak ada Data' });
      } else {
        return res.status(200).send({ 'RC': '00', 'message': 'Sukses', rows });
      }
    } catch (error) {
      return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi atau Data', error });
    }
  },
  async menuCrud(req, res) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/api/web/menu/';
    const method = 'POST';
    const findOneQuery = `select * from eoffice.menu_crud ($1,$2,$3,$4,$5)`;
    console.log(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body)]);
    try {
      const { rows, rowCount } = await db.query(findOneQuery, [ip, path, method, req.user.nip, req.body]);
      if (!rowCount) {
        return res.status(400).send({ 'RC': '05', 'message': 'Tidak Ada Data' });
      } else {
        let result = rows[0].data;
        result.unshift(
          {
            // "id": 600000,
            "icon": "fas fa-archive",
            "type": "group",
            "child": [
              {
                // "id": 602000,
                "icon": "far fa-user",
                "type": "collapse",
                "child": [
                  {
                    // "id": 602001,
                    "href": "/profil/riwayatUmumPegawai/",
                    "icon": "typcn typcn-media-record",
                    "type": "item",
                    "title": "Riwayat Umum Pegawai"
                  },
                  {
                    // "id": 602001,
                    "href": "/drh/Drh",
                    "icon": "typcn typcn-media-record",
                    "type": "item",
                    "title": "Data Riwayat Hidup"
                  },
                ],
                "title": "Profil",
                "translate": "PROFIL"
              },
              {
                // "id": 602000,
                "icon": "far fa-user",
                "type": "collapse",
                "child": [
                  {
                    // "id": 602002,
                    "href": "/profil/keluarga/suamiistri",
                    "icon": "typcn typcn-media-record",
                    "type": "item",
                    "title": "Suami / Istri"
                  },
                  {
                    // "id": 600001,
                    "href": "/profil/keluarga/anak",
                    "icon": "typcn typcn-media-record",
                    "type": "item",
                    "title": "Anak"
                  },
                ],
                "title": "Keluarga",
                "translate": "KELUARGA"
              },
              {
                // "id": 602000,
                "icon": "far fa-user",
                "type": "collapse",
                "child": [
                  {
                    // "id": 602002,
                    "href": "/profil/pendidikan/pendidikan",
                    "icon": "typcn typcn-media-record",
                    "type": "item",
                    "title": "Pendidikan"
                  },
                  {
                    // "id": 600001,
                    "href": "/profil/pendidikan/diklat",
                    "icon": "typcn typcn-media-record",
                    "type": "item",
                    "title": "Diklat"
                  },
                ],
                "title": "Pendidikan",
                "translate": "PENDIDIKAN"
              },
              {
                // "id": 602000,
                "icon": "far fa-user",
                "type": "collapse",
                "child": [
                  {
                    // "id": 602002,
                    "href": "/profil/pekerjaan/pangkat",
                    "icon": "typcn typcn-media-record",
                    "type": "item",
                    "title": "Pangkat"
                  },
                  {
                    // "id": 600001,
                    "href": "/profil/pekerjaan/jabatan",
                    "icon": "typcn typcn-media-record",
                    "type": "item",
                    "title": "Jabatan"
                  },
                  {
                    // "id": 602003,
                    "href": "/profil/pekerjaan/angka_kredit",
                    "icon": "typcn typcn-media-record",
                    "type": "item",
                    "title": "Angka Kredit"
                  },
                ],
                "title": "Pekerjaan",
                "translate": "PEKERJAAN"
              },
              {
                // "id": 602000,
                "icon": "far fa-user",
                "type": "collapse",
                "child": [
                  {
                    // "id": 602002,
                    "href": "/profil/pendukung/tanda_jasa",
                    "icon": "typcn typcn-media-record",
                    "type": "item",
                    "title": "Tanda Jasa"
                  },
                  {
                    // "id": 602002,
                    "href": "/profil/pendukung/pengalaman",
                    "icon": "typcn typcn-media-record",
                    "type": "item",
                    "title": "Pengalaman"
                  },
                  {
                    // "id": 602002,
                    "href": "/profil/pendukung/organisasi",
                    "icon": "typcn typcn-media-record",
                    "type": "item",
                    "title": "Organisasi"
                  },
                  {
                    // "id": 602002,
                    "href": "/profil/pendukung/karya_tulis",
                    "icon": "typcn typcn-media-record",
                    "type": "item",
                    "title": "Karya Tulis"
                  },
                  {
                    // "id": 602002,
                    "href": "/profil/pendukung/sertifikasi",
                    "icon": "typcn typcn-media-record",
                    "type": "item",
                    "title": "Sertifikasi"
                  },
                ],
                "title": "Pendukung",
                "translate": "PENDUKUNG"
              },
              {
                // "id": 602000,
                "icon": "far fa-user",
                "type": "collapse",
                "child": [
                  {
                    // "id": 602002,
                    "href": "/profil/kgb",
                    "icon": "typcn typcn-media-record",
                    "type": "item",
                    "title": "Riwayat KGB"
                  },
                ],
                "title": "KGB",
                "translate": "KGB"
              },
              {
                // "id": 602000,
                "icon": "far fa-user",
                "type": "collapse",
                "child": [
                  {
                    // "id": 602002,
                    "href": "/profil/kinerja/skp",
                    "icon": "typcn typcn-media-record",
                    "type": "item",
                    "title": "SKP"
                  },
                  // {
                  //   // "id": 602002,
                  //   "href": "/profil/kinerja/pkgpkp",
                  //   "icon": "typcn typcn-media-record",
                  //   "type": "item",
                  //   "title": "PKG / PKP"
                  // },
                  // {
                  //   // "id": 602002,
                  //   "href": "/profil/kinerja/penugasan",
                  //   "icon": "typcn typcn-media-record",
                  //   "type": "item",
                  //   "title": "Penugasan"
                  // },
                ],
                "title": "Kinerja",
                "translate": "KINERJA"
              }
            ],
            "title": "SIMPEG",
            "translate": "SIMPEG"
          },
        );
        if (req.body.role_id == '40') {
          result.unshift(
            {
              // "id": 600000,
              "icon": "fas fa-archive",
              "type": "group",
              "child": [
                {
                  // "id": 602000,
                  "icon": "far fa-user",
                  "type": "collapse",
                  "child": [
                    {
                      // "id": 602001,
                      "href": "/admin_pegawai/data_pegawai",
                      "icon": "typcn typcn-media-record",
                      "type": "item",
                      "title": "Admin Data Pegawai"
                    },
                    {
                      // "id": 602001,
                      "href": "/verif_pegawai/daftar_pegawai",
                      "icon": "typcn typcn-media-record",
                      "type": "item",
                      "title": "Verifikasi Pegawai"
                    },
                    {
                      // "id": 602001,
                      "href": "/statspegawai",
                      "icon": "typcn typcn-media-record",
                      "type": "item",
                      "title": "Statistik Pegawai"
                    },
                  ],
                  "title": "Data Pegawai",
                  "translate": "DATA PEGAWAI"
                },
                {
                  // "id": 602000,
                  "icon": "far fa-user",
                  "type": "collapse",
                  "child": [
                    {
                      // "id": 602001,
                      "href": "/admin_pegawai/data_pegawai",
                      "icon": "typcn typcn-media-record",
                      "type": "item",
                      "title": "Admin Data Pegawai"
                    },
                    {
                      // "id": 602001,
                      "href": "/verif_pegawai/daftar_pegawai",
                      "icon": "typcn typcn-media-record",
                      "type": "item",
                      "title": "Verifikasi Pegawai"
                    },
                    {
                      // "id": 602001,
                      "href": "/statspegawai",
                      "icon": "typcn typcn-media-record",
                      "type": "item",
                      "title": "Statistik Pegawai"
                    },
                  ],
                  "title": "Master Data",
                  "translate": "MASTER DATA"
                }
              ],
              "title": "Admin SIMPEG",
              "translate": "ADMIN SIMPEG"
            },
          );
        }
        return res.status(200).send({ 'RC': rows[0].rc, 'message': rows[0].message, 'data': result });
      }
    } catch (error) {
      return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi atau Data', error });
    }
  },

  async ubahPassword(req, res) {
    ///api/umrah/asuransi/pembayaran/{tanggal_awal}/{tanggal_akhir}/{page}
    //parameter_header_crud('10.100.88.14','general/header','Get','tambah','tes',null,'tesheader','tes header','ket','N','55')
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/api/web/ubahpassword';
    const method = 'POST';
    const findOneQuery = `select * from eoffice.users_changepassword($1,$2,$3,$4,$5,$6)`;
    console.log(findOneQuery, [ip, path, method, req.user.nip, req.body.password_baru, req.body.password_lama]);

    try {
      const { rows, rowCount } = await db.query(findOneQuery, [ip, path, method, req.user.nip, req.body.password_baru, req.body.password_lama]);
      if (!rowCount) {
        return res.status(400).send({ 'RC': '04', 'message': 'Proses Gagal' });
      } else {
        const message = rows[0].message;
        let data = [];
        data = rows[0].data;

        if (message === 'sukses') {
          return res.status(200).send({ 'RC': '00', 'message': 'sukses', rows });
        } else {
          return res.status(200).send({ 'RC': '05', 'message': message, rows });
        }
      }
    } catch (error) {
      return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi atau Data', error });
    }
  },
  async userForgotPassword(req, res) {
    ///api/umrah/asuransi/pembayaran/{tanggal_awal}/{tanggal_akhir}/{page}
    //parameter_header_crud('10.100.88.14','general/header','Get','tambah','tes',null,'tesheader','tes header','ket','N','55')
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/api/web/login/forgotpassword';
    const method = 'POST';
    const findOneQuery = `select * from eoffice.users_token_reset($1,$2,$3,$4,$5)`;
    console.log(findOneQuery, [ip, path, method, 'web', req.body]);

    try {
      const { rows, rowCount } = await db.query(findOneQuery, [ip, path, method, 'web', req.body]);
      if (!rowCount) {
        return res.status(400).send({ 'RC': '04', 'message': 'Proses Gagal' });
      } else {
        /*
        console.log(rows[0].data[0].email);
        console.log(rows[0].data[0].token_reset);
        console.log(rows[0].data[0].user_id);
        */

        //Sendnodeemails.send(res);
        var email_target = rows[0].data[0].email;
        var token_target = rows[0].data[0].token_reset;
        var user_target = rows[0].data[0].nip;
        var nama_target = rows[0].data[0].nama;

        var nodemailer = require('nodemailer');

        var kontenhtml = "<p>UKPBJ telah menerima permintaan untuk mereset password anda dengan keterangan sebagai berikut. <br><br> " +
          "<b>NIP: </b> " + user_target + "<br> <b>Nama: </b> " + nama_target + "<br> <b>Email: </b> " + email_target + " <br><br> " +
          "Bila permintaan ini benar, maka silahkan klik URL berikut untuk mengubah password yang baru. <br>" +
          req.body.baseurl + "/apps/users/resetPassword?token=" + token_target + "<br><br>" +
          "Bila bukan, maka silahkan acuhkan email ini.<br><br><b>Terimakasih</b><br><b>Admin UKPBJ</b></p>";
        var transporterProxy = nodemailer.createTransport({
          //  service: process.env.EMAIL_SERVICE,
          // type: process.env.EMAIL_TYPE,
          host: process.env.EMAIL_HOST,
          port: process.env.EMAIL_PORT,
          secure: false,
          //  service: "Outlook365",

          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
          },
          tls: {
            ciphers: 'SSLv3',
            rejectUnauthorized: false
          },
          //   debug: false,
          //   logger: true
        });


        var mailOptions = {
          from: process.env.EMAIL_USER,
          to: email_target,
          subject: "UKPBJ : Reset Password",
          html: kontenhtml
        };
        transporterProxy.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log(error);
            //  return res.status(400).send({ 'RC': '24', 'message': 'Gagal Kirim'});

          } else {
            console.log('Email sent: ' + info.response);
            //  return res.status(200).send({ 'RC': '00', 'message': 'berhasil' });

          }
        });


        return res.status(200).send({ 'RC': '00', 'message': 'Sukses', rows });
      }
    } catch (error) {
      return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi atau Data', error });
    }
  },

  async usersCrud(req, res) {
    /**
     * CREATE OR REPLACE FUNCTION elayanan.users_crud(
     * in_ip_address character varying, in_api_path character varying, in_api_method character varying, 
     * in_user_id character varying, in_sql_type character varying, in_id uuid, in_userid character varying, 
     * in_user_desc character varying, in_user_kategori character varying, in_organisasi_id character varying, 
     * in_password character varying, in_is_aktif character
     * 
     */
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/api/web/pusat/master/usermanagement';
    const method = 'POST';
    const findOneQuery = `select * from eoffice.user_crud($1,$2,$3,$4,$5)`;

    console.log(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body)]);

    try {
      const { rows, rowCount } = await db.query(findOneQuery, [ip, path, method, req.user.nip, req.body]);
      if (!rowCount) {
        return res.status(200).send({ 'RC': '05', 'message': 'Tidak ada Data' });
      } else {
        return res.status(200).send({ 'RC': '00', 'message': 'Sukses', rows });
      }
    } catch (error) {
      return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi Atau Data', error });
    }
  },
  async getLaporanGeneral(req, res) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/api/kepegawaian/rekapUangMakan';
    const method = 'POST';
    const findOneQuery = `select * from eoffice.get_laporan_general  ($1,$2,$3,$4,$5::json)`;
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


}
export default General;

