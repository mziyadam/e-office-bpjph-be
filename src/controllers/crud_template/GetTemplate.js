
import db from '../../db';
import dotenv from 'dotenv';
dotenv.config();
const allowedTables = ['tm_jenis_kelamin', 'tm_status_kawin', 'tm_agama', 'td_bank'
  , 'tm_status_anak', 'tm_fakultas_pendidikan', 'tm_jenjang_pendidikan',
  'tm_diklat', 'tm_masakerja', 'tm_jenissk', 'tm_pangkat', 'tm_satuan_kerja',
  'tm_jabatan_utama', 'tm_jabatan_tambahan', 'tm_bidang_studi', 'tm_jenis_pegawai',
  'tm_penghargaan', 'tm_kerja', 'tm_pegawai','tm_jenis_hukuman','tm_tingkat_hukuman','tm_peraturan',
'tm_level_jabatan']; // whitelist your tables

const GetTemplate = {
  async get(req, res) {
    const { tableName } = req.query;

    if (!allowedTables.includes(tableName)) {
      return res.status(400).send({ RC: '98', message: 'Invalid table name' });
    }

    let query = `SELECT DISTINCT * FROM bpjph.${tableName}`;
    switch (tableName) {
      case 'tm_masakerja':
        query = `SELECT 
    C.gol_ruang, 
    X.masa_kerja
FROM bpjph.tm_gaji_pokok AS X
LEFT JOIN bpjph.tm_pangkat AS C 
    ON X.kode_pangkat = C.kode_pangkat
WHERE X.tahun = '2019'`;
        break;
      case 'tm_jenissk':
        query = `
select * from bpjph.TM_REF where REF_ID like 'JP00%'`;
        break;
      case 'tm_penghargaan':
        query = `
select * from bpjph.TM_REF where ref_group_id = 'JENHARG'`;
        break;
      case 'tm_pegawai':
        query = `
select nip_baru,gbn,nama from bpjph.TM_PEGAWAI`;
        break;
      case 'tm_peraturan':
        query = `
select * from bpjph.TM_REF WHERE REF_GROUP_ID='PERINDIS'`;
        break;
    }
    try {
      const { rows, rowCount } = await db.query(query);
      if (!rowCount) {
        return res.status(404).send({ RC: '05', message: 'Data Not Found' });
      }
      return res.status(200).send({ RC: '00', message: 'Success', data: rows });
    } catch (error) {
      return res.status(400).send({ RC: '99', message: 'Error', error });
    }
  }
};

export default GetTemplate;
