"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _moment = _interopRequireDefault(require("moment"));
var _db = _interopRequireDefault(require("../db"));
var _Helper = _interopRequireDefault(require("./Helper"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var _require = require('express-validator/check'),
  check = _require.check,
  validationResult = _require.validationResult;
var User = {
  /**
   * Login
   * @param {object} req
   * @param {object} res
   * @returns {object} user object
   */
  login: function login(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var text, _yield$db$query, rows, token;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!(!req.body.userid || !req.body.password)) {
              _context.next = 2;
              break;
            }
            return _context.abrupt("return", res.status(400).send({
              'RC': '01',
              'message': 'Userid/Password Tidak Boleh Kosong'
            }));
          case 2:
            text = 'SELECT * FROM users WHERE user_id = $1';
            _context.prev = 3;
            _context.next = 6;
            return _db["default"].query(text, [req.body.userid]);
          case 6:
            _yield$db$query = _context.sent;
            rows = _yield$db$query.rows;
            if (rows[0]) {
              _context.next = 10;
              break;
            }
            return _context.abrupt("return", res.status(400).send({
              'RC': '02',
              'message': 'Userid/Password Salah'
            }));
          case 10:
            if (_Helper["default"].comparePassword(rows[0].password, req.body.password)) {
              _context.next = 12;
              break;
            }
            return _context.abrupt("return", res.status(400).send({
              'RC': '02',
              'message': 'Userid/Password Salah'
            }));
          case 12:
            token = _Helper["default"].generateToken(rows[0].user_id, rows[0].user_kategori);
            return _context.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'Sukses',
              token: token
            }));
          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](3);
            return _context.abrupt("return", res.status(400).send(_context.t0));
          case 19:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[3, 16]]);
    }))();
  },
  Apilogin: function Apilogin(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var errors, ip, path, method, text, _yield$db$query2, rows, row, token;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            errors = validationResult(req);
            if (errors.isEmpty()) {
              _context2.next = 3;
              break;
            }
            return _context2.abrupt("return", res.status(422).json({
              'RC': '13',
              'message': 'data request tidak valid',
              'info': errors.array()
            }));
          case 3:
            if (!(!req.body.userid || !req.body.password)) {
              _context2.next = 5;
              break;
            }
            return _context2.abrupt("return", res.status(400).send({
              'RC': '01',
              'message': 'Userid/Password Tidak Boleh Kosong'
            }));
          case 5:
            //const token = 'tes'//Helper.generateToken(req.body.user_id,req.body.user_id);
            //console.log(token)
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = 'api/login';
            method = 'POST';
            text = 'select * from elayanan.get_login_web($1,$2,$3,$4,$5)'; //console.log(text, [ip, path, method,req.body.userid,req.body.password]) 
            _context2.prev = 9;
            _context2.next = 12;
            return _db["default"].query(text, [ip, path, method, req.body.userid, req.body.password]);
          case 12:
            _yield$db$query2 = _context2.sent;
            rows = _yield$db$query2.rows;
            if (rows[0]) {
              _context2.next = 16;
              break;
            }
            return _context2.abrupt("return", res.status(200).send({
              'RC': '02',
              'message': 'Userid/Password Salah'
            }));
          case 16:
            row = rows[0]; //console(row.organisasi_id)
            token = _Helper["default"].generateToken(row.user_id, row.user_kategori, row.organisasi_id);
            row.token = token;
            return _context2.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'Sukses',
              token: token
            }));
          case 22:
            _context2.prev = 22;
            _context2.t0 = _context2["catch"](9);
            return _context2.abrupt("return", res.status(400).send(_context2.t0));
          case 25:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[9, 22]]);
    }))();
  },
  weblogin: function weblogin(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var ip, path, method, text, _yield$db$query3, rows, row, data, token;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            if (!(!req.body.userid || !req.body.password)) {
              _context3.next = 2;
              break;
            }
            return _context3.abrupt("return", res.status(400).send({
              'RC': '01',
              'message': 'Userid/Password Tidak Boleh Kosong'
            }));
          case 2:
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = 'web/login';
            method = 'POST';
            text = 'select * from eoffice.get_login_web($1,$2,$3,$4,$5)';
            console.log(text, [ip, path, method, 'login', JSON.stringify(req.body)]);
            _context3.prev = 7;
            _context3.next = 10;
            return _db["default"].query(text, [ip, path, method, 'login', JSON.stringify(req.body)]);
          case 10:
            _yield$db$query3 = _context3.sent;
            rows = _yield$db$query3.rows;
            if (rows[0]) {
              _context3.next = 14;
              break;
            }
            return _context3.abrupt("return", res.status(200).send({
              'RC': '02',
              'message': 'Userid/Password Salah'
            }));
          case 14:
            if (!(rows[0].data == null)) {
              _context3.next = 16;
              break;
            }
            return _context3.abrupt("return", res.status(200).send({
              'RC': rows[0].rc,
              'message': rows[0].message
            }));
          case 16:
            if (!(rows[0].rc == '03')) {
              _context3.next = 18;
              break;
            }
            return _context3.abrupt("return", res.status(200).send({
              'RC': rows[0].rc,
              'message': rows[0].message
            }));
          case 18:
            //end
            row = rows[0];
            data = row.data; // console.log(JSON.stringify(row.data.employee[0].nip))
            token = _Helper["default"].generateToken(data.employee[0].nip, data.employee[0].unker_id, data.employee[0].jabatan_id, data.employee[0].nik);
            data.token = token;
            return _context3.abrupt("return", res.status(200).send({
              'RC': row.rc,
              'message': row.message,
              data: data
            }));
          case 25:
            _context3.prev = 25;
            _context3.t0 = _context3["catch"](7);
            return _context3.abrupt("return", res.status(400).send(_context3.t0));
          case 28:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[7, 25]]);
    }))();
  },
  create: function create(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var ip, path, method, createQuery, _yield$db$query4, rows, rowCount, data;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = '/api/web/user/crud';
            method = 'POST';
            createQuery = "select * from eoffice.user_crud ($1,$2,$3,$4,$5::json)";
            console.log(createQuery, [ip, path, method, 'web', JSON.stringify(req.body)]);
            _context4.prev = 5;
            _context4.next = 8;
            return _db["default"].query(createQuery, [ip, path, method, 'web', JSON.stringify(req.body)]);
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
            console.log(data);
            if (!(rows[0].rc == '00')) {
              _context4.next = 21;
              break;
            }
            return _context4.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'Sukses',
              data: data
            }));
          case 21:
            return _context4.abrupt("return", res.status(200).send({
              'RC': '03',
              'message': 'Gagal',
              data: data
            }));
          case 22:
            _context4.next = 27;
            break;
          case 24:
            _context4.prev = 24;
            _context4.t0 = _context4["catch"](5);
            return _context4.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi Atau Data',
              error: _context4.t0
            }));
          case 27:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[5, 24]]);
    }))();
  },
  getUserPpk: function getUserPpk(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      var ip, path, method, createQuery, _yield$db$query5, rows, rowCount, data;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = '/api/web/user/crud';
            method = 'POST';
            createQuery = "select * from eoffice.user_crud ($1,$2,$3,$4,$5::json)";
            console.log(createQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body)]);
            _context5.prev = 5;
            _context5.next = 8;
            return _db["default"].query(createQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body)]);
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
            console.log(data);
            return _context5.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'Sukses',
              data: data
            }));
          case 18:
            _context5.next = 23;
            break;
          case 20:
            _context5.prev = 20;
            _context5.t0 = _context5["catch"](5);
            return _context5.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi Atau Data',
              error: _context5.t0
            }));
          case 23:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[5, 20]]);
    }))();
  },
  /**
   * Delete A User
   * @param {object} req
   * @param {object} res
   * @returns {void} return status code 204
   */
  "delete": function _delete(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
      var deleteQuery, _yield$db$query6, rows;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            deleteQuery = 'DELETE FROM tbl_users WHERE id=$1 returning *';
            _context6.prev = 1;
            _context6.next = 4;
            return _db["default"].query(deleteQuery, [req.user.nip]);
          case 4:
            _yield$db$query6 = _context6.sent;
            rows = _yield$db$query6.rows;
            if (rows[0]) {
              _context6.next = 8;
              break;
            }
            return _context6.abrupt("return", res.status(404).send({
              'message': 'User Not Found'
            }));
          case 8:
            return _context6.abrupt("return", res.status(204).send({
              'message': 'Deleted'
            }));
          case 11:
            _context6.prev = 11;
            _context6.t0 = _context6["catch"](1);
            return _context6.abrupt("return", res.status(400).send(_context6.t0));
          case 14:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[1, 11]]);
    }))();
  },
  validate: function validate(method) {
    // console.log(check)
    switch (method) {
      case 'login':
        {
          return [[check('userid').isLength({
            min: 3
          }).withMessage('Userid Minimal 3 Karakter'), check('userid').isLength({
            max: 10
          }).withMessage('Userid Maksimal 10 Karakter'), check('password').not().isEmpty().withMessage('Tidak Boleh Kosong')]];
        }
    }
  },
  crudRoleUser: function crudRoleUser(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
      var ip, path, method, findOneQuery, _yield$db$query7, rows, rowCount, data;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = '/api/web/master/role_user/crud';
            method = 'POST';
            findOneQuery = "select * from eoffice.role_user_crud  ($1,$2,$3,$4,$5::json)";
            console.log(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body)]);
            //  console.log(req.user.nip);
            _context7.prev = 5;
            _context7.next = 8;
            return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body)]);
          case 8:
            _yield$db$query7 = _context7.sent;
            rows = _yield$db$query7.rows;
            rowCount = _yield$db$query7.rowCount;
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
  crudRoleMenu: function crudRoleMenu(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
      var ip, path, method, findOneQuery, _yield$db$query8, rows, rowCount, data;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = '/api/web/master/role_user/crud';
            method = 'POST';
            findOneQuery = "select * from eoffice.role_menu_crud  ($1::varchar,$2::varchar,$3::varchar,$4::varchar,$5::json)";
            console.log(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body)]);
            //  console.log(req.user.nip);
            _context8.prev = 5;
            _context8.next = 8;
            return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body)]);
          case 8:
            _yield$db$query8 = _context8.sent;
            rows = _yield$db$query8.rows;
            rowCount = _yield$db$query8.rowCount;
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
  }
};
var _default = exports["default"] = User;