// server.js
// import express from 'express';
import dotenv from 'dotenv';
// import cors from 'cors';
import 'babel-polyfill';
import User from './controllers/User';
import Auth from './middleware/Auth';
import Key from './middleware/Key';
import General from './controllers/General';
import Admin from './controllers/Admin';

import Upload from './controllers/Upload';
//import PrintCard from './controllers/PrintCard';
//import { pdfMake } from 'pdfmake/build/vfs_fonts';
//import PdfMake from './controllers/PdfMake';
import Docx from './controllers/DocX';
import XlsX from './controllers/XlsX';

//import Gis from './controllers/Gis';
//import Report from './controllers/Report';
// import Rup from './controllers/Rup';
import Humas from './controllers/Humas';
import Kepegawaian from './controllers/Kepegawaian';
import Surat from './controllers/Surat';


var Multer = require("multer");
var maxSize = 110971520;
var cors = require('cors');


dotenv.config();
const express = require('express')
const app = express();

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

var allowedOrigins = ['http://localhost:3000','http://localhost:3031','http://localhost:3003','http://172.23.3.39','https://eoffice.halal.go.id','http://192.168.100.155:3000','https://eoffice.halal.go.id/apps/users/login'];
app.use(cors({
origin: function(origin, callback){
// allow requests with no origin 
// (like mobile apps or curl requests)
if(!origin) return callback(null, true);
if(allowedOrigins.indexOf(origin) === -1){
var msg = 'dilarang  masuk';
console.log('origin: ', origin);

return callback(new Error(msg), false);
}
return callback(null, true);
},
credentials: true,

}));


//app.use(express.json());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

// expres validator
//const { check, validationResult } = require('express-validator/check');


// enable cors
//app.use(cors());
// app.options('*', cors())

app.get('/api/', (req, res) => {
  return res.status(200).send({ 'message':  process.env.API_NAME });
});
 

//app.get('/api/general/get_header', Key.verifyKeyGeneral, General.getHeader);
//app.get('/api/general/get_detail/:header_id', Key.verifyKeyGeneral, General.getDetail);

app.post('/api/web/login', Key.verifyKeyWeb, User.weblogin);
app.post('/api/web/menu', Auth.verifyTokenWeb, General.menuCrud);


// APi ADMIN PUSAT
app.post('/api/admin/crudHeaders', Auth.verifyTokenWeb, Admin.crudParameterHeader);
app.post('/api/admin/crudDetails', Auth.verifyTokenWeb, Admin.crudParameterDetail);
app.post('/api/admin/crudSetting',  Auth.verifyTokenWeb, Admin.crudSetting);
app.post('/api/admin/crudUnker',  Auth.verifyTokenWeb, Admin.crudUnker);
app.post('/api/admin/surat/template',  Auth.verifyTokenWeb, Admin.crudTemplateIsiSurat);
app.get('/api/admin/get_ddl_pegawai/:eselon_level',  Auth.verifyTokenWeb, Admin.getPegawaiDdl);
app.get('/api/admin/get_ddl_pegawai2/:eselon_level',  Auth.verifyTokenWeb, Admin.getPegawaiDdl2);
app.get('/api/admin/get_ddl_tte',  Auth.verifyTokenWeb, Admin.getTTEDdl);



app.post('/api/admin/crudMenu',  Auth.verifyTokenWeb,Admin.crudMenu);
app.post('/api/admin/role_user/crud',  Auth.verifyTokenWeb,Admin.crudRoleUser);
app.post('/api/admin/crudProdukHukum',  Auth.verifyTokenWeb,Admin.crudProdukHukum);
app.post('/api/admin/crudHariLibur',  Auth.verifyTokenWeb,Admin.crudHariLibur);
app.post('/api/admin/crudJenisCuti',  Auth.verifyTokenWeb,Admin.crudJenisCuti);
app.post('/api/admin/crudKelasJabatan', Auth.verifyTokenWeb, Admin.crudKelasJabatan);
app.post('/api/admin/crudPegawai', Auth.verifyTokenWeb, Admin.crudPegawai);
app.post('/api/admin/crudUnitKerjaPegawai', Auth.verifyTokenWeb, Admin.crudUnitKerjaPegawai);
app.post('/api/admin/role_menu/crud',  Auth.verifyTokenWeb,Admin.crudRoleMenu);
app.post('/api/admin/crudMesinError',  Auth.verifyTokenWeb,Admin.crudMesinError);

//kehumasan
app.post('/api/humas/agendaPimpinan',  Auth.verifyTokenWeb, Humas.crudAgendaPimpinan);
app.get('/api/humas/dashboardAgendaPimpinan',  Auth.verifyTokenWeb, Humas.dashboardAgendaPimpinan);

