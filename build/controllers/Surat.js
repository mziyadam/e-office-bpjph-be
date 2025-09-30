"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _db = _interopRequireDefault(require("../db"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var stream = _interopRequireWildcard(require("stream"));
var _pdfLib = require("pdf-lib");
var _jsBase = require("js-base64");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var _require = require('path'),
  resolve = _require.resolve;
_dotenv["default"].config();
var Minio = require("minio");
var fs = require("fs");
var axios = require('axios');
var FormData = require('form-data');
var path = require('path');
var base64 = require('base64topdf');
if (process.env.MINIO_PHP_USE_SSL) {
  var ssl = true;
} else {
  var ssl = false;
}
var minioClient = new Minio.Client({
  endPoint: process.env.MINIO_ENDPOINT,
  port: parseInt(process.env.MINIO_PORT),
  useSSL: false,
  accessKey: process.env.MINIO_ACCESSKEY,
  secretKey: process.env.MINIO_SECRETKEY
});
function tteProses(_x, _x2, _x3) {
  return _tteProses.apply(this, arguments);
}
function _tteProses() {
  _tteProses = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee27(pathlokal, pathTte, passphrase) {
    var path2, username, password, hasil, auth, pdfFile, data, config, res;
    return _regeneratorRuntime().wrap(function _callee27$(_context27) {
      while (1) switch (_context27.prev = _context27.next) {
        case 0:
          _context27.prev = 0;
          path2 = process.env.API_TTE_SIGN_URL;
          username = process.env.API_TTE_USERNAME;
          password = process.env.API_TTE_PASSWORD;
          hasil = 'sukses';
          auth = 'Basic ' + Buffer.from(username + ':' + password).toString('base64'); // let specimen = "data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg==";
          pdfFile = pathlokal;
          console.log('pdfFile:' + pdfFile);
          data = new FormData(); // data.append('file', pdfFile);
          //data.append('file', fs.createReadStream('/C:/Users/ferna/Downloads/tes.pdf'));
          data.append('file', fs.createReadStream(pdfFile));
          // data.append('file', fs.createReadStream('C:/Users/ferna/Documents/pdf/Nota Dinas.pdf'));
          // data.append('nik',  req.user.nip);
          data.append('nik', req.user.nik);
          //data.append('passphrase', req.body.passphrase);
          data.append('passphrase', passphrase);
          data.append('tampilan', 'visible');
          data.append('page', '1');
          data.append('linkQR', 'https://ptsp.halal.go.id/tte_surat/kemenko_bidang_pmk.pdf');
          data.append('xAxis', '10');
          data.append('yAxis', '10');
          data.append('width', '60');
          data.append('height', '60');
          config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: path2,
            headers: _objectSpread({
              'Authorization': auth
            }, data.getHeaders()),
            responseType: "stream",
            data: data
          }; // var pathTte2 = path.resolve(__dirname,  '../temp/' +    req.body.id + '-tte.pdf')
          // const writer = createWriteStream(pathTte2);
          // var pathTte = path.resolve(__dirname,  '../temp/' +    req.body.id + '-tte.pdf')
          /* axios(config).then(response => {
            
            response.data.pipe(fs.createWriteStream(pathTte));
             })
           .catch((error) => {
              console.log('errorxx:'+error);
              hasil= JSON.stringify(error.response.data)
          
          }); */
          _context27.prev = 20;
          _context27.next = 23;
          return axios(config);
        case 23:
          res = _context27.sent;
          res.data.pipe(fs.createWriteStream(pathTte));
          _context27.next = 29;
          break;
        case 27:
          _context27.prev = 27;
          _context27.t0 = _context27["catch"](20);
        case 29:
          _context27.next = 35;
          break;
        case 31:
          _context27.prev = 31;
          _context27.t1 = _context27["catch"](0);
          console.log(_context27.t1);
          hasil = 'gagal';
        case 35:
          return _context27.abrupt("return", hasil);
        case 36:
        case "end":
          return _context27.stop();
      }
    }, _callee27, null, [[0, 31], [20, 27]]);
  }));
  return _tteProses.apply(this, arguments);
}
var Surat = {
  crudSuratTugas: function crudSuratTugas(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var ip, path, method, findOneQuery, _yield$db$query, rows, rowCount, data;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = '/api/admin/suratTugas';
            method = 'POST';
            findOneQuery = "select * from eoffice.surat_tugas_crud  ($1,$2,$3,$4,$5::json)";
            console.log(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body)]);
            //  console.log(req.user.nip);
            _context.prev = 5;
            _context.next = 8;
            return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body)]);
          case 8:
            _yield$db$query = _context.sent;
            rows = _yield$db$query.rows;
            rowCount = _yield$db$query.rowCount;
            if (rowCount) {
              _context.next = 15;
              break;
            }
            return _context.abrupt("return", res.status(400).send({
              'RC': '05',
              'message': 'Tidak Ada Data'
            }));
          case 15:
            data = rows[0].data;
            return _context.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'Sukses',
              data: data
            }));
          case 17:
            _context.next = 22;
            break;
          case 19:
            _context.prev = 19;
            _context.t0 = _context["catch"](5);
            return _context.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi Atau Data',
              error: _context.t0
            }));
          case 22:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[5, 19]]);
    }))();
  },
  crudNotaDinas: function crudNotaDinas(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var ip, path, method, findOneQuery, _yield$db$query2, rows, rowCount, data;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = '/api/admin/NotaDinas';
            method = 'POST';
            findOneQuery = "select * from eoffice.nota_dinas_crud  ($1,$2,$3,$4,$5::json)";
            console.log(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body)]);
            //  console.log(req.user.nip);
            _context2.prev = 5;
            _context2.next = 8;
            return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body)]);
          case 8:
            _yield$db$query2 = _context2.sent;
            rows = _yield$db$query2.rows;
            rowCount = _yield$db$query2.rowCount;
            if (rowCount) {
              _context2.next = 15;
              break;
            }
            return _context2.abrupt("return", res.status(400).send({
              'RC': '05',
              'message': 'Tidak Ada Data'
            }));
          case 15:
            data = rows[0].data;
            return _context2.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'Sukses',
              data: data
            }));
          case 17:
            _context2.next = 22;
            break;
          case 19:
            _context2.prev = 19;
            _context2.t0 = _context2["catch"](5);
            return _context2.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi Atau Data',
              error: _context2.t0
            }));
          case 22:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[5, 19]]);
    }))();
  },
  crudSuratKeluar: function crudSuratKeluar(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var ip, path, method, findOneQuery, _yield$db$query3, rows, rowCount, data;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = '/api/admin/SuratKeluar';
            method = 'POST';
            findOneQuery = "select * from eoffice.surat_keluar_crud  ($1,$2,$3,$4,$5::json)";
            console.log(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body)]);
            //  console.log(req.user.nip);
            _context3.prev = 5;
            _context3.next = 8;
            return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body)]);
          case 8:
            _yield$db$query3 = _context3.sent;
            rows = _yield$db$query3.rows;
            rowCount = _yield$db$query3.rowCount;
            if (rowCount) {
              _context3.next = 15;
              break;
            }
            return _context3.abrupt("return", res.status(400).send({
              'RC': '05',
              'message': 'Tidak Ada Data'
            }));
          case 15:
            data = rows[0].data;
            return _context3.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'Sukses',
              data: data
            }));
          case 17:
            _context3.next = 22;
            break;
          case 19:
            _context3.prev = 19;
            _context3.t0 = _context3["catch"](5);
            return _context3.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi Atau Data',
              error: _context3.t0
            }));
          case 22:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[5, 19]]);
    }))();
  },
  crudSuratMasuk: function crudSuratMasuk(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var ip, path, method, findOneQuery, _yield$db$query4, rows, rowCount, data;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = '/api/admin/SuratMasuk';
            method = 'POST';
            findOneQuery = "select * from eoffice.surat_masuk_crud  ($1,$2,$3,$4,$5::json)";
            console.log(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body)]);
            //  console.log(req.user.nip);
            _context4.prev = 5;
            _context4.next = 8;
            return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body)]);
          case 8:
            _yield$db$query4 = _context4.sent;
            rows = _yield$db$query4.rows;
            rowCount = _yield$db$query4.rowCount;
            if (rowCount) {
              _context4.next = 15;
              break;
            }
            return _context4.abrupt("return", res.status(400).send({
              'RC': '05',
              'message': 'Tidak Ada Data'
            }));
          case 15:
            data = rows[0].data;
            return _context4.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'Sukses',
              data: data
            }));
          case 17:
            _context4.next = 22;
            break;
          case 19:
            _context4.prev = 19;
            _context4.t0 = _context4["catch"](5);
            return _context4.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi Atau Data',
              error: _context4.t0
            }));
          case 22:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[5, 19]]);
    }))();
  },
  changeStatus: function changeStatus(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      var ip, path, method, findOneQuery, _yield$db$query5, rows, rowCount, data;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = '/api/surat/surat_keluar/approval';
            method = 'POST';
            findOneQuery = "select * from eoffice.surat_keluar_approval  ($1,$2,$3,$4,$5::json)";
            console.log(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body)]);
            //console.log(req.user);
            _context5.prev = 5;
            _context5.next = 8;
            return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, req.body]);
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
            data = rows[0].data;
            console.log(rows);
            return _context5.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'Sukses',
              data: data
            }));
          case 18:
            _context5.next = 24;
            break;
          case 20:
            _context5.prev = 20;
            _context5.t0 = _context5["catch"](5);
            console.log(_context5.t0);
            return _context5.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi Atau Data',
              error: _context5.t0
            }));
          case 24:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[5, 20]]);
    }))();
  },
  changeStatusND: function changeStatusND(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
      var ip, path, method, findOneQuery, _yield$db$query6, rows, rowCount, data;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = '/api/surat/nota_dinas/approval';
            method = 'POST';
            findOneQuery = "select * from eoffice.nota_dinas_approval  ($1,$2,$3,$4,$5::json)";
            console.log(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body)]);
            //console.log(req.user);
            _context6.prev = 5;
            _context6.next = 8;
            return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, req.body]);
          case 8:
            _yield$db$query6 = _context6.sent;
            rows = _yield$db$query6.rows;
            rowCount = _yield$db$query6.rowCount;
            if (rowCount) {
              _context6.next = 15;
              break;
            }
            return _context6.abrupt("return", res.status(400).send({
              'RC': '05',
              'message': 'Tidak Ada Data'
            }));
          case 15:
            data = rows[0].data;
            console.log(rows);
            return _context6.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'Sukses',
              data: data
            }));
          case 18:
            _context6.next = 24;
            break;
          case 20:
            _context6.prev = 20;
            _context6.t0 = _context6["catch"](5);
            console.log(_context6.t0);
            return _context6.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi Atau Data',
              error: _context6.t0
            }));
          case 24:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[5, 20]]);
    }))();
  },
  getApprovalDdl: function getApprovalDdl(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
      var param, findOneQuery, ip, path, method, _yield$db$query7, rows, rowCount, data;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            /// ddl header untuk web
            param = {
              type: 'get_ddl_approval',
              id_surat: req.params.id_surat
            };
            findOneQuery = '';
            if (req.params.type_surat == 'surat_keluar') {
              findOneQuery = "select * from eoffice.surat_keluar_approval($1,$2,$3,$4,$5::json)";
            }
            if (req.params.type_surat == 'nota_dinas') {
              findOneQuery = "select * from eoffice.nota_dinas_approval($1,$2,$3,$4,$5::json)";
            }
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = '/api/surat/surat_keluar/getApprovalDdl';
            method = 'GET';
            console.log(findOneQuery, [ip, path, method, req.user.nip, param]);
            _context7.prev = 8;
            _context7.next = 11;
            return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, param]);
          case 11:
            _yield$db$query7 = _context7.sent;
            rows = _yield$db$query7.rows;
            rowCount = _yield$db$query7.rowCount;
            if (rowCount) {
              _context7.next = 18;
              break;
            }
            return _context7.abrupt("return", res.status(200).send({
              'RC': '05',
              'message': 'Tidak ada Data'
            }));
          case 18:
            data = rows[0].data;
            return _context7.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'Sukses',
              data: data
            }));
          case 20:
            _context7.next = 25;
            break;
          case 22:
            _context7.prev = 22;
            _context7.t0 = _context7["catch"](8);
            return _context7.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi atau Data',
              error: _context7.t0
            }));
          case 25:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[8, 22]]);
    }))();
  },
  crudSuratLainya: function crudSuratLainya(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
      var ip, path, method, findOneQuery, _yield$db$query8, rows, rowCount, data;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = '/api/admin/SuratLainnya';
            method = 'POST';
            findOneQuery = "select * from eoffice.surat_lainnya_crud  ($1,$2,$3,$4,$5::json)";
            console.log(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body)]);
            //  console.log(req.user.nip);
            _context8.prev = 5;
            _context8.next = 8;
            return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body)]);
          case 8:
            _yield$db$query8 = _context8.sent;
            rows = _yield$db$query8.rows;
            rowCount = _yield$db$query8.rowCount;
            if (rowCount) {
              _context8.next = 15;
              break;
            }
            return _context8.abrupt("return", res.status(400).send({
              'RC': '05',
              'message': 'Tidak Ada Data'
            }));
          case 15:
            data = rows[0].data;
            return _context8.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'Sukses',
              data: data
            }));
          case 17:
            _context8.next = 22;
            break;
          case 19:
            _context8.prev = 19;
            _context8.t0 = _context8["catch"](5);
            return _context8.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi Atau Data',
              error: _context8.t0
            }));
          case 22:
          case "end":
            return _context8.stop();
        }
      }, _callee8, null, [[5, 19]]);
    }))();
  },
  crudTTE: function crudTTE(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
      var ip, path, method, findOneQuery, _yield$db$query9, rows, rowCount, data;
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = '/api/surat/tte';
            method = 'POST';
            findOneQuery = "select * from eoffice.tte_surat_crud  ($1,$2,$3,$4,$5::json)"; //console.log(findOneQuery, [ip, path, method, 'verifikasi', JSON.stringify(req.body)]);
            // hapus file temp
            // var pathTte = path.resolve(__dirname,  '../temp/' +    req.body.id + '-tte.pdf')
            // fs.unlinkSync(req.pathlokal);
            //  fs.unlinkSync(pathTte);
            //  console.log(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body)]);
            //  console.log(req.user.nip);
            _context9.prev = 4;
            _context9.next = 7;
            return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body)]);
          case 7:
            _yield$db$query9 = _context9.sent;
            rows = _yield$db$query9.rows;
            rowCount = _yield$db$query9.rowCount;
            if (rowCount) {
              _context9.next = 14;
              break;
            }
            return _context9.abrupt("return", res.status(400).send({
              'RC': '05',
              'message': 'Tidak Ada Data'
            }));
          case 14:
            data = rows[0].data;
            return _context9.abrupt("return", res.status(200).send({
              'RC': rows[0].rc,
              'message': rows[0].message,
              data: data
            }));
          case 16:
            _context9.next = 21;
            break;
          case 18:
            _context9.prev = 18;
            _context9.t0 = _context9["catch"](4);
            return _context9.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi Atau Data',
              error: _context9.t0
            }));
          case 21:
          case "end":
            return _context9.stop();
        }
      }, _callee9, null, [[4, 18]]);
    }))();
  },
  getSuratFileOld: function getSuratFileOld(req, res, next) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
      var bucket, pathlokal, pathlokal2;
      return _regeneratorRuntime().wrap(function _callee10$(_context10) {
        while (1) switch (_context10.prev = _context10.next) {
          case 0:
            if (req.body.surat_url) {
              _context10.next = 2;
              break;
            }
            return _context10.abrupt("return", res.status(500).send('Url Surat Tidak Boleh Kosong'));
          case 2:
            req.body.type = 'update-status-tte';
            bucket = process.env.MINIO_BUCKET;
            pathlokal = (__dirname, 'temp/' + req.body.id + '.pdf');
            pathlokal = 'd:/temp2/' + req.body.id + '.pdf';
            pathlokal2 = path.resolve(__dirname, '../temp/' + req.body.id + '.pdf');
            req.pathlokal = pathlokal2;

            //  var pathlokal2 = (req.body.id+ '.pdf')

            console.log('path:' + pathlokal2);
            console.log('surat_url:' + req.body.surat_url);
            // fs.unlinkSync(pdfFile);
            fs.rmSync(pathlokal2, {
              force: true
            });
            minioClient.fGetObject(bucket, req.body.surat_url, pathlokal2, function (err) {
              if (err) {
                console.log(err);
                var body = {
                  "RC": "00",
                  "message": "Sukses",
                  "data": {
                    "message": "File Tidak Ditemukan!"
                  }
                };
                return res.status(200).send(body);
              }
              console.log('success');
              //return res.status(200).send('success');
              next();
            });

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
          case 12:
          case "end":
            return _context10.stop();
        }
      }, _callee10);
    }))();
  },
  SignTTEOld: function SignTTEOld(req, res, next) {
    try {
      var path2 = process.env.API_TTE_SIGN_URL;
      var username = process.env.API_TTE_USERNAME;
      var password = process.env.API_TTE_PASSWORD;
      var auth = 'Basic ' + Buffer.from(username + ':' + password).toString('base64');
      // let specimen = "data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg==";

      var pdfFile = req.pathlokal;
      console.log('path2:' + pdfFile);
      var data = new FormData();
      // data.append('file', pdfFile);
      //data.append('file', fs.createReadStream('/C:/Users/ferna/Downloads/tes.pdf'));
      data.append('file', fs.createReadStream(pdfFile));
      // data.append('file', fs.createReadStream('C:/Users/ferna/Documents/pdf/Nota Dinas.pdf'));
      // data.append('nik',  req.user.nip);
      data.append('nik', req.user.nik);
      data.append('passphrase', req.body.passphrase);
      data.append('tampilan', 'visible');
      data.append('page', '1');
      data.append('linkQR', 'https://localhost');
      data.append('xAxis', '10');
      data.append('yAxis', '10');
      data.append('width', '40');
      data.append('height', '40');
      var config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: path2,
        headers: _objectSpread({
          'Authorization': auth
        }, data.getHeaders()),
        responseType: "stream",
        data: data
      };
      axios.request(config).then(function (response) {
        // console.log(JSON.stringify(response.data));
        //fs.unlinkSync(pdfFile);
        // return res.status(200).send(response.data);
        // str = str.substring(0, str.length - 1);
        var urltte = req.body.surat_url.substring(0, req.body.surat_url.length - 4);
        var pathTte = path.resolve(__dirname, '../temp/' + req.body.id + '-tte.pdf');
        console.log('pathTte:' + pathTte);
        var writer = fs.createWriteStream(pathTte);
        response.data.pipe(writer);
        console.log('urltte:' + urltte + '-tte.pdf');
        // req.pathTTE = pathTte
        req.body.tte_url = urltte + '-tte.pdf';
        next();
      })["catch"](function (error) {
        console.log('errorxx:' + error);

        // fs.unlinkSync(pdfFile);
        req.body.tte_status = -1;
        req.body.tte_url = null;
        req.body.tte_keterangan = JSON.stringify(error.response.data);
        next();
        //console.log('xxx:'+error.value);
      });
    } catch (error) {
      console.log(error);
      // fs.unlinkSync(pdfFile);
      return res.status(400).send({
        'RC': '99',
        'message2': error
      });
    }
    // fs.unlinkSync(pdfFile);
  },
  uploadTTE: function uploadTTE(req, res, next) {
    // var pathTte = path.resolve(__dirname,  '../temp/' +    req.body.id + '-tte.pdf')
    // pathTte='d:/Dokumen/git/bpjph/bpjph_eoffice/eoffice-be/src/temp/01a45269-ef8f-44d6-919f-c2164cf9302a-tte.pdf';

    //minioClient.fPutObject(process.env.MINIO_BUCKET, req.body.tte_url,   pathTte, function(err, etag) {
    //console.log('req.pathMinioDestination:'+req.pathMinioDestination);
    //  console.log('req.pathSign:'+req.pathSign);
    minioClient.fPutObject(process.env.MINIO_BUCKET, req.pathMinioDestination, req.pathSign, function (err, etag) {
      // minioClient.putObject(process.env.MINIO_BUCKET,  urltte + '-tte.pdf', response.data, function(err, etag) {
      if (err) {
        console.log('Error Upload File.', err);
        return res.status(400).send({
          'message': 'Error Upload File'
        });
      }
      console.log('Berhasil Upload:' + req.pathSign);
      req.body.tte_status = req.tte_status_berhasil;
      req.body.tte_keterangan = req.tte_keterangan_berhasil;
      fs.rmSync(req.pathSign, {
        force: true
      });
      next();
      //return res.status(200).send({ 'message': 'Berhasil Upload' });
    });
  },
  SignTTEx: function SignTTEx(req, res, next) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
      var path2, username, password, auth, pdfFile, data, config, pathTte2;
      return _regeneratorRuntime().wrap(function _callee11$(_context11) {
        while (1) switch (_context11.prev = _context11.next) {
          case 0:
            _context11.prev = 0;
            path2 = process.env.API_TTE_SIGN_URL;
            username = process.env.API_TTE_USERNAME;
            password = process.env.API_TTE_PASSWORD;
            auth = 'Basic ' + Buffer.from(username + ':' + password).toString('base64'); // let specimen = "data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg==";
            pdfFile = req.pathlokal;
            console.log('path2:' + pdfFile);
            data = new FormData(); // data.append('file', pdfFile);
            //data.append('file', fs.createReadStream('/C:/Users/ferna/Downloads/tes.pdf'));
            data.append('file', fs.createReadStream(pdfFile));
            // data.append('file', fs.createReadStream('C:/Users/ferna/Documents/pdf/Nota Dinas.pdf'));
            // data.append('nik',  req.user.nip);
            data.append('nik', req.user.nik);
            data.append('passphrase', req.body.passphrase);
            data.append('tampilan', 'visible');
            data.append('page', '1');
            data.append('linkQR', 'https://localhost');
            data.append('xAxis', '10');
            data.append('yAxis', '10');
            data.append('width', '40');
            data.append('height', '40');
            config = {
              method: 'post',
              maxBodyLength: Infinity,
              url: path2,
              headers: _objectSpread({
                'Authorization': auth
              }, data.getHeaders()),
              responseType: "stream",
              data: data
            };
            pathTte2 = path.resolve(__dirname, '../temp/' + req.body.id + '-tte.pdf'); // const writer = createWriteStream(pathTte2);
            axios(config).then(function (response) {
              //  console.log(data);
              var urltte = req.body.surat_url.substring(0, req.body.surat_url.length - 4);
              var pathTte = path.resolve(__dirname, '../temp/' + req.body.id + '-tte.pdf');
              console.log('pathTte:' + pathTte);
              response.data.pipe(fs.createWriteStream(pathTte));
              console.log('urltte:' + urltte + '-tte.pdf');
              // req.pathTTE = pathTte
              req.body.tte_url = urltte + '-tte.pdf';
              next();
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
            _context11.next = 27;
            break;
          case 23:
            _context11.prev = 23;
            _context11.t0 = _context11["catch"](0);
            console.log(_context11.t0);
            // fs.unlinkSync(pdfFile);
            return _context11.abrupt("return", res.status(400).send({
              'RC': '99',
              'message2': _context11.t0
            }));
          case 27:
          case "end":
            return _context11.stop();
        }
      }, _callee11, null, [[0, 23]]);
    }))();
  },
  uploadTTE2: function uploadTTE2(req, res, next) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
      var pathTte, pathlokal, urltte, passphrase, urlTTe;
      return _regeneratorRuntime().wrap(function _callee12$(_context12) {
        while (1) switch (_context12.prev = _context12.next) {
          case 0:
            _context12.prev = 0;
            pathTte = path.resolve(__dirname, '../temp/' + req.body.id + '-tte.pdf');
            pathlokal = path.resolve(__dirname, '../temp/' + req.body.id + '.pdf');
            urltte = req.body.surat_url.substring(0, req.body.surat_url.length - 4);
            req.body.tte_url = urltte + '-tte.pdf';
            passphrase = req.body.passphrase;
            req.body.pathTte = pathTte;
            urltte = req.body.surat_url.substring(0, req.body.surat_url.length - 4);
            console.log(' req.body.pathTte:' + req.body.pathTte);
            console.log('pathlokal:' + pathlokal);
            // pathTte='d:/Dokumen/git/bpjph/bpjph_eoffice/eoffice-be/src/temp/01a45269-ef8f-44d6-919f-c2164cf9302a-tte.pdf';
            _context12.next = 12;
            return tteProses(pathlokal, pathTte, passphrase);
          case 12:
            urlTTe = _context12.sent;
            console.log('hasuil:' + urlTTe);
            if (urlTTe != 'sukses') {
              // fs.unlinkSync(pdfFile);
              req.body.tte_status = -1;
              req.body.tte_url = null;
              req.body.tte_keterangan = urlTTe;
              // fs.unlinkSync(pathTte);
              console.log('notsukse:');
              pathTte = req.body.pathTte;
              console.log('crudpathTte:' + pathTte);
              fs.rmSync(pathTte, {
                force: true
              });
              fs.rmSync(pathlokal, {
                force: true
              });
              next();
            } else {
              try {
                minioClient.fPutObject(process.env.MINIO_BUCKET, req.body.tte_url, pathTte, function (err, etag) {
                  // minioClient.putObject(process.env.MINIO_BUCKET,  urltte + '-tte.pdf', response.data, function(err, etag) {
                  if (err) {
                    console.log('Error Upload File.', err);
                    return res.status(400).send({
                      'message': 'Error Upload File'
                    });
                  }
                  console.log('Berhasil Upload:' + req.body.tte_url);
                  req.body.tte_status = 1;
                  req.body.tte_keterangan = 'Berhasil Upload';
                  req.body.tte_url = urltte + '-tte.pdf';
                  //   fs.unlinkSync(pathTte);
                  console.log('sukse:');
                  var pathTte = req.body.pathTte;
                  console.log('crudpathTte:' + pathTte);

                  /*  fs.rmSync(pathTte, {
                    force: true,
                    });
                    fs.rmSync(pathlokal, {
                      force: true,
                      }); */
                  next();
                  //return res.status(200).send({ 'message': 'Berhasil Upload' });
                })["catch"](function (error) {
                  console.log('errorxx:' + error);

                  // fs.unlinkSync(pdfFile);
                  req.body.tte_status = -1;
                  req.body.tte_url = null;
                  req.body.tte_keterangan = JSON.stringify(error.response.data);
                  //   fs.unlinkSync(pathTte);
                  var pathTte = req.body.pathTte;
                  console.log('crudpathTte:' + pathTte);

                  /*     fs.rmSync(pathTte, {
                       force: true,
                       });
                       fs.rmSync(pathlokal, {
                         force: true,
                         }); */
                  next();
                  //console.log('xxx:'+error.value);
                });
              } catch (error) {
                console.log('Error:' + error.message);
              }
            }
            _context12.next = 20;
            break;
          case 17:
            _context12.prev = 17;
            _context12.t0 = _context12["catch"](0);
            console.log('Error:' + _context12.t0.message);
          case 20:
          case "end":
            return _context12.stop();
        }
      }, _callee12, null, [[0, 17]]);
    }))();
  },
  getSuratFile: function getSuratFile(req, res, next) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
      var bucket;
      return _regeneratorRuntime().wrap(function _callee13$(_context13) {
        while (1) switch (_context13.prev = _context13.next) {
          case 0:
            if (req.body.surat_url) {
              _context13.next = 2;
              break;
            }
            return _context13.abrupt("return", res.status(500).send('Url Surat Tidak Boleh Kosong'));
          case 2:
            req.body.type = 'update-status-tte';
            bucket = process.env.MINIO_BUCKET;
            _context13.prev = 4;
            _context13.next = 7;
            return minioClient.getObject(bucket, req.body.surat_url, function (error, stream) {
              if (error) {
                return res.status(500).send(error);
              }
              try {
                //res.setHeader('Content-type', 'application/pdf');
                req.stream = stream;
                //console.log(req.stream)
                next();
                //stream.pipe(res);
              } catch (error) {
                return res.status(500).send(error);
              }
            });
          case 7:
            _context13.next = 12;
            break;
          case 9:
            _context13.prev = 9;
            _context13.t0 = _context13["catch"](4);
            return _context13.abrupt("return", res.status(500).send(_context13.t0));
          case 12:
          case "end":
            return _context13.stop();
        }
      }, _callee13, null, [[4, 9]]);
    }))();
  },
  SignTTE: function SignTTE(req, res, next) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
      var path2, Bearer, username, password, pdfFile, SpecimenFile, data, config;
      return _regeneratorRuntime().wrap(function _callee14$(_context14) {
        while (1) switch (_context14.prev = _context14.next) {
          case 0:
            _context14.prev = 0;
            path2 = process.env.API_TTE_SIGN_URL;
            Bearer = "Bearer " + process.env.API_TTE_BEARER;
            username = req.user.nik; ////req.user.user_tte//process.env.API_TTE_USERNAME
            password = req.body.passphrase; //req.user.pwd_tte//process.env.API_TTE_PASSWORD
            // let specimen = "data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg==";
            /*  let config = {
             headers: {
               Authorization: Bearer,
             }
            }  */
            pdfFile = req.stream;
            SpecimenFile = fs.createReadStream(path.resolve(__dirname, '../template/tte-logo.jpeg'));
            data = new FormData();
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
            data.append('pdf', pdfFile);
            data.append('img', SpecimenFile);
            if (process.env.AXIOS_PROXY_URL) {
              config = {
                method: 'post',
                url: path2,
                // httpsAgent: agent,
                proxy: {
                  host: process.env.AXIOS_PROXY_URL,
                  port: process.env.AXIO_PROXY_PORT
                },
                headers: _objectSpread({
                  'Authorization': Bearer
                }, data.getHeaders()),
                data: data
              };
            } else {
              config = {
                method: 'post',
                url: path2,
                // httpsAgent: agent,
                headers: _objectSpread({
                  'Authorization': Bearer
                }, data.getHeaders()),
                data: data
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
            axios(config).then(function (response) {
              // req.otp = response.data.message
              // console.log(JSON.stringify(response.data.message));
              //console.log('otp:'+otp)
              // next()
              // return res.status(200).send(response.data);
              req.tte = response.data.data.toString();
              /*       var bin = Base64.atob(req.tte);
                    fs.writeFile((path.resolve(__dirname,'../template/result-1.pdf')),  bin ,'binary', error => {
                      if (error) {
                        throw error;
                    } else {
                        console.log('binary saved!');
                    }
                }); */
              console.log('berhasil TTE BPPT');
              next();
            })["catch"](function (error) {
              console.log(error);
              return res.status(400).send({
                'RC': '99',
                'error': error
              });
            });
            _context14.next = 28;
            break;
          case 24:
            _context14.prev = 24;
            _context14.t0 = _context14["catch"](0);
            console.log(_context14.t0);
            return _context14.abrupt("return", res.status(400).send({
              'RC': '99',
              'message2': _context14.t0
            }));
          case 28:
          case "end":
            return _context14.stop();
        }
      }, _callee14, null, [[0, 24]]);
    }))();
  },
  uploadTTEMinio: function uploadTTEMinio(req, res, next) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
      var bin, streamdata, urltte;
      return _regeneratorRuntime().wrap(function _callee15$(_context15) {
        while (1) switch (_context15.prev = _context15.next) {
          case 0:
            //return res.status(200).send({ 'RC': '00', 'message': nama});
            bin = _jsBase.Base64.atob(req.tte);
            streamdata = Buffer.from(bin, 'binary');
            urltte = req.body.surat_url.substring(0, req.body.surat_url.length - 4);
            req.body.tte_url = urltte + '-tte.pdf';

            //  var nama  = str.substring(0, 5)+'/'+str.substring(5, 10)+'/'+str.substring(10, 15)+'/'+str.substring(15, 20)+'/'+req.body.tipe_upload+'.jpeg';	
            minioClient.putObject(process.env.MINIO_BUCKET, req.body.tte_url, streamdata, function (err, etag) {
              if (err) {
                console.log('Error Upload File.', err);
                return res.status(400).send({
                  'message': 'Error Upload File'
                });
              }
              console.log('Berhasil Upload:' + req.namaFile);
              req.body.tte_status = 1;
              req.body.tte_keterangan = 'Berhasil Upload';
              next();
              // return res.status(200).send({ 'message': 'Berhasil Upload' });
            });
          case 5:
          case "end":
            return _context15.stop();
        }
      }, _callee15);
    }))();
  },
  getOTP: function getOTP(req, res, next) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee16() {
      var otp, path2, Bearer, username, password, data, config;
      return _regeneratorRuntime().wrap(function _callee16$(_context16) {
        while (1) switch (_context16.prev = _context16.next) {
          case 0:
            _context16.prev = 0;
            otp = '';
            path2 = process.env.API_TTE_OTP_URL;
            Bearer = "Bearer " + process.env.API_TTE_BEARER;
            username = req.user.nik; ////req.user.user_tte//process.env.API_TTE_USERNAME
            password = req.body.passphrase; //req.user.pwd_tte//process.env.API_TTE_PASSWORD
            console.log('user_tte:' + username);
            console.log('pwd_tte' + password);
            // var agent = new httpsProxyAgent({host:'10.100.88.101',port:'3128'});
            /*  let config = {
               headers: {
                 Authorization: Bearer,
               }
             }  */
            data = new FormData();
            data.append('username', username);
            data.append('passphrase', password);
            if (process.env.AXIOS_PROXY_URL) {
              config = {
                method: 'post',
                url: path2,
                // httpsAgent: agent,
                proxy: {
                  host: process.env.AXIOS_PROXY_URL,
                  port: process.env.AXIO_PROXY_PORT
                },
                headers: _objectSpread({
                  'Authorization': Bearer
                }, data.getHeaders()),
                data: data
              };
            } else {
              config = {
                method: 'post',
                url: path2,
                // httpsAgent: agent,
                headers: _objectSpread({
                  'Authorization': Bearer
                }, data.getHeaders()),
                data: data
              };
            }
            axios(config).then(function (response) {
              req.otp = response.data.message;
              // console.log(JSON.stringify(response.data.message));
              // console.log('otp:'+otp)
              next();
            })["catch"](function (error) {
              console.log(error);
              return res.status(400).send({
                'RC': '98',
                'message': error
              });
            });
            _context16.next = 19;
            break;
          case 15:
            _context16.prev = 15;
            _context16.t0 = _context16["catch"](0);
            console.log(_context16.t0);
            return _context16.abrupt("return", res.status(400).send({
              'RC': '97',
              'message': _context16.t0
            }));
          case 19:
          case "end":
            return _context16.stop();
        }
      }, _callee16, null, [[0, 15]]);
    }))();
  },
  StoreFileTTE: function StoreFileTTE(req, res, next) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee17() {
      var tte_url, tte_user, tte_pwd, tte_regarding, tte_type, nik, pdfFile, data, config;
      return _regeneratorRuntime().wrap(function _callee17$(_context17) {
        while (1) switch (_context17.prev = _context17.next) {
          case 0:
            _context17.prev = 0;
            tte_url = process.env.TTE_URL + '/document/store';
            tte_user = process.env.TTE_USER;
            tte_pwd = process.env.TTE_PWD;
            tte_regarding = process.env.TTE_REGARDING;
            tte_type = process.env.TTE_TYPE;
            nik = req.user.nik; //req.user.nik//process.env.API_TTE_USERNAME
            pdfFile = req.stream;
            data = new FormData();
            data.append('nik', nik);
            data.append('regarding', tte_regarding);
            data.append('type', tte_type);
            data.append('anchor', '^');
            data.append('paper_type', 'P');
            //console.log('data2:'+JSON.stringify(data))
            data.append('file', pdfFile);
            if (process.env.AXIOS_PROXY_URL) {
              config = {
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
                headers: _objectSpread({
                  'Accept': 'application/json',
                  // 'Authorization': 'Basic ZXZpdGE6U25Jc1hOQWZneGdKNmREckJOY3Q=',
                  'Authorization': 'Basic ' + process.env.TTE_AUTH
                }, data.getHeaders()),
                data: data
              };
            } else {
              config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: tte_url,
                // httpsAgent: agent,
                headers: _objectSpread({
                  'Accept': 'application/json',
                  //'Authorization': 'Basic ZXZpdGE6U25Jc1hOQWZneGdKNmREckJOY3Q=',
                  'Authorization': 'Basic ' + process.env.TTE_AUTH
                }, data.getHeaders()),
                data: data
              };
            }
            console.log('header:' + JSON.stringify(config.headers));
            axios(config).then(function (response) {
              console.log(' response.status ' + response.status);
              console.log(' response.data.data.id ' + response.data.data.id);
              console.log(' response.data ' + JSON.stringify(response.data));
              if (response.status == 200 & (response.data.data.id != null || response.data.data.id != "")) {
                console.log('berhasil store TTE KEMENAG');
                req.dok_id = response.data.data.id;
                next();
              } else {
                //  console.log('gagal tte');

                //   return res.status(response.status).send({ 'RC': '99', 'message' : 'gagal TTE' });

                if (error.response) {
                  // Request made and server responded
                  console.log('error.response.status:' + error.response.status); // Status code (400)
                  console.log('error.response.data:' + error.response.data); // Response body
                  console.log('error.response.headers:' + error.response.headers); // Headers

                  return res.status(200).send(error.response.data);
                } else if (error.request) {
                  // Request was made but no response was received
                  console.log('error.request:' + error.request);
                  return res.status(200).send({
                    'RC': '99',
                    'message': error.request
                  });
                } else {
                  // Something happened in setting up the request
                  console.log('error.message:' + error.message);
                  return res.status(200).send({
                    'RC': '99',
                    'message': error.message
                  });
                }
              }
            })["catch"](function (error) {
              //  console.log('axios error:'+error);
              //    return res.status(400).send({ 'RC': '99', 'error': error });

              if (error.response) {
                // Request made and server responded
                console.log('error.response.status:' + error.response.status); // Status code (400)
                console.log('error.response.data:' + error.response.data); // Response body
                console.log('error.response.headers:' + error.response.headers); // Headers

                return res.status(200).send(error.response.data);
              } else if (error.request) {
                // Request was made but no response was received
                console.log('error.request:' + error.request);
                return res.status(200).send({
                  'RC': '99',
                  'message': error.request
                });
              } else {
                // Something happened in setting up the request
                console.log('error.message:' + error.message);
                return res.status(200).send({
                  'RC': '99',
                  'message': error.message
                });
              }
            });
            _context17.next = 24;
            break;
          case 20:
            _context17.prev = 20;
            _context17.t0 = _context17["catch"](0);
            console.log('error:' + _context17.t0);
            return _context17.abrupt("return", res.status(200).send({
              'RC': '99',
              'message2': _context17.t0
            }));
          case 24:
          case "end":
            return _context17.stop();
        }
      }, _callee17, null, [[0, 20]]);
    }))();
  },
  SignFilePassphraseTTE: function SignFilePassphraseTTE(req, res, next) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee18() {
      var tte_url, tte_user, tte_pwd, nik, pasphrase, pdfFile, data, config;
      return _regeneratorRuntime().wrap(function _callee18$(_context18) {
        while (1) switch (_context18.prev = _context18.next) {
          case 0:
            _context18.prev = 0;
            tte_url = process.env.TTE_URL + '/document/process/signature';
            tte_user = process.env.TTE_USER;
            tte_pwd = process.env.TTE_PWD;
            nik = req.user.nik; //req.user.nik//process.env.API_TTE_USERNAME
            // var pasphrase = req.user.pwd_tte//process.env.API_TTE_PASSWORD
            pasphrase = req.body.passphrase; //process.env.API_TTE_PASSWORD
            pdfFile = req.stream;
            data = new FormData();
            data.append('nik', nik);
            data.append('passphrase', pasphrase);
            data.append('document_id', req.dok_id);
            data.append('anchor', "^");
            data.append('is_final', 1);
            console.log('nik:' + nik);
            console.log('pasphrase:' + pasphrase);
            console.log('document_id:' + req.dok_id);
            if (process.env.AXIOS_PROXY_URL) {
              config = {
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
                headers: _objectSpread({
                  'Accept': 'application/json',
                  //'Authorization': 'Basic ZXZpdGE6U25Jc1hOQWZneGdKNmREckJOY3Q=',
                  'Authorization': 'Basic ' + process.env.TTE_AUTH
                }, data.getHeaders()),
                data: data
              };
            } else {
              config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: tte_url,
                responseType: 'arraybuffer',
                responseEncoding: 'binary',
                // httpsAgent: agent,
                headers: _objectSpread({
                  'Accept': 'application/json',
                  'Authorization': 'Basic ' + process.env.TTE_AUTH
                }, data.getHeaders()),
                data: data
              };
            }
            axios(config).then(function (response) {
              console.log(' response.status ' + response.status);
              if (response.status = 200) {
                req.tte = Buffer.from(response.data).toString("base64");

                // console.log(req.stream)

                console.log('berhasil TTE BSSN');
                next();
              } else {
                //  return res.status(200).send({ 'RC': '99','message' :  response.data.message});
                //return res.status(400).send({ 'RC': '99', 'error': JSON.stringify(error)  });
                if (error.response) {
                  // Request made and server responded
                  console.log('error.response.status:' + error.response.status); // Status code (400)
                  console.log('error.response.data:' + error.response.data); // Response body
                  console.log('error.response.headers:' + error.response.headers); // Headers

                  return res.status(200).send(error.response.data);
                } else if (error.request) {
                  // Request was made but no response was received
                  console.log('error.request:' + error.request);
                  return res.status(400).send({
                    'RC': '99',
                    'message': error.request
                  });
                } else {
                  // Something happened in setting up the request
                  console.log('error.message:' + error.message);
                  return res.status(400).send({
                    'RC': '99',
                    'message': error.message
                  });
                }
              }
            })["catch"](function (error) {
              // console.log(error);
              // return res.status(400).send({ 'RC': '99', 'error': error });
              if (error.response) {
                // Request made and server responded
                console.log('error.response.status:' + error.response.status); // Status code (400)
                console.log('error.response.data:' + error.response.data); // Response body
                console.log('error.response.headers:' + error.response.headers); // Headers

                return res.status(200).send(error.response.data);
              } else if (error.request) {
                // Request was made but no response was received
                console.log('error.request:' + error.request);
                return res.status(200).send({
                  'RC': '99',
                  'message': error.request
                });
              } else {
                // Something happened in setting up the request
                console.log('error.message:' + error.message);
                return res.status(200).send({
                  'RC': '99',
                  'message': error.message
                });
              }
            });
            _context18.next = 36;
            break;
          case 20:
            _context18.prev = 20;
            _context18.t0 = _context18["catch"](0);
            if (!_context18.t0.response) {
              _context18.next = 29;
              break;
            }
            // Request made and server responded
            console.log('error.response.status:' + _context18.t0.response.status); // Status code (400)
            console.log('error.response.data:' + _context18.t0.response.data); // Response body
            console.log('error.response.headers:' + _context18.t0.response.headers); // Headers
            return _context18.abrupt("return", res.status(200).send(_context18.t0.response.data));
          case 29:
            if (!_context18.t0.request) {
              _context18.next = 34;
              break;
            }
            // Request was made but no response was received
            console.log('error.request:' + _context18.t0.request);
            return _context18.abrupt("return", res.status(200).send({
              'RC': '99',
              'message': _context18.t0.request
            }));
          case 34:
            // Something happened in setting up the request
            console.log('error.message:' + _context18.t0.message);
            return _context18.abrupt("return", res.status(200).send({
              'RC': '99',
              'message': _context18.t0.message
            }));
          case 36:
          case "end":
            return _context18.stop();
        }
      }, _callee18, null, [[0, 20]]);
    }))();
  },
  getSuratFileBSSN: function getSuratFileBSSN(req, res, next) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee19() {
      var bucket;
      return _regeneratorRuntime().wrap(function _callee19$(_context19) {
        while (1) switch (_context19.prev = _context19.next) {
          case 0:
            if (req.body.surat_url) {
              _context19.next = 2;
              break;
            }
            return _context19.abrupt("return", res.status(500).send('Url Surat Tidak Boleh Kosong'));
          case 2:
            req.body.type = 'update-status-tte';
            bucket = process.env.MINIO_BUCKET; //var pathlokal = (__dirname, 'temp/' +  req.body.id+ '.pdf')
            //var pathlokal = ('d:/temp2/' +  req.body.id+ '.pdf')
            // var pathlokal2 = path.resolve(__dirname,  '../temp/' +    req.body.id+ '.pdf')
            //  req.pathlokal=pathlokal2;
            //  var pathlokal2 = (req.body.id+ '.pdf')
            // console.log('path:'+pathlokal2)
            console.log('tte_status:' + req.body.tte_status);
            // fs.unlinkSync(pdfFile);
            /*   fs.rmSync(pathlokal2, {
             force: true,
            });   */

            // var pathMinio = "";
            if (req.body.tte_status == 0 || req.body.tte_status == -1) {
              req.pathMinioSource = req.body.surat_url;
              req.pathMinioDestination = req.body.tte_url;
              req.pathLokal = path.resolve(__dirname, '../temp/' + req.body.id + '.pdf');
              req.pathSign = path.resolve(__dirname, '../temp/' + req.body.id + '-tte.pdf');
              req.tte_status_berhasil = 1;
              req.tte_status_gagal = -1;
              req.tte_keterangan_berhasil = 'Berhasil Upload TTE';
              req.tte_keterangan_gagal = 'Gagal Upload';
              req.anchor = '^';
            } else if (req.body.tte_status == 4 || req.body.tte_status == -2) {
              req.pathMinioSource = req.body.surat_url;
              req.pathMinioDestination = req.body.paraf_url;
              req.pathLokal = path.resolve(__dirname, '../temp/' + req.body.id + '.pdf');
              req.pathSign = path.resolve(__dirname, '../temp/' + req.body.id + '-paraf.pdf');
              req.tte_status_berhasil = 5;
              req.tte_status_gagal = -2;
              req.tte_keterangan_berhasil = 'Berhasil Upload Paraf';
              req.tte_keterangan_gagal = 'Gagal Upload';
              req.anchor = '$';
            } else if (req.body.tte_status == 5 || req.body.tte_status == -3) {
              req.pathMinioSource = req.body.paraf_url;
              req.pathMinioDestination = req.body.tte_url;
              req.pathLokal = path.resolve(__dirname, '../temp/' + req.body.id + '-paraf.pdf');
              req.pathSign = path.resolve(__dirname, '../temp/' + req.body.id + '-tte.pdf');
              req.tte_status_berhasil = 1;
              req.tte_status_gagal = -3;
              req.tte_keterangan_berhasil = 'Berhasil Upload TTE';
              req.tte_keterangan_gagal = 'Gagal Upload';
              req.anchor = '^';
            }
            minioClient.fGetObject(bucket, req.pathMinioSource, req.pathLokal, function (err) {
              if (err) {
                console.log(err);
                var body = {
                  "RC": "00",
                  "message": "Sukses",
                  "data": {
                    "message": "File Tidak Ditemukan!"
                  }
                };
                return res.status(200).send(body);
              }
              console.log('success');
              //return res.status(200).send('success');
              next();
            });

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
          case 7:
          case "end":
            return _context19.stop();
        }
      }, _callee19);
    }))();
  },
  SignTTEBSSN: function SignTTEBSSN(req, res, next) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee20() {
      var path2, nik, passphrase, linkQR, file, data, config, writer, response;
      return _regeneratorRuntime().wrap(function _callee20$(_context20) {
        while (1) switch (_context20.prev = _context20.next) {
          case 0:
            _context20.prev = 0;
            path2 = process.env.API_TTE_SIGN_URL;
            nik = req.user.nik; //req.user.nik ////req.user.user_tte//process.env.API_TTE_USERNAME
            passphrase = req.body.passphrase; //req.user.pwd_tte//process.env.API_TTE_PASSWORD
            linkQR = req.body.url_tte;
            file = req.pathLokal;
            console.log('linkQR:' + linkQR);
            console.log('req.user:' + JSON.stringify(req.user));
            console.log('req.user.nik' + req.user.nik);
            // let specimen = "data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg==";

            /*  let config = {
             headers: {
               Authorization: Bearer,
             }
            }  */

            //var pdfFile = req.stream;
            // var SpecimenFile =fs.createReadStream(path.resolve(__dirname, '../template/tte-logo.jpeg'));
            data = new FormData();
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
            config = {
              method: 'post',
              maxBodyLength: Infinity,
              url: path2,
              // responseType: 'arraybuffer',
              responseEncoding: 'binary',
              // httpsAgent: agent,
              headers: _objectSpread({
                'Authorization': 'Basic ' + process.env.API_TTE_BEARER
              }, data.getHeaders()),
              responseType: "stream",
              data: data
            }; //var pathTte = path.resolve(__dirname,  '../temp/' +    req.body.id + '-tte.pdf')
            // console.log('pathTte:'+pathTte)
            // const writer = fs.createWriteStream(pathTte); 
            console.log('pathTte:' + req.pathSign);
            writer = fs.createWriteStream(req.pathSign); //  const response = await axios(config).catch((err) => console.log(err));
            _context20.next = 26;
            return axios(config)["catch"](function (err) {
              console.log(err);
              return res.status(400).send({
                'RC': '99',
                'message2': err
              });
            });
          case 26:
            response = _context20.sent;
            response.data.pipe(writer);
            return _context20.abrupt("return", new Promise(function (resolve, reject) {
              writer.on('finish', function () {
                console.log('finished');
                resolve();
                fs.rmSync(req.pathLokal, {
                  force: true
                });
                next();
              });
              writer.on('error', function () {
                console.log('reject');
                reject();
              });
            }));
          case 31:
            _context20.prev = 31;
            _context20.t0 = _context20["catch"](0);
            console.log(_context20.t0);
            return _context20.abrupt("return", res.status(400).send({
              'RC': '99',
              'message2': _context20.t0
            }));
          case 35:
          case "end":
            return _context20.stop();
        }
      }, _callee20, null, [[0, 31]]);
    }))();
  },
  uploadTTEBSSN: function uploadTTEBSSN(req, res, next) {
    var bin = _jsBase.Base64.atob(req.tte);
    var streamdata = Buffer.from(bin, 'binary');

    //  var nama  = str.substring(0, 5)+'/'+str.substring(5, 10)+'/'+str.substring(10, 15)+'/'+str.substring(15, 20)+'/'+req.body.tipe_upload+'.jpeg';	
    minioClient.putObject(process.env.MINIO_BUCKET, req.body.tte_url, streamdata, function (err, etag) {
      if (err) {
        console.log('Error Upload File.', err);
        return res.status(400).send({
          'message': 'Error Upload File'
        });
      }
      console.log('Berhasil Upload:' + req.namaFile);
      req.body.tte_status = 1;
      req.body.tte_keterangan = 'Berhasil Upload';
      next();
      // return res.status(200).send({ 'message': 'Berhasil Upload' });
    });
  },
  getSuratParafFileBSSN: function getSuratParafFileBSSN(req, res, next) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee21() {
      var bucket, pathlokal2;
      return _regeneratorRuntime().wrap(function _callee21$(_context21) {
        while (1) switch (_context21.prev = _context21.next) {
          case 0:
            if (req.body.surat_paraf_url) {
              _context21.next = 2;
              break;
            }
            return _context21.abrupt("return", res.status(500).send('Url Surat Tidak Boleh Kosong'));
          case 2:
            req.body.type = 'update-status-tte';
            bucket = process.env.MINIO_BUCKET; //var pathlokal = (__dirname, 'temp/' +  req.body.id+ '.pdf')
            //var pathlokal = ('d:/temp2/' +  req.body.id+ '.pdf')
            pathlokal2 = path.resolve(__dirname, '../temp/' + req.body.id + '-paraf.pdf');
            req.pathlokal = pathlokal2;

            //  var pathlokal2 = (req.body.id+ '.pdf')

            console.log('path:' + pathlokal2);
            console.log('surat_url:' + req.body.surat_paraf_url);
            // fs.unlinkSync(pdfFile);
            fs.rmSync(pathlokal2, {
              force: true
            });
            minioClient.fGetObject(bucket, req.body.surat_paraf_url, pathlokal2, function (err) {
              if (err) {
                console.log(err);
                var body = {
                  "RC": "00",
                  "message": "Sukses",
                  "data": {
                    "message": "File Tidak Ditemukan!"
                  }
                };
                return res.status(200).send(body);
              }
              console.log('success');
              //return res.status(200).send('success');
              next();
            });
          case 10:
          case "end":
            return _context21.stop();
        }
      }, _callee21);
    }))();
  },
  ParafTTEBSSN: function ParafTTEBSSN(req, res, next) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee22() {
      var path2, nik, passphrase, linkQR, file, data, config, pathTte, writer, response;
      return _regeneratorRuntime().wrap(function _callee22$(_context22) {
        while (1) switch (_context22.prev = _context22.next) {
          case 0:
            _context22.prev = 0;
            path2 = process.env.API_TTE_SIGN_URL;
            nik = req.user.nik; ////req.user.user_tte//process.env.API_TTE_USERNAME
            passphrase = req.body.passphrase; //req.user.pwd_tte//process.env.API_TTE_PASSWORD
            linkQR = req.body.url_tte;
            file = req.pathlokal;
            console.log('linkQR:' + linkQR);
            // let specimen = "data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg==";

            /*  let config = {
             headers: {
               Authorization: Bearer,
             }
            }  */

            //var pdfFile = req.stream;
            // var SpecimenFile =fs.createReadStream(path.resolve(__dirname, '../template/tte-logo.jpeg'));
            data = new FormData();
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
            config = {
              method: 'post',
              maxBodyLength: Infinity,
              url: path2,
              // responseType: 'arraybuffer',
              responseEncoding: 'binary',
              // httpsAgent: agent,
              headers: _objectSpread({
                'Authorization': 'Basic ' + process.env.API_TTE_BEARER
              }, data.getHeaders()),
              responseType: "stream",
              data: data
            };
            pathTte = path.resolve(__dirname, '../temp/' + req.body.id + '-tte.pdf');
            console.log('pathTte:' + pathTte);
            writer = fs.createWriteStream(pathTte);
            _context22.next = 25;
            return axios(config)["catch"](function (err) {
              return console.log(err);
            });
          case 25:
            response = _context22.sent;
            response.data.pipe(writer);
            return _context22.abrupt("return", new Promise(function (resolve, reject) {
              writer.on('finish', function () {
                console.log('finished');
                resolve();
                fs.rmSync(req.pathlokal, {
                  force: true
                });
                next();
              });
              writer.on('error', function () {
                console.log('reject');
                reject();
              });
            }));
          case 30:
            _context22.prev = 30;
            _context22.t0 = _context22["catch"](0);
            console.log(_context22.t0);
            return _context22.abrupt("return", res.status(400).send({
              'RC': '99',
              'message2': _context22.t0
            }));
          case 34:
          case "end":
            return _context22.stop();
        }
      }, _callee22, null, [[0, 30]]);
    }))();
  },
  getSuratFileBSSNV2: function getSuratFileBSSNV2(req, res, next) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee23() {
      var bucket;
      return _regeneratorRuntime().wrap(function _callee23$(_context23) {
        while (1) switch (_context23.prev = _context23.next) {
          case 0:
            if (req.body.surat_url) {
              _context23.next = 2;
              break;
            }
            return _context23.abrupt("return", res.status(500).send('Url Surat Tidak Boleh Kosong'));
          case 2:
            req.body.type = 'update-status-tte';
            bucket = process.env.MINIO_BUCKET;
            req.paraf_is_qr = req.body.paraf_is_qr;
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
            if (req.body.tte_status == 0 || req.body.tte_status == -1) {
              req.pathMinioSource = req.body.surat_url;
              req.pathMinioDestination = req.body.tte_url;
              req.pathLokal2 = path.resolve(__dirname, '../temp/' + req.body.id + '.pdf');
              req.pathLokal = path.resolve(__dirname, '../temp/' + req.body.id + '-footer.pdf');
              req.pathSign = path.resolve(__dirname, '../temp/' + req.body.id + '-tte.pdf');
              req.tte_status_berhasil = 1;
              req.tte_status_gagal = -1;
              req.tte_keterangan_berhasil = 'Berhasil Upload TTE';
              req.tte_keterangan_gagal = 'Gagal Upload';
              req.anchor = '^';
            } else if (req.body.tte_status == 4 || req.body.tte_status == -2) {
              req.pathMinioSource = req.body.surat_url;
              req.pathMinioDestination = req.body.paraf_url;
              req.pathLokal2 = path.resolve(__dirname, '../temp/' + req.body.id + '.pdf');
              req.pathLokal = path.resolve(__dirname, '../temp/' + req.body.id + '-footer.pdf');
              req.pathSign = path.resolve(__dirname, '../temp/' + req.body.id + '-paraf.pdf');
              req.tte_status_berhasil = 5;
              req.tte_status_gagal = -2;
              req.tte_keterangan_berhasil = 'Berhasil Upload Paraf';
              req.tte_keterangan_gagal = 'Gagal Upload';
              req.anchor = '$';
            } else if (req.body.tte_status == 5 || req.body.tte_status == -3) {
              req.pathMinioSource = req.body.paraf_url;
              req.pathMinioDestination = req.body.tte_url;
              req.pathLokal2 = path.resolve(__dirname, '../temp/' + req.body.id + '-paraf.pdf');
              req.pathLokal = path.resolve(__dirname, '../temp/' + req.body.id + '-footer.pdf');
              req.pathSign = path.resolve(__dirname, '../temp/' + req.body.id + '-tte.pdf');
              req.tte_status_berhasil = 1;
              req.tte_status_gagal = -3;
              req.tte_keterangan_berhasil = 'Berhasil Upload TTE';
              req.tte_keterangan_gagal = 'Gagal Upload';
              req.anchor = '^';
            }
            console.log('req.pathMinioSource: ' + req.pathMinioSource);
            console.log('req.pathLokal2: ' + req.pathLokal2);
            minioClient.fGetObject(bucket, req.pathMinioSource, req.pathLokal2, function (err) {
              if (err) {
                console.log(err);
                var body = {
                  "RC": "00",
                  "message": "Sukses",
                  "data": {
                    "message": "File Tidak Ditemukan!"
                  }
                };
                return res.status(200).send(body);
              }
              console.log('success');
              //return res.status(200).send('success');
              next();
            });

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
          case 10:
          case "end":
            return _context23.stop();
        }
      }, _callee23);
    }))();
  },
  SignTTEBSSNV2: function SignTTEBSSNV2(req, res, next) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee24() {
      var path2, nik, passphrase, linkQR, file, data, config, writer, response;
      return _regeneratorRuntime().wrap(function _callee24$(_context24) {
        while (1) switch (_context24.prev = _context24.next) {
          case 0:
            _context24.prev = 0;
            path2 = process.env.API_TTE_SIGN_URL;
            nik = req.user.nik; //req.user.nik ////req.user.user_tte//process.env.API_TTE_USERNAME
            passphrase = req.body.passphrase; //req.user.pwd_tte//process.env.API_TTE_PASSWORD
            linkQR = req.body.url_tte;
            file = req.pathLokal; // console.log('linkQR:'+linkQR)
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
            data = new FormData();
            data.append('file', fs.createReadStream(file));
            data.append('nik', nik);
            data.append('passphrase', passphrase);
            data.append('tampilan', 'visible');
            data.append('image', 'false');
            data.append('linkQR', linkQR);
            data.append('xAxis', '0');
            data.append('yAxis', '0');

            //  data.append('tag_koordinat', req.anchor);
            console.log('req.paraf_is_qr' + req.paraf_is_qr);
            if (req.body.tte_status == 4 || req.body.tte_status == -2) {
              if (req.paraf_is_qr) {
                data.append('width', '40');
                data.append('height', '40');
                data.append('tag_koordinat', req.anchor);
              } else {
                data.append('width', '0');
                data.append('height', '0');
                data.append('page', '1');
                //  data.append('page', '1');
              }
            } else {
              data.append('width', '40');
              data.append('height', '40');
              data.append('tag_koordinat', req.anchor);
            }
            //data.append('page', '1');
            //data.append('pdf', fs.readFileSync(new URL('file://d:/temp/SPH.pdf')));
            //data.append('pdf', req.stream);
            //data.append('file',file)
            config = {
              method: 'post',
              maxBodyLength: Infinity,
              url: path2,
              // responseType: 'arraybuffer',
              responseEncoding: 'binary',
              // httpsAgent: agent,
              headers: _objectSpread({
                'Authorization': 'Basic ' + process.env.API_TTE_BEARER
              }, data.getHeaders()),
              responseType: "stream",
              data: data
            }; //var pathTte = path.resolve(__dirname,  '../temp/' +    req.body.id + '-tte.pdf')
            // console.log('pathTte:'+pathTte)
            // const writer = fs.createWriteStream(pathTte); 
            // console.log('pathTte:'+req.pathSign)
            writer = fs.createWriteStream(req.pathSign);
            _context24.next = 21;
            return axios(config)["catch"](function (err) {
              //      console.log(err)
              //   console.log('response.data:'+response.data)

              return res.status(400).send({
                'RC': '99',
                'message2': response.data
              });
            });
          case 21:
            response = _context24.sent;
            response.data.pipe(writer);
            return _context24.abrupt("return", new Promise(function (resolve, reject) {
              writer.on('finish', function () {
                console.log('finished');
                resolve();
                fs.rmSync(req.pathLokal, {
                  force: true
                });
                fs.rmSync(req.pathLokal2, {
                  force: true
                });
                next();
              });
              writer.on('error', function () {
                console.log('reject');
                reject();
              });
            }));
          case 26:
            _context24.prev = 26;
            _context24.t0 = _context24["catch"](0);
            console.log(_context24.t0);
            return _context24.abrupt("return", res.status(400).send({
              'RC': '99',
              'message2': _context24.t0
            }));
          case 30:
          case "end":
            return _context24.stop();
        }
      }, _callee24, null, [[0, 26]]);
    }))();
  },
  modifyPdf: function modifyPdf(req, res, next) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee25() {
      var pdfDoc, footerImagePath, footerImageBytes, footerImage, timesRomanFont, timesRomanBoldFont, pages, firstPage, _firstPage$getSize, width, height, _pages, pdfBytes;
      return _regeneratorRuntime().wrap(function _callee25$(_context25) {
        while (1) switch (_context25.prev = _context25.next) {
          case 0:
            _context25.next = 2;
            return _pdfLib.PDFDocument.load(fs.readFileSync(resolve(req.pathLokal2)));
          case 2:
            pdfDoc = _context25.sent;
            // const jpgUrl = 'https://pdf-lib.js.org/assets/cat_riding_unicorn.jpg'
            footerImagePath = path.resolve(__dirname, '../img/logo-brin.jpg');
            footerImageBytes = fs.readFileSync(path.resolve(__dirname, '../img/logo-brin.jpg')); //  const footerImageBytes = await fetch(jpgUrl).then((res) => res.arrayBuffer())
            _context25.next = 7;
            return pdfDoc.embedJpg(footerImageBytes);
          case 7:
            footerImage = _context25.sent;
            _context25.next = 10;
            return pdfDoc.embedFont(_pdfLib.StandardFonts.TimesRoman);
          case 10:
            timesRomanFont = _context25.sent;
            _context25.next = 13;
            return pdfDoc.embedFont(_pdfLib.StandardFonts.TimesRomanBold);
          case 13:
            timesRomanBoldFont = _context25.sent;
            pages = pdfDoc.getPages();
            firstPage = pages[0];
            _firstPage$getSize = firstPage.getSize(), width = _firstPage$getSize.width, height = _firstPage$getSize.height;
            if (req.body.tte_status == 4 || req.body.tte_status == -2) {} else {
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
              _pages = pdfDoc.getPages(); // Iterate every pages
              _pages.forEach(function (page) {
                page.drawText('Dokumen ini telah ditandatangani secara elektronik.', {
                  x: 80,
                  y: 40,
                  size: 12,
                  font: timesRomanFont,
                  color: (0, _pdfLib.rgb)(0, 0, 0)
                });
                page.drawText('Token: ' + req.token, {
                  x: 80,
                  y: 20,
                  size: 12,
                  font: timesRomanBoldFont,
                  color: (0, _pdfLib.rgb)(0, 0, 0)
                });
                page.drawLine({
                  start: {
                    x: 30,
                    y: 60
                  },
                  end: {
                    x: width - 30,
                    y: 60
                  },
                  thickness: 1,
                  color: (0, _pdfLib.rgb)(0, 0, 0),
                  opacity: 1
                });
                page.drawImage(footerImage, {
                  x: 30,
                  y: 15,
                  width: 40,
                  height: 40
                });
              });
            }

            //const jpgDims = jpgImage.scale(0.5)

            // const page = pdfDoc.addPage()
            _context25.next = 20;
            return pdfDoc.save();
          case 20:
            pdfBytes = _context25.sent;
            //const writer = fs.createWriteStream(pathTte); 
            //response.data.pipe(writer);
            fs.writeFileSync(req.pathLokal, pdfBytes, 'binary');

            //const pdfBytes = await pdfDoc.save()
            //await writeFile(req.pathLokal2, pdfBytes) 
            next();

            // const pdfDoc = await PDFDocument.load(existingPdfBytes)
          case 23:
          case "end":
            return _context25.stop();
        }
      }, _callee25);
    }))();
  },
  getPath: function getPath(req, res, next) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee26() {
      var ip, path, method, findOneQuery, _yield$db$query10, rows, rowCount, data, rc;
      return _regeneratorRuntime().wrap(function _callee26$(_context26) {
        while (1) switch (_context26.prev = _context26.next) {
          case 0:
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = '/api/surat/tte';
            method = 'POST';
            req.body.type = 'verifikasi-id';
            req.body.token = req.params.token;
            findOneQuery = "select * from eoffice.tte_surat_crud  ($1,$2,$3,$4,$5::json)"; //  console.log(findOneQuery, [ip, path, method, 'verifikasi', JSON.stringify(req.body)]);
            //  console.log(req.user.nip);
            _context26.prev = 6;
            _context26.next = 9;
            return _db["default"].query(findOneQuery, [ip, path, method, 'verifikasi', JSON.stringify(req.body)]);
          case 9:
            _yield$db$query10 = _context26.sent;
            rows = _yield$db$query10.rows;
            rowCount = _yield$db$query10.rowCount;
            if (rowCount) {
              _context26.next = 16;
              break;
            }
            return _context26.abrupt("return", res.status(200).send({
              'RC': '05',
              'message': 'TTE tidak VALID'
            }));
          case 16:
            data = rows[0].data[0];
            rc = rows[0].rc;
            if (!(rc == '00')) {
              _context26.next = 23;
              break;
            }
            req.tte_url = data.tte_url;
            //  console.log('req.tte_url:'+req.tte_url)
            next();
            _context26.next = 24;
            break;
          case 23:
            return _context26.abrupt("return", res.status(200).send(data.message));
          case 24:
            _context26.next = 29;
            break;
          case 26:
            _context26.prev = 26;
            _context26.t0 = _context26["catch"](6);
            return _context26.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi Atau Data',
              error: _context26.t0
            }));
          case 29:
          case "end":
            return _context26.stop();
        }
      }, _callee26, null, [[6, 26]]);
    }))();
  }
};
var _default = exports["default"] = Surat;