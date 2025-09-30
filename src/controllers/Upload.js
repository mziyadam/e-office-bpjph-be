import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
var Multer = require("multer");
var Minio = require("minio");
var BodyParser = require("body-parser");
var fileMetadata = require('file-metadata');
var fs = require("fs");
var defaultBucket =  process.env.MINIO_BUCKET
// app.use(express.json());
// // enable cors
// // app.options('*', cors())
// app.use(BodyParser.raw() );       // to support JSON-encoded bodies
// app.use(BodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
if (process.env.MINIO_USES_SSL){
  var ssl = true;
}
else {
    var ssl = false;
  }

app.use(BodyParser.json({limit: "4mb"}));
var minioClient = new Minio.Client({
          endPoint: process.env.MINIO_ENDPOINT,
          port:parseInt(process.env.MINIO_PORT),
          useSSL: ssl,
          accessKey: process.env.MINIO_ACCESSKEY,
          secretKey: process.env.MINIO_SECRETKEY
});

 
function  checkBucket(req, res){
  // check path exist
  var bucket = "";
  if (!req.body.bucket)
  {
   bucket = "e-office";
  //   console.log(bucket)
  }
  else { 
    //check bucket exist
   minioClient.bucketExists(req.body.bucket, function(error,exists) {
      if(error) {
       console.log('error1: '+error)
      
    }
    if (exists) {
      console.log('Bucket sudah ada')
    
    }
    else{
      minioClient.makeBucket(req.body.bucket, 'us-east-1', function(err) {
       
        if (err)  console.log('Error creating bucket.', err)
        console.log('Bucket created successfully in "us-east-1".')
     

    })
    }
    
  })
  bucket = req.body.bucket;
  }
 
return bucket
}
function uploadMinio(bucket,nama,buffer){
  minioClient.putObject(bucket, nama, buffer, function(err, etag) {
    return console.log(err, etag) // err should be null
  })
}
const Upload = {


  UploadStream(req, res) {
    //var bucket = "";
    if (!req.body.bucket)
    {
    // bucket = defaultBucket;
     minioClient.putObject(defaultBucket, req.body.nama, req.file.buffer, function(err, etag) {
     // return console.log(err, etag) // err should be null
    })
    }
    else { 
      //check bucket exist
     minioClient.bucketExists(req.body.bucket, function(error,exists) {
        if(error) {
       console.log('error1: '+error)
        
      }
      if (exists) {
        console.log('Bucket file:'+req.body.bucket+'/'+ req.body.nama)
        minioClient.putObject(req.body.bucket, req.body.nama, req.file.buffer, function(err, etag) {
       //   return console.log(err, etag) // err should be null
       if(error) {
        return res.status(500).send(error);
      }
      else{
        return res.status(200).send({ 'RC': '00', 'message': 'Upload Berhasil'});
        }
        })
      }
      else{
        minioClient.makeBucket(req.body.bucket, 'us-east-1', function(err) {
         
          if (err)  console.log('Error creating bucket.', err)
          console.log('Bucket created successfully in "us-east-1".')
          minioClient.putObject(req.body.bucket, req.body.nama, req.file.buffer, function(err, etag) {
          console.log(err, etag) // err should be null
          if(err) {
            return res.status(500).send(err);

          }
          else{
          return res.status(200).send({ 'RC': '00', 'message': 'Upload Berhasil'});
          }
          })
  
      })
      }

    })
   // res.send(req.file);


  }},
  UploadStreamPDF(req, res) {
    //var bucket = "";
    var metaData = {
      'Content-Type': 'application/pdf'
    }
    if (!req.body.bucket)
    {
    // bucket = defaultBucket;
     minioClient.putObject(defaultBucket, req.body.nama, req.file.buffer, metaData, function(err, etag) {
     // return console.log(err, etag) // err should be null
    })
    }
    else { 
      //check bucket exist
     minioClient.bucketExists(req.body.bucket, function(error,exists) {
        if(error) {
       console.log('error1: '+error)
        
      }
      if (exists) {
        console.log('Bucket file:'+req.body.bucket+'/'+ req.body.nama)
        minioClient.putObject(req.body.bucket, req.body.nama, req.file.buffer,metaData, function(err, etag) {
       //   return console.log(err, etag) // err should be null
       if(error) {
        return res.status(500).send(error);
     }
        })
      }
      else{
        minioClient.makeBucket(req.body.bucket, 'us-east-1', function(err) {
         
          if (err)  console.log('Error creating bucket.', err)
          console.log('Bucket created successfully in "us-east-1".')
          minioClient.putObject(req.body.bucket, req.body.nama, req.file.buffer,metaData, function(err, etag) {
          console.log(err, etag) // err should be null
          })
  
      })
      }
      
    })
   // res.send(req.file);
   return res.status(200).send({ 'RC': '00', 'message': 'Upload Berhasil'});


  }},
async UploadStream2(req, res) {
    try {
      await minioClient.putObject(defaultBucket, req.body.nama, req.file.buffer, function(error, etag) {
      res.send(req.file);
  });
  } 
  catch (error) {
      return console.log(error);
  }
},
 async  UploadFileSystem(req, res) {
    //var bucket = checkBucket(req,res)
  // bucket =defaultBucket
  try {
    await    minioClient.fPutObject(req.body.bucket, req.body.nama, req.file.path, fileMetadata(req.file), function(error, etag) {
        // fs.unlinkSync(req.file.path)
        if(error) {
          return console.log(error);
      }
      res.send(req.file);
  
        });
      } 
      catch (error) {
        console.log(error, etag) 
         // return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi atau data', error });
      }
       
     },
async DownloadFile(req, res) {
      //console.log(req.params.nama)
     try{ 
      await minioClient.getObject(defaultBucket, req.params.nama, function(error, stream) {
        //    if(error) {
         //       return res.status(500).send(error);
            //}
			try{
            stream.pipe(res);
			}catch (error) {
			  return res.status(500).send(error);
			}
        });
      }
        catch (error) {
          return res.status(500).send(error);
        }
      },
async DownloadFileBucket(req, res) {
        console.log(req.params.nama)
       try{ 
        await minioClient.getObject(req.params.bucket, req.params.nama, function(error, stream) {
          //    if(error) {
           //       return res.status(500).send(error);
              //}
        try{
          res.setHeader('Content-type', 'application/pdf');

              stream.pipe(res);
        }catch (error) {
          return res.status(500).send(error);
        }
          });
        }
          catch (error) {
            return res.status(500).send(error);
          }
        }, 
    
  async DownloadFileBucketFolder(req, res) {
           console.log(req.params.nama)
        try{ 
         await minioClient.getObject(req.params.bucket, req.params.folder+'/'+req.params.nama, function(error, stream) {
               if(error) {
                   return res.status(500).send(error);
                }
         try{
          res.setHeader('Content-type', 'application/pdf');

               stream.pipe(res);
         }catch (error) {
           return res.status(500).send(error);
         }
           });
         }
           catch (error) {
             return res.status(500).send(error);
           }
         },       
  async DownloadFileBucketFolderTahun(req, res) {
          console.log(req.params.nama)
       try{ 
        await minioClient.getObject(req.params.bucket, req.params.tahun+'/'+req.params.folder+'/'+req.params.nama, function(error, stream) {
              if(error) {
                  return res.status(500).send(error);
               }
        try{
          res.setHeader('Content-type', 'application/pdf');

              stream.pipe(res);
        }catch (error) {
          return res.status(500).send(error);
        }
          });
        }
          catch (error) {
            return res.status(500).send(error);
          }
        },  
        async DownloadFileBucketSubFolderTahun(req, res) {
          console.log(req.params.nama)
       try{ 
        await minioClient.getObject(req.params.bucket, req.params.tahun+'/'+req.params.folder+'/'+req.params.subfolder+'/'+req.params.nama, function(error, stream) {
              if(error) {
                  return res.status(500).send(error);
               }
        try{
          res.setHeader('Content-type', 'application/pdf');

              stream.pipe(res);
        }catch (error) {
          return res.status(500).send(error);
        }
          });
        }
          catch (error) {
            return res.status(500).send(error);
          }
        },        
    async DownloadFilePublic(req, res) {
          console.log(req.params.nama)
       try{ 
        await minioClient.getObject('publik', req.params.tahun+'/'+req.params.nama, function(error, stream) {
              if(error) {
                  return res.status(500).send(error);
               }
        try{
              stream.pipe(res);
        }catch (error) {
          return res.status(500).send(error);
        }
          });
        }
          catch (error) {
            return res.status(500).send(error);
          }
        },               
async DeleteFileBucket(req, res) {
          //var bucket = "";
   
            //check bucket exist
           minioClient.bucketExists(req.params.bucket, function(error,exists) {
              if(error) {
				console.log('Bucket Doesn\'t exists', err);
				return res.status(500).send(error);
            }
            if (exists) {
            //  console.log('Bucket sudah ada')
            minioClient.removeObject(req.params.bucket, req.params.nama, function(err) {
              if (err) {
                console.log('Unable to remove object', err);
				return res.status(500).send(error);
              }
              console.log('Removed the object');
            })
            }
            else{
				console.log ('bucket not exist');
            }
            
          })
          
          res.send(req.file);
      
       
      },     
      async downloadVerif(req, res) {
        console.log('req.params:'+req.tte_url)
     try{ 
      await minioClient.getObject('dok', req.tte_url, function(error, stream) {
            if(error) {
                return res.status(500).send(error);
             }
      try{
        res.setHeader('Content-type', 'application/pdf');

            stream.pipe(res);
      }catch (error) {
        return res.status(500).send(error);
      }
        });
      }
        catch (error) {
          return res.status(500).send(error);
        }
      },  
}
export default Upload;