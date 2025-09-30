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
var Web = _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
  /**
   * Input Paket PPIU
   * @param {object} req
   * @param {object} res
   * @returns {object} data pergerakan jemaah
   */
  getWebPPIUJamaahByPaket: function getWebPPIUJamaahByPaket(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var ip, path, method, findOneQuery, _yield$db$query, rows, rowCount;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            ///api/umrah/asuransi/pembayaran/{tanggal_awal}/{tanggal_akhir}/{page}
            //select * from parameter_header_get('10.100.88.14','general/header','POST','tes')
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = '/web/ppiu/paket/jamaah';
            method = 'GET';
            findOneQuery = "select * from ppiu_jamaah_get_by_paket($1,$2,$3,$4,$5)"; //  console.log(findOneQuery, [ip, path, method, req.user.nip,req.params.paket_id]);
            _context.prev = 4;
            _context.next = 7;
            return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, req.params.paket_id]);
          case 7:
            _yield$db$query = _context.sent;
            rows = _yield$db$query.rows;
            rowCount = _yield$db$query.rowCount;
            if (rowCount) {
              _context.next = 14;
              break;
            }
            return _context.abrupt("return", res.status(400).send({
              'RC': '05',
              'message': 'Tidak Ada Data'
            }));
          case 14:
            return _context.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'Sukses',
              rows: rows
            }));
          case 15:
            _context.next = 20;
            break;
          case 17:
            _context.prev = 17;
            _context.t0 = _context["catch"](4);
            return _context.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi Atau Data',
              error: _context.t0
            }));
          case 20:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[4, 17]]);
    }))();
  },
  getWebPPIUJamaahByPpiu: function getWebPPIUJamaahByPpiu(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var ip, path, method, findOneQuery, _yield$db$query2, rows, rowCount;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            /// api/umrah/asuransi/pembayaran/{tanggal_awal}/{tanggal_akhir}/{page}
            //select * from parameter_header_get('10.100.88.14','general/header','POST','tes')
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = '/api/web/ppiu/jamaah/';
            method = 'GET';
            findOneQuery = "select * from ppiu_jamaah_get_by_ppiu($1,$2,$3,$4,$5)"; // console.log('get parameter header by user' + req.user.nip + " " + ip);
            _context2.prev = 4;
            _context2.next = 7;
            return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, req.user.organisasi]);
          case 7:
            _yield$db$query2 = _context2.sent;
            rows = _yield$db$query2.rows;
            rowCount = _yield$db$query2.rowCount;
            if (rowCount) {
              _context2.next = 14;
              break;
            }
            return _context2.abrupt("return", res.status(400).send({
              'RC': '05',
              'message': 'Tidak Ada Data'
            }));
          case 14:
            return _context2.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'Sukses',
              rows: rows
            }));
          case 15:
            _context2.next = 20;
            break;
          case 17:
            _context2.prev = 17;
            _context2.t0 = _context2["catch"](4);
            return _context2.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi Atau Data',
              error: _context2.t0
            }));
          case 20:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[4, 17]]);
    }))();
  },
  getWebPPIUPaketByPpiu: function getWebPPIUPaketByPpiu(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var ip, path, method, findOneQuery, _yield$db$query3, rows, rowCount;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            //select * from parameter_header_get('10.100.88.14','general/header','POST','tes')
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = '/api/web/ppiu/paket/';
            method = 'GET';
            findOneQuery = "select * from ppiu_paket_get_by_ppiu($1,$2,$3,$4,$5)"; // console.log(findOneQuery, [ip, path, method, req.user.nip,req.user.organisasi]);
            _context3.prev = 4;
            _context3.next = 7;
            return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, req.user.organisasi]);
          case 7:
            _yield$db$query3 = _context3.sent;
            rows = _yield$db$query3.rows;
            rowCount = _yield$db$query3.rowCount;
            if (rowCount) {
              _context3.next = 14;
              break;
            }
            return _context3.abrupt("return", res.status(400).send({
              'RC': '05',
              'message': 'Tidak Ada Data'
            }));
          case 14:
            return _context3.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'Sukses',
              rows: rows
            }));
          case 15:
            _context3.next = 20;
            break;
          case 17:
            _context3.prev = 17;
            _context3.t0 = _context3["catch"](4);
            return _context3.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi Atau Data',
              error: _context3.t0
            }));
          case 20:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[4, 17]]);
    }))();
  },
  crudWebPPIUPaketByPpiu: function crudWebPPIUPaketByPpiu(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var ip, path, method, findOneQuery, _yield$db$query4, rows, rowCount;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            //(in_ip_address character varying, in_api_path character varying, in_api_method character varying, in_user_id character varying, in_sql_type character varying, in_paket_id uuid, in_ppiu_id character varying, in_provider_id character varying, in_nama_paket character varying, in_biaya_idr numeric, in_biaya_usd numeric, in_is_active character, in_tahun character varying, in_rencana_berangkat date, in_fakta_berangkat date, in_keterangan_berangkat text, in_maskapai_berangkat character varying, in_no_penerbangan_berangkat character varying, in_rencana_pulang date, in_fakta_pulang date, in_keterangan_pulang text, in_maskapai_pulang character varying, in_no_penerbangan_pulang character varying, in_hotel_makkah character varying, in_hotel_madinah character varying, in_tl_id integer, in_mekah_mulai date, in_mekah_sampai date, in_madinah_mulai date, in_madinah_sampai character varying, in_bandara_berangkat character varying, in_bandara_pulang character varying)
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = 'ppiu/paket/';
            method = 'POST';
            findOneQuery = "select * from public.ppiu_paket_crud_v2($1,$2,$3,$4,$5,$6::uuid,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19)"; //  console.log(findOneQuery, [ip, path, method, req.user.nip, req.body.type, req.body.pktid, req.body.ppiuid, req.body.providerid, req.body.namapaket, req.body.biayaidr, req.body.biayausd, req.body.isactive, req.body.tahun, req.body.rencanaberangkat, req.body.faktaberangkat, req.body.keteranganberangkat, req.body.rencanapulang, req.body.faktapulang, req.body.keteranganpulang])
            _context4.prev = 4;
            _context4.next = 7;
            return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, req.body.type, req.body.pktid, req.body.ppiuid, req.body.providerid, req.body.namapaket, req.body.biayaidr, req.body.biayausd, req.body.isactive, req.body.tahun, req.body.rencanaberangkat, req.body.faktaberangkat, req.body.keteranganberangkat, req.body.rencanapulang, req.body.faktapulang, req.body.keteranganpulang]);
          case 7:
            _yield$db$query4 = _context4.sent;
            rows = _yield$db$query4.rows;
            rowCount = _yield$db$query4.rowCount;
            if (rowCount) {
              _context4.next = 14;
              break;
            }
            return _context4.abrupt("return", res.status(400).send({
              'RC': '04',
              'message': 'Proses Gagal'
            }));
          case 14:
            return _context4.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'Sukses',
              rows: rows
            }));
          case 15:
            _context4.next = 20;
            break;
          case 17:
            _context4.prev = 17;
            _context4.t0 = _context4["catch"](4);
            return _context4.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi Atau Data',
              error: _context4.t0
            }));
          case 20:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[4, 17]]);
    }))();
  },
  getWebPPIUPaketByPpiuV2: function getWebPPIUPaketByPpiuV2(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      var ip, path, method, findOneQuery, _yield$db$query5, rows, rowCount;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            ///api/umrah/asuransi/pembayaran/{tanggal_awal}/{tanggal_akhir}/{page}
            //select * from parameter_header_get('10.100.88.14','general/header','POST','tes')
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = 'web/ppiu/paketv2';
            method = 'GET';
            findOneQuery = "select * from ppiu_paket_get_by_ppiu_v2($1,$2,$3,$4,$5)";
            console.log(findOneQuery, [ip, path, method, req.user.nip, req.user.organisasi]);
            _context5.prev = 5;
            _context5.next = 8;
            return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, req.user.organisasi]);
          case 8:
            _yield$db$query5 = _context5.sent;
            rows = _yield$db$query5.rows;
            rowCount = _yield$db$query5.rowCount;
            if (rowCount) {
              _context5.next = 15;
              break;
            }
            return _context5.abrupt("return", res.status(400).send({
              'RC': '05',
              'message': 'Tidak Ada Data'
            }));
          case 15:
            return _context5.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'Sukses',
              rows: rows
            }));
          case 16:
            _context5.next = 21;
            break;
          case 18:
            _context5.prev = 18;
            _context5.t0 = _context5["catch"](5);
            return _context5.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi Atau Data',
              error: _context5.t0
            }));
          case 21:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[5, 18]]);
    }))();
  },
  registrasiJamaahPpiu: function registrasiJamaahPpiu(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
      var ip, path, method, findOneQuery, _yield$db$query6, rows, rowCount;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            ///api/umrah/asuransi/pembayaran/{tanggal_awal}/{tanggal_akhir}/{page}
            //select * from parameter_header_get('10.100.88.14','general/header','POST','tes')
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = 'general/header';
            method = 'GET';
            findOneQuery = "SELECT * FROM public.ppiu_jamaah_registrasi($1,$2,$3,$4,$5::uuid,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30)"; // console.log(findOneQuery, [ip, path, method, req.user.nip, req.body.paketid, req.body.ppiuid, req.body.nama, req.body.jenisidentitasid, req.body.noidentitas, req.body.namaayah, req.body.tempatlahir, req.body.tanggallahir, req.body.jeniskelamid, req.body.alamat, req.body.kelurahan, req.body.kecid, req.body.kabid, req.body.provid, req.body.jenispendidikan, req.body.jenispekerjaan, req.body.title,req.body.statuspernikahan,req.body.kewarganegaraanid,req.body.notelp,req.body.nohp,req.body.foto,req.body.petugasid,req.body.providerid,req.body.asuransiid,req.body.penandatangankontrakid]);     
            _context6.prev = 4;
            _context6.next = 7;
            return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, req.body.paketid, req.body.ppiuid, req.body.nama, req.body.jenisidentitasid, req.body.noidentitas, req.body.namaayah, req.body.tempatlahir, req.body.tanggallahir, req.body.jeniskelamid, req.body.alamat, req.body.kelurahan, req.body.kecid, req.body.kabid, req.body.provid, req.body.jenispendidikan, req.body.jenispekerjaan, req.body.title, req.body.statuspernikahan, req.body.kewarganegaraanid, req.body.notelp, req.body.nohp, req.body.foto, req.body.petugasid, req.body.providerid, req.body.asuransiid, req.body.penandatangankontrakid]);
          case 7:
            _yield$db$query6 = _context6.sent;
            rows = _yield$db$query6.rows;
            rowCount = _yield$db$query6.rowCount;
            if (rowCount) {
              _context6.next = 14;
              break;
            }
            return _context6.abrupt("return", res.status(400).send({
              'RC': '05',
              'message': 'Tidak Ada Data'
            }));
          case 14:
            return _context6.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'Sukses',
              rows: rows
            }));
          case 15:
            _context6.next = 20;
            break;
          case 17:
            _context6.prev = 17;
            _context6.t0 = _context6["catch"](4);
            return _context6.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi Atau Data',
              error: _context6.t0
            }));
          case 20:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[4, 17]]);
    }))();
  },
  crudPaketHotel: function crudPaketHotel(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
      var ip, path, method, findOneQuery, _yield$db$query7, rows, rowCount;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            ///api/umrah/asuransi/pembayaran/{tanggal_awal}/{tanggal_akhir}/{page}
            //select * from parameter_header_get('10.100.88.14','general/header','POST','tes')
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = 'web/ppiu/paket/paket_hotel';
            method = 'POST';
            findOneQuery = "SELECT * FROM public.ppiu_paket_hotel_crud($1,$2,$3,$4,$5,$6,$7::uuid,$8::uuid,$9,$10,$11,$12,$13)"; //  console.log(findOneQuery, [ip, path, method, req.user.nip, req.body.type, req.body.lokasihotelid, req.body.pakethotelid, req.body.paketid, req.body.hotelid, req.body.tanggalmulai, req.body.tanggalselesai])
            _context7.prev = 4;
            _context7.next = 7;
            return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, req.body.type, req.body.lokasihotelid, req.body.pakethotelid, req.body.paketid, req.body.hotelid, req.body.tanggalmulai, req.body.tanggalselesai, req.body.tipe_rencana, req.body.orang_kamar]);
          case 7:
            _yield$db$query7 = _context7.sent;
            rows = _yield$db$query7.rows;
            rowCount = _yield$db$query7.rowCount;
            return _context7.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'Sukses',
              rows: rows
            }));
          case 13:
            _context7.prev = 13;
            _context7.t0 = _context7["catch"](4);
            return _context7.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi Atau Data',
              error: _context7.t0
            }));
          case 16:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[4, 13]]);
    }))();
  },
  crudPaketPenerbangan: function crudPaketPenerbangan(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
      var ip, path, method, findOneQuery, _yield$db$query8, rows, rowCount;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            ///api/umrah/asuransi/pembayaran/{tanggal_awal}/{tanggal_akhir}/{page}
            //select * from parameter_header_get('10.100.88.14','general/header','POST','tes')
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = 'web/ppiu/paket/paket_penerbangan';
            method = 'POST';
            findOneQuery = "SELECT * FROM public.ppiu_paket_penerbangan_crud($1,$2,$3,$4,$5,$6::uuid,$7::uuid,$8,$9,$10,$11,$12,$13,$14)"; //console.log('SELECT * FROM public.ppiu_paket_penerbangan_crud',[ip, path, method, req.user.nip, req.body.type, req.body.paketflightid, req.body.paketid, req.body.maskapaiid, req.body.nopenerbangan, req.body.bandaraasal, req.body.bandaratujuan, req.body.tanggalberangkat, req.body.tanggaltiba, req.body.tipepenerbangan])
            _context8.prev = 4;
            _context8.next = 7;
            return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, req.body.type, req.body.paketflightid, req.body.paketid, req.body.maskapaiid, req.body.nopenerbangan, req.body.bandaraasal, req.body.bandaratujuan, req.body.tanggalberangkat, req.body.tanggaltiba, req.body.tipepenerbangan]);
          case 7:
            _yield$db$query8 = _context8.sent;
            rows = _yield$db$query8.rows;
            rowCount = _yield$db$query8.rowCount;
            return _context8.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'Sukses',
              rows: rows
            }));
          case 13:
            _context8.prev = 13;
            _context8.t0 = _context8["catch"](4);
            return _context8.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi Atau Data',
              error: _context8.t0
            }));
          case 16:
          case "end":
            return _context8.stop();
        }
      }, _callee8, null, [[4, 13]]);
    }))();
  },
  getPaketPenerbangan: function getPaketPenerbangan(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
      var findOneQuery, ip, path, method, _yield$db$query9, rows, rowCount;
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            findOneQuery = "select * from public.ppiu_paket_penerbangan_get_by_paket($1,$2,$3,$4,$5::uuid,$6)";
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = 'web/ppiu/paket/paket_penerbangan';
            method = 'POST';
            console.log(findOneQuery, [ip, path, method, req.user.nip, req.params.kode_paket, req.params.tipe_penerbangan]);
            _context9.prev = 5;
            _context9.next = 8;
            return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, req.params.kode_paket, req.params.tipe_penerbangan]);
          case 8:
            _yield$db$query9 = _context9.sent;
            rows = _yield$db$query9.rows;
            rowCount = _yield$db$query9.rowCount;
            if (rowCount) {
              _context9.next = 15;
              break;
            }
            return _context9.abrupt("return", res.status(200).send({
              'RC': '05',
              'message': 'Tidak Ada Data'
            }));
          case 15:
            return _context9.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'Sukses',
              rows: rows
            }));
          case 16:
            _context9.next = 21;
            break;
          case 18:
            _context9.prev = 18;
            _context9.t0 = _context9["catch"](5);
            return _context9.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi Atau Data',
              error: _context9.t0
            }));
          case 21:
          case "end":
            return _context9.stop();
        }
      }, _callee9, null, [[5, 18]]);
    }))();
  },
  getPaketHotel: function getPaketHotel(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
      var findOneQuery, ip, path, method, _yield$db$query10, rows, rowCount;
      return _regeneratorRuntime().wrap(function _callee10$(_context10) {
        while (1) switch (_context10.prev = _context10.next) {
          case 0:
            findOneQuery = "select * from public.ppiu_paket_hotel_get_by_paket($1,$2,$3,$4,$5::uuid,$6)";
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = 'general/header';
            method = 'GET';
            console.log(findOneQuery, [ip, path, method, req.user.nip, req.params.kode_paket, req.params.tipe_rencana]);
            _context10.prev = 5;
            _context10.next = 8;
            return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, req.params.kode_paket, req.params.tipe_rencana]);
          case 8:
            _yield$db$query10 = _context10.sent;
            rows = _yield$db$query10.rows;
            rowCount = _yield$db$query10.rowCount;
            if (rowCount) {
              _context10.next = 15;
              break;
            }
            return _context10.abrupt("return", res.status(200).send({
              'RC': '05',
              'message': 'Tidak Ada Data'
            }));
          case 15:
            return _context10.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'Sukses',
              rows: rows
            }));
          case 16:
            _context10.next = 21;
            break;
          case 18:
            _context10.prev = 18;
            _context10.t0 = _context10["catch"](5);
            return _context10.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi Atau Data',
              error: _context10.t0
            }));
          case 21:
          case "end":
            return _context10.stop();
        }
      }, _callee10, null, [[5, 18]]);
    }))();
  },
  // visa
  getProviderJamaahAll: function getProviderJamaahAll(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
      var ip, path, method, findOneQuery, _yield$db$query11, rows, rowCount;
      return _regeneratorRuntime().wrap(function _callee11$(_context11) {
        while (1) switch (_context11.prev = _context11.next) {
          case 0:
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = 'web/visa/paket/';
            method = 'GET';
            findOneQuery = "select * from provider_paket_get_by_provider_v2($1,$2,$3,$4,$5)"; //console.log(findOneQuery, [ip, path, method, req.user.nip,req.user.organisasi])
            _context11.prev = 4;
            _context11.next = 7;
            return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, req.user.organisasi]);
          case 7:
            _yield$db$query11 = _context11.sent;
            rows = _yield$db$query11.rows;
            rowCount = _yield$db$query11.rowCount;
            if (rowCount) {
              _context11.next = 14;
              break;
            }
            return _context11.abrupt("return", res.status(400).send({
              'RC': '05',
              'message': 'Tidak Ada Data'
            }));
          case 14:
            return _context11.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'Sukses',
              rows: rows
            }));
          case 15:
            _context11.next = 20;
            break;
          case 17:
            _context11.prev = 17;
            _context11.t0 = _context11["catch"](4);
            return _context11.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi Atau Data',
              error: _context11.t0
            }));
          case 20:
          case "end":
            return _context11.stop();
        }
      }, _callee11, null, [[4, 17]]);
    }))();
  },
  getWebProviderJamaahByPaket: function getWebProviderJamaahByPaket(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
      var ip, path, method, findOneQuery, _yield$db$query12, rows, rowCount;
      return _regeneratorRuntime().wrap(function _callee12$(_context12) {
        while (1) switch (_context12.prev = _context12.next) {
          case 0:
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = '/api/web/visa/paket/jamaah';
            method = 'GET';
            findOneQuery = "select * from provider_get_jamaah_by_paket($1,$2,$3,$4,$5::uuid)";
            console.log(findOneQuery, [ip, path, method, req.user.nip, req.params.paket_id]);
            _context12.prev = 5;
            _context12.next = 8;
            return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, req.params.paket_id]);
          case 8:
            _yield$db$query12 = _context12.sent;
            rows = _yield$db$query12.rows;
            rowCount = _yield$db$query12.rowCount;
            if (rowCount) {
              _context12.next = 15;
              break;
            }
            return _context12.abrupt("return", res.status(400).send({
              'RC': '07',
              'message': 'Nomor Registrasi Tidak Ditemukan'
            }));
          case 15:
            return _context12.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'Sukses',
              rows: rows
            }));
          case 16:
            _context12.next = 21;
            break;
          case 18:
            _context12.prev = 18;
            _context12.t0 = _context12["catch"](5);
            return _context12.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi Atau Data',
              error: _context12.t0
            }));
          case 21:
          case "end":
            return _context12.stop();
        }
      }, _callee12, null, [[5, 18]]);
    }))();
  },
  updateVisaJamaah: function updateVisaJamaah(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
      var ip, path, method, findOneQuery, _yield$db$query13, rows, rowCount;
      return _regeneratorRuntime().wrap(function _callee13$(_context13) {
        while (1) switch (_context13.prev = _context13.next) {
          case 0:
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = 'umrah/visa/jamaah';
            method = 'POST';
            console.log(findOneQuery, [ip, path, method, req.user.nip, req.body.noregistrasi, req.body.novisa, req.body.tglBerlaku, req.body.tglBerakhir]);
            findOneQuery = "select * from provider_jamaah_visa_update($1,$2,$3,$4,$5,$6,$7,$8)";
            _context13.prev = 5;
            _context13.next = 8;
            return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, req.body.noregistrasi, req.body.novisa, req.body.tglBerlaku, req.body.tglBerakhir]);
          case 8:
            _yield$db$query13 = _context13.sent;
            rows = _yield$db$query13.rows;
            rowCount = _yield$db$query13.rowCount;
            if (rowCount) {
              _context13.next = 15;
              break;
            }
            return _context13.abrupt("return", res.status(400).send({
              'RC': '07',
              'message': 'Nomor Registrasi Tidak Ditemukan'
            }));
          case 15:
            return _context13.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'Sukses',
              rows: rows
            }));
          case 16:
            _context13.next = 21;
            break;
          case 18:
            _context13.prev = 18;
            _context13.t0 = _context13["catch"](5);
            return _context13.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi Atau Data',
              error: _context13.t0
            }));
          case 21:
          case "end":
            return _context13.stop();
        }
      }, _callee13, null, [[5, 18]]);
    }))();
  },
  getWebReportKartuJamaahTes: function getWebReportKartuJamaahTes(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
      var ip, path, method, findOneQuery, _yield$db$query14, rows, rowCount;
      return _regeneratorRuntime().wrap(function _callee14$(_context14) {
        while (1) switch (_context14.prev = _context14.next) {
          case 0:
            ///api/umrah/asuransi/pembayaran/{tanggal_awal}/{tanggal_akhir}/{page}
            //select * from parameter_header_get('10.100.88.14','general/header','POST','tes')
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = '/web/ppiu/paket/jamaah';
            method = 'GET';
            findOneQuery = "select * from dummy_json()"; //console.log('get parameter header by user' + req.user.nip + " " + ip);
            _context14.prev = 4;
            _context14.next = 7;
            return _db["default"].query(findOneQuery);
          case 7:
            _yield$db$query14 = _context14.sent;
            rows = _yield$db$query14.rows;
            rowCount = _yield$db$query14.rowCount;
            if (rowCount) {
              _context14.next = 14;
              break;
            }
            return _context14.abrupt("return", res.status(400).send({
              'RC': '05',
              'message': 'Tidak Ada Data'
            }));
          case 14:
            return _context14.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'Sukses',
              rows: rows
            }));
          case 15:
            _context14.next = 20;
            break;
          case 17:
            _context14.prev = 17;
            _context14.t0 = _context14["catch"](4);
            return _context14.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi Atau Data',
              error: _context14.t0
            }));
          case 20:
          case "end":
            return _context14.stop();
        }
      }, _callee14, null, [[4, 17]]);
    }))();
  },
  getWebReportPendaftaranJamaah: function getWebReportPendaftaranJamaah(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
      var ip, path, method, findOneQuery, _yield$db$query15, rows, rowCount, message, data;
      return _regeneratorRuntime().wrap(function _callee15$(_context15) {
        while (1) switch (_context15.prev = _context15.next) {
          case 0:
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = 'web/ppiu/report/pendaftaran/';
            method = 'GET';
            findOneQuery = "select * from cetakSuratPendaftaranUmroh($1,$2,$3,$4,$5)";
            _context15.prev = 4;
            _context15.next = 7;
            return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, req.params.jamaah_id]);
          case 7:
            _yield$db$query15 = _context15.sent;
            rows = _yield$db$query15.rows;
            rowCount = _yield$db$query15.rowCount;
            if (rowCount) {
              _context15.next = 14;
              break;
            }
            return _context15.abrupt("return", res.status(400).send({
              'RC': '07',
              'message': 'Nomor Registrasi Tidak Ditemukan'
            }));
          case 14:
            message = rows[0].message;
            data = [];
            if (message === 'sukses') {
              data = rows[0].data;
            }
            return _context15.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': message,
              data: data
            }));
          case 18:
            _context15.next = 23;
            break;
          case 20:
            _context15.prev = 20;
            _context15.t0 = _context15["catch"](4);
            return _context15.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi Atau Data',
              error: _context15.t0
            }));
          case 23:
          case "end":
            return _context15.stop();
        }
      }, _callee15, null, [[4, 20]]);
    }))();
  },
  getWebDdlPetugas: function getWebDdlPetugas(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee16() {
      var findOneQuery, _yield$db$query16, rows, rowCount;
      return _regeneratorRuntime().wrap(function _callee16$(_context16) {
        while (1) switch (_context16.prev = _context16.next) {
          case 0:
            /// ddl header untuk web
            findOneQuery = "select * from ddl_petugas($1,$2)"; // console.log(findOneQuery, [req.user.organisasi,req.params.tipe_petugas]);
            _context16.prev = 1;
            _context16.next = 4;
            return _db["default"].query(findOneQuery, [req.user.organisasi, req.params.tipe_petugas]);
          case 4:
            _yield$db$query16 = _context16.sent;
            rows = _yield$db$query16.rows;
            rowCount = _yield$db$query16.rowCount;
            if (rowCount) {
              _context16.next = 11;
              break;
            }
            return _context16.abrupt("return", res.status(200).send({
              'RC': '05',
              'message': 'Tidak Ada Data'
            }));
          case 11:
            return _context16.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'Sukses',
              rows: rows
            }));
          case 12:
            _context16.next = 17;
            break;
          case 14:
            _context16.prev = 14;
            _context16.t0 = _context16["catch"](1);
            return _context16.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi Atau Data',
              error: _context16.t0
            }));
          case 17:
          case "end":
            return _context16.stop();
        }
      }, _callee16, null, [[1, 14]]);
    }))();
  },
  UpdateJamaahPpiu: function UpdateJamaahPpiu(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee17() {
      var ip, path, method, findOneQuery, _yield$db$query17, rows, rowCount;
      return _regeneratorRuntime().wrap(function _callee17$(_context17) {
        while (1) switch (_context17.prev = _context17.next) {
          case 0:
            ///api/umrah/asuransi/pembayaran/{tanggal_awal}/{tanggal_akhir}/{page}
            //select * from parameter_header_get('10.100.88.14','general/header','POST','tes')
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = 'general/header';
            method = 'GET';
            findOneQuery = "SELECT * FROM public.ppiu_jamaah_update($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31::uuid,$32,$33,$34)"; //   console.log(findOneQuery, [ip, path, method, req.user.nip, req.body.noidentitas, req.body.jenisidentitasid,  req.body.jeniskelamid, req.body.tempatlahir,  req.body.tanggallahir, req.body.jenispendidikan, req.body.jenispekerjaan, req.body.notelp,req.body.alamat, req.body.kabid,  req.body.provid,req.body.kecid, req.body.foto, req.body.namapaspor, req.body.nopaspor, req.body.tgldikeluarkan, req.body.tglhabis, req.body.kotapaspor, req.body.kelurahan, req.body.statuspernikahan, req.body.title, req.body.nohp,req.body.kewarganegaraanid, req.body.petugasid,  req.body.nama, req.body.namaayah,req.body.jamaahid,req.body.providerid,req.body.asuransiid]);
            _context17.prev = 4;
            _context17.next = 7;
            return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, req.body.noidentitas, req.body.jenisidentitasid, req.body.jeniskelamid, req.body.tempatlahir, req.body.tanggallahir, req.body.jenispendidikan, req.body.jenispekerjaan, req.body.notelp, req.body.alamat, req.body.kabid, req.body.provid, req.body.kecid, req.body.foto, req.body.namapaspor, req.body.nopaspor, req.body.tgldikeluarkan, req.body.tglhabis, req.body.kotapaspor, req.body.kelurahan, req.body.statuspernikahan, req.body.title, req.body.nohp, req.body.kewarganegaraanid, req.body.petugasid, req.body.nama, req.body.namaayah, req.body.jamaahid, req.body.providerid, req.body.asuransiid, req.body.penandatangankontrakid]);
          case 7:
            _yield$db$query17 = _context17.sent;
            rows = _yield$db$query17.rows;
            rowCount = _yield$db$query17.rowCount;
            if (rowCount) {
              _context17.next = 14;
              break;
            }
            return _context17.abrupt("return", res.status(400).send({
              'RC': '05',
              'message': 'Tidak Ada Data'
            }));
          case 14:
            return _context17.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'Sukses',
              rows: rows
            }));
          case 15:
            _context17.next = 20;
            break;
          case 17:
            _context17.prev = 17;
            _context17.t0 = _context17["catch"](4);
            return _context17.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi Atau Data',
              error: _context17.t0
            }));
          case 20:
          case "end":
            return _context17.stop();
        }
      }, _callee17, null, [[4, 17]]);
    }))();
  },
  getWebPPIUPaketByPpiuV3: function getWebPPIUPaketByPpiuV3(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee18() {
      var ip, path, method, findOneQuery, _yield$db$query18, rows, rowCount;
      return _regeneratorRuntime().wrap(function _callee18$(_context18) {
        while (1) switch (_context18.prev = _context18.next) {
          case 0:
            ///api/umrah/asuransi/pembayaran/{tanggal_awal}/{tanggal_akhir}/{page}
            //select * from parameter_header_get('10.100.88.14','general/header','POST','tes')
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = 'web/ppiu/paketv3';
            method = 'GET';
            findOneQuery = "select * from ppiu_paket_get_by_ppiu_v3($1,$2,$3,$4,$5)";
            console.log(findOneQuery, [ip, path, method, req.user.nip, req.user.organisasi]);
            _context18.prev = 5;
            _context18.next = 8;
            return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, req.user.organisasi]);
          case 8:
            _yield$db$query18 = _context18.sent;
            rows = _yield$db$query18.rows;
            rowCount = _yield$db$query18.rowCount;
            if (rowCount) {
              _context18.next = 15;
              break;
            }
            return _context18.abrupt("return", res.status(400).send({
              'RC': '05',
              'message': 'Tidak Ada Data'
            }));
          case 15:
            return _context18.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'Sukses',
              rows: rows
            }));
          case 16:
            _context18.next = 21;
            break;
          case 18:
            _context18.prev = 18;
            _context18.t0 = _context18["catch"](5);
            return _context18.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi Atau Data',
              error: _context18.t0
            }));
          case 21:
          case "end":
            return _context18.stop();
        }
      }, _callee18, null, [[5, 18]]);
    }))();
  },
  copyPaket: function copyPaket(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee19() {
      var ip, path, method, findOneQuery, _yield$db$query19, rows, rowCount;
      return _regeneratorRuntime().wrap(function _callee19$(_context19) {
        while (1) switch (_context19.prev = _context19.next) {
          case 0:
            ///api/umrah/asuransi/pembayaran/{tanggal_awal}/{tanggal_akhir}/{page}
            //select * from parameter_header_get('10.100.88.14','general/header','POST','tes')
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = 'web/ppiu/paketv3';
            method = 'GET';
            findOneQuery = "select * from copy_paket_umrah($1,$2,$3,$4,$5,$6::uuid)";
            console.log(findOneQuery, [ip, path, method, req.user.nip, req.user.organisasi]);
            _context19.prev = 5;
            _context19.next = 8;
            return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, req.user.organisasi, req.params.paket_id]);
          case 8:
            _yield$db$query19 = _context19.sent;
            rows = _yield$db$query19.rows;
            rowCount = _yield$db$query19.rowCount;
            if (rowCount) {
              _context19.next = 15;
              break;
            }
            return _context19.abrupt("return", res.status(400).send({
              'RC': '05',
              'message': 'Tidak Ada Data'
            }));
          case 15:
            return _context19.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'Sukses',
              rows: rows
            }));
          case 16:
            _context19.next = 21;
            break;
          case 18:
            _context19.prev = 18;
            _context19.t0 = _context19["catch"](5);
            return _context19.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi Atau Data',
              error: _context19.t0
            }));
          case 21:
          case "end":
            return _context19.stop();
        }
      }, _callee19, null, [[5, 18]]);
    }))();
  },
  crudWebPPIUPaketByPpiuV3: function crudWebPPIUPaketByPpiuV3(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee20() {
      var ip, path, method, findOneQuery, _yield$db$query20, rows, rowCount;
      return _regeneratorRuntime().wrap(function _callee20$(_context20) {
        while (1) switch (_context20.prev = _context20.next) {
          case 0:
            //(in_ip_address character varying, in_api_path character varying, in_api_method character varying, in_user_id character varying, in_sql_type character varying, in_paket_id uuid, in_ppiu_id character varying, in_provider_id character varying, in_nama_paket character varying, in_biaya_idr numeric, in_biaya_usd numeric, in_is_active character, in_tahun character varying, in_rencana_berangkat date, in_fakta_berangkat date, in_keterangan_berangkat text, in_maskapai_berangkat character varying, in_no_penerbangan_berangkat character varying, in_rencana_pulang date, in_fakta_pulang date, in_keterangan_pulang text, in_maskapai_pulang character varying, in_no_penerbangan_pulang character varying, in_hotel_makkah character varying, in_hotel_madinah character varying, in_tl_id integer, in_mekah_mulai date, in_mekah_sampai date, in_madinah_mulai date, in_madinah_sampai character varying, in_bandara_berangkat character varying, in_bandara_pulang character varying)
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = 'ppiu/paket/';
            method = 'POST';
            findOneQuery = "select * from public.ppiu_paket_crud_v3($1,$2,$3,$4,$5,$6::uuid,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17)";
            console.log(findOneQuery, [ip, path, method, req.user.nip, req.body.type, req.body.pktid, req.body.ppiuid, req.body.providerid, req.body.namapaket, req.body.biayaidr, req.body.isactive, req.body.tahun, req.body.rencanaberangkat, req.body.keteranganberangkat, req.body.rencanapulang, req.body.keteranganpulang, req.body.asuransiid]);
            _context20.prev = 5;
            _context20.next = 8;
            return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, req.body.type, req.body.pktid, req.body.ppiuid, req.body.providerid, req.body.namapaket, req.body.biayaidr, req.body.isactive, req.body.tahun, req.body.rencanaberangkat, req.body.keteranganberangkat, req.body.rencanapulang, req.body.keteranganpulang, req.body.asuransiid]);
          case 8:
            _yield$db$query20 = _context20.sent;
            rows = _yield$db$query20.rows;
            rowCount = _yield$db$query20.rowCount;
            if (rowCount) {
              _context20.next = 15;
              break;
            }
            return _context20.abrupt("return", res.status(400).send({
              'RC': '04',
              'message': 'Proses Gagal'
            }));
          case 15:
            return _context20.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'Sukses',
              rows: rows
            }));
          case 16:
            _context20.next = 21;
            break;
          case 18:
            _context20.prev = 18;
            _context20.t0 = _context20["catch"](5);
            return _context20.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi Atau Data',
              error: _context20.t0
            }));
          case 21:
          case "end":
            return _context20.stop();
        }
      }, _callee20, null, [[5, 18]]);
    }))();
  },
  crudPaketPetugas: function crudPaketPetugas(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee21() {
      var ip, path, method, findOneQuery, _yield$db$query21, rows, rowCount;
      return _regeneratorRuntime().wrap(function _callee21$(_context21) {
        while (1) switch (_context21.prev = _context21.next) {
          case 0:
            ///api/umrah/asuransi/pembayaran/{tanggal_awal}/{tanggal_akhir}/{page}
            //select * from parameter_header_get('10.100.88.14','general/header','POST','tes')
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = 'web/ppiu/paket/paket_petugas';
            method = 'POST';
            findOneQuery = "SELECT * FROM public.ppiu_paket_petugas_crud($1,$2,$3,$4,$5,$6::uuid,$7::uuid,$8,$9,$10,$11)";
            console.log(findOneQuery, [ip, path, method, req.user.nip, req.body.type, req.body.paketpetugasid, req.body.paketid, req.body.petugasid, req.body.tipeid, req.body.urutan]);
            _context21.prev = 5;
            _context21.next = 8;
            return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, req.body.type, req.body.paketpetugasid, req.body.paketid, req.body.petugasid, req.body.tipeid, req.body.urutan, req.body.tipe_rencana]);
          case 8:
            _yield$db$query21 = _context21.sent;
            rows = _yield$db$query21.rows;
            rowCount = _yield$db$query21.rowCount;
            return _context21.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'Sukses',
              rows: rows
            }));
          case 14:
            _context21.prev = 14;
            _context21.t0 = _context21["catch"](5);
            return _context21.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi Atau Data',
              error: _context21.t0
            }));
          case 17:
          case "end":
            return _context21.stop();
        }
      }, _callee21, null, [[5, 14]]);
    }))();
  },
  getPaketPetugas: function getPaketPetugas(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee22() {
      var findOneQuery, ip, path, method, _yield$db$query22, rows, rowCount;
      return _regeneratorRuntime().wrap(function _callee22$(_context22) {
        while (1) switch (_context22.prev = _context22.next) {
          case 0:
            findOneQuery = "select * from public.ppiu_paket_petugas_get_by_paket($1,$2,$3,$4,$5::uuid,$6,$7)";
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = 'general/header';
            method = 'GET';
            console.log(findOneQuery, [ip, path, method, req.user.nip, req.params.kode_paket, req.params.tipe_id, req.params.tipe_rencana]);
            _context22.prev = 5;
            _context22.next = 8;
            return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, req.params.kode_paket, req.params.tipe_id, req.params.tipe_rencana]);
          case 8:
            _yield$db$query22 = _context22.sent;
            rows = _yield$db$query22.rows;
            rowCount = _yield$db$query22.rowCount;
            if (rowCount) {
              _context22.next = 15;
              break;
            }
            return _context22.abrupt("return", res.status(200).send({
              'RC': '05',
              'message': 'Tidak Ada Data'
            }));
          case 15:
            return _context22.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'Sukses',
              rows: rows
            }));
          case 16:
            _context22.next = 21;
            break;
          case 18:
            _context22.prev = 18;
            _context22.t0 = _context22["catch"](5);
            return _context22.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi Atau Data',
              error: _context22.t0
            }));
          case 21:
          case "end":
            return _context22.stop();
        }
      }, _callee22, null, [[5, 18]]);
    }))();
  },
  getPPIUProfile: function getPPIUProfile(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee23() {
      var findOneQuery, ip, path, method, _yield$db$query23, rows, rowCount;
      return _regeneratorRuntime().wrap(function _callee23$(_context23) {
        while (1) switch (_context23.prev = _context23.next) {
          case 0:
            findOneQuery = "select * from public.ppiu_get_profile($1,$2,$3,$4,$5)";
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = '/web/ppiu/profile';
            method = 'GET'; //  console.log(findOneQuery, [ip, path, method, req.user.nip,req.params.kode_paket])
            _context23.prev = 4;
            _context23.next = 7;
            return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, req.user.organisasi]);
          case 7:
            _yield$db$query23 = _context23.sent;
            rows = _yield$db$query23.rows;
            rowCount = _yield$db$query23.rowCount;
            if (rowCount) {
              _context23.next = 14;
              break;
            }
            return _context23.abrupt("return", res.status(200).send({
              'RC': '05',
              'message': 'Tidak Ada Data'
            }));
          case 14:
            return _context23.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'Sukses',
              rows: rows
            }));
          case 15:
            _context23.next = 20;
            break;
          case 17:
            _context23.prev = 17;
            _context23.t0 = _context23["catch"](4);
            return _context23.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi Atau Data',
              error: _context23.t0
            }));
          case 20:
          case "end":
            return _context23.stop();
        }
      }, _callee23, null, [[4, 17]]);
    }))();
  },
  updateProfilePPIU: function updateProfilePPIU(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee24() {
      var ip, path, method, findOneQuery, _yield$db$query24, rows, rowCount;
      return _regeneratorRuntime().wrap(function _callee24$(_context24) {
        while (1) switch (_context24.prev = _context24.next) {
          case 0:
            ///api/umrah/asuransi/pembayaran/{tanggal_awal}/{tanggal_akhir}/{page}
            //select * from parameter_header_get('10.100.88.14','general/header','POST','tes')
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = 'web/ppiu/profile/update';
            method = 'POST';
            findOneQuery = "SELECT * FROM public.ppiu_profil_ubah($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25)";
            console.log(findOneQuery, [ip, path, method, req.user.nip, req.body.type, req.body.ppiuid, req.body.brandppiu, req.body.notelp, req.body.nohp, req.body.email, req.body.website, req.body.alamat, req.body.kecid, req.body.kabid, req.body.provid, req.body.logoppiu, req.body.nosk, req.body.tglsk, req.body.tglberakhirsk, req.body.npwp, req.body.alamat_makkah, req.body.telp_makkah, req.body.alamat_madinah, req.body.telp_madinah, req.body.foto_kantor]);
            _context24.prev = 5;
            _context24.next = 8;
            return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, req.body.type, req.body.ppiuid, req.body.brandppiu, req.body.notelp, req.body.nohp, req.body.email, req.body.website, req.body.alamat, req.body.kecid, req.body.kabid, req.body.provid, req.body.logoppiu, req.body.nosk, req.body.tglsk, req.body.tglberakhirsk, req.body.npwp, req.body.alamat_makkah, req.body.telp_makkah, req.body.alamat_madinah, req.body.telp_madinah, req.body.foto_kantor]);
          case 8:
            _yield$db$query24 = _context24.sent;
            rows = _yield$db$query24.rows;
            rowCount = _yield$db$query24.rowCount;
            return _context24.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'Sukses',
              rows: rows
            }));
          case 14:
            _context24.prev = 14;
            _context24.t0 = _context24["catch"](5);
            return _context24.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi Atau Data',
              error: _context24.t0
            }));
          case 17:
          case "end":
            return _context24.stop();
        }
      }, _callee24, null, [[5, 14]]);
    }))();
  },
  BatalJamaahPpiu: function BatalJamaahPpiu(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee25() {
      var ip, path, method, findOneQuery, _yield$db$query25, rows, rowCount;
      return _regeneratorRuntime().wrap(function _callee25$(_context25) {
        while (1) switch (_context25.prev = _context25.next) {
          case 0:
            ///api/umrah/asuransi/pembayaran/{tanggal_awal}/{tanggal_akhir}/{page}
            //select * from parameter_header_get('10.100.88.14','general/header','POST','tes')
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = '/api/web/ppiu/jamaah/batal';
            method = 'POST';
            findOneQuery = "SELECT * FROM public.ppiu_pembatalan_jamaah($1,$2,$3,$4,$5,$6,$7::uuid)";
            console.log(findOneQuery, [ip, path, method, req.user.nip, 'Pembatalan Jamaah', req.user.organisasi, req.body.jamaahid]);
            _context25.prev = 5;
            _context25.next = 8;
            return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, 'Pembatalan Jamaah', req.user.organisasi, req.body.jamaahid]);
          case 8:
            _yield$db$query25 = _context25.sent;
            rows = _yield$db$query25.rows;
            rowCount = _yield$db$query25.rowCount;
            if (rowCount) {
              _context25.next = 15;
              break;
            }
            return _context25.abrupt("return", res.status(400).send({
              'RC': '05',
              'message': 'Tidak Ada Data'
            }));
          case 15:
            return _context25.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'Sukses',
              rows: rows
            }));
          case 16:
            _context25.next = 21;
            break;
          case 18:
            _context25.prev = 18;
            _context25.t0 = _context25["catch"](5);
            return _context25.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi Atau Data',
              error: _context25.t0
            }));
          case 21:
          case "end":
            return _context25.stop();
        }
      }, _callee25, null, [[5, 18]]);
    }))();
  },
  getPPIUPetugas: function getPPIUPetugas(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee26() {
      var ip, path, method, findOneQuery, _yield$db$query26, rows, rowCount;
      return _regeneratorRuntime().wrap(function _callee26$(_context26) {
        while (1) switch (_context26.prev = _context26.next) {
          case 0:
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = 'web/ppiu/petugas';
            method = 'GET';
            findOneQuery = "select * from public.ppiu_petugas_get($1,$2,$3,$4,$5)";
            console.log(findOneQuery, [ip, path, method, req.user.nip, req.user.organisasi]);
            _context26.prev = 5;
            _context26.next = 8;
            return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, req.user.organisasi]);
          case 8:
            _yield$db$query26 = _context26.sent;
            rows = _yield$db$query26.rows;
            rowCount = _yield$db$query26.rowCount;
            if (rowCount) {
              _context26.next = 15;
              break;
            }
            return _context26.abrupt("return", res.status(400).send({
              'RC': '05',
              'message': 'Tidak Ada Data'
            }));
          case 15:
            return _context26.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'Sukses',
              rows: rows
            }));
          case 16:
            _context26.next = 21;
            break;
          case 18:
            _context26.prev = 18;
            _context26.t0 = _context26["catch"](5);
            return _context26.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi Atau Data',
              error: _context26.t0
            }));
          case 21:
          case "end":
            return _context26.stop();
        }
      }, _callee26, null, [[5, 18]]);
    }))();
  },
  crudPPIUPetugas: function crudPPIUPetugas(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee27() {
      var ip, path, method, findOneQuery, _yield$db$query27, rows, rowCount;
      return _regeneratorRuntime().wrap(function _callee27$(_context27) {
        while (1) switch (_context27.prev = _context27.next) {
          case 0:
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = 'web/ppiu/petugas';
            method = 'POST';
            findOneQuery = "select * from public.ppiu_petugas_crud($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22)";
            console.log(findOneQuery, [ip, path, method, req.user.nip, req.body.type, req.body.petugasid, req.body.nama, req.body.noktp, req.body.nopaspor, req.body.ppiuid, req.body.nohp1, req.body.nohp2, req.body.alamat, req.body.email, req.body.tgllahir, req.body.aktif, req.body.tipeid, req.body.foto, req.body.nama_paspor, req.body.no_visa, req.body.tgl_awal_visa, req.body.tgl_akhir_visa]);
            _context27.prev = 5;
            _context27.next = 8;
            return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, req.body.type, req.body.petugasid, req.body.nama, req.body.noktp, req.body.nopaspor, req.body.ppiuid, req.body.nohp1, req.body.nohp2, req.body.alamat, req.body.email, req.body.tgllahir, req.body.aktif, req.body.tipeid, req.body.foto, req.body.nama_paspor, req.body.no_visa, req.body.tgl_awal_visa, req.body.tgl_akhir_visa]);
          case 8:
            _yield$db$query27 = _context27.sent;
            rows = _yield$db$query27.rows;
            rowCount = _yield$db$query27.rowCount;
            if (rowCount) {
              _context27.next = 15;
              break;
            }
            return _context27.abrupt("return", res.status(200).send({
              'RC': '05',
              'message': 'Tidak Ada Data'
            }));
          case 15:
            return _context27.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'Sukses',
              rows: rows
            }));
          case 16:
            _context27.next = 21;
            break;
          case 18:
            _context27.prev = 18;
            _context27.t0 = _context27["catch"](5);
            return _context27.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi Atau Data',
              error: _context27.t0
            }));
          case 21:
          case "end":
            return _context27.stop();
        }
      }, _callee27, null, [[5, 18]]);
    }))();
  },
  PindahJamaahPpiu: function PindahJamaahPpiu(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee28() {
      var ip, path, method, findOneQuery, _yield$db$query28, rows, rowCount;
      return _regeneratorRuntime().wrap(function _callee28$(_context28) {
        while (1) switch (_context28.prev = _context28.next) {
          case 0:
            ///api/umrah/asuransi/pembayaran/{tanggal_awal}/{tanggal_akhir}/{page}
            //select * from parameter_header_get('10.100.88.14','general/header','POST','tes')
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = '/api/web/ppiu/jamaah/pindah';
            method = 'POST';
            findOneQuery = "SELECT * FROM public.ppiu_jamaah_pindah($1,$2,$3,$4,$5::uuid,$6::uuid,$7::uuid)";
            console.log(findOneQuery, [ip, path, method, req.user.nip, req.body.jamaahid, req.body.paketidlama, req.body.paketidbaru]);
            _context28.prev = 5;
            _context28.next = 8;
            return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, req.body.jamaahid, req.body.paketidlama, req.body.paketidbaru]);
          case 8:
            _yield$db$query28 = _context28.sent;
            rows = _yield$db$query28.rows;
            rowCount = _yield$db$query28.rowCount;
            if (rowCount) {
              _context28.next = 15;
              break;
            }
            return _context28.abrupt("return", res.status(400).send({
              'RC': '05',
              'message': 'Tidak Ada Data'
            }));
          case 15:
            return _context28.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'Sukses',
              rows: rows
            }));
          case 16:
            _context28.next = 21;
            break;
          case 18:
            _context28.prev = 18;
            _context28.t0 = _context28["catch"](5);
            return _context28.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi Atau Data',
              error: _context28.t0
            }));
          case 21:
          case "end":
            return _context28.stop();
        }
      }, _callee28, null, [[5, 18]]);
    }))();
  },
  getWebPPIUPaketByPpiuRealisasi: function getWebPPIUPaketByPpiuRealisasi(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee29() {
      var ip, path, method, findOneQuery, organisasi, _yield$db$query29, rows, rowCount;
      return _regeneratorRuntime().wrap(function _callee29$(_context29) {
        while (1) switch (_context29.prev = _context29.next) {
          case 0:
            ///api/umrah/asuransi/pembayaran/{tanggal_awal}/{tanggal_akhir}/{page}
            //select * from parameter_header_get('10.100.88.14','general/header','POST','tes')
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = 'web/ppiu/paketv3';
            method = 'GET';
            findOneQuery = "select * from ppiu_paket_get_by_ppiu_realisasi($1,$2,$3,$4,$5)"; //console.log([ip, path, method, req.user.nip,req.user.organisasi]);
            organisasi = '0';
            if (req.user.organisasi) {
              organisasi = req.user.organisasi;
            }
            _context29.prev = 6;
            _context29.next = 9;
            return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, organisasi]);
          case 9:
            _yield$db$query29 = _context29.sent;
            rows = _yield$db$query29.rows;
            rowCount = _yield$db$query29.rowCount;
            if (rowCount) {
              _context29.next = 16;
              break;
            }
            return _context29.abrupt("return", res.status(400).send({
              'RC': '05',
              'message': 'Tidak Ada Data'
            }));
          case 16:
            return _context29.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'Sukses',
              rows: rows
            }));
          case 17:
            _context29.next = 22;
            break;
          case 19:
            _context29.prev = 19;
            _context29.t0 = _context29["catch"](6);
            return _context29.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi Atau Data',
              error: _context29.t0
            }));
          case 22:
          case "end":
            return _context29.stop();
        }
      }, _callee29, null, [[6, 19]]);
    }))();
  },
  crudUpdateStatusPaket: function crudUpdateStatusPaket(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee30() {
      var ip, path, method, findOneQuery, _yield$db$query30, rows, rowCount;
      return _regeneratorRuntime().wrap(function _callee30$(_context30) {
        while (1) switch (_context30.prev = _context30.next) {
          case 0:
            ///api/umrah/asuransi/pembayaran/{tanggal_awal}/{tanggal_akhir}/{page}
            //select * from parameter_header_get('10.100.88.14','general/header','POST','tes')
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = '/api/web/ppiu/paket/updateStatus';
            method = 'POST';
            findOneQuery = "SELECT * FROM public.ppiu_paket_update_status($1,$2,$3,$4,$5::uuid,$6)";
            console.log(findOneQuery, [ip, path, method, req.user.nip, req.body.paketid, req.body.statusid]);
            _context30.prev = 5;
            _context30.next = 8;
            return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, req.body.paketid, req.body.statusid]);
          case 8:
            _yield$db$query30 = _context30.sent;
            rows = _yield$db$query30.rows;
            rowCount = _yield$db$query30.rowCount;
            return _context30.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'Sukses',
              rows: rows
            }));
          case 14:
            _context30.prev = 14;
            _context30.t0 = _context30["catch"](5);
            return _context30.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi atau data',
              error: _context30.t0
            }));
          case 17:
          case "end":
            return _context30.stop();
        }
      }, _callee30, null, [[5, 14]]);
    }))();
  },
  crudLaporanKasus: function crudLaporanKasus(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee31() {
      var ip, path, method, input_data, findOneQuery, _yield$db$query31, rows, rowCount, message;
      return _regeneratorRuntime().wrap(function _callee31$(_context31) {
        while (1) switch (_context31.prev = _context31.next) {
          case 0:
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = '/web/ppiu/laporankasus';
            method = req.body.type;
            input_data = req.body;
            _context31.prev = 4;
            findOneQuery = "select * from crud_laporan_kasus ($1,$2,$3,$4,$5::json)";
            _context31.next = 8;
            return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(input_data)]);
          case 8:
            _yield$db$query31 = _context31.sent;
            rows = _yield$db$query31.rows;
            rowCount = _yield$db$query31.rowCount;
            if (!(!rowCount || !rows[0].rows)) {
              _context31.next = 15;
              break;
            }
            return _context31.abrupt("return", res.status(400).send({
              'RC': '05',
              'message': 'tidak ada data laporan kasus'
            }));
          case 15:
            message = rows[0].hasil;
            rows = rows[0].rows;
            return _context31.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'berhasil',
              rows: rows
            }));
          case 18:
            _context31.next = 23;
            break;
          case 20:
            _context31.prev = 20;
            _context31.t0 = _context31["catch"](4);
            return _context31.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi atau data',
              error: _context31.t0
            }));
          case 23:
          case "end":
            return _context31.stop();
        }
      }, _callee31, null, [[4, 20]]);
    }))();
  },
  crudLaporanKasusFoto: function crudLaporanKasusFoto(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee32() {
      var ip, path, method, input_data, findOneQuery, _yield$db$query32, rows, rowCount, message;
      return _regeneratorRuntime().wrap(function _callee32$(_context32) {
        while (1) switch (_context32.prev = _context32.next) {
          case 0:
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = '/web/ppiu/laporankasusfoto';
            method = 'POST';
            input_data = req.body;
            _context32.prev = 4;
            findOneQuery = "select * from crud_laporan_kasus_foto ($1,$2,$3,$4,$5::json)";
            console.log(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(input_data)]);
            _context32.next = 9;
            return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(input_data)]);
          case 9:
            _yield$db$query32 = _context32.sent;
            rows = _yield$db$query32.rows;
            rowCount = _yield$db$query32.rowCount;
            if (!(!rowCount || !rows[0].rows)) {
              _context32.next = 16;
              break;
            }
            return _context32.abrupt("return", res.status(400).send({
              'RC': '05',
              'message': 'tidak ada data laporan kasus'
            }));
          case 16:
            message = rows[0].hasil;
            rows = rows[0].rows;
            return _context32.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'berhasil',
              rows: rows
            }));
          case 19:
            _context32.next = 24;
            break;
          case 21:
            _context32.prev = 21;
            _context32.t0 = _context32["catch"](4);
            return _context32.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi atau data',
              error: _context32.t0
            }));
          case 24:
          case "end":
            return _context32.stop();
        }
      }, _callee32, null, [[4, 21]]);
    }))();
  },
  getSetting: function getSetting(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee33() {
      var ip, path, method, findOneQuery, _yield$db$query33, rows, rowCount;
      return _regeneratorRuntime().wrap(function _callee33$(_context33) {
        while (1) switch (_context33.prev = _context33.next) {
          case 0:
            ///api/umrah/asuransi/pembayaran/{tanggal_awal}/{tanggal_akhir}/{page}
            //select * from parameter_header_get('10.100.88.14','general/header','POST','tes')
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = 'web/pusat/setting';
            method = 'GET';
            findOneQuery = "select * from setting_get($1,$2,$3,$4)"; //console.log(findOneQuery, [ip, path, method, req.user.nip]);
            _context33.prev = 4;
            _context33.next = 7;
            return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip]);
          case 7:
            _yield$db$query33 = _context33.sent;
            rows = _yield$db$query33.rows;
            rowCount = _yield$db$query33.rowCount;
            if (rowCount) {
              _context33.next = 14;
              break;
            }
            return _context33.abrupt("return", res.status(400).send({
              'RC': '05',
              'message': 'Tidak ada Data'
            }));
          case 14:
            return _context33.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'Sukses',
              rows: rows
            }));
          case 15:
            _context33.next = 20;
            break;
          case 17:
            _context33.prev = 17;
            _context33.t0 = _context33["catch"](4);
            return _context33.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi atau Data',
              error: _context33.t0
            }));
          case 20:
          case "end":
            return _context33.stop();
        }
      }, _callee33, null, [[4, 17]]);
    }))();
  },
  crudSetting: function crudSetting(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee34() {
      var ip, path, method, findOneQuery, _yield$db$query34, rows, rowCount;
      return _regeneratorRuntime().wrap(function _callee34$(_context34) {
        while (1) switch (_context34.prev = _context34.next) {
          case 0:
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = 'web/pusat/setting';
            method = 'POST';
            findOneQuery = "select * from public.setting_crud($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)";
            console.log(findOneQuery, [ip, path, method, req.user.nip, req.body.type, req.body.kodesetting, req.body.namasetting, req.body.nilaisetting, req.body.keterangan, req.body.isaktif]);
            _context34.prev = 5;
            _context34.next = 8;
            return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, req.body.type, req.body.kodesetting, req.body.namasetting, req.body.nilaisetting, req.body.keterangan, req.body.isaktif]);
          case 8:
            _yield$db$query34 = _context34.sent;
            rows = _yield$db$query34.rows;
            rowCount = _yield$db$query34.rowCount;
            return _context34.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'Sukses',
              rows: rows
            }));
          case 14:
            _context34.prev = 14;
            _context34.t0 = _context34["catch"](5);
            return _context34.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi Atau Data',
              error: _context34.t0
            }));
          case 17:
          case "end":
            return _context34.stop();
        }
      }, _callee34, null, [[5, 14]]);
    }))();
  },
  getWebPPIUPaketHistoryByPpiu: function getWebPPIUPaketHistoryByPpiu(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee35() {
      var ip, path, method, findOneQuery, _yield$db$query35, rows, rowCount;
      return _regeneratorRuntime().wrap(function _callee35$(_context35) {
        while (1) switch (_context35.prev = _context35.next) {
          case 0:
            ///api/umrah/asuransi/pembayaran/{tanggal_awal}/{tanggal_akhir}/{page}
            //select * from parameter_header_get('10.100.88.14','general/header','POST','tes')
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = 'web/ppiu/paketHistory';
            method = 'GET';
            findOneQuery = "select * from ppiu_paket_get_by_ppiu_history($1,$2,$3,$4,$5)";
            console.log(findOneQuery, [ip, path, method, req.user.nip, req.user.organisasi]);
            _context35.prev = 5;
            _context35.next = 8;
            return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, req.user.organisasi]);
          case 8:
            _yield$db$query35 = _context35.sent;
            rows = _yield$db$query35.rows;
            rowCount = _yield$db$query35.rowCount;
            if (rowCount) {
              _context35.next = 15;
              break;
            }
            return _context35.abrupt("return", res.status(400).send({
              'RC': '05',
              'message': 'Tidak Ada Data'
            }));
          case 15:
            return _context35.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'Sukses',
              rows: rows
            }));
          case 16:
            _context35.next = 21;
            break;
          case 18:
            _context35.prev = 18;
            _context35.t0 = _context35["catch"](5);
            return _context35.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi Atau Data',
              error: _context35.t0
            }));
          case 21:
          case "end":
            return _context35.stop();
        }
      }, _callee35, null, [[5, 18]]);
    }))();
  },
  getWebDataKuantitatifJamaah: function getWebDataKuantitatifJamaah(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee36() {
      var ip, path, method, findOneQuery, _yield$db$query36, rows, rowCount, message, data;
      return _regeneratorRuntime().wrap(function _callee36$(_context36) {
        while (1) switch (_context36.prev = _context36.next) {
          case 0:
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = 'web/pusat/informasi';
            method = 'GET';
            findOneQuery = "select * from get_informasi_kuantitatif_jamaah($1,$2,$3,$4,$5,$6)";
            _context36.prev = 4;
            _context36.next = 7;
            return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, req.params.tahun, req.params.type]);
          case 7:
            _yield$db$query36 = _context36.sent;
            rows = _yield$db$query36.rows;
            rowCount = _yield$db$query36.rowCount;
            if (rowCount) {
              _context36.next = 14;
              break;
            }
            return _context36.abrupt("return", res.status(400).send({
              'RC': '07',
              'message': 'Data tidak ditemukan'
            }));
          case 14:
            message = rows[0].message;
            data = [];
            if (message === 'sukses') {
              data = rows[0].data;
            }
            return _context36.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': message,
              data: data
            }));
          case 18:
            _context36.next = 23;
            break;
          case 20:
            _context36.prev = 20;
            _context36.t0 = _context36["catch"](4);
            return _context36.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi Atau Data',
              error: _context36.t0
            }));
          case 23:
          case "end":
            return _context36.stop();
        }
      }, _callee36, null, [[4, 20]]);
    }))();
  },
  getWebDetailDataKuantitatifJamaah: function getWebDetailDataKuantitatifJamaah(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee37() {
      var ip, path, method, findOneQuery, _yield$db$query37, rows, rowCount, message, data;
      return _regeneratorRuntime().wrap(function _callee37$(_context37) {
        while (1) switch (_context37.prev = _context37.next) {
          case 0:
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = 'web/pusat/informasi';
            method = 'GET';
            findOneQuery = "select * from get_detail_informasi_kuantitatif_jamaah($1,$2,$3,$4,$5,$6,$7::varchar,$8)";
            _context37.prev = 4;
            _context37.next = 7;
            return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, req.params.tahun, req.params.type, req.params.filter, req.params.typedetail]);
          case 7:
            _yield$db$query37 = _context37.sent;
            rows = _yield$db$query37.rows;
            rowCount = _yield$db$query37.rowCount;
            if (rowCount) {
              _context37.next = 14;
              break;
            }
            return _context37.abrupt("return", res.status(400).send({
              'RC': '07',
              'message': 'Data tidak ditemukan'
            }));
          case 14:
            message = rows[0].message;
            data = [];
            if (message === 'sukses') {
              data = rows[0].data;
            }
            return _context37.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': message,
              data: data
            }));
          case 18:
            _context37.next = 23;
            break;
          case 20:
            _context37.prev = 20;
            _context37.t0 = _context37["catch"](4);
            return _context37.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi Atau Data',
              error: _context37.t0
            }));
          case 23:
          case "end":
            return _context37.stop();
        }
      }, _callee37, null, [[4, 20]]);
    }))();
  },
  getListExpiredJamaah: function getListExpiredJamaah(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee38() {
      var ip, path, method, findOneQuery, _yield$db$query38, rows, rowCount, message, data;
      return _regeneratorRuntime().wrap(function _callee38$(_context38) {
        while (1) switch (_context38.prev = _context38.next) {
          case 0:
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = 'web/ppiu/report/pendaftaran/';
            method = 'GET';
            findOneQuery = "select * from get_list_to_expired_jamaah($1,$2,$3,$4,$5,$6)";
            _context38.prev = 4;
            _context38.next = 7;
            return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, req.params.tahun, req.params.ppiu]);
          case 7:
            _yield$db$query38 = _context38.sent;
            rows = _yield$db$query38.rows;
            rowCount = _yield$db$query38.rowCount;
            if (rowCount) {
              _context38.next = 14;
              break;
            }
            return _context38.abrupt("return", res.status(400).send({
              'RC': '07',
              'message': 'Data tidak ditemukan'
            }));
          case 14:
            message = rows[0].message;
            data = [];
            if (message === 'sukses') {
              data = rows[0].data;
            }
            return _context38.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': message,
              data: data
            }));
          case 18:
            _context38.next = 23;
            break;
          case 20:
            _context38.prev = 20;
            _context38.t0 = _context38["catch"](4);
            return _context38.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi Atau Data',
              error: _context38.t0
            }));
          case 23:
          case "end":
            return _context38.stop();
        }
      }, _callee38, null, [[4, 20]]);
    }))();
  },
  getListExpiredPpiuJamaah: function getListExpiredPpiuJamaah(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee39() {
      var ip, path, method, findOneQuery, _yield$db$query39, rows, rowCount, message, data;
      return _regeneratorRuntime().wrap(function _callee39$(_context39) {
        while (1) switch (_context39.prev = _context39.next) {
          case 0:
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = 'web/ppiu/report/pendaftaran/';
            method = 'GET';
            findOneQuery = "select * from get_list_to_expired_ppiu_jamaah($1,$2,$3,$4,$5)";
            _context39.prev = 4;
            _context39.next = 7;
            return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, req.params.tahun]);
          case 7:
            _yield$db$query39 = _context39.sent;
            rows = _yield$db$query39.rows;
            rowCount = _yield$db$query39.rowCount;
            if (rowCount) {
              _context39.next = 14;
              break;
            }
            return _context39.abrupt("return", res.status(400).send({
              'RC': '07',
              'message': 'Data tidak ditemukan'
            }));
          case 14:
            message = rows[0].message;
            data = [];
            if (message === 'sukses') {
              data = rows[0].data;
            }
            return _context39.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': message,
              data: data
            }));
          case 18:
            _context39.next = 23;
            break;
          case 20:
            _context39.prev = 20;
            _context39.t0 = _context39["catch"](4);
            return _context39.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi Atau Data',
              error: _context39.t0
            }));
          case 23:
          case "end":
            return _context39.stop();
        }
      }, _callee39, null, [[4, 20]]);
    }))();
  }
}, "getWebPPIUPaketHistoryByPpiu", function getWebPPIUPaketHistoryByPpiu(req, res) {
  return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee40() {
    var ip, path, method, findOneQuery, _yield$db$query40, rows, rowCount;
    return _regeneratorRuntime().wrap(function _callee40$(_context40) {
      while (1) switch (_context40.prev = _context40.next) {
        case 0:
          ///api/umrah/asuransi/pembayaran/{tanggal_awal}/{tanggal_akhir}/{page}
          //select * from parameter_header_get('10.100.88.14','general/header','POST','tes')
          ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
          path = 'web/ppiu/paketHistory';
          method = 'GET';
          findOneQuery = "select * from ppiu_paket_get_by_ppiu_history($1,$2,$3,$4,$5)";
          console.log(findOneQuery, [ip, path, method, req.user.nip, req.user.organisasi]);
          _context40.prev = 5;
          _context40.next = 8;
          return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, req.user.organisasi]);
        case 8:
          _yield$db$query40 = _context40.sent;
          rows = _yield$db$query40.rows;
          rowCount = _yield$db$query40.rowCount;
          if (rowCount) {
            _context40.next = 15;
            break;
          }
          return _context40.abrupt("return", res.status(400).send({
            'RC': '05',
            'message': 'Tidak Ada Data'
          }));
        case 15:
          return _context40.abrupt("return", res.status(200).send({
            'RC': '00',
            'message': 'Sukses',
            rows: rows
          }));
        case 16:
          _context40.next = 21;
          break;
        case 18:
          _context40.prev = 18;
          _context40.t0 = _context40["catch"](5);
          return _context40.abrupt("return", res.status(400).send({
            'RC': '99',
            'message': 'Error Koneksi Atau Data',
            error: _context40.t0
          }));
        case 21:
        case "end":
          return _context40.stop();
      }
    }, _callee40, null, [[5, 18]]);
  }))();
}), "getWebPPIUPaketPendingByPpiu", function getWebPPIUPaketPendingByPpiu(req, res) {
  return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee41() {
    var ip, path, method, findOneQuery, _yield$db$query41, rows, rowCount;
    return _regeneratorRuntime().wrap(function _callee41$(_context41) {
      while (1) switch (_context41.prev = _context41.next) {
        case 0:
          ///api/umrah/asuransi/pembayaran/{tanggal_awal}/{tanggal_akhir}/{page}
          //select * from parameter_header_get('10.100.88.14','general/header','POST','tes')
          ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
          path = 'web/ppiu/paketPending';
          method = 'GET';
          findOneQuery = "select * from ppiu_paket_get_by_ppiu_pending($1,$2,$3,$4,$5)";
          console.log(findOneQuery, [ip, path, method, req.user.nip, req.user.organisasi]);
          _context41.prev = 5;
          _context41.next = 8;
          return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, req.user.organisasi]);
        case 8:
          _yield$db$query41 = _context41.sent;
          rows = _yield$db$query41.rows;
          rowCount = _yield$db$query41.rowCount;
          if (rowCount) {
            _context41.next = 15;
            break;
          }
          return _context41.abrupt("return", res.status(400).send({
            'RC': '05',
            'message': 'Tidak Ada Data'
          }));
        case 15:
          return _context41.abrupt("return", res.status(200).send({
            'RC': '00',
            'message': 'Sukses',
            rows: rows
          }));
        case 16:
          _context41.next = 21;
          break;
        case 18:
          _context41.prev = 18;
          _context41.t0 = _context41["catch"](5);
          return _context41.abrupt("return", res.status(400).send({
            'RC': '99',
            'message': 'Error Koneksi Atau Data',
            error: _context41.t0
          }));
        case 21:
        case "end":
          return _context41.stop();
      }
    }, _callee41, null, [[5, 18]]);
  }))();
}), "getWebPPIUPaketPendingPusat", function getWebPPIUPaketPendingPusat(req, res) {
  return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee42() {
    var ip, path, method, findOneQuery, _yield$db$query42, rows, rowCount;
    return _regeneratorRuntime().wrap(function _callee42$(_context42) {
      while (1) switch (_context42.prev = _context42.next) {
        case 0:
          ///api/umrah/asuransi/pembayaran/{tanggal_awal}/{tanggal_akhir}/{page}
          //select * from parameter_header_get('10.100.88.14','general/header','POST','tes')
          ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
          path = 'web/pusat/paket/pending';
          method = 'GET';
          findOneQuery = "select * from pusat_paket_get_by_ppiu_pending($1,$2,$3,$4)";
          console.log(findOneQuery, [ip, path, method, req.user.nip]);
          _context42.prev = 5;
          _context42.next = 8;
          return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip]);
        case 8:
          _yield$db$query42 = _context42.sent;
          rows = _yield$db$query42.rows;
          rowCount = _yield$db$query42.rowCount;
          if (rowCount) {
            _context42.next = 15;
            break;
          }
          return _context42.abrupt("return", res.status(400).send({
            'RC': '05',
            'message': 'Tidak Ada Data'
          }));
        case 15:
          return _context42.abrupt("return", res.status(200).send({
            'RC': '00',
            'message': 'sukses',
            rows: rows
          }));
        case 16:
          _context42.next = 21;
          break;
        case 18:
          _context42.prev = 18;
          _context42.t0 = _context42["catch"](5);
          return _context42.abrupt("return", res.status(400).send({
            'RC': '99',
            'message': 'Error Koneksi Atau Data',
            error: _context42.t0
          }));
        case 21:
        case "end":
          return _context42.stop();
      }
    }, _callee42, null, [[5, 18]]);
  }))();
}), "updatePaketPending2", function updatePaketPending2(req, res) {
  return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee43() {
    var ip, path, method, findOneQuery, _yield$db$query43, rows, rowCount, message;
    return _regeneratorRuntime().wrap(function _callee43$(_context43) {
      while (1) switch (_context43.prev = _context43.next) {
        case 0:
          ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
          path = 'web/pusat/paket/pending/';
          method = 'POST';
          _context43.prev = 3;
          findOneQuery = "select * from pusat_paket_approval ($1,$2,$3,$4,$5,$6)";
          console.log(findOneQuery, [ip, path, method, req.user.nip, req.body.paketid, req.body.statusApproval]);
          _context43.next = 8;
          return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, req.body.paketid, req.body.statusApproval]);
        case 8:
          _yield$db$query43 = _context43.sent;
          rows = _yield$db$query43.rows;
          rowCount = _yield$db$query43.rowCount;
          if (!(!rowCount || !rows[0].rows)) {
            _context43.next = 15;
            break;
          }
          return _context43.abrupt("return", res.status(400).send({
            'RC': '05',
            'message': 'tidak ada data '
          }));
        case 15:
          message = rows[0].hasil;
          rows = rows[0].rows;
          return _context43.abrupt("return", res.status(200).send({
            'RC': '00',
            'message': 'sukses',
            rows: rows
          }));
        case 18:
          _context43.next = 23;
          break;
        case 20:
          _context43.prev = 20;
          _context43.t0 = _context43["catch"](3);
          return _context43.abrupt("return", res.status(400).send({
            'RC': '99',
            'message': 'Error Koneksi atau data',
            error: _context43.t0
          }));
        case 23:
        case "end":
          return _context43.stop();
      }
    }, _callee43, null, [[3, 20]]);
  }))();
}), "updatePaketPending", function updatePaketPending(req, res) {
  return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee44() {
    var ip, path, method, findOneQuery, _yield$db$query44, rows, rowCount;
    return _regeneratorRuntime().wrap(function _callee44$(_context44) {
      while (1) switch (_context44.prev = _context44.next) {
        case 0:
          ///api/umrah/asuransi/pembayaran/{tanggal_awal}/{tanggal_akhir}/{page}
          //select * from parameter_header_get('10.100.88.14','general/header','POST','tes')
          ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
          path = 'web/pusat/paket/pending/';
          method = 'POST';
          findOneQuery = "select * from pusat_paket_approval($1,$2,$3,$4,$5,$6)";
          console.log(findOneQuery, [ip, path, method, req.user.nip, req.body.paketid, req.body.statusApproval]);
          _context44.prev = 5;
          _context44.next = 8;
          return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, req.body.paketid, req.body.statusApproval]);
        case 8:
          _yield$db$query44 = _context44.sent;
          rows = _yield$db$query44.rows;
          rowCount = _yield$db$query44.rowCount;
          if (rowCount) {
            _context44.next = 15;
            break;
          }
          return _context44.abrupt("return", res.status(400).send({
            'RC': '05',
            'message': 'tidak ada  Data'
          }));
        case 15:
          return _context44.abrupt("return", res.status(200).send({
            'RC': '00',
            'message': 'berhasil',
            rows: rows
          }));
        case 16:
          _context44.next = 21;
          break;
        case 18:
          _context44.prev = 18;
          _context44.t0 = _context44["catch"](5);
          return _context44.abrupt("return", res.status(400).send({
            'RC': '99',
            'message': 'Error Koneksi atau data',
            error: _context44.t0
          }));
        case 21:
        case "end":
          return _context44.stop();
      }
    }, _callee44, null, [[5, 18]]);
  }))();
}), "cetakSuratPendaftaranJamaah", function cetakSuratPendaftaranJamaah(req, res) {
  return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee45() {
    var ip, path, method, findOneQuery, _yield$db$query45, rows, rowCount;
    return _regeneratorRuntime().wrap(function _callee45$(_context45) {
      while (1) switch (_context45.prev = _context45.next) {
        case 0:
          ///api/umrah/asuransi/pembayaran/{tanggal_awal}/{tanggal_akhir}/{page}
          //select * from parameter_header_get('10.100.88.14','general/header','POST','tes')
          ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
          path = '/api/web/ppiu/report/pendaftaran';
          method = 'GET';
          findOneQuery = "select * from cetakSuratPendaftaranUmroh($1,$2,$3,$4,$5)";
          console.log(findOneQuery, [ip, path, method, req.user.nip, req.user.organisasi]);
          _context45.prev = 5;
          _context45.next = 8;
          return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, req.params.jamaah_id]);
        case 8:
          _yield$db$query45 = _context45.sent;
          rows = _yield$db$query45.rows;
          rowCount = _yield$db$query45.rowCount;
          if (rowCount) {
            _context45.next = 15;
            break;
          }
          return _context45.abrupt("return", res.status(400).send({
            'RC': '05',
            'message': 'Tidak Ada Data'
          }));
        case 15:
          return _context45.abrupt("return", res.status(200).send({
            'RC': '00',
            'message': 'Sukses',
            rows: rows
          }));
        case 16:
          _context45.next = 21;
          break;
        case 18:
          _context45.prev = 18;
          _context45.t0 = _context45["catch"](5);
          return _context45.abrupt("return", res.status(400).send({
            'RC': '99',
            'message': 'Error Koneksi Atau Data',
            error: _context45.t0
          }));
        case 21:
        case "end":
          return _context45.stop();
      }
    }, _callee45, null, [[5, 18]]);
  }))();
}), "cetakSuratPerjanjianJamaah", function cetakSuratPerjanjianJamaah(req, res) {
  return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee46() {
    var ip, path, method, findOneQuery, _yield$db$query46, rows, rowCount;
    return _regeneratorRuntime().wrap(function _callee46$(_context46) {
      while (1) switch (_context46.prev = _context46.next) {
        case 0:
          ///api/umrah/asuransi/pembayaran/{tanggal_awal}/{tanggal_akhir}/{page}
          //select * from parameter_header_get('10.100.88.14','general/header','POST','tes')
          ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
          path = '/api/web/ppiu/report/kontrak/';
          method = 'GET';
          findOneQuery = "select * from cetakSuratPerjanjianJamaah($1,$2,$3,$4,$5)";
          console.log(findOneQuery, [ip, path, method, req.user.nip, req.user.organisasi]);
          _context46.prev = 5;
          _context46.next = 8;
          return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, req.params.jamaah_id]);
        case 8:
          _yield$db$query46 = _context46.sent;
          rows = _yield$db$query46.rows;
          rowCount = _yield$db$query46.rowCount;
          if (rowCount) {
            _context46.next = 15;
            break;
          }
          return _context46.abrupt("return", res.status(400).send({
            'RC': '05',
            'message': 'Tidak Ada Data'
          }));
        case 15:
          return _context46.abrupt("return", res.status(200).send({
            'RC': '00',
            'message': 'Sukses',
            rows: rows
          }));
        case 16:
          _context46.next = 21;
          break;
        case 18:
          _context46.prev = 18;
          _context46.t0 = _context46["catch"](5);
          return _context46.abrupt("return", res.status(400).send({
            'RC': '99',
            'message': 'Error Koneksi Atau Data',
            error: _context46.t0
          }));
        case 21:
        case "end":
          return _context46.stop();
      }
    }, _callee46, null, [[5, 18]]);
  }))();
}), "pembatalanPembayaran", function pembatalanPembayaran(req, res) {
  return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee47() {
    var ip, path, method, findOneQuery, _yield$db$query47, rows, rowCount;
    return _regeneratorRuntime().wrap(function _callee47$(_context47) {
      while (1) switch (_context47.prev = _context47.next) {
        case 0:
          ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
          path = '/api/web/pusat/pembayaran/batal';
          method = 'POST';
          _context47.prev = 3;
          findOneQuery = "select * from pembatalan_pembayaran ($1,$2,$3,$4,$5,$6,$7)";
          /*console.log(findOneQuery,[ip, path, method, req.user.nip, 
          req.body.pembayaran_id, req.body.no_registrasi, req.body.keterangan]);*/
          _context47.next = 7;
          return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, req.body.pembayaran_id, req.body.no_registrasi, req.body.keterangan]);
        case 7:
          _yield$db$query47 = _context47.sent;
          rows = _yield$db$query47.rows;
          rowCount = _yield$db$query47.rowCount;
          if (rowCount) {
            _context47.next = 14;
            break;
          }
          return _context47.abrupt("return", res.status(400).send({
            'RC': '05',
            'message': 'tidak ada data '
          }));
        case 14:
          return _context47.abrupt("return", res.status(200).send({
            'RC': '00',
            'message': 'Sukses',
            rows: rows
          }));
        case 15:
          _context47.next = 20;
          break;
        case 17:
          _context47.prev = 17;
          _context47.t0 = _context47["catch"](3);
          return _context47.abrupt("return", res.status(400).send({
            'RC': '99',
            'message': 'Error Koneksi atau data',
            error: _context47.t0
          }));
        case 20:
        case "end":
          return _context47.stop();
      }
    }, _callee47, null, [[3, 17]]);
  }))();
}), "getListPembayaranByNoReg", function getListPembayaranByNoReg(req, res) {
  return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee48() {
    var ip, path, method, findOneQuery, _yield$db$query48, rows, rowCount;
    return _regeneratorRuntime().wrap(function _callee48$(_context48) {
      while (1) switch (_context48.prev = _context48.next) {
        case 0:
          //select * from parameter_header_get('10.100.88.14','general/header','POST','tes')
          ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
          path = '/api/web/pusat/pembayaran/';
          method = 'GET';
          findOneQuery = "select * from get_pembayaran_by_no_reg($1,$2,$3,$4,$5)";
          _context48.prev = 4;
          _context48.next = 7;
          return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, req.params.no_registrasi]);
        case 7:
          _yield$db$query48 = _context48.sent;
          rows = _yield$db$query48.rows;
          rowCount = _yield$db$query48.rowCount;
          if (rowCount) {
            _context48.next = 14;
            break;
          }
          return _context48.abrupt("return", res.status(400).send({
            'RC': '05',
            'message': 'Tidak Ada Data'
          }));
        case 14:
          return _context48.abrupt("return", res.status(200).send({
            'RC': '00',
            'message': 'Sukses',
            rows: rows
          }));
        case 15:
          _context48.next = 20;
          break;
        case 17:
          _context48.prev = 17;
          _context48.t0 = _context48["catch"](4);
          return _context48.abrupt("return", res.status(400).send({
            'RC': '99',
            'message': 'Error Koneksi Atau Data',
            error: _context48.t0
          }));
        case 20:
        case "end":
          return _context48.stop();
      }
    }, _callee48, null, [[4, 17]]);
  }))();
});
var _default = exports["default"] = Web;