//kepegawaian
app.post('/api/kepegawaian/crudCuti',  Auth.verifyTokenWeb,Kepegawaian.crudCuti);
app.post('/api/kepegawaian/crudLapHarian',  Auth.verifyTokenWeb,Kepegawaian.crudLapHarian);
app.post('/api/kepegawaian/crudLapHarianTTE',  Auth.verifyTokenWeb,Kepegawaian.crudLapHarianTTE);

app.post('/api/kepegawaian/cetakRekapLapHarian',   Auth.verifyTokenWeb, XlsX.cetakRekapLapHarian);
app.post('/api/kepegawaian/crudAbsensi',  Auth.verifyTokenWeb,Kepegawaian.crudAbsensiv2);
app.post('/api/kepegawaian/cetakRekapAbsensi',   Auth.verifyTokenWeb, XlsX.cetakRekapAbsensi);
app.post('/api/kepegawaian/cetakRekapTukin',   Auth.verifyTokenWeb, XlsX.cetakRekapTukin);
app.post('/api/kepegawaian/cetakRekapUangMakan',   Auth.verifyTokenWeb, XlsX.cetakRekapUangMakan);
app.post('/api/kepegawaian/cetakRekapAbsensiPegawai',   Auth.verifyTokenWeb, XlsX.cetakRekapAbsensiPegawai);
app.post('/api/kepegawaian/cetakRekapAbsensiPegawaiTukin',   Auth.verifyTokenWeb, XlsX.cetakRekapAbsensiPegawaiTukin);
app.post('/api/kepegawaian/cetakRekapAbsensiPegawaiUangMakan',   Auth.verifyTokenWeb, XlsX.cetakRekapAbsensiPegawaiUangMakan);
app.get('/api/kepegawaian/absensi/export',   Auth.verifyTokenWeb, XlsX.getUploadTemplateAbsensi);
app.post('/api/kepegawaian/absensi/import',   Auth.verifyTokenWeb, XlsX.postImportDataAbsensi);
app.post('/api/kepegawaian/get_absensi_temp',  Auth.verifyTokenWeb,Kepegawaian.getAbsensiTemp_v2);
app.post('/api/kepegawaian/cek_saldo_cuti',  Auth.verifyTokenWeb,Kepegawaian.cekSaldoCuti);
app.post('/api/kepegawaian/cetakRekapUangMakan',   Auth.verifyTokenWeb, XlsX.cetakRekapUangMakan);
app.post('/api/kepegawaian/cetakRekapTukin',   Auth.verifyTokenWeb, XlsX.cetakRekapTukin);
app.post('/api/kepegawaian/crudSkpKpKgb',  Auth.verifyTokenWeb,Kepegawaian.crudSkpKpKgb);
app.post('/api/kepegawaian/crudUangMakan',  Auth.verifyTokenWeb,Kepegawaian.crudUangMakan);
app.post('/api/kepegawaian/get_uang_makan_temp',  Auth.verifyTokenWeb,Kepegawaian.getUangMakanTemp);
app.get('/api/kepegawaian/uang_makan/export',   Auth.verifyTokenWeb, XlsX.getUploadTemplateUangMakan);
app.post('/api/kepegawaian/uang_makan/import',   Auth.verifyTokenWeb, XlsX.postImportDataUangMakan);
app.post('/api/kepegawaian/crudTukin',  Auth.verifyTokenWeb,Kepegawaian.crudTukin);
app.get('/api/kepegawaian/tukin/export',   Auth.verifyTokenWeb, XlsX.getUploadTemplateTukin);
app.post('/api/kepegawaian/tukin/import',   Auth.verifyTokenWeb, XlsX.postImportDataTukin);
// lkh
app.post('/api/kepegawaian/lkh/target',  Auth.verifyTokenWeb, Kepegawaian.crudLKHTarget);
app.post('/api/kepegawaian/lkh/realisasi',  Auth.verifyTokenWeb, Kepegawaian.crudLKHRealisasi);
app.post('/api/kepegawaian/lkh/target/cetak', Auth.verifyTokenWeb, Docx.cetakLkhTarget);
app.post('/api/kepegawaian/lkh/realisasi/cetak', Auth.verifyTokenWeb, Docx.cetakLkhRealisasi);

//ketidakhardiran
app.post('/api/kepegawaian/ketidakhadiran',  Auth.verifyTokenWeb,Kepegawaian.crudKetidakhadiran);

//pengaduan Absensi
app.post('/api/kepegawaian/pengaduanAbsensi',  Auth.verifyTokenWeb,Kepegawaian.crudPengaduanAbsensi);
app.post('/api/kepegawaian/cetakRekapAbsensi',   Auth.verifyTokenWeb, XlsX.cetakRekapUangMakan);

