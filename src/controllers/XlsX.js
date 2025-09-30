import db from '../db';

var buster       = require('buster');
var XlsxTemplate = require('../template/lib');
var fs = require('fs');
var path = require('path');
var etree = require('elementtree');


const XlsX = {
  async getUploadTemplateAbsensi(req, res) {
    
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
      const path2 = '/api/kepegawaian/absensi/export';
      const method = 'GET';
      var fileTemplate = '../template/template_absensi.xlsx';
      const file = path.join(__dirname, fileTemplate);
      res.download(file); 
      
  },

  async postImportDataPegawai(req, res){
    //console.log('test masuk')
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/api/kepegawaian/absensi/import';
    const method = 'POST';
    var findOneQuery = `select * from eoffice.crud_batch_data_absensi_temp ($1,$2,$3,$4,$5,$6::json)`;
    console.log(findOneQuery, [ip, path, method, req.user.nip,  req.body.ext, JSON.stringify(req.body.dataAbsen)]);

    try {      
      var { rows, rowCount } = await db.query(findOneQuery,[ip, path, method, req.user.nip, req.body.ext, JSON.stringify(req.body.dataAbsen)]);
    
      if (!rowCount) {
        return res.status(400).send({ 'RC': '07', 'message': 'tidak ada data' });
      } else {
        var data = rows[0].rows;
        rows=data;
        
        return res.status(200).send({ 'RC': '00', 'message': 'berhasil',rows});
      }
    }catch(error) {
      return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi atau data', error });
    }
   },
   async postImportDataAbsensi(req, res){
    //console.log('test masuk')
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/api/kepegawaian/absensi/import';
    const method = 'POST';
    var findOneQuery = `select * from eoffice.crud_batch_data_absensi_v2_temp ($1,$2,$3,$4,$5,$6::json)`;
    //console.log(findOneQuery, [ip, path, method, req.user.nip,  req.body.ext, JSON.stringify(req.body.dataAbsen)]);

    try {      
      var { rows, rowCount } = await db.query(findOneQuery,[ip, path, method, req.user.nip, req.body.ext, JSON.stringify(req.body.dataAbsen)]);
    
      if (!rowCount) {
        return res.status(400).send({ 'RC': '07', 'message': 'tidak ada data' });
      } else {
        var data = rows[0].rows;
        rows=data;
        
        return res.status(200).send({ 'RC': '00', 'message': 'berhasil',rows});
      }
    }catch(error) {
      return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi atau data', error });
    }
   },
   async cetakRekapUangMakan(req, res) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path2 = '/api/kepegawaian/cetakRekapUangMakan/';
    const method = 'POST';
    var input_data = req.body;
    var   arrayData = [];
    var nama_unker = '';
    const findOneQuery = `select * from eoffice.get_laporan_general ($1,$2,$3,$4,$5)`;
    console.log(findOneQuery, [ip, path2, method, req.user.nip, JSON.stringify(input_data)]);
    
    var { rows, rowCount } = await db.query(findOneQuery, [ip, path2, method, req.user.nip, JSON.stringify(input_data)]);
       if (!rowCount) {
        return res.status(400).send({ 'RC': '05', 'message': 'data kosong' });
      } else {
       const message =rows[0].message;
      let data = [];
    if(message==='sukses'){		
         arrayData = rows[0].data;
         
     }
    }
    var tarifUM = 0;
    for(var i=0; i<arrayData.length;i++){
      tarifUM = (tarifUM + (arrayData[i].tarif_um_n));
   }
   var jmlKotor = 0;
   for(var i=0; i<arrayData.length;i++){
    jmlKotor = (jmlKotor + (arrayData[i].jml_kotor_n));
  }
  var pph = 0;
  for(var i=0; i<arrayData.length;i++){
    pph = (pph + (arrayData[i].pph_n));
 }
 var jmlBersih = 0;
 for(var i=0; i<arrayData.length;i++){
  jmlBersih = (jmlBersih + (arrayData[i].jml_bersih_n));
}
    fs.readFile(path.join(__dirname, '../template/template_rekap_uang_makan.xlsx'), function(err, data) {
    buster.expect(err).toBeNull();
  
  // get data
  
    var t = new XlsxTemplate(data);
     //console.log(namafile)
    //res.setHeader('Content-disposition', 'attachment; filename= '+arrayData[0].nama_file);
  
    t.substitute(1, {
        dataTabular: arrayData,
        periode : arrayData[0].periode,
        //nama_unker : arrayData[0].nama_unker
        totalTarifUM: tarifUM,
        totalKotor: jmlKotor,
        totalPph: pph,
        totalBersih: jmlBersih,
        nama_ppk_uang_makan : arrayData[0].nama_ppk_uang_makan,
        nip_ppk_uang_makan : arrayData[0].nip_ppk_uang_makan,
        tanggal_cetak : arrayData[0].tanggal_cetak

    });
  
    var buf = t.generate({type: 'nodebuffer'});
            res.send(buf);
            res.end();
    
  });
  
  }, 

  async cetakRekapTukinOld(req, res) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path2 = '/api/kepegawaian/cetakRekapTukin/';
    const method = 'POST';
    var input_data = req.body;
    var   arrayData = [];
    var nama_unker = '';
    const findOneQuery = `select * from eoffice.get_laporan_general ($1,$2,$3,$4,$5)`;
    console.log(findOneQuery, [ip, path2, method, req.user.nip, JSON.stringify(input_data)]);
    
    var { rows, rowCount } = await db.query(findOneQuery, [ip, path2, method, req.user.nip, JSON.stringify(input_data)]);
       if (!rowCount) {
        return res.status(400).send({ 'RC': '05', 'message': 'data kosong' });
      } else {
       const message =rows[0].message;
      let data = [];
    if(message==='sukses'){		
         arrayData = rows[0].data;
         
     }
    }

    var tunjanganKinerja = 0;
    for(var i=0; i<arrayData.length;i++){
      tunjanganKinerja = (tunjanganKinerja + (arrayData[i].tunjangan_kinerja_n));
   }

   var pemotongan = 0;
    for(var i=0; i<arrayData.length;i++){
      pemotongan = (pemotongan + (arrayData[i].pemotongan_n));
   }

   var jmlSetelahPemotongan = 0;
    for(var i=0; i<arrayData.length;i++){
      jmlSetelahPemotongan = (jmlSetelahPemotongan + (arrayData[i].jml_setelah_pemotongan_n));
   }

   var tunjanganPajak = 0;
    for(var i=0; i<arrayData.length;i++){
      tunjanganPajak = (tunjanganPajak + (arrayData[i].tunjangan_pajak_n));
   }

   var jumlahBruto = 0;
    for(var i=0; i<arrayData.length;i++){
      jumlahBruto = (jumlahBruto + (arrayData[i].jumlah_bruto_n));
   }
    fs.readFile(path.join(__dirname, '../template/template_nominatif_tukin.xlsx'), function(err, data) {
    buster.expect(err).toBeNull();
  
  // get data
  
    var t = new XlsxTemplate(data);
     //console.log(namafile)
    //res.setHeader('Content-disposition', 'attachment; filename= '+arrayData[0].nama_file);
  
    t.substitute(1, {
        dataTabular: arrayData,
        periode : arrayData[0].periode,
        nama_unker : arrayData[0].nama_unker,
        totalTukin: tunjanganKinerja,
        totalPemotongan: pemotongan,
        totalSetelahPemotongan: jmlSetelahPemotongan,
        totaltunjanganPajak: tunjanganPajak,
        totalBruto: jumlahBruto,
        nama_ppk_tukin : arrayData[0].nama_ppk_tukin,
        nip_ppk_tukin : arrayData[0].nip_ppk_tukin,
        nama_bendahara_tukin : arrayData[0].nama_bendahara_tukin,
        nip_bendahara_tukin : arrayData[0].nip_bendahara_tukin,
        tanggal_cetak : arrayData[0].tanggal_cetak

    });
  
    var buf = t.generate({type: 'nodebuffer'});
            res.send(buf);
            res.end();
    
  });
  
  }, 
  async getUploadTemplateUangMakan(req, res) {
    
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
      const path2 = '/api/kepegawaian/uang_makan/export';
      const method = 'GET';
      var fileTemplate = '../template/template_uang_makan.xlsx';
      const file = path.join(__dirname, fileTemplate);
      res.download(file); 
      
  },

  async postImportDataUangMakan(req, res){
    //console.log('test masuk')
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/api/kepegawaian/uang_makan/import';
    const method = 'POST';
    var findOneQuery = `select * from eoffice.crud_batch_data_uang_makan_temp ($1,$2,$3,$4,$5,$6::json)`;
    console.log(findOneQuery, [ip, path, method, req.user.nip,  req.body.ext, JSON.stringify(req.body.dataUangMakan)]);

    try {      
      var { rows, rowCount } = await db.query(findOneQuery,[ip, path, method, req.user.nip, req.body.ext, JSON.stringify(req.body.dataUangMakan)]);
    
      if (!rowCount) {
        return res.status(400).send({ 'RC': '07', 'message': 'tidak ada data' });
      } else {
        var data = rows[0].rows;
        rows=data;
        
        return res.status(200).send({ 'RC': '00', 'message': 'berhasil',rows});
      }
    }catch(error) {
      return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi atau data', error });
    }
   },

   async cetakRekapLapHarian(req, res) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path2 = '/api/kepegawaian/cetakRekapLapHarian/';
    const method = 'POST';
    var input_data = req.body;
    var   arrayData = [];
    var nama_unker = '';
    const findOneQuery = `select * from eoffice.lap_harian_crud  ($1,$2,$3,$4,$5::json)`;
    console.log(findOneQuery, [ip, path2, method, req.user.nip, JSON.stringify(input_data)]);
    
    var { rows, rowCount } = await db.query(findOneQuery, [ip, path2, method, req.user.nip, JSON.stringify(input_data)]);
       if (!rowCount) {
        return res.status(400).send({ 'RC': '05', 'message': 'data kosong' });
      } else {
       const message =rows[0].message;
      let data = [];
    if(message==='Sukses'){		
         arrayData = rows[0].data;
         
         
     }
     console.log (arrayData)
    }
   
    fs.readFile(path.join(__dirname, '../template/template_rekap_lap_harian.xlsx'), function(err, data) {
    buster.expect(err).toBeNull();
  
  // get data
  
    var t = new XlsxTemplate(data);
     //console.log(namafile)
    //res.setHeader('Content-disposition', 'attachment; filename= '+arrayData[0].nama_file);
  
    t.substitute(1, {
        dataTabular: arrayData,
        // periode : arrayData[0].periode,
        // nama_unker : arrayData[0].nama_unker

    });
  
    var buf = t.generate({type: 'nodebuffer'});
            res.send(buf);
            res.end();
    
  });
  
  }, 

  async getUploadTemplateTukin(req, res) {
    
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
      const path2 = '/api/kepegawaian/tukin/export';
      const method = 'GET';
      var fileTemplate = '../template/template_data_tukin.xlsx';
      const file = path.join(__dirname, fileTemplate);
      res.download(file); 
      
  },

  async postImportDataTukin(req, res){
    //console.log('test masuk')
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/api/kepegawaian/tukin/import';
    const method = 'POST';
    var findOneQuery = `select * from eoffice.crud_batch_data_tukin ($1,$2,$3,$4,$5::json)`;
    console.log(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body.dataUangMakan)]);

    try {      
      var { rows, rowCount } = await db.query(findOneQuery,[ip, path, method, req.user.nip, JSON.stringify(req.body.dataUangMakan)]);
    
      if (!rowCount) {
        return res.status(400).send({ 'RC': '07', 'message': 'tidak ada data' });
      } else {
        var data = rows[0].rows;
        rows=data;
        
        return res.status(200).send({ 'RC': '00', 'message': 'berhasil',rows});
      }
    }catch(error) {
      return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi atau data', error });
    }
   },
   
  async cetakRekapAbsensi(req, res) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path2 = '/api/kepegawaian/cetakRekapAbsensi/';
    const method = 'POST';
    var input_data = req.body;
    var   arrayData = [];
    var nama_unker = '';
    const findOneQuery = `select * from eoffice.get_laporan_general ($1,$2,$3,$4,$5)`;
    console.log(findOneQuery, [ip, path2, method, req.user.nip, JSON.stringify(input_data)]);
    
    var { rows, rowCount } = await db.query(findOneQuery, [ip, path2, method, req.user.nip, JSON.stringify(input_data)]);
       if (!rowCount) {
        return res.status(400).send({ 'RC': '05', 'message': 'data kosong' });
      } else {
       const message =rows[0].message;
      let data = [];
    if(message==='sukses'){		
         arrayData = rows[0].data;
         
     }
    }
 
