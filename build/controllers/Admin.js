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
var buster = require('buster');
var XlsxTemplate = require('../template/lib');
var fs = require('fs');
var pathtemp = require('path');
var etree = require('elementtree');
var Admin = {
  /**
   * Input Paket PPIU
   * @param {object} req
   * @param {object} res
   * @returns {object} data pergerakan jemaah
   */
  getMenu: function getMenu(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var getMenuQuery, getChildMenuQuery, _yield$db$query, rows, rowCount, i, menu, rowsParentCount, _yield$db$query2, _rows, _rowCount;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            getMenuQuery = "select * from get_menu($1,$2)";
            getChildMenuQuery = "select * from get_child_menu($1,$2)";
            _context.prev = 2;
            _context.next = 5;
            return _db["default"].query(getMenuQuery, [req.params.user_kategori, req.params.lang]);
          case 5:
            _yield$db$query = _context.sent;
            rows = _yield$db$query.rows;
            rowCount = _yield$db$query.rowCount;
            i = 0;
            if (rowCount) {
              _context.next = 13;
              break;
            }
            return _context.abrupt("return", res.status(400).send({
              'RC': '04',
              'message': 'Proses Gagal'
            }));
          case 13:
            menu = rows;
            rowsParentCount = rowCount;
          case 15:
            if (!(i < rowsParentCount)) {
              _context.next = 25;
              break;
            }
            _context.next = 18;
            return _db["default"].query(getChildMenuQuery, [menu[i].id_menu, req.params.lang]);
          case 18:
            _yield$db$query2 = _context.sent;
            _rows = _yield$db$query2.rows;
            _rowCount = _yield$db$query2.rowCount;
            if (_rowCount && _rowCount > 0) {
              //console.log(rows);
              menu[i].items = _rows;
            }
            i = i + 1;
            _context.next = 15;
            break;
          case 25:
            return _context.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'Sukses',
              menu: menu
            }));
          case 26:
            _context.next = 31;
            break;
          case 28:
            _context.prev = 28;
            _context.t0 = _context["catch"](2);
            return _context.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi atau Data',
              error: _context.t0
            }));
          case 31:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[2, 28]]);
    }))();
  },
  getAllowedPage: function getAllowedPage(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var getMenuQuery, _yield$db$query3, rows, rowCount, i, allowedpage;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            getMenuQuery = "select * from get_allowed_page($1)";
            _context2.prev = 1;
            _context2.next = 4;
            return _db["default"].query(getMenuQuery, [req.params.user_kategori]);
          case 4:
            _yield$db$query3 = _context2.sent;
            rows = _yield$db$query3.rows;
            rowCount = _yield$db$query3.rowCount;
            i = 0;
            if (rowCount) {
              _context2.next = 12;
              break;
            }
            return _context2.abrupt("return", res.status(400).send({
              'RC': '04',
              'message': 'Proses Gagal'
            }));
          case 12:
            allowedpage = rows;
            return _context2.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'Sukses',
              allowedpage: allowedpage
            }));
          case 14:
            _context2.next = 19;
            break;
          case 16:
            _context2.prev = 16;
            _context2.t0 = _context2["catch"](1);
            return _context2.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi atau Data',
              error: _context2.t0
            }));
          case 19:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[1, 16]]);
    }))();
  },
  crudUnker: function crudUnker(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var ip, path, method, findOneQuery, _yield$db$query4, rows, rowCount, data;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = '/api/web/master/unker';
            method = 'POST';
            findOneQuery = "select * from eoffice.unker_crud  ($1,$2,$3,$4,$5::json)";
            console.log(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body)]);
            //  console.log(req.user.nip);
            _context3.prev = 5;
            _context3.next = 8;
            return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body)]);
          case 8:
            _yield$db$query4 = _context3.sent;
            rows = _yield$db$query4.rows;
            rowCount = _yield$db$query4.rowCount;
            if (!(!rowCount || rows[0].rc != '00')) {
              _context3.next = 15;
              break;
            }
            return _context3.abrupt("return", res.status(200).send({
              'RC': rows[0].rc,
              'message': rows[0].message
            }));
          case 15:
            data = rows[0].data;
            return _context3.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'Sukses',
              data: data
            }));
          case 17:
            _context3.next = 23;
            break;
          case 19:
            _context3.prev = 19;
            _context3.t0 = _context3["catch"](5);
            console.log(_context3.t0);
            return _context3.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi Atau Data',
              error: _context3.t0
            }));
          case 23:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[5, 19]]);
    }))();
  },
  crudPokja: function crudPokja(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var ip, path, method, findOneQuery, _yield$db$query5, rows, rowCount, data;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = '/api/web/master/pokja/crud';
            method = 'POST';
            findOneQuery = "select * from eoffice.t_pokja_crud  ($1,$2,$3,$4,$5::json)";
            console.log(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body)]);
            //  console.log(req.user.nip);
            _context4.prev = 5;
            _context4.next = 8;
            return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body)]);
          case 8:
            _yield$db$query5 = _context4.sent;
            rows = _yield$db$query5.rows;
            rowCount = _yield$db$query5.rowCount;
            if (!(!rowCount || rows[0].rc != '00')) {
              _context4.next = 15;
              break;
            }
            return _context4.abrupt("return", res.status(200).send({
              'RC': rows[0].rc,
              'message': rows[0].message
            }));
          case 15:
            data = rows[0].data;
            return _context4.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'Sukses',
              data: data
            }));
          case 17:
            _context4.next = 23;
            break;
          case 19:
            _context4.prev = 19;
            _context4.t0 = _context4["catch"](5);
            console.log(_context4.t0);
            return _context4.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi Atau Data',
              error: _context4.t0
            }));
          case 23:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[5, 19]]);
    }))();
  },
  crudPokjaAnggota: function crudPokjaAnggota(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      var ip, path, method, findOneQuery, _yield$db$query6, rows, rowCount, data;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = '/api/web/master/pokjaanggota/crud';
            method = 'POST';
            findOneQuery = "select * from eoffice.t_pokja_anggota_crud  ($1,$2,$3,$4,$5::json)";
            console.log(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body)]);
            //  console.log(req.user.nip);
            _context5.prev = 5;
            _context5.next = 8;
            return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body)]);
          case 8:
            _yield$db$query6 = _context5.sent;
            rows = _yield$db$query6.rows;
            rowCount = _yield$db$query6.rowCount;
            if (!(!rowCount || rows[0].rc != '00')) {
              _context5.next = 15;
              break;
            }
            return _context5.abrupt("return", res.status(200).send({
              'RC': rows[0].rc,
              'message': rows[0].message
            }));
          case 15:
            data = rows[0].data;
            return _context5.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'Sukses',
              data: data
            }));
          case 17:
            _context5.next = 23;
            break;
          case 19:
            _context5.prev = 19;
            _context5.t0 = _context5["catch"](5);
            console.log(_context5.t0);
            return _context5.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi Atau Data',
              error: _context5.t0
            }));
          case 23:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[5, 19]]);
    }))();
  },
  crudParameterHeader: function crudParameterHeader(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
      var ip, path, method, findOneQuery, _yield$db$query7, rows, rowCount, data;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = '/api/general/crudHeaders';
            method = 'POST';
            findOneQuery = "select * from eoffice.parameter_header_crud  ($1,$2,$3,$4,$5::json)";
            console.log(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body)]);
            //  console.log(req.user.nip);
            _context6.prev = 5;
            _context6.next = 8;
            return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body)]);
          case 8:
            _yield$db$query7 = _context6.sent;
            rows = _yield$db$query7.rows;
            rowCount = _yield$db$query7.rowCount;
            if (!(!rowCount || rows[0].rc != '00')) {
              _context6.next = 15;
              break;
            }
            return _context6.abrupt("return", res.status(200).send({
              'RC': rows[0].rc,
              'message': rows[0].message
            }));
          case 15:
            data = rows[0].data;
            return _context6.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'Sukses',
              data: data
            }));
          case 17:
            _context6.next = 23;
            break;
          case 19:
            _context6.prev = 19;
            _context6.t0 = _context6["catch"](5);
            console.log(_context6.t0);
            return _context6.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi Atau Data',
              error: _context6.t0
            }));
          case 23:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[5, 19]]);
    }))();
  },
  crudParameterDetail: function crudParameterDetail(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
      var ip, path, method, findOneQuery, _yield$db$query8, rows, rowCount, data;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = '/api/general/crudDetails';
            method = 'POST';
            findOneQuery = "select * from eoffice.parameter_detail_crud  ($1,$2,$3,$4,$5::json)";
            console.log(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body)]);
            //  console.log(req.user.nip);
            _context7.prev = 5;
            _context7.next = 8;
            return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body)]);
          case 8:
            _yield$db$query8 = _context7.sent;
            rows = _yield$db$query8.rows;
            rowCount = _yield$db$query8.rowCount;
            if (!(!rowCount || rows[0].rc != '00')) {
              _context7.next = 15;
              break;
            }
            return _context7.abrupt("return", res.status(200).send({
              'RC': rows[0].rc,
              'message': rows[0].message
            }));
          case 15:
            data = rows[0].data;
            return _context7.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'Sukses',
              data: data
            }));
          case 17:
            _context7.next = 23;
            break;
          case 19:
            _context7.prev = 19;
            _context7.t0 = _context7["catch"](5);
            console.log(_context7.t0);
            return _context7.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi Atau Data',
              error: _context7.t0
            }));
          case 23:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[5, 19]]);
    }))();
  },
  crudSetting: function crudSetting(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
      var ip, path, method, findOneQuery, _yield$db$query9, rows, rowCount, data;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = '/api/web/master/satker';
            method = 'POST';
            findOneQuery = "select * from eoffice.setting_crud  ($1,$2,$3,$4,$5::json)";
            console.log(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body)]);
            //  console.log(req.user.nip);
            _context8.prev = 5;
            _context8.next = 8;
            return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body)]);
          case 8:
            _yield$db$query9 = _context8.sent;
            rows = _yield$db$query9.rows;
            rowCount = _yield$db$query9.rowCount;
            if (!(!rowCount || rows[0].rc != '00')) {
              _context8.next = 15;
              break;
            }
            return _context8.abrupt("return", res.status(200).send({
              'RC': rows[0].rc,
              'message': rows[0].message
            }));
          case 15:
            data = rows[0].data;
            return _context8.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'Sukses',
              data: data
            }));
          case 17:
            _context8.next = 23;
            break;
          case 19:
            _context8.prev = 19;
            _context8.t0 = _context8["catch"](5);
            console.log(_context8.t0);
            return _context8.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi Atau Data',
              error: _context8.t0
            }));
          case 23:
          case "end":
            return _context8.stop();
        }
      }, _callee8, null, [[5, 19]]);
    }))();
  },
  getSatkerDdl: function getSatkerDdl(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
      var findOneQuery, _yield$db$query10, rows, rowCount;
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            /// ddl header untuk web
            findOneQuery = "select * from eoffice.get_ddl_satker($1::json)";
            console.log(findOneQuery, [req.body]);
            _context9.prev = 2;
            _context9.next = 5;
            return _db["default"].query(findOneQuery, [req.body]);
          case 5:
            _yield$db$query10 = _context9.sent;
            rows = _yield$db$query10.rows;
            rowCount = _yield$db$query10.rowCount;
            if (rowCount) {
              _context9.next = 12;
              break;
            }
            return _context9.abrupt("return", res.status(200).send({
              'RC': '05',
              'message': 'Tidak ada Data'
            }));
          case 12:
            return _context9.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'Sukses',
              rows: rows
            }));
          case 13:
            _context9.next = 18;
            break;
          case 15:
            _context9.prev = 15;
            _context9.t0 = _context9["catch"](2);
            return _context9.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi atau Data',
              error: _context9.t0
            }));
          case 18:
          case "end":
            return _context9.stop();
        }
      }, _callee9, null, [[2, 15]]);
    }))();
  },
  getPegawaiDdl: function getPegawaiDdl(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
      var findOneQuery, _yield$db$query11, rows, rowCount;
      return _regeneratorRuntime().wrap(function _callee10$(_context10) {
        while (1) switch (_context10.prev = _context10.next) {
          case 0:
            /// ddl header untuk web
            // const findOneQuery = `select * from eoffice.get_ddl_pegawai($1)`;
            findOneQuery = "select * from eoffice.get_ddl_pegawai($1::smallint)";
            console.log(findOneQuery, [req.params.eselon_level]);
            _context10.prev = 2;
            _context10.next = 5;
            return _db["default"].query(findOneQuery, [req.params.eselon_level]);
          case 5:
            _yield$db$query11 = _context10.sent;
            rows = _yield$db$query11.rows;
            rowCount = _yield$db$query11.rowCount;
            if (rowCount) {
              _context10.next = 12;
              break;
            }
            return _context10.abrupt("return", res.status(200).send({
              'RC': '05',
              'message': 'Tidak ada Data'
            }));
          case 12:
            return _context10.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'Sukses',
              rows: rows
            }));
          case 13:
            _context10.next = 18;
            break;
          case 15:
            _context10.prev = 15;
            _context10.t0 = _context10["catch"](2);
            return _context10.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi atau Data',
              error: _context10.t0
            }));
          case 18:
          case "end":
            return _context10.stop();
        }
      }, _callee10, null, [[2, 15]]);
    }))();
  },
  getPegawaiDdl2: function getPegawaiDdl2(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
      var findOneQuery, _yield$db$query12, rows, rowCount;
      return _regeneratorRuntime().wrap(function _callee11$(_context11) {
        while (1) switch (_context11.prev = _context11.next) {
          case 0:
            /// ddl header untuk web
            // const findOneQuery = `select * from eoffice.get_ddl_pegawai($1)`;
            findOneQuery = "select * from eoffice.get_ddl_pegawai2($1::smallint)"; //console.log(findOneQuery, [req.params.eselon_level]);
            _context11.prev = 1;
            _context11.next = 4;
            return _db["default"].query(findOneQuery, [req.params.eselon_level]);
          case 4:
            _yield$db$query12 = _context11.sent;
            rows = _yield$db$query12.rows;
            rowCount = _yield$db$query12.rowCount;
            if (rowCount) {
              _context11.next = 11;
              break;
            }
            return _context11.abrupt("return", res.status(200).send({
              'RC': '05',
              'message': 'Tidak ada Data'
            }));
          case 11:
            return _context11.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'Sukses',
              rows: rows
            }));
          case 12:
            _context11.next = 17;
            break;
          case 14:
            _context11.prev = 14;
            _context11.t0 = _context11["catch"](1);
            return _context11.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi atau Data',
              error: _context11.t0
            }));
          case 17:
          case "end":
            return _context11.stop();
        }
      }, _callee11, null, [[1, 14]]);
    }))();
  },
  crudMenu: function crudMenu(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
      var ip, path, method, findOneQuery, _yield$db$query13, rows, rowCount, data;
      return _regeneratorRuntime().wrap(function _callee12$(_context12) {
        while (1) switch (_context12.prev = _context12.next) {
          case 0:
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = '/api/admin/crudMenu';
            method = 'POST';
            findOneQuery = "select * from eoffice.menu_crud  ($1::varchar,$2,$3,$4,$5::json)";
            console.log(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body)]);
            //  console.log(req.user.nip);
            _context12.prev = 5;
            _context12.next = 8;
            return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body)]);
          case 8:
            _yield$db$query13 = _context12.sent;
            rows = _yield$db$query13.rows;
            rowCount = _yield$db$query13.rowCount;
            if (!(!rowCount || rows[0].rc != '00')) {
              _context12.next = 15;
              break;
            }
            return _context12.abrupt("return", res.status(200).send({
              'RC': rows[0].rc,
              'message': rows[0].message
            }));
          case 15:
            data = rows[0].data;
            return _context12.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'Sukses',
              data: data
            }));
          case 17:
            _context12.next = 23;
            break;
          case 19:
            _context12.prev = 19;
            _context12.t0 = _context12["catch"](5);
            console.log(_context12.t0);
            return _context12.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi Atau Data',
              error: _context12.t0
            }));
          case 23:
          case "end":
            return _context12.stop();
        }
      }, _callee12, null, [[5, 19]]);
    }))();
  },
  crudTemplateIsiSurat: function crudTemplateIsiSurat(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
      var ip, path, method, findOneQuery, _yield$db$query14, rows, rowCount, data;
      return _regeneratorRuntime().wrap(function _callee13$(_context13) {
        while (1) switch (_context13.prev = _context13.next) {
          case 0:
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = '/api/admin/surat/template';
            method = 'POST';
            findOneQuery = "select * from eoffice.template_isi_surat_crud  ($1,$2,$3,$4,$5::json)";
            console.log(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body)]);
            //  console.log(req.user.nip);
            _context13.prev = 5;
            _context13.next = 8;
            return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body)]);
          case 8:
            _yield$db$query14 = _context13.sent;
            rows = _yield$db$query14.rows;
            rowCount = _yield$db$query14.rowCount;
            if (rowCount) {
              _context13.next = 15;
              break;
            }
            return _context13.abrupt("return", res.status(400).send({
              'RC': '05',
              'message': 'Tidak Ada Data'
            }));
          case 15:
            data = rows[0].data;
            return _context13.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'Sukses',
              data: data
            }));
          case 17:
            _context13.next = 22;
            break;
          case 19:
            _context13.prev = 19;
            _context13.t0 = _context13["catch"](5);
            return _context13.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi Atau Data',
              error: _context13.t0
            }));
          case 22:
          case "end":
            return _context13.stop();
        }
      }, _callee13, null, [[5, 19]]);
    }))();
  },
  crudRoleUser: function crudRoleUser(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
      var ip, path, method, findOneQuery, _yield$db$query15, rows, rowCount, data;
      return _regeneratorRuntime().wrap(function _callee14$(_context14) {
        while (1) switch (_context14.prev = _context14.next) {
          case 0:
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = '/api/admin/role_user/crud';
            method = 'POST';
            findOneQuery = "select * from eoffice.role_user_crud  ($1,$2,$3,$4,$5::json)";
            console.log(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body)]);
            //  console.log(req.user.nip);
            _context14.prev = 5;
            _context14.next = 8;
            return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body)]);
          case 8:
            _yield$db$query15 = _context14.sent;
            rows = _yield$db$query15.rows;
            rowCount = _yield$db$query15.rowCount;
            if (!(!rowCount || rows[0].rc != '00')) {
              _context14.next = 15;
              break;
            }
            return _context14.abrupt("return", res.status(200).send({
              'RC': rows[0].rc,
              'message': rows[0].message
            }));
          case 15:
            data = rows[0].data;
            return _context14.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'Sukses',
              data: data
            }));
          case 17:
            _context14.next = 23;
            break;
          case 19:
            _context14.prev = 19;
            _context14.t0 = _context14["catch"](5);
            console.log(_context14.t0);
            return _context14.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi Atau Data',
              error: _context14.t0
            }));
          case 23:
          case "end":
            return _context14.stop();
        }
      }, _callee14, null, [[5, 19]]);
    }))();
  },
  crudRoleMenu: function crudRoleMenu(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
      var ip, path, method, findOneQuery, _yield$db$query16, rows, rowCount, data;
      return _regeneratorRuntime().wrap(function _callee15$(_context15) {
        while (1) switch (_context15.prev = _context15.next) {
          case 0:
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = '/api/admin/role_user/crud';
            method = 'POST';
            findOneQuery = "select * from eoffice.role_menu_crud  ($1::varchar,$2::varchar,$3::varchar,$4::varchar,$5::json)";
            console.log(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body)]);
            //  console.log(req.user.nip);
            _context15.prev = 5;
            _context15.next = 8;
            return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body)]);
          case 8:
            _yield$db$query16 = _context15.sent;
            rows = _yield$db$query16.rows;
            rowCount = _yield$db$query16.rowCount;
            if (!(!rowCount || rows[0].rc != '00')) {
              _context15.next = 15;
              break;
            }
            return _context15.abrupt("return", res.status(200).send({
              'RC': rows[0].rc,
              'message': rows[0].message
            }));
          case 15:
            data = rows[0].data;
            return _context15.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'Sukses',
              data: data
            }));
          case 17:
            _context15.next = 23;
            break;
          case 19:
            _context15.prev = 19;
            _context15.t0 = _context15["catch"](5);
            console.log(_context15.t0);
            return _context15.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi Atau Data',
              error: _context15.t0
            }));
          case 23:
          case "end":
            return _context15.stop();
        }
      }, _callee15, null, [[5, 19]]);
    }))();
  },
  crudProdukHukum: function crudProdukHukum(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee16() {
      var ip, path, method, findOneQuery, _yield$db$query17, rows, rowCount, data;
      return _regeneratorRuntime().wrap(function _callee16$(_context16) {
        while (1) switch (_context16.prev = _context16.next) {
          case 0:
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = '/api/admin/crudProdukHukum';
            method = 'POST';
            findOneQuery = "select * from eoffice.m_produk_hukum_crud  ($1::varchar,$2,$3,$4,$5::json)";
            console.log(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body)]);
            //  console.log(req.user.nip);
            _context16.prev = 5;
            _context16.next = 8;
            return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body)]);
          case 8:
            _yield$db$query17 = _context16.sent;
            rows = _yield$db$query17.rows;
            rowCount = _yield$db$query17.rowCount;
            if (!(!rowCount || rows[0].rc != '00')) {
              _context16.next = 15;
              break;
            }
            return _context16.abrupt("return", res.status(200).send({
              'RC': rows[0].rc,
              'message': rows[0].message
            }));
          case 15:
            data = rows[0].data;
            return _context16.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'Sukses',
              data: data
            }));
          case 17:
            _context16.next = 23;
            break;
          case 19:
            _context16.prev = 19;
            _context16.t0 = _context16["catch"](5);
            console.log(_context16.t0);
            return _context16.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi Atau Data',
              error: _context16.t0
            }));
          case 23:
          case "end":
            return _context16.stop();
        }
      }, _callee16, null, [[5, 19]]);
    }))();
  },
  crudHariLibur: function crudHariLibur(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee17() {
      var ip, path, method, findOneQuery, _yield$db$query18, rows, rowCount, data;
      return _regeneratorRuntime().wrap(function _callee17$(_context17) {
        while (1) switch (_context17.prev = _context17.next) {
          case 0:
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = '/api/admin/crudHariLibur';
            method = 'POST';
            findOneQuery = "select * from eoffice.harilibur_crud  ($1::varchar,$2,$3,$4,$5::json)";
            console.log(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body)]);
            //  console.log(req.user.nip);
            _context17.prev = 5;
            _context17.next = 8;
            return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body)]);
          case 8:
            _yield$db$query18 = _context17.sent;
            rows = _yield$db$query18.rows;
            rowCount = _yield$db$query18.rowCount;
            if (rowCount) {
              _context17.next = 15;
              break;
            }
            return _context17.abrupt("return", res.status(400).send({
              'RC': '05',
              'message': 'Tidak Ada Data'
            }));
          case 15:
            data = rows[0].data;
            return _context17.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'Sukses',
              data: data
            }));
          case 17:
            _context17.next = 22;
            break;
          case 19:
            _context17.prev = 19;
            _context17.t0 = _context17["catch"](5);
            return _context17.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi Atau Data',
              error: _context17.t0
            }));
          case 22:
          case "end":
            return _context17.stop();
        }
      }, _callee17, null, [[5, 19]]);
    }))();
  },
  crudJenisCuti: function crudJenisCuti(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee18() {
      var ip, path, method, findOneQuery, _yield$db$query19, rows, rowCount, data;
      return _regeneratorRuntime().wrap(function _callee18$(_context18) {
        while (1) switch (_context18.prev = _context18.next) {
          case 0:
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = '/api/admin/crudJenisCuti';
            method = 'POST';
            findOneQuery = "select * from eoffice.m_jenis_cuti_crud  ($1::varchar,$2,$3,$4,$5::json)";
            console.log(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body)]);
            //  console.log(req.user.nip);
            _context18.prev = 5;
            _context18.next = 8;
            return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body)]);
          case 8:
            _yield$db$query19 = _context18.sent;
            rows = _yield$db$query19.rows;
            rowCount = _yield$db$query19.rowCount;
            if (rowCount) {
              _context18.next = 15;
              break;
            }
            return _context18.abrupt("return", res.status(400).send({
              'RC': '05',
              'message': 'Tidak Ada Data'
            }));
          case 15:
            data = rows[0].data;
            return _context18.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'Sukses',
              data: data
            }));
          case 17:
            _context18.next = 22;
            break;
          case 19:
            _context18.prev = 19;
            _context18.t0 = _context18["catch"](5);
            return _context18.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi Atau Data',
              error: _context18.t0
            }));
          case 22:
          case "end":
            return _context18.stop();
        }
      }, _callee18, null, [[5, 19]]);
    }))();
  },
  crudKelasJabatan: function crudKelasJabatan(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee19() {
      var ip, path, method, findOneQuery, _yield$db$query20, rows, rowCount, data;
      return _regeneratorRuntime().wrap(function _callee19$(_context19) {
        while (1) switch (_context19.prev = _context19.next) {
          case 0:
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = '/api/admin/crudKelasJabatan';
            method = 'POST';
            findOneQuery = "select * from eoffice.m_kelas_jabatan_crud  ($1,$2,$3,$4,$5::json)";
            console.log(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body)]);
            //  console.log(req.user.nip);
            _context19.prev = 5;
            _context19.next = 8;
            return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body)]);
          case 8:
            _yield$db$query20 = _context19.sent;
            rows = _yield$db$query20.rows;
            rowCount = _yield$db$query20.rowCount;
            if (!(!rowCount || rows[0].rc != '00')) {
              _context19.next = 15;
              break;
            }
            return _context19.abrupt("return", res.status(200).send({
              'RC': rows[0].rc,
              'message': rows[0].message
            }));
          case 15:
            data = rows[0].data;
            return _context19.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'Sukses',
              data: data
            }));
          case 17:
            _context19.next = 23;
            break;
          case 19:
            _context19.prev = 19;
            _context19.t0 = _context19["catch"](5);
            console.log(_context19.t0);
            return _context19.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi Atau Data',
              error: _context19.t0
            }));
          case 23:
          case "end":
            return _context19.stop();
        }
      }, _callee19, null, [[5, 19]]);
    }))();
  },
  crudPegawai: function crudPegawai(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee20() {
      var ip, path, method, findOneQuery, _yield$db$query21, rows, rowCount, data;
      return _regeneratorRuntime().wrap(function _callee20$(_context20) {
        while (1) switch (_context20.prev = _context20.next) {
          case 0:
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = '/api/admin/crudPegawai';
            method = 'POST';
            findOneQuery = "select * from eoffice.pegawai_crud ($1,$2,$3,$4,$5::json)";
            console.log(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body)]);
            //  console.log(req.user.nip);
            _context20.prev = 5;
            _context20.next = 8;
            return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body)]);
          case 8:
            _yield$db$query21 = _context20.sent;
            rows = _yield$db$query21.rows;
            rowCount = _yield$db$query21.rowCount;
            if (!(!rowCount || rows[0].rc != '00')) {
              _context20.next = 15;
              break;
            }
            return _context20.abrupt("return", res.status(200).send({
              'RC': rows[0].rc,
              'message': rows[0].message
            }));
          case 15:
            data = rows[0].data;
            return _context20.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'Sukses',
              data: data
            }));
          case 17:
            _context20.next = 23;
            break;
          case 19:
            _context20.prev = 19;
            _context20.t0 = _context20["catch"](5);
            console.log(_context20.t0);
            return _context20.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi Atau Data',
              error: _context20.t0
            }));
          case 23:
          case "end":
            return _context20.stop();
        }
      }, _callee20, null, [[5, 19]]);
    }))();
  },
  crudUnitKerjaPegawai: function crudUnitKerjaPegawai(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee21() {
      var ip, path, method, findOneQuery, _yield$db$query22, rows, rowCount, data;
      return _regeneratorRuntime().wrap(function _callee21$(_context21) {
        while (1) switch (_context21.prev = _context21.next) {
          case 0:
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = '/api/admin/crudUnitKerjaPegawai';
            method = 'POST';
            findOneQuery = "select * from eoffice.m_unit_kerja_pegawai_crud ($1,$2,$3,$4,$5::json)";
            console.log(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body)]);
            //  console.log(req.user.nip);
            _context21.prev = 5;
            _context21.next = 8;
            return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body)]);
          case 8:
            _yield$db$query22 = _context21.sent;
            rows = _yield$db$query22.rows;
            rowCount = _yield$db$query22.rowCount;
            if (!(!rowCount || rows[0].rc != '00')) {
              _context21.next = 15;
              break;
            }
            return _context21.abrupt("return", res.status(200).send({
              'RC': rows[0].rc,
              'message': rows[0].message
            }));
          case 15:
            data = rows[0].data;
            return _context21.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'Sukses',
              data: data
            }));
          case 17:
            _context21.next = 23;
            break;
          case 19:
            _context21.prev = 19;
            _context21.t0 = _context21["catch"](5);
            console.log(_context21.t0);
            return _context21.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi Atau Data',
              error: _context21.t0
            }));
          case 23:
          case "end":
            return _context21.stop();
        }
      }, _callee21, null, [[5, 19]]);
    }))();
  },
  getTTEDdl: function getTTEDdl(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee22() {
      var findOneQuery, _yield$db$query23, rows, rowCount;
      return _regeneratorRuntime().wrap(function _callee22$(_context22) {
        while (1) switch (_context22.prev = _context22.next) {
          case 0:
            /// ddl header untuk web
            // const findOneQuery = `select * from eoffice.get_ddl_pegawai($1)`;
            findOneQuery = "select * from eoffice.get_ddl_tte()";
            console.log(findOneQuery);
            _context22.prev = 2;
            _context22.next = 5;
            return _db["default"].query(findOneQuery);
          case 5:
            _yield$db$query23 = _context22.sent;
            rows = _yield$db$query23.rows;
            rowCount = _yield$db$query23.rowCount;
            if (rowCount) {
              _context22.next = 12;
              break;
            }
            return _context22.abrupt("return", res.status(200).send({
              'RC': '05',
              'message': 'Tidak ada Data'
            }));
          case 12:
            return _context22.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'Sukses',
              rows: rows
            }));
          case 13:
            _context22.next = 18;
            break;
          case 15:
            _context22.prev = 15;
            _context22.t0 = _context22["catch"](2);
            return _context22.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi atau Data',
              error: _context22.t0
            }));
          case 18:
          case "end":
            return _context22.stop();
        }
      }, _callee22, null, [[2, 15]]);
    }))();
  },
  crudJenisCuti2: function crudJenisCuti2(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee23() {
      var ip, path, method, findOneQuery, _yield$db$query24, rows, rowCount, data;
      return _regeneratorRuntime().wrap(function _callee23$(_context23) {
        while (1) switch (_context23.prev = _context23.next) {
          case 0:
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = '/api/admin/crudJenisCuti2';
            method = 'POST';
            findOneQuery = "select * from eoffice.m_jenis_cuti_crud  ($1::varchar,$2,$3,$4,$5::json)";
            console.log(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body)]);
            //  console.log(req.user.nip);
            _context23.prev = 5;
            _context23.next = 8;
            return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body)]);
          case 8:
            _yield$db$query24 = _context23.sent;
            rows = _yield$db$query24.rows;
            rowCount = _yield$db$query24.rowCount;
            if (rowCount) {
              _context23.next = 15;
              break;
            }
            return _context23.abrupt("return", res.status(400).send({
              'RC': '05',
              'message': 'Tidak Ada Data'
            }));
          case 15:
            data = rows[0].data;
            return _context23.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'Sukses',
              data: data
            }));
          case 17:
            _context23.next = 22;
            break;
          case 19:
            _context23.prev = 19;
            _context23.t0 = _context23["catch"](5);
            return _context23.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi Atau Data',
              error: _context23.t0
            }));
          case 22:
          case "end":
            return _context23.stop();
        }
      }, _callee23, null, [[5, 19]]);
    }))();
  },
  crudMesinError: function crudMesinError(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee24() {
      var ip, path, method, findOneQuery, _yield$db$query25, rows, rowCount, data;
      return _regeneratorRuntime().wrap(function _callee24$(_context24) {
        while (1) switch (_context24.prev = _context24.next) {
          case 0:
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = '/api/admin/crudMesinError';
            method = 'POST';
            findOneQuery = "select * from eoffice.mesin_rusak_crud  ($1::varchar,$2,$3,$4,$5::json)";
            console.log(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body)]);
            //  console.log(req.user.nip);
            _context24.prev = 5;
            _context24.next = 8;
            return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body)]);
          case 8:
            _yield$db$query25 = _context24.sent;
            rows = _yield$db$query25.rows;
            rowCount = _yield$db$query25.rowCount;
            if (rowCount) {
              _context24.next = 15;
              break;
            }
            return _context24.abrupt("return", res.status(400).send({
              'RC': '05',
              'message': 'Tidak Ada Data'
            }));
          case 15:
            data = rows[0].data;
            return _context24.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'Sukses',
              data: data
            }));
          case 17:
            _context24.next = 22;
            break;
          case 19:
            _context24.prev = 19;
            _context24.t0 = _context24["catch"](5);
            return _context24.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi Atau Data',
              error: _context24.t0
            }));
          case 22:
          case "end":
            return _context24.stop();
        }
      }, _callee24, null, [[5, 19]]);
    }))();
  }
};
var _default = exports["default"] = Admin;