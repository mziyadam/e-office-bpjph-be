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

//NEW
import Simpeg from './controllers/Simpeg';
import GetTemplate from './controllers/crud_template/GetTemplate';


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
Alamatapp.post('/api/web/sendmailgeneral', Key.verifyKeyWeb, General.sendMailPublicGeneral);





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

//SIMPEG
app.get("/api/simpeg/getTemplate", Auth.verifyTokenWeb,GetTemplate.get);

//umum
app.get('/api/simpeg/getUmum',  Auth.verifyTokenWeb,Simpeg.getUmum);
app.put('/api/simpeg/putUmum',  Auth.verifyTokenWeb,Simpeg.putUmum);

//alamat
app.get('/api/simpeg/getAlamat',  Auth.verifyTokenWeb,Simpeg.getAlamat);
app.put('/api/simpeg/putAlamat',  Auth.verifyTokenWeb,Simpeg.putAlamat);

//data nomor
app.get('/api/simpeg/getDataNomor',  Auth.verifyTokenWeb,Simpeg.getDataNomor);
app.put('/api/simpeg/putDataNomor',  Auth.verifyTokenWeb,Simpeg.putDataNomor);

//pekerjaan
app.get('/api/simpeg/getPekerjaan',  Auth.verifyTokenWeb,Simpeg.getPekerjaan);
//keluarga

// Suami Istri
app.get('/api/simpeg/getSuamiIstri', Auth.verifyTokenWeb, Simpeg.getSuamiIstri);
app.get('/api/simpeg/getSuamiIstriEdit', Auth.verifyTokenWeb, Simpeg.getSuamiIstriEdit);
app.post('/api/simpeg/postSuamiIstriEdit', Auth.verifyTokenWeb, Simpeg.postSuamiIstriEdit);
app.post('/api/simpeg/postSuamiIstri', Auth.verifyTokenWeb, Simpeg.postSuamiIstri);   // added
app.put('/api/simpeg/putSuamiIstriEdit', Auth.verifyTokenWeb, Simpeg.putSuamiIstriEdit);
app.put('/api/simpeg/putSuamiIstri', Auth.verifyTokenWeb, Simpeg.putSuamiIstri);     // added
app.delete('/api/simpeg/deleteSuamiIstriEdit', Auth.verifyTokenWeb, Simpeg.deleteSuamiIstriEdit);
app.delete('/api/simpeg/deleteSuamiIstri', Auth.verifyTokenWeb, Simpeg.deleteSuamiIstri); // added

// Anak
app.get('/api/simpeg/getAnak', Auth.verifyTokenWeb, Simpeg.getAnak);
app.get('/api/simpeg/getAnakEdit', Auth.verifyTokenWeb, Simpeg.getAnakEdit);
app.post('/api/simpeg/postAnakEdit', Auth.verifyTokenWeb, Simpeg.postAnakEdit);
app.post('/api/simpeg/postAnak', Auth.verifyTokenWeb, Simpeg.postAnak);   // added
app.put('/api/simpeg/putAnakEdit', Auth.verifyTokenWeb, Simpeg.putAnakEdit);
app.put('/api/simpeg/putAnak', Auth.verifyTokenWeb, Simpeg.putAnak);     // added
app.delete('/api/simpeg/deleteAnakEdit', Auth.verifyTokenWeb, Simpeg.deleteAnakEdit);
app.delete('/api/simpeg/deleteAnak', Auth.verifyTokenWeb, Simpeg.deleteAnak); // added

// pendidikan
app.get('/api/simpeg/getPendidikan', Auth.verifyTokenWeb, Simpeg.getPendidikan);
app.get('/api/simpeg/getPendidikanEdit', Auth.verifyTokenWeb, Simpeg.getPendidikanEdit);
app.post('/api/simpeg/postPendidikanEdit', Auth.verifyTokenWeb, Simpeg.postPendidikanEdit);
app.post('/api/simpeg/postPendidikan', Auth.verifyTokenWeb, Simpeg.postPendidikan);   // added
app.put('/api/simpeg/putPendidikanEdit', Auth.verifyTokenWeb, Simpeg.putPendidikanEdit);
app.put('/api/simpeg/putPendidikan', Auth.verifyTokenWeb, Simpeg.putPendidikan);     // added
app.delete('/api/simpeg/deletePendidikanEdit', Auth.verifyTokenWeb, Simpeg.deletePendidikanEdit);
app.delete('/api/simpeg/deletePendidikan', Auth.verifyTokenWeb, Simpeg.deletePendidikan); // added