/*     fs.readFile(path.join(__dirname, '../template/template_rekap_absensi_v2.xlsx'), function(err, data) {
 */    fs.readFile(path.join(__dirname, '../template/temp_rekap_kehadiran.xlsx'), function(err, data) {
    buster.expect(err).toBeNull();
  
  // get data
  
    var t = new XlsxTemplate(data);
     //console.log(namafile)
    //res.setHeader('Content-disposition', 'attachment; filename= '+arrayData[0].nama_file);
  
    t.substitute(1, {
       dataTabular: arrayData,
       bulan : arrayData[0].bulan_nama,
       tahun : arrayData[0].tahun,
       hari_kerja : arrayData[0].hari_kerja,
       hari_libur : arrayData[0].hari_libur,
       tanggal_cetak : arrayData[0].tanggal_cetak

    });
  
    var buf = t.generate({type: 'nodebuffer'});
            res.send(buf);
            res.end();
    
  });
  
  }, 

  async cetakRekapTukin(req, res) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path2 = '/api/kepegawaian/cetakRekapTukin/';
    const method = 'POST';
    var input_data = req.body;
    var   arrayData = [];
    var nama_unker = '';
    const findOneQuery = `select * from eoffice.get_laporan_general ($1,$2,$3,$4,$5)`;
    console.log(findOneQuery, [ip, path2, method, req.user.nip, JSON.stringify(input_data)]);
    
    var { rows, rowCount } = await db.query(findOneQuery, [ip, path2, method, req.user.nip, JSON.stringify(input_data)]);
       if (!rowCount) {
        return res.status(400).send({ 'RC': '05', 'message': 'data kosong' });
      } else {
       const message =rows[0].message;
      let data = [];
    if(message==='sukses'){		
         arrayData = rows[0].data;
         
     }
    }
 
    fs.readFile(path.join(__dirname, '../template/temp_rekap_tukin.xlsx'), function(err, data) {
    buster.expect(err).toBeNull();
  
  // get data
  
    var t = new XlsxTemplate(data);
     //console.log(namafile)
    //res.setHeader('Content-disposition', 'attachment; filename= '+arrayData[0].nama_file);
  
    t.substitute(1, {
       dataTabular: arrayData,
       bulan : arrayData[0].bulan_nama,
       tahun : arrayData[0].tahun,
       hari_kerja : arrayData[0].hari_kerja,
       hari_libur : arrayData[0].hari_libur,
       tanggal_cetak : arrayData[0].tanggal_cetak

    });
  
    var buf = t.generate({type: 'nodebuffer'});
            res.send(buf);
            res.end();
    
  });
  
  }, 

  async cetakRekapUangMakan(req, res) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path2 = '/api/kepegawaian/cetakRekapUangMakan/';
    const method = 'POST';
    var input_data = req.body;
    var   arrayData = [];
    var nama_unker = '';
    const findOneQuery = `select * from eoffice.get_laporan_general ($1,$2,$3,$4,$5)`;
    console.log(findOneQuery, [ip, path2, method, req.user.nip, JSON.stringify(input_data)]);
    
    var { rows, rowCount } = await db.query(findOneQuery, [ip, path2, method, req.user.nip, JSON.stringify(input_data)]);
       if (!rowCount) {
        return res.status(400).send({ 'RC': '05', 'message': 'data kosong' });
      } else {
       const message =rows[0].message;
      let data = [];
    if(message==='sukses'){		
         arrayData = rows[0].data;
         
     }
    }
 
    fs.readFile(path.join(__dirname, '../template/temp_rekap_uang_makan.xlsx'), function(err, data) {
    buster.expect(err).toBeNull();
  
  // get data
  
    var t = new XlsxTemplate(data);
     //console.log(namafile)
    //res.setHeader('Content-disposition', 'attachment; filename= '+arrayData[0].nama_file);
  
    t.substitute(1, {
       dataTabular: arrayData,
       bulan : arrayData[0].bulan_nama,
       tahun : arrayData[0].tahun,
       hari_kerja : arrayData[0].hari_kerja,
       hari_libur : arrayData[0].hari_libur,
       tanggal_cetak : arrayData[0].tanggal_cetak

    });
  
    var buf = t.generate({type: 'nodebuffer'});
            res.send(buf);
            res.end();
    
  });
  
  }, 

  async cetakRekapAbsensiPegawai(req, res) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path2 = '/api/kepegawaian/cetakRekapAbsensiPegawai/';
    const method = 'POST';
    var input_data = req.body;
    var   arrayData = [];
    var nama_unker = '';
    const findOneQuery = `select * from eoffice.get_laporan_general ($1,$2,$3,$4,$5)`;
    console.log(findOneQuery, [ip, path2, method, req.user.nip, JSON.stringify(input_data)]);
    
    var { rows, rowCount } = await db.query(findOneQuery, [ip, path2, method, req.user.nip, JSON.stringify(input_data)]);
       if (!rowCount) {
        return res.status(400).send({ 'RC': '05', 'message': 'data kosong' });
      } else {
       const message =rows[0].message;
      let data = [];
    if(message==='sukses'){		
         arrayData = rows[0].data;
         
     }
    }
 