//Cuti v2
app.post('/api/kepegawaian/cuti',  Auth.verifyTokenWeb,Kepegawaian.crudCuti2);
app.post('/api/kepegawaian/jenisCuti',  Auth.verifyTokenWeb,Kepegawaian.jenisCuti);
app.get('/api/kepegawaian/ddljenisCuti',  Auth.verifyTokenWeb,Kepegawaian.ddlJenisCuti);
app.post('/api/admin/crudJenisCuti2',  Auth.verifyTokenWeb,Admin.crudJenisCuti2);


//API GENERAL
app.get('/api/web/general/get_ddl_detail/:header_id', Auth.verifyTokenWeb, General.getWebDetailDdl);
app.get('/api/web/general/get_ddl_tertuju', Auth.verifyTokenWeb, General.getWebTertujuDdl);
app.get('/api/web/general/get_next_status/:status_id/:type_surat', Auth.verifyTokenWeb, General.getNextStatus);
app.get('/api/web/general/get_ddl_unker/:level_id', Auth.verifyTokenWeb, General.getUnkerDdl);
app.post('/api/web/laporan/general', Auth.verifyTokenWeb, General.getLaporanGeneral);

//template surat
app.post('/api/surat/template_isi_surat_crud',  Auth.verifyTokenWeb, Docx.crudTemplateIsiSurat);
app.post('/api/surat/surat_tugas', Auth.verifyTokenWeb, Docx.cetakSuratTugas2);






//surat
app.post('/api/surat/suratTugas',  Auth.verifyTokenWeb, Surat.crudSuratTugas);
app.post('/api/surat/notaDinas',  Auth.verifyTokenWeb, Surat.crudNotaDinas);
app.post('/api/surat/suratKeluar',  Auth.verifyTokenWeb, Surat.crudSuratKeluar);
app.post('/api/surat/suratMasuk',  Auth.verifyTokenWeb, Surat.crudSuratMasuk);
app.post('/api/surat/surat_keluar/approval', Auth.verifyTokenWeb, Surat.changeStatus);
app.post('/api/surat/nota_dinas/approval', Auth.verifyTokenWeb, Surat.changeStatusND);
app.get('/api/surat/get_ddl_approval/:type_surat/:id_surat', Auth.verifyTokenWeb, Surat.getApprovalDdl);
app.post('/api/surat/suratlainnya',  Auth.verifyTokenWeb, Surat.crudSuratLainya);

// tte
app.post('/api/surat/tte',  Auth.verifyTokenWeb, Surat.crudTTE);
app.post('/api/surat/tte/suratTugas/proses',  Auth.verifyTokenWeb, Docx.generateSuratTugasTTE,Surat.crudTTE);

//app.post('/api/surat/tte/proses',  Auth.verifyTokenWeb, Surat.getSuratFile,Surat.SignTTE,Surat.uploadTTE,  Surat.crudTTE);
app.post('/api/surat/tte/proses2',  Auth.verifyTokenWeb, Surat.getSuratFile,Surat.StoreFileTTE,Surat.SignFilePassphraseTTE,Surat.uploadTTEMinio,  Surat.crudTTE);
//bssm
app.post('/api/surat/tte/proses',  Auth.verifyTokenWeb, Surat.getSuratFileBSSNV2,Surat.modifyPdf,Surat.SignTTEBSSNV2,Surat.uploadTTE,  Surat.crudTTE);
//app.post('/api/surat/tte/paraf',  Auth.verifyTokenWeb, Surat.getSuratFileBSSN,Surat.ParafTTEBSSN,Surat.uploadTTE,  Surat.crudTTE);

app.get('/api/surat/tte/verifikasi/:token', Surat.getPath,Upload.downloadVerif);


// Upload
app.post("/api/minio/uploadFile",Auth.verifyTokenWeb, Multer({storage: Multer.memoryStorage()}).single("upload"), Upload.UploadStream)
app.get("/api/minio/download/:bucket/:nama", Auth.verifyTokenWeb, Upload.DownloadFileBucket) 
app.get("/api/minio/download/:bucket/:tahun/:folder/:nama",  Upload.DownloadFileBucketFolderTahun) 
app.get("/api/minio/download/:bucket/:tahun/:folder/:subfolder/:nama", Auth.verifyTokenWeb,Upload.DownloadFileBucketSubFolderTahun) 

app.get("/api/minio/download_public/:bucket/:nama", Key.verifyKeyWeb, Upload.DownloadFileBucket) 

//download publik

app.get("/api/minio/download_public/:bucket/:tahun/:folder/:nama", Upload.DownloadFileBucketFolderTahun) 
app.get("/api/minio/download_public/:bucket/:tahun/:folder/:subfolder/:nama",Upload.DownloadFileBucketSubFolderTahun) 


app.post('/api/web/ubahpassword', Auth.verifyTokenWeb, General.ubahPassword);

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