// diklat
app.get('/api/simpeg/getDiklat', Auth.verifyTokenWeb, Simpeg.getDiklat);
app.get('/api/simpeg/getDiklatEdit', Auth.verifyTokenWeb, Simpeg.getDiklatEdit);
app.post('/api/simpeg/postDiklatEdit', Auth.verifyTokenWeb, Simpeg.postDiklatEdit);
app.post('/api/simpeg/postDiklat', Auth.verifyTokenWeb, Simpeg.postDiklat);          // added
app.put('/api/simpeg/putDiklatEdit', Auth.verifyTokenWeb, Simpeg.putDiklatEdit);
app.put('/api/simpeg/putDiklat', Auth.verifyTokenWeb, Simpeg.putDiklat);            // added
app.delete('/api/simpeg/deleteDiklatEdit', Auth.verifyTokenWeb, Simpeg.deleteDiklatEdit);
app.delete('/api/simpeg/deleteDiklat', Auth.verifyTokenWeb, Simpeg.deleteDiklat);   // added

// pangkat
app.get('/api/simpeg/getPangkat', Auth.verifyTokenWeb, Simpeg.getPangkat);
app.get('/api/simpeg/getPangkatEdit', Auth.verifyTokenWeb, Simpeg.getPangkatEdit);
app.post('/api/simpeg/postPangkatEdit', Auth.verifyTokenWeb, Simpeg.postPangkatEdit);
app.post('/api/simpeg/postPangkat', Auth.verifyTokenWeb, Simpeg.postPangkat);          // added
app.put('/api/simpeg/putPangkatEdit', Auth.verifyTokenWeb, Simpeg.putPangkatEdit);
app.put('/api/simpeg/putPangkat', Auth.verifyTokenWeb, Simpeg.putPangkat);            // added
app.delete('/api/simpeg/deletePangkatEdit', Auth.verifyTokenWeb, Simpeg.deletePangkatEdit);
app.delete('/api/simpeg/deletePangkat', Auth.verifyTokenWeb, Simpeg.deletePangkat);   // added

// jabatan
app.get('/api/simpeg/getJabatan', Auth.verifyTokenWeb, Simpeg.getJabatan);
app.get('/api/simpeg/getJabatanEdit', Auth.verifyTokenWeb, Simpeg.getJabatanEdit);
app.post('/api/simpeg/postJabatanEdit', Auth.verifyTokenWeb, Simpeg.postJabatanEdit);
app.post('/api/simpeg/postJabatan', Auth.verifyTokenWeb, Simpeg.postJabatan);          // added
app.put('/api/simpeg/putJabatanEdit', Auth.verifyTokenWeb, Simpeg.putJabatanEdit);
app.put('/api/simpeg/putJabatan', Auth.verifyTokenWeb, Simpeg.putJabatan);            // added
app.delete('/api/simpeg/deleteJabatanEdit', Auth.verifyTokenWeb, Simpeg.deleteJabatanEdit);
app.delete('/api/simpeg/deleteJabatan', Auth.verifyTokenWeb, Simpeg.deleteJabatan);   // added

