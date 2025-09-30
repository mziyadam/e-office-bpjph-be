"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _db = _interopRequireDefault(require("../db"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var buster = require('buster');
var XlsxTemplate = require('../template/lib');
var fs = require('fs');
var path = require('path');
var etree = require('elementtree');
var XlsX = _defineProperty(_defineProperty(_defineProperty(_defineProperty({
  getUploadTemplateAbsensi: function getUploadTemplateAbsensi(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var ip, path2, method, fileTemplate, file;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path2 = '/api/kepegawaian/absensi/export';
            method = 'GET';
            fileTemplate = '../template/template_absensi.xlsx';
            file = path.join(__dirname, fileTemplate);
            res.download(file);
          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  postImportDataPegawai: function postImportDataPegawai(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var ip, path, method, findOneQuery, _yield$db$query, rows, rowCount, data;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            //console.log('test masuk')
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = '/api/kepegawaian/absensi/import';
            method = 'POST';
            findOneQuery = "select * from eoffice.crud_batch_data_absensi_temp ($1,$2,$3,$4,$5,$6::json)";
            console.log(findOneQuery, [ip, path, method, req.user.nip, req.body.ext, JSON.stringify(req.body.dataAbsen)]);
            _context2.prev = 5;
            _context2.next = 8;
            return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, req.body.ext, JSON.stringify(req.body.dataAbsen)]);
          case 8:
            _yield$db$query = _context2.sent;
            rows = _yield$db$query.rows;
            rowCount = _yield$db$query.rowCount;
            if (rowCount) {
              _context2.next = 15;
              break;
            }
            return _context2.abrupt("return", res.status(400).send({
              'RC': '07',
              'message': 'tidak ada data'
            }));
          case 15:
            data = rows[0].rows;
            rows = data;
            return _context2.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'berhasil',
              rows: rows
            }));
          case 18:
            _context2.next = 23;
            break;
          case 20:
            _context2.prev = 20;
            _context2.t0 = _context2["catch"](5);
            return _context2.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi atau data',
              error: _context2.t0
            }));
          case 23:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[5, 20]]);
    }))();
  },
  postImportDataAbsensi: function postImportDataAbsensi(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var ip, path, method, findOneQuery, _yield$db$query2, rows, rowCount, data;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            //console.log('test masuk')
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = '/api/kepegawaian/absensi/import';
            method = 'POST';
            findOneQuery = "select * from eoffice.crud_batch_data_absensi_v2_temp ($1,$2,$3,$4,$5,$6::json)"; //console.log(findOneQuery, [ip, path, method, req.user.nip,  req.body.ext, JSON.stringify(req.body.dataAbsen)]);
            _context3.prev = 4;
            _context3.next = 7;
            return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, req.body.ext, JSON.stringify(req.body.dataAbsen)]);
          case 7:
            _yield$db$query2 = _context3.sent;
            rows = _yield$db$query2.rows;
            rowCount = _yield$db$query2.rowCount;
            if (rowCount) {
              _context3.next = 14;
              break;
            }
            return _context3.abrupt("return", res.status(400).send({
              'RC': '07',
              'message': 'tidak ada data'
            }));
          case 14:
            data = rows[0].rows;
            rows = data;
            return _context3.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'berhasil',
              rows: rows
            }));
          case 17:
            _context3.next = 22;
            break;
          case 19:
            _context3.prev = 19;
            _context3.t0 = _context3["catch"](4);
            return _context3.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi atau data',
              error: _context3.t0
            }));
          case 22:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[4, 19]]);
    }))();
  },
  cetakRekapUangMakan: function cetakRekapUangMakan(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var ip, path2, method, input_data, arrayData, nama_unker, findOneQuery, _yield$db$query3, rows, rowCount, message, data, tarifUM, i, jmlKotor, pph, jmlBersih;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path2 = '/api/kepegawaian/cetakRekapUangMakan/';
            method = 'POST';
            input_data = req.body;
            arrayData = [];
            nama_unker = '';
            findOneQuery = "select * from eoffice.get_laporan_general ($1,$2,$3,$4,$5)";
            console.log(findOneQuery, [ip, path2, method, req.user.nip, JSON.stringify(input_data)]);
            _context4.next = 10;
            return _db["default"].query(findOneQuery, [ip, path2, method, req.user.nip, JSON.stringify(input_data)]);
          case 10:
            _yield$db$query3 = _context4.sent;
            rows = _yield$db$query3.rows;
            rowCount = _yield$db$query3.rowCount;
            if (rowCount) {
              _context4.next = 17;
              break;
            }
            return _context4.abrupt("return", res.status(400).send({
              'RC': '05',
              'message': 'data kosong'
            }));
          case 17:
            message = rows[0].message;
            data = [];
            if (message === 'sukses') {
              arrayData = rows[0].data;
            }
          case 20:
            tarifUM = 0;
            for (i = 0; i < arrayData.length; i++) {
              tarifUM = tarifUM + arrayData[i].tarif_um_n;
            }
            jmlKotor = 0;
            for (i = 0; i < arrayData.length; i++) {
              jmlKotor = jmlKotor + arrayData[i].jml_kotor_n;
            }
            pph = 0;
            for (i = 0; i < arrayData.length; i++) {
              pph = pph + arrayData[i].pph_n;
            }
            jmlBersih = 0;
            for (i = 0; i < arrayData.length; i++) {
              jmlBersih = jmlBersih + arrayData[i].jml_bersih_n;
            }
            fs.readFile(path.join(__dirname, '../template/template_rekap_uang_makan.xlsx'), function (err, data) {
              buster.expect(err).toBeNull();

              // get data

              var t = new XlsxTemplate(data);
              //console.log(namafile)
              //res.setHeader('Content-disposition', 'attachment; filename= '+arrayData[0].nama_file);

              t.substitute(1, {
                dataTabular: arrayData,
                periode: arrayData[0].periode,
                //nama_unker : arrayData[0].nama_unker
                totalTarifUM: tarifUM,
                totalKotor: jmlKotor,
                totalPph: pph,
                totalBersih: jmlBersih,
                nama_ppk_uang_makan: arrayData[0].nama_ppk_uang_makan,
                nip_ppk_uang_makan: arrayData[0].nip_ppk_uang_makan,
                tanggal_cetak: arrayData[0].tanggal_cetak
              });
              var buf = t.generate({
                type: 'nodebuffer'
              });
              res.send(buf);
              res.end();
            });
          case 29:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }))();
  },
  cetakRekapTukinOld: function cetakRekapTukinOld(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      var ip, path2, method, input_data, arrayData, nama_unker, findOneQuery, _yield$db$query4, rows, rowCount, message, data, tunjanganKinerja, i, pemotongan, jmlSetelahPemotongan, tunjanganPajak, jumlahBruto;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path2 = '/api/kepegawaian/cetakRekapTukin/';
            method = 'POST';
            input_data = req.body;
            arrayData = [];
            nama_unker = '';
            findOneQuery = "select * from eoffice.get_laporan_general ($1,$2,$3,$4,$5)";
            console.log(findOneQuery, [ip, path2, method, req.user.nip, JSON.stringify(input_data)]);
            _context5.next = 10;
            return _db["default"].query(findOneQuery, [ip, path2, method, req.user.nip, JSON.stringify(input_data)]);
          case 10:
            _yield$db$query4 = _context5.sent;
            rows = _yield$db$query4.rows;
            rowCount = _yield$db$query4.rowCount;
            if (rowCount) {
              _context5.next = 17;
              break;
            }
            return _context5.abrupt("return", res.status(400).send({
              'RC': '05',
              'message': 'data kosong'
            }));
          case 17:
            message = rows[0].message;
            data = [];
            if (message === 'sukses') {
              arrayData = rows[0].data;
            }
          case 20:
            tunjanganKinerja = 0;
            for (i = 0; i < arrayData.length; i++) {
              tunjanganKinerja = tunjanganKinerja + arrayData[i].tunjangan_kinerja_n;
            }
            pemotongan = 0;
            for (i = 0; i < arrayData.length; i++) {
              pemotongan = pemotongan + arrayData[i].pemotongan_n;
            }
            jmlSetelahPemotongan = 0;
            for (i = 0; i < arrayData.length; i++) {
              jmlSetelahPemotongan = jmlSetelahPemotongan + arrayData[i].jml_setelah_pemotongan_n;
            }
            tunjanganPajak = 0;
            for (i = 0; i < arrayData.length; i++) {
              tunjanganPajak = tunjanganPajak + arrayData[i].tunjangan_pajak_n;
            }
            jumlahBruto = 0;
            for (i = 0; i < arrayData.length; i++) {
              jumlahBruto = jumlahBruto + arrayData[i].jumlah_bruto_n;
            }
            fs.readFile(path.join(__dirname, '../template/template_nominatif_tukin.xlsx'), function (err, data) {
              buster.expect(err).toBeNull();

              // get data

              var t = new XlsxTemplate(data);
              //console.log(namafile)
              //res.setHeader('Content-disposition', 'attachment; filename= '+arrayData[0].nama_file);

              t.substitute(1, {
                dataTabular: arrayData,
                periode: arrayData[0].periode,
                nama_unker: arrayData[0].nama_unker,
                totalTukin: tunjanganKinerja,
                totalPemotongan: pemotongan,
                totalSetelahPemotongan: jmlSetelahPemotongan,
                totaltunjanganPajak: tunjanganPajak,
                totalBruto: jumlahBruto,
                nama_ppk_tukin: arrayData[0].nama_ppk_tukin,
                nip_ppk_tukin: arrayData[0].nip_ppk_tukin,
                nama_bendahara_tukin: arrayData[0].nama_bendahara_tukin,
                nip_bendahara_tukin: arrayData[0].nip_bendahara_tukin,
                tanggal_cetak: arrayData[0].tanggal_cetak
              });
              var buf = t.generate({
                type: 'nodebuffer'
              });
              res.send(buf);
              res.end();
            });
          case 31:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }))();
  },
  getUploadTemplateUangMakan: function getUploadTemplateUangMakan(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
      var ip, path2, method, fileTemplate, file;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path2 = '/api/kepegawaian/uang_makan/export';
            method = 'GET';
            fileTemplate = '../template/template_uang_makan.xlsx';
            file = path.join(__dirname, fileTemplate);
            res.download(file);
          case 6:
          case "end":
            return _context6.stop();
        }
      }, _callee6);
    }))();
  },
  postImportDataUangMakan: function postImportDataUangMakan(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
      var ip, path, method, findOneQuery, _yield$db$query5, rows, rowCount, data;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            //console.log('test masuk')
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = '/api/kepegawaian/uang_makan/import';
            method = 'POST';
            findOneQuery = "select * from eoffice.crud_batch_data_uang_makan_temp ($1,$2,$3,$4,$5,$6::json)";
            console.log(findOneQuery, [ip, path, method, req.user.nip, req.body.ext, JSON.stringify(req.body.dataUangMakan)]);
            _context7.prev = 5;
            _context7.next = 8;
            return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, req.body.ext, JSON.stringify(req.body.dataUangMakan)]);
          case 8:
            _yield$db$query5 = _context7.sent;
            rows = _yield$db$query5.rows;
            rowCount = _yield$db$query5.rowCount;
            if (rowCount) {
              _context7.next = 15;
              break;
            }
            return _context7.abrupt("return", res.status(400).send({
              'RC': '07',
              'message': 'tidak ada data'
            }));
          case 15:
            data = rows[0].rows;
            rows = data;
            return _context7.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'berhasil',
              rows: rows
            }));
          case 18:
            _context7.next = 23;
            break;
          case 20:
            _context7.prev = 20;
            _context7.t0 = _context7["catch"](5);
            return _context7.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi atau data',
              error: _context7.t0
            }));
          case 23:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[5, 20]]);
    }))();
  },
  cetakRekapLapHarian: function cetakRekapLapHarian(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
      var ip, path2, method, input_data, arrayData, nama_unker, findOneQuery, _yield$db$query6, rows, rowCount, message, data;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path2 = '/api/kepegawaian/cetakRekapLapHarian/';
            method = 'POST';
            input_data = req.body;
            arrayData = [];
            nama_unker = '';
            findOneQuery = "select * from eoffice.lap_harian_crud  ($1,$2,$3,$4,$5::json)";
            console.log(findOneQuery, [ip, path2, method, req.user.nip, JSON.stringify(input_data)]);
            _context8.next = 10;
            return _db["default"].query(findOneQuery, [ip, path2, method, req.user.nip, JSON.stringify(input_data)]);
          case 10:
            _yield$db$query6 = _context8.sent;
            rows = _yield$db$query6.rows;
            rowCount = _yield$db$query6.rowCount;
            if (rowCount) {
              _context8.next = 17;
              break;
            }
            return _context8.abrupt("return", res.status(400).send({
              'RC': '05',
              'message': 'data kosong'
            }));
          case 17:
            message = rows[0].message;
            data = [];
            if (message === 'Sukses') {
              arrayData = rows[0].data;
            }
            console.log(arrayData);
          case 21:
            fs.readFile(path.join(__dirname, '../template/template_rekap_lap_harian.xlsx'), function (err, data) {
              buster.expect(err).toBeNull();

              // get data

              var t = new XlsxTemplate(data);
              //console.log(namafile)
              //res.setHeader('Content-disposition', 'attachment; filename= '+arrayData[0].nama_file);

              t.substitute(1, {
                dataTabular: arrayData
                // periode : arrayData[0].periode,
                // nama_unker : arrayData[0].nama_unker
              });
              var buf = t.generate({
                type: 'nodebuffer'
              });
              res.send(buf);
              res.end();
            });
          case 22:
          case "end":
            return _context8.stop();
        }
      }, _callee8);
    }))();
  },
  getUploadTemplateTukin: function getUploadTemplateTukin(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
      var ip, path2, method, fileTemplate, file;
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path2 = '/api/kepegawaian/tukin/export';
            method = 'GET';
            fileTemplate = '../template/template_data_tukin.xlsx';
            file = path.join(__dirname, fileTemplate);
            res.download(file);
          case 6:
          case "end":
            return _context9.stop();
        }
      }, _callee9);
    }))();
  },
  postImportDataTukin: function postImportDataTukin(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
      var ip, path, method, findOneQuery, _yield$db$query7, rows, rowCount, data;
      return _regeneratorRuntime().wrap(function _callee10$(_context10) {
        while (1) switch (_context10.prev = _context10.next) {
          case 0:
            //console.log('test masuk')
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = '/api/kepegawaian/tukin/import';
            method = 'POST';
            findOneQuery = "select * from eoffice.crud_batch_data_tukin ($1,$2,$3,$4,$5::json)";
            console.log(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body.dataUangMakan)]);
            _context10.prev = 5;
            _context10.next = 8;
            return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body.dataUangMakan)]);
          case 8:
            _yield$db$query7 = _context10.sent;
            rows = _yield$db$query7.rows;
            rowCount = _yield$db$query7.rowCount;
            if (rowCount) {
              _context10.next = 15;
              break;
            }
            return _context10.abrupt("return", res.status(400).send({
              'RC': '07',
              'message': 'tidak ada data'
            }));
          case 15:
            data = rows[0].rows;
            rows = data;
            return _context10.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'berhasil',
              rows: rows
            }));
          case 18:
            _context10.next = 23;
            break;
          case 20:
            _context10.prev = 20;
            _context10.t0 = _context10["catch"](5);
            return _context10.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi atau data',
              error: _context10.t0
            }));
          case 23:
          case "end":
            return _context10.stop();
        }
      }, _callee10, null, [[5, 20]]);
    }))();
  },
  cetakRekapAbsensi: function cetakRekapAbsensi(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
      var ip, path2, method, input_data, arrayData, nama_unker, findOneQuery, _yield$db$query8, rows, rowCount, message, data;
      return _regeneratorRuntime().wrap(function _callee11$(_context11) {
        while (1) switch (_context11.prev = _context11.next) {
          case 0:
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path2 = '/api/kepegawaian/cetakRekapAbsensi/';
            method = 'POST';
            input_data = req.body;
            arrayData = [];
            nama_unker = '';
            findOneQuery = "select * from eoffice.get_laporan_general ($1,$2,$3,$4,$5)";
            console.log(findOneQuery, [ip, path2, method, req.user.nip, JSON.stringify(input_data)]);
            _context11.next = 10;
            return _db["default"].query(findOneQuery, [ip, path2, method, req.user.nip, JSON.stringify(input_data)]);
          case 10:
            _yield$db$query8 = _context11.sent;
            rows = _yield$db$query8.rows;
            rowCount = _yield$db$query8.rowCount;
            if (rowCount) {
              _context11.next = 17;
              break;
            }
            return _context11.abrupt("return", res.status(400).send({
              'RC': '05',
              'message': 'data kosong'
            }));
          case 17:
            message = rows[0].message;
            data = [];
            if (message === 'sukses') {
              arrayData = rows[0].data;
            }
          case 20:
            /*     fs.readFile(path.join(__dirname, '../template/template_rekap_absensi_v2.xlsx'), function(err, data) {
             */
            fs.readFile(path.join(__dirname, '../template/temp_rekap_kehadiran.xlsx'), function (err, data) {
              buster.expect(err).toBeNull();

              // get data

              var t = new XlsxTemplate(data);
              //console.log(namafile)
              //res.setHeader('Content-disposition', 'attachment; filename= '+arrayData[0].nama_file);

              t.substitute(1, {
                dataTabular: arrayData,
                bulan: arrayData[0].bulan_nama,
                tahun: arrayData[0].tahun,
                hari_kerja: arrayData[0].hari_kerja,
                hari_libur: arrayData[0].hari_libur,
                tanggal_cetak: arrayData[0].tanggal_cetak
              });
              var buf = t.generate({
                type: 'nodebuffer'
              });
              res.send(buf);
              res.end();
            });
          case 21:
          case "end":
            return _context11.stop();
        }
      }, _callee11);
    }))();
  },
  cetakRekapTukin: function cetakRekapTukin(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
      var ip, path2, method, input_data, arrayData, nama_unker, findOneQuery, _yield$db$query9, rows, rowCount, message, data;
      return _regeneratorRuntime().wrap(function _callee12$(_context12) {
        while (1) switch (_context12.prev = _context12.next) {
          case 0:
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path2 = '/api/kepegawaian/cetakRekapTukin/';
            method = 'POST';
            input_data = req.body;
            arrayData = [];
            nama_unker = '';
            findOneQuery = "select * from eoffice.get_laporan_general ($1,$2,$3,$4,$5)";
            console.log(findOneQuery, [ip, path2, method, req.user.nip, JSON.stringify(input_data)]);
            _context12.next = 10;
            return _db["default"].query(findOneQuery, [ip, path2, method, req.user.nip, JSON.stringify(input_data)]);
          case 10:
            _yield$db$query9 = _context12.sent;
            rows = _yield$db$query9.rows;
            rowCount = _yield$db$query9.rowCount;
            if (rowCount) {
              _context12.next = 17;
              break;
            }
            return _context12.abrupt("return", res.status(400).send({
              'RC': '05',
              'message': 'data kosong'
            }));
          case 17:
            message = rows[0].message;
            data = [];
            if (message === 'sukses') {
              arrayData = rows[0].data;
            }
          case 20:
            fs.readFile(path.join(__dirname, '../template/temp_rekap_tukin.xlsx'), function (err, data) {
              buster.expect(err).toBeNull();

              // get data

              var t = new XlsxTemplate(data);
              //console.log(namafile)
              //res.setHeader('Content-disposition', 'attachment; filename= '+arrayData[0].nama_file);

              t.substitute(1, {
                dataTabular: arrayData,
                bulan: arrayData[0].bulan_nama,
                tahun: arrayData[0].tahun,
                hari_kerja: arrayData[0].hari_kerja,
                hari_libur: arrayData[0].hari_libur,
                tanggal_cetak: arrayData[0].tanggal_cetak
              });
              var buf = t.generate({
                type: 'nodebuffer'
              });
              res.send(buf);
              res.end();
            });
          case 21:
          case "end":
            return _context12.stop();
        }
      }, _callee12);
    }))();
  }
}, "cetakRekapUangMakan", function cetakRekapUangMakan(req, res) {
  return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
    var ip, path2, method, input_data, arrayData, nama_unker, findOneQuery, _yield$db$query10, rows, rowCount, message, data;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
          path2 = '/api/kepegawaian/cetakRekapUangMakan/';
          method = 'POST';
          input_data = req.body;
          arrayData = [];
          nama_unker = '';
          findOneQuery = "select * from eoffice.get_laporan_general ($1,$2,$3,$4,$5)";
          console.log(findOneQuery, [ip, path2, method, req.user.nip, JSON.stringify(input_data)]);
          _context13.next = 10;
          return _db["default"].query(findOneQuery, [ip, path2, method, req.user.nip, JSON.stringify(input_data)]);
        case 10:
          _yield$db$query10 = _context13.sent;
          rows = _yield$db$query10.rows;
          rowCount = _yield$db$query10.rowCount;
          if (rowCount) {
            _context13.next = 17;
            break;
          }
          return _context13.abrupt("return", res.status(400).send({
            'RC': '05',
            'message': 'data kosong'
          }));
        case 17:
          message = rows[0].message;
          data = [];
          if (message === 'sukses') {
            arrayData = rows[0].data;
          }
        case 20:
          fs.readFile(path.join(__dirname, '../template/temp_rekap_uang_makan.xlsx'), function (err, data) {
            buster.expect(err).toBeNull();

            // get data

            var t = new XlsxTemplate(data);
            //console.log(namafile)
            //res.setHeader('Content-disposition', 'attachment; filename= '+arrayData[0].nama_file);

            t.substitute(1, {
              dataTabular: arrayData,
              bulan: arrayData[0].bulan_nama,
              tahun: arrayData[0].tahun,
              hari_kerja: arrayData[0].hari_kerja,
              hari_libur: arrayData[0].hari_libur,
              tanggal_cetak: arrayData[0].tanggal_cetak
            });
            var buf = t.generate({
              type: 'nodebuffer'
            });
            res.send(buf);
            res.end();
          });
        case 21:
        case "end":
          return _context13.stop();
      }
    }, _callee13);
  }))();
}), "cetakRekapAbsensiPegawai", function cetakRekapAbsensiPegawai(req, res) {
  return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
    var ip, path2, method, input_data, arrayData, nama_unker, findOneQuery, _yield$db$query11, rows, rowCount, message, data;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
          path2 = '/api/kepegawaian/cetakRekapAbsensiPegawai/';
          method = 'POST';
          input_data = req.body;
          arrayData = [];
          nama_unker = '';
          findOneQuery = "select * from eoffice.get_laporan_general ($1,$2,$3,$4,$5)";
          console.log(findOneQuery, [ip, path2, method, req.user.nip, JSON.stringify(input_data)]);
          _context14.next = 10;
          return _db["default"].query(findOneQuery, [ip, path2, method, req.user.nip, JSON.stringify(input_data)]);
        case 10:
          _yield$db$query11 = _context14.sent;
          rows = _yield$db$query11.rows;
          rowCount = _yield$db$query11.rowCount;
          if (rowCount) {
            _context14.next = 17;
            break;
          }
          return _context14.abrupt("return", res.status(400).send({
            'RC': '05',
            'message': 'data kosong'
          }));
        case 17:
          message = rows[0].message;
          data = [];
          if (message === 'sukses') {
            arrayData = rows[0].data;
          }
        case 20:
          /*     fs.readFile(path.join(__dirname, '../template/template_rekap_absensi_pegawai.xlsx'), function(err, data) {
           */
          fs.readFile(path.join(__dirname, '../template/temp_rekap_kehadiran_pegawai.xlsx'), function (err, data) {
            buster.expect(err).toBeNull();

            // get data

            var t = new XlsxTemplate(data);
            //console.log(namafile)
            //res.setHeader('Content-disposition', 'attachment; filename= '+arrayData[0].nama_file);

            t.substitute(1, {
              dataTabular: arrayData,
              bulan: arrayData[0].bulan_nama,
              tahun: arrayData[0].tahun,
              hari_kerja: arrayData[0].hari_kerja,
              hari_libur: arrayData[0].hari_libur,
              nama: arrayData[0].nama,
              nip: arrayData[0].nip,
              jabatan: arrayData[0].jabatan_nama,
              tanggal_cetak: arrayData[0].tanggal_cetak
            });
            var buf = t.generate({
              type: 'nodebuffer'
            });
            res.send(buf);
            res.end();
          });
        case 21:
        case "end":
          return _context14.stop();
      }
    }, _callee14);
  }))();
}), "cetakRekapAbsensiPegawaiTukin", function cetakRekapAbsensiPegawaiTukin(req, res) {
  return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
    var ip, path2, method, input_data, arrayData, nama_unker, findOneQuery, _yield$db$query12, rows, rowCount, message, data;
    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
          path2 = '/api/kepegawaian/cetakRekapAbsensiPegawaiTukin/';
          method = 'POST';
          input_data = req.body;
          arrayData = [];
          nama_unker = '';
          findOneQuery = "select * from eoffice.get_laporan_general ($1,$2,$3,$4,$5)";
          console.log(findOneQuery, [ip, path2, method, req.user.nip, JSON.stringify(input_data)]);
          _context15.next = 10;
          return _db["default"].query(findOneQuery, [ip, path2, method, req.user.nip, JSON.stringify(input_data)]);
        case 10:
          _yield$db$query12 = _context15.sent;
          rows = _yield$db$query12.rows;
          rowCount = _yield$db$query12.rowCount;
          if (rowCount) {
            _context15.next = 17;
            break;
          }
          return _context15.abrupt("return", res.status(400).send({
            'RC': '05',
            'message': 'data kosong'
          }));
        case 17:
          message = rows[0].message;
          data = [];
          if (message === 'sukses') {
            arrayData = rows[0].data;
          }
        case 20:
          fs.readFile(path.join(__dirname, '../template/temp_rekap_tukin_pegawai.xlsx'), function (err, data) {
            buster.expect(err).toBeNull();

            // get data

            var t = new XlsxTemplate(data);
            //console.log(namafile)
            //res.setHeader('Content-disposition', 'attachment; filename= '+arrayData[0].nama_file);

            t.substitute(1, {
              dataTabular: arrayData,
              bulan: arrayData[0].bulan_nama,
              tahun: arrayData[0].tahun,
              hari_kerja: arrayData[0].hari_kerja,
              hari_libur: arrayData[0].hari_libur,
              nama: arrayData[0].nama,
              nip: arrayData[0].nip,
              jabatan: arrayData[0].jabatan_nama,
              tanggal_cetak: arrayData[0].tanggal_cetak
            });
            var buf = t.generate({
              type: 'nodebuffer'
            });
            res.send(buf);
            res.end();
          });
        case 21:
        case "end":
          return _context15.stop();
      }
    }, _callee15);
  }))();
}), "cetakRekapAbsensiPegawaiUangMakan", function cetakRekapAbsensiPegawaiUangMakan(req, res) {
  return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee16() {
    var ip, path2, method, input_data, arrayData, nama_unker, findOneQuery, _yield$db$query13, rows, rowCount, message, data;
    return _regeneratorRuntime().wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
          path2 = '/api/kepegawaian/cetakRekapAbsensiPegawaiUangMakan/';
          method = 'POST';
          input_data = req.body;
          arrayData = [];
          nama_unker = '';
          findOneQuery = "select * from eoffice.get_laporan_general ($1,$2,$3,$4,$5)";
          console.log(findOneQuery, [ip, path2, method, req.user.nip, JSON.stringify(input_data)]);
          _context16.next = 10;
          return _db["default"].query(findOneQuery, [ip, path2, method, req.user.nip, JSON.stringify(input_data)]);
        case 10:
          _yield$db$query13 = _context16.sent;
          rows = _yield$db$query13.rows;
          rowCount = _yield$db$query13.rowCount;
          if (rowCount) {
            _context16.next = 17;
            break;
          }
          return _context16.abrupt("return", res.status(400).send({
            'RC': '05',
            'message': 'data kosong'
          }));
        case 17:
          message = rows[0].message;
          data = [];
          if (message === 'sukses') {
            arrayData = rows[0].data;
          }
        case 20:
          fs.readFile(path.join(__dirname, '../template/temp_rekap_uang_makan_pegawai.xlsx'), function (err, data) {
            buster.expect(err).toBeNull();

            // get data

            var t = new XlsxTemplate(data);
            //console.log(namafile)
            //res.setHeader('Content-disposition', 'attachment; filename= '+arrayData[0].nama_file);

            t.substitute(1, {
              dataTabular: arrayData,
              bulan: arrayData[0].bulan_nama,
              tahun: arrayData[0].tahun,
              hari_kerja: arrayData[0].hari_kerja,
              hari_libur: arrayData[0].hari_libur,
              nama: arrayData[0].nama,
              nip: arrayData[0].nip,
              jabatan: arrayData[0].jabatan_nama,
              tanggal_cetak: arrayData[0].tanggal_cetak
            });
            var buf = t.generate({
              type: 'nodebuffer'
            });
            res.send(buf);
            res.end();
          });
        case 21:
        case "end":
          return _context16.stop();
      }
    }, _callee16);
  }))();
});
var _default = exports["default"] = XlsX;