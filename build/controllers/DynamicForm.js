"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _db = _interopRequireDefault(require("../db"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var DynamicForm = {
  getFormFields: function getFormFields(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var ip, path, method, findOneQuery, _yield$db$query, rows, rowCount;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            /// ddl header untuk web
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = '/api/web/general/getformfields';
            method = 'GET';
            findOneQuery = "select * from elayanan_form_get_fields($1,$2,$3,$4,$5,$6,$7, $8)";
            console.log(findOneQuery, [ip, path, method, req.user.nip, req.params.type, req.params.parent_id, req.params.bahasa, req.params.registrasi_id]);
            _context.prev = 5;
            _context.next = 8;
            return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, req.params.type, req.params.parent_id, req.params.bahasa, req.params.registrasi_id]);
          case 8:
            _yield$db$query = _context.sent;
            rows = _yield$db$query.rows;
            rowCount = _yield$db$query.rowCount;
            if (rowCount) {
              _context.next = 15;
              break;
            }
            return _context.abrupt("return", res.status(200).send({
              'RC': '05',
              'message': 'Tidak ada Data'
            }));
          case 15:
            return _context.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'Sukses',
              rows: rows
            }));
          case 16:
            _context.next = 21;
            break;
          case 18:
            _context.prev = 18;
            _context.t0 = _context["catch"](5);
            return _context.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi atau Data',
              error: _context.t0
            }));
          case 21:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[5, 18]]);
    }))();
  },
  crudDynamicData: function crudDynamicData(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var ip, path, method, findOneQuery, _yield$db$query2, rows, rowCount;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            /// ddl header untuk web
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = '/api/web/general/getformfields';
            method = 'GET';
            findOneQuery = "select * from elayanan_crud_vue_dynamic_form_data($1,$2,$3,$4,$5::int,$6,$7::json,$8)"; //console.log([ip, path, method, 'test', req.params.type, req.params.parent_id]);
            _context2.prev = 4;
            _context2.next = 7;
            return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, req.body.tipe, req.body.id, req.body.data, req.body.is_complete]);
          case 7:
            _yield$db$query2 = _context2.sent;
            rows = _yield$db$query2.rows;
            rowCount = _yield$db$query2.rowCount;
            if (rowCount) {
              _context2.next = 14;
              break;
            }
            return _context2.abrupt("return", res.status(200).send({
              'RC': '05',
              'message': 'Tidak ada Data'
            }));
          case 14:
            return _context2.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'Sukses',
              rows: rows
            }));
          case 15:
            _context2.next = 21;
            break;
          case 17:
            _context2.prev = 17;
            _context2.t0 = _context2["catch"](4);
            console.log(_context2.t0);
            return _context2.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi atau Data',
              error: _context2.t0
            }));
          case 21:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[4, 17]]);
    }))();
  },
  getDynamicData: function getDynamicData(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var ip, path, method, findOneQuery, _yield$db$query3, rows, rowCount;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            /// ddl header untuk web 
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = '/api/web/general/getDynamicData/:type/:parent_id';
            method = 'GET';
            findOneQuery = "select * from elayanan_get_vue_dynamic_form_model_data($1,$2,$3,$4,$5,$6,$7)";
            console.log(findOneQuery, [ip, path, method, req.user.nip, req.params.type, req.params.parent_id, req.params.bahasa]);
            _context3.prev = 5;
            _context3.next = 8;
            return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, req.params.type, req.params.parent_id, req.params.bahasa]);
          case 8:
            _yield$db$query3 = _context3.sent;
            rows = _yield$db$query3.rows;
            rowCount = _yield$db$query3.rowCount;
            if (rowCount) {
              _context3.next = 15;
              break;
            }
            return _context3.abrupt("return", res.status(200).send({
              'RC': '05',
              'message': 'Tidak ada Data'
            }));
          case 15:
            return _context3.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'Sukses',
              rows: rows
            }));
          case 16:
            _context3.next = 21;
            break;
          case 18:
            _context3.prev = 18;
            _context3.t0 = _context3["catch"](5);
            return _context3.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi atau Data',
              error: _context3.t0
            }));
          case 21:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[5, 18]]);
    }))();
  },
  tahap_get_status: function tahap_get_status(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var ip, path, method, findOneQuery, _yield$db$query4, rows, rowCount;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            /// ddl header untuk web 
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = '/api/web/pusat/tahap_get_status/:no_registrasi/:tahap_id';
            method = 'GET';
            findOneQuery = "select * from elayanan.tahap_get_status($1::varchar,$2::varchar,$3::varchar,$4::varchar,$5::uuid,$6::integer)";
            console.log(findOneQuery, [ip, path, method, req.user.nip, req.params.no_registrasi, req.params.tahap_id]);
            _context4.prev = 5;
            _context4.next = 8;
            return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, req.params.no_registrasi, req.params.tahap_id]);
          case 8:
            _yield$db$query4 = _context4.sent;
            rows = _yield$db$query4.rows;
            rowCount = _yield$db$query4.rowCount;
            if (rowCount) {
              _context4.next = 15;
              break;
            }
            return _context4.abrupt("return", res.status(200).send({
              'RC': '05',
              'message': 'Tidak ada Data'
            }));
          case 15:
            return _context4.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'Sukses',
              rows: rows
            }));
          case 16:
            _context4.next = 21;
            break;
          case 18:
            _context4.prev = 18;
            _context4.t0 = _context4["catch"](5);
            return _context4.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi atau Data',
              error: _context4.t0
            }));
          case 21:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[5, 18]]);
    }))();
  },
  tahap_update_status: function tahap_update_status(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      var ip, path, method, findOneQuery, _yield$db$query5, rows, rowCount;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            /// ddl header untuk web
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = '/api/web/pusat/tahap_update_status/';
            method = 'GET';
            findOneQuery = "select * from elayanan.tahap_update_status($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)";
            console.log(findOneQuery, [ip, path, method, req.user.nip, 'Update', req.body.no_registrasi, req.body.tahap_id, req.body.id_status, req.body.scan_file, req.body.nama_file, req.body.keterangan, req.body.keterangan_en, req.body.keterangan_sa]);
            _context5.prev = 5;
            _context5.next = 8;
            return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, 'Update', req.body.no_registrasi, req.body.tahap_id, req.body.id_status, req.body.scan_file, req.body.nama_file, req.body.keterangan, req.body.keterangan_en, req.body.keterangan_sa]);
          case 8:
            _yield$db$query5 = _context5.sent;
            rows = _yield$db$query5.rows;
            rowCount = _yield$db$query5.rowCount;
            if (rowCount) {
              _context5.next = 15;
              break;
            }
            return _context5.abrupt("return", res.status(200).send({
              'RC': '05',
              'message': 'Tidak ada Data'
            }));
          case 15:
            return _context5.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'Sukses',
              rows: rows
            }));
          case 16:
            _context5.next = 22;
            break;
          case 18:
            _context5.prev = 18;
            _context5.t0 = _context5["catch"](5);
            console.log(_context5.t0);
            return _context5.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi atau Data',
              error: _context5.t0
            }));
          case 22:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[5, 18]]);
    }))();
  },
  vendor_kirim_penawaran: function vendor_kirim_penawaran(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
      var ip, path, method, findOneQuery, _yield$db$query6, rows, rowCount;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            /// ddl header untuk web
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = '/api/web/general/getformfields';
            method = 'GET';
            findOneQuery = "select * from elayanan.vendor_kirim_penawaran($1,$2,$3,$4,$5,$6,$7)";
            console.log(findOneQuery, [ip, path, method, req.user.nip, 'Kirim Penawaran', req.body.registrasi_id, req.body.lang]);
            _context6.prev = 5;
            _context6.next = 8;
            return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, 'Kirim Penawaran', req.body.registrasi_id, req.body.lang]);
          case 8:
            _yield$db$query6 = _context6.sent;
            rows = _yield$db$query6.rows;
            rowCount = _yield$db$query6.rowCount;
            if (rowCount) {
              _context6.next = 15;
              break;
            }
            return _context6.abrupt("return", res.status(200).send({
              'RC': '05',
              'message': 'Tidak ada Data'
            }));
          case 15:
            return _context6.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'Sukses',
              rows: rows
            }));
          case 16:
            _context6.next = 22;
            break;
          case 18:
            _context6.prev = 18;
            _context6.t0 = _context6["catch"](5);
            console.log(_context6.t0);
            return _context6.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi atau Data',
              error: _context6.t0
            }));
          case 22:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[5, 18]]);
    }))();
  },
  tahap_draft_status: function tahap_draft_status(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
      var ip, path, method, findOneQuery, _yield$db$query7, rows, rowCount;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            /// ddl header untuk web
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = '/api/web/pusat/tahap_draft_status/';
            method = 'GET';
            findOneQuery = "select * from elayanan.draft_update_status($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)";
            console.log(findOneQuery, [ip, path, method, req.user.nip, 'Update', req.body.no_registrasi, req.body.tahap_id, req.body.id_status, req.body.scan_file, req.body.nama_file, req.body.keterangan, req.body.keterangan_en, req.body.keterangan_sa]);
            _context7.prev = 5;
            _context7.next = 8;
            return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, 'Update', req.body.no_registrasi, req.body.tahap_id, req.body.id_status, req.body.scan_file, req.body.nama_file, req.body.keterangan, req.body.keterangan_en, req.body.keterangan_sa]);
          case 8:
            _yield$db$query7 = _context7.sent;
            rows = _yield$db$query7.rows;
            rowCount = _yield$db$query7.rowCount;
            if (rowCount) {
              _context7.next = 15;
              break;
            }
            return _context7.abrupt("return", res.status(200).send({
              'RC': '05',
              'message': 'Tidak ada Data'
            }));
          case 15:
            return _context7.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'Sukses',
              rows: rows
            }));
          case 16:
            _context7.next = 22;
            break;
          case 18:
            _context7.prev = 18;
            _context7.t0 = _context7["catch"](5);
            console.log(_context7.t0);
            return _context7.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi atau Data',
              error: _context7.t0
            }));
          case 22:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[5, 18]]);
    }))();
  }
};
var _default = exports["default"] = DynamicForm;