// pak
app.get('/api/simpeg/getPak', Auth.verifyTokenWeb, Simpeg.getPak);
app.get('/api/simpeg/getPakEdit', Auth.verifyTokenWeb, Simpeg.getPakEdit);
app.post('/api/simpeg/postPakEdit', Auth.verifyTokenWeb, Simpeg.postPakEdit);
app.post('/api/simpeg/postPak', Auth.verifyTokenWeb, Simpeg.postPak);                  // added
app.put('/api/simpeg/putPakEdit', Auth.verifyTokenWeb, Simpeg.putPakEdit);
app.put('/api/simpeg/putPak', Auth.verifyTokenWeb, Simpeg.putPak);                    // added
app.delete('/api/simpeg/deletePakEdit', Auth.verifyTokenWeb, Simpeg.deletePakEdit);
app.delete('/api/simpeg/deletePak', Auth.verifyTokenWeb, Simpeg.deletePak);           // added

//penghargaan
app.get('/api/simpeg/getPenghargaan',  Auth.verifyTokenWeb,Simpeg.getPenghargaan);
app.get('/api/simpeg/getPenghargaanEdit',  Auth.verifyTokenWeb,Simpeg.getPenghargaanEdit);
app.post('/api/simpeg/postPenghargaan', Auth.verifyTokenWeb, Simpeg.postPenghargaan);
app.post('/api/simpeg/postPenghargaanEdit',  Auth.verifyTokenWeb,Simpeg.postPenghargaanEdit);
app.put('/api/simpeg/putPenghargaan', Auth.verifyTokenWeb, Simpeg.putPenghargaan);
app.put('/api/simpeg/putPenghargaanEdit',  Auth.verifyTokenWeb,Simpeg.putPenghargaanEdit);
app.delete('/api/simpeg/deletePenghargaan', Auth.verifyTokenWeb, Simpeg.deletePenghargaan);
app.delete('/api/simpeg/deletePenghargaanEdit',  Auth.verifyTokenWeb,Simpeg.deletePenghargaanEdit);

// Pengalaman
app.get('/api/simpeg/getPengalaman',  Auth.verifyTokenWeb, Simpeg.getPengalaman);
app.get('/api/simpeg/getPengalamanEdit',  Auth.verifyTokenWeb, Simpeg.getPengalamanEdit);
app.post('/api/simpeg/postPengalamanEdit',  Auth.verifyTokenWeb, Simpeg.postPengalamanEdit);
app.post('/api/simpeg/postPengalaman',  Auth.verifyTokenWeb, Simpeg.postPengalaman);        // added
app.put('/api/simpeg/putPengalamanEdit',  Auth.verifyTokenWeb, Simpeg.putPengalamanEdit);
app.put('/api/simpeg/putPengalaman',  Auth.verifyTokenWeb, Simpeg.putPengalaman);           // added
app.delete('/api/simpeg/deletePengalamanEdit',  Auth.verifyTokenWeb, Simpeg.deletePengalamanEdit);
app.delete('/api/simpeg/deletePengalaman',  Auth.verifyTokenWeb, Simpeg.deletePengalaman);  // added

// Organisasi
app.get('/api/simpeg/getOrganisasi',  Auth.verifyTokenWeb, Simpeg.getOrganisasi);
app.get('/api/simpeg/getOrganisasiEdit',  Auth.verifyTokenWeb, Simpeg.getOrganisasiEdit);
app.post('/api/simpeg/postOrganisasiEdit',  Auth.verifyTokenWeb, Simpeg.postOrganisasiEdit);
app.post('/api/simpeg/postOrganisasi',  Auth.verifyTokenWeb, Simpeg.postOrganisasi);        // added
app.put('/api/simpeg/putOrganisasiEdit',  Auth.verifyTokenWeb, Simpeg.putOrganisasiEdit);
app.put('/api/simpeg/putOrganisasi',  Auth.verifyTokenWeb, Simpeg.putOrganisasi);           // added
app.delete('/api/simpeg/deleteOrganisasiEdit',  Auth.verifyTokenWeb, Simpeg.deleteOrganisasiEdit);
app.delete('/api/simpeg/deleteOrganisasi',  Auth.verifyTokenWeb, Simpeg.deleteOrganisasi);  // added

