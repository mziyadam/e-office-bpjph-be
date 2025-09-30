
import db from '../db';
import dotenv from 'dotenv';
import * as stream from 'stream';
import { degrees, PDFDocument, rgb, StandardFonts } from 'pdf-lib';
 

 
const { resolve } = require('path');

dotenv.config();

var Minio = require("minio");
var fs = require("fs");
var axios = require('axios');
var FormData = require('form-data');
var path = require('path');
const base64 = require('base64topdf');
import { Base64 } from 'js-base64';

if (process.env.MINIO_PHP_USE_SSL){
  var ssl = true;
}
else {
    var ssl = false;
  }


var minioClient = new Minio.Client({
  endPoint: process.env.MINIO_ENDPOINT,
  port:parseInt(process.env.MINIO_PORT),
  useSSL: false,
  accessKey: process.env.MINIO_ACCESSKEY,
  secretKey: process.env.MINIO_SECRETKEY
});

async function tteProses(pathlokal,pathTte,passphrase) {
  try {
   var path2 = process.env.API_TTE_SIGN_URL
  var username= process.env.API_TTE_USERNAME
  var password =  process.env.API_TTE_PASSWORD
  var hasil = 'sukses';

  var auth = 'Basic ' + Buffer.from(username + ':' + password).toString('base64');
 // let specimen = "data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg==";

   var pdfFile = pathlokal;
   console.log('pdfFile:'+pdfFile)

   let data = new FormData();
  // data.append('file', pdfFile);
  //data.append('file', fs.createReadStream('/C:/Users/ferna/Downloads/tes.pdf'));
  data.append('file', fs.createReadStream(pdfFile));
// data.append('file', fs.createReadStream('C:/Users/ferna/Documents/pdf/Nota Dinas.pdf'));
 // data.append('nik',  req.user.nip);
 data.append('nik',  req.user.nik);
  //data.append('passphrase', req.body.passphrase);
  data.append('passphrase',  passphrase);

  data.append('tampilan', 'visible');
  data.append('page', '1');
  data.append('linkQR', 'https://ptsp.halal.go.id/tte_surat/kemenko_bidang_pmk.pdf');
  data.append('xAxis', '10');
  data.append('yAxis', '10');
  data.append('width', '60');
  data.append('height', '60');

   let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: path2,
    headers: { 
      'Authorization': auth, 
      ...data.getHeaders()
    },
    responseType: "stream" ,
    data : data
  };
  // var pathTte2 = path.resolve(__dirname,  '../temp/' +    req.body.id + '-tte.pdf')
 // const writer = createWriteStream(pathTte2);


 // var pathTte = path.resolve(__dirname,  '../temp/' +    req.body.id + '-tte.pdf')
  /* axios(config).then(response => {
    
    response.data.pipe(fs.createWriteStream(pathTte));

   })
   .catch((error) => {

    console.log('errorxx:'+error);

    hasil= JSON.stringify(error.response.data)
  
  }); */
  try {
    const res = await axios(config);
    res.data.pipe(fs.createWriteStream(pathTte));

  } catch (error) {
    // Handle errors
  }

} catch (error) {
  console.log(error);

  hasil='gagal';
} 

  return hasil
}

