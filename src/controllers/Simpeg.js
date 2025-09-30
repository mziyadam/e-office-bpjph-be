
import db from '../db';
import dotenv from 'dotenv';
dotenv.config();

const Simpeg = {
    async getUmum(req, res) {
        const { nip_baru } = req.query;
        const readQuery = `SELECT * FROM bpjph.tm_pegawai a 
        left join bpjph.tm_jenis_kelamin b on a.jenis_kelamin=b.jenis_kelamin WHERE a.nip_baru = $1`;
        try {
            const { rows, rowCount } = await db.query(readQuery, [nip_baru]);
            if (!rowCount) {
                return res.status(404).send({ 'RC': '05', 'message': 'Data Not Found' });
            }
            return res.status(200).send({ 'RC': '00', 'message': 'Success', 'data': rows[0] });
        } catch (error) {
            return res.status(400).send({ 'RC': '99', 'message': 'Error', error });
        }
    },
    async putUmum(req, res) {
        const { nip_baru, jenis_kelamin, kode_agama, kode_status_kawin } = req.body;
        const updateQuery = `
            UPDATE bpjph.tm_pegawai a
            SET jenis_kelamin = $2,
                kode_agama = $3,
                kode_status_kawin = $4
            WHERE a.nip_baru = $1
            RETURNING *
        `;

        const values = [nip_baru, jenis_kelamin, kode_agama, kode_status_kawin];
        try {
            const { rows } = await db.query(updateQuery, values);
            return res.status(200).send({ 'RC': '00', 'message': 'Success', 'data': rows[0] });
        } catch (error) {
            return res.status(400).send({ 'RC': '99', 'message': 'Error', error });
        }
    },
    async getAlamat(req, res) {
        const { nip_baru } = req.query;
        const readQuery = `SELECT a.* FROM bpjph.td_alamat a 
        left join bpjph.tm_pegawai b on a.nip=b.nip
        WHERE b.nip_baru = $1`;
        try {
            const { rows, rowCount } = await db.query(readQuery, [nip_baru]);
            if (!rowCount) {
                return res.status(404).send({ 'RC': '05', 'message': 'Data Not Found' });
            }
            return res.status(200).send({ 'RC': '00', 'message': 'Success', 'data': rows[0] });
        } catch (error) {
            return res.status(400).send({ 'RC': '99', 'message': 'Error', error });
        }
    },
    async putAlamat(req, res) {
        const { nip_baru, alamat_1, alamat_2, kecamatan, kab_kota, provinsi, kode_pos, telepon, no_hp } = req.body;
        //alamat, kel, kec, kabkot, prov, kode pos, no telp. no hp email
        const updateQuery = `
            UPDATE bpjph.td_alamat a
            SET alamat_1 = $2,
                alamat_2 = $3,
                kecamatan = $4,
                kab_kota = $5,
                provinsi = $6,
                kode_pos = $7,
                telepon = $8,
                no_hp = $9
            FROM bpjph.tm_pegawai b
            WHERE 
                a.nip=b.nip
            AND
                b.nip_baru = $1
            RETURNING *
        `;

        const values = [nip_baru, alamat_1, alamat_2, kecamatan, kab_kota, provinsi, kode_pos, telepon, no_hp];
        try {
            const { rows } = await db.query(updateQuery, values);
            return res.status(200).send({ 'RC': '00', 'message': 'Success', 'data': rows[0] });
        } catch (error) {
            return res.status(400).send({ 'RC': '99', 'message': 'Error', error });
        }
    },

    async getDataNomor(req, res) {
        const { nip_baru } = req.query;
        const readQuery = `SELECT a.* ,
        c.almari || ' - ' || c.nomor as no_berkas
        FROM bpjph.td_lain a 
        left join bpjph.tm_pegawai b on a.nip=b.nip
        left join bpjph.td_takah c on a.nip=c.nip
        WHERE b.nip_baru = $1`;
        try {
            const { rows, rowCount } = await db.query(readQuery, [nip_baru]);
            if (!rowCount) {
                return res.status(404).send({ 'RC': '05', 'message': 'Data Not Found' });
            }
            return res.status(200).send({ 'RC': '00', 'message': 'Success', 'data': rows[0] });
        } catch (error) {
            return res.status(400).send({ 'RC': '99', 'message': 'Error', error });
        }
    },
    async putDataNomor(req, res) {
        const {
            nip_baru,
            npwp,
            taspen,
            nidn,
            nuptk,
            kpe,
            karpeg,
            karis,
            askes,
            ktp,
            file_sk,
            file_npwp,
            file_taspen,
            file_nidn,
            file_nuptk,
            file_kpe,
            file_karpeg,
            file_karis,
            file_askes,
            file_ktp,
            file_nikah,
            file_bank,
            file_bank_2,
            file_bank_3,
            file_bank_4,
            no_rekening,
            kode_bank,
            atasnama_bank,
            no_rekening_2,
            kode_bank_2,
            atasnama_bank_2,
            no_rekening_3,
            kode_bank_3,
            atasnama_bank_3,
            no_rekening_4,
            kode_bank_4,
            atasnama_bank_4
        } = req.body;

        const updateQuery = `
        UPDATE bpjph.td_lain n
        SET npwp = $2,
            taspen = $3,
            nidn = $4,
            nuptk = $5,
            kpe = $6,
            karpeg = $7,
            karis = $8,
            askes = $9,
            ktp = $10,
            file_sk = $11,
            file_npwp = $12,
            file_taspen = $13,
            file_nidn = $14,
            file_nuptk = $15,
            file_kpe = $16,
            file_karpeg = $17,
            file_karis = $18,
            file_askes = $19,
            file_ktp = $20,
            file_nikah = $21,
            file_bank = $22,
            file_bank_2 = $23,
            file_bank_3 = $24,
            file_bank_4 = $25,
            no_rekening = $26,
            kode_bank = $27,
            atasnama_bank = $28,
            no_rekening_2 = $29,
            kode_bank_2 = $30,
            atasnama_bank_2 = $31,
            no_rekening_3 = $32,
            kode_bank_3 = $33,
            atasnama_bank_3 = $34,
            no_rekening_4 = $35,
            kode_bank_4 = $36,
            atasnama_bank_4 = $37
        FROM bpjph.tm_pegawai p
        WHERE n.nip = p.nip
          AND p.nip_baru = $1
        RETURNING *;
    `;

        const values = [
            nip_baru,
            npwp, taspen, nidn, nuptk, kpe, karpeg, karis, askes, ktp,
            file_sk, file_npwp, file_taspen, file_nidn, file_nuptk, file_kpe, file_karpeg, file_karis, file_askes, file_ktp,
            file_nikah, file_bank, file_bank_2, file_bank_3, file_bank_4,
            no_rekening, kode_bank, atasnama_bank,
            no_rekening_2, kode_bank_2, atasnama_bank_2,
            no_rekening_3, kode_bank_3, atasnama_bank_3,
            no_rekening_4, kode_bank_4, atasnama_bank_4
        ];

        try {
            const { rows } = await db.query(updateQuery, values);
            return res.status(200).send({ RC: '00', message: 'Success', data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: '99', message: 'Error', error });
        }
    },
    async getPekerjaan(req, res) {
        const { nip_baru } = req.query;
        const readQuery = `
select
	A.mutasi as status_pegawai,
    A.nip,
	A.nip_baru,
	case
		when A.kode_status_pegawai <> '3'
       then HA.gol_ruang
		else HA.gol_pppk
	end || ' ' || A.pangkat || ' ( TMT ' || TO_CHAR(A.tmt_sk_gol,
	'DD Mon YYYY') || ' )' as gol_ruang,
	A.jabatan || ' ( TMT ' || TO_CHAR(A.tmt_sk_jab,
	'DD Mon YYYY') || ' )' as jabatan,
	A.jenjang_pendidikan || ' ' || A.jurusan || ' Tahun ' || A.tahun_lulus as pendidikan,
	TO_CHAR(l.tmt_sk - interval '1 year',
	'DD Mon YYYY') as tmt_cpns,
	TO_CHAR(l.tmt_sk,
	'DD Mon YYYY') as tmt_pns,
	case
		when A.kode_tipe_jabatan = '2' then TO_CHAR(A.tmt_sk_gol + interval '2 year',
		'DD Mon YYYY')
		else TO_CHAR(A.tmt_sk_gol + interval '4 year',
		'DD Mon YYYY')
	end as tmt_pangkat_yad,
	TO_CHAR((
	select
		case
			when A.kode_pangkat::int >= 30
                   then A.tmt
                        + interval '12 month' * (case
				when mod(A.mk_tahun_sk,
				2) <> 0 then 0
				else 1
			end)
                        + interval '1 month' * (case
				when A.mk_bulan_sk <> 0 then 12 - A.mk_bulan_sk
				else 12
			end)
			else A.tmt
                        + interval '12 month' * (case
				when mod(A.mk_tahun_sk,
				2) = 0 then 0
				else 1
			end)
                        + interval '1 month' * (case
				when A.mk_bulan_sk <> 0 then 12 - A.mk_bulan_sk
				else 12
			end)
		end),
	'DD Mon YYYY') as tmt_kgb_yad,
	extract(year
from
	AGE(NOW(),
	l.tmt_sk - interval '1 year')) || ' Tahun ' ||
       extract(month
from
	AGE(NOW(),
	l.tmt_sk - interval '1 year')) || ' Bulan' as masa_kerja,
	TO_CHAR(A.tmt_pensiun,
	'DD Mon YYYY') || ' ( umur pensiun : ' || A.usia_pensiun || ' )' as pensiun,
	A.keterangan as satuan_kerja
from
	bpjph.vwdata_pegawai_new A
left join (
	select
		nip,
		no_urut,
		kode_pangkat,
		no_sk,
		tgl_sk,
		tmt_sk,
		mk_tahun,
		mk_bulan,
		keterangan,
		user_add,
		time_add,
		user_update,
		time_update,
		jenis_sk,
		penandatangan,
		dasar_hukum,
		gaji_pokok,
		start_date,
		end_date
	from
		bpjph.tr_pangkat
) H
  on
	A.nip = H.nip
	and A.no_urut_pangkat = H.no_urut
left join bpjph.tm_pangkat HA on
	H.kode_pangkat = HA.kode_pangkat
left join(
	select
		nip,
		tmt_sk
	from
		bpjph.tr_pangkat
	where
		jenis_sk = 'JP002'
        ) l on
	l.nip = A.nip
where
	A.nip_baru = $1`;
        try {
            const { rows, rowCount } = await db.query(readQuery, [nip_baru]);
            if (!rowCount) {
                return res.status(404).send({ 'RC': '05', 'message': 'Data Not Found' });
            }
            return res.status(200).send({ 'RC': '00', 'message': 'Success', 'data': rows[0] });
        } catch (error) {
            return res.status(400).send({ 'RC': '99', 'message': 'Error', error });
        }
    },

    async getSuamiIstri(req, res) {
        const { nip_baru } = req.query;
        const readQuery = `SELECT a.* FROM bpjph.td_suami_istri a 
        left join bpjph.tm_pegawai b on a.nip=b.nip
        WHERE b.nip_baru = $1`;
        try {
            const { rows, rowCount } = await db.query(readQuery, [nip_baru]);
            if (!rowCount) {
                return res.status(404).send({ 'RC': '05', 'message': 'Data Not Found' });
            }
            return res.status(200).send({ 'RC': '00', 'message': 'Success', 'data': rows });
        } catch (error) {
            return res.status(400).send({ 'RC': '99', 'message': 'Error', error });
        }
    },
    async postSuamiIstri(req, res) {
        const {
            nip_baru,
            nama,
            tgl_lahir,
            tgl_nikah,
            tgl_pisah,
            pekerjaan,
            user_add,
            time_add,
            user_update,
            time_update,
            tempat_lahir,
            keterangan,
            file_nikah,
            link_nikah,
            tertanggung
        } = req.body;

        try {
            // 1. Resolve nip from nip_baru
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);

            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: '05', message: 'NIP not found for provided nip_baru' });
            }
            const nip = nipResult.rows[0].nip;

            // 2. Determine next no_urut
            const urutQuery = `
            SELECT no_urut FROM bpjph.td_suami_istri
            WHERE nip = $1
            ORDER BY no_urut DESC
            LIMIT 1
        `;
            const urutResult = await db.query(urutQuery, [nip]);
            let no_urut = 1;
            if (urutResult.rowCount) {
                no_urut = parseInt(urutResult.rows[0].no_urut) + 1;
            }

            // 3. Insert record
            const insertQuery = `
            INSERT INTO bpjph.td_suami_istri
            (nip, no_urut, nama, tgl_lahir, tgl_nikah, tgl_pisah,
             pekerjaan, user_add, time_add, user_update, time_update,
             tempat_lahir, keterangan, file_nikah, link_nikah, tertanggung)
            VALUES ($1, $2, $3, $4, $5, $6,
                    $7, $8, $9, $10, $11,
                    $12, $13, $14, $15, $16)
            RETURNING *;
        `;

            const values = [
                nip,
                no_urut,
                nama,
                tgl_lahir,
                tgl_nikah,
                tgl_pisah,
                pekerjaan,
                user_add,
                time_add,
                user_update,
                time_update,
                tempat_lahir,
                keterangan,
                file_nikah,
                link_nikah,
                tertanggung
            ];

            const { rows } = await db.query(insertQuery, values);

            return res.status(201).send({ RC: '00', message: 'Insert Suami/Istri Success', data: rows[0] });

        } catch (error) {
            return res.status(400).send({ RC: '99', message: 'Insert Suami/Istri Error', error });
        }
    },
    async putSuamiIstri(req, res) {
        const {
            no_urut,
            nip_baru,
            nama,
            tgl_lahir,
            tgl_nikah,
            tgl_pisah,
            pekerjaan,
            user_update,
            time_update,
            tempat_lahir,
            keterangan,
            file_nikah,
            link_nikah,
            tertanggung
        } = req.body;

        try {
            // 1. Resolve nip
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: '05', message: 'NIP not found for provided nip_baru' });
            }
            const nip = nipResult.rows[0].nip;

            // 2. Update record
            const updateQuery = `
            UPDATE bpjph.td_suami_istri
            SET
                nama = $3,
                tgl_lahir = $4,
                tgl_nikah = $5,
                tgl_pisah = $6,
                pekerjaan = $7,
                user_update = $8,
                time_update = $9,
                tempat_lahir = $10,
                keterangan = $11,
                file_nikah = $12,
                link_nikah = $13,
                tertanggung = $14
            WHERE nip = $1
              AND no_urut = $2
            RETURNING *;
        `;

            const values = [
                nip,
                no_urut,
                nama,
                tgl_lahir,
                tgl_nikah,
                tgl_pisah,
                pekerjaan,
                user_update,
                time_update,
                tempat_lahir,
                keterangan,
                file_nikah,
                link_nikah,
                tertanggung
            ];

            const { rows } = await db.query(updateQuery, values);

            if (!rows.length) {
                return res.status(404).send({ RC: '06', message: 'No record updated, record not found' });
            }

            return res.status(200).send({ RC: '00', message: 'Update Suami/Istri Success', data: rows[0] });

        } catch (error) {
            return res.status(400).send({ RC: '99', message: 'Update Suami/Istri Error', error });
        }
    },
    async deleteSuamiIstri(req, res) {
        const { no_urut, nip_baru } = req.body;

        try {
            // 1. Resolve nip
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: '05', message: 'NIP not found for provided nip_baru' });
            }
            const nip = nipResult.rows[0].nip;

            // 2. Delete record
            const deleteQuery = `
            DELETE FROM bpjph.td_suami_istri
            WHERE nip = $1
              AND no_urut = $2
            RETURNING *;
        `;

            const values = [nip, no_urut];
            const { rows } = await db.query(deleteQuery, values);

            if (!rows.length) {
                return res.status(404).send({ RC: '06', message: 'No record deleted, id not found' });
            }

            return res.status(200).send({ RC: '00', message: 'Delete Suami/Istri Success', data: rows[0] });

        } catch (error) {
            return res.status(400).send({ RC: '99', message: 'Delete Suami/Istri Error', error });
        }
    },
    async getSuamiIstriEdit(req, res) {
        const { nip_baru, is_tunggu } = req.query;
        let readQuery = `SELECT a.* FROM bpjph.td_suami_istri_edit a 
        left join bpjph.tm_pegawai b on a.nip=b.nip
        WHERE b.nip_baru = $1`;
        if (is_tunggu != null) {
            if (is_tunggu == true) {
                readQuery += ` AND a.exec_status='TUNGGU'`
            } else {
                readQuery += ` AND a.exec_status<>'TUNGGU'`
            }
        }
        try {
            const { rows, rowCount } = await db.query(readQuery, [nip_baru]);
            if (!rowCount) {
                return res.status(404).send({ 'RC': '05', 'message': 'Data Not Found' });
            }
            return res.status(200).send({ 'RC': '00', 'message': 'Success', 'data': rows });
        } catch (error) {
            return res.status(400).send({ 'RC': '99', 'message': 'Error', error });
        }
    },
    async postSuamiIstriEdit(req, res) {
        const {
            nip_baru,   // this comes from req.body or req.query
            nama,
            tgl_lahir,
            tgl_nikah,
            tgl_pisah,
            pekerjaan,
            user_add,
            time_add,
            user_update,
            time_update,
            tempat_lahir,
            keterangan,
            status_edit,
            status_time,
            exec_edit,
            exec_time,
            exec_status,
            exec_alasan,
            exec_satker,
            file_nikah,
            link_nikah,
            tertanggung,
            no_urut
        } = req.body;

        try {
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);

            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: '05', message: 'NIP not found for provided nip_baru' });
            }

            const nip = nipResult.rows[0].nip;
            const execUrutQuery = `SELECT exec_urut FROM bpjph.td_suami_istri_edit WHERE nip = $1 order by exec_urut desc LIMIT 1`;
            const execUrutResult = await db.query(execUrutQuery, [nip]);
            let m_no_urut = 0;
            let exec_urut = 0;
            if (execUrutResult.rowCount) {
                exec_urut = parseInt(execUrutResult.rows[0].exec_urut) + 1;
            }
            if (no_urut) {
                m_no_urut = no_urut;
            }

            const insertQuery = `
            INSERT INTO bpjph.td_suami_istri_edit
            (nip, no_urut, nama, tgl_lahir, tgl_nikah, tgl_pisah, pekerjaan, user_add, time_add, 
             user_update, time_update, tempat_lahir, keterangan, status_edit, status_time, exec_edit, 
             exec_time, exec_status, exec_urut, exec_alasan, exec_satker, file_nikah, link_nikah, tertanggung)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9,
                    $10, $11, $12, $13, $14, $15, $16,
                    $17, $18, $19, $20, $21, $22, $23, $24)
            RETURNING *;
        `;

            const values = [
                nip,
                m_no_urut,
                nama,
                tgl_lahir,
                tgl_nikah,
                tgl_pisah,
                pekerjaan,
                user_add,
                time_add,
                user_update,
                time_update,
                tempat_lahir,
                keterangan,
                status_edit,
                status_time,
                exec_edit,
                exec_time,
                exec_status,
                exec_urut,
                exec_alasan,
                exec_satker,
                file_nikah,
                link_nikah,
                tertanggung
            ];

            const { rows } = await db.query(insertQuery, values);

            return res.status(201).send({ RC: '00', message: 'Insert Success', data: rows[0] });

        } catch (error) {
            return res.status(400).send({ RC: '99', message: 'Insert Error', error });
        }
    },
    async putSuamiIstriEdit(req, res) {
        const {
            exec_urut,
            nip_baru,
            nama,
            tgl_lahir,
            tgl_nikah,
            tgl_pisah,
            pekerjaan,
            user_update,
            time_update,
            tempat_lahir,
            keterangan,
            status_edit,
            status_time,
            exec_edit,
            exec_time,
            exec_status,
            exec_alasan,
            exec_satker,
            file_nikah,
            link_nikah,
            tertanggung
        } = req.body;

        try {
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);

            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: '05', message: 'NIP not found for provided nip_baru' });
            }

            const nip = nipResult.rows[0].nip;

            const updateQuery = `
            UPDATE bpjph.td_suami_istri_edit
            SET 
                nama = $2,
                tgl_lahir = $3,
                tgl_nikah = $4,
                tgl_pisah = $5,
                pekerjaan = $6,
                user_update = $7,
                time_update = $8,
                tempat_lahir = $9,
                keterangan = $10,
                status_edit = $11,
                status_time = $12,
                exec_edit = $13,
                exec_time = $14,
                exec_status = $15,
                exec_alasan = $16,
                exec_satker = $17,
                file_nikah = $18,
                link_nikah = $19,
                tertanggung = $20
            WHERE nip = $1
            AND exec_urut = $21
            RETURNING *;
        `;

            const values = [
                nip,
                nama,
                tgl_lahir,
                tgl_nikah,
                tgl_pisah,
                pekerjaan,
                user_update,
                time_update,
                tempat_lahir,
                keterangan,
                status_edit,
                status_time,
                exec_edit,
                exec_time,
                exec_status,
                exec_alasan,
                exec_satker,
                file_nikah,
                link_nikah,
                tertanggung,
                exec_urut
            ];

            const { rows } = await db.query(updateQuery, values);

            if (!rows.length) {
                return res.status(404).send({ RC: '06', message: 'No record updated, id not found' });
            }

            return res.status(200).send({ RC: '00', message: 'Update Success', data: rows[0] });

        } catch (error) {
            return res.status(400).send({ RC: '99', message: 'Update Error', error });
        }
    },
    async deleteSuamiIstriEdit(req, res) {
        const {
            exec_urut,             // must come from req.body (or req.params) to identify which row to update
            nip_baru,
        } = req.body;

        try {
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);

            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: '05', message: 'NIP not found for provided nip_baru' });
            }

            const nip = nipResult.rows[0].nip;

            const deleteQuery = `
            DELETE FROM bpjph.td_suami_istri_edit
            WHERE nip = $1
            AND exec_urut = $2
            RETURNING *;
        `;

            const values = [
                nip,
                exec_urut
            ];

            const { rows } = await db.query(deleteQuery, values);

            if (!rows.length) {
                return res.status(404).send({ RC: '06', message: 'No record updated, id not found' });
            }

            return res.status(200).send({ RC: '00', message: 'Delete Success', data: rows[0] });

        } catch (error) {
            return res.status(400).send({ RC: '99', message: 'Delete Error', error });
        }
    },

    async getAnak(req, res) {
        const { nip_baru } = req.query;
        const readQuery = `SELECT a.*,c.status_kawin,d.status_anak,e.jen_kel FROM bpjph.td_anak a 
        left join bpjph.tm_pegawai b on a.nip=b.nip
        left join bpjph.tm_status_kawin c on c.kode_status_kawin=a.kode_status_kawin
        left join bpjph.tm_status_anak d on d.kode_status_anak=a.kode_status_anak
        left join bpjph.tm_jenis_kelamin e on e.jenis_kelamin=a.jenis_kelamin
        WHERE b.nip_baru = $1`;
        try {
            const { rows, rowCount } = await db.query(readQuery, [nip_baru]);
            if (!rowCount) {
                return res.status(404).send({ 'RC': '05', 'message': 'Data Not Found' });
            }
            return res.status(200).send({ 'RC': '00', 'message': 'Success', 'data': rows });
        } catch (error) {
            return res.status(400).send({ 'RC': '99', 'message': 'Error', error });
        }
    },
    async postAnak(req, res) {
        const {
            nip_baru,
            nama,
            jenis_kelamin,
            tgl_lahir,
            kode_status_anak,
            keterangan,
            user_add,
            time_add,
            user_update,
            time_update,
            pekerjaan,
            tempat_lahir,
            file_anak,
            link_anak,
            tertanggung,
            kode_status_kawin
        } = req.body;

        try {
            // 1. Find nip from nip_baru
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);

            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: '05', message: 'NIP not found for provided nip_baru' });
            }

            const nip = nipResult.rows[0].nip;

            // 2. Determine next no_urut
            const urutQuery = `
            SELECT no_urut
            FROM bpjph.td_anak
            WHERE nip = $1
            ORDER BY no_urut DESC
            LIMIT 1
        `;
            const urutResult = await db.query(urutQuery, [nip]);

            let no_urut = 1;
            if (urutResult.rowCount) {
                no_urut = parseInt(urutResult.rows[0].no_urut) + 1;
            }

            // 3. Insert new anak record
            const insertQuery = `
            INSERT INTO bpjph.td_anak
            (nip, no_urut, nama, jenis_kelamin, tgl_lahir, kode_status_anak,
             keterangan, user_add, time_add, user_update, time_update,
             pekerjaan, tempat_lahir, file_anak, link_anak,
             tertanggung, kode_status_kawin)
            VALUES ($1, $2, $3, $4, $5, $6,
                    $7, $8, $9, $10, $11,
                    $12, $13, $14, $15,
                    $16, $17)
            RETURNING *;
        `;

            const values = [
                nip,
                no_urut,
                nama,
                jenis_kelamin,
                tgl_lahir,
                kode_status_anak,
                keterangan,
                user_add,
                time_add,
                user_update,
                time_update,
                pekerjaan,
                tempat_lahir,
                file_anak,
                link_anak,
                tertanggung,
                kode_status_kawin
            ];

            const { rows } = await db.query(insertQuery, values);

            return res.status(201).send({ RC: '00', message: 'Insert Anak Success', data: rows[0] });

        } catch (error) {
            return res.status(400).send({ RC: '99', message: 'Insert Anak Error', error });
        }
    },
    async putAnak(req, res) {
        const {
            no_urut,
            nip_baru,
            nama,
            jenis_kelamin,
            tgl_lahir,
            kode_status_anak,
            keterangan,
            user_update,
            time_update,
            pekerjaan,
            tempat_lahir,
            file_anak,
            link_anak,
            tertanggung,
            kode_status_kawin
        } = req.body;

        try {
            // 1. Resolve nip from nip_baru
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);

            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: '05', message: 'NIP not found for provided nip_baru' });
            }

            const nip = nipResult.rows[0].nip;

            // 2. Update anak record
            const updateQuery = `
            UPDATE bpjph.td_anak
            SET
                nama = $3,
                jenis_kelamin = $4,
                tgl_lahir = $5,
                kode_status_anak = $6,
                keterangan = $7,
                user_update = $8,
                time_update = $9,
                pekerjaan = $10,
                tempat_lahir = $11,
                file_anak = $12,
                link_anak = $13,
                tertanggung = $14,
                kode_status_kawin = $15
            WHERE nip = $1
              AND no_urut = $2
            RETURNING *;
        `;

            const values = [
                nip,
                no_urut,
                nama,
                jenis_kelamin,
                tgl_lahir,
                kode_status_anak,
                keterangan,
                user_update,
                time_update,
                pekerjaan,
                tempat_lahir,
                file_anak,
                link_anak,
                tertanggung,
                kode_status_kawin
            ];

            const { rows } = await db.query(updateQuery, values);

            if (!rows.length) {
                return res.status(404).send({ RC: '06', message: 'No record updated, record not found' });
            }

            return res.status(200).send({ RC: '00', message: 'Update Anak Success', data: rows[0] });

        } catch (error) {
            return res.status(400).send({ RC: '99', message: 'Update Anak Error', error });
        }
    },
    async deleteAnak(req, res) {
        const {
            no_urut,
            nip_baru
        } = req.body;

        try {
            // 1. Find nip from nip_baru
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);

            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: '05', message: 'NIP not found for provided nip_baru' });
            }

            const nip = nipResult.rows[0].nip;

            // 2. Delete anak record
            const deleteQuery = `
            DELETE FROM bpjph.td_anak
            WHERE nip = $1
              AND no_urut = $2
            RETURNING *;
        `;

            const values = [nip, no_urut];
            const { rows } = await db.query(deleteQuery, values);

            if (!rows.length) {
                return res.status(404).send({ RC: '06', message: 'No record deleted, id not found' });
            }

            return res.status(200).send({ RC: '00', message: 'Delete Anak Success', data: rows[0] });

        } catch (error) {
            return res.status(400).send({ RC: '99', message: 'Delete Anak Error', error });
        }
    },
    async getAnakEdit(req, res) {
        const { nip_baru, is_tunggu } = req.query;
        let readQuery = `SELECT a.*,c.status_kawin,d.status_anak,e.jen_kel FROM bpjph.td_anak_edit a 
        left join bpjph.tm_pegawai b on a.nip=b.nip
        left join bpjph.tm_status_kawin c on c.kode_status_kawin=a.kode_status_kawin
        left join bpjph.tm_status_anak d on d.kode_status_anak=a.kode_status_anak
        left join bpjph.tm_jenis_kelamin e on e.jenis_kelamin=a.jenis_kelamin
        WHERE b.nip_baru = $1`;
        if (is_tunggu != null) {
            if (is_tunggu == true) {
                readQuery += ` AND a.exec_status='TUNGGU'`
            } else {
                readQuery += ` AND a.exec_status<>'TUNGGU'`
            }
        }
        try {
            const { rows, rowCount } = await db.query(readQuery, [nip_baru]);
            if (!rowCount) {
                return res.status(404).send({ 'RC': '05', 'message': 'Data Not Found' });
            }
            return res.status(200).send({ 'RC': '00', 'message': 'Success', 'data': rows });
        } catch (error) {
            return res.status(400).send({ 'RC': '99', 'message': 'Error', error });
        }
    },
    async postAnakEdit(req, res) {
        const {
            nip_baru,
            nama,
            jenis_kelamin,
            tgl_lahir,
            kode_status_anak,
            keterangan,
            user_add,
            time_add,
            user_update,
            time_update,
            pekerjaan,
            tempat_lahir,
            status_edit,
            status_time,
            exec_edit,
            exec_time,
            exec_status,
            exec_alasan,
            exec_satker,
            file_anak,
            link_anak,
            tertanggung,
            kode_status_kawin,
            exec_nohp,
            no_urut
        } = req.body;

        try {
            // 1. Find nip from nip_baru
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);

            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: '05', message: 'NIP not found for provided nip_baru' });
            }

            const nip = nipResult.rows[0].nip;

            // 2. Determine exec_urut
            const urutQuery = `
            SELECT exec_urut
            FROM bpjph.td_anak_edit
            WHERE nip = $1
            ORDER BY exec_urut DESC
            LIMIT 1
        `;
            const urutResult = await db.query(urutQuery, [nip]);

            let exec_urut = 0;
            let m_no_urut = 0;
            if (urutResult.rowCount) {
                exec_urut = parseInt(urutResult.rows[0].exec_urut) + 1;
            }
            if (no_urut) {
                m_no_urut = no_urut;
            }

            // 3. Insert new anak record
            const insertQuery = `
            INSERT INTO bpjph.td_anak_edit
            (nip, no_urut, nama, jenis_kelamin, tgl_lahir, kode_status_anak,
             keterangan, user_add, time_add, user_update, time_update,
             pekerjaan, tempat_lahir, status_edit, status_time, exec_edit,
             exec_time, exec_status, exec_urut, exec_alasan, exec_satker,
             file_anak, link_anak, tertanggung, kode_status_kawin, exec_nohp)
            VALUES ($1, $2, $3, $4, $5, $6,
                    $7, $8, $9, $10, $11,
                    $12, $13, $14, $15, $16,
                    $17, $18, $19, $20, $21,
                    $22, $23, $24, $25, $26)
            RETURNING *;
        `;

            const values = [
                nip,
                m_no_urut,
                nama,
                jenis_kelamin,
                tgl_lahir,
                kode_status_anak,
                keterangan,
                user_add,
                time_add,
                user_update,
                time_update,
                pekerjaan,
                tempat_lahir,
                status_edit,
                status_time,
                exec_edit,
                exec_time,
                exec_status,
                exec_urut,
                exec_alasan,
                exec_satker,
                file_anak,
                link_anak,
                tertanggung,
                kode_status_kawin,
                exec_nohp
            ];

            const { rows } = await db.query(insertQuery, values);

            return res.status(201).send({ RC: '00', message: 'Insert Anak Success', data: rows[0] });

        } catch (error) {
            return res.status(400).send({ RC: '99', message: 'Insert Anak Error', error });
        }
    },
    async putAnakEdit(req, res) {
        const {
            exec_urut,
            nip_baru,
            nama,
            jenis_kelamin,
            tgl_lahir,
            kode_status_anak,
            keterangan,
            user_update,
            time_update,
            pekerjaan,
            tempat_lahir,
            status_edit,
            status_time,
            exec_edit,
            exec_time,
            exec_status,
            exec_alasan,
            exec_satker,
            file_anak,
            link_anak,
            tertanggung,
            kode_status_kawin,
            exec_nohp
        } = req.body;

        try {
            // 1. Resolve nip from nip_baru
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);

            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: '05', message: 'NIP not found for provided nip_baru' });
            }

            const nip = nipResult.rows[0].nip;

            // 2. Update anak record
            const updateQuery = `
            UPDATE bpjph.td_anak_edit
            SET
                nama = $2,
                jenis_kelamin = $3,
                tgl_lahir = $4,
                kode_status_anak = $5,
                keterangan = $6,
                user_update = $7,
                time_update = $8,
                pekerjaan = $9,
                tempat_lahir = $10,
                status_edit = $11,
                status_time = $12,
                exec_edit = $13,
                exec_time = $14,
                exec_status = $15,
                exec_alasan = $16,
                exec_satker = $17,
                file_anak = $18,
                link_anak = $19,
                tertanggung = $20,
                kode_status_kawin = $21,
                exec_nohp = $22
            WHERE nip = $1
              AND exec_urut = $23
            RETURNING *;
        `;

            const values = [
                nip,
                nama,
                jenis_kelamin,
                tgl_lahir,
                kode_status_anak,
                keterangan,
                user_update,
                time_update,
                pekerjaan,
                tempat_lahir,
                status_edit,
                status_time,
                exec_edit,
                exec_time,
                exec_status,
                exec_alasan,
                exec_satker,
                file_anak,
                link_anak,
                tertanggung,
                kode_status_kawin,
                exec_nohp,
                exec_urut
            ];

            const { rows } = await db.query(updateQuery, values);

            if (!rows.length) {
                return res.status(404).send({ RC: '06', message: 'No record updated, record not found' });
            }

            return res.status(200).send({ RC: '00', message: 'Update Anak Success', data: rows[0] });

        } catch (error) {
            return res.status(400).send({ RC: '99', message: 'Update Anak Error', error });
        }
    },
    async deleteAnakEdit(req, res) {
        const {
            exec_urut,   // use exec_urut instead of no_urut
            nip_baru,
        } = req.body;

        try {
            // first find nip from nip_baru
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);

            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: '05', message: 'NIP not found for provided nip_baru' });
            }

            const nip = nipResult.rows[0].nip;

            // delete record
            const deleteQuery = `
            DELETE FROM bpjph.td_anak_edit
            WHERE nip = $1
            AND exec_urut = $2
            RETURNING *;
        `;

            const values = [nip, exec_urut];

            const { rows } = await db.query(deleteQuery, values);

            if (!rows.length) {
                return res.status(404).send({ RC: '06', message: 'No record deleted, id not found' });
            }

            return res.status(200).send({ RC: '00', message: 'Delete Success', data: rows[0] });

        } catch (error) {
            return res.status(400).send({ RC: '99', message: 'Delete Error', error });
        }
    },


    async getPendidikan(req, res) {
        const { nip_baru } = req.query;
        const readQuery = `SELECT a.*,c.jenjang_pendidikan,d.fakultas_pendidikan FROM bpjph.tr_pendidikan a 
        left join bpjph.tm_pegawai b on a.nip=b.nip
        left join bpjph.tm_jenjang_pendidikan c on c.kode_jenjang_pendidikan=a.kode_jenjang_pendidikan
        left join bpjph.tm_fakultas_pendidikan d on d.kode_fakultas_pendidikan=a.kode_fakultas_pendidikan
        WHERE b.nip_baru = $1`;
        try {
            const { rows, rowCount } = await db.query(readQuery, [nip_baru]);
            if (!rowCount) {
                return res.status(404).send({ 'RC': '05', 'message': 'Data Not Found' });
            }
            return res.status(200).send({ 'RC': '00', 'message': 'Success', 'data': rows });
        } catch (error) {
            return res.status(400).send({ 'RC': '99', 'message': 'Error', error });
        }
    },
    async postPendidikan(req, res) {
        const {
            nip_baru,
            nama_sekolah,
            kode_jenjang_pendidikan,
            akta,
            kode_fakultas_pendidikan,
            jurusan,
            tahun_lulus,
            lokasi_sekolah,
            user_add,
            time_add,
            user_update,
            time_update,
            tanda_tangan,
            unik_id,
            no_ijazah,
            file_sk,
            file_posisi,
            link_pendidikan
        } = req.body;

        try {
            // 1. Resolve nip
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: '05', message: 'NIP not found for provided nip_baru' });
            }
            const nip = nipResult.rows[0].nip;

            // 2. Get next no_urut
            const urutQuery = `
      SELECT no_urut
      FROM bpjph.tr_pendidikan
      WHERE nip = $1
      ORDER BY no_urut DESC
      LIMIT 1
    `;
            const urutResult = await db.query(urutQuery, [nip]);

            let no_urut = 1;
            if (urutResult.rowCount) {
                no_urut = parseInt(urutResult.rows[0].no_urut) + 1;
            }

            // 3. Insert
            const insertQuery = `
      INSERT INTO bpjph.tr_pendidikan
      (nip, no_urut, nama_sekolah, kode_jenjang_pendidikan, akta,
       kode_fakultas_pendidikan, jurusan, tahun_lulus, lokasi_sekolah,
       user_add, time_add, user_update, time_update,
       tanda_tangan, unik_id, no_ijazah, file_sk, file_posisi, link_pendidikan)
      VALUES ($1,$2,$3,$4,$5,
              $6,$7,$8,$9,
              $10,$11,$12,$13,
              $14,$15,$16,$17,$18,$19)
      RETURNING *;
    `;

            const values = [
                nip, no_urut,
                nama_sekolah, kode_jenjang_pendidikan, akta,
                kode_fakultas_pendidikan, jurusan, tahun_lulus, lokasi_sekolah,
                user_add, time_add, user_update, time_update,
                tanda_tangan, unik_id, no_ijazah, file_sk, file_posisi, link_pendidikan
            ];

            const { rows } = await db.query(insertQuery, values);
            return res.status(201).send({ RC: '00', message: 'Insert Pendidikan Success', data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: '99', message: 'Insert Pendidikan Error', error });
        }
    },
    async putPendidikan(req, res) {
        const {
            no_urut,
            nip_baru,
            nama_sekolah,
            kode_jenjang_pendidikan,
            akta,
            kode_fakultas_pendidikan,
            jurusan,
            tahun_lulus,
            lokasi_sekolah,
            user_update,
            time_update,
            tanda_tangan,
            unik_id,
            no_ijazah,
            file_sk,
            file_posisi,
            link_pendidikan
        } = req.body;

        try {
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: '05', message: 'NIP not found for provided nip_baru' });
            }
            const nip = nipResult.rows[0].nip;

            const updateQuery = `
      UPDATE bpjph.tr_pendidikan
      SET
        nama_sekolah = $3,
        kode_jenjang_pendidikan = $4,
        akta = $5,
        kode_fakultas_pendidikan = $6,
        jurusan = $7,
        tahun_lulus = $8,
        lokasi_sekolah = $9,
        user_update = $10,
        time_update = $11,
        tanda_tangan = $12,
        unik_id = $13,
        no_ijazah = $14,
        file_sk = $15,
        file_posisi = $16,
        link_pendidikan = $17
      WHERE nip = $1
        AND no_urut = $2
      RETURNING *;
    `;

            const values = [
                nip, no_urut,
                nama_sekolah, kode_jenjang_pendidikan, akta,
                kode_fakultas_pendidikan, jurusan, tahun_lulus, lokasi_sekolah,
                user_update, time_update, tanda_tangan, unik_id, no_ijazah,
                file_sk, file_posisi, link_pendidikan
            ];

            const { rows } = await db.query(updateQuery, values);
            if (!rows.length) {
                return res.status(404).send({ RC: '06', message: 'No record updated, record not found' });
            }

            return res.status(200).send({ RC: '00', message: 'Update Pendidikan Success', data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: '99', message: 'Update Pendidikan Error', error });
        }
    },
    async deletePendidikan(req, res) {
        const { no_urut, nip_baru } = req.body;

        try {
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: '05', message: 'NIP not found for provided nip_baru' });
            }
            const nip = nipResult.rows[0].nip;

            const deleteQuery = `
      DELETE FROM bpjph.tr_pendidikan
      WHERE nip = $1
        AND no_urut = $2
      RETURNING *;
    `;
            const { rows } = await db.query(deleteQuery, [nip, no_urut]);

            if (!rows.length) {
                return res.status(404).send({ RC: '06', message: 'No record deleted, record not found' });
            }

            return res.status(200).send({ RC: '00', message: 'Delete Pendidikan Success', data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: '99', message: 'Delete Pendidikan Error', error });
        }
    },
    async getPendidikanEdit(req, res) {
        const { nip_baru } = req.query;
        const readQuery = `SELECT a.*,c.jenjang_pendidikan,d.fakultas_pendidikan FROM bpjph.tr_pendidikan_edit a 
        left join bpjph.tm_pegawai b on a.nip=b.nip
        left join bpjph.tm_jenjang_pendidikan c on c.kode_jenjang_pendidikan=a.kode_jenjang_pendidikan
        left join bpjph.tm_fakultas_pendidikan d on d.kode_fakultas_pendidikan=a.kode_fakultas_pendidikan
        WHERE b.nip_baru = $1`;
        try {
            const { rows, rowCount } = await db.query(readQuery, [nip_baru]);
            if (!rowCount) {
                return res.status(404).send({ 'RC': '05', 'message': 'Data Not Found' });
            }
            return res.status(200).send({ 'RC': '00', 'message': 'Success', 'data': rows });
        } catch (error) {
            return res.status(400).send({ 'RC': '99', 'message': 'Error', error });
        }
    },
    async postPendidikanEdit(req, res) {
        const {
            nip_baru,
            nama_sekolah,
            kode_jenjang_pendidikan,
            akta,
            kode_fakultas_pendidikan,
            jurusan,
            tahun_lulus,
            lokasi_sekolah,
            user_add,
            time_add,
            user_update,
            time_update,
            tanda_tangan,
            unik_id,
            no_ijazah,
            file_sk,
            status_edit,
            status_time,
            exec_edit,
            exec_time,
            exec_status,
            exec_alasan,
            exec_satker,
            link_pendidikan,
            no_urut,
        } = req.body;

        try {
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: '05', message: 'NIP not found for provided nip_baru' });
            }
            const nip = nipResult.rows[0].nip;

            const execUrutQuery = `SELECT exec_urut FROM bpjph.tr_pendidikan_edit WHERE nip = $1 order by exec_urut desc LIMIT 1`;
            const execUrutResult = await db.query(execUrutQuery, [nip]);

            let m_no_urut = 0;
            let exec_urut = 0;
            if (execUrutResult.rowCount) {
                exec_urut = parseInt(execUrutResult.rows[0].exec_urut) + 1;
            }

            if (no_urut) {
                m_no_urut = no_urut;
            }

            const insertQuery = `
            INSERT INTO bpjph.tr_pendidikan_edit
            (nip, no_urut, nama_sekolah, kode_jenjang_pendidikan, akta,
             kode_fakultas_pendidikan, jurusan, tahun_lulus, lokasi_sekolah,
             user_add, time_add, user_update, time_update,
             tanda_tangan, unik_id, no_ijazah, file_sk,
             status_edit, status_time, exec_edit, exec_time, exec_status, exec_urut,
             exec_alasan, exec_satker, link_pendidikan)
            VALUES ($1, $2, $3, $4, $5,
                    $6, $7, $8, $9,
                    $10, $11, $12, $13,
                    $14, $15, $16, $17,
                    $18, $19, $20, $21, $22, $23,
                    $24, $25, $26)
            RETURNING *;
        `;

            const values = [
                nip,
                m_no_urut,
                nama_sekolah,
                kode_jenjang_pendidikan,
                akta,
                kode_fakultas_pendidikan,
                jurusan,
                tahun_lulus,
                lokasi_sekolah,
                user_add,
                time_add,
                user_update,
                time_update,
                tanda_tangan,
                unik_id,
                no_ijazah,
                file_sk,
                status_edit,
                status_time,
                exec_edit,
                exec_time,
                exec_status,
                exec_urut,
                exec_alasan,
                exec_satker,
                link_pendidikan
            ];

            const { rows } = await db.query(insertQuery, values);
            return res.status(201).send({ RC: '00', message: 'Insert Pendidikan Success', data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: '99', message: 'Insert Pendidikan Error', error });
        }
    },
    async putPendidikanEdit(req, res) {
        const {
            exec_urut,
            nip_baru,
            nama_sekolah,
            kode_jenjang_pendidikan,
            akta,
            kode_fakultas_pendidikan,
            jurusan,
            tahun_lulus,
            lokasi_sekolah,
            user_update,
            time_update,
            tanda_tangan,
            unik_id,
            no_ijazah,
            file_sk,
            status_edit,
            status_time,
            exec_edit,
            exec_time,
            exec_status,
            exec_alasan,
            exec_satker,
            link_pendidikan,
        } = req.body;

        try {
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: '05', message: 'NIP not found for provided nip_baru' });
            }
            const nip = nipResult.rows[0].nip;

            const updateQuery = `
            UPDATE bpjph.tr_pendidikan_edit
            SET
                nama_sekolah = $2,
                kode_jenjang_pendidikan = $3,
                akta = $4,
                kode_fakultas_pendidikan = $5,
                jurusan = $6,
                tahun_lulus = $7,
                lokasi_sekolah = $8,
                user_update = $9,
                time_update = $10,
                tanda_tangan = $11,
                unik_id = $12,
                no_ijazah = $13,
                file_sk = $14,
                status_edit = $15,
                status_time = $16,
                exec_edit = $17,
                exec_time = $18,
                exec_status = $19,
                exec_alasan = $20,
                exec_satker = $21,
                link_pendidikan = $22
            WHERE nip = $1
            AND exec_urut = $23
            RETURNING *;
        `;

            const values = [
                nip,
                nama_sekolah,
                kode_jenjang_pendidikan,
                akta,
                kode_fakultas_pendidikan,
                jurusan,
                tahun_lulus,
                lokasi_sekolah,
                user_update,
                time_update,
                tanda_tangan,
                unik_id,
                no_ijazah,
                file_sk,
                status_edit,
                status_time,
                exec_edit,
                exec_time,
                exec_status,
                exec_alasan,
                exec_satker,
                link_pendidikan,
                exec_urut
            ];

            const { rows } = await db.query(updateQuery, values);
            if (!rows.length) {
                return res.status(404).send({ RC: '06', message: 'No record updated, record not found' });
            }

            return res.status(200).send({ RC: '00', message: 'Update Pendidikan Success', data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: '99', message: 'Update Pendidikan Error', error });
        }
    },
    async deletePendidikanEdit(req, res) {
        const { exec_urut, nip_baru } = req.body;

        try {
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: '05', message: 'NIP not found for provided nip_baru' });
            }
            const nip = nipResult.rows[0].nip;

            const deleteQuery = `
            DELETE FROM bpjph.tr_pendidikan_edit
            WHERE nip = $1
            AND exec_urut = $2
            RETURNING *;
        `;
            const { rows } = await db.query(deleteQuery, [nip, exec_urut]);

            if (!rows.length) {
                return res.status(404).send({ RC: '06', message: 'No record deleted, record not found' });
            }

            return res.status(200).send({ RC: '00', message: 'Delete Pendidikan Success', data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: '99', message: 'Delete Pendidikan Error', error });
        }
    },

    async getDiklat(req, res) {
        const { nip_baru } = req.query;
        const readQuery = `SELECT a.*,c.diklat FROM bpjph.tr_diklat a 
        left join bpjph.tm_pegawai b on a.nip=b.nip
        left join bpjph.tm_diklat c on c.kode_diklat=a.kode_diklat
        WHERE b.nip_baru = $1`;
        try {
            const { rows, rowCount } = await db.query(readQuery, [nip_baru]);
            if (!rowCount) {
                return res.status(404).send({ 'RC': '05', 'message': 'Data Not Found' });
            }
            return res.status(200).send({ 'RC': '00', 'message': 'Success', 'data': rows });
        } catch (error) {
            return res.status(400).send({ 'RC': '99', 'message': 'Error', error });
        }
    },
    async postDiklat(req, res) {
        const {
            nip_baru,
            kode_diklat,
            diklat_lain,
            tahun,
            penyelenggara,
            lama_bln,
            lama_hari,
            lama_jam,
            user_add,
            time_add,
            user_update,
            time_update,
            tempat,
            tgl_awal,
            tgl_akhir,
            file_sk,
            file_posisi,
            link_diklat,
            no_sertifikat,
            id_bkn,
        } = req.body;

        try {
            // 1. Resolve nip
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            // 2. Get next no_urut
            const urutQuery = `
        SELECT no_urut
        FROM bpjph.tr_diklat
        WHERE nip = $1
        ORDER BY no_urut DESC
        LIMIT 1
      `;
            const urutResult = await db.query(urutQuery, [nip]);

            let no_urut = 1;
            if (urutResult.rowCount) {
                no_urut = parseInt(urutResult.rows[0].no_urut) + 1;
            }

            // 3. Insert
            const insertQuery = `
        INSERT INTO bpjph.tr_diklat
        (nip, no_urut, kode_diklat, diklat_lain, tahun, penyelenggara,
         lama_bln, lama_hari, lama_jam, user_add, time_add, user_update, time_update,
         tempat, tgl_awal, tgl_akhir, file_sk, file_posisi, link_diklat, no_sertifikat, id_bkn)
        VALUES ($1,$2,$3,$4,$5,$6,
                $7,$8,$9,$10,$11,$12,$13,
                $14,$15,$16,$17,$18,$19,$20,$21)
        RETURNING *;
      `;

            const values = [
                nip, no_urut, kode_diklat, diklat_lain, tahun, penyelenggara,
                lama_bln, lama_hari, lama_jam,
                user_add, time_add, user_update, time_update,
                tempat, tgl_awal, tgl_akhir,
                file_sk, file_posisi, link_diklat, no_sertifikat, id_bkn,
            ];

            const { rows } = await db.query(insertQuery, values);
            return res.status(201).send({ RC: "00", message: "Insert Diklat Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Insert Diklat Error", error });
        }
    },
    async putDiklat(req, res) {
        const {
            no_urut,
            nip_baru,
            kode_diklat,
            diklat_lain,
            tahun,
            penyelenggara,
            lama_bln,
            lama_hari,
            lama_jam,
            user_update,
            time_update,
            tempat,
            tgl_awal,
            tgl_akhir,
            file_sk,
            file_posisi,
            link_diklat,
            no_sertifikat,
            id_bkn,
        } = req.body;

        try {
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            const updateQuery = `
        UPDATE bpjph.tr_diklat
        SET
          kode_diklat = $2,
          diklat_lain = $3,
          tahun = $4,
          penyelenggara = $5,
          lama_bln = $6,
          lama_hari = $7,
          lama_jam = $8,
          user_update = $9,
          time_update = $10,
          tempat = $11,
          tgl_awal = $12,
          tgl_akhir = $13,
          file_sk = $14,
          file_posisi = $15,
          link_diklat = $16,
          no_sertifikat = $17,
          id_bkn = $18
        WHERE nip = $1
          AND no_urut = $19
        RETURNING *;
      `;

            const values = [
                nip, kode_diklat, diklat_lain, tahun, penyelenggara,
                lama_bln, lama_hari, lama_jam,
                user_update, time_update, tempat, tgl_awal, tgl_akhir,
                file_sk, file_posisi, link_diklat, no_sertifikat, id_bkn,
                no_urut,
            ];

            const { rows } = await db.query(updateQuery, values);
            if (!rows.length) {
                return res.status(404).send({ RC: "06", message: "No record updated, record not found" });
            }

            return res.status(200).send({ RC: "00", message: "Update Diklat Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Update Diklat Error", error });
        }
    },
    async deleteDiklat(req, res) {
        const { no_urut, nip_baru } = req.body;

        try {
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            const deleteQuery = `
        DELETE FROM bpjph.tr_diklat
        WHERE nip = $1
          AND no_urut = $2
        RETURNING *;
      `;
            const { rows } = await db.query(deleteQuery, [nip, no_urut]);

            if (!rows.length) {
                return res.status(404).send({ RC: "06", message: "No record deleted, record not found" });
            }

            return res.status(200).send({ RC: "00", message: "Delete Diklat Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Delete Diklat Error", error });
        }
    },
    async getDiklatEdit(req, res) {
        const { nip_baru } = req.query;
        const readQuery = `SELECT a.*,c.diklat FROM bpjph.tr_diklat_edit a 
        left join bpjph.tm_pegawai b on a.nip=b.nip
        left join bpjph.tm_diklat c on c.kode_diklat=a.kode_diklat
        WHERE b.nip_baru = $1`;
        try {
            const { rows, rowCount } = await db.query(readQuery, [nip_baru]);
            if (!rowCount) {
                return res.status(404).send({ 'RC': '05', 'message': 'Data Not Found' });
            }
            return res.status(200).send({ 'RC': '00', 'message': 'Success', 'data': rows });
        } catch (error) {
            return res.status(400).send({ 'RC': '99', 'message': 'Error', error });
        }
    },
    async postDiklatEdit(req, res) {
        const {
            nip_baru,
            kode_diklat,
            diklat_lain,
            tahun,
            penyelenggara,
            lama_bln,
            lama_hari,
            lama_jam,
            user_add,
            time_add,
            user_update,
            time_update,
            tempat,
            tgl_awal,
            tgl_akhir,
            file_sk,
            status_edit,
            status_time,
            exec_edit,
            exec_time,
            exec_status,
            exec_alasan,
            exec_satker,
            link_diklat,
            no_urut
        } = req.body;

        try {
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: '05', message: 'NIP not found for provided nip_baru' });
            }
            const nip = nipResult.rows[0].nip;

            const execUrutQuery = `SELECT exec_urut FROM bpjph.tr_diklat_edit WHERE nip = $1 order by exec_urut desc LIMIT 1`;
            const execUrutResult = await db.query(execUrutQuery, [nip]);

            let m_no_urut = 0;
            let exec_urut = 0;
            if (execUrutResult.rowCount) {
                exec_urut = parseInt(execUrutResult.rows[0].exec_urut) + 1;
            }

            if (no_urut) {
                m_no_urut = no_urut;
            }

            const insertQuery = `
            INSERT INTO bpjph.tr_diklat_edit
            (nip, no_urut, kode_diklat, diklat_lain, tahun, penyelenggara,
             lama_bln, lama_hari, lama_jam, user_add, time_add, user_update, time_update,
             tempat, tgl_awal, tgl_akhir, file_sk,
             status_edit, status_time, exec_edit, exec_time, exec_status, exec_urut,
             exec_alasan, exec_satker, link_diklat)
            VALUES ($1, $2, $3, $4, $5, $6,
                    $7, $8, $9, $10, $11, $12, $13,
                    $14, $15, $16, $17,
                    $18, $19, $20, $21, $22, $23,
                    $24, $25, $26)
            RETURNING *;
        `;

            const values = [
                nip,
                m_no_urut,
                kode_diklat,
                diklat_lain,
                tahun,
                penyelenggara,
                lama_bln,
                lama_hari,
                lama_jam,
                user_add,
                time_add,
                user_update,
                time_update,
                tempat,
                tgl_awal,
                tgl_akhir,
                file_sk,
                status_edit,
                status_time,
                exec_edit,
                exec_time,
                exec_status,
                exec_urut,
                exec_alasan,
                exec_satker,
                link_diklat
            ];

            const { rows } = await db.query(insertQuery, values);
            return res.status(201).send({ RC: '00', message: 'Insert Diklat Success', data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: '99', message: 'Insert Diklat Error', error });
        }
    },
    async putDiklatEdit(req, res) {
        const {
            exec_urut,
            nip_baru,
            kode_diklat,
            diklat_lain,
            tahun,
            penyelenggara,
            lama_bln,
            lama_hari,
            lama_jam,
            user_update,
            time_update,
            tempat,
            tgl_awal,
            tgl_akhir,
            file_sk,
            status_edit,
            status_time,
            exec_edit,
            exec_time,
            exec_status,
            exec_alasan,
            exec_satker,
            link_diklat
        } = req.body;

        try {
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: '05', message: 'NIP not found for provided nip_baru' });
            }
            const nip = nipResult.rows[0].nip;

            const updateQuery = `
            UPDATE bpjph.tr_diklat_edit
            SET
                kode_diklat = $2,
                diklat_lain = $3,
                tahun = $4,
                penyelenggara = $5,
                lama_bln = $6,
                lama_hari = $7,
                lama_jam = $8,
                user_update = $9,
                time_update = $10,
                tempat = $11,
                tgl_awal = $12,
                tgl_akhir = $13,
                file_sk = $14,
                status_edit = $15,
                status_time = $16,
                exec_edit = $17,
                exec_time = $18,
                exec_status = $19,
                exec_alasan = $20,
                exec_satker = $21,
                link_diklat = $22
            WHERE nip = $1
            AND exec_urut = $23
            RETURNING *;
        `;

            const values = [
                nip,
                kode_diklat,
                diklat_lain,
                tahun,
                penyelenggara,
                lama_bln,
                lama_hari,
                lama_jam,
                user_update,
                time_update,
                tempat,
                tgl_awal,
                tgl_akhir,
                file_sk,
                status_edit,
                status_time,
                exec_edit,
                exec_time,
                exec_status,
                exec_alasan,
                exec_satker,
                link_diklat,
                exec_urut
            ];

            const { rows } = await db.query(updateQuery, values);
            if (!rows.length) {
                return res.status(404).send({ RC: '06', message: 'No record updated, record not found' });
            }

            return res.status(200).send({ RC: '00', message: 'Update Diklat Success', data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: '99', message: 'Update Diklat Error', error });
        }
    },
    async deleteDiklatEdit(req, res) {
        const { exec_urut, nip_baru } = req.body;

        try {
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: '05', message: 'NIP not found for provided nip_baru' });
            }
            const nip = nipResult.rows[0].nip;

            const deleteQuery = `
            DELETE FROM bpjph.tr_diklat_edit
            WHERE nip = $1
            AND exec_urut = $2
            RETURNING *;
        `;
            const { rows } = await db.query(deleteQuery, [nip, exec_urut]);

            if (!rows.length) {
                return res.status(404).send({ RC: '06', message: 'No record deleted, record not found' });
            }

            return res.status(200).send({ RC: '00', message: 'Delete Diklat Success', data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: '99', message: 'Delete Diklat Error', error });
        }
    },

    async getPangkat(req, res) {
        const { nip_baru } = req.query;
        const readQuery = `SELECT a.*,c.ref_desc1,d.pangkat,d.gol_ruang,d.gol_pppk FROM bpjph.tr_pangkat a 
        left join bpjph.tm_pegawai b on a.nip=b.nip
        left join bpjph.tm_ref c on c.ref_id=a.jenis_sk
        left join bpjph.tm_pangkat d on d.kode_pangkat=a.kode_pangkat
        WHERE b.nip_baru = $1`;
        try {
            const { rows, rowCount } = await db.query(readQuery, [nip_baru]);
            if (!rowCount) {
                return res.status(404).send({ 'RC': '05', 'message': 'Data Not Found' });
            }
            return res.status(200).send({ 'RC': '00', 'message': 'Success', 'data': rows });
        } catch (error) {
            return res.status(400).send({ 'RC': '99', 'message': 'Error', error });
        }
    },
    async postPangkat(req, res) {
        const {
            nip_baru,
            kode_pangkat,
            no_sk,
            tgl_sk,
            tmt_sk,
            mk_tahun,
            mk_bulan,
            keterangan,
            user_add,
            time_add,
            jenis_sk,
            penandatangan,
            dasar_hukum,
            gaji_pokok,
            file_sk,
            link_pangkat,
            start_date,
            end_date,
            golru
        } = req.body;

        try {
            // 1. Resolve nip
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            // 2. Get next no_urut
            const urutQuery = `
      SELECT no_urut
      FROM bpjph.tr_pangkat
      WHERE nip = $1
      ORDER BY no_urut DESC
      LIMIT 1
    `;
            const urutResult = await db.query(urutQuery, [nip]);

            let no_urut = 1;
            if (urutResult.rowCount) {
                no_urut = parseInt(urutResult.rows[0].no_urut) + 1;
            }

            // 3. Insert into tr_pangkat
            const insertQuery = `
      INSERT INTO bpjph.tr_pangkat
      (nip, no_urut, kode_pangkat, no_sk, tgl_sk, tmt_sk, mk_tahun, mk_bulan,
       keterangan, user_add, time_add, jenis_sk, penandatangan, dasar_hukum,
       gaji_pokok, file_sk, link_pangkat, start_date, end_date, golru)
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8,
              $9,$10,$11,$12,$13,$14,
              $15,$16,$17,$18,$19,$20)
      RETURNING *;
    `;

            const values = [
                nip, no_urut, kode_pangkat, no_sk, tgl_sk, tmt_sk, mk_tahun, mk_bulan,
                keterangan, user_add, time_add, jenis_sk, penandatangan, dasar_hukum,
                gaji_pokok, file_sk, link_pangkat, start_date, end_date, golru
            ];

            const { rows } = await db.query(insertQuery, values);
            return res.status(201).send({ RC: "00", message: "Insert Pangkat Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Insert Pangkat Error", error });
        }
    },
    async putPangkat(req, res) {
        const {
            no_urut,
            nip_baru,
            kode_pangkat,
            no_sk,
            tgl_sk,
            tmt_sk,
            mk_tahun,
            mk_bulan,
            keterangan,
            user_update,
            time_update,
            jenis_sk,
            penandatangan,
            dasar_hukum,
            gaji_pokok,
            file_sk,
            link_pangkat,
            start_date,
            end_date,
            golru
        } = req.body;

        try {
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            const updateQuery = `
      UPDATE bpjph.tr_pangkat
      SET
        kode_pangkat = $2,
        no_sk = $3,
        tgl_sk = $4,
        tmt_sk = $5,
        mk_tahun = $6,
        mk_bulan = $7,
        keterangan = $8,
        user_update = $9,
        time_update = $10,
        jenis_sk = $11,
        penandatangan = $12,
        dasar_hukum = $13,
        gaji_pokok = $14,
        file_sk = $15,
        link_pangkat = $16,
        start_date = $17,
        end_date = $18,
        golru = $19
      WHERE nip = $1
        AND no_urut = $20
      RETURNING *;
    `;

            const values = [
                nip, kode_pangkat, no_sk, tgl_sk, tmt_sk, mk_tahun, mk_bulan, keterangan,
                user_update, time_update, jenis_sk, penandatangan, dasar_hukum,
                gaji_pokok, file_sk, link_pangkat, start_date, end_date, golru, no_urut
            ];

            const { rows } = await db.query(updateQuery, values);
            if (!rows.length) {
                return res.status(404).send({ RC: "06", message: "No record updated, record not found" });
            }

            return res.status(200).send({ RC: "00", message: "Update Pangkat Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Update Pangkat Error", error });
        }
    },
    async deletePangkat(req, res) {
        const { no_urut, nip_baru } = req.body;

        try {
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            const deleteQuery = `
      DELETE FROM bpjph.tr_pangkat
      WHERE nip = $1
        AND no_urut = $2
      RETURNING *;
    `;
            const { rows } = await db.query(deleteQuery, [nip, no_urut]);

            if (!rows.length) {
                return res.status(404).send({ RC: "06", message: "No record deleted, record not found" });
            }

            return res.status(200).send({ RC: "00", message: "Delete Pangkat Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Delete Pangkat Error", error });
        }
    },
    async getPangkatEdit(req, res) {
        const { nip_baru } = req.query;
        const readQuery = `SELECT a.*,c.ref_desc1,d.pangkat,d.gol_ruang,d.gol_pppk FROM bpjph.tr_pangkat_edit a 
        left join bpjph.tm_pegawai b on a.nip=b.nip
        left join bpjph.tm_ref c on c.ref_id=a.jenis_sk
        left join bpjph.tm_pangkat d on d.kode_pangkat=a.kode_pangkat
        WHERE b.nip_baru = $1`;
        try {
            const { rows, rowCount } = await db.query(readQuery, [nip_baru]);
            if (!rowCount) {
                return res.status(404).send({ 'RC': '05', 'message': 'Data Not Found' });
            }
            return res.status(200).send({ 'RC': '00', 'message': 'Success', 'data': rows });
        } catch (error) {
            return res.status(400).send({ 'RC': '99', 'message': 'Error', error });
        }
    },
    async postPangkatEdit(req, res) {
        const {
            nip_baru,
            kode_pangkat,
            no_sk,
            tgl_sk,
            tmt_sk,
            mk_tahun,
            mk_bulan,
            keterangan,
            user_add,
            time_add,
            user_update,
            time_update,
            jenis_sk,
            penandatangan,
            dasar_hukum,
            gaji_pokok,
            file_sk,
            status_edit,
            status_time,
            exec_edit,
            exec_time,
            exec_status,
            exec_alasan,
            exec_satker,
            link_pangkat,
            no_urut,
        } = req.body;

        try {
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: '05', message: 'NIP not found for provided nip_baru' });
            }
            const nip = nipResult.rows[0].nip;

            const execUrutQuery = `SELECT exec_urut FROM bpjph.tr_pangkat_edit WHERE nip = $1 order by exec_urut desc LIMIT 1`;
            const execUrutResult = await db.query(execUrutQuery, [nip]);

            let m_no_urut = 0;
            let exec_urut = 0;
            if (execUrutResult.rowCount) {
                exec_urut = parseInt(execUrutResult.rows[0].exec_urut) + 1;
            }

            if (no_urut) {
                m_no_urut = no_urut;
            }

            const insertQuery = `
            INSERT INTO bpjph.tr_pangkat_edit
            (nip, no_urut, kode_pangkat, no_sk, tgl_sk, tmt_sk, mk_tahun, mk_bulan, keterangan,
             user_add, time_add, user_update, time_update, jenis_sk, penandatangan, dasar_hukum,
             gaji_pokok, file_sk, status_edit, status_time, exec_edit, exec_time, exec_status, exec_urut,
             exec_alasan, exec_satker, link_pangkat)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9,
                    $10, $11, $12, $13, $14, $15, $16,
                    $17, $18, $19, $20, $21, $22, $23, $24,
                    $25, $26, $27)
            RETURNING *;
        `;

            const values = [
                nip,
                m_no_urut,
                kode_pangkat,
                no_sk,
                tgl_sk,
                tmt_sk,
                mk_tahun,
                mk_bulan,
                keterangan,
                user_add,
                time_add,
                user_update,
                time_update,
                jenis_sk,
                penandatangan,
                dasar_hukum,
                gaji_pokok,
                file_sk,
                status_edit,
                status_time,
                exec_edit,
                exec_time,
                exec_status,
                exec_urut,
                exec_alasan,
                exec_satker,
                link_pangkat
            ];

            const { rows } = await db.query(insertQuery, values);
            return res.status(201).send({ RC: '00', message: 'Insert Pangkat Success', data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: '99', message: 'Insert Pangkat Error', error });
        }
    },
    async putPangkatEdit(req, res) {
        const {
            exec_urut,
            nip_baru,
            kode_pangkat,
            no_sk,
            tgl_sk,
            tmt_sk,
            mk_tahun,
            mk_bulan,
            keterangan,
            user_update,
            time_update,
            jenis_sk,
            penandatangan,
            dasar_hukum,
            gaji_pokok,
            file_sk,
            status_edit,
            status_time,
            exec_edit,
            exec_time,
            exec_status,
            exec_alasan,
            exec_satker,
            link_pangkat
        } = req.body;

        try {
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: '05', message: 'NIP not found for provided nip_baru' });
            }
            const nip = nipResult.rows[0].nip;

            const updateQuery = `
            UPDATE bpjph.tr_pangkat_edit
            SET
                kode_pangkat = $2,
                no_sk = $3,
                tgl_sk = $4,
                tmt_sk = $5,
                mk_tahun = $6,
                mk_bulan = $7,
                keterangan = $8,
                user_update = $9,
                time_update = $10,
                jenis_sk = $11,
                penandatangan = $12,
                dasar_hukum = $13,
                gaji_pokok = $14,
                file_sk = $15,
                status_edit = $16,
                status_time = $17,
                exec_edit = $18,
                exec_time = $19,
                exec_status = $20,
                exec_alasan = $21,
                exec_satker = $22,
                link_pangkat = $23
            WHERE nip = $1
            AND exec_urut = $24
            RETURNING *;
        `;

            const values = [
                nip,
                kode_pangkat,
                no_sk,
                tgl_sk,
                tmt_sk,
                mk_tahun,
                mk_bulan,
                keterangan,
                user_update,
                time_update,
                jenis_sk,
                penandatangan,
                dasar_hukum,
                gaji_pokok,
                file_sk,
                status_edit,
                status_time,
                exec_edit,
                exec_time,
                exec_status,
                exec_alasan,
                exec_satker,
                link_pangkat,
                exec_urut
            ];

            const { rows } = await db.query(updateQuery, values);
            if (!rows.length) {
                return res.status(404).send({ RC: '06', message: 'No record updated, record not found' });
            }

            return res.status(200).send({ RC: '00', message: 'Update Pangkat Success', data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: '99', message: 'Update Pangkat Error', error });
        }
    },
    async deletePangkatEdit(req, res) {
        const { exec_urut, nip_baru } = req.body;

        try {
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: '05', message: 'NIP not found for provided nip_baru' });
            }
            const nip = nipResult.rows[0].nip;

            const deleteQuery = `
            DELETE FROM bpjph.tr_pangkat_edit
            WHERE nip = $1
            AND exec_urut = $2
            RETURNING *;
        `;
            const { rows } = await db.query(deleteQuery, [nip, exec_urut]);

            if (!rows.length) {
                return res.status(404).send({ RC: '06', message: 'No record deleted, record not found' });
            }

            return res.status(200).send({ RC: '00', message: 'Delete Pangkat Success', data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: '99', message: 'Delete Pangkat Error', error });
        }
    },

    async getJabatan(req, res) {
        const { nip_baru } = req.query;
        const readQuery = `select a.*,c.tampil_jabatan as jabatan_utama,d.tampil_jabatan as jabatan_tambahan,e.bidang_studi,f.jenis_pegawai ,
g.satuan_kerja, 
h.gol_ruang 
        from bpjph.tr_jabatan a
        left join bpjph.tm_pegawai b on a.nip=b.nip
left join bpjph.tm_jabatan_utama c on c.kode_jabatan =a.kode_jabatan_utama 
left join bpjph.tm_jabatan_tambahan d on d.kode_jabatan =a.kode_jabatan_tambahan 
left join bpjph.tm_bidang_studi e on e.kode_bidang_studi =a.kode_bidang_studi 
left join bpjph.tm_jenis_pegawai f on f.kode_jenis_pegawai =a.kode_jenis_pegawai 
left join bpjph.tm_satuan_kerja g on g.kode_satuan_kerja =a.kode_satuan_kerja 
left join bpjph.tm_pangkat h on h.kode_pangkat=a.kode_pangkat
        WHERE b.nip_baru = $1`;
        try {
            const { rows, rowCount } = await db.query(readQuery, [nip_baru]);
            if (!rowCount) {
                return res.status(404).send({ 'RC': '05', 'message': 'Data Not Found' });
            }
            return res.status(200).send({ 'RC': '00', 'message': 'Success', 'data': rows });
        } catch (error) {
            return res.status(400).send({ 'RC': '99', 'message': 'Error', error });
        }
    },
    async postJabatan(req, res) {
        const {
            nip_baru,
            kode_jabatan,
            kode_bidang_studi,
            kode_satuan_kerja,
            no_sk,
            tgl_sk,
            tmt_sk,
            kode_jabatan_2,
            kode_satuan_kerja_2,
            no_sk_2,
            tgl_sk_2,
            tmt_sk_2,
            keterangan,
            kode_pangkat,
            gaji_pokok,
            kode_jenis_pegawai,
            dpk_ke,
            pak,
            file_pak,
            file_sk,
            user_add,
            time_add,
            user_update,
            time_update,
            link_jabatan,
            link_pak,
            sd_sk,
            kode_jabatan_utama,
            kode_jabatan_tambahan
        } = req.body;

        try {
            // 1. Resolve nip
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            // 2. Get next no_urut
            const urutQuery = `
          SELECT no_urut
          FROM bpjph.tr_jabatan
          WHERE nip = $1
          ORDER BY no_urut DESC
          LIMIT 1
        `;
            const urutResult = await db.query(urutQuery, [nip]);

            let no_urut = 1;
            if (urutResult.rowCount) {
                no_urut = parseInt(urutResult.rows[0].no_urut) + 1;
            }

            // 3. Insert
            const insertQuery = `
          INSERT INTO bpjph.tr_jabatan
          (nip, no_urut, kode_jabatan, kode_bidang_studi, kode_satuan_kerja,
           no_sk, tgl_sk, tmt_sk, kode_jabatan_2, kode_satuan_kerja_2, no_sk_2, tgl_sk_2, tmt_sk_2,
           keterangan, kode_pangkat, gaji_pokok, kode_jenis_pegawai, dpk_ke, pak,
           file_pak, file_sk, user_add, time_add, user_update, time_update,
           link_jabatan, link_pak, sd_sk, kode_jabatan_utama, kode_jabatan_tambahan)
          VALUES ($1,$2,$3,$4,$5,
                  $6,$7,$8,$9,$10,$11,$12,$13,
                  $14,$15,$16,$17,$18,$19,
                  $20,$21,$22,$23,$24,$25,
                  $26,$27,$28,$29,$30)
          RETURNING *;
        `;

            const values = [
                nip, no_urut, kode_jabatan, kode_bidang_studi, kode_satuan_kerja,
                no_sk, tgl_sk, tmt_sk, kode_jabatan_2, kode_satuan_kerja_2, no_sk_2, tgl_sk_2, tmt_sk_2,
                keterangan, kode_pangkat, gaji_pokok, kode_jenis_pegawai, dpk_ke, pak,
                file_pak, file_sk, user_add, time_add, user_update, time_update,
                link_jabatan, link_pak, sd_sk, kode_jabatan_utama, kode_jabatan_tambahan
            ];

            const { rows } = await db.query(insertQuery, values);
            return res.status(201).send({ RC: "00", message: "Insert Jabatan Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Insert Jabatan Error", error });
        }
    },
    async putJabatan(req, res) {
        const {
            no_urut,
            nip_baru,
            kode_jabatan,
            kode_bidang_studi,
            kode_satuan_kerja,
            no_sk,
            tgl_sk,
            tmt_sk,
            kode_jabatan_2,
            kode_satuan_kerja_2,
            no_sk_2,
            tgl_sk_2,
            tmt_sk_2,
            keterangan,
            kode_pangkat,
            gaji_pokok,
            kode_jenis_pegawai,
            dpk_ke,
            pak,
            file_pak,
            file_sk,
            user_update,
            time_update,
            link_jabatan,
            link_pak,
            sd_sk,
            kode_jabatan_utama,
            kode_jabatan_tambahan
        } = req.body;

        try {
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            const updateQuery = `
          UPDATE bpjph.tr_jabatan
          SET
            kode_jabatan = $2,
            kode_bidang_studi = $3,
            kode_satuan_kerja = $4,
            no_sk = $5,
            tgl_sk = $6,
            tmt_sk = $7,
            kode_jabatan_2 = $8,
            kode_satuan_kerja_2 = $9,
            no_sk_2 = $10,
            tgl_sk_2 = $11,
            tmt_sk_2 = $12,
            keterangan = $13,
            kode_pangkat = $14,
            gaji_pokok = $15,
            kode_jenis_pegawai = $16,
            dpk_ke = $17,
            pak = $18,
            file_pak = $19,
            file_sk = $20,
            user_update = $21,
            time_update = $22,
            link_jabatan = $23,
            link_pak = $24,
            sd_sk = $25,
            kode_jabatan_utama = $26,
            kode_jabatan_tambahan = $27
          WHERE nip = $1
            AND no_urut = $28
          RETURNING *;
        `;

            const values = [
                nip,
                kode_jabatan, kode_bidang_studi, kode_satuan_kerja,
                no_sk, tgl_sk, tmt_sk, kode_jabatan_2, kode_satuan_kerja_2, no_sk_2, tgl_sk_2, tmt_sk_2,
                keterangan, kode_pangkat, gaji_pokok, kode_jenis_pegawai, dpk_ke, pak,
                file_pak, file_sk, user_update, time_update,
                link_jabatan, link_pak, sd_sk, kode_jabatan_utama, kode_jabatan_tambahan,
                no_urut
            ];

            const { rows } = await db.query(updateQuery, values);
            if (!rows.length) {
                return res.status(404).send({ RC: "06", message: "No record updated, record not found" });
            }

            return res.status(200).send({ RC: "00", message: "Update Jabatan Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Update Jabatan Error", error });
        }
    },
    async deleteJabatan(req, res) {
        const { no_urut, nip_baru } = req.body;

        try {
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            const deleteQuery = `
          DELETE FROM bpjph.tr_jabatan
          WHERE nip = $1
            AND no_urut = $2
          RETURNING *;
        `;
            const { rows } = await db.query(deleteQuery, [nip, no_urut]);

            if (!rows.length) {
                return res.status(404).send({ RC: "06", message: "No record deleted, record not found" });
            }

            return res.status(200).send({ RC: "00", message: "Delete Jabatan Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Delete Jabatan Error", error });
        }
    },
    async getJabatanEdit(req, res) {
        const { nip_baru } = req.query;
        const readQuery = `select a.*,c.tampil_jabatan as jabatan_utama,d.tampil_jabatan as jabatan_tambahan,e.bidang_studi,f.jenis_pegawai ,
        g.satuan_kerja,
h.gol_ruang  
        from bpjph.tr_jabatan_edit a
        left join bpjph.tm_pegawai b on a.nip=b.nip
        left join bpjph.tm_jabatan_utama c on c.kode_jabatan =a.kode_jabatan_utama 
        left join bpjph.tm_jabatan_tambahan d on d.kode_jabatan =a.kode_jabatan_tambahan 
        left join bpjph.tm_bidang_studi e on e.kode_bidang_studi =a.kode_bidang_studi 
        left join bpjph.tm_jenis_pegawai f on f.kode_jenis_pegawai =a.kode_jenis_pegawai 
        left join bpjph.tm_satuan_kerja g on g.kode_satuan_kerja =a.kode_satuan_kerja 
left join bpjph.tm_pangkat h on h.kode_pangkat=a.kode_pangkat
        WHERE b.nip_baru = $1`;
        try {
            const { rows, rowCount } = await db.query(readQuery, [nip_baru]);
            if (!rowCount) {
                return res.status(404).send({ 'RC': '05', 'message': 'Data Not Found' });
            }
            return res.status(200).send({ 'RC': '00', 'message': 'Success', 'data': rows });
        } catch (error) {
            return res.status(400).send({ 'RC': '99', 'message': 'Error', error });
        }
    },
    async postJabatanEdit(req, res) {
        const {
            nip_baru,
            kode_jabatan,
            kode_bidang_studi,
            kode_satuan_kerja,
            no_sk,
            tgl_sk,
            tmt_sk,
            kode_jabatan_2,
            kode_satuan_kerja_2,
            no_sk_2,
            tgl_sk_2,
            tmt_sk_2,
            keterangan,
            kode_pangkat,
            gaji_pokok,
            kode_jenis_pegawai,
            dpk_ke,
            pak,
            file_pak,
            file_sk,
            user_add,
            time_add,
            user_update,
            time_update,
            status_edit,
            status_time,
            exec_edit,
            exec_time,
            exec_status,
            exec_alasan,
            exec_satker,
            link_jabatan,
            link_pak,
            sd_sk,
            kode_jabatan_utama,
            kode_jabatan_tambahan,
            no_urut
        } = req.body;

        try {
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            const execUrutQuery = `SELECT exec_urut FROM bpjph.tr_jabatan_edit WHERE nip = $1 order by exec_urut desc LIMIT 1`;
            const execUrutResult = await db.query(execUrutQuery, [nip]);

            let m_no_urut = 0;
            let exec_urut = 0;
            if (execUrutResult.rowCount) {
                exec_urut = parseInt(execUrutResult.rows[0].exec_urut) + 1;
            }

            if (no_urut) {
                m_no_urut = no_urut;
            }

            const insertQuery = `
            INSERT INTO bpjph.tr_jabatan_edit
            (nip, no_urut, kode_jabatan, kode_bidang_studi, kode_satuan_kerja,
             no_sk, tgl_sk, tmt_sk, kode_jabatan_2, kode_satuan_kerja_2, no_sk_2, tgl_sk_2, tmt_sk_2,
             keterangan, kode_pangkat, gaji_pokok, kode_jenis_pegawai, dpk_ke, pak,
             file_pak, file_sk, user_add, time_add, user_update, time_update,
             status_edit, status_time, exec_edit, exec_time, exec_status, exec_urut,
             exec_alasan, exec_satker, link_jabatan, link_pak, sd_sk, kode_jabatan_utama, kode_jabatan_tambahan)
            VALUES ($1, $2, $3, $4, $5,
                    $6, $7, $8, $9, $10, $11, $12, $13,
                    $14, $15, $16, $17, $18, $19,
                    $20, $21, $22, $23, $24, $25,
                    $26, $27, $28, $29, $30, $31,
                    $32, $33, $34, $35, $36, $37, $38)
            RETURNING *;
        `;

            const values = [
                nip,
                m_no_urut,
                kode_jabatan,
                kode_bidang_studi,
                kode_satuan_kerja,
                no_sk,
                tgl_sk,
                tmt_sk,
                kode_jabatan_2,
                kode_satuan_kerja_2,
                no_sk_2,
                tgl_sk_2,
                tmt_sk_2,
                keterangan,
                kode_pangkat,
                gaji_pokok,
                kode_jenis_pegawai,
                dpk_ke,
                pak,
                file_pak,
                file_sk,
                user_add,
                time_add,
                user_update,
                time_update,
                status_edit,
                status_time,
                exec_edit,
                exec_time,
                exec_status,
                exec_urut,
                exec_alasan,
                exec_satker,
                link_jabatan,
                link_pak,
                sd_sk,
                kode_jabatan_utama,
                kode_jabatan_tambahan
            ];

            const { rows } = await db.query(insertQuery, values);
            return res.status(201).send({ RC: "00", message: "Insert Jabatan Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Insert Jabatan Error", error });
        }
    },
    async putJabatanEdit(req, res) {
        const {
            exec_urut,
            nip_baru,
            kode_jabatan,
            kode_bidang_studi,
            kode_satuan_kerja,
            no_sk,
            tgl_sk,
            tmt_sk,
            kode_jabatan_2,
            kode_satuan_kerja_2,
            no_sk_2,
            tgl_sk_2,
            tmt_sk_2,
            keterangan,
            kode_pangkat,
            gaji_pokok,
            kode_jenis_pegawai,
            dpk_ke,
            pak,
            file_pak,
            file_sk,
            user_update,
            time_update,
            status_edit,
            status_time,
            exec_edit,
            exec_time,
            exec_status,
            exec_alasan,
            exec_satker,
            link_jabatan,
            link_pak,
            sd_sk,
            kode_jabatan_utama,
            kode_jabatan_tambahan
        } = req.body;

        try {
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            const updateQuery = `
            UPDATE bpjph.tr_jabatan_edit
            SET
                kode_jabatan = $2,
                kode_bidang_studi = $3,
                kode_satuan_kerja = $4,
                no_sk = $5,
                tgl_sk = $6,
                tmt_sk = $7,
                kode_jabatan_2 = $8,
                kode_satuan_kerja_2 = $9,
                no_sk_2 = $10,
                tgl_sk_2 = $11,
                tmt_sk_2 = $12,
                keterangan = $13,
                kode_pangkat = $14,
                gaji_pokok = $15,
                kode_jenis_pegawai = $16,
                dpk_ke = $17,
                pak = $18,
                file_pak = $19,
                file_sk = $20,
                user_update = $21,
                time_update = $22,
                status_edit = $23,
                status_time = $24,
                exec_edit = $25,
                exec_time = $26,
                exec_status = $27,
                exec_alasan = $28,
                exec_satker = $29,
                link_jabatan = $30,
                link_pak = $31,
                sd_sk = $32,
                kode_jabatan_utama = $33,
                kode_jabatan_tambahan = $34
            WHERE nip = $1
            AND exec_urut = $35
            RETURNING *;
        `;

            const values = [
                nip,
                kode_jabatan,
                kode_bidang_studi,
                kode_satuan_kerja,
                no_sk,
                tgl_sk,
                tmt_sk,
                kode_jabatan_2,
                kode_satuan_kerja_2,
                no_sk_2,
                tgl_sk_2,
                tmt_sk_2,
                keterangan,
                kode_pangkat,
                gaji_pokok,
                kode_jenis_pegawai,
                dpk_ke,
                pak,
                file_pak,
                file_sk,
                user_update,
                time_update,
                status_edit,
                status_time,
                exec_edit,
                exec_time,
                exec_status,
                exec_alasan,
                exec_satker,
                link_jabatan,
                link_pak,
                sd_sk,
                kode_jabatan_utama,
                kode_jabatan_tambahan,
                exec_urut
            ];

            const { rows } = await db.query(updateQuery, values);
            if (!rows.length) {
                return res.status(404).send({ RC: "06", message: "No record updated, record not found" });
            }

            return res.status(200).send({ RC: "00", message: "Update Jabatan Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Update Jabatan Error", error });
        }
    },
    async deleteJabatanEdit(req, res) {
        const { exec_urut, nip_baru } = req.body;

        try {
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            const deleteQuery = `
            DELETE FROM bpjph.tr_jabatan_edit
            WHERE nip = $1
            AND exec_urut = $2
            RETURNING *;
        `;
            const { rows } = await db.query(deleteQuery, [nip, exec_urut]);

            if (!rows.length) {
                return res.status(404).send({ RC: "06", message: "No record deleted, record not found" });
            }

            return res.status(200).send({ RC: "00", message: "Delete Jabatan Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Delete Jabatan Error", error });
        }
    },

    async getPak(req, res) {
        const { nip_baru } = req.query;

        const readQuery = `
      SELECT a.*, b.nip_baru, c.tampil_jabatan, d.gol_ruang
      FROM bpjph.tr_pak a
      LEFT JOIN bpjph.tm_pegawai b ON a.nip = b.nip
      LEFT JOIN bpjph.tm_jabatan_utama c ON c.kode_jabatan = a.kode_jabatan
      LEFT JOIN bpjph.tm_pangkat d ON d.kode_pangkat = a.kode_pangkat
      WHERE b.nip_baru = $1
    `;

        try {
            const { rows, rowCount } = await db.query(readQuery, [nip_baru]);
            if (!rowCount) {
                return res.status(404).send({ RC: "05", message: "Data Not Found" });
            }
            return res.status(200).send({ RC: "00", message: "Success", data: rows });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Error", error });
        }
    },
    async postPak(req, res) {
        const {
            nip_baru,
            kode_jabatan,
            angka_kredit,
            no_sk,
            tgl_sk,
            link_pak,
            user_add,
            time_add,
            kode_pangkat,
            file_sk
        } = req.body;

        try {
            // 1. Resolve nip
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            // 2. Get next no_urut
            const urutQuery = `
      SELECT no_urut
      FROM bpjph.tr_pak
      WHERE nip = $1
      ORDER BY no_urut DESC
      LIMIT 1
    `;
            const urutResult = await db.query(urutQuery, [nip]);

            let no_urut = 1;
            if (urutResult.rowCount) {
                no_urut = parseInt(urutResult.rows[0].no_urut) + 1;
            }

            // 3. Insert
            const insertQuery = `
      INSERT INTO bpjph.tr_pak
      (nip, no_urut, kode_jabatan, angka_kredit, no_sk, tgl_sk, link_pak,
       user_add, time_add, kode_pangkat, file_sk)
      VALUES ($1,$2,$3,$4,$5,$6,$7,
              $8,$9,$10,$11)
      RETURNING *;
    `;

            const values = [
                nip, no_urut, kode_jabatan, angka_kredit, no_sk, tgl_sk, link_pak,
                user_add, time_add, kode_pangkat, file_sk
            ];

            const { rows } = await db.query(insertQuery, values);
            return res.status(201).send({ RC: "00", message: "Insert PAK Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Insert PAK Error", error });
        }
    },
    async putPak(req, res) {
        const {
            no_urut,
            nip_baru,
            kode_jabatan,
            angka_kredit,
            no_sk,
            tgl_sk,
            link_pak,
            user_update,
            time_update,
            kode_pangkat,
            file_sk
        } = req.body;

        try {
            // Resolve nip
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            const updateQuery = `
      UPDATE bpjph.tr_pak
      SET
        kode_jabatan = $2,
        angka_kredit = $3,
        no_sk = $4,
        tgl_sk = $5,
        link_pak = $6,
        user_update = $7,
        time_update = $8,
        kode_pangkat = $9,
        file_sk = $10
      WHERE nip = $1
        AND no_urut = $11
      RETURNING *;
    `;

            const values = [
                nip, kode_jabatan, angka_kredit, no_sk, tgl_sk, link_pak,
                user_update, time_update, kode_pangkat, file_sk, no_urut
            ];

            const { rows } = await db.query(updateQuery, values);
            if (!rows.length) {
                return res.status(404).send({ RC: "06", message: "No record updated, record not found" });
            }

            return res.status(200).send({ RC: "00", message: "Update PAK Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Update PAK Error", error });
        }
    },
    async deletePak(req, res) {
        const { no_urut, nip_baru } = req.body;

        try {
            // Resolve nip
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            const deleteQuery = `
      DELETE FROM bpjph.tr_pak
      WHERE nip = $1
        AND no_urut = $2
      RETURNING *;
    `;
            const { rows } = await db.query(deleteQuery, [nip, no_urut]);

            if (!rows.length) {
                return res.status(404).send({ RC: "06", message: "No record deleted, record not found" });
            }

            return res.status(200).send({ RC: "00", message: "Delete PAK Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Delete PAK Error", error });
        }
    },
    async getPakEdit(req, res) {
        const { nip_baru } = req.query;

        const readQuery = `
      SELECT a.*, b.nip_baru, c.tampil_jabatan, d.gol_ruang
      FROM bpjph.tr_pak_edit a
      LEFT JOIN bpjph.tm_pegawai b ON a.nip = b.nip
      LEFT JOIN bpjph.tm_jabatan_utama c ON c.kode_jabatan = a.kode_jabatan
      LEFT JOIN bpjph.tm_pangkat d ON d.kode_pangkat = a.kode_pangkat
      WHERE b.nip_baru = $1
    `;

        try {
            const { rows, rowCount } = await db.query(readQuery, [nip_baru]);
            if (!rowCount) {
                return res.status(404).send({ RC: "05", message: "Data Not Found" });
            }
            return res.status(200).send({ RC: "00", message: "Success", data: rows });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Error", error });
        }
    },
    async postPakEdit(req, res) {
        const {
            nip_baru,
            kode_jabatan,
            angka_kredit,
            no_sk,
            tgl_sk,
            link_pak,
            user_add,
            time_add,
            status_edit,
            status_time,
            exec_edit,
            exec_time,
            exec_status,
            exec_alasan,
            exec_satker,
            kode_pangkat,
            file_sk,
            no_urut,
        } = req.body;

        try {
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            const execUrutQuery = `SELECT exec_urut FROM bpjph.tr_pak_edit WHERE nip = $1 order by exec_urut desc LIMIT 1`;
            const execUrutResult = await db.query(execUrutQuery, [nip]);

            let m_no_urut = 0;
            let exec_urut = 0;
            if (execUrutResult.rowCount) {
                exec_urut = parseInt(execUrutResult.rows[0].exec_urut) + 1;
            }

            if (no_urut) {
                m_no_urut = no_urut;
            }

            const insertQuery = `
            INSERT INTO bpjph.tr_pak_edit
            (nip, no_urut, kode_jabatan, angka_kredit, no_sk, tgl_sk, link_pak,
             user_add, time_add, status_edit, status_time, exec_edit, exec_time,
             exec_status, exec_urut, exec_alasan, exec_satker, kode_pangkat, file_sk)
            VALUES ($1, $2, $3, $4, $5, $6, $7,
                    $8, $9, $10, $11, $12, $13,
                    $14, $15, $16, $17, $18, $19)
            RETURNING *;
        `;

            const values = [
                nip,
                m_no_urut,
                kode_jabatan,
                angka_kredit,
                no_sk,
                tgl_sk,
                link_pak,
                user_add,
                time_add,
                status_edit,
                status_time,
                exec_edit,
                exec_time,
                exec_status,
                exec_urut,
                exec_alasan,
                exec_satker,
                kode_pangkat,
                file_sk
            ];

            const { rows } = await db.query(insertQuery, values);
            return res.status(201).send({ RC: "00", message: "Insert PAK Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Insert PAK Error", error });
        }
    },
    async putPakEdit(req, res) {
        const {
            exec_urut,
            nip_baru,
            kode_jabatan,
            angka_kredit,
            no_sk,
            tgl_sk,
            link_pak,
            user_update,
            time_update,
            status_edit,
            status_time,
            exec_edit,
            exec_time,
            exec_status,
            exec_alasan,
            exec_satker,
            kode_pangkat,
            file_sk
        } = req.body;

        try {
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            const updateQuery = `
            UPDATE bpjph.tr_pak_edit
            SET
                kode_jabatan = $2,
                angka_kredit = $3,
                no_sk = $4,
                tgl_sk = $5,
                link_pak = $6,
                user_update = $7,
                time_update = $8,
                status_edit = $9,
                status_time = $10,
                exec_edit = $11,
                exec_time = $12,
                exec_status = $13,
                exec_alasan = $14,
                exec_satker = $15,
                kode_pangkat = $16,
                file_sk = $17
            WHERE nip = $1
            AND exec_urut = $18
            RETURNING *;
        `;

            const values = [
                nip,
                kode_jabatan,
                angka_kredit,
                no_sk,
                tgl_sk,
                link_pak,
                user_update,
                time_update,
                status_edit,
                status_time,
                exec_edit,
                exec_time,
                exec_status,
                exec_alasan,
                exec_satker,
                kode_pangkat,
                file_sk,
                exec_urut
            ];

            const { rows } = await db.query(updateQuery, values);
            if (!rows.length) {
                return res.status(404).send({ RC: "06", message: "No record updated, record not found" });
            }

            return res.status(200).send({ RC: "00", message: "Update PAK Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Update PAK Error", error });
        }
    },
    async deletePakEdit(req, res) {
        const { exec_urut, nip_baru } = req.body;

        try {
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            const deleteQuery = `
            DELETE FROM bpjph.tr_pak_edit
            WHERE nip = $1
            AND exec_urut = $2
            RETURNING *;
        `;
            const { rows } = await db.query(deleteQuery, [nip, exec_urut]);

            if (!rows.length) {
                return res.status(404).send({ RC: "06", message: "No record deleted, record not found" });
            }

            return res.status(200).send({ RC: "00", message: "Delete PAK Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Delete PAK Error", error });
        }
    },

    async getPenghargaan(req, res) {
        const { nip_baru } = req.query;

        const readQuery = `
        select a.*,c.ref_desc1 from bpjph.tr_penghargaan a
        left join bpjph.tm_pegawai b on a.nip=b.nip
        left join bpjph.tm_ref c on a.jenis_penghargaan=c.ref_id
      WHERE b.nip_baru = $1
    `;

        try {
            const { rows, rowCount } = await db.query(readQuery, [nip_baru]);
            if (!rowCount) {
                return res.status(404).send({ RC: "05", message: "Data Not Found" });
            }
            return res.status(200).send({ RC: "00", message: "Success", data: rows });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Error", error });
        }
    },
    async postPenghargaan(req, res) {
        const {
            nip_baru,
            tahun,
            jenis_penghargaan,
            penghargaan_lain,
            pemberi,
            user_add,
            time_add,
            user_update,
            time_update,
            link_penghargaan,
            file_sk
        } = req.body;

        try {
            // Resolve nip
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            // Get next no_urut
            const urutQuery = `
            SELECT no_urut
            FROM bpjph.tr_penghargaan
            WHERE nip = $1
            ORDER BY no_urut DESC
            LIMIT 1
        `;
            const urutResult = await db.query(urutQuery, [nip]);

            let no_urut = 1;
            if (urutResult.rowCount) {
                no_urut = parseInt(urutResult.rows[0].no_urut) + 1;
            }

            const insertQuery = `
            INSERT INTO bpjph.tr_penghargaan
            (nip, no_urut, tahun, jenis_penghargaan, penghargaan_lain, pemberi,
             user_add, time_add, user_update, time_update, file_sk, link_penghargaan)
            VALUES ($1,$2,$3,$4,$5,$6,
                    $7,$8,$9,$10,$11,$12)
            RETURNING *;
        `;

            const values = [
                nip, no_urut, tahun, jenis_penghargaan, penghargaan_lain, pemberi,
                user_add, time_add, user_update, time_update, file_sk, link_penghargaan
            ];

            const { rows } = await db.query(insertQuery, values);
            return res.status(201).send({ RC: "00", message: "Insert Penghargaan Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Insert Penghargaan Error", error });
        }
    },
    async putPenghargaan(req, res) {
        const {
            no_urut,
            nip_baru,
            tahun,
            jenis_penghargaan,
            penghargaan_lain,
            pemberi,
            user_update,
            time_update,
            link_penghargaan,
            file_sk
        } = req.body;

        try {
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            const updateQuery = `
            UPDATE bpjph.tr_penghargaan
            SET
                tahun = $2,
                jenis_penghargaan = $3,
                penghargaan_lain = $4,
                pemberi = $5,
                user_update = $6,
                time_update = $7,
                link_penghargaan = $8,
                file_sk = $9
            WHERE nip = $1
              AND no_urut = $10
            RETURNING *;
        `;

            const values = [
                nip, tahun, jenis_penghargaan, penghargaan_lain, pemberi,
                user_update, time_update, link_penghargaan, file_sk, no_urut
            ];

            const { rows } = await db.query(updateQuery, values);
            if (!rows.length) {
                return res.status(404).send({ RC: "06", message: "No record updated, record not found" });
            }

            return res.status(200).send({ RC: "00", message: "Update Penghargaan Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Update Penghargaan Error", error });
        }
    },
    async deletePenghargaan(req, res) {
        const { no_urut, nip_baru } = req.body;

        try {
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            const deleteQuery = `
            DELETE FROM bpjph.tr_penghargaan
            WHERE nip = $1
              AND no_urut = $2
            RETURNING *;
        `;
            const { rows } = await db.query(deleteQuery, [nip, no_urut]);

            if (!rows.length) {
                return res.status(404).send({ RC: "06", message: "No record deleted, record not found" });
            }

            return res.status(200).send({ RC: "00", message: "Delete Penghargaan Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Delete Penghargaan Error", error });
        }
    },
    async getPenghargaanEdit(req, res) {
        const { nip_baru } = req.query;

        const readQuery = `
        select a.*,c.ref_desc1 from bpjph.tr_penghargaan_edit a
        left join bpjph.tm_pegawai b on a.nip=b.nip
        left join bpjph.tm_ref c on a.jenis_penghargaan=c.ref_id
      WHERE b.nip_baru = $1
    `;

        try {
            const { rows, rowCount } = await db.query(readQuery, [nip_baru]);
            if (!rowCount) {
                return res.status(404).send({ RC: "05", message: "Data Not Found" });
            }
            return res.status(200).send({ RC: "00", message: "Success", data: rows });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Error", error });
        }
    },
    async postPenghargaanEdit(req, res) {
        const {
            nip_baru,
            tahun,
            jenis_penghargaan,
            penghargaan_lain,
            pemberi,
            user_add,
            time_add,
            status_edit,
            status_time,
            exec_edit,
            exec_time,
            exec_status,
            exec_alasan,
            exec_satker,
            link_penghargaan,
            file_sk,
            no_urut
        } = req.body;

        try {
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            const execUrutQuery = `SELECT exec_urut FROM bpjph.tr_penghargaan_edit WHERE nip = $1 order by exec_urut desc LIMIT 1`;
            const execUrutResult = await db.query(execUrutQuery, [nip]);

            let m_no_urut = 0;
            let exec_urut = 0;
            if (execUrutResult.rowCount) {
                exec_urut = parseInt(execUrutResult.rows[0].exec_urut) + 1;
            }

            if (no_urut) {
                m_no_urut = no_urut;
            }

            const insertQuery = `
            INSERT INTO bpjph.tr_penghargaan_edit
            (nip, no_urut, tahun, jenis_penghargaan, penghargaan_lain, pemberi,
             user_add, time_add, status_edit, status_time,
             exec_edit, exec_time, exec_status, exec_urut, exec_alasan, exec_satker,
             link_penghargaan, file_sk, user_update, time_update)
            VALUES ($1, $2, $3, $4, $5, $6,
                    $7, $8, $9, $10,
                    $11, $12, $13, $14, $15, $16,
                    $17, $18, $7, $8)
            RETURNING *;
        `;

            const values = [
                nip,
                m_no_urut,
                tahun,
                jenis_penghargaan,
                penghargaan_lain,
                pemberi,
                user_add,
                time_add,
                status_edit,
                status_time,
                exec_edit,
                exec_time,
                exec_status,
                exec_urut,
                exec_alasan,
                exec_satker,
                link_penghargaan,
                file_sk
            ];

            const { rows } = await db.query(insertQuery, values);
            return res.status(201).send({ RC: "00", message: "Insert Penghargaan Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Insert Penghargaan Error", error });
        }
    },
    async putPenghargaanEdit(req, res) {
        const {
            exec_urut,
            nip_baru,
            tahun,
            jenis_penghargaan,
            penghargaan_lain,
            pemberi,
            user_update,
            time_update,
            status_edit,
            status_time,
            exec_edit,
            exec_time,
            exec_status,
            exec_alasan,
            exec_satker,
            link_penghargaan,
            file_sk
        } = req.body;

        try {
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            const updateQuery = `
            UPDATE bpjph.tr_penghargaan_edit
            SET
                tahun = $2,
                jenis_penghargaan = $3,
                penghargaan_lain = $4,
                pemberi = $5,
                user_update = $6,
                time_update = $7,
                status_edit = $8,
                status_time = $9,
                exec_edit = $10,
                exec_time = $11,
                exec_status = $12,
                exec_alasan = $13,
                exec_satker = $14,
                link_penghargaan = $15,
                file_sk = $16
            WHERE nip = $1
            AND exec_urut = $17
            RETURNING *;
        `;

            const values = [
                nip,
                tahun,
                jenis_penghargaan,
                penghargaan_lain,
                pemberi,
                user_update,
                time_update,
                status_edit,
                status_time,
                exec_edit,
                exec_time,
                exec_status,
                exec_alasan,
                exec_satker,
                link_penghargaan,
                file_sk,
                exec_urut
            ];

            const { rows } = await db.query(updateQuery, values);
            if (!rows.length) {
                return res.status(404).send({ RC: "06", message: "No record updated, record not found" });
            }

            return res.status(200).send({ RC: "00", message: "Update Penghargaan Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Update Penghargaan Error", error });
        }
    },
    async deletePenghargaanEdit(req, res) {
        const { exec_urut, nip_baru } = req.body;

        try {
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            const deleteQuery = `
            DELETE FROM bpjph.tr_penghargaan_edit
            WHERE nip = $1
            AND exec_urut = $2
            RETURNING *;
        `;
            const { rows } = await db.query(deleteQuery, [nip, exec_urut]);

            if (!rows.length) {
                return res.status(404).send({ RC: "06", message: "No record deleted, record not found" });
            }

            return res.status(200).send({ RC: "00", message: "Delete Penghargaan Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Delete Penghargaan Error", error });
        }
    },

    async getPengalaman(req, res) {
        const { nip_baru } = req.query;

        const readQuery = `
        select a.*,c.bidang_studi,d.jenjang_pendidikan as tampil_jenjang_pendidikan
        from bpjph.tr_pengalaman a
        left join bpjph.tm_pegawai b on a.nip=b.nip
        left join bpjph.tm_bidang_studi c on a.mata_kuliah=c.kode_bidang_studi
        left join bpjph.tm_jenjang_pendidikan d on a.jenjang_pendidikan=d.kode_jenjang_pendidikan
      WHERE b.nip_baru = $1
    `;

        try {
            const { rows, rowCount } = await db.query(readQuery, [nip_baru]);
            if (!rowCount) {
                return res.status(404).send({ RC: "05", message: "Data Not Found" });
            }
            return res.status(200).send({ RC: "00", message: "Success", data: rows });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Error", error });
        }
    },
    async postPengalaman(req, res) {
        const {
            nip_baru,
            tahun,
            judul,
            keterangan,
            mata_kuliah,
            negara,
            jenjang_pendidikan,
            instansi,
            tahun_akhir,
            lamanya,
            tipe_pengalaman,
            user_add,
            time_add,
            file_pengalaman,
            link_pengalaman
        } = req.body;

        try {
            // Resolve nip
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            // Get next no_urut
            const urutQuery = `
            SELECT no_urut
            FROM bpjph.tr_pengalaman
            WHERE nip = $1
            ORDER BY no_urut DESC
            LIMIT 1
        `;
            const urutResult = await db.query(urutQuery, [nip]);

            let no_urut = 1;
            if (urutResult.rowCount) {
                no_urut = parseInt(urutResult.rows[0].no_urut) + 1;
            }

            const insertQuery = `
            INSERT INTO bpjph.tr_pengalaman
            (nip, no_urut, tahun, judul, keterangan, mata_kuliah, negara, jenjang_pendidikan,
             instansi, tahun_akhir, lamanya, tipe_pengalaman,
             user_add, time_add, user_update, time_update,
             file_pengalaman, link_pengalaman)
            VALUES ($1,$2,$3,$4,$5,$6,$7,$8,
                    $9,$10,$11,$12,
                    $13,$14,$13,$14,
                    $15,$16)
            RETURNING *;
        `;

            const values = [
                nip, no_urut, tahun, judul, keterangan, mata_kuliah, negara, jenjang_pendidikan,
                instansi, tahun_akhir, lamanya, tipe_pengalaman,
                user_add, time_add,
                file_pengalaman, link_pengalaman
            ];

            const { rows } = await db.query(insertQuery, values);
            return res.status(201).send({ RC: "00", message: "Insert Pengalaman Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Insert Pengalaman Error", error });
        }
    },
    async putPengalaman(req, res) {
        const {
            no_urut,
            nip_baru,
            tahun,
            judul,
            keterangan,
            mata_kuliah,
            negara,
            jenjang_pendidikan,
            instansi,
            tahun_akhir,
            lamanya,
            tipe_pengalaman,
            user_update,
            time_update,
            file_pengalaman,
            link_pengalaman
        } = req.body;

        try {
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            const updateQuery = `
            UPDATE bpjph.tr_pengalaman
            SET
                tahun = $2,
                judul = $3,
                keterangan = $4,
                mata_kuliah = $5,
                negara = $6,
                jenjang_pendidikan = $7,
                instansi = $8,
                tahun_akhir = $9,
                lamanya = $10,
                tipe_pengalaman = $11,
                user_update = $12,
                time_update = $13,
                file_pengalaman = $14,
                link_pengalaman = $15
            WHERE nip = $1
              AND no_urut = $16
            RETURNING *;
        `;

            const values = [
                nip, tahun, judul, keterangan, mata_kuliah, negara, jenjang_pendidikan,
                instansi, tahun_akhir, lamanya, tipe_pengalaman,
                user_update, time_update, file_pengalaman, link_pengalaman, no_urut
            ];

            const { rows } = await db.query(updateQuery, values);
            if (!rows.length) {
                return res.status(404).send({ RC: "06", message: "No record updated, record not found" });
            }

            return res.status(200).send({ RC: "00", message: "Update Pengalaman Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Update Pengalaman Error", error });
        }
    },
    async deletePengalaman(req, res) {
        const { no_urut, nip_baru } = req.body;

        try {
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            const deleteQuery = `
            DELETE FROM bpjph.tr_pengalaman
            WHERE nip = $1
              AND no_urut = $2
            RETURNING *;
        `;
            const { rows } = await db.query(deleteQuery, [nip, no_urut]);

            if (!rows.length) {
                return res.status(404).send({ RC: "06", message: "No record deleted, record not found" });
            }

            return res.status(200).send({ RC: "00", message: "Delete Pengalaman Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Delete Pengalaman Error", error });
        }
    },
    async getPengalamanEdit(req, res) {
        const { nip_baru } = req.query;

        const readQuery = `
        select a.*,c.bidang_studi,d.jenjang_pendidikan as tampil_jenjang_pendidikan
        from bpjph.tr_pengalaman_edit a
        left join bpjph.tm_pegawai b on a.nip=b.nip
        left join bpjph.tm_bidang_studi c on a.mata_kuliah=c.kode_bidang_studi
        left join bpjph.tm_jenjang_pendidikan d on a.jenjang_pendidikan=d.kode_jenjang_pendidikan
      WHERE b.nip_baru = $1
    `;

        try {
            const { rows, rowCount } = await db.query(readQuery, [nip_baru]);
            if (!rowCount) {
                return res.status(404).send({ RC: "05", message: "Data Not Found" });
            }
            return res.status(200).send({ RC: "00", message: "Success", data: rows });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Error", error });
        }
    },
    async postPengalamanEdit(req, res) {
        const {
            nip_baru,
            tahun,
            judul,
            keterangan,
            mata_kuliah,
            negara,
            jenjang_pendidikan,
            instansi,
            tahun_akhir,
            lamanya,
            tipe_pengalaman,
            user_add,
            time_add,
            status_edit,
            status_time,
            exec_edit,
            exec_time,
            exec_status,
            exec_alasan,
            exec_satker,
            file_pengalaman,
            link_pengalaman,
            no_urut
        } = req.body;

        try {
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            const execUrutQuery = `SELECT exec_urut FROM bpjph.tr_pengalaman_edit WHERE nip = $1 order by exec_urut desc LIMIT 1`;
            const execUrutResult = await db.query(execUrutQuery, [nip]);

            let m_no_urut = 0;
            let exec_urut = 0;
            if (execUrutResult.rowCount) {
                exec_urut = parseInt(execUrutResult.rows[0].exec_urut) + 1;
            }

            if (no_urut) {
                m_no_urut = no_urut;
            }

            const insertQuery = `
            INSERT INTO bpjph.tr_pengalaman_edit
            (nip, no_urut, tahun, judul, keterangan, mata_kuliah, negara, jenjang_pendidikan,
             instansi, tahun_akhir, lamanya, tipe_pengalaman,
             user_add, time_add, user_update, time_update,
             status_edit, status_time, exec_edit, exec_time,
             exec_status, exec_urut, exec_alasan, exec_satker,
             file_pengalaman, link_pengalaman)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8,
                    $9, $10, $11, $12,
                    $13, $14, $13, $14,
                    $15, $16, $17, $18,
                    $19, $20, $21, $22,
                    $23, $24)
            RETURNING *;
        `;

            const values = [
                nip,
                m_no_urut,
                tahun,
                judul,
                keterangan,
                mata_kuliah,
                negara,
                jenjang_pendidikan,
                instansi,
                tahun_akhir,
                lamanya,
                tipe_pengalaman,
                user_add,
                time_add,
                status_edit,
                status_time,
                exec_edit,
                exec_time,
                exec_status,
                exec_urut,
                exec_alasan,
                exec_satker,
                file_pengalaman,
                link_pengalaman
            ];

            const { rows } = await db.query(insertQuery, values);
            return res.status(201).send({ RC: "00", message: "Insert Pengalaman Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Insert Pengalaman Error", error });
        }
    },
    async putPengalamanEdit(req, res) {
        const {
            exec_urut,
            nip_baru,
            tahun,
            judul,
            keterangan,
            mata_kuliah,
            negara,
            jenjang_pendidikan,
            instansi,
            tahun_akhir,
            lamanya,
            tipe_pengalaman,
            user_update,
            time_update,
            status_edit,
            status_time,
            exec_edit,
            exec_time,
            exec_status,
            exec_alasan,
            exec_satker,
            file_pengalaman,
            link_pengalaman
        } = req.body;

        try {
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            const updateQuery = `
            UPDATE bpjph.tr_pengalaman_edit
            SET
                tahun = $2,
                judul = $3,
                keterangan = $4,
                mata_kuliah = $5,
                negara = $6,
                jenjang_pendidikan = $7,
                instansi = $8,
                tahun_akhir = $9,
                lamanya = $10,
                tipe_pengalaman = $11,
                user_update = $12,
                time_update = $13,
                status_edit = $14,
                status_time = $15,
                exec_edit = $16,
                exec_time = $17,
                exec_status = $18,
                exec_alasan = $19,
                exec_satker = $20,
                file_pengalaman = $21,
                link_pengalaman = $22
            WHERE nip = $1
            AND exec_urut = $23
            RETURNING *;
        `;

            const values = [
                nip,
                tahun,
                judul,
                keterangan,
                mata_kuliah,
                negara,
                jenjang_pendidikan,
                instansi,
                tahun_akhir,
                lamanya,
                tipe_pengalaman,
                user_update,
                time_update,
                status_edit,
                status_time,
                exec_edit,
                exec_time,
                exec_status,
                exec_alasan,
                exec_satker,
                file_pengalaman,
                link_pengalaman,
                exec_urut
            ];

            const { rows } = await db.query(updateQuery, values);
            if (!rows.length) {
                return res.status(404).send({ RC: "06", message: "No record updated, record not found" });
            }

            return res.status(200).send({ RC: "00", message: "Update Pengalaman Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Update Pengalaman Error", error });
        }
    },
    async deletePengalamanEdit(req, res) {
        const { exec_urut, nip_baru } = req.body;

        try {
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            const deleteQuery = `
            DELETE FROM bpjph.tr_pengalaman_edit
            WHERE nip = $1
            AND exec_urut = $2
            RETURNING *;
        `;
            const { rows } = await db.query(deleteQuery, [nip, exec_urut]);

            if (!rows.length) {
                return res.status(404).send({ RC: "06", message: "No record deleted, record not found" });
            }

            return res.status(200).send({ RC: "00", message: "Delete Pengalaman Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Delete Pengalaman Error", error });
        }
    },

    async getOrganisasi(req, res) {
        const { nip_baru } = req.query;

        const readQuery = `
        select a.* from bpjph.tr_organisasi a
        left join bpjph.tm_pegawai b on a.nip=b.nip
      WHERE b.nip_baru = $1
    `;

        try {
            const { rows, rowCount } = await db.query(readQuery, [nip_baru]);
            if (!rowCount) {
                return res.status(404).send({ RC: "05", message: "Data Not Found" });
            }
            return res.status(200).send({ RC: "00", message: "Success", data: rows });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Error", error });
        }
    },
    async postOrganisasi(req, res) {
        const {
            nip_baru,
            nama_organ,
            kedudukan,
            tahun_awal,
            tahun_akhir,
            tempat,
            nama_pimpinan,
            tipe_organ,
            user_add,
            time_add,
            file_org,
            link_organisasi
        } = req.body;

        try {
            // Resolve nip
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            // Get next no_urut
            const urutQuery = `
      SELECT no_urut
      FROM bpjph.tr_organisasi
      WHERE nip = $1
      ORDER BY no_urut DESC
      LIMIT 1
    `;
            const urutResult = await db.query(urutQuery, [nip]);

            let no_urut = 1;
            if (urutResult.rowCount) {
                no_urut = parseInt(urutResult.rows[0].no_urut) + 1;
            }

            const insertQuery = `
      INSERT INTO bpjph.tr_organisasi
      (nip, no_urut, nama_organ, kedudukan, tahun_awal, tahun_akhir,
       tempat, nama_pimpinan, tipe_organ, user_add, time_add,
       user_update, time_update, file_org, link_organisasi)
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$10,$11,$12,$13)
      RETURNING *;
    `;

            const values = [
                nip, no_urut, nama_organ, kedudukan, tahun_awal, tahun_akhir,
                tempat, nama_pimpinan, tipe_organ, user_add, time_add,
                file_org, link_organisasi
            ];

            const { rows } = await db.query(insertQuery, values);
            return res.status(201).send({ RC: "00", message: "Insert Organisasi Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Insert Organisasi Error", error });
        }
    },
    async putOrganisasi(req, res) {
        const {
            no_urut,
            nip_baru,
            nama_organ,
            kedudukan,
            tahun_awal,
            tahun_akhir,
            tempat,
            nama_pimpinan,
            tipe_organ,
            user_update,
            time_update,
            file_org,
            link_organisasi
        } = req.body;

        try {
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            const updateQuery = `
      UPDATE bpjph.tr_organisasi
      SET
        nama_organ = $2,
        kedudukan = $3,
        tahun_awal = $4,
        tahun_akhir = $5,
        tempat = $6,
        nama_pimpinan = $7,
        tipe_organ = $8,
        user_update = $9,
        time_update = $10,
        file_org = $11,
        link_organisasi = $12
      WHERE nip = $1
        AND no_urut = $13
      RETURNING *;
    `;

            const values = [
                nip, nama_organ, kedudukan, tahun_awal, tahun_akhir, tempat,
                nama_pimpinan, tipe_organ, user_update, time_update,
                file_org, link_organisasi, no_urut
            ];

            const { rows } = await db.query(updateQuery, values);
            if (!rows.length) {
                return res.status(404).send({ RC: "06", message: "No record updated, record not found" });
            }

            return res.status(200).send({ RC: "00", message: "Update Organisasi Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Update Organisasi Error", error });
        }
    },
    async deleteOrganisasi(req, res) {
        const { no_urut, nip_baru } = req.body;

        try {
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            const deleteQuery = `
      DELETE FROM bpjph.tr_organisasi
      WHERE nip = $1
        AND no_urut = $2
      RETURNING *;
    `;
            const { rows } = await db.query(deleteQuery, [nip, no_urut]);

            if (!rows.length) {
                return res.status(404).send({ RC: "06", message: "No record deleted, record not found" });
            }

            return res.status(200).send({ RC: "00", message: "Delete Organisasi Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Delete Organisasi Error", error });
        }
    },
    async getOrganisasiEdit(req, res) {
        const { nip_baru } = req.query;

        const readQuery = `
        select a.* from bpjph.tr_organisasi_edit a
        left join bpjph.tm_pegawai b on a.nip=b.nip
      WHERE b.nip_baru = $1
    `;

        try {
            const { rows, rowCount } = await db.query(readQuery, [nip_baru]);
            if (!rowCount) {
                return res.status(404).send({ RC: "05", message: "Data Not Found" });
            }
            return res.status(200).send({ RC: "00", message: "Success", data: rows });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Error", error });
        }
    },
    async postOrganisasiEdit(req, res) {
        const {
            nip_baru,
            nama_organ,
            kedudukan,
            tahun_awal,
            tahun_akhir,
            tempat,
            nama_pimpinan,
            tipe_organ,
            user_add,
            time_add,
            status_edit,
            status_time,
            exec_edit,
            exec_time,
            exec_status,
            exec_alasan,
            exec_satker,
            file_org,
            link_organisasi,
            no_urut
        } = req.body;

        try {
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            const execUrutQuery = `SELECT exec_urut FROM bpjph.tr_organisasi_edit WHERE nip = $1 order by exec_urut desc LIMIT 1`;
            const execUrutResult = await db.query(execUrutQuery, [nip]);

            let m_no_urut = 0;
            let exec_urut = 0;
            if (execUrutResult.rowCount) {
                exec_urut = parseInt(execUrutResult.rows[0].exec_urut) + 1;
            }

            if (no_urut) {
                m_no_urut = no_urut;
            }

            const insertQuery = `
            INSERT INTO bpjph.tr_organisasi_edit
            (nip, no_urut, nama_organ, kedudukan, tahun_awal, tahun_akhir, tempat, nama_pimpinan, tipe_organ,
             user_add, time_add, user_update, time_update,
             status_edit, status_time, exec_edit, exec_time,
             exec_status, exec_urut, exec_alasan, exec_satker,
             file_org, link_organisasi)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9,
                    $10, $11, $10, $11,
                    $12, $13, $14, $15,
                    $16, $17, $18, $19,
                    $20, $21)
            RETURNING *;
        `;

            const values = [
                nip,
                m_no_urut,
                nama_organ,
                kedudukan,
                tahun_awal,
                tahun_akhir,
                tempat,
                nama_pimpinan,
                tipe_organ,
                user_add,
                time_add,
                status_edit,
                status_time,
                exec_edit,
                exec_time,
                exec_status,
                exec_urut,
                exec_alasan,
                exec_satker,
                file_org,
                link_organisasi
            ];

            const { rows } = await db.query(insertQuery, values);
            return res.status(201).send({ RC: "00", message: "Insert Organisasi Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Insert Organisasi Error", error });
        }
    },
    async putOrganisasiEdit(req, res) {
        const {
            exec_urut,
            nip_baru,
            nama_organ,
            kedudukan,
            tahun_awal,
            tahun_akhir,
            tempat,
            nama_pimpinan,
            tipe_organ,
            user_update,
            time_update,
            status_edit,
            status_time,
            exec_edit,
            exec_time,
            exec_status,
            exec_alasan,
            exec_satker,
            file_org,
            link_organisasi
        } = req.body;

        try {
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            const updateQuery = `
            UPDATE bpjph.tr_organisasi_edit
            SET
                nama_organ = $2,
                kedudukan = $3,
                tahun_awal = $4,
                tahun_akhir = $5,
                tempat = $6,
                nama_pimpinan = $7,
                tipe_organ = $8,
                user_update = $9,
                time_update = $10,
                status_edit = $11,
                status_time = $12,
                exec_edit = $13,
                exec_time = $14,
                exec_status = $15,
                exec_alasan = $16,
                exec_satker = $17,
                file_org = $18,
                link_organisasi = $19
            WHERE nip = $1
            AND exec_urut = $20
            RETURNING *;
        `;

            const values = [
                nip,
                nama_organ,
                kedudukan,
                tahun_awal,
                tahun_akhir,
                tempat,
                nama_pimpinan,
                tipe_organ,
                user_update,
                time_update,
                status_edit,
                status_time,
                exec_edit,
                exec_time,
                exec_status,
                exec_alasan,
                exec_satker,
                file_org,
                link_organisasi,
                exec_urut
            ];

            const { rows } = await db.query(updateQuery, values);
            if (!rows.length) {
                return res.status(404).send({ RC: "06", message: "No record updated, record not found" });
            }

            return res.status(200).send({ RC: "00", message: "Update Organisasi Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Update Organisasi Error", error });
        }
    },
    async deleteOrganisasiEdit(req, res) {
        const { exec_urut, nip_baru } = req.body;

        try {
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            const deleteQuery = `
            DELETE FROM bpjph.tr_organisasi_edit
            WHERE nip = $1
            AND exec_urut = $2
            RETURNING *;
        `;
            const { rows } = await db.query(deleteQuery, [nip, exec_urut]);

            if (!rows.length) {
                return res.status(404).send({ RC: "06", message: "No record deleted, record not found" });
            }

            return res.status(200).send({ RC: "00", message: "Delete Organisasi Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Delete Organisasi Error", error });
        }
    },

    async getKaryaTulis(req, res) {
        const { nip_baru } = req.query;

        const readQuery = `
        select a.* from bpjph.tr_karya_ilmiah a
        left join bpjph.tm_pegawai b on a.nip=b.nip
      WHERE b.nip_baru = $1
    `;

        try {
            const { rows, rowCount } = await db.query(readQuery, [nip_baru]);
            if (!rowCount) {
                return res.status(404).send({ RC: "05", message: "Data Not Found" });
            }
            return res.status(200).send({ RC: "00", message: "Success", data: rows });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Error", error });
        }
    },
    async postKaryaTulis(req, res) {
        const {
            nip_baru,
            tahun,
            judul,
            keterangan,
            tipe_karya,
            user_add,
            time_add,
            link_kti,
            judul_kti,
            no_kti,
            file_kti,
        } = req.body;

        try {
            // Resolve nip
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            // Get next no_urut
            const urutQuery = `
          SELECT no_urut
          FROM bpjph.tr_karya_ilmiah
          WHERE nip = $1
          ORDER BY no_urut DESC
          LIMIT 1
        `;
            const urutResult = await db.query(urutQuery, [nip]);

            let no_urut = 1;
            if (urutResult.rowCount) {
                no_urut = parseInt(urutResult.rows[0].no_urut) + 1;
            }

            const insertQuery = `
          INSERT INTO bpjph.tr_karya_ilmiah
          (nip, no_urut, tahun, judul, keterangan, tipe_karya,
           user_add, time_add, user_update, time_update,
           link_kti, judul_kti, no_kti, file_kti)
          VALUES ($1,$2,$3,$4,$5,$6,
                  $7,$8,$7,$8,
                  $9,$10,$11,$12)
          RETURNING *;
        `;

            const values = [
                nip, no_urut, tahun, judul, keterangan, tipe_karya,
                user_add, time_add,
                link_kti, judul_kti, no_kti, file_kti,
            ];

            const { rows } = await db.query(insertQuery, values);
            return res.status(201).send({ RC: "00", message: "Insert Karya Ilmiah Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Insert Karya Ilmiah Error", error });
        }
    },
    async putKaryaTulis(req, res) {
        const {
            no_urut,
            nip_baru,
            tahun,
            judul,
            keterangan,
            tipe_karya,
            user_update,
            time_update,
            link_kti,
            judul_kti,
            no_kti,
            file_kti,
        } = req.body;

        try {
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            const updateQuery = `
          UPDATE bpjph.tr_karya_ilmiah
          SET
            tahun = $2,
            judul = $3,
            keterangan = $4,
            tipe_karya = $5,
            user_update = $6,
            time_update = $7,
            link_kti = $8,
            judul_kti = $9,
            no_kti = $10,
            file_kti = $11
          WHERE nip = $1
            AND no_urut = $12
          RETURNING *;
        `;

            const values = [
                nip, tahun, judul, keterangan, tipe_karya,
                user_update, time_update,
                link_kti, judul_kti, no_kti, file_kti, no_urut,
            ];

            const { rows } = await db.query(updateQuery, values);
            if (!rows.length) {
                return res.status(404).send({ RC: "06", message: "No record updated, record not found" });
            }

            return res.status(200).send({ RC: "00", message: "Update Karya Ilmiah Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Update Karya Ilmiah Error", error });
        }
    },
    async deleteKaryaTulis(req, res) {
        const { no_urut, nip_baru } = req.body;

        try {
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res
                    .status(404)
                    .send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            const deleteQuery = `
          DELETE FROM bpjph.tr_karya_ilmiah
          WHERE nip = $1
            AND no_urut = $2
          RETURNING *;
        `;
            const { rows } = await db.query(deleteQuery, [nip, no_urut]);

            if (!rows.length) {
                return res
                    .status(404)
                    .send({ RC: "06", message: "No record deleted, record not found" });
            }

            return res
                .status(200)
                .send({ RC: "00", message: "Delete Karya Ilmiah Success", data: rows[0] });
        } catch (error) {
            return res
                .status(400)
                .send({ RC: "99", message: "Delete Karya Ilmiah Error", error });
        }
    },
    async getKaryaTulisEdit(req, res) {
        const { nip_baru } = req.query;

        const readQuery = `
        select a.* from bpjph.tr_karya_ilmiah_edit a
        left join bpjph.tm_pegawai b on a.nip=b.nip
      WHERE b.nip_baru = $1
    `;

        try {
            const { rows, rowCount } = await db.query(readQuery, [nip_baru]);
            if (!rowCount) {
                return res.status(404).send({ RC: "05", message: "Data Not Found" });
            }
            return res.status(200).send({ RC: "00", message: "Success", data: rows });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Error", error });
        }
    },
    async postKaryaTulisEdit(req, res) {
        const {
            nip_baru,
            tahun,
            judul,
            keterangan,
            tipe_karya,
            user_add,
            time_add,
            status_edit,
            status_time,
            exec_edit,
            exec_time,
            exec_status,
            exec_alasan,
            exec_satker,
            link_kti,
            judul_kti,
            no_kti,
            file_kti,
            no_urut
        } = req.body;

        try {
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            const execUrutQuery = `SELECT exec_urut FROM bpjph.tr_karya_ilmiah_edit WHERE nip = $1 order by exec_urut desc LIMIT 1`;
            const execUrutResult = await db.query(execUrutQuery, [nip]);

            let m_no_urut = 0;
            let exec_urut = 0;
            if (execUrutResult.rowCount) {
                exec_urut = parseInt(execUrutResult.rows[0].exec_urut) + 1;
            }

            if (no_urut) {
                m_no_urut = no_urut;
            }

            const insertQuery = `
            INSERT INTO bpjph.tr_karya_ilmiah_edit
            (nip, no_urut, tahun, judul, keterangan, tipe_karya,
             user_add, time_add, user_update, time_update,
             status_edit, status_time, exec_edit, exec_time,
             exec_status, exec_urut, exec_alasan, exec_satker,
             link_kti, judul_kti, no_kti, file_kti)
            VALUES ($1, $2, $3, $4, $5, $6,
                    $7, $8, $7, $8,
                    $9, $10, $11, $12,
                    $13, $14, $15, $16,
                    $17, $18, $19, $20)
            RETURNING *;
        `;

            const values = [
                nip,
                m_no_urut,
                tahun,
                judul,
                keterangan,
                tipe_karya,
                user_add,
                time_add,
                status_edit,
                status_time,
                exec_edit,
                exec_time,
                exec_status,
                exec_urut,
                exec_alasan,
                exec_satker,
                link_kti,
                judul_kti,
                no_kti,
                file_kti
            ];

            const { rows } = await db.query(insertQuery, values);
            return res.status(201).send({ RC: "00", message: "Insert Karya Ilmiah Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Insert Karya Ilmiah Error", error });
        }
    },
    async putKaryaTulisEdit(req, res) {
        const {
            exec_urut,
            nip_baru,
            tahun,
            judul,
            keterangan,
            tipe_karya,
            user_update,
            time_update,
            status_edit,
            status_time,
            exec_edit,
            exec_time,
            exec_status,
            exec_alasan,
            exec_satker,
            link_kti,
            judul_kti,
            no_kti,
            file_kti,
        } = req.body;

        try {
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            const updateQuery = `
            UPDATE bpjph.tr_karya_ilmiah_edit
            SET
                tahun = $2,
                judul = $3,
                keterangan = $4,
                tipe_karya = $5,
                user_update = $6,
                time_update = $7,
                status_edit = $8,
                status_time = $9,
                exec_edit = $10,
                exec_time = $11,
                exec_status = $12,
                exec_alasan = $13,
                exec_satker = $14,
                link_kti = $15,
                judul_kti = $16,
                no_kti = $17,
                file_kti = $18
            WHERE nip = $1
            AND exec_urut = $19
            RETURNING *;
        `;

            const values = [
                nip,
                tahun,
                judul,
                keterangan,
                tipe_karya,
                user_update,
                time_update,
                status_edit,
                status_time,
                exec_edit,
                exec_time,
                exec_status,
                exec_alasan,
                exec_satker,
                link_kti,
                judul_kti,
                no_kti,
                file_kti,
                exec_urut,
            ];

            const { rows } = await db.query(updateQuery, values);
            if (!rows.length) {
                return res.status(404).send({ RC: "06", message: "No record updated, record not found" });
            }

            return res.status(200).send({ RC: "00", message: "Update Karya Ilmiah Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Update Karya Ilmiah Error", error });
        }
    },
    async deleteKaryaTulisEdit(req, res) {
        const { exec_urut, nip_baru } = req.body;

        try {
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            const deleteQuery = `
            DELETE FROM bpjph.tr_karya_ilmiah_edit
            WHERE nip = $1
            AND exec_urut = $2
            RETURNING *;
        `;
            const { rows } = await db.query(deleteQuery, [nip, exec_urut]);

            if (!rows.length) {
                return res.status(404).send({ RC: "06", message: "No record deleted, record not found" });
            }

            return res.status(200).send({ RC: "00", message: "Delete Karya Ilmiah Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Delete Karya Ilmiah Error", error });
        }
    },

    async getSertifikasi(req, res) {
        const { nip_baru } = req.query;

        const readQuery = `
        select a.*,c.bidang_studi from bpjph.tr_sertifikasi a
        left join bpjph.tm_pegawai b on a.nip=b.nip
        left join bpjph.tm_bidang_studi c on c.kode_bidang_studi =a.kode_bidang_studi 
      WHERE b.nip_baru = $1
    `;

        try {
            const { rows, rowCount } = await db.query(readQuery, [nip_baru]);
            if (!rowCount) {
                return res.status(404).send({ RC: "05", message: "Data Not Found" });
            }
            return res.status(200).send({ RC: "00", message: "Success", data: rows });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Error", error });
        }
    },
    async postSertifikasi(req, res) {
        const {
            nip_baru,
            no_sk,
            tgl_sk,
            penyelenggara,
            kode_bidang_studi,
            keterangan,
            file_sk,
            user_add,
            time_add,
            kualifikasi,
        } = req.body;

        try {
            // Resolve nip
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            // Get next no_urut
            const urutQuery = `
            SELECT no_urut
            FROM bpjph.tr_sertifikasi
            WHERE nip = $1
            ORDER BY no_urut DESC
            LIMIT 1
        `;
            const urutResult = await db.query(urutQuery, [nip]);
            let no_urut = 1;
            if (urutResult.rowCount) {
                no_urut = parseInt(urutResult.rows[0].no_urut) + 1;
            }

            const insertQuery = `
            INSERT INTO bpjph.tr_sertifikasi
            (nip, no_urut, no_sk, tgl_sk, penyelenggara,
             kode_bidang_studi, keterangan, file_sk,
             user_add, time_add, user_update, time_update,
             kualifikasi)
            VALUES ($1,$2,$3,$4,$5,
                    $6,$7,$8,
                    $9,$10,$9,$10,
                    $11)
            RETURNING *;
        `;

            const values = [
                nip, no_urut, no_sk, tgl_sk, penyelenggara,
                kode_bidang_studi, keterangan, file_sk,
                user_add, time_add, kualifikasi,
            ];

            const { rows } = await db.query(insertQuery, values);
            return res.status(201).send({ RC: "00", message: "Insert Sertifikasi Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Insert Sertifikasi Error", error });
        }
    },
    async putSertifikasi(req, res) {
        const {
            no_urut,
            nip_baru,
            no_sk,
            tgl_sk,
            penyelenggara,
            kode_bidang_studi,
            keterangan,
            file_sk,
            user_update,
            time_update,
            kualifikasi,
        } = req.body;

        try {
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            const updateQuery = `
            UPDATE bpjph.tr_sertifikasi
            SET
                no_sk = $3,
                tgl_sk = $4,
                penyelenggara = $5,
                kode_bidang_studi = $6,
                keterangan = $7,
                file_sk = $8,
                user_update = $9,
                time_update = $10,
                kualifikasi = $11
            WHERE nip = $1
              AND no_urut = $2
            RETURNING *;
        `;

            const values = [
                nip, no_urut, no_sk, tgl_sk, penyelenggara,
                kode_bidang_studi, keterangan, file_sk,
                user_update, time_update, kualifikasi,
            ];

            const { rows } = await db.query(updateQuery, values);
            if (!rows.length) {
                return res.status(404).send({ RC: "06", message: "No record updated, record not found" });
            }

            return res.status(200).send({ RC: "00", message: "Update Sertifikasi Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Update Sertifikasi Error", error });
        }
    },
    async deleteSertifikasi(req, res) {
        const { no_urut, nip_baru } = req.body;

        try {
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            const deleteQuery = `
            DELETE FROM bpjph.tr_sertifikasi
            WHERE nip = $1
              AND no_urut = $2
            RETURNING *;
        `;
            const { rows } = await db.query(deleteQuery, [nip, no_urut]);

            if (!rows.length) {
                return res.status(404).send({ RC: "06", message: "No record deleted, record not found" });
            }

            return res.status(200).send({ RC: "00", message: "Delete Sertifikasi Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Delete Sertifikasi Error", error });
        }
    },
    async getSertifikasiEdit(req, res) {
        const { nip_baru } = req.query;

        const readQuery = `
        select a.*,c.bidang_studi from bpjph.tr_sertifikasi_edit a
        left join bpjph.tm_pegawai b on a.nip=b.nip
        left join bpjph.tm_bidang_studi c on c.kode_bidang_studi =a.kode_bidang_studi 
      WHERE b.nip_baru = $1
    `;

        try {
            const { rows, rowCount } = await db.query(readQuery, [nip_baru]);
            if (!rowCount) {
                return res.status(404).send({ RC: "05", message: "Data Not Found" });
            }
            return res.status(200).send({ RC: "00", message: "Success", data: rows });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Error", error });
        }
    },
    async postSertifikasiEdit(req, res) {
        const {
            nip_baru,
            no_sk,
            tgl_sk,
            penyelenggara,
            kode_bidang_studi,
            keterangan,
            file_sk,
            user_add,
            time_add,
            kualifikasi,
            status_edit,
            tipe_edit,
            no_urut_edit,
            status_time,
            exec_edit,
            exec_time,
            exec_status,
            exec_alasan,
            exec_satker,
            no_urut
        } = req.body;

        try {
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            const execUrutQuery = `SELECT exec_urut FROM bpjph.tr_sertifikasi_edit WHERE nip = $1 order by exec_urut desc LIMIT 1`;
            const execUrutResult = await db.query(execUrutQuery, [nip]);

            let m_no_urut = 0;
            let exec_urut = 0;
            if (execUrutResult.rowCount) {
                exec_urut = parseInt(execUrutResult.rows[0].exec_urut) + 1;
            }

            if (no_urut) {
                m_no_urut = no_urut;
            }

            const insertQuery = `
            INSERT INTO bpjph.tr_sertifikasi_edit
            (nip, no_urut, no_sk, tgl_sk, penyelenggara,
             kode_bidang_studi, keterangan, file_sk,
             user_add, time_add, user_update, time_update,
             kualifikasi, status_edit, tipe_edit, no_urut_edit,
             status_time, exec_edit, exec_time, exec_status,
             exec_urut, exec_alasan, exec_satker)
            VALUES ($1, $2, $3, $4, $5,
                    $6, $7, $8,
                    $9, $10, $9, $10,
                    $11, $12, $13, $14,
                    $15, $16, $17, $18,
                    $19, $20, $21)
            RETURNING *;
        `;

            const values = [
                nip,
                m_no_urut,
                no_sk,
                tgl_sk,
                penyelenggara,
                kode_bidang_studi,
                keterangan,
                file_sk,
                user_add,
                time_add,
                kualifikasi,
                status_edit,
                tipe_edit,
                no_urut_edit,
                status_time,
                exec_edit,
                exec_time,
                exec_status,
                exec_urut,
                exec_alasan,
                exec_satker
            ];

            const { rows } = await db.query(insertQuery, values);
            return res.status(201).send({ RC: "00", message: "Insert Sertifikasi Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Insert Sertifikasi Error", error });
        }
    },
    async putSertifikasiEdit(req, res) {
        const {
            exec_urut,
            nip_baru,
            no_sk,
            tgl_sk,
            penyelenggara,
            kode_bidang_studi,
            keterangan,
            file_sk,
            user_update,
            time_update,
            kualifikasi,
            status_edit,
            tipe_edit,
            no_urut_edit,
            status_time,
            exec_edit,
            exec_time,
            exec_status,
            exec_alasan,
            exec_satker,
        } = req.body;

        try {
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            const updateQuery = `
            UPDATE bpjph.tr_sertifikasi_edit
            SET
                no_sk = $2,
                tgl_sk = $3,
                penyelenggara = $4,
                kode_bidang_studi = $5,
                keterangan = $6,
                file_sk = $7,
                user_update = $8,
                time_update = $9,
                kualifikasi = $10,
                status_edit = $11,
                tipe_edit = $12,
                no_urut_edit = $13,
                status_time = $14,
                exec_edit = $15,
                exec_time = $16,
                exec_status = $17,
                exec_alasan = $18,
                exec_satker = $19
            WHERE nip = $1
            AND exec_urut = $20
            RETURNING *;
        `;

            const values = [
                nip,
                no_sk,
                tgl_sk,
                penyelenggara,
                kode_bidang_studi,
                keterangan,
                file_sk,
                user_update,
                time_update,
                kualifikasi,
                status_edit,
                tipe_edit,
                no_urut_edit,
                status_time,
                exec_edit,
                exec_time,
                exec_status,
                exec_alasan,
                exec_satker,
                exec_urut
            ];

            const { rows } = await db.query(updateQuery, values);
            if (!rows.length) {
                return res.status(404).send({ RC: "06", message: "No record updated, record not found" });
            }

            return res.status(200).send({ RC: "00", message: "Update Sertifikasi Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Update Sertifikasi Error", error });
        }
    },
    async deleteSertifikasiEdit(req, res) {
        const { exec_urut, nip_baru } = req.body;

        try {
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            const deleteQuery = `
            DELETE FROM bpjph.tr_sertifikasi_edit
            WHERE nip = $1
            AND exec_urut = $2
            RETURNING *;
        `;
            const { rows } = await db.query(deleteQuery, [nip, exec_urut]);

            if (!rows.length) {
                return res.status(404).send({ RC: "06", message: "No record deleted, record not found" });
            }

            return res.status(200).send({ RC: "00", message: "Delete Sertifikasi Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Delete Sertifikasi Error", error });
        }
    },

    async getKgb(req, res) {
        const { nip_baru } = req.query;

        const readQuery = `
        select a.*,c.pangkat,c.gol_ruang,c.gol_pppk from bpjph.tr_kgb a
        left join bpjph.tm_pegawai b on a.nip=b.nip
        left join bpjph.tm_pangkat c on c.kode_pangkat =a.kode_pangkat 
      WHERE b.nip_baru = $1
    `;

        try {
            const { rows, rowCount } = await db.query(readQuery, [nip_baru]);
            if (!rowCount) {
                return res.status(404).send({ RC: "05", message: "Data Not Found" });
            }
            return res.status(200).send({ RC: "00", message: "Success", data: rows });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Error", error });
        }
    },
    async postKgb(req, res) {
        const {
            nip_baru,
            kode_pangkat,
            no_sk,
            tgl_sk,
            tmt_sk,
            mk_tahun,
            mk_bulan,
            keterangan,
            file_sk,
            link_kgb,
            user_add,
            time_add,
        } = req.body;

        try {
            // Resolve nip
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            // Get next no_urut
            const urutQuery = `
          SELECT no_urut
          FROM bpjph.tr_kgb
          WHERE nip = $1
          ORDER BY no_urut DESC
          LIMIT 1
        `;
            const urutResult = await db.query(urutQuery, [nip]);

            let no_urut = 1;
            if (urutResult.rowCount) {
                no_urut = parseInt(urutResult.rows[0].no_urut) + 1;
            }

            const insertQuery = `
          INSERT INTO bpjph.tr_kgb
          (nip, no_urut, kode_pangkat, no_sk, tgl_sk, tmt_sk,
           mk_tahun, mk_bulan, keterangan, user_add, time_add,
           user_update, time_update, file_sk, link_kgb)
          VALUES ($1,$2,$3,$4,$5,$6,
                  $7,$8,$9,$10,$11,
                  $10,$11,$12,$13)
          RETURNING *;
        `;

            const values = [
                nip, no_urut, kode_pangkat, no_sk, tgl_sk, tmt_sk,
                mk_tahun, mk_bulan, keterangan, user_add, time_add,
                file_sk, link_kgb,
            ];

            const { rows } = await db.query(insertQuery, values);
            return res.status(201).send({ RC: "00", message: "Insert KGB Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Insert KGB Error", error });
        }
    },
    async putKgb(req, res) {
        const {
            no_urut,
            nip_baru,
            kode_pangkat,
            no_sk,
            tgl_sk,
            tmt_sk,
            mk_tahun,
            mk_bulan,
            keterangan,
            file_sk,
            link_kgb,
            user_update,
            time_update,
        } = req.body;

        try {
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            const updateQuery = `
          UPDATE bpjph.tr_kgb
          SET
            kode_pangkat = $3,
            no_sk = $4,
            tgl_sk = $5,
            tmt_sk = $6,
            mk_tahun = $7,
            mk_bulan = $8,
            keterangan = $9,
            file_sk = $10,
            link_kgb = $11,
            user_update = $12,
            time_update = $13
          WHERE nip = $1
            AND no_urut = $2
          RETURNING *;
        `;

            const values = [
                nip, no_urut, kode_pangkat, no_sk, tgl_sk, tmt_sk,
                mk_tahun, mk_bulan, keterangan, file_sk, link_kgb,
                user_update, time_update,
            ];

            const { rows } = await db.query(updateQuery, values);
            if (!rows.length) {
                return res.status(404).send({ RC: "06", message: "No record updated, record not found" });
            }

            return res.status(200).send({ RC: "00", message: "Update KGB Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Update KGB Error", error });
        }
    },
    async deleteKgb(req, res) {
        const { no_urut, nip_baru } = req.body;

        try {
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            const deleteQuery = `
          DELETE FROM bpjph.tr_kgb
          WHERE nip = $1
            AND no_urut = $2
          RETURNING *;
        `;
            const { rows } = await db.query(deleteQuery, [nip, no_urut]);

            if (!rows.length) {
                return res.status(404).send({ RC: "06", message: "No record deleted, record not found" });
            }

            return res.status(200).send({ RC: "00", message: "Delete KGB Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Delete KGB Error", error });
        }
    },
    async getKgbEdit(req, res) {
        const { nip_baru } = req.query;

        const readQuery = `
        select a.*,c.pangkat,c.gol_ruang,c.gol_pppk from bpjph.tr_kgb_edit a
        left join bpjph.tm_pegawai b on a.nip=b.nip
        left join bpjph.tm_pangkat c on c.kode_pangkat =a.kode_pangkat 
      WHERE b.nip_baru = $1
    `;

        try {
            const { rows, rowCount } = await db.query(readQuery, [nip_baru]);
            if (!rowCount) {
                return res.status(404).send({ RC: "05", message: "Data Not Found" });
            }
            return res.status(200).send({ RC: "00", message: "Success", data: rows });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Error", error });
        }
    },
    async postKgbEdit(req, res) {
        const {
            nip_baru,
            kode_pangkat,
            no_sk,
            tgl_sk,
            tmt_sk,
            mk_tahun,
            mk_bulan,
            keterangan,
            file_sk,
            user_add,
            time_add,
            status_edit,
            status_time,
            exec_edit,
            exec_time,
            exec_status,
            exec_alasan,
            exec_satker,
            link_kgb,
            no_urut
        } = req.body;

        try {
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            const execUrutQuery = `SELECT exec_urut FROM bpjph.tr_kgb_edit WHERE nip = $1 order by exec_urut desc LIMIT 1`;
            const execUrutResult = await db.query(execUrutQuery, [nip]);

            let m_no_urut = 0;
            let exec_urut = 0;
            if (execUrutResult.rowCount) {
                exec_urut = parseInt(execUrutResult.rows[0].exec_urut) + 1;
            }

            if (no_urut) {
                m_no_urut = no_urut;
            }

            const insertQuery = `
            INSERT INTO bpjph.tr_kgb_edit
            (nip, no_urut, kode_pangkat, no_sk, tgl_sk, tmt_sk,
             mk_tahun, mk_bulan, keterangan, user_add, time_add,
             user_update, time_update, file_sk, status_edit,
             status_time, exec_edit, exec_time, exec_status,
             exec_urut, exec_alasan, exec_satker, link_kgb)
            VALUES ($1, $2, $3, $4, $5, $6,
                    $7, $8, $9, $10, $11,
                    $10, $11, $12, $13,
                    $14, $15, $16, $17,
                    $18, $19, $20, $21)
            RETURNING *;
        `;

            const values = [
                nip,
                m_no_urut,
                kode_pangkat,
                no_sk,
                tgl_sk,
                tmt_sk,
                mk_tahun,
                mk_bulan,
                keterangan,
                user_add,
                time_add,
                file_sk,
                status_edit,
                status_time,
                exec_edit,
                exec_time,
                exec_status,
                exec_urut,
                exec_alasan,
                exec_satker,
                link_kgb
            ];

            const { rows } = await db.query(insertQuery, values);
            return res.status(201).send({ RC: "00", message: "Insert KGB Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Insert KGB Error", error });
        }
    },
    async putKgbEdit(req, res) {
        const {
            exec_urut,
            nip_baru,
            kode_pangkat,
            no_sk,
            tgl_sk,
            tmt_sk,
            mk_tahun,
            mk_bulan,
            keterangan,
            file_sk,
            user_update,
            time_update,
            status_edit,
            status_time,
            exec_edit,
            exec_time,
            exec_status,
            exec_alasan,
            exec_satker,
            link_kgb,
        } = req.body;

        try {
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            const updateQuery = `
            UPDATE bpjph.tr_kgb_edit
            SET
                kode_pangkat = $2,
                no_sk = $3,
                tgl_sk = $4,
                tmt_sk = $5,
                mk_tahun = $6,
                mk_bulan = $7,
                keterangan = $8,
                file_sk = $9,
                user_update = $10,
                time_update = $11,
                status_edit = $12,
                status_time = $13,
                exec_edit = $14,
                exec_time = $15,
                exec_status = $16,
                exec_alasan = $17,
                exec_satker = $18,
                link_kgb = $19
            WHERE nip = $1
            AND exec_urut = $20
            RETURNING *;
        `;

            const values = [
                nip,
                kode_pangkat,
                no_sk,
                tgl_sk,
                tmt_sk,
                mk_tahun,
                mk_bulan,
                keterangan,
                file_sk,
                user_update,
                time_update,
                status_edit,
                status_time,
                exec_edit,
                exec_time,
                exec_status,
                exec_alasan,
                exec_satker,
                link_kgb,
                exec_urut
            ];

            const { rows } = await db.query(updateQuery, values);
            if (!rows.length) {
                return res.status(404).send({ RC: "06", message: "No record updated, record not found" });
            }

            return res.status(200).send({ RC: "00", message: "Update KGB Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Update KGB Error", error });
        }
    },
    async deleteKgbEdit(req, res) {
        const { exec_urut, nip_baru } = req.body;

        try {
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            const deleteQuery = `
            DELETE FROM bpjph.tr_kgb_edit
            WHERE nip = $1
            AND exec_urut = $2
            RETURNING *;
        `;
            const { rows } = await db.query(deleteQuery, [nip, exec_urut]);

            if (!rows.length) {
                return res.status(404).send({ RC: "06", message: "No record deleted, record not found" });
            }

            return res.status(200).send({ RC: "00", message: "Delete KGB Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Delete KGB Error", error });
        }
    },

    async getSkp(req, res) {
        const { nip_baru } = req.query;

        const readQuery = `
        select a.*,c.nilai_kerja as nilai_hasil_kerja, d.nilai_kerja as nilai_perilaku_kerja from bpjph.tr_skp a
        left join bpjph.tm_pegawai b on a.nip=b.nip
        left join bpjph.tm_kerja c on c.kode_kerja=a.hasil_kerja
        left join bpjph.tm_kerja d on d.kode_kerja=a.perilaku_kerja
        WHERE b.nip_baru = $1
        `;

        try {
            const { rows, rowCount } = await db.query(readQuery, [nip_baru]);
            if (!rowCount) {
                return res.status(404).send({ RC: "05", message: "Data Not Found" });
            }
            return res.status(200).send({ RC: "00", message: "Success", data: rows });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Error", error });
        }
    },
    async postSkp(req, res) {
        const {
            nip_baru,
            tahun,
            orientasi_pelayanan,
            integritas,
            komitmen,
            disiplin,
            kerjasama,
            inisiatif_kerja,
            kepemimpinan,
            jumlah_perilaku_kerja,
            sasaran_kerja_pns,
            nilai_prestasi_kerja,
            kriteria_prestasi_kerja,
            file_sk,
            user_add,
            time_add,
            link_skp,
            nip_atasan,
            nip_atasan_atasan,
            file_posisi,
            send_bkn,
            hasil_kerja,
            perilaku_kerja,
        } = req.body;

        try {
            // Resolve nip
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            // Insert
            const insertQuery = `
            INSERT INTO bpjph.tr_skp
            (nip, tahun, orientasi_pelayanan, integritas, komitmen,
             disiplin, kerjasama, inisiatif_kerja, kepemimpinan,
             jumlah_perilaku_kerja, sasaran_kerja_pns, nilai_prestasi_kerja,
             kriteria_prestasi_kerja, file_sk, user_add, time_add,
             user_update, time_update, link_skp,
             nip_atasan, nip_atasan_atasan, file_posisi, send_bkn,
             hasil_kerja, perilaku_kerja)
            VALUES
            ($1,$2,$3,$4,$5,
             $6,$7,$8,$9,
             $10,$11,$12,
             $13,$14,$15,$16,
             $15,$16,$17,
             $18,$19,$20,$21,
             $22,$23)
            RETURNING *;
        `;

            const values = [
                nip, tahun, orientasi_pelayanan, integritas, komitmen,
                disiplin, kerjasama, inisiatif_kerja, kepemimpinan,
                jumlah_perilaku_kerja, sasaran_kerja_pns, nilai_prestasi_kerja,
                kriteria_prestasi_kerja, file_sk, user_add, time_add,
                link_skp, nip_atasan, nip_atasan_atasan,
                file_posisi, send_bkn, hasil_kerja, perilaku_kerja,
            ];

            const { rows } = await db.query(insertQuery, values);
            return res.status(201).send({ RC: "00", message: "Insert SKP Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Insert SKP Error", error });
        }
    },
    async putSkp(req, res) {
        const {
            nip_baru,
            tahun,
            orientasi_pelayanan,
            integritas,
            komitmen,
            disiplin,
            kerjasama,
            inisiatif_kerja,
            kepemimpinan,
            jumlah_perilaku_kerja,
            sasaran_kerja_pns,
            nilai_prestasi_kerja,
            kriteria_prestasi_kerja,
            file_sk,
            user_update,
            time_update,
            link_skp,
            nip_atasan,
            nip_atasan_atasan,
            file_posisi,
            send_bkn,
            hasil_kerja,
            perilaku_kerja,
        } = req.body;

        try {
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            const updateQuery = `
            UPDATE bpjph.tr_skp
            SET
                orientasi_pelayanan = $3,
                integritas = $4,
                komitmen = $5,
                disiplin = $6,
                kerjasama = $7,
                inisiatif_kerja = $8,
                kepemimpinan = $9,
                jumlah_perilaku_kerja = $10,
                sasaran_kerja_pns = $11,
                nilai_prestasi_kerja = $12,
                kriteria_prestasi_kerja = $13,
                file_sk = $14,
                user_update = $15,
                time_update = $16,
                link_skp = $17,
                nip_atasan = $18,
                nip_atasan_atasan = $19,
                file_posisi = $20,
                send_bkn = $21,
                hasil_kerja = $22,
                perilaku_kerja = $23
            WHERE nip = $1
              AND tahun = $2
            RETURNING *;
        `;

            const values = [
                nip, tahun,
                orientasi_pelayanan, integritas, komitmen, disiplin, kerjasama,
                inisiatif_kerja, kepemimpinan, jumlah_perilaku_kerja,
                sasaran_kerja_pns, nilai_prestasi_kerja, kriteria_prestasi_kerja,
                file_sk, user_update, time_update,
                link_skp, nip_atasan, nip_atasan_atasan,
                file_posisi, send_bkn, hasil_kerja, perilaku_kerja,
            ];

            const { rows } = await db.query(updateQuery, values);
            if (!rows.length) {
                return res.status(404).send({ RC: "06", message: "No record updated, record not found" });
            }

            return res.status(200).send({ RC: "00", message: "Update SKP Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Update SKP Error", error });
        }
    },
    async deleteSkp(req, res) {
        const { nip_baru, tahun } = req.body;

        try {
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            const deleteQuery = `
            DELETE FROM bpjph.tr_skp
            WHERE nip = $1 AND tahun = $2
            RETURNING *;
        `;
            const { rows } = await db.query(deleteQuery, [nip, tahun]);

            if (!rows.length) {
                return res.status(404).send({ RC: "06", message: "No record deleted, record not found" });
            }

            return res.status(200).send({ RC: "00", message: "Delete SKP Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Delete SKP Error", error });
        }
    },
    async getSkpEdit(req, res) {
        const { nip_baru } = req.query;

        const readQuery = `
        select a.*,c.nilai_kerja as nilai_hasil_kerja, d.nilai_kerja as nilai_perilaku_kerja from bpjph.tr_skp_edit a
        left join bpjph.tm_pegawai b on a.nip=b.nip
        left join bpjph.tm_kerja c on c.kode_kerja=a.hasil_kerja
        left join bpjph.tm_kerja d on d.kode_kerja=a.perilaku_kerja
        WHERE b.nip_baru = $1
        `;

        try {
            const { rows, rowCount } = await db.query(readQuery, [nip_baru]);
            if (!rowCount) {
                return res.status(404).send({ RC: "05", message: "Data Not Found" });
            }
            return res.status(200).send({ RC: "00", message: "Success", data: rows });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Error", error });
        }
    },
    async postSkpEdit(req, res) {
        const {
            nip_baru,
            tahun,
            orientasi_pelayanan,
            integritas,
            komitmen,
            disiplin,
            kerjasama,
            kepemimpinan,
            jumlah_perilaku_kerja,
            sasaran_kerja_pns,
            nilai_prestasi_kerja,
            kriteria_prestasi_kerja,
            file_sk,
            user_add,
            time_add,
            status_edit,
            status_time,
            exec_edit,
            exec_time,
            exec_status,
            exec_alasan,
            exec_satker,
            nip_atasan,
            nip_atasan_atasan,
            inisiatif_kerja,
            hasil_kerja,
            perilaku_kerja
        } = req.body;

        try {
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            const execUrutQuery = `SELECT exec_urut FROM bpjph.tr_skp_edit WHERE nip = $1 ORDER BY exec_urut DESC LIMIT 1`;
            const execUrutResult = await db.query(execUrutQuery, [nip]);

            let m_exec_urut = 0;
            if (execUrutResult.rowCount) {
                m_exec_urut = parseInt(execUrutResult.rows[0].exec_urut) + 1;
            }

            const insertQuery = `
            INSERT INTO bpjph.tr_skp_edit
            (nip, tahun, orientasi_pelayanan, integritas, komitmen,
             disiplin, kerjasama, kepemimpinan, jumlah_perilaku_kerja,
             sasaran_kerja_pns, nilai_prestasi_kerja, kriteria_prestasi_kerja,
             file_sk, user_add, time_add, user_update, time_update,
             status_edit, status_time, exec_edit, exec_time, exec_status,
             exec_urut, exec_alasan, exec_satker,
             nip_atasan, nip_atasan_atasan, inisiatif_kerja, hasil_kerja, perilaku_kerja)
            VALUES
            ($1, $2, $3, $4, $5,
             $6, $7, $8, $9,
             $10, $11, $12,
             $13, $14, $15, $14, $15,
             $16, $17, $18, $19, $20,
             $21, $22, $23,
             $24, $25, $26, $27, $28)
            RETURNING *;
        `;

            const values = [
                nip,
                tahun,
                orientasi_pelayanan,
                integritas,
                komitmen,
                disiplin,
                kerjasama,
                kepemimpinan,
                jumlah_perilaku_kerja,
                sasaran_kerja_pns,
                nilai_prestasi_kerja,
                kriteria_prestasi_kerja,
                file_sk,
                user_add,
                time_add,
                status_edit,
                status_time,
                exec_edit,
                exec_time,
                exec_status,
                m_exec_urut,
                exec_alasan,
                exec_satker,
                nip_atasan,
                nip_atasan_atasan,
                inisiatif_kerja,
                hasil_kerja,
                perilaku_kerja,
            ];

            const { rows } = await db.query(insertQuery, values);
            return res.status(201).send({ RC: "00", message: "Insert SKP Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Insert SKP Error", error });
        }
    },
    async putSkpEdit(req, res) {
        const {
            nip_baru,
            tahun,
            orientasi_pelayanan,
            integritas,
            komitmen,
            disiplin,
            kerjasama,
            kepemimpinan,
            jumlah_perilaku_kerja,
            sasaran_kerja_pns,
            nilai_prestasi_kerja,
            kriteria_prestasi_kerja,
            file_sk,
            user_update,
            time_update,
            status_edit,
            status_time,
            exec_edit,
            exec_time,
            exec_status,
            exec_alasan,
            exec_satker,
            exec_urut,
            nip_atasan,
            nip_atasan_atasan,
            inisiatif_kerja,
            hasil_kerja,
            perilaku_kerja,
        } = req.body;

        try {
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            const updateQuery = `
            UPDATE bpjph.tr_skp_edit
            SET
                orientasi_pelayanan = $3,
                integritas = $4,
                komitmen = $5,
                disiplin = $6,
                kerjasama = $7,
                kepemimpinan = $8,
                jumlah_perilaku_kerja = $9,
                sasaran_kerja_pns = $10,
                nilai_prestasi_kerja = $11,
                kriteria_prestasi_kerja = $12,
                file_sk = $13,
                user_update = $14,
                time_update = $15,
                status_edit = $16,
                status_time = $17,
                exec_edit = $18,
                exec_time = $19,
                exec_status = $20,
                exec_alasan = $21,
                exec_satker = $22,
                nip_atasan = $23,
                nip_atasan_atasan = $24,
                inisiatif_kerja = $25,
                hasil_kerja = $26,
                perilaku_kerja = $27
            WHERE nip = $1
            AND tahun = $2
            AND exec_urut = $28
            RETURNING *;
        `;

            const values = [
                nip,
                tahun,
                orientasi_pelayanan,
                integritas,
                komitmen,
                disiplin,
                kerjasama,
                kepemimpinan,
                jumlah_perilaku_kerja,
                sasaran_kerja_pns,
                nilai_prestasi_kerja,
                kriteria_prestasi_kerja,
                file_sk,
                user_update,
                time_update,
                status_edit,
                status_time,
                exec_edit,
                exec_time,
                exec_status,
                exec_alasan,
                exec_satker,
                nip_atasan,
                nip_atasan_atasan,
                inisiatif_kerja,
                hasil_kerja,
                perilaku_kerja,
                exec_urut
            ];

            const { rows } = await db.query(updateQuery, values);
            if (!rows.length) {
                return res.status(404).send({ RC: "06", message: "No record updated, record not found" });
            }

            return res.status(200).send({ RC: "00", message: "Update SKP Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Update SKP Error", error });
        }
    },
    async deleteSkpEdit(req, res) {
        const { nip_baru, tahun, exec_urut } = req.body;

        try {
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            const deleteQuery = `
            DELETE FROM bpjph.tr_skp_edit
            WHERE nip = $1 AND tahun = $2 AND exec_urut = $3
            RETURNING *;
        `;
            const { rows } = await db.query(deleteQuery, [nip, tahun, exec_urut]);

            if (!rows.length) {
                return res.status(404).send({ RC: "06", message: "No record deleted, record not found" });
            }

            return res.status(200).send({ RC: "00", message: "Delete SKP Edit Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Delete SKP Edit Error", error });
        }
    },

    async getPkgPkp(req, res) {
        const { nip_baru } = req.query;

        const readQuery = `
        select a.* from bpjph.tr_pkg a
        left join bpjph.tm_pegawai b on a.nip=b.nip
        WHERE b.nip_baru = $1
        `;

        try {
            const { rows, rowCount } = await db.query(readQuery, [nip_baru]);
            if (!rowCount) {
                return res.status(404).send({ RC: "05", message: "Data Not Found" });
            }
            return res.status(200).send({ RC: "00", message: "Success", data: rows });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Error", error });
        }
    },
    async postPkgPkp(req, res) {
        const {
            nip_baru,
            tahun,
            file_link,
            user_add,
            time_add,
            no_urut,
            judul,
        } = req.body;

        try {
            // Resolve nip
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            const insertQuery = `
      INSERT INTO bpjph.tr_pkg
      (nip, tahun, file_link,
       user_add, time_add, user_update, time_update,
       no_urut, judul)
      VALUES
      ($1,$2,$3,
       $4,$5,$4,$5,
       $6,$7)
      RETURNING *;
    `;

            const values = [nip, tahun, file_link, user_add, time_add, no_urut, judul];
            const { rows } = await db.query(insertQuery, values);

            return res.status(201).send({ RC: "00", message: "Insert PKG Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Insert PKG Error", error });
        }
    },
    async putPkgPkp(req, res) {
        const {
            nip_baru,
            tahun,
            file_link,
            user_update,
            time_update,
            no_urut,
            judul,
        } = req.body;

        try {
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            const updateQuery = `
      UPDATE bpjph.tr_pkg
      SET
        file_link = $3,
        user_update = $4,
        time_update = $5,
        judul = $7
      WHERE nip = $1
        AND tahun = $2
        AND no_urut = $6
      RETURNING *;
    `;

            const values = [nip, tahun, file_link, user_update, time_update, no_urut, judul];
            const { rows } = await db.query(updateQuery, values);

            if (!rows.length) {
                return res.status(404).send({ RC: "06", message: "No record updated, record not found" });
            }

            return res.status(200).send({ RC: "00", message: "Update PKG Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Update PKG Error", error });
        }
    },
    async deletePkgPkp(req, res) {
        const { nip_baru, tahun, no_urut } = req.body;

        try {
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            const deleteQuery = `
      DELETE FROM bpjph.tr_pkg
      WHERE nip = $1 AND tahun = $2 AND no_urut = $3
      RETURNING *;
    `;
            const { rows } = await db.query(deleteQuery, [nip, tahun, no_urut]);

            if (!rows.length) {
                return res.status(404).send({ RC: "06", message: "No record deleted, record not found" });
            }

            return res.status(200).send({ RC: "00", message: "Delete PKG Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Delete PKG Error", error });
        }
    },
    async getPkgPkpEdit(req, res) {
        const { nip_baru } = req.query;

        const readQuery = `
        select a.* from bpjph.tr_pkg_edit a
        left join bpjph.tm_pegawai b on a.nip=b.nip
        WHERE b.nip_baru = $1
        `;

        try {
            const { rows, rowCount } = await db.query(readQuery, [nip_baru]);
            if (!rowCount) {
                return res.status(404).send({ RC: "05", message: "Data Not Found" });
            }
            return res.status(200).send({ RC: "00", message: "Success", data: rows });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Error", error });
        }
    },
    async postPkgPkpEdit(req, res) {
        const {
            nip_baru,
            tahun,
            file_link,
            user_add,
            time_add,
            status_edit,
            status_time,
            exec_edit,
            exec_time,
            exec_status,
            exec_alasan,
            exec_satker,
            no_urut,
            judul,
        } = req.body;

        try {
            // Resolve nip
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            const execUrutQuery = `SELECT exec_urut FROM bpjph.tr_pkg_edit WHERE nip = $1 order by exec_urut desc LIMIT 1`;
            const execUrutResult = await db.query(execUrutQuery, [nip]);
            let m_no_urut = 0;
            let exec_urut = 0;
            if (execUrutResult.rowCount) {
                exec_urut = parseInt(execUrutResult.rows[0].exec_urut) + 1;
            }
            if (no_urut) {
                m_no_urut = no_urut;
            }

            const insertQuery = `
      INSERT INTO bpjph.tr_pkg_edit
      (nip, tahun, file_link,
       user_add, time_add, user_update, time_update,
       status_edit, status_time, exec_edit, exec_time, exec_status,
       exec_urut, exec_alasan, exec_satker, no_urut, judul)
      VALUES
      ($1,$2,$3,
       $4,$5,$4,$5,
       $6,$7,$8,$9,$10,
       $11,$12,$13,$14,$15)
      RETURNING *;
    `;

            const values = [
                nip, tahun, file_link,
                user_add, time_add,
                status_edit, status_time, exec_edit, exec_time, exec_status,
                exec_urut, exec_alasan, exec_satker, m_no_urut, judul,
            ];

            const { rows } = await db.query(insertQuery, values);
            return res.status(201).send({ RC: "00", message: "Insert PKG Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Insert PKG Error", error });
        }
    },
    async putPkgPkpEdit(req, res) {
        const {
            nip_baru,
            tahun,
            file_link,
            user_update,
            time_update,
            status_edit,
            status_time,
            exec_edit,
            exec_time,
            exec_status,
            exec_alasan,
            exec_satker,
            exec_urut,
            judul,
        } = req.body;

        try {
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            const updateQuery = `
      UPDATE bpjph.tr_pkg_edit
      SET
        file_link = $3,
        user_update = $4,
        time_update = $5,
        status_edit = $6,
        status_time = $7,
        exec_edit = $8,
        exec_time = $9,
        exec_status = $10,
        exec_alasan = $11,
        exec_satker = $12,
        tahun = $2,
        judul = $14
      WHERE nip = $1
        AND exec_urut = $13
      RETURNING *;
    `;

            const values = [
                nip, tahun,
                file_link, user_update, time_update,
                status_edit, status_time, exec_edit, exec_time, exec_status,
                exec_alasan, exec_satker, exec_urut,
                judul,
            ];

            const { rows } = await db.query(updateQuery, values);
            if (!rows.length) {
                return res.status(404).send({ RC: "06", message: "No record updated, record not found" });
            }

            return res.status(200).send({ RC: "00", message: "Update PKG Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Update PKG Error", error });
        }
    },
    async deletePkgPkpEdit(req, res) {
        const { nip_baru, exec_urut } = req.body;

        try {
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            const deleteQuery = `
      DELETE FROM bpjph.tr_pkg_edit
      WHERE nip = $1 AND exec_urut = $2
      RETURNING *;
    `;
            const { rows } = await db.query(deleteQuery, [nip, exec_urut]);

            if (!rows.length) {
                return res.status(404).send({ RC: "06", message: "No record deleted, record not found" });
            }

            return res.status(200).send({ RC: "00", message: "Delete PKG Edit Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Delete PKG Edit Error", error });
        }
    },

    async getPenugasan(req, res) {
        const { nip_baru } = req.query;

        const readQuery = `
        select a.* from bpjph.tr_tugas a
        left join bpjph.tm_pegawai b on a.nip=b.nip
        WHERE b.nip_baru = $1
        `;

        try {
            const { rows, rowCount } = await db.query(readQuery, [nip_baru]);
            if (!rowCount) {
                return res.status(404).send({ RC: "05", message: "Data Not Found" });
            }
            return res.status(200).send({ RC: "00", message: "Success", data: rows });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Error", error });
        }
    },
    async postPenugasan(req, res) {
        const {
            nip_baru,
            tahun,
            file_tugas,
            user_add,
            time_add,
            user_update,
            time_update,
            judul_tugas,
            link_tugas,
        } = req.body;

        try {
            // Resolve nip
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            // Get latest no_urut
            const urutQuery = `
        SELECT no_urut
        FROM bpjph.tr_tugas
        WHERE nip = $1 AND tahun = $2
        ORDER BY no_urut DESC
        LIMIT 1
      `;
            const urutResult = await db.query(urutQuery, [nip, tahun]);

            let no_urut = 1;
            if (urutResult.rowCount) {
                no_urut = parseInt(urutResult.rows[0].no_urut) + 1;
            }

            const insertQuery = `
        INSERT INTO bpjph.tr_tugas
        (nip, tahun, file_tugas, user_add, time_add, user_update, time_update, judul_tugas, link_tugas, no_urut)
        VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)
        RETURNING *;
      `;

            const values = [
                nip, tahun, file_tugas,
                user_add, time_add, user_update, time_update,
                judul_tugas, link_tugas, no_urut,
            ];

            const { rows } = await db.query(insertQuery, values);
            return res.status(201).send({ RC: "00", message: "Insert Penugasan Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Insert Penugasan Error", error });
        }
    },
    async putPenugasan(req, res) {
        const {
            nip_baru,
            tahun,
            file_tugas,
            user_update,
            time_update,
            judul_tugas,
            link_tugas,
            no_urut,
        } = req.body;

        try {
            // Resolve nip
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            const updateQuery = `
        UPDATE bpjph.tr_tugas
        SET
          file_tugas = $3,
          user_update = $4,
          time_update = $5,
          judul_tugas = $6,
          link_tugas = $7
        WHERE nip = $1
          AND tahun = $2
          AND no_urut = $8
        RETURNING *;
      `;

            const values = [
                nip, tahun,
                file_tugas, user_update, time_update,
                judul_tugas, link_tugas, no_urut,
            ];

            const { rows } = await db.query(updateQuery, values);
            if (!rows.length) {
                return res.status(404).send({ RC: "06", message: "No record updated, record not found" });
            }

            return res.status(200).send({ RC: "00", message: "Update Penugasan Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Update Penugasan Error", error });
        }
    },
    async deletePenugasan(req, res) {
        const { nip_baru, tahun, no_urut } = req.body;

        try {
            // Resolve nip
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            const deleteQuery = `
        DELETE FROM bpjph.tr_tugas
        WHERE nip = $1 AND tahun = $2 AND no_urut = $3
        RETURNING *;
      `;

            const { rows } = await db.query(deleteQuery, [nip, tahun, no_urut]);
            if (!rows.length) {
                return res.status(404).send({ RC: "06", message: "No record deleted, record not found" });
            }

            return res.status(200).send({ RC: "00", message: "Delete Penugasan Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Delete Penugasan Error", error });
        }
    },
    async getPenugasanEdit(req, res) {
        const { nip_baru } = req.query;

        const readQuery = `
        select a.* from bpjph.tr_tugas_edit a
        left join bpjph.tm_pegawai b on a.nip=b.nip
        WHERE b.nip_baru = $1
        `;

        try {
            const { rows, rowCount } = await db.query(readQuery, [nip_baru]);
            if (!rowCount) {
                return res.status(404).send({ RC: "05", message: "Data Not Found" });
            }
            return res.status(200).send({ RC: "00", message: "Success", data: rows });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Error", error });
        }
    },
    async postPenugasanEdit(req, res) {
        const {
            nip_baru,
            tahun,
            file_tugas,
            user_add,
            time_add, user_update, time_update,
            status_edit,
            status_time,
            exec_edit,
            exec_time,
            exec_status,
            exec_alasan,
            exec_satker,
            judul_tugas,
            link_tugas,
            no_urut
        } = req.body;

        try {
            // Resolve nip
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            const execUrutQuery = `SELECT exec_urut FROM bpjph.tr_tugas_edit WHERE nip = $1 order by exec_urut desc LIMIT 1`;
            const execUrutResult = await db.query(execUrutQuery, [nip]);
            let m_no_urut = 0;
            let exec_urut = 0;
            if (execUrutResult.rowCount) {
                exec_urut = parseInt(execUrutResult.rows[0].exec_urut) + 1;
            }
            if (no_urut) {
                m_no_urut = no_urut;
            }

            const insertQuery = `
      INSERT INTO bpjph.tr_tugas_edit
      (nip, tahun, file_tugas,
       user_add, time_add, user_update, time_update,
       status_edit, status_time, exec_edit, exec_time, exec_status,
       exec_urut, exec_alasan, exec_satker, judul_tugas, link_tugas, no_urut)
      VALUES
      ($1,$2,$3,
       $4,$5,$6,$7,
       $8,$9,$10,$11,$12,
       $13,$14,$15,$16,$17,$18)
      RETURNING *;
    `;

            const values = [
                nip, tahun, file_tugas,
                user_add, time_add, user_update, time_update, // user_update = user_add, time_update = time_add on insert
                status_edit, status_time, exec_edit, exec_time, exec_status,
                exec_urut, exec_alasan, exec_satker, judul_tugas, link_tugas, m_no_urut,
            ];

            const { rows } = await db.query(insertQuery, values);
            return res.status(201).send({ RC: "00", message: "Insert Tugas Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Insert Tugas Error", error });
        }
    },
    async putPenugasanEdit(req, res) {
        const {
            nip_baru,
            tahun,
            file_tugas,
            user_update,
            time_update,
            status_edit,
            status_time,
            exec_edit,
            exec_time,
            exec_status,
            exec_alasan,
            exec_satker,
            exec_urut,
            judul_tugas,
            link_tugas,
        } = req.body;

        try {
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            const updateQuery = `
      UPDATE bpjph.tr_tugas_edit
      SET
        file_tugas = $3,
        user_update = $4,
        time_update = $5,
        status_edit = $6,
        status_time = $7,
        exec_edit = $8,
        exec_time = $9,
        exec_status = $10,
        exec_alasan = $11,
        exec_satker = $12,
        tahun = $2,
        judul_tugas = $14,
        link_tugas = $15
      WHERE nip = $1
        AND exec_urut = $13
      RETURNING *;
    `;

            const values = [
                nip, tahun,
                file_tugas, user_update, time_update,
                status_edit, status_time, exec_edit, exec_time, exec_status,
                exec_alasan, exec_satker, exec_urut, judul_tugas, link_tugas,
            ];

            const { rows } = await db.query(updateQuery, values);
            if (!rows.length) {
                return res.status(404).send({ RC: "06", message: "No record updated, record not found" });
            }

            return res.status(200).send({ RC: "00", message: "Update Tugas Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Update Tugas Error", error });
        }
    },
    async deletePenugasanEdit(req, res) {
        const { nip_baru, exec_urut } = req.body;

        try {
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            const deleteQuery = `
      DELETE FROM bpjph.tr_tugas_edit
      WHERE nip = $1 AND exec_urut = $2
      RETURNING *;
    `;
            const { rows } = await db.query(deleteQuery, [nip, exec_urut]);

            if (!rows.length) {
                return res.status(404).send({ RC: "06", message: "No record deleted, record not found" });
            }

            return res.status(200).send({ RC: "00", message: "Delete Tugas Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Delete Tugas Error", error });
        }
    },

    async getDataPegawai(req, res) {
        const { nip_baru } = req.query;

        const readQuery = `
        select a.* from bpjph.vwdata_pegawai_new a
        left join bpjph.tm_pegawai b on a.nip=b.nip
        WHERE b.nip_baru = $1 limit 1
        `;

        try {
            const { rows, rowCount } = await db.query(readQuery, [nip_baru]);
            if (!rowCount) {
                return res.status(404).send({ RC: "05", message: "Data Not Found" });
            }
            return res.status(200).send({ RC: "00", message: "Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Error", error });
        }
    },

    async getDataPegawaiFull(req, res) {
        const { nip_baru } = req.query;
        const readQuery = `
    select
    A.*,
	A.mutasi as status_pegawai,
    BERKAS.almari || ' Nomor ' || BERKAS.nomor as no_berkas,
    JENKEL.jen_kel,
    ALAMAT.*,
	case
		when A.kode_status_pegawai <> '3'
       then HA.gol_ruang
		else HA.gol_pppk
	end || ' ' || A.pangkat || ' ( TMT ' || TO_CHAR(A.tmt_sk_gol,
	'DD Mon YYYY') || ' )' as gol_ruang,
	A.jabatan || ' ( TMT ' || TO_CHAR(A.tmt_sk_jab,
	'DD Mon YYYY') || ' )' as jabatan,
	A.jenjang_pendidikan || ' ' || A.jurusan || ' Tahun ' || A.tahun_lulus as pendidikan,
	TO_CHAR(l.tmt_sk - interval '1 year',
	'DD Mon YYYY') as tmt_cpns,
	TO_CHAR(l.tmt_sk,
	'DD Mon YYYY') as tmt_pns,
	case
		when A.kode_tipe_jabatan = '2' then TO_CHAR(A.tmt_sk_gol + interval '2 year',
		'DD Mon YYYY')
		else TO_CHAR(A.tmt_sk_gol + interval '4 year',
		'DD Mon YYYY')
	end as tmt_pangkat_yad,
	TO_CHAR((
	select
		case
			when A.kode_pangkat::int >= 30
                   then A.tmt
                        + interval '12 month' * (case
				when mod(A.mk_tahun_sk,
				2) <> 0 then 0
				else 1
			end)
                        + interval '1 month' * (case
				when A.mk_bulan_sk <> 0 then 12 - A.mk_bulan_sk
				else 12
			end)
			else A.tmt
                        + interval '12 month' * (case
				when mod(A.mk_tahun_sk,
				2) = 0 then 0
				else 1
			end)
                        + interval '1 month' * (case
				when A.mk_bulan_sk <> 0 then 12 - A.mk_bulan_sk
				else 12
			end)
		end),
	'DD Mon YYYY') as tmt_kgb_yad,
	extract(year
from
	AGE(NOW(),
	l.tmt_sk - interval '1 year')) || ' Tahun ' ||
       extract(month
from
	AGE(NOW(),
	l.tmt_sk - interval '1 year')) || ' Bulan' as masa_kerja,
	TO_CHAR(A.tmt_pensiun,
	'DD Mon YYYY') || ' ( umur pensiun : ' || A.usia_pensiun || ' )' as pensiun,
	A.keterangan as satuan_kerja
from
	bpjph.vwdata_pegawai_new A
left join (
	select
		nip,
		no_urut,
		kode_pangkat,
		no_sk,
		tgl_sk,
		tmt_sk,
		mk_tahun,
		mk_bulan,
		keterangan,
		user_add,
		time_add,
		user_update,
		time_update,
		jenis_sk,
		penandatangan,
		dasar_hukum,
		gaji_pokok,
		start_date,
		end_date
	from
		bpjph.tr_pangkat
) H
  on
	A.nip = H.nip
	and A.no_urut_pangkat = H.no_urut
left join bpjph.tm_pangkat HA on
	H.kode_pangkat = HA.kode_pangkat
left join(
	select
		nip,
		tmt_sk
	from
		bpjph.tr_pangkat
	where
		jenis_sk = 'JP002'
        ) l on
	l.nip = A.nip
left join bpjph.td_takah BERKAS on a.nip=BERKAS.nip
left join bpjph.tm_jenis_kelamin JENKEL on a.jenis_kelamin=JENKEL.jenis_kelamin
left join bpjph.td_alamat ALAMAT on a.nip=ALAMAT.nip
where
	A.nip_baru = $1`;
        try {
            const { rows, rowCount } = await db.query(readQuery, [nip_baru]);
            if (!rowCount) {
                return res.status(404).send({ 'RC': '05', 'message': 'Data Not Found' });
            }
            return res.status(200).send({ 'RC': '00', 'message': 'Success', 'data': rows[0] });
        } catch (error) {
            return res.status(400).send({ 'RC': '99', 'message': 'Error', error });
        }
    },

    async getKetDiri(req, res) {
        const { nip_baru } = req.query;
        const readQuery = `SELECT a.* FROM bpjph.td_pegawai_lain a 
        left join bpjph.tm_pegawai b on a.nip=b.nip
        WHERE b.nip_baru = $1 limit 1
        `;
        try {
            const { rows, rowCount } = await db.query(readQuery, [nip_baru]);
            if (!rowCount) {
                return res.status(404).send({ 'RC': '05', 'message': 'Data Not Found' });
            }
            return res.status(200).send({ 'RC': '00', 'message': 'Success', 'data': rows[0] });
        } catch (error) {
            return res.status(400).send({ 'RC': '99', 'message': 'Error', error });
        }
    },
    async putKetDiri(req, res) {
        const {
            nip_baru,
            tinggi_badan,
            berat_badan,
            rambut,
            bentuk_muka,
            warna_kulit,
            ciri_ciri,
            cacat_tubuh,
            hobby,
        } = req.body;

        try {
            // Step 1: Translate nip_baru -> nip
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);

            if (!nipResult.rowCount) {
                return res.status(404).send({
                    RC: "05",
                    message: "NIP not found for provided nip_baru",
                });
            }

            const nip = nipResult.rows[0].nip;

            // Step 2: Upsert into td_pegawai_lain
            const upsertQuery = `
      INSERT INTO bpjph.td_pegawai_lain (
        nip, tinggi_badan, berat_badan, rambut,
        bentuk_muka, warna_kulit, ciri_ciri,
        cacat_tubuh, hobby
      )
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)
      ON CONFLICT (nip)
      DO UPDATE SET
        tinggi_badan = EXCLUDED.tinggi_badan,
        berat_badan = EXCLUDED.berat_badan,
        rambut = EXCLUDED.rambut,
        bentuk_muka = EXCLUDED.bentuk_muka,
        warna_kulit = EXCLUDED.warna_kulit,
        ciri_ciri = EXCLUDED.ciri_ciri,
        cacat_tubuh = EXCLUDED.cacat_tubuh,
        hobby = EXCLUDED.hobby
      RETURNING *;
    `;

            const values = [
                nip,
                tinggi_badan,
                berat_badan,
                rambut,
                bentuk_muka,
                warna_kulit,
                ciri_ciri,
                cacat_tubuh,
                hobby,
            ];

            const { rows } = await db.query(upsertQuery, values);

            return res.status(200).send({
                RC: "00",
                message: "Upsert Pegawai Lain Success",
                data: rows[0],
            });
        } catch (error) {
            return res.status(400).send({
                RC: "99",
                message: "Upsert Pegawai Lain Error",
                error: error.message,
            });
        }
    },

    async getCltn(req, res) {
        const { nip_baru } = req.query;

        const readQuery = `
        SELECT a.*
        FROM bpjph.tr_cltn a
        LEFT JOIN bpjph.tm_pegawai b ON a.nip = b.nip
        WHERE b.nip_baru = $1
        ORDER BY a.no_urut ASC
    `;

        try {
            const { rows, rowCount } = await db.query(readQuery, [nip_baru]);
            if (!rowCount) {
                return res.status(404).send({ RC: "05", message: "Data Not Found" });
            }
            return res.status(200).send({ RC: "00", message: "Success", data: rows });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Error", error });
        }
    },
    async postCltn(req, res) {
        const {
            nip_baru,
            no_sk_cltn,
            tgl_cltn,
            startdate_cltn,
            enddate_cltn,
            alasan_cltn,
            file_sk,
            user_add,
            time_add,
        } = req.body;

        try {
            // Resolve nip
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            // Get next no_urut
            const urutQuery = `
            SELECT no_urut
            FROM bpjph.tr_cltn
            WHERE nip = $1
            ORDER BY no_urut DESC
            LIMIT 1
        `;
            const urutResult = await db.query(urutQuery, [nip]);
            let no_urut = 1;
            if (urutResult.rowCount) {
                no_urut = parseInt(urutResult.rows[0].no_urut) + 1;
            }

            const insertQuery = `
            INSERT INTO bpjph.tr_cltn
            (nip, no_urut, no_sk_cltn, tgl_cltn, startdate_cltn, enddate_cltn,
             alasan_cltn, file_sk, user_add, time_add, user_update, time_update)
            VALUES
            ($1,$2,$3,$4,$5,$6,
             $7,$8,$9,$10,$9,$10)
            RETURNING *;
        `;

            const values = [
                nip, no_urut, no_sk_cltn, tgl_cltn, startdate_cltn, enddate_cltn,
                alasan_cltn, file_sk, user_add, time_add,
            ];

            const { rows } = await db.query(insertQuery, values);
            return res.status(201).send({ RC: "00", message: "Insert CLTN Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Insert CLTN Error", error });
        }
    },
    async putCltn(req, res) {
        const {
            nip_baru,
            no_urut,
            no_sk_cltn,
            tgl_cltn,
            startdate_cltn,
            enddate_cltn,
            alasan_cltn,
            file_sk,
            user_update,
            time_update,
        } = req.body;

        try {
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            const updateQuery = `
            UPDATE bpjph.tr_cltn
            SET
                no_sk_cltn = $3,
                tgl_cltn = $4,
                startdate_cltn = $5,
                enddate_cltn = $6,
                alasan_cltn = $7,
                file_sk = $8,
                user_update = $9,
                time_update = $10
            WHERE nip = $1
              AND no_urut = $2
            RETURNING *;
        `;

            const values = [
                nip, no_urut,
                no_sk_cltn, tgl_cltn, startdate_cltn, enddate_cltn,
                alasan_cltn, file_sk, user_update, time_update,
            ];

            const { rows } = await db.query(updateQuery, values);
            if (!rows.length) {
                return res.status(404).send({ RC: "06", message: "No record updated, record not found" });
            }

            return res.status(200).send({ RC: "00", message: "Update CLTN Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Update CLTN Error", error });
        }
    },
    async deleteCltn(req, res) {
        const { nip_baru, no_urut } = req.body;

        try {
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            const deleteQuery = `
            DELETE FROM bpjph.tr_cltn
            WHERE nip = $1
              AND no_urut = $2
            RETURNING *;
        `;
            const { rows } = await db.query(deleteQuery, [nip, no_urut]);

            if (!rows.length) {
                return res.status(404).send({ RC: "06", message: "No record deleted, record not found" });
            }

            return res.status(200).send({ RC: "00", message: "Delete CLTN Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Delete CLTN Error", error });
        }
    },

    async getKeluarga(req, res) {
        const { nip_baru } = req.query;

        const readQuery = `
        SELECT a.*,c.jen_kel
        FROM bpjph.td_keluarga a
        LEFT JOIN bpjph.tm_pegawai b ON a.nip = b.nip
        LEFT JOIN bpjph.tm_jenis_kelamin c on a.jenis_kelamin=c.jenis_kelamin
        WHERE b.nip_baru = $1
        ORDER BY a.no_urut ASC
    `;

        try {
            const { rows, rowCount } = await db.query(readQuery, [nip_baru]);
            if (!rowCount) {
                return res.status(404).send({ RC: "05", message: "Data Not Found" });
            }
            return res.status(200).send({ RC: "00", message: "Success", data: rows });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Error", error });
        }
    },
    async postKeluarga(req, res) {
        const {
            nip_baru,
            nama,
            jenis_kelamin,
            tgl_lahir,
            keterangan,
            pekerjaan,
            jenis_keluarga,
            file_keluarga,
            link_keluarga,
            user_add,
            time_add,
        } = req.body;

        try {
            // Resolve nip
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            // Get next no_urut
            const urutQuery = `
            SELECT no_urut
            FROM bpjph.td_keluarga
            WHERE nip = $1
            ORDER BY no_urut DESC
            LIMIT 1
        `;
            const urutResult = await db.query(urutQuery, [nip]);
            let no_urut = 1;
            if (urutResult.rowCount) {
                no_urut = parseInt(urutResult.rows[0].no_urut) + 1;
            }

            const insertQuery = `
            INSERT INTO bpjph.td_keluarga
            (nip, no_urut, nama, jenis_kelamin, tgl_lahir, keterangan,
             pekerjaan, jenis_keluarga, file_keluarga, link_keluarga,
             user_add, time_add, user_update, time_update)
            VALUES
            ($1,$2,$3,$4,$5,$6,
             $7,$8,$9,$10,
             $11,$12,$11,$12)
            RETURNING *;
        `;

            const values = [
                nip, no_urut, nama, jenis_kelamin, tgl_lahir, keterangan,
                pekerjaan, jenis_keluarga, file_keluarga, link_keluarga,
                user_add, time_add,
            ];

            const { rows } = await db.query(insertQuery, values);
            return res.status(201).send({ RC: "00", message: "Insert Keluarga Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Insert Keluarga Error", error });
        }
    },
    async putKeluarga(req, res) {
        const {
            nip_baru,
            no_urut,
            nama,
            jenis_kelamin,
            tgl_lahir,
            keterangan,
            pekerjaan,
            jenis_keluarga,
            file_keluarga,
            link_keluarga,
            user_update,
            time_update,
        } = req.body;

        try {
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            const updateQuery = `
            UPDATE bpjph.td_keluarga
            SET
                nama = $3,
                jenis_kelamin = $4,
                tgl_lahir = $5,
                keterangan = $6,
                pekerjaan = $7,
                jenis_keluarga = $8,
                file_keluarga = $9,
                link_keluarga = $10,
                user_update = $11,
                time_update = $12
            WHERE nip = $1
              AND no_urut = $2
            RETURNING *;
        `;

            const values = [
                nip, no_urut,
                nama, jenis_kelamin, tgl_lahir, keterangan,
                pekerjaan, jenis_keluarga, file_keluarga, link_keluarga,
                user_update, time_update,
            ];

            const { rows } = await db.query(updateQuery, values);
            if (!rows.length) {
                return res.status(404).send({ RC: "06", message: "No record updated, record not found" });
            }

            return res.status(200).send({ RC: "00", message: "Update Keluarga Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Update Keluarga Error", error });
        }
    },
    async deleteKeluarga(req, res) {
        const { nip_baru, no_urut } = req.body;

        try {
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            const deleteQuery = `
            DELETE FROM bpjph.td_keluarga
            WHERE nip = $1
              AND no_urut = $2
            RETURNING *;
        `;
            const { rows } = await db.query(deleteQuery, [nip, no_urut]);

            if (!rows.length) {
                return res.status(404).send({ RC: "06", message: "No record deleted, record not found" });
            }

            return res.status(200).send({ RC: "00", message: "Delete Keluarga Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Delete Keluarga Error", error });
        }
    },

    async getIndisipliner(req, res) {
        const { nip_baru } = req.query;

        const readQuery = `
        SELECT a.*,c.jenis_hukuman,d.tingkat_hukuman,e.ref_desc1,f.pangkat,f.gol_ruang,f.gol_pppk
        FROM bpjph.tr_indisipliner a
        LEFT JOIN bpjph.tm_pegawai b ON a.nip = b.nip
        LEFT JOIN bpjph.tm_jenis_hukuman c ON a.kode_jenis_hukuman = c.kode_jenis_hukuman
        LEFT JOIN bpjph.tm_tingkat_hukuman d ON a.kode_tingkat_hukuman = d.kode_tingkat_hukuman
        LEFT JOIN bpjph.TM_REF e ON a.peraturan = e.REF_ID
        LEFT JOIN bpjph.tm_pangkat f ON a.gol_ruang = f.kode_pangkat
        WHERE b.nip_baru = $1
        ORDER BY a.no_urut ASC
    `;

        try {
            const { rows, rowCount } = await db.query(readQuery, [nip_baru]);
            if (!rowCount) {
                return res.status(404).send({ RC: "05", message: "Data Not Found" });
            }
            return res.status(200).send({ RC: "00", message: "Success", data: rows });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Error", error });
        }
    },
    async postIndisipliner(req, res) {
        const {
            nip_baru,
            kode_jenis_hukuman,
            kode_tingkat_hukuman,
            no_sk,
            tgl_sk,
            tmt_sk,
            keterangan,
            gol_ruang,
            jabatan,
            tgl_sidang,
            masa_berlaku,
            peraturan,
            file_sk,
            user_add,
            time_add,
        } = req.body;

        try {
            // resolve nip
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            // get next no_urut
            const urutQuery = `
                SELECT no_urut
                FROM bpjph.tr_indisipliner
                WHERE nip = $1
                ORDER BY no_urut DESC
                LIMIT 1
            `;
            const urutResult = await db.query(urutQuery, [nip]);
            let no_urut = 1;
            if (urutResult.rowCount) {
                no_urut = parseInt(urutResult.rows[0].no_urut) + 1;
            }

            const insertQuery = `
                INSERT INTO bpjph.tr_indisipliner
                (nip, no_urut, kode_jenis_hukuman, kode_tingkat_hukuman, no_sk, tgl_sk, tmt_sk,
                 keterangan, gol_ruang, jabatan, tgl_sidang, masa_berlaku, peraturan,
                 file_sk, user_add, time_add, user_update, time_update)
                VALUES
                ($1,$2,$3,$4,$5,$6,$7,
                 $8,$9,$10,$11,$12,$13,
                 $14,$15,$16,$15,$16)
                RETURNING *;
            `;

            const values = [
                nip, no_urut, kode_jenis_hukuman, kode_tingkat_hukuman, no_sk, tgl_sk, tmt_sk,
                keterangan, gol_ruang, jabatan, tgl_sidang, masa_berlaku, peraturan,
                file_sk, user_add, time_add,
            ];

            const { rows } = await db.query(insertQuery, values);
            return res.status(201).send({ RC: "00", message: "Insert Indisipliner Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Insert Indisipliner Error", error });
        }
    },
    async putIndisipliner(req, res) {
        const {
            nip_baru,
            no_urut,
            kode_jenis_hukuman,
            kode_tingkat_hukuman,
            no_sk,
            tgl_sk,
            tmt_sk,
            keterangan,
            gol_ruang,
            jabatan,
            tgl_sidang,
            masa_berlaku,
            peraturan,
            file_sk,
            user_update,
            time_update,
        } = req.body;

        try {
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            const updateQuery = `
                UPDATE bpjph.tr_indisipliner
                SET
                    kode_jenis_hukuman = $3,
                    kode_tingkat_hukuman = $4,
                    no_sk = $5,
                    tgl_sk = $6,
                    tmt_sk = $7,
                    keterangan = $8,
                    gol_ruang = $9,
                    jabatan = $10,
                    tgl_sidang = $11,
                    masa_berlaku = $12,
                    peraturan = $13,
                    file_sk = $14,
                    user_update = $15,
                    time_update = $16
                WHERE nip = $1
                  AND no_urut = $2
                RETURNING *;
            `;

            const values = [
                nip, no_urut,
                kode_jenis_hukuman, kode_tingkat_hukuman, no_sk, tgl_sk, tmt_sk,
                keterangan, gol_ruang, jabatan, tgl_sidang, masa_berlaku, peraturan,
                file_sk, user_update, time_update,
            ];

            const { rows } = await db.query(updateQuery, values);
            if (!rows.length) {
                return res.status(404).send({ RC: "06", message: "No record updated, record not found" });
            }

            return res.status(200).send({ RC: "00", message: "Update Indisipliner Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Update Indisipliner Error", error });
        }
    },
    async deleteIndisipliner(req, res) {
        const { nip_baru, no_urut } = req.body;

        try {
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            const deleteQuery = `
                DELETE FROM bpjph.tr_indisipliner
                WHERE nip = $1
                  AND no_urut = $2
                RETURNING *;
            `;
            const { rows } = await db.query(deleteQuery, [nip, no_urut]);

            if (!rows.length) {
                return res.status(404).send({ RC: "06", message: "No record deleted, record not found" });
            }

            return res.status(200).send({ RC: "00", message: "Delete Indisipliner Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Delete Indisipliner Error", error });
        }
    },

    async getPenelitian(req, res) {
        const { nip_baru } = req.query;

        const readQuery = `
        SELECT a.*
        FROM bpjph.tr_penelitian a
        LEFT JOIN bpjph.tm_pegawai b ON a.nip = b.nip
        WHERE b.nip_baru = $1
        ORDER BY a.no_urut ASC
    `;

        try {
            const { rows, rowCount } = await db.query(readQuery, [nip_baru]);
            if (!rowCount) {
                return res.status(404).send({ RC: "05", message: "Data Not Found" });
            }
            return res.status(200).send({ RC: "00", message: "Success", data: rows });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Error", error });
        }
    },
    async postPenelitian(req, res) {
        const {
            nip_baru,
            tahun,
            judul_penelitian,
            jabatan,
            sumber_dana,
            file_penelitian,
            link_penelitian,
            user_add,
            time_add,
        } = req.body;

        try {
            // Resolve nip
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            // Get next no_urut
            const urutQuery = `
                SELECT no_urut
                FROM bpjph.tr_penelitian
                WHERE nip = $1
                ORDER BY no_urut DESC
                LIMIT 1
            `;
            const urutResult = await db.query(urutQuery, [nip]);
            let no_urut = 1;
            if (urutResult.rowCount) {
                no_urut = parseInt(urutResult.rows[0].no_urut) + 1;
            }

            // Insert new record
            const insertQuery = `
                INSERT INTO bpjph.tr_penelitian
                (nip, no_urut, tahun, judul_penelitian, jabatan, sumber_dana,
                 file_penelitian, link_penelitian,
                 user_add, time_add, user_update, time_update)
                VALUES
                ($1,$2,$3,$4,$5,$6,
                 $7,$8,
                 $9,$10,$9,$10)
                RETURNING *;
            `;

            const values = [
                nip, no_urut, tahun, judul_penelitian, jabatan, sumber_dana,
                file_penelitian, link_penelitian,
                user_add, time_add,
            ];

            const { rows } = await db.query(insertQuery, values);
            return res.status(201).send({ RC: "00", message: "Insert Penelitian Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Insert Penelitian Error", error });
        }
    },
    async putPenelitian(req, res) {
        const {
            nip_baru,
            no_urut,
            tahun,
            judul_penelitian,
            jabatan,
            sumber_dana,
            file_penelitian,
            link_penelitian,
            user_update,
            time_update,
        } = req.body;

        try {
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            const updateQuery = `
                UPDATE bpjph.tr_penelitian
                SET
                    tahun = $3,
                    judul_penelitian = $4,
                    jabatan = $5,
                    sumber_dana = $6,
                    file_penelitian = $7,
                    link_penelitian = $8,
                    user_update = $9,
                    time_update = $10
                WHERE nip = $1
                  AND no_urut = $2
                RETURNING *;
            `;

            const values = [
                nip, no_urut,
                tahun, judul_penelitian, jabatan, sumber_dana,
                file_penelitian, link_penelitian,
                user_update, time_update,
            ];

            const { rows } = await db.query(updateQuery, values);
            if (!rows.length) {
                return res.status(404).send({ RC: "06", message: "No record updated, record not found" });
            }

            return res.status(200).send({ RC: "00", message: "Update Penelitian Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Update Penelitian Error", error });
        }
    },
    async deletePenelitian(req, res) {
        const { nip_baru, no_urut } = req.body;

        try {
            const nipQuery = `SELECT nip FROM bpjph.tm_pegawai WHERE nip_baru = $1 LIMIT 1`;
            const nipResult = await db.query(nipQuery, [nip_baru]);
            if (!nipResult.rowCount) {
                return res.status(404).send({ RC: "05", message: "NIP not found for provided nip_baru" });
            }
            const nip = nipResult.rows[0].nip;

            const deleteQuery = `
                DELETE FROM bpjph.tr_penelitian
                WHERE nip = $1
                  AND no_urut = $2
                RETURNING *;
            `;
            const { rows } = await db.query(deleteQuery, [nip, no_urut]);

            if (!rows.length) {
                return res.status(404).send({ RC: "06", message: "No record deleted, record not found" });
            }

            return res.status(200).send({ RC: "00", message: "Delete Penelitian Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Delete Penelitian Error", error });
        }
    },

    async getListVerifPegawai(req, res) {
        // const { nip_baru } = req.query;

        const readQuery = `
            SELECT 
                p.nip_baru,
                p.nama,
                p.gbn,
                (SELECT COUNT(*) FROM bpjph.td_suami_istri_edit si WHERE si.nip = p.nip AND si.exec_status = 'TUNGGU') AS SI,
                (SELECT COUNT(*) FROM bpjph.td_anak_edit an WHERE an.nip = p.nip AND an.exec_status = 'TUNGGU') AS AN,
                (SELECT COUNT(*) FROM bpjph.tr_pendidikan_edit pd WHERE pd.nip = p.nip AND pd.exec_status = 'TUNGGU') AS PD,
                (SELECT COUNT(*) FROM bpjph.tr_diklat_edit dk WHERE dk.nip = p.nip AND dk.exec_status = 'TUNGGU') AS DK,
                (SELECT COUNT(*) FROM bpjph.tr_pangkat_edit pg WHERE pg.nip = p.nip AND pg.exec_status = 'TUNGGU') AS PK,
                (SELECT COUNT(*) FROM bpjph.tr_jabatan_edit jb WHERE jb.nip = p.nip AND jb.exec_status = 'TUNGGU') AS JB,
                (SELECT COUNT(*) FROM bpjph.tr_pak_edit pk WHERE pk.nip = p.nip AND pk.exec_status = 'TUNGGU') AS PA,
                (SELECT COUNT(*) FROM bpjph.tr_penghargaan_edit ph WHERE ph.nip = p.nip AND ph.exec_status = 'TUNGGU') AS TJ,
                (SELECT COUNT(*) FROM bpjph.tr_pengalaman_edit pe WHERE pe.nip = p.nip AND pe.exec_status = 'TUNGGU') AS PG,
                (SELECT COUNT(*) FROM bpjph.tr_organisasi_edit orz WHERE orz.nip = p.nip AND orz.exec_status = 'TUNGGU') AS OR,
                (SELECT COUNT(*) FROM bpjph.tr_karya_ilmiah_edit kt WHERE kt.nip = p.nip AND kt.exec_status = 'TUNGGU') AS KT,
                (SELECT COUNT(*) FROM bpjph.tr_sertifikasi_edit st WHERE st.nip = p.nip AND st.exec_status = 'TUNGGU') AS SR,
                (SELECT COUNT(*) FROM bpjph.tr_kgb_edit kg WHERE kg.nip = p.nip AND kg.exec_status = 'TUNGGU') AS KG,
                (SELECT COUNT(*) FROM bpjph.tr_skp_edit sk WHERE sk.nip = p.nip AND sk.exec_status = 'TUNGGU') AS SK,
                (SELECT COUNT(*) FROM bpjph.tr_pkg_edit pp WHERE pp.nip = p.nip AND pp.exec_status = 'TUNGGU') AS PP,
                (SELECT COUNT(*) FROM bpjph.tr_tugas_edit ps WHERE ps.nip = p.nip AND ps.exec_status = 'TUNGGU') AS PN
            FROM bpjph.tm_pegawai p;
        `;

        try {
            const { rows, rowCount } = await db.query(readQuery);
            if (!rowCount) {
                return res.status(404).send({ RC: "05", message: "Data Not Found" });
            }
            return res.status(200).send({ RC: "00", message: "Success", data: rows });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Error", error });
        }
    },
    async getVerifPegawai(req, res) {
        const { nip_baru } = req.query;

        const readQuery = `
        SELECT 
            p.nip_baru,
            p.nama,
            p.gbn,
            (SELECT COUNT(*) FROM bpjph.td_suami_istri_edit si WHERE si.nip = p.nip AND si.exec_status = 'TUNGGU') AS SI,
            (SELECT COUNT(*) FROM bpjph.td_anak_edit an WHERE an.nip = p.nip AND an.exec_status = 'TUNGGU') AS AN,
            (SELECT COUNT(*) FROM bpjph.tr_pendidikan_edit pd WHERE pd.nip = p.nip AND pd.exec_status = 'TUNGGU') AS PD,
            (SELECT COUNT(*) FROM bpjph.tr_diklat_edit dk WHERE dk.nip = p.nip AND dk.exec_status = 'TUNGGU') AS DK,
            (SELECT COUNT(*) FROM bpjph.tr_pangkat_edit pg WHERE pg.nip = p.nip AND pg.exec_status = 'TUNGGU') AS PK,
            (SELECT COUNT(*) FROM bpjph.tr_jabatan_edit jb WHERE jb.nip = p.nip AND jb.exec_status = 'TUNGGU') AS JB,
            (SELECT COUNT(*) FROM bpjph.tr_pak_edit pk WHERE pk.nip = p.nip AND pk.exec_status = 'TUNGGU') AS PA,
            (SELECT COUNT(*) FROM bpjph.tr_penghargaan_edit ph WHERE ph.nip = p.nip AND ph.exec_status = 'TUNGGU') AS TJ,
            (SELECT COUNT(*) FROM bpjph.tr_pengalaman_edit pe WHERE pe.nip = p.nip AND pe.exec_status = 'TUNGGU') AS PG,
            (SELECT COUNT(*) FROM bpjph.tr_organisasi_edit orz WHERE orz.nip = p.nip AND orz.exec_status = 'TUNGGU') AS OR,
            (SELECT COUNT(*) FROM bpjph.tr_karya_ilmiah_edit kt WHERE kt.nip = p.nip AND kt.exec_status = 'TUNGGU') AS KT,
            (SELECT COUNT(*) FROM bpjph.tr_sertifikasi_edit st WHERE st.nip = p.nip AND st.exec_status = 'TUNGGU') AS SR,
            (SELECT COUNT(*) FROM bpjph.tr_kgb_edit kg WHERE kg.nip = p.nip AND kg.exec_status = 'TUNGGU') AS KG,
            (SELECT COUNT(*) FROM bpjph.tr_skp_edit sk WHERE sk.nip = p.nip AND sk.exec_status = 'TUNGGU') AS SK,
            (SELECT COUNT(*) FROM bpjph.tr_pkg_edit pp WHERE pp.nip = p.nip AND pp.exec_status = 'TUNGGU') AS PP,
            (SELECT COUNT(*) FROM bpjph.tr_tugas_edit ps WHERE ps.nip = p.nip AND ps.exec_status = 'TUNGGU') AS PN
        FROM bpjph.tm_pegawai p
        WHERE p.nip_baru = $1;
    `;

        try {
            const { rows, rowCount } = await db.query(readQuery, [nip_baru]);
            if (!rowCount) {
                return res.status(404).send({ RC: "05", message: "Data Not Found" });
            }
            return res.status(200).send({ RC: "00", message: "Success", data: rows[0] });
        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Error", error });
        }
    },

    // async verifSuamiIstri(req, res) {
    //     const { nip_baru, no_urut, action, alasan, user_update } = req.body;

    //     try {
    //         if (action === "insert") {
    //             await postSuamiIstri({ body: { nip_baru, ...req.body } }, res);
    //             await putSuamiIstriEdit({
    //                 body: { ...req.body, exec_status: "TERIMA", exec_edit: user_update, exec_time: new Date() }
    //             }, res);
    //         }

    //         if (action === "update") {
    //             await putSuamiIstri({ body: { nip_baru, no_urut, ...req.body } }, res);
    //             await putSuamiIstriEdit({
    //                 body: { ...req.body, exec_status: "TERIMA", exec_edit: user_update, exec_time: new Date() }
    //             }, res);
    //         }

    //         if (action === "delete") {
    //             await deleteSuamiIstri({ body: { nip_baru, no_urut } }, res);
    //             await putSuamiIstriEdit({
    //                 body: { nip_baru, no_urut, exec_status: "TERIMA", exec_edit: user_update, exec_time: new Date() }
    //             }, res);
    //         }

    //         if (action === "reject") {
    //             await putSuamiIstriEdit({
    //                 body: { nip_baru, no_urut, exec_status: "TOLAK", exec_alasan: alasan, exec_edit: user_update, exec_time: new Date() }
    //             }, res);
    //         }

    //         return res.status(200).send({ RC: "00", message: "Review processed" });

    //     } catch (error) {
    //         return res.status(400).send({ RC: "99", message: "Review error", error });
    //     }
    // },
    async verifTable(req, res) {
        const { table, action, alasan, user_update } = req.body;
        const tableControllers = {
            SuamiIstri: {
                post: Simpeg.postSuamiIstri,
                put: Simpeg.putSuamiIstri,
                delete: Simpeg.deleteSuamiIstri,
                putEdit: Simpeg.putSuamiIstriEdit,
            },
            Anak: {
                post: Simpeg.postAnak,
                put: Simpeg.putAnak,
                delete: Simpeg.deleteAnak,
                putEdit: Simpeg.putAnakEdit,
            },
            Pendidikan: {
                post: Simpeg.postPendidikan,
                put: Simpeg.putPendidikan,
                delete: Simpeg.deletePendidikan,
                putEdit: Simpeg.putPendidikanEdit,
            },
            Diklat: {
                post: Simpeg.postDiklat,
                put: Simpeg.putDiklat,
                delete: Simpeg.deleteDiklat,
                putEdit: Simpeg.putDiklatEdit,
            },
            Pangkat: {
                post: Simpeg.postPangkat,
                put: Simpeg.putPangkat,
                delete: Simpeg.deletePangkat,
                putEdit: Simpeg.putPangkatEdit,
            },
            Jabatan: {
                post: Simpeg.postJabatan,
                put: Simpeg.putJabatan,
                delete: Simpeg.deleteJabatan,
                putEdit: Simpeg.putJabatanEdit,
            },
            Pak: {
                post: Simpeg.postPak,
                put: Simpeg.putPak,
                delete: Simpeg.deletePak,
                putEdit: Simpeg.putPakEdit,
            },
            Penghargaan: {
                post: Simpeg.postPenghargaan,
                put: Simpeg.putPenghargaan,
                delete: Simpeg.deletePenghargaan,
                putEdit: Simpeg.putPenghargaanEdit,
            },
            Pengalaman: {
                post: Simpeg.postPengalaman,
                put: Simpeg.putPengalaman,
                delete: Simpeg.deletePengalaman,
                putEdit: Simpeg.putPengalamanEdit,
            },
            Organisasi: {
                post: Simpeg.postOrganisasi,
                put: Simpeg.putOrganisasi,
                delete: Simpeg.deleteOrganisasi,
                putEdit: Simpeg.putOrganisasiEdit,
            },
            KaryaTulis: {
                post: Simpeg.postKaryaTulis,
                put: Simpeg.putKaryaTulis,
                delete: Simpeg.deleteKaryaTulis,
                putEdit: Simpeg.putKaryaTulisEdit,
            },
            Sertifikasi: {
                post: Simpeg.postSertifikasi,
                put: Simpeg.putSertifikasi,
                delete: Simpeg.deleteSertifikasi,
                putEdit: Simpeg.putSertifikasiEdit,
            },
            Kgb: {
                post: Simpeg.postKgb,
                put: Simpeg.putKgb,
                delete: Simpeg.deleteKgb,
                putEdit: Simpeg.putKgbEdit,
            },
            Skp: {
                post: Simpeg.postSkp,
                put: Simpeg.putSkp,
                delete: Simpeg.deleteSkp,
                putEdit: Simpeg.putSkpEdit,
            },
            PkgPkp: {
                post: Simpeg.postPkgPkp,
                put: Simpeg.putPkgPkp,
                delete: Simpeg.deletePkgPkp,
                putEdit: Simpeg.putPkgPkpEdit,
            },
            Penugasan: {
                post: Simpeg.postPenugasan,
                put: Simpeg.putPenugasan,
                delete: Simpeg.deletePenugasan,
                putEdit: Simpeg.putPenugasanEdit,
            },

        };

        const ctrl = tableControllers[table];
        if (!ctrl) {
            return res.status(400).send({ RC: "99", message: `Unknown table: ${table}` });
        }

        try {
            if (action === "INSERT") {
                await ctrl.post({ body: req.body }, res);
                await ctrl.putEdit({ body: { ...req.body, exec_status: "TERIMA", exec_alasan: alasan, exec_edit: user_update, exec_time: new Date() } }, res);
            }

            if (action === "UPDATE") {
                await ctrl.put({ body: req.body }, res);
                await ctrl.putEdit({ body: { ...req.body, exec_status: "TERIMA", exec_alasan: alasan, exec_edit: user_update, exec_time: new Date() } }, res);
            }

            if (action === "DELETE") {
                await ctrl.delete({ body: req.body }, res);
                await ctrl.putEdit({ body: { ...req.body, exec_status: "TERIMA", exec_alasan: alasan, exec_edit: user_update, exec_time: new Date() } }, res);
            }

            if (action === "REJECT") {
                await ctrl.putEdit({ body: { ...req.body, exec_status: "TOLAK", exec_alasan: alasan, exec_edit: user_update, exec_time: new Date() } }, res);
            }

            return res.status(200).send({ RC: "00", message: "Review processed" });

        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Review error", error });
        }
    },
    async getStatAgama(req, res) {

        const { kode_satuan_kerja } = req.query;

        const readQuery = `
        SELECT a.*
        FROM bpjph.tm_satuan_kerja a
        WHERE a.kode_atasan = $1
    `;

        try {
            const { rows, rowCount } = await db.query(readQuery, [kode_satuan_kerja]);
            let resultRow = [];

            for (const element of rows) {
                const mReadQuery = `
        SELECT 
            (select satuan_kerja from bpjph.tm_satuan_kerja where kode_satuan_kerja=$1),
            COUNT(a.nip) as jumlah,
            COUNT(*) FILTER (WHERE a.kode_agama = '1') as islam,
            COUNT(*) FILTER (WHERE a.kode_agama = '2') as kristen,
            COUNT(*) FILTER (WHERE a.kode_agama = '3') as katolik,
            COUNT(*) FILTER (WHERE a.kode_agama = '4') as hindu,
            COUNT(*) FILTER (WHERE a.kode_agama = '5') as budha,
            COUNT(*) FILTER (WHERE a.kode_agama = '0' OR a.kode_agama IS NULL) as agama_lain
        FROM bpjph.vwdata_pegawai_new a
        WHERE a.kode_mutasi = '1' 
          AND (
            a.kode_satker_1 = $1 OR
            a.kode_satker_2 = $1 OR
            a.kode_satker_3 = $1 OR
            a.kode_satker_4 = $1 OR
            a.kode_satker_5 = $1
          );
    `;
                const { rows: mRows } = await db.query(mReadQuery, [element.kode_satuan_kerja]);
                resultRow.push(mRows[0]);
                console.log(mRows[0]);
            }

            if (resultRow.length === 0) {
                return res.status(404).send({ RC: "05", message: "Data Not Found" });
            }

            return res.status(200).send({ RC: "00", message: "Success", data: resultRow });

        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Error", error });
        }
        // SELECT 
        // 	(select satuan_kerja from tm_satuan_kerja where kode_satuan_kerja='01121103010000'),
        //     COUNT(a.nip) as jumlah,
        //     COUNT(*) FILTER (WHERE a.kode_agama = '1') as islam,
        //     COUNT(*) FILTER (WHERE a.kode_agama = '2') as kristen,
        //     COUNT(*) FILTER (WHERE a.kode_agama = '3') as katolik,
        //     COUNT(*) FILTER (WHERE a.kode_agama = '4') as hindu,
        //     COUNT(*) FILTER (WHERE a.kode_agama = '5') as budha,
        //     COUNT(*) FILTER (WHERE a.kode_agama = '0' OR a.kode_agama IS NULL) as agama_lain
        // FROM vwdata_pegawai_new a
        // WHERE a.kode_mutasi = '1' 
        //   AND 
        //  (a.kode_satker_1 = '01121103010000'
        // or a.kode_satker_2 = '01121103010000'
        // or a.kode_satker_3 = '01121103010000'
        // or a.kode_satker_4 = '01121103010000'
        // or a.kode_satker_5 = '01121103010000');
    },
    async getStatPangkat(req, res) {
        const { kode_satuan_kerja } = req.query;

        const readQuery = `
        SELECT a.*
        FROM bpjph.tm_satuan_kerja a
        WHERE a.kode_atasan = $1
    `;

        try {
            const { rows, rowCount } = await db.query(readQuery, [kode_satuan_kerja]);
            let resultRow = [];

            for (const element of rows) {
                const mReadQuery = `
                SELECT 
                    (SELECT satuan_kerja 
                     FROM bpjph.tm_satuan_kerja 
                     WHERE kode_satuan_kerja = $1) AS satuan_kerja,
                    COUNT(a.nip) AS jumlah,
                    COUNT(*) FILTER (WHERE a.kode_pangkat = '11') AS ia,
                    COUNT(*) FILTER (WHERE a.kode_pangkat = '12') AS ib,
                    COUNT(*) FILTER (WHERE a.kode_pangkat = '13') AS ic,
                    COUNT(*) FILTER (WHERE a.kode_pangkat = '14') AS id,
                    COUNT(*) FILTER (WHERE a.kode_pangkat = '21') AS iia,
                    COUNT(*) FILTER (WHERE a.kode_pangkat = '22') AS iib,
                    COUNT(*) FILTER (WHERE a.kode_pangkat = '23') AS iic,
                    COUNT(*) FILTER (WHERE a.kode_pangkat = '24') AS iid,
                    COUNT(*) FILTER (WHERE a.kode_pangkat = '31') AS iiia,
                    COUNT(*) FILTER (WHERE a.kode_pangkat = '32') AS iiib,
                    COUNT(*) FILTER (WHERE a.kode_pangkat = '33') AS iiic,
                    COUNT(*) FILTER (WHERE a.kode_pangkat = '34') AS iiid,
                    COUNT(*) FILTER (WHERE a.kode_pangkat = '41') AS iva,
                    COUNT(*) FILTER (WHERE a.kode_pangkat = '42') AS ivb,
                    COUNT(*) FILTER (WHERE a.kode_pangkat = '43') AS ivc,
                    COUNT(*) FILTER (WHERE a.kode_pangkat = '44') AS ivd,
                    COUNT(*) FILTER (WHERE a.kode_pangkat = '45') AS ive,
                    COUNT(*) FILTER (WHERE a.kode_pangkat IS NULL OR a.kode_pangkat = '00') AS kosong
                FROM bpjph.vwdata_pegawai_new a
                WHERE a.kode_mutasi = '1'
                  AND (
                    a.kode_satker_1 = $1 OR
                    a.kode_satker_2 = $1 OR
                    a.kode_satker_3 = $1 OR
                    a.kode_satker_4 = $1 OR
                    a.kode_satker_5 = $1
                  );
            `;

                const { rows: mRows } = await db.query(mReadQuery, [element.kode_satuan_kerja]);
                resultRow.push(mRows[0]);
                console.log(mRows[0]);
            }

            if (resultRow.length === 0) {
                return res.status(404).send({ RC: "05", message: "Data Not Found" });
            }

            return res.status(200).send({ RC: "00", message: "Success", data: resultRow });

        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Error", error });
        }
    },
    async getStatJabatanFungsional(req, res) {
        const { kode_satuan_kerja, kode_level_jabatan } = req.query;

        // Ambil anak satker
        const readQuery = `
    SELECT a.* 
    FROM bpjph.tm_satuan_kerja a 
    WHERE a.kode_atasan = $1
  `;

        try {
            const { rows } = await db.query(readQuery, [kode_satuan_kerja]);
            let resultRow = [];

            for (const element of rows) {
                const mReadQuery = `
        SELECT 
          (SELECT satuan_kerja 
           FROM bpjph.tm_satuan_kerja 
           WHERE kode_satuan_kerja = $1) AS satuan_kerja,
          COALESCE(a.jumlah, 0) AS jumlah,
          b.jabatan
        FROM bpjph.tm_jabatan b
        FULL OUTER JOIN (
            SELECT c.jabatan, COUNT(1) AS jumlah
            FROM bpjph.vwdata_pegawai_new c
            WHERE c.kode_mutasi = '1'
              AND (
                  c.kode_satker_1 = $1
               OR c.kode_satker_2 = $1
               OR c.kode_satker_3 = $1
               OR c.kode_satker_4 = $1
               OR c.kode_satker_5 = $1
              )
              AND c.kode_level_jabatan = $2
            GROUP BY c.jabatan
        ) a ON a.jabatan = b.jabatan
        WHERE b.kode_level_jabatan = $2;
      `;

                const params = [element.kode_satuan_kerja, kode_level_jabatan];

                const { rows: mRows } = await db.query(mReadQuery, params);
                resultRow = [...resultRow, ...mRows]; // push banyak jabatan
            }

            if (resultRow.length === 0) {
                return res.status(404).send({ RC: "05", message: "Data Not Found" });
            }
            const grouped = resultRow.reduce((acc, row) => {
                const { satuan_kerja, jabatan, jumlah } = row;

                // Find existing entry for this satker
                let satker = acc.find(item => item.satuan_kerja === satuan_kerja);

                if (!satker) {
                    satker = { satuan_kerja, jumlah: 0 }; // initialize jumlah
                    acc.push(satker);
                }

                // Add jabatan as a key with jumlah as value
                satker[jabatan] = jumlah;

                // Update total jumlah
                satker.jumlah = (satker.jumlah || 0) + Number(jumlah);

                return acc;
            }, []);
            return res.status(200).send({ RC: "00", message: "Success", data: grouped });

        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Error", error });
        }
    },
    async getStatJabatanStruktural(req, res) {
        const { kode_satuan_kerja } = req.query;

        const readQuery = `
        SELECT a.*
        FROM bpjph.tm_satuan_kerja a
        WHERE a.kode_atasan = $1
    `;

        try {
            const { rows, rowCount } = await db.query(readQuery, [kode_satuan_kerja]);
            let resultRow = [];

            for (const element of rows) {
                const mReadQuery = `
                SELECT  
                    (SELECT satuan_kerja 
                     FROM bpjph.tm_satuan_kerja 
                     WHERE kode_satuan_kerja = $1) AS satuan_kerja,

                    COUNT(CASE WHEN C.kode_tipe_jabatan = '0' THEN 1 END) AS jumlah,
                    COUNT(CASE WHEN B.kode_level_jabatan = '001' THEN 1 END) AS i_a,
                    COUNT(CASE WHEN B.kode_level_jabatan = '002' THEN 1 END) AS i_b,
                    COUNT(CASE WHEN B.kode_level_jabatan = '003' THEN 1 END) AS ii_a,
                    COUNT(CASE WHEN B.kode_level_jabatan = '004' THEN 1 END) AS ii_b,
                    COUNT(CASE WHEN B.kode_level_jabatan = '005' THEN 1 END) AS iii_a,
                    COUNT(CASE WHEN B.kode_level_jabatan = '006' THEN 1 END) AS iii_b,
                    COUNT(CASE WHEN B.kode_level_jabatan = '007' THEN 1 END) AS iv_a,
                    COUNT(CASE WHEN B.kode_level_jabatan = '008' THEN 1 END) AS iv_b,
                    COUNT(CASE WHEN B.kode_level_jabatan = '009' THEN 1 END) AS v_a,
                    COUNT(CASE WHEN B.kode_level_jabatan = '010' THEN 1 END) AS v_b,
                    COUNT(CASE WHEN B.kode_level_jabatan IS NULL THEN 1 END) AS kosong
                FROM bpjph.vwdata_pegawai_new A
                LEFT JOIN bpjph.tm_jabatan B 
                       ON A.kode_jabatan = B.kode_jabatan
                LEFT JOIN bpjph.tm_level_jabatan C 
                       ON B.kode_level_jabatan = C.kode_level_jabatan
                WHERE A.kode_mutasi = '1'
                  AND (
                      A.kode_satker_1 = $1 OR
                      A.kode_satker_2 = $1 OR
                      A.kode_satker_3 = $1 OR
                      A.kode_satker_4 = $1 OR
                      A.kode_satker_5 = $1
                  );
            `;

                const { rows: mRows } = await db.query(mReadQuery, [element.kode_satuan_kerja]);
                resultRow.push(mRows[0]);
                console.log(mRows[0]);
            }

            if (resultRow.length === 0) {
                return res.status(404).send({ RC: "05", message: "Data Not Found" });
            }

            return res.status(200).send({ RC: "00", message: "Success", data: resultRow });

        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Error", error });
        }
    },
    async getStatJenisKelamin(req, res) {
        const { kode_satuan_kerja } = req.query;

        // Query to get list of child satuan kerja first
        const readQuery = `
    SELECT a.* 
    FROM bpjph.tm_satuan_kerja a 
    WHERE a.kode_atasan = $1
  `;

        try {
            const { rows, rowCount } = await db.query(readQuery, [kode_satuan_kerja]);
            let resultRow = [];

            for (const element of rows) {
                const mReadQuery = `
        SELECT  
          (SELECT satuan_kerja 
           FROM bpjph.tm_satuan_kerja 
           WHERE kode_satuan_kerja = $1) AS satuan_kerja,

          COUNT(a.nip) AS jumlah,
          COUNT(*) FILTER (WHERE a.jenis_kelamin = 1) AS pria,
          COUNT(*) FILTER (WHERE a.jenis_kelamin = 0) AS wanita
        FROM bpjph.vwdata_pegawai_new a
        WHERE a.kode_mutasi = '1'
          AND (
              a.kode_satker_1 = $1
           OR a.kode_satker_2 = $1
           OR a.kode_satker_3 = $1
           OR a.kode_satker_4 = $1
           OR a.kode_satker_5 = $1
          );
      `;

                const { rows: mRows } = await db.query(mReadQuery, [element.kode_satuan_kerja]);
                resultRow.push(mRows[0]);
                console.log(mRows[0]);
            }

            if (resultRow.length === 0) {
                return res.status(404).send({ RC: "05", message: "Data Not Found" });
            }

            return res.status(200).send({ RC: "00", message: "Success", data: resultRow });

        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Error", error });
        }
    },
    async getStatPendidikan(req, res) {
        const { kode_satuan_kerja } = req.query;

        // Ambil daftar anak satker dulu
        const readQuery = `
    SELECT a.* 
    FROM bpjph.tm_satuan_kerja a 
    WHERE a.kode_atasan = $1
  `;

        try {
            const { rows } = await db.query(readQuery, [kode_satuan_kerja]);
            let resultRow = [];

            for (const element of rows) {
                const mReadQuery = `
        SELECT   
          (SELECT satuan_kerja 
           FROM bpjph.tm_satuan_kerja 
           WHERE kode_satuan_kerja = $1) AS satuan_kerja,

          COUNT(a.nip) AS jumlah,
          COUNT(*) FILTER (WHERE a.kode_jenjang_pendidikan = '0') AS sd,
          COUNT(*) FILTER (WHERE a.kode_jenjang_pendidikan = '1') AS sltp,
          COUNT(*) FILTER (WHERE a.kode_jenjang_pendidikan = '2') AS slta,
          COUNT(*) FILTER (WHERE a.kode_jenjang_pendidikan = '3') AS di,
          COUNT(*) FILTER (WHERE a.kode_jenjang_pendidikan = '4') AS dii,
          COUNT(*) FILTER (WHERE a.kode_jenjang_pendidikan = '5') AS diii,
          COUNT(*) FILTER (WHERE a.kode_jenjang_pendidikan = '6') AS div,
          COUNT(*) FILTER (WHERE a.kode_jenjang_pendidikan = '7') AS s1,
          COUNT(*) FILTER (WHERE a.kode_jenjang_pendidikan = '8') AS s2,
          COUNT(*) FILTER (WHERE a.kode_jenjang_pendidikan = '9') AS s3,
          COUNT(*) FILTER (WHERE a.kode_jenjang_pendidikan IS NULL) AS kosong
        FROM bpjph.vwdata_pegawai_new a
        WHERE a.kode_mutasi = '1'
          AND (
              a.kode_satker_1 = $1
           OR a.kode_satker_2 = $1
           OR a.kode_satker_3 = $1
           OR a.kode_satker_4 = $1
           OR a.kode_satker_5 = $1
          );
      `;

                const { rows: mRows } = await db.query(mReadQuery, [element.kode_satuan_kerja]);
                resultRow.push(mRows[0]);
                console.log(mRows[0]);
            }

            if (resultRow.length === 0) {
                return res.status(404).send({ RC: "05", message: "Data Not Found" });
            }

            return res.status(200).send({ RC: "00", message: "Success", data: resultRow });

        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Error", error });
        }
    },
    async getStatUsia(req, res) {
        const { kode_satuan_kerja } = req.query;

        // Ambil daftar anak satker dulu
        const readQuery = `
    SELECT a.* 
    FROM bpjph.tm_satuan_kerja a 
    WHERE a.kode_atasan = $1
  `;

        try {
            const { rows } = await db.query(readQuery, [kode_satuan_kerja]);
            let resultRow = [];

            for (const element of rows) {
                const mReadQuery = `
        SELECT  
          (SELECT satuan_kerja 
           FROM bpjph.tm_satuan_kerja 
           WHERE kode_satuan_kerja = $1) AS satuan_kerja,

          COUNT(a.nip) AS jumlah,

          COUNT(*) FILTER (WHERE DATE_PART('year', AGE(a.tanggal_lahir)) < 24) AS u24,
          COUNT(*) FILTER (WHERE DATE_PART('year', AGE(a.tanggal_lahir)) BETWEEN 24 AND 29) AS u24_29,
          COUNT(*) FILTER (WHERE DATE_PART('year', AGE(a.tanggal_lahir)) BETWEEN 30 AND 39) AS u30_39,
          COUNT(*) FILTER (WHERE DATE_PART('year', AGE(a.tanggal_lahir)) BETWEEN 40 AND 49) AS u40_49,
          COUNT(*) FILTER (WHERE DATE_PART('year', AGE(a.tanggal_lahir)) BETWEEN 50 AND 57) AS u50_57,
          COUNT(*) FILTER (WHERE DATE_PART('year', AGE(a.tanggal_lahir)) > 57) AS u57,
          COUNT(*) FILTER (WHERE a.tanggal_lahir IS NULL) AS kosong
        FROM bpjph.vwdata_pegawai_new a
        WHERE a.kode_mutasi = '1'
          AND (
              a.kode_satker_1 = $1
           OR a.kode_satker_2 = $1
           OR a.kode_satker_3 = $1
           OR a.kode_satker_4 = $1
           OR a.kode_satker_5 = $1
          );
      `;

                const { rows: mRows } = await db.query(mReadQuery, [element.kode_satuan_kerja]);
                resultRow.push(mRows[0]);
                console.log(mRows[0]);
            }

            if (resultRow.length === 0) {
                return res.status(404).send({ RC: "05", message: "Data Not Found" });
            }

            return res.status(200).send({ RC: "00", message: "Success", data: resultRow });

        } catch (error) {
            return res.status(400).send({ RC: "99", message: "Error", error });
        }
    }

}
export default Simpeg;