// Karya Tulis
app.get('/api/simpeg/getKaryaTulis',      Auth.verifyTokenWeb, Simpeg.getKaryaTulis);
app.get('/api/simpeg/getKaryaTulisEdit', Auth.verifyTokenWeb, Simpeg.getKaryaTulisEdit);
app.post('/api/simpeg/postKaryaTulisEdit', Auth.verifyTokenWeb, Simpeg.postKaryaTulisEdit);
app.post('/api/simpeg/postKaryaTulis',     Auth.verifyTokenWeb, Simpeg.postKaryaTulis);      // added
app.put('/api/simpeg/putKaryaTulisEdit',   Auth.verifyTokenWeb, Simpeg.putKaryaTulisEdit);
app.put('/api/simpeg/putKaryaTulis',       Auth.verifyTokenWeb, Simpeg.putKaryaTulis);       // added
app.delete('/api/simpeg/deleteKaryaTulisEdit', Auth.verifyTokenWeb, Simpeg.deleteKaryaTulisEdit);
app.delete('/api/simpeg/deleteKaryaTulis',     Auth.verifyTokenWeb, Simpeg.deleteKaryaTulis); // added

// Sertifikasi
app.get('/api/simpeg/getSertifikasi',      Auth.verifyTokenWeb, Simpeg.getSertifikasi);
app.get('/api/simpeg/getSertifikasiEdit', Auth.verifyTokenWeb, Simpeg.getSertifikasiEdit);
app.post('/api/simpeg/postSertifikasiEdit', Auth.verifyTokenWeb, Simpeg.postSertifikasiEdit);
app.post('/api/simpeg/postSertifikasi',     Auth.verifyTokenWeb, Simpeg.postSertifikasi);      // added
app.put('/api/simpeg/putSertifikasiEdit',   Auth.verifyTokenWeb, Simpeg.putSertifikasiEdit);
app.put('/api/simpeg/putSertifikasi',       Auth.verifyTokenWeb, Simpeg.putSertifikasi);       // added
app.delete('/api/simpeg/deleteSertifikasiEdit', Auth.verifyTokenWeb, Simpeg.deleteSertifikasiEdit);
app.delete('/api/simpeg/deleteSertifikasi',     Auth.verifyTokenWeb, Simpeg.deleteSertifikasi); // added

// KGB
app.get('/api/simpeg/getKgb',      Auth.verifyTokenWeb, Simpeg.getKgb);
app.get('/api/simpeg/getKgbEdit', Auth.verifyTokenWeb, Simpeg.getKgbEdit);
app.post('/api/simpeg/postKgbEdit', Auth.verifyTokenWeb, Simpeg.postKgbEdit);
app.post('/api/simpeg/postKgb',     Auth.verifyTokenWeb, Simpeg.postKgb);      // added
app.put('/api/simpeg/putKgbEdit',   Auth.verifyTokenWeb, Simpeg.putKgbEdit);
app.put('/api/simpeg/putKgb',       Auth.verifyTokenWeb, Simpeg.putKgb);       // added
app.delete('/api/simpeg/deleteKgbEdit', Auth.verifyTokenWeb, Simpeg.deleteKgbEdit);
app.delete('/api/simpeg/deleteKgb',     Auth.verifyTokenWeb, Simpeg.deleteKgb); // added

// SKP
app.get('/api/simpeg/getSkp',      Auth.verifyTokenWeb, Simpeg.getSkp);
app.get('/api/simpeg/getSkpEdit', Auth.verifyTokenWeb, Simpeg.getSkpEdit);
app.post('/api/simpeg/postSkpEdit', Auth.verifyTokenWeb, Simpeg.postSkpEdit);
app.post('/api/simpeg/postSkp',     Auth.verifyTokenWeb, Simpeg.postSkp);      // added
app.put('/api/simpeg/putSkpEdit',   Auth.verifyTokenWeb, Simpeg.putSkpEdit);
app.put('/api/simpeg/putSkp',       Auth.verifyTokenWeb, Simpeg.putSkp);       // added
app.delete('/api/simpeg/deleteSkpEdit', Auth.verifyTokenWeb, Simpeg.deleteSkpEdit);
app.delete('/api/simpeg/deleteSkp',     Auth.verifyTokenWeb, Simpeg.deleteSkp); // added