const Surat = {
  async crudSuratTugas(req, res) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/api/admin/suratTugas';
    const method = 'POST';
    const findOneQuery = `select * from eoffice.surat_tugas_crud  ($1,$2,$3,$4,$5::json)`;
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

  async crudNotaDinas(req, res) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/api/admin/NotaDinas';
    const method = 'POST';
    const findOneQuery = `select * from eoffice.nota_dinas_crud  ($1,$2,$3,$4,$5::json)`;
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
  
  async crudSuratKeluar(req, res) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/api/admin/SuratKeluar';
    const method = 'POST';
    const findOneQuery = `select * from eoffice.surat_keluar_crud  ($1,$2,$3,$4,$5::json)`;
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
  
  async crudSuratMasuk(req, res) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/api/admin/SuratMasuk';
    const method = 'POST';
    const findOneQuery = `select * from eoffice.surat_masuk_crud  ($1,$2,$3,$4,$5::json)`;
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
  
  async changeStatus(req, res) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/api/surat/surat_keluar/approval';
    const method = 'POST';
    const findOneQuery = `select * from eoffice.surat_keluar_approval  ($1,$2,$3,$4,$5::json)`;
    console.log(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body)]);
    //console.log(req.user);
    try {
      const { rows, rowCount } = await db.query(findOneQuery, [ip, path, method, req.user.nip, req.body]);
      if (!rowCount) {
        return res.status(400).send({ 'RC': '05', 'message': 'Tidak Ada Data' });
      } else {
        var data = rows[0].data;
        console.log(rows);
        return res.status(200).send({ 'RC': '00', 'message': 'Sukses', data });
      }
    } catch (error) {
      console.log(error);
      return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi Atau Data', error });
    }
  },
  
  async changeStatusND(req, res) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/api/surat/nota_dinas/approval';
    const method = 'POST';
    const findOneQuery = `select * from eoffice.nota_dinas_approval  ($1,$2,$3,$4,$5::json)`;
    console.log(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body)]);
    //console.log(req.user);
    try {
      const { rows, rowCount } = await db.query(findOneQuery, [ip, path, method, req.user.nip, req.body]);
      if (!rowCount) {
        return res.status(400).send({ 'RC': '05', 'message': 'Tidak Ada Data' });
      } else {
        var data = rows[0].data;
        console.log(rows);
        return res.status(200).send({ 'RC': '00', 'message': 'Sukses', data });
      }
    } catch (error) {
      console.log(error);
      return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi Atau Data', error });
    }
  },
  
  async getApprovalDdl(req, res) {
    /// ddl header untuk web
    var param = {
      type:'get_ddl_approval',
      id_surat: req.params.id_surat
    }
    let findOneQuery = '';
    if(req.params.type_surat == 'surat_keluar'){
      findOneQuery = `select * from eoffice.surat_keluar_approval($1,$2,$3,$4,$5::json)`;
    }
    if(req.params.type_surat == 'nota_dinas'){
      findOneQuery = `select * from eoffice.nota_dinas_approval($1,$2,$3,$4,$5::json)`;
    }
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/api/surat/surat_keluar/getApprovalDdl';
    const method = 'GET';
    console.log(findOneQuery, [ip, path, method, req.user.nip, param]);
    try {
      const { rows, rowCount } = await db.query(findOneQuery, [ip, path, method, req.user.nip, param]);
      if (!rowCount) {
        return res.status(200).send({ 'RC': '05', 'message': 'Tidak ada Data' });
      } else {
        var data = rows[0].data;
        return res.status(200).send({ 'RC': '00', 'message': 'Sukses', data });
      }
    } catch (error) {
      return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi atau Data', error });
    }
  },
  
  async crudSuratLainya(req, res) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/api/admin/SuratLainnya';
    const method = 'POST';
    const findOneQuery = `select * from eoffice.surat_lainnya_crud  ($1,$2,$3,$4,$5::json)`;
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
  async crudTTE(req, res) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/api/surat/tte';
    const method = 'POST';
    const findOneQuery = `select * from eoffice.tte_surat_crud  ($1,$2,$3,$4,$5::json)`;

    //console.log(findOneQuery, [ip, path, method, 'verifikasi', JSON.stringify(req.body)]);
    // hapus file temp
    // var pathTte = path.resolve(__dirname,  '../temp/' +    req.body.id + '-tte.pdf')

  
   // fs.unlinkSync(req.pathlokal);

  //  fs.unlinkSync(pathTte);

   //  console.log(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body)]);
 //  console.log(req.user.nip);
    try {
   
      const { rows, rowCount } = await db.query(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body)]);
      if (!rowCount) {
        return res.status(400).send({ 'RC': '05', 'message': 'Tidak Ada Data' });
      } else {
        var data = rows[0].data;

        return res.status(200).send({ 'RC': rows[0].rc, 'message':rows[0].message , data });
      }
    } catch (error) {
      //console.log(error);
      return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi Atau Data', error });
    }
  },  
  async getSuratFileOld(req,res,next){
 
    if (!req.body.surat_url){
      return res.status(500).send('Url Surat Tidak Boleh Kosong');
    }
   
     req.body.type = 'update-status-tte'
     
     var bucket = process.env.MINIO_BUCKET
    var pathlokal = (__dirname, 'temp/' +  req.body.id+ '.pdf')
    var pathlokal = ('d:/temp2/' +  req.body.id+ '.pdf')

    var pathlokal2 = path.resolve(__dirname,  '../temp/' +    req.body.id+ '.pdf')
    req.pathlokal=pathlokal2;

  //  var pathlokal2 = (req.body.id+ '.pdf')

      console.log('path:'+pathlokal2)
     console.log('surat_url:'+req.body.surat_url)
     // fs.unlinkSync(pdfFile);
       fs.rmSync(pathlokal2, {
      force: true,
  });  
 

  minioClient.fGetObject(bucket,   req.body.surat_url,pathlokal2, function (err) {
    if (err) {

        console.log(err)
       var body=
          {
            "RC": "00",
            "message": "Sukses",
            "data": {
                "message": "File Tidak Ditemukan!"
            }
        }
            return res.status(200).send(body);
   
    }
    console.log('success')
    //return res.status(200).send('success');
    next()
  })
 
     /* try{ 
      await minioClient.fGetObject(bucket,req.body.surat_url,pathlokal2, function(error) {
        if(error) {
          var body=
          {
            "RC": "00",
            "message": "Sukses",
            "data": {
                "message": "File Tidak Ditemukan!"
            }
        }
            return res.status(200).send(body);
         }
         //return res.status(200).send('sukses');
         req.pathlokal=pathlokal2;
         next()
        })
    }
      catch (error) {
        var body=
          {
            "RC": "00",
            "message": "Sukses",
            "data": {
                "message": error
            }
        }
        return res.status(500).send(error);
      }  */


/*     try{ 
     await minioClient.getObject(bucket,req.body.surat_url, function(error, stream) {
       if(error) {
           return res.status(500).send(error);
        }
   try{
     //res.setHeader('Content-type', 'application/pdf');
      req.stream=stream;
      console.log('req.stream')
      //next()
     stream.pipe(res);
   }catch (error) {
     return res.status(500).send(error);
   }
     });
   }
     catch (error) {
       return res.status(500).send(error);
     } */
   
    
  },
  SignTTEOld(req,res,next){
    try {
   
      var path2 = process.env.API_TTE_SIGN_URL
      var username= process.env.API_TTE_USERNAME
      var password =  process.env.API_TTE_PASSWORD
      
 
      var auth = 'Basic ' + Buffer.from(username + ':' + password).toString('base64');
     // let specimen = "data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg==";
   
       var pdfFile = req.pathlokal;
       console.log('path2:'+pdfFile)

       let data = new FormData();
      // data.append('file', pdfFile);
      //data.append('file', fs.createReadStream('/C:/Users/ferna/Downloads/tes.pdf'));
      data.append('file', fs.createReadStream(pdfFile));
    // data.append('file', fs.createReadStream('C:/Users/ferna/Documents/pdf/Nota Dinas.pdf'));
     // data.append('nik',  req.user.nip);
     data.append('nik',  req.user.nik);
      data.append('passphrase', req.body.passphrase);
      data.append('tampilan', 'visible');
      data.append('page', '1');
      data.append('linkQR', 'https://localhost');
      data.append('xAxis', '10');
      data.append('yAxis', '10');
      data.append('width', '40');
      data.append('height', '40');

       let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: path2,
        headers: { 
          'Authorization': auth, 
          ...data.getHeaders()
        },
        responseType: "stream" ,
        data : data
      };
      
      axios.request(config)
      .then((response) => {
        // console.log(JSON.stringify(response.data));
        //fs.unlinkSync(pdfFile);
        // return res.status(200).send(response.data);
        // str = str.substring(0, str.length - 1);
        var urltte = req.body.surat_url.substring(0, req.body.surat_url.length - 4);
 

        var pathTte = path.resolve(__dirname,  '../temp/' +    req.body.id + '-tte.pdf')

        console.log('pathTte:'+pathTte)
        const writer = fs.createWriteStream(pathTte); 
        response.data.pipe(writer);
        console.log('urltte:'+urltte + '-tte.pdf')
        // req.pathTTE = pathTte
        req.body.tte_url = urltte + '-tte.pdf'
        next()

      })
      .catch((error) => {

        console.log('errorxx:'+error);


       // fs.unlinkSync(pdfFile);
        req.body.tte_status = -1
        req.body.tte_url = null
        req.body.tte_keterangan =  JSON.stringify(error.response.data)
        next()
        //console.log('xxx:'+error.value);
      });
 
    } catch (error) {
       console.log(error);
      // fs.unlinkSync(pdfFile);
      return res.status(400).send({ 'RC': '99', 'message2': error});
    } 
   // fs.unlinkSync(pdfFile);
 
  }, 
  uploadTTE(req,res,next){

    
    // var pathTte = path.resolve(__dirname,  '../temp/' +    req.body.id + '-tte.pdf')
   // pathTte='d:/Dokumen/git/bpjph/bpjph_eoffice/eoffice-be/src/temp/01a45269-ef8f-44d6-919f-c2164cf9302a-tte.pdf';
    
    //minioClient.fPutObject(process.env.MINIO_BUCKET, req.body.tte_url,   pathTte, function(err, etag) {
      //console.log('req.pathMinioDestination:'+req.pathMinioDestination);
    //  console.log('req.pathSign:'+req.pathSign);
    minioClient.fPutObject(process.env.MINIO_BUCKET, req.pathMinioDestination,   req.pathSign, function(err, etag) {

      // minioClient.putObject(process.env.MINIO_BUCKET,  urltte + '-tte.pdf', response.data, function(err, etag) {
         if (err) {console.log('Error Upload File.', err)
         return res.status(400).send({ 'message': 'Error Upload File' });
         }
          console.log('Berhasil Upload:'+req.pathSign)
          req.body.tte_status = req.tte_status_berhasil
          req.body.tte_keterangan = req.tte_keterangan_berhasil
          fs.rmSync(req.pathSign, {
            force: true,
           });  
          next()
        //return res.status(200).send({ 'message': 'Berhasil Upload' });
         }) 
  }, 
  async SignTTEx(req,res,next){
    try {
   
      var path2 = process.env.API_TTE_SIGN_URL
      var username= process.env.API_TTE_USERNAME
      var password =  process.env.API_TTE_PASSWORD
      
 
      var auth = 'Basic ' + Buffer.from(username + ':' + password).toString('base64');
     // let specimen = "data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg==";
   
       var pdfFile = req.pathlokal;
       console.log('path2:'+pdfFile)

       let data = new FormData();
      // data.append('file', pdfFile);
      //data.append('file', fs.createReadStream('/C:/Users/ferna/Downloads/tes.pdf'));
      data.append('file', fs.createReadStream(pdfFile));
    // data.append('file', fs.createReadStream('C:/Users/ferna/Documents/pdf/Nota Dinas.pdf'));
     // data.append('nik',  req.user.nip);
     data.append('nik',  req.user.nik);
      data.append('passphrase', req.body.passphrase);
      data.append('tampilan', 'visible');
      data.append('page', '1');
      data.append('linkQR', 'https://localhost');
      data.append('xAxis', '10');
      data.append('yAxis', '10');
      data.append('width', '40');
      data.append('height', '40');

       let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: path2,
        headers: { 
          'Authorization': auth, 
          ...data.getHeaders()
        },
        responseType: "stream" ,
        data : data
      };
      var pathTte2 = path.resolve(__dirname,  '../temp/' +    req.body.id + '-tte.pdf')
     // const writer = createWriteStream(pathTte2);

      axios(config).then(response => {
            //  console.log(data);
            var urltte = req.body.surat_url.substring(0, req.body.surat_url.length - 4);
 

            var pathTte = path.resolve(__dirname,  '../temp/' +    req.body.id + '-tte.pdf')
    
        console.log('pathTte:'+pathTte)
         
        response.data.pipe(fs.createWriteStream(pathTte));



        console.log('urltte:'+urltte + '-tte.pdf')
        // req.pathTTE = pathTte
        req.body.tte_url = urltte + '-tte.pdf'
        next()
       });

/*       stream.on('data', data => {
        //  console.log(data);
        var urltte = req.body.surat_url.substring(0, req.body.surat_url.length - 4);
 

        var pathTte = path.resolve(__dirname,  '../temp/' +    req.body.id + '-tte.pdf')

        console.log('pathTte:'+pathTte)
        const writer = fs.createWriteStream(pathTte); 
        stream.pipe(writer);
        console.log('urltte:'+urltte + '-tte.pdf')
        // req.pathTTE = pathTte
        req.body.tte_url = urltte + '-tte.pdf'
          console.log("stream done");
      });
      
      stream.on('end', () => {
    
          next()
      });
 */
     /*    axios.request(config)
      .then((response) => {
        // console.log(JSON.stringify(response.data));
        //fs.unlinkSync(pdfFile);
        // return res.status(200).send(response.data);
        // str = str.substring(0, str.length - 1);

       //  console.log('responsedata:'+JSON.stringify(response.data));
        var urltte = req.body.surat_url.substring(0, req.body.surat_url.length - 4);
 

        var pathTte = path.resolve(__dirname,  '../temp/' +    req.body.id + '-tte.pdf')

       // console.log('pathTte:'+pathTte)
       // const writer = fs.createWriteStream(pathTte); 
        //response.data.pipe(writer);

        fs.writeFileSync(pathTte, response.data.data.toString());


        console.log('urltte:'+urltte + '-tte.pdf')
        // req.pathTTE = pathTte
        req.body.tte_url = urltte + '-tte.pdf'
        next()

      })
      .catch((error) => {

        console.log('errorxx:'+error);


       // fs.unlinkSync(pdfFile);
        req.body.tte_status = -1
        req.body.tte_url = null
        req.body.tte_keterangan =  JSON.stringify(error.response.data)
        next()
        //console.log('xxx:'+error.value);
      });  */
 
    } catch (error) {
       console.log(error);
      // fs.unlinkSync(pdfFile);
      return res.status(400).send({ 'RC': '99', 'message2': error});
    } 
   // fs.unlinkSync(pdfFile);
 
  }, 
  async uploadTTE2(req,res,next){

    try {
    var pathTte = path.resolve(__dirname,  '../temp/' +    req.body.id + '-tte.pdf')
    var pathlokal = path.resolve(__dirname,  '../temp/' +    req.body.id+ '.pdf')
    var urltte = req.body.surat_url.substring(0, req.body.surat_url.length - 4);
    req.body.tte_url = urltte + '-tte.pdf'
    var passphrase = req.body.passphrase
    req.body.pathTte= pathTte;
    var urltte = req.body.surat_url.substring(0, req.body.surat_url.length - 4);
    console.log(' req.body.pathTte:'+  req.body.pathTte)
    console.log('pathlokal:'+ pathlokal)
    // pathTte='d:/Dokumen/git/bpjph/bpjph_eoffice/eoffice-be/src/temp/01a45269-ef8f-44d6-919f-c2164cf9302a-tte.pdf';
   const urlTTe =  await tteProses(pathlokal,pathTte,passphrase)
   console.log('hasuil:'+ urlTTe)
  
   if (urlTTe != 'sukses') {
    
       // fs.unlinkSync(pdfFile);
       req.body.tte_status = -1
       req.body.tte_url = null
       req.body.tte_keterangan =  urlTTe
      // fs.unlinkSync(pathTte);
      console.log('notsukse:');
      var pathTte= req.body.pathTte;
      console.log('crudpathTte:'+pathTte)
      fs.rmSync(pathTte, {
        force: true,
        });
        fs.rmSync(pathlokal, {
          force: true,
          });
    
       next()
   }
  else {
    try {
    minioClient.fPutObject(process.env.MINIO_BUCKET, req.body.tte_url,   pathTte, function(err, etag) {

      // minioClient.putObject(process.env.MINIO_BUCKET,  urltte + '-tte.pdf', response.data, function(err, etag) {
         if (err) {console.log('Error Upload File.', err)
         return res.status(400).send({ 'message': 'Error Upload File' });
         }
          console.log('Berhasil Upload:'+req.body.tte_url)
          req.body.tte_status = 1
          req.body.tte_keterangan = 'Berhasil Upload'
          req.body.tte_url = urltte + '-tte.pdf'
       //   fs.unlinkSync(pathTte);
       console.log('sukse:');
       var pathTte= req.body.pathTte;
       console.log('crudpathTte:'+pathTte)

      /*  fs.rmSync(pathTte, {
        force: true,
        });
        fs.rmSync(pathlokal, {
          force: true,
          }); */
          next()
        //return res.status(200).send({ 'message': 'Berhasil Upload' });
         }) 
         .catch((error) => {

          console.log('errorxx:'+error);
  
  
         // fs.unlinkSync(pdfFile);
          req.body.tte_status = -1
          req.body.tte_url = null
          req.body.tte_keterangan =  JSON.stringify(error.response.data)
       //   fs.unlinkSync(pathTte);
       var pathTte= req.body.pathTte;
       console.log('crudpathTte:'+pathTte)
  
   /*     fs.rmSync(pathTte, {
        force: true,
        });
        fs.rmSync(pathlokal, {
          force: true,
          }); */
          next()
          //console.log('xxx:'+error.value);
        })
      } catch (error) {
        console.log('Error:' + error.message);
      }
      }
    } catch (error) {
      console.log('Error:' + error.message);
    }
  }, 
  async getSuratFile(req,res,next){
 
    if (!req.body.surat_url){
      return res.status(500).send('Url Surat Tidak Boleh Kosong');
    }
   
     req.body.type = 'update-status-tte'

    var bucket = process.env.MINIO_BUCKET
   try{ 
    await minioClient.getObject(bucket,req.body.surat_url, function(error, stream) {
      if(error) {
          return res.status(500).send(error);
       }
  try{
    //res.setHeader('Content-type', 'application/pdf');
     req.stream=stream;
     //console.log(req.stream)
     next()
    //stream.pipe(res);
  }catch (error) {
    return res.status(500).send(error);
  }
    });
  }
  catch (error) {
    return res.status(500).send(error);
  }

 
 },
  async SignTTE(req,res,next){
    try {
   
      var path2 = process.env.API_TTE_SIGN_URL
      var Bearer  = "Bearer "+process.env.API_TTE_BEARER
      var username= req.user.nik ////req.user.user_tte//process.env.API_TTE_USERNAME
      var password = req.body.passphrase //req.user.pwd_tte//process.env.API_TTE_PASSWORD
      
     // let specimen = "data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg==";
  
       /*  let config = {
        headers: {
          Authorization: Bearer,
        }
      }  */

      
      var pdfFile = req.stream;
      var SpecimenFile =fs.createReadStream(path.resolve(__dirname, '../template/tte-logo.jpeg'));
      var data = new FormData();
      data.append('username', username);
      data.append('passphrase', password);
      data.append('otp', req.otp);
      data.append('x', '0');
      data.append('y', '0');
      data.append('width', '580');
      data.append('height', '80');
      data.append('reason', 'TTE BPJPH');
      data.append('location', 'jakarta');
      data.append('page', '1');
      //data.append('pdf', fs.readFileSync(new URL('file://d:/temp/SPH.pdf')));
      //data.append('pdf', req.stream);
      data.append('pdf',pdfFile)
      data.append('img', SpecimenFile);
      if (process.env.AXIOS_PROXY_URL){
        var config = {
          method: 'post',
          url: path2,
         // httpsAgent: agent,
         proxy : {
          host: process.env.AXIOS_PROXY_URL,
          port: process.env.AXIO_PROXY_PORT
        },
          headers: { 
            'Authorization': Bearer, 
            ...data.getHeaders()
          },
          data : data
        };
      }
      else {
        var config = {
          method: 'post',
          url: path2,
         // httpsAgent: agent,
        headers: { 
            'Authorization': Bearer, 
            ...data.getHeaders()
          },
          data : data
        };
      }
      /*
      var config = {
        method: 'post',
        url: path2,
        headers: { 
          'Authorization': Bearer, 
          ...data.getHeaders()
        },
        data : data
      };
      */
      axios(config)
        .then(function (response) {
         // req.otp = response.data.message
         // console.log(JSON.stringify(response.data.message));
          //console.log('otp:'+otp)
         // next()
        // return res.status(200).send(response.data);
        req.tte = response.data.data.toString()
  /*       var bin = Base64.atob(req.tte);
        fs.writeFile((path.resolve(__dirname,'../template/result-1.pdf')),  bin ,'binary', error => {
          if (error) {
            throw error;
        } else {
            console.log('binary saved!');
        }
    }); */
        console.log('berhasil TTE BPPT')
        next()
        })
        .catch(function (error) {
           console.log(error);
          return res.status(400).send({ 'RC': '99', 'error': error});
  
        });
       
    } catch (error) {
       console.log(error);
  
      return res.status(400).send({ 'RC': '99', 'message2': error});
    } 
    
  
  }, 
  async uploadTTEMinio(req,res,next){
 
 
      //return res.status(200).send({ 'RC': '00', 'message': nama});
     var bin = Base64.atob(req.tte);
     var streamdata = Buffer.from(bin, 'binary');
     var urltte = req.body.surat_url.substring(0, req.body.surat_url.length - 4);

     req.body.tte_url = urltte + '-tte.pdf'

    
      //  var nama  = str.substring(0, 5)+'/'+str.substring(5, 10)+'/'+str.substring(10, 15)+'/'+str.substring(15, 20)+'/'+req.body.tipe_upload+'.jpeg';	
        minioClient.putObject(process.env.MINIO_BUCKET, req.body.tte_url, streamdata, function(err, etag) {
        if (err) {console.log('Error Upload File.', err)
        
        return res.status(400).send({ 'message': 'Error Upload File' });
        }
         console.log('Berhasil Upload:'+req.namaFile)
        req.body.tte_status = 1
        req.body.tte_keterangan = 'Berhasil Upload'
         next()
       // return res.status(200).send({ 'message': 'Berhasil Upload' });
        }) 
    
   
 
      
  },
  async getOTP(req,res,next){
    try {
      var otp ='';


      var path2 = process.env.API_TTE_OTP_URL
      var Bearer  = "Bearer "+process.env.API_TTE_BEARER
      var username= req.user.nik ////req.user.user_tte//process.env.API_TTE_USERNAME
      var password = req.body.passphrase //req.user.pwd_tte//process.env.API_TTE_PASSWORD
      
      console.log('user_tte:'+username)
      console.log('pwd_tte'+password)
      // var agent = new httpsProxyAgent({host:'10.100.88.101',port:'3128'});
     /*  let config = {
        headers: {
          Authorization: Bearer,
        }
      }  */
      var data = new FormData();
      data.append('username', username);
      data.append('passphrase', password);
      if (process.env.AXIOS_PROXY_URL){
      var config = {
        method: 'post',
        url: path2,
       // httpsAgent: agent,
       proxy : {
        host: process.env.AXIOS_PROXY_URL,
        port: process.env.AXIO_PROXY_PORT
      },
        headers: { 
          'Authorization': Bearer, 
          ...data.getHeaders()
        },
        data : data
      };
    }
    else {
      var config = {
        method: 'post',
        url: path2,
       // httpsAgent: agent,
      headers: { 
          'Authorization': Bearer, 
          ...data.getHeaders()
        },
        data : data
      };
    }
      axios(config)
        .then(function (response) {
          req.otp = response.data.message
         // console.log(JSON.stringify(response.data.message));
         // console.log('otp:'+otp)
          next()
         })
        .catch(function (error) {
          console.log(error);
          return res.status(400).send({ 'RC': '98', 'message': error});

        });
       
    } catch (error) {
      console.log(error);
      return res.status(400).send({ 'RC': '97', 'message': error});
    } 
    
 
  },
  async StoreFileTTE(req, res, next) {
    try {

      
      var tte_url =  process.env.TTE_URL+'/document/store'
      var tte_user = process.env.TTE_USER
      var tte_pwd = process.env.TTE_PWD
      var tte_regarding = process.env.TTE_REGARDING
      var tte_type = process.env.TTE_TYPE

      var nik = req.user.nik //req.user.nik//process.env.API_TTE_USERNAME
 
      var pdfFile = req.stream;
      var data = new FormData();
      data.append('nik', nik);
      data.append('regarding', tte_regarding);
      data.append('type', tte_type);
      data.append('anchor', '^');
      data.append('paper_type', 'P');
      //console.log('data2:'+JSON.stringify(data))
      data.append('file', pdfFile)
   
      if (process.env.AXIOS_PROXY_URL) {
        var config = {
          method: 'post',
          maxBodyLength: Infinity,
          auth: {
            username: tte_user,
            password: tte_pwd
           },
          url: tte_url,
          // httpsAgent: agent,
          proxy: {
            host: process.env.AXIOS_PROXY_URL,
            port: process.env.AXIO_PROXY_PORT
          },
          headers: {
            'Accept': 'application/json', 
           // 'Authorization': 'Basic ZXZpdGE6U25Jc1hOQWZneGdKNmREckJOY3Q=',
           'Authorization': 'Basic '+process.env.TTE_AUTH,
           ...data.getHeaders()
          },
          data: data
        };
      }
      else {
        var config = {
          method: 'post',
          maxBodyLength: Infinity,
          url: tte_url,
          // httpsAgent: agent,
          headers: {
            'Accept': 'application/json', 
            //'Authorization': 'Basic ZXZpdGE6U25Jc1hOQWZneGdKNmREckJOY3Q=',
            'Authorization': 'Basic '+process.env.TTE_AUTH,
            ...data.getHeaders()
          },
          data: data
        };
      }
      console.log('header:'+JSON.stringify(config.headers))
       axios(config)
        .then(function (response) {
           console.log(' response.status ' + response.status)
           console.log(' response.data.data.id ' + response.data.data.id)
           console.log(' response.data ' + JSON.stringify(response.data))

          if(response.status==200 & (response.data.data.id!=null || response.data.data.id !="") ) {
            console.log('berhasil store TTE KEMENAG')

            req.dok_id =response.data.data.id;

            next()
          }
          else {
          //  console.log('gagal tte');

         //   return res.status(response.status).send({ 'RC': '99', 'message' : 'gagal TTE' });

         if (error.response) {
          // Request made and server responded
          console.log('error.response.status:'+error.response.status);  // Status code (400)
          console.log('error.response.data:'+error.response.data);    // Response body
          console.log('error.response.headers:'+error.response.headers); // Headers

          return res.status(200).send(error.response.data)  ;


        } else if (error.request) {
          // Request was made but no response was received
          console.log('error.request:'+error.request);
          return res.status(200).send({ 'RC': '99', 'message': error.request });

        } else {
          // Something happened in setting up the request
          console.log('error.message:'+ error.message);
          return res.status(200).send({ 'RC': '99', 'message': error.message});

        }

          }
          
 
   
      
        })
        .catch(function (error) {
        //  console.log('axios error:'+error);
      //    return res.status(400).send({ 'RC': '99', 'error': error });

      if (error.response) {
        // Request made and server responded
        console.log('error.response.status:'+error.response.status);  // Status code (400)
        console.log('error.response.data:'+error.response.data);    // Response body
        console.log('error.response.headers:'+error.response.headers); // Headers

        return res.status(200).send(error.response.data)  ;


      } else if (error.request) {
        // Request was made but no response was received
        console.log('error.request:'+error.request);
        return res.status(200).send({ 'RC': '99', 'message': error.request });

      } else {
        // Something happened in setting up the request
        console.log('error.message:'+ error.message);
        return res.status(200).send({ 'RC': '99', 'message': error.message});

      }
        });

    } catch (error) {
      console.log('error:'+error);

      return res.status(200).send({ 'RC': '99', 'message2': error });
    }

  },
  async SignFilePassphraseTTE(req, res, next) {
    try {

      
      var tte_url =  process.env.TTE_URL+'/document/process/signature'
      var tte_user = process.env.TTE_USER
      var tte_pwd = process.env.TTE_PWD

      var nik = req.user.nik //req.user.nik//process.env.API_TTE_USERNAME
     // var pasphrase = req.user.pwd_tte//process.env.API_TTE_PASSWORD
      var pasphrase = req.body.passphrase//process.env.API_TTE_PASSWORD

      var pdfFile = req.stream;
      var data = new FormData();
      data.append('nik', nik);
      data.append('passphrase', pasphrase);
      data.append('document_id', req.dok_id);
      data.append('anchor', "^");
      data.append('is_final', 1);
      console.log('nik:'+nik)
      console.log('pasphrase:'+pasphrase)
      console.log('document_id:'+req.dok_id)
      if (process.env.AXIOS_PROXY_URL) {
        var config = {
          method: 'post',
          maxBodyLength: Infinity,
          responseType: 'arraybuffer',
          responseEncoding: 'binary',

          auth: {
            username: tte_user,
            password: tte_pwd
           },
          url: tte_url,
          // httpsAgent: agent,
          proxy: {
            host: process.env.AXIOS_PROXY_URL,
            port: process.env.AXIO_PROXY_PORT
          },
          headers: {
            'Accept': 'application/json', 
            //'Authorization': 'Basic ZXZpdGE6U25Jc1hOQWZneGdKNmREckJOY3Q=',
            'Authorization': 'Basic '+process.env.TTE_AUTH,

            ...data.getHeaders()
          },
          data: data
        };
      }
      else {
        var config = {
          method: 'post',
          maxBodyLength: Infinity,
          url: tte_url,
          responseType: 'arraybuffer',
          responseEncoding: 'binary',
          // httpsAgent: agent,
          headers: {
            'Accept': 'application/json', 
            'Authorization': 'Basic '+process.env.TTE_AUTH,
            ...data.getHeaders()
          },
          data: data
        };
      }
       axios(config)
        .then(function (response) {
           console.log(' response.status ' + response.status)

          if(response.status=200) {
            req.tte = Buffer.from(response.data).toString("base64");
             
            // console.log(req.stream)
            
            console.log('berhasil TTE BSSN')

             next()
          }
          else {
          //  return res.status(200).send({ 'RC': '99','message' :  response.data.message});
 //return res.status(400).send({ 'RC': '99', 'error': JSON.stringify(error)  });
 if (error.response) {
  // Request made and server responded
  console.log('error.response.status:'+error.response.status);  // Status code (400)
  console.log('error.response.data:'+error.response.data);    // Response body
  console.log('error.response.headers:'+error.response.headers); // Headers

  return res.status(200).send(error.response.data)  ;


} else if (error.request) {
  // Request was made but no response was received
  console.log('error.request:'+error.request);
  return res.status(400).send({ 'RC': '99', 'message': error.request });

} else {
  // Something happened in setting up the request
  console.log('error.message:'+ error.message);
  return res.status(400).send({ 'RC': '99', 'message': error.message});

}
          }
          
 
   
      
        })
        .catch(function (error) {
         // console.log(error);
         // return res.status(400).send({ 'RC': '99', 'error': error });
         if (error.response) {
          // Request made and server responded
          console.log('error.response.status:'+error.response.status);  // Status code (400)
          console.log('error.response.data:'+error.response.data);    // Response body
          console.log('error.response.headers:'+error.response.headers); // Headers

          return res.status(200).send(error.response.data)  ;


        } else if (error.request) {
          // Request was made but no response was received
          console.log('error.request:'+error.request);
          return res.status(200).send({ 'RC': '99', 'message': error.request });

        } else {
          // Something happened in setting up the request
          console.log('error.message:'+ error.message);
          return res.status(200).send({ 'RC': '99', 'message': error.message});

        }
        });

    } catch (error) {
     // console.log(error);

   //   return res.status(400).send({ 'RC': '99', 'message2': error });
   if (error.response) {
    // Request made and server responded
    console.log('error.response.status:'+error.response.status);  // Status code (400)
    console.log('error.response.data:'+error.response.data);    // Response body
    console.log('error.response.headers:'+error.response.headers); // Headers

    return res.status(200).send(error.response.data)  ;


  } else if (error.request) {
    // Request was made but no response was received
    console.log('error.request:'+error.request);
    return res.status(200).send({ 'RC': '99', 'message': error.request });

  } else {
    // Something happened in setting up the request
    console.log('error.message:'+ error.message);
    return res.status(200).send({ 'RC': '99', 'message': error.message});

  }
  }

  },
  async getSuratFileBSSN(req,res,next){
 
    if (!req.body.surat_url){
      return res.status(500).send('Url Surat Tidak Boleh Kosong');
    }
   
     req.body.type = 'update-status-tte'
     
     var bucket = process.env.MINIO_BUCKET
    //var pathlokal = (__dirname, 'temp/' +  req.body.id+ '.pdf')
    //var pathlokal = ('d:/temp2/' +  req.body.id+ '.pdf')

   // var pathlokal2 = path.resolve(__dirname,  '../temp/' +    req.body.id+ '.pdf')
  //  req.pathlokal=pathlokal2;

  //  var pathlokal2 = (req.body.id+ '.pdf')

    // console.log('path:'+pathlokal2)
     console.log('tte_status:'+req.body.tte_status)
     // fs.unlinkSync(pdfFile);
     /*   fs.rmSync(pathlokal2, {
      force: true,
     });   */
 
    // var pathMinio = "";
     if (req.body.tte_status==0 || req.body.tte_status  ==-1) {
       req.pathMinioSource =req.body.surat_url;
       req.pathMinioDestination =req.body.tte_url;
       req.pathLokal = path.resolve(__dirname,  '../temp/' +    req.body.id+ '.pdf')
       req.pathSign = path.resolve(__dirname,  '../temp/' +    req.body.id+ '-tte.pdf')
       req.tte_status_berhasil = 1
       req.tte_status_gagal = -1
       req.tte_keterangan_berhasil = 'Berhasil Upload TTE'
       req.tte_keterangan_gagal = 'Gagal Upload'
       req.anchor = '^'

     }
     else if  (req.body.tte_status==4 || req.body.tte_status  ==-2) {
      req.pathMinioSource =req.body.surat_url;
      req.pathMinioDestination =req.body.paraf_url;
      req.pathLokal = path.resolve(__dirname,  '../temp/' +    req.body.id+ '.pdf')
      req.pathSign = path.resolve(__dirname,  '../temp/' +    req.body.id+ '-paraf.pdf')
      req.tte_status_berhasil = 5
      req.tte_status_gagal = -2
      req.tte_keterangan_berhasil = 'Berhasil Upload Paraf'
      req.tte_keterangan_gagal = 'Gagal Upload'
      req.anchor = '$'

     }
     else if (req.body.tte_status==5 || req.body.tte_status  ==-3){
      req.pathMinioSource =req.body.paraf_url;
      req.pathMinioDestination =req.body.tte_url;
      req.pathLokal = path.resolve(__dirname,  '../temp/' +    req.body.id+ '-paraf.pdf')
      req.pathSign = path.resolve(__dirname,  '../temp/' +    req.body.id+ '-tte.pdf')
      req.tte_status_berhasil = 1
      req.tte_status_gagal = -3
      req.tte_keterangan_berhasil = 'Berhasil Upload TTE'
      req.tte_keterangan_gagal = 'Gagal Upload' 
      req.anchor = '^'

    }

  minioClient.fGetObject(bucket,   req.pathMinioSource,req.pathLokal, function (err) {
    if (err) {

        console.log(err)
       var body=
          {
            "RC": "00",
            "message": "Sukses",
            "data": {
                "message": "File Tidak Ditemukan!"
            }
        }
            return res.status(200).send(body);
   
    }
    console.log('success')
    //return res.status(200).send('success');
    next()
  })
 
     /* try{ 
      await minioClient.fGetObject(bucket,req.body.surat_url,pathlokal2, function(error) {
        if(error) {
          var body=
          {
            "RC": "00",
            "message": "Sukses",
            "data": {
                "message": "File Tidak Ditemukan!"
            }
        }
            return res.status(200).send(body);
         }
         //return res.status(200).send('sukses');
         req.pathlokal=pathlokal2;
         next()
        })
    }
      catch (error) {
        var body=
          {
            "RC": "00",
            "message": "Sukses",
            "data": {
                "message": error
            }
        }
        return res.status(500).send(error);
      }  */


/*     try{ 
     await minioClient.getObject(bucket,req.body.surat_url, function(error, stream) {
       if(error) {
           return res.status(500).send(error);
        }
   try{
     //res.setHeader('Content-type', 'application/pdf');
      req.stream=stream;
      console.log('req.stream')
      //next()
     stream.pipe(res);
   }catch (error) {
     return res.status(500).send(error);
   }
     });
   }
     catch (error) {
       return res.status(500).send(error);
     } */
   
    
  },
  async SignTTEBSSN(req,res,next){
    try {
   
      var path2 = process.env.API_TTE_SIGN_URL
      var nik= req.user.nik  //req.user.nik ////req.user.user_tte//process.env.API_TTE_USERNAME
      var passphrase = req.body.passphrase //req.user.pwd_tte//process.env.API_TTE_PASSWORD
      var linkQR = req.body.url_tte
      var file =req.pathLokal
      console.log('linkQR:'+linkQR)
      console.log('req.user:'+JSON.stringify(req.user))

      console.log('req.user.nik'+req.user.nik)
     // let specimen = "data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg==";
  
       /*  let config = {
        headers: {
          Authorization: Bearer,
        }
      }  */

      
      //var pdfFile = req.stream;
     // var SpecimenFile =fs.createReadStream(path.resolve(__dirname, '../template/tte-logo.jpeg'));
      var data = new FormData();
      data.append('file', fs.createReadStream(file));

      data.append('nik', nik);
      data.append('passphrase', passphrase);
      data.append('tampilan', 'visible');
      data.append('image', 'false');
      data.append('linkQR', linkQR);

      data.append('xAxis', '0');
      data.append('yAxis', '0');
      data.append('width', '40');
      data.append('height', '40');
      data.append('tag_koordinat', req.anchor);
      //data.append('page', '1');
      //data.append('pdf', fs.readFileSync(new URL('file://d:/temp/SPH.pdf')));
      //data.append('pdf', req.stream);
      //data.append('file',file)
 
        var config = {
          method: 'post',
          maxBodyLength: Infinity,
          url: path2,
         // responseType: 'arraybuffer',
          responseEncoding: 'binary',
         // httpsAgent: agent,
        headers: { 
            'Authorization': 'Basic '+ process.env.API_TTE_BEARER , 
            ...data.getHeaders()
          },
          responseType: "stream" ,
          data : data
        };
    
        //var pathTte = path.resolve(__dirname,  '../temp/' +    req.body.id + '-tte.pdf')
       // console.log('pathTte:'+pathTte)
       // const writer = fs.createWriteStream(pathTte); 
       console.log('pathTte:'+req.pathSign)
       const writer = fs.createWriteStream(req.pathSign); 

       //  const response = await axios(config).catch((err) => console.log(err));
   
        const response = await axios(config).catch((err) => {
        console.log(err)
        return res.status(400).send({ 'RC': '99', 'message2': err})
        }
        );
    

         response.data.pipe(writer)
  
      return new Promise((resolve, reject) => {
          writer.on('finish', () => {
              console.log('finished')
              resolve()
              fs.rmSync(req.pathLokal, {
                force: true,
               });  
           
              next()
          })
          writer.on('error', () => {
              console.log('reject')
              reject()
          })
      })
    }

     
   catch (error) {
       console.log(error);
  
      return res.status(400).send({ 'RC': '99', 'message2': error});
    } 
    
  
  },
  uploadTTEBSSN(req,res,next){

     var bin = Base64.atob(req.tte);
     var streamdata = Buffer.from(bin, 'binary');
 
    
      //  var nama  = str.substring(0, 5)+'/'+str.substring(5, 10)+'/'+str.substring(10, 15)+'/'+str.substring(15, 20)+'/'+req.body.tipe_upload+'.jpeg';	
      minioClient.putObject(process.env.MINIO_BUCKET, req.body.tte_url, streamdata, function(err, etag) {
        if (err) {console.log('Error Upload File.', err)
        
        return res.status(400).send({ 'message': 'Error Upload File' });
        }
         console.log('Berhasil Upload:'+req.namaFile)
        req.body.tte_status = 1
        req.body.tte_keterangan = 'Berhasil Upload'
         next()
       // return res.status(200).send({ 'message': 'Berhasil Upload' });
        }) 
    


   
  }, 
  async getSuratParafFileBSSN(req,res,next){
 
    if (!req.body.surat_paraf_url){
      return res.status(500).send('Url Surat Tidak Boleh Kosong');
    }
   
     req.body.type = 'update-status-tte'
     
     var bucket = process.env.MINIO_BUCKET
    //var pathlokal = (__dirname, 'temp/' +  req.body.id+ '.pdf')
    //var pathlokal = ('d:/temp2/' +  req.body.id+ '.pdf')

    var pathlokal2 = path.resolve(__dirname,  '../temp/' +    req.body.id+ '-paraf.pdf')
    req.pathlokal=pathlokal2;

  //  var pathlokal2 = (req.body.id+ '.pdf')

     console.log('path:'+pathlokal2)
     console.log('surat_url:'+req.body.surat_paraf_url)
     // fs.unlinkSync(pdfFile);
       fs.rmSync(pathlokal2, {
      force: true,
     });  
 

  minioClient.fGetObject(bucket,   req.body.surat_paraf_url,pathlokal2, function (err) {
    if (err) {

        console.log(err)
       var body=
          {
            "RC": "00",
            "message": "Sukses",
            "data": {
                "message": "File Tidak Ditemukan!"
            }
        }
            return res.status(200).send(body);
   
    }
    console.log('success')
    //return res.status(200).send('success');
    next()
  })
 
     
   
    
  },
  async ParafTTEBSSN(req,res,next){
    try {
   
      var path2 = process.env.API_TTE_SIGN_URL
      var nik= req.user.nik ////req.user.user_tte//process.env.API_TTE_USERNAME
      var passphrase = req.body.passphrase //req.user.pwd_tte//process.env.API_TTE_PASSWORD
      var linkQR = req.body.url_tte
      var file =req.pathlokal
      console.log('linkQR:'+linkQR)
     // let specimen = "data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg==";
  
       /*  let config = {
        headers: {
          Authorization: Bearer,
        }
      }  */

      
      //var pdfFile = req.stream;
     // var SpecimenFile =fs.createReadStream(path.resolve(__dirname, '../template/tte-logo.jpeg'));
      var data = new FormData();
      data.append('file', fs.createReadStream(file));

      data.append('nik', nik);
      data.append('passphrase', passphrase);
      data.append('tampilan', 'visible');
      data.append('image', 'false');
      data.append('linkQR', linkQR);

      data.append('xAxis', '0');
      data.append('yAxis', '0');
      data.append('width', '40');
      data.append('height', '40');
      data.append('tag_koordinat', '^');
      //data.append('page', '1');
      //data.append('pdf', fs.readFileSync(new URL('file://d:/temp/SPH.pdf')));
      //data.append('pdf', req.stream);
      //data.append('file',file)
 
        var config = {
          method: 'post',
          maxBodyLength: Infinity,
          url: path2,
         // responseType: 'arraybuffer',
          responseEncoding: 'binary',
         // httpsAgent: agent,
        headers: { 
            'Authorization': 'Basic '+ process.env.API_TTE_BEARER , 
            ...data.getHeaders()
          },
          responseType: "stream" ,
          data : data
        };
    
        var pathTte = path.resolve(__dirname,  '../temp/' +    req.body.id + '-tte.pdf')
        console.log('pathTte:'+pathTte)
        const writer = fs.createWriteStream(pathTte); 

        const response = await axios(config).catch((err) => console.log(err));
  
      response.data.pipe(writer)
  
      return new Promise((resolve, reject) => {
          writer.on('finish', () => {
              console.log('finished')
              resolve()
              fs.rmSync(req.pathlokal, {
                force: true,
               });  
           
              next()
          })
          writer.on('error', () => {
              console.log('reject')
              reject()
          })
      })


     
    } catch (error) {
       console.log(error);
  
      return res.status(400).send({ 'RC': '99', 'message2': error});
    } 
    
  
  },
  async getSuratFileBSSNV2(req,res,next){
 
    if (!req.body.surat_url){
      return res.status(500).send('Url Surat Tidak Boleh Kosong');
    }
   
     req.body.type = 'update-status-tte'
     
     var bucket = process.env.MINIO_BUCKET
     req.paraf_is_qr= req.body.paraf_is_qr;
    // update paraf tidak ada qr 
    // req.paraf_is_qr = false
    req.token = req.body.token;
     //console.log('req.body:'+JSON.stringify(req.body))
    //var pathlokal = (__dirname, 'temp/' +  req.body.id+ '.pdf')
    //var pathlokal = ('d:/temp2/' +  req.body.id+ '.pdf')

   // var pathlokal2 = path.resolve(__dirname,  '../temp/' +    req.body.id+ '.pdf')
  //  req.pathlokal=pathlokal2;

  //  var pathlokal2 = (req.body.id+ '.pdf')

   
    // console.log('tte_status:'+req.body.tte_status)
     // fs.unlinkSync(pdfFile);
     /*   fs.rmSync(pathlokal2, {
      force: true,
     });   */
 
    // var pathMinio = "";
     if (req.body.tte_status==0 || req.body.tte_status  ==-1) {
       req.pathMinioSource =req.body.surat_url;
       req.pathMinioDestination =req.body.tte_url;
       req.pathLokal2 = path.resolve(__dirname,  '../temp/' +    req.body.id+ '.pdf')
       req.pathLokal = path.resolve(__dirname,  '../temp/' +    req.body.id+ '-footer.pdf')
       req.pathSign = path.resolve(__dirname,  '../temp/' +    req.body.id+ '-tte.pdf')
       req.tte_status_berhasil = 1
       req.tte_status_gagal = -1
       req.tte_keterangan_berhasil = 'Berhasil Upload TTE'
       req.tte_keterangan_gagal = 'Gagal Upload'
       req.anchor = '^'
      

     }
     else if  (req.body.tte_status==4 || req.body.tte_status  ==-2) {
      req.pathMinioSource =req.body.surat_url;
      req.pathMinioDestination =req.body.paraf_url;
      req.pathLokal2 = path.resolve(__dirname,  '../temp/' +    req.body.id+ '.pdf')
      req.pathLokal = path.resolve(__dirname,  '../temp/' +    req.body.id+ '-footer.pdf')
      req.pathSign = path.resolve(__dirname,  '../temp/' +    req.body.id+ '-paraf.pdf')
      req.tte_status_berhasil = 5
      req.tte_status_gagal = -2
      req.tte_keterangan_berhasil = 'Berhasil Upload Paraf'
      req.tte_keterangan_gagal = 'Gagal Upload'
      req.anchor = '$'
 

     }
     else if (req.body.tte_status==5 || req.body.tte_status  ==-3){
      req.pathMinioSource =req.body.paraf_url;
      req.pathMinioDestination =req.body.tte_url;
      req.pathLokal2 = path.resolve(__dirname,  '../temp/' +    req.body.id+ '-paraf.pdf')
      req.pathLokal = path.resolve(__dirname,  '../temp/' +    req.body.id+ '-footer.pdf')

      req.pathSign = path.resolve(__dirname,  '../temp/' +    req.body.id+ '-tte.pdf')
      req.tte_status_berhasil = 1
      req.tte_status_gagal = -3
      req.tte_keterangan_berhasil = 'Berhasil Upload TTE'
      req.tte_keterangan_gagal = 'Gagal Upload' 
      req.anchor = '^'
 

    }
   console.log('req.pathMinioSource: '+req.pathMinioSource) 
   console.log('req.pathLokal2: '+req.pathLokal2) 
  minioClient.fGetObject(bucket,   req.pathMinioSource,req.pathLokal2, function (err) {
    if (err) {

        console.log(err)
       var body=
          {
            "RC": "00",
            "message": "Sukses",
            "data": {
                "message": "File Tidak Ditemukan!"
            }
        }
            return res.status(200).send(body);
   
    }
    console.log('success')
    //return res.status(200).send('success');
    next()
  })
 
     /* try{ 
      await minioClient.fGetObject(bucket,req.body.surat_url,pathlokal2, function(error) {
        if(error) {
          var body=
          {
            "RC": "00",
            "message": "Sukses",
            "data": {
                "message": "File Tidak Ditemukan!"
            }
        }
            return res.status(200).send(body);
         }
         //return res.status(200).send('sukses');
         req.pathlokal=pathlokal2;
         next()
        })
    }
      catch (error) {
        var body=
          {
            "RC": "00",
            "message": "Sukses",
            "data": {
                "message": error
            }
        }
        return res.status(500).send(error);
      }  */


/*     try{ 
     await minioClient.getObject(bucket,req.body.surat_url, function(error, stream) {
       if(error) {
           return res.status(500).send(error);
        }
   try{
     //res.setHeader('Content-type', 'application/pdf');
      req.stream=stream;
      console.log('req.stream')
      //next()
     stream.pipe(res);
   }catch (error) {
     return res.status(500).send(error);
   }
     });
   }
     catch (error) {
       return res.status(500).send(error);
     } */
   
    
  },
  async SignTTEBSSNV2(req,res,next){
    try {
   
      var path2 = process.env.API_TTE_SIGN_URL
      var nik= req.user.nik  //req.user.nik ////req.user.user_tte//process.env.API_TTE_USERNAME
      var passphrase = req.body.passphrase //req.user.pwd_tte//process.env.API_TTE_PASSWORD
      var linkQR = req.body.url_tte
      var file = req.pathLokal
     // console.log('linkQR:'+linkQR)
     // console.log('req.user:'+JSON.stringify(req.user))

     // console.log('req.user.nik'+req.user.nik)
     // let specimen = "data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg==";
  
       /*  let config = {
        headers: {
          Authorization: Bearer,
        }
      }  */

      
      //var pdfFile = req.stream;
     // var SpecimenFile =fs.createReadStream(path.resolve(__dirname, '../template/tte-logo.jpeg'));
      var data = new FormData();
      data.append('file', fs.createReadStream(file));

      data.append('nik', nik);
      data.append('passphrase', passphrase);
      data.append('tampilan', 'visible');
      data.append('image', 'false');
      data.append('linkQR', linkQR);

      data.append('xAxis', '0');
      data.append('yAxis', '0');

    //  data.append('tag_koordinat', req.anchor);
     console.log('req.paraf_is_qr'+req.paraf_is_qr)
      if  (req.body.tte_status==4 || req.body.tte_status  ==-2) {

         if(req.paraf_is_qr) {
          data.append('width', '40');
          data.append('height', '40');
          data.append('tag_koordinat', req.anchor);
       }
       else { 
        data.append('width', '0');
        data.append('height', '0');
        data.append('page', '1');
      //  data.append('page', '1');
       }
     
      
      }
      else {
        data.append('width', '40');
        data.append('height', '40');
        data.append('tag_koordinat', req.anchor);

      }  
      //data.append('page', '1');
      //data.append('pdf', fs.readFileSync(new URL('file://d:/temp/SPH.pdf')));
      //data.append('pdf', req.stream);
      //data.append('file',file)
 
        var config = {
          method: 'post',
          maxBodyLength: Infinity,
          url: path2,
         // responseType: 'arraybuffer',
          responseEncoding: 'binary',
         // httpsAgent: agent,
        headers: { 
            'Authorization': 'Basic '+ process.env.API_TTE_BEARER , 
            ...data.getHeaders()
          },
          responseType: "stream" ,
          data : data
        };
    
        //var pathTte = path.resolve(__dirname,  '../temp/' +    req.body.id + '-tte.pdf')
       // console.log('pathTte:'+pathTte)
       // const writer = fs.createWriteStream(pathTte); 
      // console.log('pathTte:'+req.pathSign)
       const writer = fs.createWriteStream(req.pathSign); 

    
      
       const response = await axios(config).catch((err) => {
  //      console.log(err)
     //   console.log('response.data:'+response.data)

        return res.status(400).send({ 'RC': '99', 'message2': response.data})
        }
        );
    
      
      response.data.pipe(writer)
    
      return new Promise((resolve, reject) => {
          writer.on('finish', () => {
              console.log('finished')
              resolve()
              fs.rmSync(req.pathLokal, {
                force: true,
               });  
               fs.rmSync(req.pathLokal2, {
                force: true,
               });  
              next()
          })
          writer.on('error', () => {
              console.log('reject')
              reject()
          })
      })

      
     
    }

   catch (error) {
       console.log(error);
  
      return res.status(400).send({ 'RC': '99', 'message2': error});
    } 
    
  
  },
  async modifyPdf(req,res,next) {
   // const url = 'https://pdf-lib.js.org/assets/with_update_sections.pdf'
   // const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer())
   //  console.log('req.pathLokal:'+req.pathLokal)
   // const pdfData = fs.readFile(req.pathLokal);

   // const pdfDoc = await PDFDocument.load(pdfData);

 
   const pdfDoc = await PDFDocument.load(fs.readFileSync(resolve(req.pathLokal2)));
   // const jpgUrl = 'https://pdf-lib.js.org/assets/cat_riding_unicorn.jpg'
   const footerImagePath = path.resolve(__dirname,  '../img/logo-brin.jpg')
  var footerImageBytes = fs.readFileSync(path.resolve(__dirname,'../img/logo-brin.jpg'))
 //  const footerImageBytes = await fetch(jpgUrl).then((res) => res.arrayBuffer())

    const footerImage = await pdfDoc.embedJpg(footerImageBytes)

   // const pdfDoc = await PDFDocument.load(pdfData);
    //const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)
    const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)
    const timesRomanBoldFont = await pdfDoc.embedFont(StandardFonts.TimesRomanBold)


    const pages = pdfDoc.getPages()
    const firstPage = pages[0]
    const { width, height } = firstPage.getSize()
    if  (req.body.tte_status==4 || req.body.tte_status  ==-2) {
       
     }else {
      /*
    firstPage.drawText('Dokumen ini telah ditandatangani secara elektronik.', {
      x: 80,
      y: 40,
      size: 12,
      font: timesRomanFont,
      color:  rgb(0, 0, 0),
    })
    
    firstPage.drawText('Token: '+ req.token, {
      x: 80,
      y: 20,
      size: 12,
      font: timesRomanBoldFont,
      color:  rgb(0, 0,0),
    })
    firstPage.drawLine({
      
      start: { x: 30, y: 60 },
      end: { x: width-30, y: 60 },
      thickness: 1,
      color: rgb(0, 0,0),
      opacity: 1,
    })
      */

    // Get document pages update semua halaman ada token
const pages = pdfDoc.getPages()
// Iterate every pages
pages.forEach(page => {
    page.drawText('Dokumen ini telah ditandatangani secara elektronik.', {
      x: 80,
      y: 40,
      size: 12,
      font: timesRomanFont,
      color:  rgb(0, 0, 0),
    })
    
    page.drawText('Token: '+ req.token, {
      x: 80,
      y: 20,
      size: 12,
      font: timesRomanBoldFont,
      color:  rgb(0, 0,0),
    })
    page.drawLine({
      
      start: { x: 30, y: 60 },
      end: { x: width-30, y: 60 },
      thickness: 1,
      color: rgb(0, 0,0),
      opacity: 1,
    })
  
      page.drawImage(footerImage, {
      x: 30,
      y: 15,
      width: 40,
      height: 40,
    })

})
  }

    //const jpgDims = jpgImage.scale(0.5)

   // const page = pdfDoc.addPage()



    const pdfBytes = await pdfDoc.save()
    //const writer = fs.createWriteStream(pathTte); 
    //response.data.pipe(writer);
    fs.writeFileSync(req.pathLokal, pdfBytes,'binary');

    //const pdfBytes = await pdfDoc.save()
    //await writeFile(req.pathLokal2, pdfBytes) 
     next()
 

   // const pdfDoc = await PDFDocument.load(existingPdfBytes)
   
  },
  async getPath(req, res,next) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/api/surat/tte';
    const method = 'POST';
    req.body.type ='verifikasi-id';
    req.body.token = req.params.token;
    const findOneQuery = `select * from eoffice.tte_surat_crud  ($1,$2,$3,$4,$5::json)`;
 

   //  console.log(findOneQuery, [ip, path, method, 'verifikasi', JSON.stringify(req.body)]);
 //  console.log(req.user.nip);
    try {
   
      const { rows, rowCount } = await db.query(findOneQuery, [ip, path, method, 'verifikasi', JSON.stringify(req.body)]);
      if (!rowCount) {
        return res.status(200).send({ 'RC': '05', 'message': 'TTE tidak VALID' });
      } else {
        var data = rows[0].data[0];
        var rc = rows[0].rc;
        if (rc =='00') {
          req.tte_url = data.tte_url;
        //  console.log('req.tte_url:'+req.tte_url)
          next();
        }

        else {
        return res.status(200).send( data.message  );
        }
      }
    } catch (error) {
      //console.log(error);
      return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi Atau Data', error });
    }
  },  
}
export default Surat;

