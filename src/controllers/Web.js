import db from '../db';


const Web = {
  /**
   * Input Paket PPIU
   * @param {object} req
   * @param {object} res
   * @returns {object} data pergerakan jemaah
   */

  async getWebPPIUJamaahByPaket(req, res) {
    ///api/umrah/asuransi/pembayaran/{tanggal_awal}/{tanggal_akhir}/{page}
    //select * from parameter_header_get('10.100.88.14','general/header','POST','tes')
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/web/ppiu/paket/jamaah';
    const method = 'GET';
    const findOneQuery = `select * from ppiu_jamaah_get_by_paket($1,$2,$3,$4,$5)`;
  //  console.log(findOneQuery, [ip, path, method, req.user.nip,req.params.paket_id]);
    try {
      const { rows, rowCount } = await db.query(findOneQuery, [ip, path, method, req.user.nip,req.params.paket_id]);
      if (!rowCount) {
        return res.status(400).send({ 'RC': '05', 'message': 'Tidak Ada Data' });
      } else {
        return res.status(200).send({ 'RC': '00', 'message': 'Sukses', rows });
      }
    } catch (error) {
      return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi Atau Data', error });
    }
  },
  async getWebPPIUJamaahByPpiu(req, res) {
    /// api/umrah/asuransi/pembayaran/{tanggal_awal}/{tanggal_akhir}/{page}
    //select * from parameter_header_get('10.100.88.14','general/header','POST','tes')
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/api/web/ppiu/jamaah/';
    const method = 'GET';
    const findOneQuery = `select * from ppiu_jamaah_get_by_ppiu($1,$2,$3,$4,$5)`;
   // console.log('get parameter header by user' + req.user.nip + " " + ip);
    try {
      const { rows, rowCount } = await db.query(findOneQuery, [ip, path, method, req.user.nip,req.user.organisasi]);
      if (!rowCount) {
        return res.status(400).send({ 'RC': '05', 'message': 'Tidak Ada Data' });
      } else {
        return res.status(200).send({ 'RC': '00', 'message': 'Sukses', rows });
      }
    } catch (error) {
      return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi Atau Data', error });
    }
  },
  async getWebPPIUPaketByPpiu(req, res) {
    //select * from parameter_header_get('10.100.88.14','general/header','POST','tes')
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/api/web/ppiu/paket/';
    const method = 'GET';
    const findOneQuery = `select * from ppiu_paket_get_by_ppiu($1,$2,$3,$4,$5)`;
    // console.log(findOneQuery, [ip, path, method, req.user.nip,req.user.organisasi]);
    try {
      const { rows, rowCount } = await db.query(findOneQuery, [ip, path, method, req.user.nip,req.user.organisasi]);
      if (!rowCount) {
        return res.status(400).send({ 'RC': '05', 'message': 'Tidak Ada Data' });
      } else {
        return res.status(200).send({ 'RC': '00', 'message': 'Sukses', rows });
      }
    } catch (error) {
      return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi Atau Data', error });
    }
  },
  async crudWebPPIUPaketByPpiu(req, res) {
    //(in_ip_address character varying, in_api_path character varying, in_api_method character varying, in_user_id character varying, in_sql_type character varying, in_paket_id uuid, in_ppiu_id character varying, in_provider_id character varying, in_nama_paket character varying, in_biaya_idr numeric, in_biaya_usd numeric, in_is_active character, in_tahun character varying, in_rencana_berangkat date, in_fakta_berangkat date, in_keterangan_berangkat text, in_maskapai_berangkat character varying, in_no_penerbangan_berangkat character varying, in_rencana_pulang date, in_fakta_pulang date, in_keterangan_pulang text, in_maskapai_pulang character varying, in_no_penerbangan_pulang character varying, in_hotel_makkah character varying, in_hotel_madinah character varying, in_tl_id integer, in_mekah_mulai date, in_mekah_sampai date, in_madinah_mulai date, in_madinah_sampai character varying, in_bandara_berangkat character varying, in_bandara_pulang character varying)
	const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = 'ppiu/paket/';
    const method = 'POST';
    const findOneQuery = `select * from public.ppiu_paket_crud_v2($1,$2,$3,$4,$5,$6::uuid,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19)`;
  //  console.log(findOneQuery, [ip, path, method, req.user.nip, req.body.type, req.body.pktid, req.body.ppiuid, req.body.providerid, req.body.namapaket, req.body.biayaidr, req.body.biayausd, req.body.isactive, req.body.tahun, req.body.rencanaberangkat, req.body.faktaberangkat, req.body.keteranganberangkat, req.body.rencanapulang, req.body.faktapulang, req.body.keteranganpulang])
     
    try {
      const { rows, rowCount } = await db.query(findOneQuery, [ip, path, method, req.user.nip, req.body.type, req.body.pktid, req.body.ppiuid, req.body.providerid, req.body.namapaket, req.body.biayaidr, req.body.biayausd, req.body.isactive, req.body.tahun, req.body.rencanaberangkat, req.body.faktaberangkat, req.body.keteranganberangkat, req.body.rencanapulang, req.body.faktapulang, req.body.keteranganpulang ]);
      if (!rowCount) {
        return res.status(400).send({ 'RC': '04', 'message': 'Proses Gagal' });
      } else {
        return res.status(200).send({ 'RC': '00', 'message': 'Sukses', rows });
      }
    } catch (error) {
      return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi Atau Data', error });
    }
  },
  async getWebPPIUPaketByPpiuV2(req, res) {
    ///api/umrah/asuransi/pembayaran/{tanggal_awal}/{tanggal_akhir}/{page}
    //select * from parameter_header_get('10.100.88.14','general/header','POST','tes')
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = 'web/ppiu/paketv2';
    const method = 'GET';
    const findOneQuery = `select * from ppiu_paket_get_by_ppiu_v2($1,$2,$3,$4,$5)`;
   console.log(findOneQuery, [ip, path, method, req.user.nip,req.user.organisasi]);
    try {
      const { rows, rowCount } = await db.query(findOneQuery, [ip, path, method, req.user.nip,req.user.organisasi]);
   //   console.log((findOneQuery, [ip, path, method, req.user.nip,req.params.ppiu_id]))
      if (!rowCount) {
        return res.status(400).send({ 'RC': '05', 'message': 'Tidak Ada Data' });
      } else {
        return res.status(200).send({ 'RC': '00', 'message': 'Sukses', rows });
      }
    } catch (error) {
      return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi Atau Data', error });
    }
  },
  async registrasiJamaahPpiu(req, res) {
    ///api/umrah/asuransi/pembayaran/{tanggal_awal}/{tanggal_akhir}/{page}
    //select * from parameter_header_get('10.100.88.14','general/header','POST','tes')
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = 'general/header';
    const method = 'GET';
    const findOneQuery = `SELECT * FROM public.ppiu_jamaah_registrasi($1,$2,$3,$4,$5::uuid,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30)`;
   // console.log(findOneQuery, [ip, path, method, req.user.nip, req.body.paketid, req.body.ppiuid, req.body.nama, req.body.jenisidentitasid, req.body.noidentitas, req.body.namaayah, req.body.tempatlahir, req.body.tanggallahir, req.body.jeniskelamid, req.body.alamat, req.body.kelurahan, req.body.kecid, req.body.kabid, req.body.provid, req.body.jenispendidikan, req.body.jenispekerjaan, req.body.title,req.body.statuspernikahan,req.body.kewarganegaraanid,req.body.notelp,req.body.nohp,req.body.foto,req.body.petugasid,req.body.providerid,req.body.asuransiid,req.body.penandatangankontrakid]);     
  
    try { 
      const { rows, rowCount } = await db.query(findOneQuery, [ip, path, method, req.user.nip, req.body.paketid, req.body.ppiuid, req.body.nama, req.body.jenisidentitasid, req.body.noidentitas, req.body.namaayah, req.body.tempatlahir, req.body.tanggallahir, req.body.jeniskelamid, req.body.alamat, req.body.kelurahan, req.body.kecid, req.body.kabid, req.body.provid, req.body.jenispendidikan, req.body.jenispekerjaan, req.body.title,req.body.statuspernikahan,req.body.kewarganegaraanid,req.body.notelp,req.body.nohp,req.body.foto,req.body.petugasid,req.body.providerid,req.body.asuransiid,req.body.penandatangankontrakid]);
         if (!rowCount) {
         return res.status(400).send({ 'RC': '05', 'message': 'Tidak Ada Data' });
      } else {
        return res.status(200).send({ 'RC': '00', 'message': 'Sukses', rows });
      }
    } catch (error) {
      return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi Atau Data', error });
    }
  },

  async crudPaketHotel(req, res) {
    ///api/umrah/asuransi/pembayaran/{tanggal_awal}/{tanggal_akhir}/{page}
    //select * from parameter_header_get('10.100.88.14','general/header','POST','tes')
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = 'web/ppiu/paket/paket_hotel';
    const method = 'POST';
    const findOneQuery = `SELECT * FROM public.ppiu_paket_hotel_crud($1,$2,$3,$4,$5,$6,$7::uuid,$8::uuid,$9,$10,$11,$12,$13)`;
  //  console.log(findOneQuery, [ip, path, method, req.user.nip, req.body.type, req.body.lokasihotelid, req.body.pakethotelid, req.body.paketid, req.body.hotelid, req.body.tanggalmulai, req.body.tanggalselesai])
    try { 
      const { rows, rowCount } = await db.query(findOneQuery, [ip, path, method, req.user.nip, req.body.type, req.body.lokasihotelid, req.body.pakethotelid, req.body.paketid, req.body.hotelid, req.body.tanggalmulai, req.body.tanggalselesai,req.body.tipe_rencana,req.body.orang_kamar]);
    
        return res.status(200).send({ 'RC': '00', 'message': 'Sukses', rows });
    } catch (error) {
      return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi Atau Data', error });
    }
  },
  async crudPaketPenerbangan(req, res) {
    ///api/umrah/asuransi/pembayaran/{tanggal_awal}/{tanggal_akhir}/{page}
    //select * from parameter_header_get('10.100.88.14','general/header','POST','tes')
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = 'web/ppiu/paket/paket_penerbangan';
    const method = 'POST';
    const findOneQuery = `SELECT * FROM public.ppiu_paket_penerbangan_crud($1,$2,$3,$4,$5,$6::uuid,$7::uuid,$8,$9,$10,$11,$12,$13,$14)`;
    //console.log('SELECT * FROM public.ppiu_paket_penerbangan_crud',[ip, path, method, req.user.nip, req.body.type, req.body.paketflightid, req.body.paketid, req.body.maskapaiid, req.body.nopenerbangan, req.body.bandaraasal, req.body.bandaratujuan, req.body.tanggalberangkat, req.body.tanggaltiba, req.body.tipepenerbangan])
    try { 
      const { rows, rowCount } = await db.query(findOneQuery, [ip, path, method, req.user.nip, req.body.type, req.body.paketflightid, req.body.paketid, req.body.maskapaiid, req.body.nopenerbangan, req.body.bandaraasal, req.body.bandaratujuan, req.body.tanggalberangkat, req.body.tanggaltiba, req.body.tipepenerbangan]);
 
	  return res.status(200).send({ 'RC': '00', 'message': 'Sukses', rows });
      
    } catch (error) {
      return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi Atau Data', error });
    }
  },
  
  async getPaketPenerbangan(req, res) {
    const findOneQuery = `select * from public.ppiu_paket_penerbangan_get_by_paket($1,$2,$3,$4,$5::uuid,$6)`;
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = 'web/ppiu/paket/paket_penerbangan';
    const method = 'POST';
  console.log(findOneQuery, [ip, path, method, req.user.nip,req.params.kode_paket,req.params.tipe_penerbangan])
    try {
      const { rows, rowCount } = await db.query(findOneQuery, [ip, path, method, req.user.nip,req.params.kode_paket,req.params.tipe_penerbangan]);
      if (!rowCount) {
        return res.status(200).send({ 'RC': '05', 'message': 'Tidak Ada Data' });
      } else {
        return res.status(200).send({ 'RC': '00', 'message': 'Sukses', rows });
      }
    } catch (error) {
      return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi Atau Data', error });
    }
  },
  async getPaketHotel(req, res) {
    const findOneQuery = `select * from public.ppiu_paket_hotel_get_by_paket($1,$2,$3,$4,$5::uuid,$6)`;
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = 'general/header';
    const method = 'GET';
  console.log(findOneQuery, [ip, path, method, req.user.nip,req.params.kode_paket,req.params.tipe_rencana])
    try {
      const { rows, rowCount } = await db.query(findOneQuery, [ip, path, method, req.user.nip,req.params.kode_paket,req.params.tipe_rencana]);
      if (!rowCount) {
        return res.status(200).send({ 'RC': '05', 'message': 'Tidak Ada Data' });
      } else {
        return res.status(200).send({ 'RC': '00', 'message': 'Sukses', rows });
      }
    } catch (error) {
      return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi Atau Data', error });
    }
  },

 // visa
 async getProviderJamaahAll(req, res) {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const path = 'web/visa/paket/';
  const method = 'GET';
  const findOneQuery = `select * from provider_paket_get_by_provider_v2($1,$2,$3,$4,$5)`;
  //console.log(findOneQuery, [ip, path, method, req.user.nip,req.user.organisasi])
  try {
    const { rows, rowCount } = await db.query(findOneQuery, [ip, path, method, req.user.nip,req.user.organisasi]);
    if (!rowCount) {
    return res.status(400).send({ 'RC': '05', 'message': 'Tidak Ada Data' });
    } else {
    return res.status(200).send({ 'RC': '00', 'message': 'Sukses',rows});
    }
  } catch (error) {
    return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi Atau Data', error });
  }
  },
 async getWebProviderJamaahByPaket(req, res) {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const path = '/api/web/visa/paket/jamaah';
  const method = 'GET';
  const findOneQuery = `select * from provider_get_jamaah_by_paket($1,$2,$3,$4,$5::uuid)`;
  console.log(findOneQuery, [ip, path, method, req.user.nip,req.params.paket_id])
  try {
    const { rows, rowCount } = await db.query(findOneQuery, [ip, path, method, req.user.nip,req.params.paket_id]);
    if (!rowCount) {
    return res.status(400).send({ 'RC': '07', 'message': 'Nomor Registrasi Tidak Ditemukan' });
    } else {
    return res.status(200).send({ 'RC': '00', 'message': 'Sukses',rows});
    }
  } catch (error) {
    return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi Atau Data', error });
  }
  },
async updateVisaJamaah(req, res) {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const path = 'umrah/visa/jamaah';
  const method = 'POST';
  console.log(findOneQuery, [ip, path, method, req.user.nip,req.body.noregistrasi, req.body.novisa,req.body.tglBerlaku, req.body.tglBerakhir])
  const findOneQuery = `select * from provider_jamaah_visa_update($1,$2,$3,$4,$5,$6,$7,$8)`;
  try {
    const { rows, rowCount } = await db.query(findOneQuery, [ip, path, method, req.user.nip,req.body.noregistrasi, req.body.novisa,req.body.tglBerlaku, req.body.tglBerakhir]);
    if (!rowCount) {
    return res.status(400).send({ 'RC': '07', 'message': 'Nomor Registrasi Tidak Ditemukan' });
    } else {
    return res.status(200).send({ 'RC': '00', 'message': 'Sukses',rows});
    }
  } catch (error) {
    return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi Atau Data', error });
  }
  } ,async getWebReportKartuJamaahTes(req, res) {
    ///api/umrah/asuransi/pembayaran/{tanggal_awal}/{tanggal_akhir}/{page}
    //select * from parameter_header_get('10.100.88.14','general/header','POST','tes')
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/web/ppiu/paket/jamaah';
    const method = 'GET';
    const findOneQuery = `select * from dummy_json()`;
    //console.log('get parameter header by user' + req.user.nip + " " + ip);
    try {
      const { rows, rowCount } = await db.query(findOneQuery);
      if (!rowCount) {
        return res.status(400).send({ 'RC': '05', 'message': 'Tidak Ada Data' });
      } else {
        return res.status(200).send({ 'RC': '00', 'message': 'Sukses', rows });
      }
    } catch (error) {
      return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi Atau Data', error });
    }
  },
  async getWebReportPendaftaranJamaah(req, res) {
      const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
      const path = 'web/ppiu/report/pendaftaran/';
      const method = 'GET';
      const findOneQuery = `select * from cetakSuratPendaftaranUmroh($1,$2,$3,$4,$5)`;
      try {
        const { rows, rowCount } = await db.query(findOneQuery, [ip, path, method, req.user.nip,req.params.jamaah_id]);
        if (!rowCount) {
          return res.status(400).send({ 'RC': '07', 'message': 'Nomor Registrasi Tidak Ditemukan' });
        } else {
        const message =rows[0].message;
      let data = [];
      if(message==='sukses'){		
        data = rows[0].data;
      }
          return res.status(200).send({ 'RC': '00', 'message': message,data});
        }
      } catch (error) {
        return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi Atau Data', error });
      }
      },

      async getWebDdlPetugas(req, res) {
        /// ddl header untuk web
        const findOneQuery = `select * from ddl_petugas($1,$2)`;
       // console.log(findOneQuery, [req.user.organisasi,req.params.tipe_petugas]);
        try {
          const { rows, rowCount } = await db.query(findOneQuery, [req.user.organisasi,req.params.tipe_petugas]);
          if (!rowCount) {
            return res.status(200).send({ 'RC': '05', 'message': 'Tidak Ada Data' });
          } else {
            return res.status(200).send({ 'RC': '00', 'message': 'Sukses', rows });
          }
        } catch (error) {
          return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi Atau Data', error });
        }
      },
      async UpdateJamaahPpiu(req, res) {
        ///api/umrah/asuransi/pembayaran/{tanggal_awal}/{tanggal_akhir}/{page}
        //select * from parameter_header_get('10.100.88.14','general/header','POST','tes')
        const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        const path = 'general/header';
        const method = 'GET';
        const findOneQuery = `SELECT * FROM public.ppiu_jamaah_update($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31::uuid,$32,$33,$34)`;
    //   console.log(findOneQuery, [ip, path, method, req.user.nip, req.body.noidentitas, req.body.jenisidentitasid,  req.body.jeniskelamid, req.body.tempatlahir,  req.body.tanggallahir, req.body.jenispendidikan, req.body.jenispekerjaan, req.body.notelp,req.body.alamat, req.body.kabid,  req.body.provid,req.body.kecid, req.body.foto, req.body.namapaspor, req.body.nopaspor, req.body.tgldikeluarkan, req.body.tglhabis, req.body.kotapaspor, req.body.kelurahan, req.body.statuspernikahan, req.body.title, req.body.nohp,req.body.kewarganegaraanid, req.body.petugasid,  req.body.nama, req.body.namaayah,req.body.jamaahid,req.body.providerid,req.body.asuransiid]);
        try { 
          const { rows, rowCount } = await db.query(findOneQuery, [ip, path, method, req.user.nip, req.body.noidentitas, req.body.jenisidentitasid,  req.body.jeniskelamid, req.body.tempatlahir,  req.body.tanggallahir, req.body.jenispendidikan, req.body.jenispekerjaan, req.body.notelp,req.body.alamat, req.body.kabid,  req.body.provid,req.body.kecid, req.body.foto, req.body.namapaspor, req.body.nopaspor, req.body.tgldikeluarkan, req.body.tglhabis, req.body.kotapaspor, req.body.kelurahan, req.body.statuspernikahan, req.body.title, req.body.nohp,req.body.kewarganegaraanid, req.body.petugasid,  req.body.nama, req.body.namaayah,req.body.jamaahid,req.body.providerid,req.body.asuransiid,req.body.penandatangankontrakid]);
       
          if (!rowCount) {
             return res.status(400).send({ 'RC': '05', 'message': 'Tidak Ada Data' });
          } else {
            return res.status(200).send({ 'RC': '00', 'message': 'Sukses', rows });
          }
        } catch (error) {
          return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi Atau Data', error });
        }
      },
      async getWebPPIUPaketByPpiuV3(req, res) {
        ///api/umrah/asuransi/pembayaran/{tanggal_awal}/{tanggal_akhir}/{page}
        //select * from parameter_header_get('10.100.88.14','general/header','POST','tes')
        const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        const path = 'web/ppiu/paketv3';
        const method = 'GET';
        const findOneQuery = `select * from ppiu_paket_get_by_ppiu_v3($1,$2,$3,$4,$5)`;
       console.log(findOneQuery, [ip, path, method, req.user.nip,req.user.organisasi]);
        try {
          const { rows, rowCount } = await db.query(findOneQuery, [ip, path, method, req.user.nip,req.user.organisasi]);
       //   console.log((findOneQuery, [ip, path, method, req.user.nip,req.params.ppiu_id]))
          if (!rowCount) {
            return res.status(400).send({ 'RC': '05', 'message': 'Tidak Ada Data' });
          } else {
            return res.status(200).send({ 'RC': '00', 'message': 'Sukses', rows });
          }
        } catch (error) {
          return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi Atau Data', error });
        }
      },
      async copyPaket(req, res) {
        ///api/umrah/asuransi/pembayaran/{tanggal_awal}/{tanggal_akhir}/{page}
        //select * from parameter_header_get('10.100.88.14','general/header','POST','tes')
        const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        const path = 'web/ppiu/paketv3';
        const method = 'GET';
        const findOneQuery = `select * from copy_paket_umrah($1,$2,$3,$4,$5,$6::uuid)`;
       console.log(findOneQuery, [ip, path, method, req.user.nip,req.user.organisasi]);
        try {
          const { rows, rowCount } = await db.query(findOneQuery, [ip, path, method, req.user.nip,req.user.organisasi, req.params.paket_id]);
       //   console.log((findOneQuery, [ip, path, method, req.user.nip,req.params.ppiu_id]))
          if (!rowCount) {
            return res.status(400).send({ 'RC': '05', 'message': 'Tidak Ada Data' });
          } else {
            return res.status(200).send({ 'RC': '00', 'message': 'Sukses', rows });
          }
        } catch (error) {
          return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi Atau Data', error });
        }
      },
      async crudWebPPIUPaketByPpiuV3(req, res) {
        //(in_ip_address character varying, in_api_path character varying, in_api_method character varying, in_user_id character varying, in_sql_type character varying, in_paket_id uuid, in_ppiu_id character varying, in_provider_id character varying, in_nama_paket character varying, in_biaya_idr numeric, in_biaya_usd numeric, in_is_active character, in_tahun character varying, in_rencana_berangkat date, in_fakta_berangkat date, in_keterangan_berangkat text, in_maskapai_berangkat character varying, in_no_penerbangan_berangkat character varying, in_rencana_pulang date, in_fakta_pulang date, in_keterangan_pulang text, in_maskapai_pulang character varying, in_no_penerbangan_pulang character varying, in_hotel_makkah character varying, in_hotel_madinah character varying, in_tl_id integer, in_mekah_mulai date, in_mekah_sampai date, in_madinah_mulai date, in_madinah_sampai character varying, in_bandara_berangkat character varying, in_bandara_pulang character varying)
      const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        const path = 'ppiu/paket/';
        const method = 'POST';
        const findOneQuery = `select * from public.ppiu_paket_crud_v3($1,$2,$3,$4,$5,$6::uuid,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17)`;
        console.log(findOneQuery, [ip, path, method, req.user.nip, req.body.type, req.body.pktid, req.body.ppiuid, req.body.providerid, req.body.namapaket, req.body.biayaidr, req.body.isactive, req.body.tahun, req.body.rencanaberangkat, req.body.keteranganberangkat, req.body.rencanapulang, req.body.keteranganpulang, req.body.asuransiid])
         
        try {
          const { rows, rowCount } = await db.query(findOneQuery, [ip, path, method, req.user.nip, req.body.type, req.body.pktid, req.body.ppiuid, req.body.providerid, req.body.namapaket, req.body.biayaidr, req.body.isactive, req.body.tahun, req.body.rencanaberangkat, req.body.keteranganberangkat, req.body.rencanapulang, req.body.keteranganpulang, req.body.asuransiid]);
          if (!rowCount) {
            return res.status(400).send({ 'RC': '04', 'message': 'Proses Gagal' });
          } else {
            return res.status(200).send({ 'RC': '00', 'message': 'Sukses', rows });
          }
        } catch (error) {
          return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi Atau Data', error });
        }
      },
      async crudPaketPetugas(req, res) {
        ///api/umrah/asuransi/pembayaran/{tanggal_awal}/{tanggal_akhir}/{page}
        //select * from parameter_header_get('10.100.88.14','general/header','POST','tes')
        const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        const path = 'web/ppiu/paket/paket_petugas';
        const method = 'POST';
        const findOneQuery = `SELECT * FROM public.ppiu_paket_petugas_crud($1,$2,$3,$4,$5,$6::uuid,$7::uuid,$8,$9,$10,$11)`;
       console.log(findOneQuery, [ip, path, method, req.user.nip, req.body.type, req.body.paketpetugasid, req.body.paketid, req.body.petugasid, req.body.tipeid, req.body.urutan]);
        try { 
          const { rows, rowCount } = await db.query(findOneQuery, [ip, path, method, req.user.nip, req.body.type, req.body.paketpetugasid, req.body.paketid, req.body.petugasid, req.body.tipeid, req.body.urutan,req.body.tipe_rencana]);
        
            return res.status(200).send({ 'RC': '00', 'message': 'Sukses', rows });
        } catch (error) {
          return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi Atau Data', error });
        }
      },
      async getPaketPetugas(req, res) {
        const findOneQuery = `select * from public.ppiu_paket_petugas_get_by_paket($1,$2,$3,$4,$5::uuid,$6,$7)`;
        const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        const path = 'general/header';
        const method = 'GET';
         console.log(findOneQuery, [ip, path, method, req.user.nip,req.params.kode_paket,req.params.tipe_id,req.params.tipe_rencana]);
        try {
          const { rows, rowCount } = await db.query(findOneQuery, [ip, path, method, req.user.nip,req.params.kode_paket,req.params.tipe_id,req.params.tipe_rencana]);
          if (!rowCount) {
            return res.status(200).send({ 'RC': '05', 'message': 'Tidak Ada Data' });
          } else {
            return res.status(200).send({ 'RC': '00', 'message': 'Sukses', rows });
          }
        } catch (error) {
          return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi Atau Data', error });
        }
      },
      async getPPIUProfile(req, res) {
        const findOneQuery = `select * from public.ppiu_get_profile($1,$2,$3,$4,$5)`;
        const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        const path = '/web/ppiu/profile';
        const method = 'GET';
      //  console.log(findOneQuery, [ip, path, method, req.user.nip,req.params.kode_paket])
        try {
          const { rows, rowCount } = await db.query(findOneQuery, [ip, path, method, req.user.nip,req.user.organisasi]);
          if (!rowCount) {
            return res.status(200).send({ 'RC': '05', 'message': 'Tidak Ada Data' });
          } else {
            return res.status(200).send({ 'RC': '00', 'message': 'Sukses', rows });
          }
        } catch (error) {
          return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi Atau Data', error });
        }
      }, 
      async updateProfilePPIU(req, res) {
        ///api/umrah/asuransi/pembayaran/{tanggal_awal}/{tanggal_akhir}/{page}
        //select * from parameter_header_get('10.100.88.14','general/header','POST','tes')
        const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        const path = 'web/ppiu/profile/update';
        const method = 'POST';
        const findOneQuery = `SELECT * FROM public.ppiu_profil_ubah($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25)`;
        console.log(findOneQuery, [ip, path, method, req.user.nip, req.body.type, req.body.ppiuid, req.body.brandppiu, req.body.notelp, req.body.nohp, req.body.email, req.body.website, req.body.alamat, req.body.kecid, req.body.kabid, req.body.provid, req.body.logoppiu, req.body.nosk, req.body.tglsk, req.body.tglberakhirsk, req.body.npwp,req.body.alamat_makkah,req.body.telp_makkah,req.body.alamat_madinah,req.body.telp_madinah,req.body.foto_kantor]);
        try { 
          const { rows, rowCount } = await db.query(findOneQuery, [ip, path, method, req.user.nip, req.body.type, req.body.ppiuid, req.body.brandppiu, req.body.notelp, req.body.nohp, req.body.email, req.body.website, req.body.alamat, req.body.kecid, req.body.kabid, req.body.provid, req.body.logoppiu, req.body.nosk, req.body.tglsk, req.body.tglberakhirsk, req.body.npwp,req.body.alamat_makkah,req.body.telp_makkah,req.body.alamat_madinah,req.body.telp_madinah,req.body.foto_kantor]);
        
            return res.status(200).send({ 'RC': '00', 'message': 'Sukses', rows });
        } catch (error) {
          return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi Atau Data', error });
        }
      },
      async BatalJamaahPpiu(req, res) {
        ///api/umrah/asuransi/pembayaran/{tanggal_awal}/{tanggal_akhir}/{page}
        //select * from parameter_header_get('10.100.88.14','general/header','POST','tes')
        const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        const path = '/api/web/ppiu/jamaah/batal';
        const method = 'POST';
        const findOneQuery = `SELECT * FROM public.ppiu_pembatalan_jamaah($1,$2,$3,$4,$5,$6,$7::uuid)`;
        console.log(findOneQuery, [ip, path, method, req.user.nip, 'Pembatalan Jamaah', req.user.organisasi,req.body.jamaahid]);
        try { 
          const { rows, rowCount } = await db.query(findOneQuery, [ip, path, method, req.user.nip, 'Pembatalan Jamaah', req.user.organisasi,req.body.jamaahid]);
       
          if (!rowCount) {
             return res.status(400).send({ 'RC': '05', 'message': 'Tidak Ada Data' });
          } else {
            return res.status(200).send({ 'RC': '00', 'message': 'Sukses', rows });
          }
        } catch (error) {
          return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi Atau Data', error });
        }
      },
      async getPPIUPetugas(req, res) {
        const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        const path = 'web/ppiu/petugas';
        const method = 'GET';
        const findOneQuery = `select * from public.ppiu_petugas_get($1,$2,$3,$4,$5)`;
        console.log(findOneQuery,  [ip, path, method, req.user.nip,req.user.organisasi]);
        try {
          const { rows, rowCount } = await db.query(findOneQuery, [ip, path, method, req.user.nip,req.user.organisasi]);
          if (!rowCount) {
            return res.status(400).send({ 'RC': '05', 'message': 'Tidak Ada Data' });
          } else {
            return res.status(200).send({ 'RC': '00', 'message': 'Sukses', rows });
          }
        } catch (error) {
          return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi Atau Data', error });
        }
      }, 
      async crudPPIUPetugas(req, res) {
        const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        const path = 'web/ppiu/petugas';
        const method = 'POST';
        const findOneQuery = `select * from public.ppiu_petugas_crud($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22)`;
        console.log(findOneQuery,  [ip, path, method, req.user.nip, req.body.type, req.body.petugasid, req.body.nama, req.body.noktp, req.body.nopaspor, req.body.ppiuid, req.body.nohp1, req.body.nohp2, req.body.alamat, req.body.email, req.body.tgllahir, req.body.aktif, req.body.tipeid, 
		req.body.foto, req.body.nama_paspor, req.body.no_visa, req.body.tgl_awal_visa, req.body.tgl_akhir_visa]);
        try {
          const { rows, rowCount } = await db.query(findOneQuery, [ip, path, method, req.user.nip, req.body.type, req.body.petugasid, req.body.nama, req.body.noktp, req.body.nopaspor, req.body.ppiuid, req.body.nohp1, req.body.nohp2, req.body.alamat, req.body.email, req.body.tgllahir, req.body.aktif, req.body.tipeid,
		  req.body.foto, req.body.nama_paspor, req.body.no_visa, req.body.tgl_awal_visa, req.body.tgl_akhir_visa]);
          if (!rowCount) {
            return res.status(200).send({ 'RC': '05', 'message': 'Tidak Ada Data' });
          } else {
            return res.status(200).send({ 'RC': '00', 'message': 'Sukses', rows });
          }
        } catch (error) {
          return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi Atau Data', error });
        }
      },
      async PindahJamaahPpiu(req, res) {
        ///api/umrah/asuransi/pembayaran/{tanggal_awal}/{tanggal_akhir}/{page}
        //select * from parameter_header_get('10.100.88.14','general/header','POST','tes')
        const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        const path = '/api/web/ppiu/jamaah/pindah';
        const method = 'POST';
        const findOneQuery = `SELECT * FROM public.ppiu_jamaah_pindah($1,$2,$3,$4,$5::uuid,$6::uuid,$7::uuid)`;
        console.log(findOneQuery, [ip, path, method, req.user.nip,req.body.jamaahid,req.body.paketidlama,req.body.paketidbaru]);
        try { 
          const { rows, rowCount } = await db.query(findOneQuery, [ip, path, method, req.user.nip,req.body.jamaahid,req.body.paketidlama,req.body.paketidbaru]);
       
          if (!rowCount) {
             return res.status(400).send({ 'RC': '05', 'message': 'Tidak Ada Data' });
          } else {
            return res.status(200).send({ 'RC': '00', 'message': 'Sukses', rows });
          }
        } catch (error) {
          return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi Atau Data', error });
        }
      },
      async getWebPPIUPaketByPpiuRealisasi(req, res) {
        ///api/umrah/asuransi/pembayaran/{tanggal_awal}/{tanggal_akhir}/{page}
        //select * from parameter_header_get('10.100.88.14','general/header','POST','tes')
        const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        const path = 'web/ppiu/paketv3';
        const method = 'GET';
        const findOneQuery = `select * from ppiu_paket_get_by_ppiu_realisasi($1,$2,$3,$4,$5)`;
       //console.log([ip, path, method, req.user.nip,req.user.organisasi]);
	   var organisasi = '0';
	   if(req.user.organisasi){
		   organisasi = req.user.organisasi
	   }
        try {
          const { rows, rowCount } = await db.query(findOneQuery, [ip, path, method, req.user.nip,organisasi]);
       //   console.log((findOneQuery, [ip, path, method, req.user.nip,req.params.ppiu_id]))
          if (!rowCount) {
            return res.status(400).send({ 'RC': '05', 'message': 'Tidak Ada Data' });
          } else {
            return res.status(200).send({ 'RC': '00', 'message': 'Sukses', rows });
          }
        } catch (error) {
          return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi Atau Data', error });
        }
      },async crudUpdateStatusPaket(req, res) {
    ///api/umrah/asuransi/pembayaran/{tanggal_awal}/{tanggal_akhir}/{page}
    //select * from parameter_header_get('10.100.88.14','general/header','POST','tes')
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/api/web/ppiu/paket/updateStatus';
    const method = 'POST';
    const findOneQuery = `SELECT * FROM public.ppiu_paket_update_status($1,$2,$3,$4,$5::uuid,$6)`;
  console.log(findOneQuery, [ip, path, method, req.user.nip, req.body.paketid, req.body.statusid])
    try { 
      const { rows, rowCount } = await db.query(findOneQuery, [ip, path, method, req.user.nip, req.body.paketid, req.body.statusid]);
    
        return res.status(200).send({ 'RC': '00', 'message': 'Sukses', rows });
    } catch (error) {
      return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi atau data', error });
    }
  },
  async crudLaporanKasus(req, res){
	   const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
		const path = '/web/ppiu/laporankasus';
		const method = req.body.type;
		var input_data = req.body;		
		try {
			var findOneQuery = `select * from crud_laporan_kasus ($1,$2,$3,$4,$5::json)`;
			
			var { rows, rowCount } = await db.query(findOneQuery,[ip, path, method, req.user.nip, JSON.stringify(input_data)]);
			if (!rowCount || !rows[0].rows ) {
				return res.status(400).send({ 'RC': '05', 'message': 'tidak ada data laporan kasus' });
			} else {
				var message = rows[0].hasil;
				rows = rows[0].rows;
				return res.status(200).send({ 'RC': '00', 'message': 'berhasil',rows});
			}
		 }catch(error) {
			return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi atau data', error });
		} 
   },
   async crudLaporanKasusFoto(req, res){
	   const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
		const path = '/web/ppiu/laporankasusfoto';
		const method = 'POST';
		var input_data = req.body;		
		try {
			var findOneQuery = `select * from crud_laporan_kasus_foto ($1,$2,$3,$4,$5::json)`;
			console.log(findOneQuery,[ip, path, method, req.user.nip, JSON.stringify(input_data)])
			var { rows, rowCount } = await db.query(findOneQuery,[ip, path, method, req.user.nip, JSON.stringify(input_data)]);
			if (!rowCount || !rows[0].rows ) {
				return res.status(400).send({ 'RC': '05', 'message': 'tidak ada data laporan kasus' });
			} else {
				var message = rows[0].hasil;
				rows = rows[0].rows;
				return res.status(200).send({ 'RC': '00', 'message': 'berhasil',rows});
			}
		 }catch(error) {
			return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi atau data', error });
		} 
   },
   async getSetting(req, res) {
     ///api/umrah/asuransi/pembayaran/{tanggal_awal}/{tanggal_akhir}/{page}
     //select * from parameter_header_get('10.100.88.14','general/header','POST','tes')
     const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
     const path = 'web/pusat/setting';
     const method = 'GET';
     const findOneQuery = `select * from setting_get($1,$2,$3,$4)`;
    //console.log(findOneQuery, [ip, path, method, req.user.nip]);
     try {
       const { rows, rowCount } = await db.query(findOneQuery, [ip, path, method, req.user.nip]);
       if (!rowCount) {
         return res.status(400).send({ 'RC': '05', 'message': 'Tidak ada Data' });
       } else {
         return res.status(200).send({ 'RC': '00', 'message': 'Sukses', rows });
       }
     } catch (error) {
       return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi atau Data', error });
     }
   }, 
   async crudSetting(req, res) {
     const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
     const path = 'web/pusat/setting';
     const method = 'POST';
     const findOneQuery = `select * from public.setting_crud($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)`;
     console.log(findOneQuery, [ip, path, method, req.user.nip, req.body.type, req.body.kodesetting, req.body.namasetting, req.body.nilaisetting, req.body.keterangan, req.body.isaktif]);
     try {
       const { rows, rowCount } = await db.query(findOneQuery, [ip, path, method, req.user.nip, req.body.type, req.body.kodesetting, req.body.namasetting, req.body.nilaisetting, req.body.keterangan, req.body.isaktif]);
       return res.status(200).send({ 'RC': '00', 'message': 'Sukses', rows });
      } catch (error) {
        return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi Atau Data', error });
      }
   },
   async getWebPPIUPaketHistoryByPpiu(req, res) {
     ///api/umrah/asuransi/pembayaran/{tanggal_awal}/{tanggal_akhir}/{page}
     //select * from parameter_header_get('10.100.88.14','general/header','POST','tes')
     const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
     const path = 'web/ppiu/paketHistory';
     const method = 'GET';
     const findOneQuery = `select * from ppiu_paket_get_by_ppiu_history($1,$2,$3,$4,$5)`;
    console.log(findOneQuery, [ip, path, method, req.user.nip,req.user.organisasi]);
     try {
       const { rows, rowCount } = await db.query(findOneQuery, [ip, path, method, req.user.nip,req.user.organisasi]);
    //   console.log((findOneQuery, [ip, path, method, req.user.nip,req.params.ppiu_id]))
       if (!rowCount) {
         return res.status(400).send({ 'RC': '05', 'message': 'Tidak Ada Data' });
       } else {
         return res.status(200).send({ 'RC': '00', 'message': 'Sukses', rows });
       }
     } catch (error) {
       return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi Atau Data', error });
     }
   },
  async getWebDataKuantitatifJamaah(req, res) {
      const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
      const path = 'web/pusat/informasi';
      const method = 'GET';
      const findOneQuery = `select * from get_informasi_kuantitatif_jamaah($1,$2,$3,$4,$5,$6)`;
      try {
        const { rows, rowCount } = await db.query(findOneQuery, [ip, path, method, req.user.nip,req.params.tahun,req.params.type]);
        if (!rowCount) {
          return res.status(400).send({ 'RC': '07', 'message': 'Data tidak ditemukan' });
        } else {
        const message =rows[0].message;
      let data = [];
      if(message==='sukses'){		
        data = rows[0].data;
      }
          return res.status(200).send({ 'RC': '00', 'message': message,data});
        }
      } catch (error) {
        return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi Atau Data', error });
      }
      },
  async getWebDetailDataKuantitatifJamaah(req, res) {
      const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
      const path = 'web/pusat/informasi';
      const method = 'GET';
      const findOneQuery = `select * from get_detail_informasi_kuantitatif_jamaah($1,$2,$3,$4,$5,$6,$7::varchar,$8)`;
      try {
        const { rows, rowCount } = await db.query(findOneQuery, [ip, path, method, req.user.nip,req.params.tahun,req.params.type,req.params.filter, req.params.typedetail]);
        if (!rowCount) {
          return res.status(400).send({ 'RC': '07', 'message': 'Data tidak ditemukan' });
        } else {
        const message =rows[0].message;
      let data = [];
      if(message==='sukses'){		
        data = rows[0].data;
      }
          return res.status(200).send({ 'RC': '00', 'message': message,data});
        }
      } catch (error) {
        return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi Atau Data', error });
      }
      },
  async getListExpiredJamaah(req, res) {
      const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
      const path = 'web/ppiu/report/pendaftaran/';
      const method = 'GET';
      const findOneQuery = `select * from get_list_to_expired_jamaah($1,$2,$3,$4,$5,$6)`;
      try {
        const { rows, rowCount } = await db.query(findOneQuery, [ip, path, method, req.user.nip,req.params.tahun,req.params.ppiu]);
        if (!rowCount) {
          return res.status(400).send({ 'RC': '07', 'message': 'Data tidak ditemukan' });
        } else {
        const message =rows[0].message;
      let data = [];
      if(message==='sukses'){		
        data = rows[0].data;
      }
          return res.status(200).send({ 'RC': '00', 'message': message,data});
        }
      } catch (error) {
        return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi Atau Data', error });
      }
      },
  async getListExpiredPpiuJamaah(req, res) {
      const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
      const path = 'web/ppiu/report/pendaftaran/';
      const method = 'GET';
      const findOneQuery = `select * from get_list_to_expired_ppiu_jamaah($1,$2,$3,$4,$5)`;
      try {
        const { rows, rowCount } = await db.query(findOneQuery, [ip, path, method, req.user.nip,req.params.tahun]);
        if (!rowCount) {
          return res.status(400).send({ 'RC': '07', 'message': 'Data tidak ditemukan' });
        } else {
        const message =rows[0].message;
      let data = [];
      if(message==='sukses'){		
        data = rows[0].data;
      }
          return res.status(200).send({ 'RC': '00', 'message': message,data});
        }
      } catch (error) {
        return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi Atau Data', error });
      }
      },
       async getWebPPIUPaketHistoryByPpiu(req, res) {
     ///api/umrah/asuransi/pembayaran/{tanggal_awal}/{tanggal_akhir}/{page}
     //select * from parameter_header_get('10.100.88.14','general/header','POST','tes')
     const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
     const path = 'web/ppiu/paketHistory';
     const method = 'GET';
     const findOneQuery = `select * from ppiu_paket_get_by_ppiu_history($1,$2,$3,$4,$5)`;
    console.log(findOneQuery, [ip, path, method, req.user.nip,req.user.organisasi]);
     try {
       const { rows, rowCount } = await db.query(findOneQuery, [ip, path, method, req.user.nip,req.user.organisasi]);
    //   console.log((findOneQuery, [ip, path, method, req.user.nip,req.params.ppiu_id]))
       if (!rowCount) {
         return res.status(400).send({ 'RC': '05', 'message': 'Tidak Ada Data' });
       } else {
         return res.status(200).send({ 'RC': '00', 'message': 'Sukses', rows });
       }
     } catch (error) {
       return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi Atau Data', error });
     }
   }, async getWebPPIUPaketPendingByPpiu(req, res) {
    ///api/umrah/asuransi/pembayaran/{tanggal_awal}/{tanggal_akhir}/{page}
    //select * from parameter_header_get('10.100.88.14','general/header','POST','tes')
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = 'web/ppiu/paketPending';
    const method = 'GET';
    const findOneQuery = `select * from ppiu_paket_get_by_ppiu_pending($1,$2,$3,$4,$5)`;
   console.log(findOneQuery, [ip, path, method, req.user.nip,req.user.organisasi]);
    try {
      const { rows, rowCount } = await db.query(findOneQuery, [ip, path, method, req.user.nip,req.user.organisasi]);
   //   console.log((findOneQuery, [ip, path, method, req.user.nip,req.params.ppiu_id]))
      if (!rowCount) {
        return res.status(400).send({ 'RC': '05', 'message': 'Tidak Ada Data' });
      } else {
        return res.status(200).send({ 'RC': '00', 'message': 'Sukses', rows });
      }
    } catch (error) {
      return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi Atau Data', error });
    }
  }, async getWebPPIUPaketPendingPusat(req, res) {
    ///api/umrah/asuransi/pembayaran/{tanggal_awal}/{tanggal_akhir}/{page}
    //select * from parameter_header_get('10.100.88.14','general/header','POST','tes')
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = 'web/pusat/paket/pending';
    const method = 'GET';
    const findOneQuery = `select * from pusat_paket_get_by_ppiu_pending($1,$2,$3,$4)`;
   console.log(findOneQuery, [ip, path, method, req.user.nip]);
    try {
      const { rows, rowCount } = await db.query(findOneQuery, [ip, path, method, req.user.nip]);
   //   console.log((findOneQuery, [ip, path, method, req.user.nip,req.params.ppiu_id]))
      if (!rowCount) {
        return res.status(400).send({ 'RC': '05', 'message': 'Tidak Ada Data' });
      } else {
        return res.status(200).send({ 'RC': '00', 'message': 'sukses', rows });
      }
    } catch (error) {
      return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi Atau Data', error });
    }
  },
  async updatePaketPending2(req, res){
     const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = 'web/pusat/paket/pending/';
    const method = 'POST';
    try {
      var findOneQuery = `select * from pusat_paket_approval ($1,$2,$3,$4,$5,$6)`;
       console.log(findOneQuery, [ip, path, method, req.user.nip, req.body.paketid, req.body.statusApproval]);
      var { rows, rowCount } = await db.query(findOneQuery,[ip, path, method, req.user.nip, req.body.paketid, req.body.statusApproval]);
      if (!rowCount || !rows[0].rows ) {
        return res.status(400).send({ 'RC': '05', 'message': 'tidak ada data ' });
      } else {
        var message = rows[0].hasil;
        rows = rows[0].rows;
        return res.status(200).send({ 'RC': '00', 'message': 'sukses',rows});
      }
     }catch(error) {
      return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi atau data', error });
    } 
   },
   async updatePaketPending(req, res) {
     ///api/umrah/asuransi/pembayaran/{tanggal_awal}/{tanggal_akhir}/{page}
     //select * from parameter_header_get('10.100.88.14','general/header','POST','tes')
     const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
     const path = 'web/pusat/paket/pending/';
     const method = 'POST';
     const findOneQuery = `select * from pusat_paket_approval($1,$2,$3,$4,$5,$6)`;
     console.log(findOneQuery, [ip, path, method, req.user.nip, req.body.paketid, req.body.statusApproval]);
     try {
       const { rows, rowCount } = await db.query(findOneQuery, [ip, path, method, req.user.nip, req.body.paketid, req.body.statusApproval]);
       if (!rowCount) {
         return res.status(400).send({ 'RC': '05', 'message': 'tidak ada  Data' });
       } else {
         return res.status(200).send({ 'RC': '00', 'message': 'berhasil', rows });
       }
     } catch (error) {
       return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi atau data', error });
     }
   }, async cetakSuratPendaftaranJamaah(req, res) {
    ///api/umrah/asuransi/pembayaran/{tanggal_awal}/{tanggal_akhir}/{page}
    //select * from parameter_header_get('10.100.88.14','general/header','POST','tes')
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/api/web/ppiu/report/pendaftaran';
    const method = 'GET';
    const findOneQuery = `select * from cetakSuratPendaftaranUmroh($1,$2,$3,$4,$5)`;
   console.log(findOneQuery, [ip, path, method, req.user.nip,req.user.organisasi]);
    try {
      const { rows, rowCount } = await db.query(findOneQuery, [ip, path, method, req.user.nip,req.params.jamaah_id]);
   //   console.log((findOneQuery, [ip, path, method, req.user.nip,req.params.ppiu_id]))
      if (!rowCount) {
        return res.status(400).send({ 'RC': '05', 'message': 'Tidak Ada Data' });
      } else {
        return res.status(200).send({ 'RC': '00', 'message': 'Sukses', rows });
      }
    } catch (error) {
      return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi Atau Data', error });
    }
  }, async cetakSuratPerjanjianJamaah(req, res) {
    ///api/umrah/asuransi/pembayaran/{tanggal_awal}/{tanggal_akhir}/{page}
    //select * from parameter_header_get('10.100.88.14','general/header','POST','tes')
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/api/web/ppiu/report/kontrak/';
    const method = 'GET';
    const findOneQuery = `select * from cetakSuratPerjanjianJamaah($1,$2,$3,$4,$5)`;
   console.log(findOneQuery, [ip, path, method, req.user.nip,req.user.organisasi]);
    try {
      const { rows, rowCount } = await db.query(findOneQuery, [ip, path, method, req.user.nip,req.params.jamaah_id]);
   //   console.log((findOneQuery, [ip, path, method, req.user.nip,req.params.ppiu_id]))
      if (!rowCount) {
        return res.status(400).send({ 'RC': '05', 'message': 'Tidak Ada Data' });
      } else {
        return res.status(200).send({ 'RC': '00', 'message': 'Sukses', rows });
      }
    } catch (error) {
      return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi Atau Data', error });
    }
  },
  
  async pembatalanPembayaran(req, res){
     const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/api/web/pusat/pembayaran/batal';
    const method = 'POST';
    try {
      var findOneQuery = `select * from pembatalan_pembayaran ($1,$2,$3,$4,$5,$6,$7)`;
	  /*console.log(findOneQuery,[ip, path, method, req.user.nip, 
	  req.body.pembayaran_id, req.body.no_registrasi, req.body.keterangan]);*/
      var { rows, rowCount } = await db.query(findOneQuery,[ip, path, method, req.user.nip, 
	  req.body.pembayaran_id, req.body.no_registrasi, req.body.keterangan]);
	  
      if (!rowCount) {
        return res.status(400).send({ 'RC': '05', 'message': 'tidak ada data ' });
      } else {
        return res.status(200).send({ 'RC': '00', 'message': 'Sukses', rows });
      }
     }catch(error) {
      return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi atau data', error });
    } 
   },
   
  async getListPembayaranByNoReg(req, res) {
    //select * from parameter_header_get('10.100.88.14','general/header','POST','tes')
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const path = '/api/web/pusat/pembayaran/';
    const method = 'GET';
    const findOneQuery = `select * from get_pembayaran_by_no_reg($1,$2,$3,$4,$5)`;
    
    try {
      const { rows, rowCount } = await db.query(findOneQuery, [ip, path, method, req.user.nip,req.params.no_registrasi]);
      if (!rowCount) {
        return res.status(400).send({ 'RC': '05', 'message': 'Tidak Ada Data' });
      } else {
        return res.status(200).send({ 'RC': '00', 'message': 'Sukses', rows });
      }
    } catch (error) {
      return res.status(400).send({ 'RC': '99', 'message': 'Error Koneksi Atau Data', error });
    }
  },
  
}
export default Web;