//PkgPkp
app.get('/api/simpeg/getPkgPkp',        Auth.verifyTokenWeb, Simpeg.getPkgPkp);
app.get('/api/simpeg/getPkgPkpEdit',    Auth.verifyTokenWeb, Simpeg.getPkgPkpEdit);
app.post('/api/simpeg/postPkgPkpEdit',  Auth.verifyTokenWeb, Simpeg.postPkgPkpEdit);
app.post('/api/simpeg/postPkgPkp',      Auth.verifyTokenWeb, Simpeg.postPkgPkp);       // added
app.put('/api/simpeg/putPkgPkpEdit',    Auth.verifyTokenWeb, Simpeg.putPkgPkpEdit);
app.put('/api/simpeg/putPkgPkp',        Auth.verifyTokenWeb, Simpeg.putPkgPkp);        // added
app.delete('/api/simpeg/deletePkgPkpEdit', Auth.verifyTokenWeb, Simpeg.deletePkgPkpEdit);
app.delete('/api/simpeg/deletePkgPkp',     Auth.verifyTokenWeb, Simpeg.deletePkgPkp);  // added

//Penugasan
app.get('/api/simpeg/getPenugasan',        Auth.verifyTokenWeb, Simpeg.getPenugasan);
app.get('/api/simpeg/getPenugasanEdit',    Auth.verifyTokenWeb, Simpeg.getPenugasanEdit);
app.post('/api/simpeg/postPenugasanEdit',  Auth.verifyTokenWeb, Simpeg.postPenugasanEdit);
app.post('/api/simpeg/postPenugasan',      Auth.verifyTokenWeb, Simpeg.postPenugasan);       // added
app.put('/api/simpeg/putPenugasanEdit',    Auth.verifyTokenWeb, Simpeg.putPenugasanEdit);
app.put('/api/simpeg/putPenugasan',        Auth.verifyTokenWeb, Simpeg.putPenugasan);        // added
app.delete('/api/simpeg/deletePenugasanEdit', Auth.verifyTokenWeb, Simpeg.deletePenugasanEdit);
app.delete('/api/simpeg/deletePenugasan',     Auth.verifyTokenWeb, Simpeg.deletePenugasan);  // added

//ADMIN DATA PEGAWAI
//get all data
app.get('/api/simpeg/getDataPegawai',  Auth.verifyTokenWeb,Simpeg.getDataPegawaiFull);

//ket diri
app.get('/api/simpeg/getKetDiri',  Auth.verifyTokenWeb,Simpeg.getKetDiri);
app.put('/api/simpeg/putKetDiri',  Auth.verifyTokenWeb,Simpeg.putKetDiri);

// Cltn
app.get('/api/simpeg/getCltn',  Auth.verifyTokenWeb, Simpeg.getCltn);
app.post('/api/simpeg/postCltn',  Auth.verifyTokenWeb, Simpeg.postCltn);
app.put('/api/simpeg/putCltn',  Auth.verifyTokenWeb, Simpeg.putCltn);
app.delete('/api/simpeg/deleteCltn',  Auth.verifyTokenWeb, Simpeg.deleteCltn);

// Indisipliner
app.get('/api/simpeg/getIndisipliner',  Auth.verifyTokenWeb, Simpeg.getIndisipliner);
app.post('/api/simpeg/postIndisipliner',  Auth.verifyTokenWeb, Simpeg.postIndisipliner);
app.put('/api/simpeg/putIndisipliner',  Auth.verifyTokenWeb, Simpeg.putIndisipliner);
app.delete('/api/simpeg/deleteIndisipliner',  Auth.verifyTokenWeb, Simpeg.deleteIndisipliner);

// Keluarga
app.get('/api/simpeg/getKeluarga',  Auth.verifyTokenWeb, Simpeg.getKeluarga);
app.post('/api/simpeg/postKeluarga',  Auth.verifyTokenWeb, Simpeg.postKeluarga);
app.put('/api/simpeg/putKeluarga',  Auth.verifyTokenWeb, Simpeg.putKeluarga);
app.delete('/api/simpeg/deleteKeluarga',  Auth.verifyTokenWeb, Simpeg.deleteKeluarga);

