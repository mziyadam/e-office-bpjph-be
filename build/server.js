"use strict";

var _dotenv = _interopRequireDefault(require("dotenv"));
require("babel-polyfill");
var _User = _interopRequireDefault(require("./controllers/User"));
var _Auth = _interopRequireDefault(require("./middleware/Auth"));
var _Key = _interopRequireDefault(require("./middleware/Key"));
var _General = _interopRequireDefault(require("./controllers/General"));
var _Admin = _interopRequireDefault(require("./controllers/Admin"));
var _Upload = _interopRequireDefault(require("./controllers/Upload"));
var _DocX = _interopRequireDefault(require("./controllers/DocX"));
var _XlsX = _interopRequireDefault(require("./controllers/XlsX"));
var _Humas = _interopRequireDefault(require("./controllers/Humas"));
var _Kepegawaian = _interopRequireDefault(require("./controllers/Kepegawaian"));
var _Surat = _interopRequireDefault(require("./controllers/Surat"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// server.js
// import express from 'express';

// import cors from 'cors';

//import PrintCard from './controllers/PrintCard';
//import { pdfMake } from 'pdfmake/build/vfs_fonts';
//import PdfMake from './controllers/PdfMake';

//import Gis from './controllers/Gis';
//import Report from './controllers/Report';
// import Rup from './controllers/Rup';

var Multer = require("multer");
var maxSize = 110971520;
var cors = require('cors');
_dotenv["default"].config();
var express = require('express');
var app = express();

/* const corsOptions = {
  origin: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  preflightContinue: true,
  maxAge: 600,
};
app.options('*', cors(corsOptions));
app.use(cors(corsOptions))
 */

var allowedOrigins = ['http://localhost:3000', 'http://localhost:3031', 'http://localhost:3003', 'http://172.23.3.39', 'https://eoffice.halal.go.id', 'http://192.168.100.155:3000', 'https://eoffice.halal.go.id/apps/users/login'];
app.use(cors({
  origin: function origin(_origin, callback) {
    // allow requests with no origin 
    // (like mobile apps or curl requests)
    if (!_origin) return callback(null, true);
    if (allowedOrigins.indexOf(_origin) === -1) {
      var msg = 'dilarang  masuk';
      console.log('origin: ', _origin);
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true
}));

//app.use(express.json());
app.use(express.json({
  limit: '50mb'
}));
app.use(express.urlencoded({
  limit: '50mb'
}));

// expres validator
//const { check, validationResult } = require('express-validator/check');

// enable cors
//app.use(cors());
// app.options('*', cors())

app.get('/api/', function (req, res) {
  return res.status(200).send({
    'message': process.env.API_NAME
  });
});

//app.get('/api/general/get_header', Key.verifyKeyGeneral, General.getHeader);
//app.get('/api/general/get_detail/:header_id', Key.verifyKeyGeneral, General.getDetail);

app.post('/api/web/login', _Key["default"].verifyKeyWeb, _User["default"].weblogin);
app.post('/api/web/menu', _Auth["default"].verifyTokenWeb, _General["default"].menuCrud);

// APi ADMIN PUSAT
app.post('/api/admin/crudHeaders', _Auth["default"].verifyTokenWeb, _Admin["default"].crudParameterHeader);
app.post('/api/admin/crudDetails', _Auth["default"].verifyTokenWeb, _Admin["default"].crudParameterDetail);
app.post('/api/admin/crudSetting', _Auth["default"].verifyTokenWeb, _Admin["default"].crudSetting);
app.post('/api/admin/crudUnker', _Auth["default"].verifyTokenWeb, _Admin["default"].crudUnker);
app.post('/api/admin/surat/template', _Auth["default"].verifyTokenWeb, _Admin["default"].crudTemplateIsiSurat);
app.get('/api/admin/get_ddl_pegawai/:eselon_level', _Auth["default"].verifyTokenWeb, _Admin["default"].getPegawaiDdl);
app.get('/api/admin/get_ddl_pegawai2/:eselon_level', _Auth["default"].verifyTokenWeb, _Admin["default"].getPegawaiDdl2);
app.get('/api/admin/get_ddl_tte', _Auth["default"].verifyTokenWeb, _Admin["default"].getTTEDdl);
app.post('/api/admin/crudMenu', _Auth["default"].verifyTokenWeb, _Admin["default"].crudMenu);
app.post('/api/admin/role_user/crud', _Auth["default"].verifyTokenWeb, _Admin["default"].crudRoleUser);
app.post('/api/admin/crudProdukHukum', _Auth["default"].verifyTokenWeb, _Admin["default"].crudProdukHukum);
app.post('/api/admin/crudHariLibur', _Auth["default"].verifyTokenWeb, _Admin["default"].crudHariLibur);
app.post('/api/admin/crudJenisCuti', _Auth["default"].verifyTokenWeb, _Admin["default"].crudJenisCuti);
app.post('/api/admin/crudKelasJabatan', _Auth["default"].verifyTokenWeb, _Admin["default"].crudKelasJabatan);
app.post('/api/admin/crudPegawai', _Auth["default"].verifyTokenWeb, _Admin["default"].crudPegawai);
app.post('/api/admin/crudUnitKerjaPegawai', _Auth["default"].verifyTokenWeb, _Admin["default"].crudUnitKerjaPegawai);
app.post('/api/admin/role_menu/crud', _Auth["default"].verifyTokenWeb, _Admin["default"].crudRoleMenu);
app.post('/api/admin/crudMesinError', _Auth["default"].verifyTokenWeb, _Admin["default"].crudMesinError);

//kehumasan
app.post('/api/humas/agendaPimpinan', _Auth["default"].verifyTokenWeb, _Humas["default"].crudAgendaPimpinan);
app.get('/api/humas/dashboardAgendaPimpinan', _Auth["default"].verifyTokenWeb, _Humas["default"].dashboardAgendaPimpinan);

//kepegawaian
app.post('/api/kepegawaian/crudCuti', _Auth["default"].verifyTokenWeb, _Kepegawaian["default"].crudCuti);
app.post('/api/kepegawaian/crudLapHarian', _Auth["default"].verifyTokenWeb, _Kepegawaian["default"].crudLapHarian);
app.post('/api/kepegawaian/crudLapHarianTTE', _Auth["default"].verifyTokenWeb, _Kepegawaian["default"].crudLapHarianTTE);
app.post('/api/kepegawaian/cetakRekapLapHarian', _Auth["default"].verifyTokenWeb, _XlsX["default"].cetakRekapLapHarian);
app.post('/api/kepegawaian/crudAbsensi', _Auth["default"].verifyTokenWeb, _Kepegawaian["default"].crudAbsensiv2);
app.post('/api/kepegawaian/cetakRekapAbsensi', _Auth["default"].verifyTokenWeb, _XlsX["default"].cetakRekapAbsensi);
app.post('/api/kepegawaian/cetakRekapTukin', _Auth["default"].verifyTokenWeb, _XlsX["default"].cetakRekapTukin);
app.post('/api/kepegawaian/cetakRekapUangMakan', _Auth["default"].verifyTokenWeb, _XlsX["default"].cetakRekapUangMakan);
app.post('/api/kepegawaian/cetakRekapAbsensiPegawai', _Auth["default"].verifyTokenWeb, _XlsX["default"].cetakRekapAbsensiPegawai);
app.post('/api/kepegawaian/cetakRekapAbsensiPegawaiTukin', _Auth["default"].verifyTokenWeb, _XlsX["default"].cetakRekapAbsensiPegawaiTukin);
app.post('/api/kepegawaian/cetakRekapAbsensiPegawaiUangMakan', _Auth["default"].verifyTokenWeb, _XlsX["default"].cetakRekapAbsensiPegawaiUangMakan);
app.get('/api/kepegawaian/absensi/export', _Auth["default"].verifyTokenWeb, _XlsX["default"].getUploadTemplateAbsensi);
app.post('/api/kepegawaian/absensi/import', _Auth["default"].verifyTokenWeb, _XlsX["default"].postImportDataAbsensi);
app.post('/api/kepegawaian/get_absensi_temp', _Auth["default"].verifyTokenWeb, _Kepegawaian["default"].getAbsensiTemp_v2);
app.post('/api/kepegawaian/cek_saldo_cuti', _Auth["default"].verifyTokenWeb, _Kepegawaian["default"].cekSaldoCuti);
app.post('/api/kepegawaian/cetakRekapUangMakan', _Auth["default"].verifyTokenWeb, _XlsX["default"].cetakRekapUangMakan);
app.post('/api/kepegawaian/cetakRekapTukin', _Auth["default"].verifyTokenWeb, _XlsX["default"].cetakRekapTukin);
app.post('/api/kepegawaian/crudSkpKpKgb', _Auth["default"].verifyTokenWeb, _Kepegawaian["default"].crudSkpKpKgb);
app.post('/api/kepegawaian/crudUangMakan', _Auth["default"].verifyTokenWeb, _Kepegawaian["default"].crudUangMakan);
app.post('/api/kepegawaian/get_uang_makan_temp', _Auth["default"].verifyTokenWeb, _Kepegawaian["default"].getUangMakanTemp);
app.get('/api/kepegawaian/uang_makan/export', _Auth["default"].verifyTokenWeb, _XlsX["default"].getUploadTemplateUangMakan);
app.post('/api/kepegawaian/uang_makan/import', _Auth["default"].verifyTokenWeb, _XlsX["default"].postImportDataUangMakan);
app.post('/api/kepegawaian/crudTukin', _Auth["default"].verifyTokenWeb, _Kepegawaian["default"].crudTukin);
app.get('/api/kepegawaian/tukin/export', _Auth["default"].verifyTokenWeb, _XlsX["default"].getUploadTemplateTukin);
app.post('/api/kepegawaian/tukin/import', _Auth["default"].verifyTokenWeb, _XlsX["default"].postImportDataTukin);
// lkh
app.post('/api/kepegawaian/lkh/target', _Auth["default"].verifyTokenWeb, _Kepegawaian["default"].crudLKHTarget);
app.post('/api/kepegawaian/lkh/realisasi', _Auth["default"].verifyTokenWeb, _Kepegawaian["default"].crudLKHRealisasi);
app.post('/api/kepegawaian/lkh/target/cetak', _Auth["default"].verifyTokenWeb, _DocX["default"].cetakLkhTarget);
app.post('/api/kepegawaian/lkh/realisasi/cetak', _Auth["default"].verifyTokenWeb, _DocX["default"].cetakLkhRealisasi);

//ketidakhardiran
app.post('/api/kepegawaian/ketidakhadiran', _Auth["default"].verifyTokenWeb, _Kepegawaian["default"].crudKetidakhadiran);

//pengaduan Absensi
app.post('/api/kepegawaian/pengaduanAbsensi', _Auth["default"].verifyTokenWeb, _Kepegawaian["default"].crudPengaduanAbsensi);
app.post('/api/kepegawaian/cetakRekapAbsensi', _Auth["default"].verifyTokenWeb, _XlsX["default"].cetakRekapUangMakan);

//Cuti v2
app.post('/api/kepegawaian/cuti', _Auth["default"].verifyTokenWeb, _Kepegawaian["default"].crudCuti2);
app.post('/api/kepegawaian/jenisCuti', _Auth["default"].verifyTokenWeb, _Kepegawaian["default"].jenisCuti);
app.get('/api/kepegawaian/ddljenisCuti', _Auth["default"].verifyTokenWeb, _Kepegawaian["default"].ddlJenisCuti);
app.post('/api/admin/crudJenisCuti2', _Auth["default"].verifyTokenWeb, _Admin["default"].crudJenisCuti2);

//API GENERAL
app.get('/api/web/general/get_ddl_detail/:header_id', _Auth["default"].verifyTokenWeb, _General["default"].getWebDetailDdl);
app.get('/api/web/general/get_ddl_tertuju', _Auth["default"].verifyTokenWeb, _General["default"].getWebTertujuDdl);
app.get('/api/web/general/get_next_status/:status_id/:type_surat', _Auth["default"].verifyTokenWeb, _General["default"].getNextStatus);
app.get('/api/web/general/get_ddl_unker/:level_id', _Auth["default"].verifyTokenWeb, _General["default"].getUnkerDdl);
app.post('/api/web/laporan/general', _Auth["default"].verifyTokenWeb, _General["default"].getLaporanGeneral);

//template surat
app.post('/api/surat/template_isi_surat_crud', _Auth["default"].verifyTokenWeb, _DocX["default"].crudTemplateIsiSurat);
app.post('/api/surat/surat_tugas', _Auth["default"].verifyTokenWeb, _DocX["default"].cetakSuratTugas2);

//surat
app.post('/api/surat/suratTugas', _Auth["default"].verifyTokenWeb, _Surat["default"].crudSuratTugas);
app.post('/api/surat/notaDinas', _Auth["default"].verifyTokenWeb, _Surat["default"].crudNotaDinas);
app.post('/api/surat/suratKeluar', _Auth["default"].verifyTokenWeb, _Surat["default"].crudSuratKeluar);
app.post('/api/surat/suratMasuk', _Auth["default"].verifyTokenWeb, _Surat["default"].crudSuratMasuk);
app.post('/api/surat/surat_keluar/approval', _Auth["default"].verifyTokenWeb, _Surat["default"].changeStatus);
app.post('/api/surat/nota_dinas/approval', _Auth["default"].verifyTokenWeb, _Surat["default"].changeStatusND);
app.get('/api/surat/get_ddl_approval/:type_surat/:id_surat', _Auth["default"].verifyTokenWeb, _Surat["default"].getApprovalDdl);
app.post('/api/surat/suratlainnya', _Auth["default"].verifyTokenWeb, _Surat["default"].crudSuratLainya);

// tte
app.post('/api/surat/tte', _Auth["default"].verifyTokenWeb, _Surat["default"].crudTTE);
app.post('/api/surat/tte/suratTugas/proses', _Auth["default"].verifyTokenWeb, _DocX["default"].generateSuratTugasTTE, _Surat["default"].crudTTE);

//app.post('/api/surat/tte/proses',  Auth.verifyTokenWeb, Surat.getSuratFile,Surat.SignTTE,Surat.uploadTTE,  Surat.crudTTE);
app.post('/api/surat/tte/proses2', _Auth["default"].verifyTokenWeb, _Surat["default"].getSuratFile, _Surat["default"].StoreFileTTE, _Surat["default"].SignFilePassphraseTTE, _Surat["default"].uploadTTEMinio, _Surat["default"].crudTTE);
//bssm
app.post('/api/surat/tte/proses', _Auth["default"].verifyTokenWeb, _Surat["default"].getSuratFileBSSNV2, _Surat["default"].modifyPdf, _Surat["default"].SignTTEBSSNV2, _Surat["default"].uploadTTE, _Surat["default"].crudTTE);
//app.post('/api/surat/tte/paraf',  Auth.verifyTokenWeb, Surat.getSuratFileBSSN,Surat.ParafTTEBSSN,Surat.uploadTTE,  Surat.crudTTE);

app.get('/api/surat/tte/verifikasi/:token', _Surat["default"].getPath, _Upload["default"].downloadVerif);

// Upload
app.post("/api/minio/uploadFile", _Auth["default"].verifyTokenWeb, Multer({
  storage: Multer.memoryStorage()
}).single("upload"), _Upload["default"].UploadStream);
app.get("/api/minio/download/:bucket/:nama", _Auth["default"].verifyTokenWeb, _Upload["default"].DownloadFileBucket);
app.get("/api/minio/download/:bucket/:tahun/:folder/:nama", _Upload["default"].DownloadFileBucketFolderTahun);
app.get("/api/minio/download/:bucket/:tahun/:folder/:subfolder/:nama", _Auth["default"].verifyTokenWeb, _Upload["default"].DownloadFileBucketSubFolderTahun);
app.get("/api/minio/download_public/:bucket/:nama", _Key["default"].verifyKeyWeb, _Upload["default"].DownloadFileBucket);

//download publik

app.get("/api/minio/download_public/:bucket/:tahun/:folder/:nama", _Upload["default"].DownloadFileBucketFolderTahun);
app.get("/api/minio/download_public/:bucket/:tahun/:folder/:subfolder/:nama", _Upload["default"].DownloadFileBucketSubFolderTahun);
app.post('/api/web/ubahpassword', _Auth["default"].verifyTokenWeb, _General["default"].ubahPassword);

//

/*
app.get('/api/web/get_ddl_detail_login/:header_id', Key.verifyKeyWeb, General.getWebDetailDdl);


app.post('/api/web/login/forgotpassword', Key.verifyKeyWeb, General.userForgotPassword);


app.post('/api/web/setting/',   Key.verifyKeyWeb, General.getSettingValue);
// APi ADMIN PUSAT
app.post('/api/general/crudHeaders', Auth.verifyTokenWeb, Admin.crudParameterHeader);
app.post('/api/general/crudDetails', Auth.verifyTokenWeb, Admin.crudParameterDetail);
app.post('/api/general/crudSetting',  Auth.verifyTokenWeb, Admin.crudSetting);

//cetak
app.get('/api/report/sk/:rup_id',    Auth.verifyTokenWeb,   Docx.cetakSK);
app.get('/api/report/surat_tugas/:rup_id',       Docx.cetakSuratTugas);
app.post('/api/report/surat_tugas',       Docx.cetakSuratTugas2);
app.get('/api/report/personel_ukpbj/:tahun',       Docx.cetakPersonel);

//report crud
app.post('/api/report/surat_tugas_crud', Auth.verifyTokenWeb, Admin.crudSuratTugas);
app.post('/api/report/spd_crud', Auth.verifyTokenWeb, Admin.crudSpd);
app.post('/api/report/sk_crud', Auth.verifyTokenWeb, Admin.crudSK);
app.post('/api/report/hasil_seleksi_crud', Auth.verifyTokenWeb, Admin.crudHasilSeleksi);
app.post('/api/report/hasil_pemilihan_crud', Auth.verifyTokenWeb, Admin.crudHasilPemilihan);

//peraturan
app.post('/api/web/peraturan_baru_crud', Auth.verifyTokenWeb, Admin.crudPeraturanBaru); 
app.post('/api/general/peraturan_baru_crud', Key.verifyKeyWeb, Admin.crudPeraturanBaru2);


app.get('/api/web/general/get_ddl_header', Auth.verifyTokenWeb, General.getWebHeaderDdl);
app.get('/api/web/general/get_ddl_detail/:header_id', Auth.verifyTokenWeb, General.getWebDetailDdl);
app.get('/api/web/general/get_ddl_detail_all/:header_id', Auth.verifyTokenWeb, General.getWebDetailDdlAll);
app.post('/api/web/pusat/master/publicfiles', Auth.verifyTokenWeb, General.publicfilesCrud);
app.get('/api/web/pusat/master/publicfiles', Auth.verifyTokenWeb, General.publicfilesGet);
app.get('/api/web/general/get_parameter', Key.verifyKeyWeb, General.getParameter);



app.get('/api/web/pusat/get_allowed_page/:user_kategori', Auth.verifyTokenWeb, Admin.getAllowedPage);
app.get('/api/web/pusat/master/usermanagement', Auth.verifyTokenWeb, General.getUsers);
app.post('/api/web/pusat/master/usermanagement', Auth.verifyTokenWeb, General.usersCrud);
app.post('/api/web/pusat/sendmailgeneral', Auth.verifyTokenWeb, General.sendMailgeneral);
app.post('/api/web/sendmailgeneral', Key.verifyKeyWeb, General.sendMailPublicGeneral);





app.get('/api/web/rup/crud2', Rup.crudRup2);


app.post('/api/web/rup/crud', Auth.verifyTokenWeb, Rup.crudRup);
app.get('/api/web/get_ddl_detail/:header_id',  Rup.getDetailDdl);
app.post('/api/web/get_ddl_wilayah',  Auth.verifyTokenWeb,Rup.getWilayahDdl);
app.post('/api/general/get_ddl_wilayah',  Key.verifyKeyWeb,Rup.getWilayahDdl);
app.get('/api/web/get_ddl_pengangkatan',  Rup.getPengangkatanDdl);
app.post('/api/web/rup/approval', Auth.verifyTokenWeb, Rup.changeStatus);
app.get('/api/web/get_ddl_pokja/:tahun',  Auth.verifyTokenWeb,Rup.getPokjaDdl);
app.get('/api/web/get_dashboard_data', Auth.verifyTokenWeb,Rup.getDashboardData);
app.get('/api/web/get_ddl_lokasi/:id_rup', Auth.verifyTokenWeb,Rup.getLokasiPekerjaanDdl);

app.get('/api/web/get_ddl_approval/:id_rup', Auth.verifyTokenWeb, Rup.getApprovalDdl);
app.post('/api/web/get_ddl_satker',  Key.verifyKeyWeb,Admin.getSatkerDdl);
app.get('/api/web/get_ddl_pegawai/:jabatan_id',  Auth.verifyTokenWeb,Admin.getPegawaiDdl);
app.get('/api/web/get_ddl_role/',  Auth.verifyTokenWeb,General.getRoleDdl);
app.get('/api/web/get_menu_by_role/:role_id',  Auth.verifyTokenWeb,General.getMenuByRole);
app.post('/api/web/registrasi_user',  Key.verifyKeyWeb,User.create);
app.get('/api/web/get_ddl_pegawai_by_role/:role_id',  Auth.verifyTokenWeb,Admin.getPegawaiDdlByRole);

app.post('/api/web/master/satker/crud',  Auth.verifyTokenWeb,Admin.crudSatker);
app.post('/api/web/get_list_satker',  Key.verifyKeyWeb,Admin.getListSatker);
app.post('/api/web/master/pokja/crud',  Auth.verifyTokenWeb,Admin.crudPokja);
app.post('/api/web/master/pokjaanggota/crud',  Auth.verifyTokenWeb,Admin.crudPokjaAnggota);
app.post('/api/web/master/pegawai/crud',  Auth.verifyTokenWeb,Admin.crudPokjaAnggota);
app.post('/api/web/get_user_ppk', Auth.verifyTokenWeb, User.getUserPpk);
app.post('/api/web/master/role_user/crud',  Auth.verifyTokenWeb,User.crudRoleUser);
app.post('/api/web/master/role_menu/crud',  Auth.verifyTokenWeb,User.crudRoleMenu);
app.post('/api/web/master/menu/crud',  Auth.verifyTokenWeb,Admin.crudMenu);
app.post('/api/web/master/daftar_pokja/crud',  Auth.verifyTokenWeb,Admin.crudDaftarPokja);


*/
var server = app.listen(3002);
server.setTimeout(60000);
console.log('app running on port ', 3002);