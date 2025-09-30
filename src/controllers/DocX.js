import { nextTick } from 'process';
import db from '../db';

var JSZip = require('jszip');
var Docxtemplater = require('docxtemplater');
var ImageModule = require('docxtemplater-image-module')
var Multer = require("multer");
var Minio = require("minio");
var fs = require('fs');
var path = require('path');
var toPdf = require("office-to-pdf")
var axios = require('axios')
var QRCode = require('qrcode')
 

var Minio = require("minio");
var axios = require('axios');

 
 



if (process.env.MINIO_USES_SSL){
  var ssl = true;
}
else {
    var ssl = false;
  }

 var minioClient = new Minio.Client({
          endPoint: process.env.MINIO_ENDPOINT,
          port:parseInt(process.env.MINIO_PORT),
          useSSL: ssl,
          accessKey: process.env.MINIO_ACCESSKEY,
          secretKey: process.env.MINIO_SECRETKEY
});

var opts = {}
opts.centered = false;
opts.getImage = function (tagValue, tagName) {
  return fs.readFileSync(tagValue);
}

opts.getSize = function (img, tagValue, tagName) {
  return [90, 70];
}



var imageModule = new ImageModule(opts);
function generateLogo(req, res) {
  var request = require('request').defaults({ encoding: null });

  var base64Logo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==";
  request.get(req, function (error, response, body) {
    var test;

    // try{
    if (!error && response.statusCode == 200) {
      base64Logo = "data:" + response.headers["content-type"] + ";base64," + new Buffer.from(body).toString('base64');
      tes = "a";
      //  console.log(base64Logo)		
      //return base64Logo;	
    }
    else {
      tes = "b";

      base64Logo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==";
    }
  });
  return base64Logo;
}

function getBase64(url) {
  return axios
    .get(url, {
      responseType: 'arraybuffer'
    })
    .then(
      response => {
        if (response.status == 200) {
          return Buffer.from(response.data, 'binary').toString('base64');
        }
        else {

          return Buffer.from("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==")
        }
      })
    .catch(error => {
      console.log(error)

      return Buffer.from("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==")

    })

}

async function getQrCode(url){
  var base64qr ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII='
  if (url){
    base64qr = await QRCode.toDataURL(url);
  }  
  return base64qr;
}