// Penelitian
app.get('/api/simpeg/getPenelitian',  Auth.verifyTokenWeb, Simpeg.getPenelitian);
app.post('/api/simpeg/postPenelitian',  Auth.verifyTokenWeb, Simpeg.postPenelitian);
app.put('/api/simpeg/putPenelitian',  Auth.verifyTokenWeb, Simpeg.putPenelitian);
app.delete('/api/simpeg/deletePenelitian',  Auth.verifyTokenWeb, Simpeg.deletePenelitian);

//VERIF PEGAWAI
//get all data
app.get('/api/simpeg/getListVerifPegawai',  Auth.verifyTokenWeb,Simpeg.getListVerifPegawai);
app.get('/api/simpeg/getVerifPegawai',  Auth.verifyTokenWeb,Simpeg.getVerifPegawai);

//VERIF
// app.post('/api/simpeg/postKeluarga',  Auth.verifyTokenWeb, Simpeg.postKeluarga);
app.post("/api/simpeg/verifTable", Auth.verifyTokenWeb, Simpeg.verifTable);

//STAT

// getStatPangkat
// getStatJabatanFungsional
// getStatJabatanStruktural
// getStatJabatanStruktural
// getStatJenisKelamin
// getStatPendidikan
// getStatUsia
app.get('/api/simpeg/getStatAgama',  Auth.verifyTokenWeb,Simpeg.getStatAgama);
app.get('/api/simpeg/getStatPangkat',  Auth.verifyTokenWeb,Simpeg.getStatPangkat);
app.get('/api/simpeg/getStatJabatanFungsional',  Auth.verifyTokenWeb,Simpeg.getStatJabatanFungsional);
app.get('/api/simpeg/getStatJabatanStruktural',  Auth.verifyTokenWeb,Simpeg.getStatJabatanStruktural);
app.get('/api/simpeg/getStatJenisKelamin',  Auth.verifyTokenWeb,Simpeg.getStatJenisKelamin);
app.get('/api/simpeg/getStatPendidikan',  Auth.verifyTokenWeb,Simpeg.getStatPendidikan);
app.get('/api/simpeg/getStatUsia',  Auth.verifyTokenWeb,Simpeg.getStatUsia);

// MasterAgama
app.get('/api/simpeg/getMasterAgama',  Auth.verifyTokenWeb, Simpeg.getMasterAgama);
app.post('/api/simpeg/postMasterAgama',  Auth.verifyTokenWeb, Simpeg.postMasterAgama);
app.put('/api/simpeg/putMasterAgama',  Auth.verifyTokenWeb, Simpeg.putMasterAgama);
app.delete('/api/simpeg/deleteMasterAgama',  Auth.verifyTokenWeb, Simpeg.deleteMasterAgama);

// MasterSatuanKerja
app.get('/api/simpeg/getMasterSatuanKerja',  Auth.verifyTokenWeb, Simpeg.getMasterSatuanKerja);
app.post('/api/simpeg/postMasterSatuanKerja',  Auth.verifyTokenWeb, Simpeg.postMasterSatuanKerja);
app.put('/api/simpeg/putMasterSatuanKerja',  Auth.verifyTokenWeb, Simpeg.putMasterSatuanKerja);
app.delete('/api/simpeg/deleteMasterSatuanKerja',  Auth.verifyTokenWeb, Simpeg.deleteMasterSatuanKerja);

// MasterStatusKawin
app.get('/api/simpeg/getMasterStatusKawin',  Auth.verifyTokenWeb, Simpeg.getMasterStatusKawin);
app.post('/api/simpeg/postMasterStatusKawin',  Auth.verifyTokenWeb, Simpeg.postMasterStatusKawin);
app.put('/api/simpeg/putMasterStatusKawin',  Auth.verifyTokenWeb, Simpeg.putMasterStatusKawin);
app.delete('/api/simpeg/deleteMasterStatusKawin',  Auth.verifyTokenWeb, Simpeg.deleteMasterStatusKawin);