/*     fs.readFile(path.join(__dirname, '../template/template_rekap_absensi_pegawai.xlsx'), function(err, data) {
 */      fs.readFile(path.join(__dirname, '../template/temp_rekap_kehadiran_pegawai.xlsx'), function(err, data) {
    buster.expect(err).toBeNull();
  
  // get data
  
    var t = new XlsxTemplate(data);
     //console.log(namafile)
    //res.setHeader('Content-disposition', 'attachment; filename= '+arrayData[0].nama_file);
  
    t.substitute(1, {
       dataTabular: arrayData,
       bulan : arrayData[0].bulan_nama,
       tahun : arrayData[0].tahun,
       hari_kerja : arrayData[0].hari_kerja,
       hari_libur : arrayData[0].hari_libur,
       nama : arrayData[0].nama,
       nip : arrayData[0].nip,
       jabatan : arrayData[0].jabatan_nama,
       tanggal_cetak : arrayData[0].tanggal_cetak

    });
  
    var buf = t.generate({type: 'nodebuffer'});
            res.send(buf);
            res.end();
    
  });
  
  }, 

  async cetakRekapAbsensiPegawaiTukin(req, res) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path2 = '/api/kepegawaian/cetakRekapAbsensiPegawaiTukin/';
    const method = 'POST';
    var input_data = req.body;
    var   arrayData = [];
    var nama_unker = '';
    const findOneQuery = `select * from eoffice.get_laporan_general ($1,$2,$3,$4,$5)`;
    console.log(findOneQuery, [ip, path2, method, req.user.nip, JSON.stringify(input_data)]);
    
    var { rows, rowCount } = await db.query(findOneQuery, [ip, path2, method, req.user.nip, JSON.stringify(input_data)]);
       if (!rowCount) {
        return res.status(400).send({ 'RC': '05', 'message': 'data kosong' });
      } else {
       const message =rows[0].message;
      let data = [];
    if(message==='sukses'){		
         arrayData = rows[0].data;
         
     }
    }
 
    fs.readFile(path.join(__dirname, '../template/temp_rekap_tukin_pegawai.xlsx'), function(err, data) {
    buster.expect(err).toBeNull();
  
  // get data
  
    var t = new XlsxTemplate(data);
     //console.log(namafile)
    //res.setHeader('Content-disposition', 'attachment; filename= '+arrayData[0].nama_file);
  
    t.substitute(1, {
       dataTabular: arrayData,
       bulan : arrayData[0].bulan_nama,
       tahun : arrayData[0].tahun,
       hari_kerja : arrayData[0].hari_kerja,
       hari_libur : arrayData[0].hari_libur,
       nama : arrayData[0].nama,
       nip : arrayData[0].nip,
       jabatan : arrayData[0].jabatan_nama,
       tanggal_cetak : arrayData[0].tanggal_cetak

    });
  
    var buf = t.generate({type: 'nodebuffer'});
            res.send(buf);
            res.end();
    
  });
  
  }, 

  async cetakRekapAbsensiPegawaiUangMakan(req, res) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path2 = '/api/kepegawaian/cetakRekapAbsensiPegawaiUangMakan/';
    const method = 'POST';
    var input_data = req.body;
    var   arrayData = [];
    var nama_unker = '';
    const findOneQuery = `select * from eoffice.get_laporan_general ($1,$2,$3,$4,$5)`;
    console.log(findOneQuery, [ip, path2, method, req.user.nip, JSON.stringify(input_data)]);
    
    var { rows, rowCount } = await db.query(findOneQuery, [ip, path2, method, req.user.nip, JSON.stringify(input_data)]);
       if (!rowCount) {
        return res.status(400).send({ 'RC': '05', 'message': 'data kosong' });
      } else {
       const message =rows[0].message;
      let data = [];
    if(message==='sukses'){		
         arrayData = rows[0].data;
         
     }
    }
 
    fs.readFile(path.join(__dirname, '../template/temp_rekap_uang_makan_pegawai.xlsx'), function(err, data) {
    buster.expect(err).toBeNull();
  
  // get data
  
    var t = new XlsxTemplate(data);
     //console.log(namafile)
    //res.setHeader('Content-disposition', 'attachment; filename= '+arrayData[0].nama_file);
  
    t.substitute(1, {
       dataTabular: arrayData,
       bulan : arrayData[0].bulan_nama,
       tahun : arrayData[0].tahun,
       hari_kerja : arrayData[0].hari_kerja,
       hari_libur : arrayData[0].hari_libur,
       nama : arrayData[0].nama,
       nip : arrayData[0].nip,
       jabatan : arrayData[0].jabatan_nama,
       tanggal_cetak : arrayData[0].tanggal_cetak

    });
  
    var buf = t.generate({type: 'nodebuffer'});
            res.send(buf);
            res.end();
    
  });
  
  }, 
}

export default XlsX;