const DocX = {
  async getQrCode(req, res){
    var tesQrcode= await getQrCode('I am a pony!');
    return res.status(200).send({ 'RC': '00', 'message':'sa',tesQrcode});
  },

  async crudTemplateIsiSurat(req, res){
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/api/surat/template_isi_surat_crud';
    const method = 'POST';
    const findOneQuery = `select * from eoffice.template_isi_surat_crud  ($1,$2,$3,$4,$5::json)`;
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

  async cetakSK(req, res) {
    // tarik dat
    var opts = {}
    opts.centered = false;
    opts.getImage = function (tagValue, tagName) {
      return fs.readFileSync(tagValue);
    }

    opts.getSize = function (img, tagValue, tagName) {
      return [90, 70];
    }

    let data = [];
    let templatedata = [];
    var noImg ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII='
  
    var imageModule = new ImageModule(opts);

    var findOneQuery = `select * from setting Where kode_setting=$1`;
    
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path2 = 'web/ppiu/report/doc/pendaftaran';
    const method = 'GET';
    const rup_id = req.params.rup_id;
    console.log(rup_id);
    //console.log(findOneQuery, [ip, path2, method, req.user.nip,req.params.jamaah_id])
    findOneQuery = `select * from eoffice.get_data_report($1,$2,$3,$4,$5::json)`;
    console.log('body'+JSON.stringify(body));
    console.log(findOneQuery, [ip, path2, method, 'req.user.nip', JSON.stringify(req.body)]);
    try {
    var { rows, rowCount } = await db.query(findOneQuery, [ip, path2, method, 'req.user.nip', JSON.stringify(req.body)]);
    if (!rowCount) {
      return res.status(400).send({ 'RC': '07', 'message': 'Data Tidak Ditemukan' });
    } else {
      const message = rows[0].hasil;
      //console.log(rows[0]);
      if (message === 'sukses') {
        data = rows[0].data;
        templatedata = rows[0].templatedata;
        console.log(templatedata);
        //console.log(base64Image);
      }
      //console.log(templatedata);
      var doc = new Docxtemplater();
      //res.setHeader('Content-disposition', 'attachment; filename=SuratPendaftaranJamaah.docx');
      res.setHeader('Content-disposition', 'attachment; filename=' + templatedata['nama_report'] + '.pdf');
      res.setHeader('filename', templatedata['nama_report'] + '.pdf');
      res.setHeader('Access-Control-Expose-Headers', 'filename');
      //var url = "https://image.shutterstock.com/image-vector/mecca-travel-logo-al-haj-260nw-1244768023.jpg";
      //get current date
      var dateFormat = require('dateformat');
      dateFormat.i18n = {
        dayNames: [
          'Ming', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab',
          'Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'
        ],
        monthNames: [
          'Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
          'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
        ],
        timeNames: [
          'a', 'p', 'am', 'pm', 'A', 'P', 'AM', 'PM'
        ]
      };
      var now = new Date();
      var tglSkrang = dateFormat(now, "dddd, d mmmm yyyy");

      //console.log('base64Logo/; '+base64Logo);

      
      
      var qrCodeImage= await getQrCode(data['url_qr']);
      let base64Image = "";
      try{
        base64Image=qrCodeImage.split(';base64,').pop();
      }catch{
        base64Image=noImg.split(';base64,').pop();
      }
      fs.writeFile(path.join(__dirname, '../template/logo' + templatedata['nama_report'] + '.png'), base64Image, { encoding: 'base64' }, function (err) {
        //console.log(base64Logo);
        // generate report 
        var content = fs
          .readFileSync(path.resolve(__dirname, '../template/'+templatedata['nama_file']), 'binary');
        // console.log(content)
        var zip = new JSZip(content);
        var doc = new Docxtemplater();
        doc.loadZip(zip);
        doc.attachModule(imageModule);
        //console.log(data);
        data.image=path.resolve(__dirname, '../template/logo'+ templatedata['nama_report'] +'.png');
        doc.setData(data);
        // ambil data dari database
        //data['%image'] = base64Logo;
        //doc.setData(data)
        try {
          // render the document (replace all occurences of {first_name} by John, {last_name} by Doe, ...)
          doc.render()
        }
        catch (error) {
          var e = {
            message: error.message,
            name: error.name,
            stack: error.stack,
            properties: error.properties,
          }
          //console.log(JSON.stringify({error: e}));
          // The error thrown here contains additional information when logged with JSON.stringify (it contains a property object).
          throw error;
        }
        var buf = doc.getZip()
          .generate({ type: 'nodebuffer' });
        //res.send(buf);
        //res.end();
        // buf is a nodejs buffer, you can either write it to a file or do anything else with it.
        fs.writeFileSync(path.resolve(__dirname, '../template/' + templatedata['nama_report'] + '.docx'), buf);

        
        var wordBuffer = fs.readFileSync(path.resolve(__dirname, '../template/' + templatedata['nama_report'] + '.docx'))
       // res.send(wordBuffer);
        toPdf(wordBuffer).then(
          (pdfBuffer) => {
            res.send(pdfBuffer);
            res.end();
            fs.unlinkSync(path.resolve(__dirname, '../template/' + templatedata['nama_report']+ '.docx'));
            fs.unlinkSync(path.resolve(__dirname, '../template/logo'+ templatedata['nama_report'] +'.png'));
          }, (err) => {
            console.log(err)
          }
        )
      });

      //return res.status(200).send({ 'RC': '00', 'message': message,data});
    }
  }
    catch (error){
      console.log(error);
      return res.status(200).send({ 'RC': '99'});
    }
  },
  async   cetakSuratTugas(req, res) {
    // tarik dat
    var opts = {}
    opts.centered = false;
    opts.getImage = function (tagValue, tagName) {
      return fs.readFileSync(tagValue);
    }

    opts.getSize = function (img, tagValue, tagName) {
      return [90, 70];
    }

    let data = [];
    let templatedata = [];
    //var noImg ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII='
  
    //var imageModule = new ImageModule(opts);

    //var findOneQuery = `select * from setting Where kode_setting=$1`;
    
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path2 = 'web/surat/surat_tugas';
    const method = 'post';
    //console.log(findOneQuery, [ip, path2, method, req.user.nip,req.params.jamaah_id])
    const findOneQuery = `select * from eoffice.get_data_report($1,$2,$3,$4,$5::json)`;
    console.log('body'+JSON.stringify(req.body));
    console.log(findOneQuery, [ip, path2, method, req.user.nip, JSON.stringify(req.body)]);
    try {
    var { rows, rowCount } = await db.query(findOneQuery, [ip, path2, method, req.user.nip, JSON.stringify(req.body)]);
    if (!rowCount) {
      return res.status(400).send({ 'RC': '07', 'message': 'Data Tidak Ditemukan' });
    } else {
      const message = rows[0].hasil;
      //console.log(rows[0]);
      if (message === 'sukses') {
        data = rows[0].data;
        templatedata = rows[0].templatedata;
        console.log(templatedata);
        
        console.log(data);
        //console.log(base64Image);
      }
      //console.log(templatedata);
      var doc = new Docxtemplater();
      //res.setHeader('Content-disposition', 'attachment; filename=SuratPendaftaranJamaah.docx');
      res.setHeader('Content-disposition', 'attachment; filename=' + templatedata['nama_report'] + '.pdf');
      res.setHeader('filename', templatedata['nama_report'] + '.pdf');
      res.setHeader('Access-Control-Expose-Headers', 'filename');
      //var url = "https://image.shutterstock.com/image-vector/mecca-travel-logo-al-haj-260nw-1244768023.jpg";
      //get current date
      var dateFormat = require('dateformat');
      dateFormat.i18n = {
        dayNames: [
          'Ming', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab',
          'Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'
        ],
        monthNames: [
          'Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
          'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
        ],
        timeNames: [
          'a', 'p', 'am', 'pm', 'A', 'P', 'AM', 'PM'
        ]
      };
      var now = new Date();
      var tglSkrang = dateFormat(now, "dddd, d mmmm yyyy");

      //console.log('base64Logo/; '+base64Logo);

      
      
      var qrCodeImage= await getQrCode(data['url_qr']);
      let base64Image = "";
      try{
        base64Image=qrCodeImage.split(';base64,').pop();
      }catch{
        base64Image=noImg.split(';base64,').pop();
      }
      fs.writeFile(path.join(__dirname, '../template/logo' + templatedata['nama_report'] + '.png'), base64Image, { encoding: 'base64' }, function (err) {
        //console.log(base64Logo);
        // generate report 
        var content = fs
          .readFileSync(path.resolve(__dirname, '../template/'+templatedata['nama_file']), 'binary');
        // console.log(content)
        var zip = new JSZip(content);
        var doc = new Docxtemplater();
        doc.loadZip(zip);
        doc.attachModule(imageModule);
        //console.log(data);
        data.image=path.resolve(__dirname, '../template/logo'+ templatedata['nama_report'] +'.png');
        doc.setData(data);
        // ambil data dari database
        //data['%image'] = base64Logo;
        //doc.setData(data)
        try {
          // render the document (replace all occurences of {first_name} by John, {last_name} by Doe, ...)
          doc.render()
        }
        catch (error) {
          var e = {
            message: error.message,
            name: error.name,
            stack: error.stack,
            properties: error.properties,
          }
          //console.log(JSON.stringify({error: e}));
          // The error thrown here contains additional information when logged with JSON.stringify (it contains a property object).
          throw error;
        }
        var buf = doc.getZip()
          .generate({ type: 'nodebuffer' });
        //res.send(buf);
        //res.end();
        // buf is a nodejs buffer, you can either write it to a file or do anything else with it.
        fs.writeFileSync(path.resolve(__dirname, '../template/' + templatedata['nama_report'] + '.docx'), buf);

        
        var wordBuffer = fs.readFileSync(path.resolve(__dirname, '../template/' + templatedata['nama_report'] + '.docx'))
       // res.send(wordBuffer);
        toPdf(wordBuffer).then(
          (pdfBuffer) => {
            res.send(pdfBuffer);
            res.end();
            fs.unlinkSync(path.resolve(__dirname, '../template/' + templatedata['nama_report']+ '.docx'));
            fs.unlinkSync(path.resolve(__dirname, '../template/logo'+ templatedata['nama_report'] +'.png'));
          }, (err) => {
            console.log(err)
          }
        )
      });

      //return res.status(200).send({ 'RC': '00', 'message': message,data});
    }
  }
    catch (error){
      console.log(error);
      return res.status(200).send({ 'RC': '99'});
    }
  },
  async   cetakSuratTugas2(req, res) {
    // tarik dat
    var opts = {}
    opts.centered = false;
    opts.getImage = function (tagValue, tagName) {
      return fs.readFileSync(tagValue);
    }

    opts.getSize = function (img, tagValue, tagName) {
      return [90, 70];
    }

    let data = [];
    let templatedata = [];
    var noImg ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII='
    let dataMenimbang = [];
    let dataDasar = [];

    var imageModule = new ImageModule(opts);
    
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path2 = '/report/surat_tugas';
    const method = 'POST';
    
    const findOneQuery = `select * from eoffice.get_data_report($1,$2,$3,$4,$5::json)`;
    console.log(findOneQuery, [ip, path2, method, 'req.user.nip', JSON.stringify(req.body)]);
    try {
    var { rows, rowCount } = await db.query(findOneQuery, [ip, path2, method, 'req.user.nip', JSON.stringify(req.body)]);
    if (!rowCount) {
      return res.status(400).send({ 'RC': '07', 'message': 'Data Tidak Ditemukan' });
    } else {
      const message = rows[0].hasil;
      //console.log(rows[0]);
      if (message === 'sukses') {
        data = rows[0].data[0];
        templatedata = rows[0].templatedata;
        console.log(templatedata);
        console.log(data.m)
        //console.log(base64Image);
        let menimbangText = '';
        menimbangText = data.m.replace('<ul>','');
        menimbangText = menimbangText.replace(/<li>/g,'');
        menimbangText= menimbangText.replace('</ul>','');
        let arrayMenimbang = menimbangText.split('</li>');
        console.log(arrayMenimbang)
        for(let i = 0; i<(arrayMenimbang.length-1); i++){
          dataMenimbang.push({ "isi": arrayMenimbang[i] });
        }
        let dasarText = '';
        dasarText = data.d.replace('<ol>','');
        dasarText = dasarText.replace(/<li>/g,'');
        dasarText = dasarText.replace('</ol>','');
        let arrayDasar = dasarText.split('</li>');
        for(let i = 0; i<(arrayDasar.length-1); i++){
          dataDasar.push({ "isi": arrayDasar[i] });
        }

        data.m = dataMenimbang;
        data.d = dataDasar;
      }
      //console.log(templatedata);
      var doc = new Docxtemplater();
      //res.setHeader('Content-disposition', 'attachment; filename=SuratPendaftaranJamaah.docx');
      res.setHeader('Content-disposition', 'attachment; filename=' + templatedata['nama_report'] + '.pdf');
      res.setHeader('filename', templatedata['nama_report'] + '.pdf');
      res.setHeader('Access-Control-Expose-Headers', 'filename');

      var qrCodeImage= await getQrCode(data['url_qr']);
      let base64Image = "";
      try{
        base64Image=qrCodeImage.split(';base64,').pop();
      }catch{
        base64Image=noImg.split(';base64,').pop();
      }
      fs.writeFile(path.join(__dirname, '../template/logo' + templatedata['nama_report'] + '.png'), base64Image, { encoding: 'base64' }, function (err) {
        //console.log(base64Logo);
        // generate report 
        var content = fs
          .readFileSync(path.resolve(__dirname, '../template/'+templatedata['nama_file']), 'binary');
        // console.log(content)
        var zip = new JSZip(content);
        var doc = new Docxtemplater();
        doc.loadZip(zip);
        doc.attachModule(imageModule);
        //console.log(data);
        data.image=path.resolve(__dirname, '../template/logo'+ templatedata['nama_report'] +'.png');
        doc.setData(data);
        try {
          // render the document (replace all occurences of {first_name} by John, {last_name} by Doe, ...)
          doc.render()
        }
        catch (error) {
          var e = {
            message: error.message,
            name: error.name,
            stack: error.stack,
            properties: error.properties,
          }
          // The error thrown here contains additional information when logged with JSON.stringify (it contains a property object).
          throw error;
        }
        var buf = doc.getZip()
          .generate({ type: 'nodebuffer' });
        // buf is a nodejs buffer, you can either write it to a file or do anything else with it.
        fs.writeFileSync(path.resolve(__dirname, '../template/' + templatedata['nama_report'] + '.docx'), buf);

        
        var wordBuffer = fs.readFileSync(path.resolve(__dirname, '../template/' + templatedata['nama_report'] + '.docx'))
       // res.send(wordBuffer);
        toPdf(wordBuffer).then(
          (pdfBuffer) => {
            res.send(pdfBuffer);
            res.end();
            fs.unlinkSync(path.resolve(__dirname, '../template/' + templatedata['nama_report']+ '.docx'));
            fs.unlinkSync(path.resolve(__dirname, '../template/logo'+ templatedata['nama_report'] +'.png'));
          }, (err) => {
            console.log(err)
          }
        )
      });

      //return res.status(200).send({ 'RC': '00', 'message': message,data});
    }
  }
    catch (error){
      console.log(error);
      return res.status(200).send({ 'RC': '99'});
    }
  },
  async   cetakPersonel(req, res) {
    // tarik dat
    var opts = {}
    opts.centered = false;
    opts.getImage = function (tagValue, tagName) {
      return fs.readFileSync(tagValue);
    }

    opts.getSize = function (img, tagValue, tagName) {
      return [90, 70];
    }

    let data = [];
    let templatedata = [];
    var noImg ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII='
  
    var imageModule = new ImageModule(opts);

    var findOneQuery = `select * from setting Where kode_setting=$1`;
    
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path2 = 'web/ppiu/report/doc/pendaftaran';
    const method = 'GET';
    const rup_id = req.params.rup_id;
    console.log(rup_id);
    //console.log(findOneQuery, [ip, path2, method, req.user.nip,req.params.jamaah_id])
    findOneQuery = `select * from eoffice.get_data_report($1,$2,$3,$4,$5::json)`;
    const body = {"tipe_report":"surat-personel-ukpbj-dumy","rup_id": rup_id };
    console.log('body'+JSON.stringify(body));
    console.log(findOneQuery, [ip, path2, method, 'req.user.nip', JSON.stringify(body)]);
    try {
    var { rows, rowCount } = await db.query(findOneQuery, [ip, path2, method, 'req.user.nip', JSON.stringify(body)]);
    if (!rowCount) {
      return res.status(400).send({ 'RC': '07', 'message': 'Data Tidak Ditemukan' });
    } else {
      const message = rows[0].hasil;
      //console.log(rows[0]);
      if (message === 'sukses') {
        data = rows[0].data;
        templatedata = rows[0].templatedata;
        console.log(templatedata);
        //console.log(base64Image);
      }
      //console.log(templatedata);
      var doc = new Docxtemplater();
      //res.setHeader('Content-disposition', 'attachment; filename=SuratPendaftaranJamaah.docx');
      res.setHeader('Content-disposition', 'attachment; filename=' + templatedata['nama_report'] + '.pdf');
      res.setHeader('filename', templatedata['nama_report'] + '.pdf');
      res.setHeader('Access-Control-Expose-Headers', 'filename');
      //var url = "https://image.shutterstock.com/image-vector/mecca-travel-logo-al-haj-260nw-1244768023.jpg";
      //get current date
      var dateFormat = require('dateformat');
      dateFormat.i18n = {
        dayNames: [
          'Ming', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab',
          'Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'
        ],
        monthNames: [
          'Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
          'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
        ],
        timeNames: [
          'a', 'p', 'am', 'pm', 'A', 'P', 'AM', 'PM'
        ]
      };
      var now = new Date();
      var tglSkrang = dateFormat(now, "dddd, d mmmm yyyy");

      //console.log('base64Logo/; '+base64Logo);

      
      
      var qrCodeImage= await getQrCode(data['url_qr']);
      let base64Image = "";
      try{
        base64Image=qrCodeImage.split(';base64,').pop();
      }catch{
        base64Image=noImg.split(';base64,').pop();
      }
      fs.writeFile(path.join(__dirname, '../template/logo' + templatedata['nama_report'] + '.png'), base64Image, { encoding: 'base64' }, function (err) {
        //console.log(base64Logo);
        // generate report 
        var content = fs
          .readFileSync(path.resolve(__dirname, '../template/'+templatedata['nama_file']), 'binary');
        // console.log(content)
        var zip = new JSZip(content);
        var doc = new Docxtemplater();
        doc.loadZip(zip);
        doc.attachModule(imageModule);
        //console.log(data);
        data.image=path.resolve(__dirname, '../template/logo'+ templatedata['nama_report'] +'.png');
        doc.setData(data);
        // ambil data dari database
        //data['%image'] = base64Logo;
        //doc.setData(data)
        try {
          // render the document (replace all occurences of {first_name} by John, {last_name} by Doe, ...)
          doc.render()
        }
        catch (error) {
          var e = {
            message: error.message,
            name: error.name,
            stack: error.stack,
            properties: error.properties,
          }
          //console.log(JSON.stringify({error: e}));
          // The error thrown here contains additional information when logged with JSON.stringify (it contains a property object).
          throw error;
        }
        var buf = doc.getZip()
          .generate({ type: 'nodebuffer' });
        //res.send(buf);
        //res.end();
        // buf is a nodejs buffer, you can either write it to a file or do anything else with it.
        fs.writeFileSync(path.resolve(__dirname, '../template/' + templatedata['nama_report'] + '.docx'), buf);

        
        var wordBuffer = fs.readFileSync(path.resolve(__dirname, '../template/' + templatedata['nama_report'] + '.docx'))
       // res.send(wordBuffer);
        toPdf(wordBuffer).then(
          (pdfBuffer) => {
            res.send(pdfBuffer);
            res.end();
            fs.unlinkSync(path.resolve(__dirname, '../template/' + templatedata['nama_report']+ '.docx'));
            fs.unlinkSync(path.resolve(__dirname, '../template/logo'+ templatedata['nama_report'] +'.png'));
          }, (err) => {
            console.log(err)
          }
        )
      });

      //return res.status(200).send({ 'RC': '00', 'message': message,data});
    }
  }
    catch (error){
      console.log(error);
      return res.status(200).send({ 'RC': '99'});
    }
  },
  async   generateSuratTugasTTE(req, res, next) {
    // tarik dat
    var opts = {}
    opts.centered = false;
    opts.getImage = function (tagValue, tagName) {
      return fs.readFileSync(tagValue);
    }

    opts.getSize = function (img, tagValue, tagName) {
      return [90, 70];
    }

    let data = [];
    let templatedata = [];
    var noImg ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII='
    let dataMenimbang = [];
    let dataDasar = [];

    var imageModule = new ImageModule(opts);
    
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path2 = '/report/surat_tugas';
    const method = 'POST';
    
    const findOneQuery = `select * from eoffice.get_data_report($1,$2,$3,$4,$5::json)`;
    console.log(findOneQuery, [ip, path2, method, 'req.user.nip', JSON.stringify(req.body)]);
    try {
    var { rows, rowCount } = await db.query(findOneQuery, [ip, path2, method, 'req.user.nip', JSON.stringify(req.body)]);
    if (!rowCount) {
      return res.status(400).send({ 'RC': '07', 'message': 'Data Tidak Ditemukan' });
    } else {
      const message = rows[0].hasil;
      //console.log(rows[0]);
      if (message === 'sukses') {
        data = rows[0].data[0];
        templatedata = rows[0].templatedata;
        console.log(templatedata);
        console.log(data.m)
        //console.log(base64Image);
        let menimbangText = '';
        menimbangText = data.m.replace('<ul>','');
        menimbangText = menimbangText.replace(/<li>/g,'');
        menimbangText= menimbangText.replace('</ul>','');
        let arrayMenimbang = menimbangText.split('</li>');
        console.log(arrayMenimbang)
        for(let i = 0; i<(arrayMenimbang.length-1); i++){
          dataMenimbang.push({ "isi": arrayMenimbang[i] });
        }
        let dasarText = '';
        dasarText = data.d.replace('<ol>','');
        dasarText = dasarText.replace(/<li>/g,'');
        dasarText = dasarText.replace('</ol>','');
        let arrayDasar = dasarText.split('</li>');
        for(let i = 0; i<(arrayDasar.length-1); i++){
          dataDasar.push({ "isi": arrayDasar[i] });
        }

        data.m = dataMenimbang;
        data.d = dataDasar;
      }
      //console.log(templatedata);
      var doc = new Docxtemplater();
      //res.setHeader('Content-disposition', 'attachment; filename=SuratPendaftaranJamaah.docx');
      res.setHeader('Content-disposition', 'attachment; filename=' + templatedata['id'] + '.pdf');
      res.setHeader('filename', templatedata['nama_report'] + '.pdf');
      res.setHeader('Access-Control-Expose-Headers', 'filename');

      var qrCodeImage= await getQrCode(data['url_qr']);
      let base64Image = "";
      try{
        base64Image=qrCodeImage.split(';base64,').pop();
      }catch{
        base64Image=noImg.split(';base64,').pop();
      }
      fs.writeFile(path.join(__dirname, '../template/logo' + templatedata['id'] + '.png'), base64Image, { encoding: 'base64' }, function (err) {
        //console.log(base64Logo);
        // generate report 
        var content = fs
          .readFileSync(path.resolve(__dirname, '../template/'+templatedata['nama_file']), 'binary');
        // console.log(content)
        var zip = new JSZip(content);
        var doc = new Docxtemplater();
        doc.loadZip(zip);
        doc.attachModule(imageModule);
        //console.log(data);
        data.image=path.resolve(__dirname, '../template/logo'+ templatedata['id'] +'.png');
        doc.setData(data);
        try {
          // render the document (replace all occurences of {first_name} by John, {last_name} by Doe, ...)
          doc.render()
        }
        catch (error) {
          var e = {
            message: error.message,
            name: error.name,
            stack: error.stack,
            properties: error.properties,
          }
          // The error thrown here contains additional information when logged with JSON.stringify (it contains a property object).
          throw error;
        }
        var buf = doc.getZip()
          .generate({ type: 'nodebuffer' });
        // buf is a nodejs buffer, you can either write it to a file or do anything else with it.
        fs.writeFileSync(path.resolve(__dirname, '../template/' + templatedata['id'] + '.docx'), buf);

        
        var wordBuffer = fs.readFileSync(path.resolve(__dirname, '../template/' + templatedata['id'] + '.docx'))
       // res.send(wordBuffer);
        toPdf(wordBuffer).then(
          (pdfBuffer) => {
            fs.writeFileSync(path.resolve(__dirname, '../temp/' + templatedata['id'] + '.pdf'), pdfBuffer);

           // res.send(pdfBuffer);
           // res.end();

            fs.unlinkSync(path.resolve(__dirname, '../template/' + templatedata['id']+ '.docx'));
            fs.unlinkSync(path.resolve(__dirname, '../template/logo'+ templatedata['id'] +'.png'));
            //return res.status(200).send({ 'RC': '00', 'message': 'Sukses', data });
            // upload ke minio

            minioClient.fPutObject(process.env.MINIO_BUCKET,  req.body.surat_url, path.resolve(__dirname, '../temp/' + templatedata['id'] + '.pdf'), function(err, etag) {
              if (err) {console.log('Error Upload File.', err)
              return res.status(400).send({ 'message': 'Error Upload File' });
              }
               console.log('Berhasil Upload:'+req.body.surat_url)
           
    
            next()
          }) 
          }, (err) => {
            console.log(err)
          }
        )
      });

      //return res.status(200).send({ 'RC': '00', 'message': message,data});
    }
  }
    catch (error){
      console.log(error);
      return res.status(200).send({ 'RC': '99'});
    }
  },
  async   cetakLkhTarget(req, res) {
    // tarik dat
    var opts = {}
    opts.centered = false;
    /* opts.getImage = function (tagValue, tagName) {
      return fs.readFileSync(tagValue);
    }
 */
    opts.getSize = function (img, tagValue, tagName) {
      return [90, 70];
    }

    let data = [];
    let templatedata = [];
    //var noImg ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII='
    let dataMenimbang = [];
    let dataDasar = [];

    //var imageModule = new ImageModule(opts);
    
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path2 = '/kepegawaian/lkh/target/cetak';
    const method = 'POST';
    
    const findOneQuery = `select * from eoffice.get_data_report($1,$2,$3,$4,$5::json)`;
    console.log(findOneQuery, [ip, path2, method, req.user.nip, JSON.stringify(req.body)]);
    try {
    var { rows, rowCount } = await db.query(findOneQuery, [ip, path2, method, req.user.nip, JSON.stringify(req.body)]);
    if (!rowCount) {
      return res.status(400).send({ 'RC': '07', 'message': 'Data Tidak Ditemukan' });
    } else {
      const message = rows[0].hasil;
      //console.log(rows[0].data);
      if (message === 'sukses') {
        data = rows[0].data;
        templatedata = rows[0].templatedata;
        //console.log(templatedata);
        console.log(data)
        //console.log(base64Image);
        /* let menimbangText = '';
        menimbangText = data.m.replace('<ul>','');
        menimbangText = menimbangText.replace(/<li>/g,'');
        menimbangText= menimbangText.replace('</ul>','');
        let arrayMenimbang = menimbangText.split('</li>');
        console.log(arrayMenimbang)
        for(let i = 0; i<(arrayMenimbang.length-1); i++){
          dataMenimbang.push({ "isi": arrayMenimbang[i] });
        }
        let dasarText = '';
        dasarText = data.d.replace('<ol>','');
        dasarText = dasarText.replace(/<li>/g,'');
        dasarText = dasarText.replace('</ol>','');
        let arrayDasar = dasarText.split('</li>');
        for(let i = 0; i<(arrayDasar.length-1); i++){
          dataDasar.push({ "isi": arrayDasar[i] });
        }

        data.m = dataMenimbang;
        data.d = dataDasar; */
      }
      //console.log(templatedata);
      var doc = new Docxtemplater();
      //res.setHeader('Content-disposition', 'attachment; filename=SuratPendaftaranJamaah.docx');
      res.setHeader('Content-disposition', 'attachment; filename=' + templatedata['nama_report'] + '.pdf');
      res.setHeader('filename', templatedata['nama_report'] + '.pdf');
      res.setHeader('Access-Control-Expose-Headers', 'filename');

      /* var qrCodeImage= await getQrCode(data['url_qr']);*/
      let base64Image = "";
      /* try{
        base64Image=qrCodeImage.split(';base64,').pop();
      }catch{
        base64Image=noImg.split(';base64,').pop();
      }  */
      fs.writeFile(path.join(__dirname, '../template/logo' + templatedata['nama_report'] + '.png'), base64Image, { encoding: 'base64' }, function (err) {
        //console.log(base64Logo);
        // generate report 
        var content = fs
          .readFileSync(path.resolve(__dirname, '../template/'+templatedata['nama_file']), 'binary');
        // console.log(content)
        var zip = new JSZip(content);
        var doc = new Docxtemplater();
        doc.loadZip(zip);
        //doc.attachModule(imageModule);
        //console.log(data);
        //data.image=path.resolve(__dirname, '../template/logo'+ templatedata['nama_report'] +'.png');
        doc.setData(data);
        try {
          // render the document (replace all occurences of {first_name} by John, {last_name} by Doe, ...)
          doc.render()
        }
        catch (error) {
          var e = {
            message: error.message,
            name: error.name,
            stack: error.stack,
            properties: error.properties,
          }
          // The error thrown here contains additional information when logged with JSON.stringify (it contains a property object).
          throw error;
        }
        var buf = doc.getZip()
          .generate({ type: 'nodebuffer' });
        // buf is a nodejs buffer, you can either write it to a file or do anything else with it.
        fs.writeFileSync(path.resolve(__dirname, '../template/' + templatedata['nama_report'] + '.docx'), buf);

        
        var wordBuffer = fs.readFileSync(path.resolve(__dirname, '../template/' + templatedata['nama_report'] + '.docx'))
       // res.send(wordBuffer);
        toPdf(wordBuffer).then(
          (pdfBuffer) => {
            res.send(pdfBuffer);
            res.end();
            fs.unlinkSync(path.resolve(__dirname, '../template/' + templatedata['nama_report']+ '.docx'));
            //fs.unlinkSync(path.resolve(__dirname, '../template/logo'+ templatedata['nama_report'] +'.png'));
          }, (err) => {
            console.log(err)
          }
        )
    }
    );

      //return res.status(200).send({ 'RC': '00', 'message': message,data});
    }
  }
    catch (error){
      console.log(error);
      return res.status(200).send({ 'RC': '99'});
    }
  },
  async   cetakLkhRealisasi(req, res) {
    // tarik dat
    var opts = {}
    opts.centered = false;
    /* opts.getImage = function (tagValue, tagName) {
      return fs.readFileSync(tagValue);
    }
 */
    opts.getSize = function (img, tagValue, tagName) {
      return [90, 70];
    }

    let data = [];
    let templatedata = [];
    //var noImg ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII='
    let dataMenimbang = [];
    let dataDasar = [];

    //var imageModule = new ImageModule(opts);
    
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path2 = '/kepegawaian/lkh/realisasi/cetak';
    const method = 'POST';
    
    const findOneQuery = `select * from eoffice.get_data_report($1,$2,$3,$4,$5::json)`;
    console.log(findOneQuery, [ip, path2, method, req.user.nip, JSON.stringify(req.body)]);
    try {
    var { rows, rowCount } = await db.query(findOneQuery, [ip, path2, method, req.user.nip, JSON.stringify(req.body)]);
    if (!rowCount) {
      return res.status(400).send({ 'RC': '07', 'message': 'Data Tidak Ditemukan' });
    } else {
      const message = rows[0].hasil;
      //console.log(rows[0].data);
      if (message === 'sukses') {
        data = rows[0].data;
        templatedata = rows[0].templatedata;
        //console.log(templatedata);
        console.log(data)
        //console.log(base64Image);
        /* let menimbangText = '';
        menimbangText = data.m.replace('<ul>','');
        menimbangText = menimbangText.replace(/<li>/g,'');
        menimbangText= menimbangText.replace('</ul>','');
        let arrayMenimbang = menimbangText.split('</li>');
        console.log(arrayMenimbang)
        for(let i = 0; i<(arrayMenimbang.length-1); i++){
          dataMenimbang.push({ "isi": arrayMenimbang[i] });
        }
        let dasarText = '';
        dasarText = data.d.replace('<ol>','');
        dasarText = dasarText.replace(/<li>/g,'');
        dasarText = dasarText.replace('</ol>','');
        let arrayDasar = dasarText.split('</li>');
        for(let i = 0; i<(arrayDasar.length-1); i++){
          dataDasar.push({ "isi": arrayDasar[i] });
        }

        data.m = dataMenimbang;
        data.d = dataDasar; */
      }
      //console.log(templatedata);
      var doc = new Docxtemplater();
      //res.setHeader('Content-disposition', 'attachment; filename=SuratPendaftaranJamaah.docx');
      res.setHeader('Content-disposition', 'attachment; filename=' + templatedata['nama_report'] + '.pdf');
      res.setHeader('filename', templatedata['nama_report'] + '.pdf');
      res.setHeader('Access-Control-Expose-Headers', 'filename');

      /* var qrCodeImage= await getQrCode(data['url_qr']);*/
      let base64Image = "";
      /* try{
        base64Image=qrCodeImage.split(';base64,').pop();
      }catch{
        base64Image=noImg.split(';base64,').pop();
      }  */
      fs.writeFile(path.join(__dirname, '../template/logo' + templatedata['nama_report'] + '.png'), base64Image, { encoding: 'base64' }, function (err) {
        //console.log(base64Logo);
        // generate report 
        var content = fs
          .readFileSync(path.resolve(__dirname, '../template/'+templatedata['nama_file']), 'binary');
        // console.log(content)
        var zip = new JSZip(content);
        var doc = new Docxtemplater();
        doc.loadZip(zip);
        //doc.attachModule(imageModule);
        //console.log(data);
        //data.image=path.resolve(__dirname, '../template/logo'+ templatedata['nama_report'] +'.png');
        doc.setData(data);
        try {
          // render the document (replace all occurences of {first_name} by John, {last_name} by Doe, ...)
          doc.render()
        }
        catch (error) {
          var e = {
            message: error.message,
            name: error.name,
            stack: error.stack,
            properties: error.properties,
          }
          // The error thrown here contains additional information when logged with JSON.stringify (it contains a property object).
          throw error;
        }
        var buf = doc.getZip()
          .generate({ type: 'nodebuffer' });
        // buf is a nodejs buffer, you can either write it to a file or do anything else with it.
        fs.writeFileSync(path.resolve(__dirname, '../template/' + templatedata['nama_report'] + '.docx'), buf);

        
        var wordBuffer = fs.readFileSync(path.resolve(__dirname, '../template/' + templatedata['nama_report'] + '.docx'))
       // res.send(wordBuffer);
        toPdf(wordBuffer).then(
          (pdfBuffer) => {
            res.send(pdfBuffer);
            res.end();
            fs.unlinkSync(path.resolve(__dirname, '../template/' + templatedata['nama_report']+ '.docx'));
            //fs.unlinkSync(path.resolve(__dirname, '../template/logo'+ templatedata['nama_report'] +'.png'));
          }, (err) => {
            console.log(err)
          }
        )
    }
    );

      //return res.status(200).send({ 'RC': '00', 'message': message,data});
    }
  }
    catch (error){
      console.log(error);
      return res.status(200).send({ 'RC': '99'});
    }
  },
}

export default DocX;