// MasterStatusAnak
app.get('/api/simpeg/getMasterStatusAnak',  Auth.verifyTokenWeb, Simpeg.getMasterStatusAnak);
app.post('/api/simpeg/postMasterStatusAnak',  Auth.verifyTokenWeb, Simpeg.postMasterStatusAnak);
app.put('/api/simpeg/putMasterStatusAnak',  Auth.verifyTokenWeb, Simpeg.putMasterStatusAnak);
app.delete('/api/simpeg/deleteMasterStatusAnak',  Auth.verifyTokenWeb, Simpeg.deleteMasterStatusAnak);

// MasterJenjangPendidikan
app.get('/api/simpeg/getMasterJenjangPendidikan', Auth.verifyTokenWeb, Simpeg.getMasterJenjangPendidikan);
app.post('/api/simpeg/postMasterJenjangPendidikan', Auth.verifyTokenWeb, Simpeg.postMasterJenjangPendidikan);
app.put('/api/simpeg/putMasterJenjangPendidikan', Auth.verifyTokenWeb, Simpeg.putMasterJenjangPendidikan);
app.delete('/api/simpeg/deleteMasterJenjangPendidikan', Auth.verifyTokenWeb, Simpeg.deleteMasterJenjangPendidikan);

// MasterJenisBidangStudi
app.get('/api/simpeg/getMasterJenisBidangStudi', Auth.verifyTokenWeb, Simpeg.getMasterJenisBidangStudi);
app.post('/api/simpeg/postMasterJenisBidangStudi', Auth.verifyTokenWeb, Simpeg.postMasterJenisBidangStudi);
app.put('/api/simpeg/putMasterJenisBidangStudi', Auth.verifyTokenWeb, Simpeg.putMasterJenisBidangStudi);
app.delete('/api/simpeg/deleteMasterJenisBidangStudi', Auth.verifyTokenWeb, Simpeg.deleteMasterJenisBidangStudi);

// MasterTipeDiklat
app.get('/api/simpeg/getMasterTipeDiklat', Auth.verifyTokenWeb, Simpeg.getMasterTipeDiklat);
app.post('/api/simpeg/postMasterTipeDiklat', Auth.verifyTokenWeb, Simpeg.postMasterTipeDiklat);
app.put('/api/simpeg/putMasterTipeDiklat', Auth.verifyTokenWeb, Simpeg.putMasterTipeDiklat);
app.delete('/api/simpeg/deleteMasterTipeDiklat', Auth.verifyTokenWeb, Simpeg.deleteMasterTipeDiklat);

// MasterFakultasPendidikan
app.get('/api/simpeg/getMasterFakultasPendidikan', Auth.verifyTokenWeb, Simpeg.getMasterFakultasPendidikan);
app.post('/api/simpeg/postMasterFakultasPendidikan', Auth.verifyTokenWeb, Simpeg.postMasterFakultasPendidikan);
app.put('/api/simpeg/putMasterFakultasPendidikan', Auth.verifyTokenWeb, Simpeg.putMasterFakultasPendidikan);
app.delete('/api/simpeg/deleteMasterFakultasPendidikan', Auth.verifyTokenWeb, Simpeg.deleteMasterFakultasPendidikan);

// MasterBidangStudi
app.get('/api/simpeg/getMasterBidangStudi', Auth.verifyTokenWeb, Simpeg.getMasterBidangStudi);
app.post('/api/simpeg/postMasterBidangStudi', Auth.verifyTokenWeb, Simpeg.postMasterBidangStudi);
app.put('/api/simpeg/putMasterBidangStudi', Auth.verifyTokenWeb, Simpeg.putMasterBidangStudi);
app.delete('/api/simpeg/deleteMasterBidangStudi', Auth.verifyTokenWeb, Simpeg.deleteMasterBidangStudi);

// MasterDiklat
app.get('/api/simpeg/getMasterDiklat', Auth.verifyTokenWeb, Simpeg.getMasterDiklat);
app.post('/api/simpeg/postMasterDiklat', Auth.verifyTokenWeb, Simpeg.postMasterDiklat);
app.put('/api/simpeg/putMasterDiklat', Auth.verifyTokenWeb, Simpeg.putMasterDiklat);
app.delete('/api/simpeg/deleteMasterDiklat', Auth.verifyTokenWeb, Simpeg.deleteMasterDiklat);

// MasterPangkat
app.get('/api/simpeg/getMasterPangkat', Auth.verifyTokenWeb, Simpeg.getMasterPangkat);
app.post('/api/simpeg/postMasterPangkat', Auth.verifyTokenWeb, Simpeg.postMasterPangkat);
app.put('/api/simpeg/putMasterPangkat', Auth.verifyTokenWeb, Simpeg.putMasterPangkat);
app.delete('/api/simpeg/deleteMasterPangkat', Auth.verifyTokenWeb, Simpeg.deleteMasterPangkat);

// MasterJenisPegawai
app.get('/api/simpeg/getMasterJenisPegawai', Auth.verifyTokenWeb, Simpeg.getMasterJenisPegawai);
app.post('/api/simpeg/postMasterJenisPegawai', Auth.verifyTokenWeb, Simpeg.postMasterJenisPegawai);
app.put('/api/simpeg/putMasterJenisPegawai', Auth.verifyTokenWeb, Simpeg.putMasterJenisPegawai);
app.delete('/api/simpeg/deleteMasterJenisPegawai', Auth.verifyTokenWeb, Simpeg.deleteMasterJenisPegawai);

// MasterStatusPegawai
app.get('/api/simpeg/getMasterStatusPegawai', Auth.verifyTokenWeb, Simpeg.getMasterStatusPegawai);
app.post('/api/simpeg/postMasterStatusPegawai', Auth.verifyTokenWeb, Simpeg.postMasterStatusPegawai);
app.put('/api/simpeg/putMasterStatusPegawai', Auth.verifyTokenWeb, Simpeg.putMasterStatusPegawai);
app.delete('/api/simpeg/deleteMasterStatusPegawai', Auth.verifyTokenWeb, Simpeg.deleteMasterStatusPegawai);

// MasterTipeJabatan
app.get('/api/simpeg/getMasterTipeJabatan', Auth.verifyTokenWeb, Simpeg.getMasterTipeJabatan);
app.post('/api/simpeg/postMasterTipeJabatan', Auth.verifyTokenWeb, Simpeg.postMasterTipeJabatan);
app.put('/api/simpeg/putMasterTipeJabatan', Auth.verifyTokenWeb, Simpeg.putMasterTipeJabatan);
app.delete('/api/simpeg/deleteMasterTipeJabatan', Auth.verifyTokenWeb, Simpeg.deleteMasterTipeJabatan);

// MasterLevelJabatan
app.get('/api/simpeg/getMasterLevelJabatan', Auth.verifyTokenWeb, Simpeg.getMasterLevelJabatan);
app.post('/api/simpeg/postMasterLevelJabatan', Auth.verifyTokenWeb, Simpeg.postMasterLevelJabatan);
app.put('/api/simpeg/putMasterLevelJabatan', Auth.verifyTokenWeb, Simpeg.putMasterLevelJabatan);
app.delete('/api/simpeg/deleteMasterLevelJabatan', Auth.verifyTokenWeb, Simpeg.deleteMasterLevelJabatan);

// MasterJabatan
app.get('/api/simpeg/getMasterJabatan', Auth.verifyTokenWeb, Simpeg.getMasterJabatan);
app.post('/api/simpeg/postMasterJabatan', Auth.verifyTokenWeb, Simpeg.postMasterJabatan);
app.put('/api/simpeg/putMasterJabatan', Auth.verifyTokenWeb, Simpeg.putMasterJabatan);
app.delete('/api/simpeg/deleteMasterJabatan', Auth.verifyTokenWeb, Simpeg.deleteMasterJabatan);

var server = app.listen(3002);
server.setTimeout(60000);

console.log('app running on port ', 3002);
