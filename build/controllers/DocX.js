"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _process = require("process");
var _db = _interopRequireDefault(require("../db"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var JSZip = require('jszip');
var Docxtemplater = require('docxtemplater');
var ImageModule = require('docxtemplater-image-module');
var Multer = require("multer");
var Minio = require("minio");
var fs = require('fs');
var path = require('path');
var toPdf = require("office-to-pdf");
var axios = require('axios');
var QRCode = require('qrcode');
var Minio = require("minio");
var axios = require('axios');
if (process.env.MINIO_USES_SSL) {
  var ssl = true;
} else {
  var ssl = false;
}
var minioClient = new Minio.Client({
  endPoint: process.env.MINIO_ENDPOINT,
  port: parseInt(process.env.MINIO_PORT),
  useSSL: ssl,
  accessKey: process.env.MINIO_ACCESSKEY,
  secretKey: process.env.MINIO_SECRETKEY
});
var opts = {};
opts.centered = false;
opts.getImage = function (tagValue, tagName) {
  return fs.readFileSync(tagValue);
};
opts.getSize = function (img, tagValue, tagName) {
  return [90, 70];
};
var imageModule = new ImageModule(opts);
function generateLogo(req, res) {
  var request = require('request').defaults({
    encoding: null
  });
  var base64Logo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==";
  request.get(req, function (error, response, body) {
    var test;

    // try{
    if (!error && response.statusCode == 200) {
      base64Logo = "data:" + response.headers["content-type"] + ";base64," + new Buffer.from(body).toString('base64');
      tes = "a";
      //  console.log(base64Logo)		
      //return base64Logo;	
    } else {
      tes = "b";
      base64Logo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==";
    }
  });
  return base64Logo;
}
function getBase64(url) {
  return axios.get(url, {
    responseType: 'arraybuffer'
  }).then(function (response) {
    if (response.status == 200) {
      return Buffer.from(response.data, 'binary').toString('base64');
    } else {
      return Buffer.from("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==");
    }
  })["catch"](function (error) {
    console.log(error);
    return Buffer.from("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==");
  });
}
function _getQrCode2(_x) {
  return _getQrCode.apply(this, arguments);
}
function _getQrCode() {
  _getQrCode = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(url) {
    var base64qr;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          base64qr = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=';
          if (!url) {
            _context10.next = 5;
            break;
          }
          _context10.next = 4;
          return QRCode.toDataURL(url);
        case 4:
          base64qr = _context10.sent;
        case 5:
          return _context10.abrupt("return", base64qr);
        case 6:
        case "end":
          return _context10.stop();
      }
    }, _callee10);
  }));
  return _getQrCode.apply(this, arguments);
}
var DocX = {
  getQrCode: function getQrCode(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var tesQrcode;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _getQrCode2('I am a pony!');
          case 2:
            tesQrcode = _context.sent;
            return _context.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'sa',
              tesQrcode: tesQrcode
            }));
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  crudTemplateIsiSurat: function crudTemplateIsiSurat(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var ip, path, method, findOneQuery, _yield$db$query, rows, rowCount, data;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path = '/api/surat/template_isi_surat_crud';
            method = 'POST';
            findOneQuery = "select * from eoffice.template_isi_surat_crud  ($1,$2,$3,$4,$5::json)";
            console.log(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body)]);
            //  console.log(req.user.nip);
            _context2.prev = 5;
            _context2.next = 8;
            return _db["default"].query(findOneQuery, [ip, path, method, req.user.nip, JSON.stringify(req.body)]);
          case 8:
            _yield$db$query = _context2.sent;
            rows = _yield$db$query.rows;
            rowCount = _yield$db$query.rowCount;
            if (!(!rowCount || rows[0].rc != '00')) {
              _context2.next = 15;
              break;
            }
            return _context2.abrupt("return", res.status(200).send({
              'RC': rows[0].rc,
              'message': rows[0].message
            }));
          case 15:
            data = rows[0].data;
            return _context2.abrupt("return", res.status(200).send({
              'RC': '00',
              'message': 'Sukses',
              data: data
            }));
          case 17:
            _context2.next = 23;
            break;
          case 19:
            _context2.prev = 19;
            _context2.t0 = _context2["catch"](5);
            console.log(_context2.t0);
            return _context2.abrupt("return", res.status(400).send({
              'RC': '99',
              'message': 'Error Koneksi Atau Data',
              error: _context2.t0
            }));
          case 23:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[5, 19]]);
    }))();
  },
  cetakSK: function cetakSK(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var opts, data, templatedata, noImg, imageModule, findOneQuery, ip, path2, method, rup_id, _yield$db$query2, rows, rowCount, message, doc, dateFormat, now, tglSkrang, qrCodeImage, base64Image;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            // tarik dat
            opts = {};
            opts.centered = false;
            opts.getImage = function (tagValue, tagName) {
              return fs.readFileSync(tagValue);
            };
            opts.getSize = function (img, tagValue, tagName) {
              return [90, 70];
            };
            data = [];
            templatedata = [];
            noImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=';
            imageModule = new ImageModule(opts);
            findOneQuery = "select * from setting Where kode_setting=$1";
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path2 = 'web/ppiu/report/doc/pendaftaran';
            method = 'GET';
            rup_id = req.params.rup_id;
            console.log(rup_id);
            //console.log(findOneQuery, [ip, path2, method, req.user.nip,req.params.jamaah_id])
            findOneQuery = "select * from eoffice.get_data_report($1,$2,$3,$4,$5::json)";
            console.log('body' + JSON.stringify(body));
            console.log(findOneQuery, [ip, path2, method, 'req.user.nip', JSON.stringify(req.body)]);
            _context3.prev = 17;
            _context3.next = 20;
            return _db["default"].query(findOneQuery, [ip, path2, method, 'req.user.nip', JSON.stringify(req.body)]);
          case 20:
            _yield$db$query2 = _context3.sent;
            rows = _yield$db$query2.rows;
            rowCount = _yield$db$query2.rowCount;
            if (rowCount) {
              _context3.next = 27;
              break;
            }
            return _context3.abrupt("return", res.status(400).send({
              'RC': '07',
              'message': 'Data Tidak Ditemukan'
            }));
          case 27:
            message = rows[0].hasil; //console.log(rows[0]);
            if (message === 'sukses') {
              data = rows[0].data;
              templatedata = rows[0].templatedata;
              console.log(templatedata);
              //console.log(base64Image);
            }
            //console.log(templatedata);
            doc = new Docxtemplater(); //res.setHeader('Content-disposition', 'attachment; filename=SuratPendaftaranJamaah.docx');
            res.setHeader('Content-disposition', 'attachment; filename=' + templatedata['nama_report'] + '.pdf');
            res.setHeader('filename', templatedata['nama_report'] + '.pdf');
            res.setHeader('Access-Control-Expose-Headers', 'filename');
            //var url = "https://image.shutterstock.com/image-vector/mecca-travel-logo-al-haj-260nw-1244768023.jpg";
            //get current date
            dateFormat = require('dateformat');
            dateFormat.i18n = {
              dayNames: ['Ming', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'],
              monthNames: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
              timeNames: ['a', 'p', 'am', 'pm', 'A', 'P', 'AM', 'PM']
            };
            now = new Date();
            tglSkrang = dateFormat(now, "dddd, d mmmm yyyy"); //console.log('base64Logo/; '+base64Logo);
            _context3.next = 39;
            return _getQrCode2(data['url_qr']);
          case 39:
            qrCodeImage = _context3.sent;
            base64Image = "";
            try {
              base64Image = qrCodeImage.split(';base64,').pop();
            } catch (_unused) {
              base64Image = noImg.split(';base64,').pop();
            }
            fs.writeFile(path.join(__dirname, '../template/logo' + templatedata['nama_report'] + '.png'), base64Image, {
              encoding: 'base64'
            }, function (err) {
              //console.log(base64Logo);
              // generate report 
              var content = fs.readFileSync(path.resolve(__dirname, '../template/' + templatedata['nama_file']), 'binary');
              // console.log(content)
              var zip = new JSZip(content);
              var doc = new Docxtemplater();
              doc.loadZip(zip);
              doc.attachModule(imageModule);
              //console.log(data);
              data.image = path.resolve(__dirname, '../template/logo' + templatedata['nama_report'] + '.png');
              doc.setData(data);
              // ambil data dari database
              //data['%image'] = base64Logo;
              //doc.setData(data)
              try {
                // render the document (replace all occurences of {first_name} by John, {last_name} by Doe, ...)
                doc.render();
              } catch (error) {
                var e = {
                  message: error.message,
                  name: error.name,
                  stack: error.stack,
                  properties: error.properties
                };
                //console.log(JSON.stringify({error: e}));
                // The error thrown here contains additional information when logged with JSON.stringify (it contains a property object).
                throw error;
              }
              var buf = doc.getZip().generate({
                type: 'nodebuffer'
              });
              //res.send(buf);
              //res.end();
              // buf is a nodejs buffer, you can either write it to a file or do anything else with it.
              fs.writeFileSync(path.resolve(__dirname, '../template/' + templatedata['nama_report'] + '.docx'), buf);
              var wordBuffer = fs.readFileSync(path.resolve(__dirname, '../template/' + templatedata['nama_report'] + '.docx'));
              // res.send(wordBuffer);
              toPdf(wordBuffer).then(function (pdfBuffer) {
                res.send(pdfBuffer);
                res.end();
                fs.unlinkSync(path.resolve(__dirname, '../template/' + templatedata['nama_report'] + '.docx'));
                fs.unlinkSync(path.resolve(__dirname, '../template/logo' + templatedata['nama_report'] + '.png'));
              }, function (err) {
                console.log(err);
              });
            });

            //return res.status(200).send({ 'RC': '00', 'message': message,data});
          case 43:
            _context3.next = 49;
            break;
          case 45:
            _context3.prev = 45;
            _context3.t0 = _context3["catch"](17);
            console.log(_context3.t0);
            return _context3.abrupt("return", res.status(200).send({
              'RC': '99'
            }));
          case 49:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[17, 45]]);
    }))();
  },
  cetakSuratTugas: function cetakSuratTugas(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var opts, data, templatedata, ip, path2, method, findOneQuery, _yield$db$query3, rows, rowCount, message, doc, dateFormat, now, tglSkrang, qrCodeImage, base64Image;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            // tarik dat
            opts = {};
            opts.centered = false;
            opts.getImage = function (tagValue, tagName) {
              return fs.readFileSync(tagValue);
            };
            opts.getSize = function (img, tagValue, tagName) {
              return [90, 70];
            };
            data = [];
            templatedata = []; //var noImg ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII='
            //var imageModule = new ImageModule(opts);
            //var findOneQuery = `select * from setting Where kode_setting=$1`;
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path2 = 'web/surat/surat_tugas';
            method = 'post'; //console.log(findOneQuery, [ip, path2, method, req.user.nip,req.params.jamaah_id])
            findOneQuery = "select * from eoffice.get_data_report($1,$2,$3,$4,$5::json)";
            console.log('body' + JSON.stringify(req.body));
            console.log(findOneQuery, [ip, path2, method, req.user.nip, JSON.stringify(req.body)]);
            _context4.prev = 12;
            _context4.next = 15;
            return _db["default"].query(findOneQuery, [ip, path2, method, req.user.nip, JSON.stringify(req.body)]);
          case 15:
            _yield$db$query3 = _context4.sent;
            rows = _yield$db$query3.rows;
            rowCount = _yield$db$query3.rowCount;
            if (rowCount) {
              _context4.next = 22;
              break;
            }
            return _context4.abrupt("return", res.status(400).send({
              'RC': '07',
              'message': 'Data Tidak Ditemukan'
            }));
          case 22:
            message = rows[0].hasil; //console.log(rows[0]);
            if (message === 'sukses') {
              data = rows[0].data;
              templatedata = rows[0].templatedata;
              console.log(templatedata);
              console.log(data);
              //console.log(base64Image);
            }
            //console.log(templatedata);
            doc = new Docxtemplater(); //res.setHeader('Content-disposition', 'attachment; filename=SuratPendaftaranJamaah.docx');
            res.setHeader('Content-disposition', 'attachment; filename=' + templatedata['nama_report'] + '.pdf');
            res.setHeader('filename', templatedata['nama_report'] + '.pdf');
            res.setHeader('Access-Control-Expose-Headers', 'filename');
            //var url = "https://image.shutterstock.com/image-vector/mecca-travel-logo-al-haj-260nw-1244768023.jpg";
            //get current date
            dateFormat = require('dateformat');
            dateFormat.i18n = {
              dayNames: ['Ming', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'],
              monthNames: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
              timeNames: ['a', 'p', 'am', 'pm', 'A', 'P', 'AM', 'PM']
            };
            now = new Date();
            tglSkrang = dateFormat(now, "dddd, d mmmm yyyy"); //console.log('base64Logo/; '+base64Logo);
            _context4.next = 34;
            return _getQrCode2(data['url_qr']);
          case 34:
            qrCodeImage = _context4.sent;
            base64Image = "";
            try {
              base64Image = qrCodeImage.split(';base64,').pop();
            } catch (_unused2) {
              base64Image = noImg.split(';base64,').pop();
            }
            fs.writeFile(path.join(__dirname, '../template/logo' + templatedata['nama_report'] + '.png'), base64Image, {
              encoding: 'base64'
            }, function (err) {
              //console.log(base64Logo);
              // generate report 
              var content = fs.readFileSync(path.resolve(__dirname, '../template/' + templatedata['nama_file']), 'binary');
              // console.log(content)
              var zip = new JSZip(content);
              var doc = new Docxtemplater();
              doc.loadZip(zip);
              doc.attachModule(imageModule);
              //console.log(data);
              data.image = path.resolve(__dirname, '../template/logo' + templatedata['nama_report'] + '.png');
              doc.setData(data);
              // ambil data dari database
              //data['%image'] = base64Logo;
              //doc.setData(data)
              try {
                // render the document (replace all occurences of {first_name} by John, {last_name} by Doe, ...)
                doc.render();
              } catch (error) {
                var e = {
                  message: error.message,
                  name: error.name,
                  stack: error.stack,
                  properties: error.properties
                };
                //console.log(JSON.stringify({error: e}));
                // The error thrown here contains additional information when logged with JSON.stringify (it contains a property object).
                throw error;
              }
              var buf = doc.getZip().generate({
                type: 'nodebuffer'
              });
              //res.send(buf);
              //res.end();
              // buf is a nodejs buffer, you can either write it to a file or do anything else with it.
              fs.writeFileSync(path.resolve(__dirname, '../template/' + templatedata['nama_report'] + '.docx'), buf);
              var wordBuffer = fs.readFileSync(path.resolve(__dirname, '../template/' + templatedata['nama_report'] + '.docx'));
              // res.send(wordBuffer);
              toPdf(wordBuffer).then(function (pdfBuffer) {
                res.send(pdfBuffer);
                res.end();
                fs.unlinkSync(path.resolve(__dirname, '../template/' + templatedata['nama_report'] + '.docx'));
                fs.unlinkSync(path.resolve(__dirname, '../template/logo' + templatedata['nama_report'] + '.png'));
              }, function (err) {
                console.log(err);
              });
            });

            //return res.status(200).send({ 'RC': '00', 'message': message,data});
          case 38:
            _context4.next = 44;
            break;
          case 40:
            _context4.prev = 40;
            _context4.t0 = _context4["catch"](12);
            console.log(_context4.t0);
            return _context4.abrupt("return", res.status(200).send({
              'RC': '99'
            }));
          case 44:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[12, 40]]);
    }))();
  },
  cetakSuratTugas2: function cetakSuratTugas2(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      var opts, data, templatedata, noImg, dataMenimbang, dataDasar, imageModule, ip, path2, method, findOneQuery, _yield$db$query4, rows, rowCount, message, menimbangText, arrayMenimbang, i, dasarText, arrayDasar, _i, doc, qrCodeImage, base64Image;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            // tarik dat
            opts = {};
            opts.centered = false;
            opts.getImage = function (tagValue, tagName) {
              return fs.readFileSync(tagValue);
            };
            opts.getSize = function (img, tagValue, tagName) {
              return [90, 70];
            };
            data = [];
            templatedata = [];
            noImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=';
            dataMenimbang = [];
            dataDasar = [];
            imageModule = new ImageModule(opts);
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path2 = '/report/surat_tugas';
            method = 'POST';
            findOneQuery = "select * from eoffice.get_data_report($1,$2,$3,$4,$5::json)";
            console.log(findOneQuery, [ip, path2, method, 'req.user.nip', JSON.stringify(req.body)]);
            _context5.prev = 15;
            _context5.next = 18;
            return _db["default"].query(findOneQuery, [ip, path2, method, 'req.user.nip', JSON.stringify(req.body)]);
          case 18:
            _yield$db$query4 = _context5.sent;
            rows = _yield$db$query4.rows;
            rowCount = _yield$db$query4.rowCount;
            if (rowCount) {
              _context5.next = 25;
              break;
            }
            return _context5.abrupt("return", res.status(400).send({
              'RC': '07',
              'message': 'Data Tidak Ditemukan'
            }));
          case 25:
            message = rows[0].hasil; //console.log(rows[0]);
            if (message === 'sukses') {
              data = rows[0].data[0];
              templatedata = rows[0].templatedata;
              console.log(templatedata);
              console.log(data.m);
              //console.log(base64Image);
              menimbangText = '';
              menimbangText = data.m.replace('<ul>', '');
              menimbangText = menimbangText.replace(/<li>/g, '');
              menimbangText = menimbangText.replace('</ul>', '');
              arrayMenimbang = menimbangText.split('</li>');
              console.log(arrayMenimbang);
              for (i = 0; i < arrayMenimbang.length - 1; i++) {
                dataMenimbang.push({
                  "isi": arrayMenimbang[i]
                });
              }
              dasarText = '';
              dasarText = data.d.replace('<ol>', '');
              dasarText = dasarText.replace(/<li>/g, '');
              dasarText = dasarText.replace('</ol>', '');
              arrayDasar = dasarText.split('</li>');
              for (_i = 0; _i < arrayDasar.length - 1; _i++) {
                dataDasar.push({
                  "isi": arrayDasar[_i]
                });
              }
              data.m = dataMenimbang;
              data.d = dataDasar;
            }
            //console.log(templatedata);
            doc = new Docxtemplater(); //res.setHeader('Content-disposition', 'attachment; filename=SuratPendaftaranJamaah.docx');
            res.setHeader('Content-disposition', 'attachment; filename=' + templatedata['nama_report'] + '.pdf');
            res.setHeader('filename', templatedata['nama_report'] + '.pdf');
            res.setHeader('Access-Control-Expose-Headers', 'filename');
            _context5.next = 33;
            return _getQrCode2(data['url_qr']);
          case 33:
            qrCodeImage = _context5.sent;
            base64Image = "";
            try {
              base64Image = qrCodeImage.split(';base64,').pop();
            } catch (_unused3) {
              base64Image = noImg.split(';base64,').pop();
            }
            fs.writeFile(path.join(__dirname, '../template/logo' + templatedata['nama_report'] + '.png'), base64Image, {
              encoding: 'base64'
            }, function (err) {
              //console.log(base64Logo);
              // generate report 
              var content = fs.readFileSync(path.resolve(__dirname, '../template/' + templatedata['nama_file']), 'binary');
              // console.log(content)
              var zip = new JSZip(content);
              var doc = new Docxtemplater();
              doc.loadZip(zip);
              doc.attachModule(imageModule);
              //console.log(data);
              data.image = path.resolve(__dirname, '../template/logo' + templatedata['nama_report'] + '.png');
              doc.setData(data);
              try {
                // render the document (replace all occurences of {first_name} by John, {last_name} by Doe, ...)
                doc.render();
              } catch (error) {
                var e = {
                  message: error.message,
                  name: error.name,
                  stack: error.stack,
                  properties: error.properties
                };
                // The error thrown here contains additional information when logged with JSON.stringify (it contains a property object).
                throw error;
              }
              var buf = doc.getZip().generate({
                type: 'nodebuffer'
              });
              // buf is a nodejs buffer, you can either write it to a file or do anything else with it.
              fs.writeFileSync(path.resolve(__dirname, '../template/' + templatedata['nama_report'] + '.docx'), buf);
              var wordBuffer = fs.readFileSync(path.resolve(__dirname, '../template/' + templatedata['nama_report'] + '.docx'));
              // res.send(wordBuffer);
              toPdf(wordBuffer).then(function (pdfBuffer) {
                res.send(pdfBuffer);
                res.end();
                fs.unlinkSync(path.resolve(__dirname, '../template/' + templatedata['nama_report'] + '.docx'));
                fs.unlinkSync(path.resolve(__dirname, '../template/logo' + templatedata['nama_report'] + '.png'));
              }, function (err) {
                console.log(err);
              });
            });

            //return res.status(200).send({ 'RC': '00', 'message': message,data});
          case 37:
            _context5.next = 43;
            break;
          case 39:
            _context5.prev = 39;
            _context5.t0 = _context5["catch"](15);
            console.log(_context5.t0);
            return _context5.abrupt("return", res.status(200).send({
              'RC': '99'
            }));
          case 43:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[15, 39]]);
    }))();
  },
  cetakPersonel: function cetakPersonel(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
      var opts, data, templatedata, noImg, imageModule, findOneQuery, ip, path2, method, rup_id, body, _yield$db$query5, rows, rowCount, message, doc, dateFormat, now, tglSkrang, qrCodeImage, base64Image;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            // tarik dat
            opts = {};
            opts.centered = false;
            opts.getImage = function (tagValue, tagName) {
              return fs.readFileSync(tagValue);
            };
            opts.getSize = function (img, tagValue, tagName) {
              return [90, 70];
            };
            data = [];
            templatedata = [];
            noImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=';
            imageModule = new ImageModule(opts);
            findOneQuery = "select * from setting Where kode_setting=$1";
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path2 = 'web/ppiu/report/doc/pendaftaran';
            method = 'GET';
            rup_id = req.params.rup_id;
            console.log(rup_id);
            //console.log(findOneQuery, [ip, path2, method, req.user.nip,req.params.jamaah_id])
            findOneQuery = "select * from eoffice.get_data_report($1,$2,$3,$4,$5::json)";
            body = {
              "tipe_report": "surat-personel-ukpbj-dumy",
              "rup_id": rup_id
            };
            console.log('body' + JSON.stringify(body));
            console.log(findOneQuery, [ip, path2, method, 'req.user.nip', JSON.stringify(body)]);
            _context6.prev = 18;
            _context6.next = 21;
            return _db["default"].query(findOneQuery, [ip, path2, method, 'req.user.nip', JSON.stringify(body)]);
          case 21:
            _yield$db$query5 = _context6.sent;
            rows = _yield$db$query5.rows;
            rowCount = _yield$db$query5.rowCount;
            if (rowCount) {
              _context6.next = 28;
              break;
            }
            return _context6.abrupt("return", res.status(400).send({
              'RC': '07',
              'message': 'Data Tidak Ditemukan'
            }));
          case 28:
            message = rows[0].hasil; //console.log(rows[0]);
            if (message === 'sukses') {
              data = rows[0].data;
              templatedata = rows[0].templatedata;
              console.log(templatedata);
              //console.log(base64Image);
            }
            //console.log(templatedata);
            doc = new Docxtemplater(); //res.setHeader('Content-disposition', 'attachment; filename=SuratPendaftaranJamaah.docx');
            res.setHeader('Content-disposition', 'attachment; filename=' + templatedata['nama_report'] + '.pdf');
            res.setHeader('filename', templatedata['nama_report'] + '.pdf');
            res.setHeader('Access-Control-Expose-Headers', 'filename');
            //var url = "https://image.shutterstock.com/image-vector/mecca-travel-logo-al-haj-260nw-1244768023.jpg";
            //get current date
            dateFormat = require('dateformat');
            dateFormat.i18n = {
              dayNames: ['Ming', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'],
              monthNames: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
              timeNames: ['a', 'p', 'am', 'pm', 'A', 'P', 'AM', 'PM']
            };
            now = new Date();
            tglSkrang = dateFormat(now, "dddd, d mmmm yyyy"); //console.log('base64Logo/; '+base64Logo);
            _context6.next = 40;
            return _getQrCode2(data['url_qr']);
          case 40:
            qrCodeImage = _context6.sent;
            base64Image = "";
            try {
              base64Image = qrCodeImage.split(';base64,').pop();
            } catch (_unused4) {
              base64Image = noImg.split(';base64,').pop();
            }
            fs.writeFile(path.join(__dirname, '../template/logo' + templatedata['nama_report'] + '.png'), base64Image, {
              encoding: 'base64'
            }, function (err) {
              //console.log(base64Logo);
              // generate report 
              var content = fs.readFileSync(path.resolve(__dirname, '../template/' + templatedata['nama_file']), 'binary');
              // console.log(content)
              var zip = new JSZip(content);
              var doc = new Docxtemplater();
              doc.loadZip(zip);
              doc.attachModule(imageModule);
              //console.log(data);
              data.image = path.resolve(__dirname, '../template/logo' + templatedata['nama_report'] + '.png');
              doc.setData(data);
              // ambil data dari database
              //data['%image'] = base64Logo;
              //doc.setData(data)
              try {
                // render the document (replace all occurences of {first_name} by John, {last_name} by Doe, ...)
                doc.render();
              } catch (error) {
                var e = {
                  message: error.message,
                  name: error.name,
                  stack: error.stack,
                  properties: error.properties
                };
                //console.log(JSON.stringify({error: e}));
                // The error thrown here contains additional information when logged with JSON.stringify (it contains a property object).
                throw error;
              }
              var buf = doc.getZip().generate({
                type: 'nodebuffer'
              });
              //res.send(buf);
              //res.end();
              // buf is a nodejs buffer, you can either write it to a file or do anything else with it.
              fs.writeFileSync(path.resolve(__dirname, '../template/' + templatedata['nama_report'] + '.docx'), buf);
              var wordBuffer = fs.readFileSync(path.resolve(__dirname, '../template/' + templatedata['nama_report'] + '.docx'));
              // res.send(wordBuffer);
              toPdf(wordBuffer).then(function (pdfBuffer) {
                res.send(pdfBuffer);
                res.end();
                fs.unlinkSync(path.resolve(__dirname, '../template/' + templatedata['nama_report'] + '.docx'));
                fs.unlinkSync(path.resolve(__dirname, '../template/logo' + templatedata['nama_report'] + '.png'));
              }, function (err) {
                console.log(err);
              });
            });

            //return res.status(200).send({ 'RC': '00', 'message': message,data});
          case 44:
            _context6.next = 50;
            break;
          case 46:
            _context6.prev = 46;
            _context6.t0 = _context6["catch"](18);
            console.log(_context6.t0);
            return _context6.abrupt("return", res.status(200).send({
              'RC': '99'
            }));
          case 50:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[18, 46]]);
    }))();
  },
  generateSuratTugasTTE: function generateSuratTugasTTE(req, res, next) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
      var opts, data, templatedata, noImg, dataMenimbang, dataDasar, imageModule, ip, path2, method, findOneQuery, _yield$db$query6, rows, rowCount, message, menimbangText, arrayMenimbang, i, dasarText, arrayDasar, _i2, doc, qrCodeImage, base64Image;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            // tarik dat
            opts = {};
            opts.centered = false;
            opts.getImage = function (tagValue, tagName) {
              return fs.readFileSync(tagValue);
            };
            opts.getSize = function (img, tagValue, tagName) {
              return [90, 70];
            };
            data = [];
            templatedata = [];
            noImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=';
            dataMenimbang = [];
            dataDasar = [];
            imageModule = new ImageModule(opts);
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path2 = '/report/surat_tugas';
            method = 'POST';
            findOneQuery = "select * from eoffice.get_data_report($1,$2,$3,$4,$5::json)";
            console.log(findOneQuery, [ip, path2, method, 'req.user.nip', JSON.stringify(req.body)]);
            _context7.prev = 15;
            _context7.next = 18;
            return _db["default"].query(findOneQuery, [ip, path2, method, 'req.user.nip', JSON.stringify(req.body)]);
          case 18:
            _yield$db$query6 = _context7.sent;
            rows = _yield$db$query6.rows;
            rowCount = _yield$db$query6.rowCount;
            if (rowCount) {
              _context7.next = 25;
              break;
            }
            return _context7.abrupt("return", res.status(400).send({
              'RC': '07',
              'message': 'Data Tidak Ditemukan'
            }));
          case 25:
            message = rows[0].hasil; //console.log(rows[0]);
            if (message === 'sukses') {
              data = rows[0].data[0];
              templatedata = rows[0].templatedata;
              console.log(templatedata);
              console.log(data.m);
              //console.log(base64Image);
              menimbangText = '';
              menimbangText = data.m.replace('<ul>', '');
              menimbangText = menimbangText.replace(/<li>/g, '');
              menimbangText = menimbangText.replace('</ul>', '');
              arrayMenimbang = menimbangText.split('</li>');
              console.log(arrayMenimbang);
              for (i = 0; i < arrayMenimbang.length - 1; i++) {
                dataMenimbang.push({
                  "isi": arrayMenimbang[i]
                });
              }
              dasarText = '';
              dasarText = data.d.replace('<ol>', '');
              dasarText = dasarText.replace(/<li>/g, '');
              dasarText = dasarText.replace('</ol>', '');
              arrayDasar = dasarText.split('</li>');
              for (_i2 = 0; _i2 < arrayDasar.length - 1; _i2++) {
                dataDasar.push({
                  "isi": arrayDasar[_i2]
                });
              }
              data.m = dataMenimbang;
              data.d = dataDasar;
            }
            //console.log(templatedata);
            doc = new Docxtemplater(); //res.setHeader('Content-disposition', 'attachment; filename=SuratPendaftaranJamaah.docx');
            res.setHeader('Content-disposition', 'attachment; filename=' + templatedata['id'] + '.pdf');
            res.setHeader('filename', templatedata['nama_report'] + '.pdf');
            res.setHeader('Access-Control-Expose-Headers', 'filename');
            _context7.next = 33;
            return _getQrCode2(data['url_qr']);
          case 33:
            qrCodeImage = _context7.sent;
            base64Image = "";
            try {
              base64Image = qrCodeImage.split(';base64,').pop();
            } catch (_unused5) {
              base64Image = noImg.split(';base64,').pop();
            }
            fs.writeFile(path.join(__dirname, '../template/logo' + templatedata['id'] + '.png'), base64Image, {
              encoding: 'base64'
            }, function (err) {
              //console.log(base64Logo);
              // generate report 
              var content = fs.readFileSync(path.resolve(__dirname, '../template/' + templatedata['nama_file']), 'binary');
              // console.log(content)
              var zip = new JSZip(content);
              var doc = new Docxtemplater();
              doc.loadZip(zip);
              doc.attachModule(imageModule);
              //console.log(data);
              data.image = path.resolve(__dirname, '../template/logo' + templatedata['id'] + '.png');
              doc.setData(data);
              try {
                // render the document (replace all occurences of {first_name} by John, {last_name} by Doe, ...)
                doc.render();
              } catch (error) {
                var e = {
                  message: error.message,
                  name: error.name,
                  stack: error.stack,
                  properties: error.properties
                };
                // The error thrown here contains additional information when logged with JSON.stringify (it contains a property object).
                throw error;
              }
              var buf = doc.getZip().generate({
                type: 'nodebuffer'
              });
              // buf is a nodejs buffer, you can either write it to a file or do anything else with it.
              fs.writeFileSync(path.resolve(__dirname, '../template/' + templatedata['id'] + '.docx'), buf);
              var wordBuffer = fs.readFileSync(path.resolve(__dirname, '../template/' + templatedata['id'] + '.docx'));
              // res.send(wordBuffer);
              toPdf(wordBuffer).then(function (pdfBuffer) {
                fs.writeFileSync(path.resolve(__dirname, '../temp/' + templatedata['id'] + '.pdf'), pdfBuffer);

                // res.send(pdfBuffer);
                // res.end();

                fs.unlinkSync(path.resolve(__dirname, '../template/' + templatedata['id'] + '.docx'));
                fs.unlinkSync(path.resolve(__dirname, '../template/logo' + templatedata['id'] + '.png'));
                //return res.status(200).send({ 'RC': '00', 'message': 'Sukses', data });
                // upload ke minio

                minioClient.fPutObject(process.env.MINIO_BUCKET, req.body.surat_url, path.resolve(__dirname, '../temp/' + templatedata['id'] + '.pdf'), function (err, etag) {
                  if (err) {
                    console.log('Error Upload File.', err);
                    return res.status(400).send({
                      'message': 'Error Upload File'
                    });
                  }
                  console.log('Berhasil Upload:' + req.body.surat_url);
                  next();
                });
              }, function (err) {
                console.log(err);
              });
            });

            //return res.status(200).send({ 'RC': '00', 'message': message,data});
          case 37:
            _context7.next = 43;
            break;
          case 39:
            _context7.prev = 39;
            _context7.t0 = _context7["catch"](15);
            console.log(_context7.t0);
            return _context7.abrupt("return", res.status(200).send({
              'RC': '99'
            }));
          case 43:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[15, 39]]);
    }))();
  },
  cetakLkhTarget: function cetakLkhTarget(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
      var opts, data, templatedata, dataMenimbang, dataDasar, ip, path2, method, findOneQuery, _yield$db$query7, rows, rowCount, message, doc, base64Image;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            // tarik dat
            opts = {};
            opts.centered = false;
            /* opts.getImage = function (tagValue, tagName) {
              return fs.readFileSync(tagValue);
            }
            */
            opts.getSize = function (img, tagValue, tagName) {
              return [90, 70];
            };
            data = [];
            templatedata = []; //var noImg ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII='
            dataMenimbang = [];
            dataDasar = []; //var imageModule = new ImageModule(opts);
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path2 = '/kepegawaian/lkh/target/cetak';
            method = 'POST';
            findOneQuery = "select * from eoffice.get_data_report($1,$2,$3,$4,$5::json)";
            console.log(findOneQuery, [ip, path2, method, req.user.nip, JSON.stringify(req.body)]);
            _context8.prev = 12;
            _context8.next = 15;
            return _db["default"].query(findOneQuery, [ip, path2, method, req.user.nip, JSON.stringify(req.body)]);
          case 15:
            _yield$db$query7 = _context8.sent;
            rows = _yield$db$query7.rows;
            rowCount = _yield$db$query7.rowCount;
            if (rowCount) {
              _context8.next = 22;
              break;
            }
            return _context8.abrupt("return", res.status(400).send({
              'RC': '07',
              'message': 'Data Tidak Ditemukan'
            }));
          case 22:
            message = rows[0].hasil; //console.log(rows[0].data);
            if (message === 'sukses') {
              data = rows[0].data;
              templatedata = rows[0].templatedata;
              //console.log(templatedata);
              console.log(data);
              //console.log(base64Image);
              /* let menimbangText = '';
              menimbangText = data.m.replace('<ul>','');
              menimbangText = menimbangText.replace(/<li>/g,'');
              menimbangText= menimbangText.replace('</ul>','');
              let arrayMenimbang = menimbangText.split('</li>');
              console.log(arrayMenimbang)
              for(let i = 0; i<(arrayMenimbang.length-1); i++){
                dataMenimbang.push({ "isi": arrayMenimbang[i] });
              }
              let dasarText = '';
              dasarText = data.d.replace('<ol>','');
              dasarText = dasarText.replace(/<li>/g,'');
              dasarText = dasarText.replace('</ol>','');
              let arrayDasar = dasarText.split('</li>');
              for(let i = 0; i<(arrayDasar.length-1); i++){
                dataDasar.push({ "isi": arrayDasar[i] });
              }
                data.m = dataMenimbang;
              data.d = dataDasar; */
            }
            //console.log(templatedata);
            doc = new Docxtemplater(); //res.setHeader('Content-disposition', 'attachment; filename=SuratPendaftaranJamaah.docx');
            res.setHeader('Content-disposition', 'attachment; filename=' + templatedata['nama_report'] + '.pdf');
            res.setHeader('filename', templatedata['nama_report'] + '.pdf');
            res.setHeader('Access-Control-Expose-Headers', 'filename');

            /* var qrCodeImage= await getQrCode(data['url_qr']);*/
            base64Image = "";
            /* try{
              base64Image=qrCodeImage.split(';base64,').pop();
            }catch{
              base64Image=noImg.split(';base64,').pop();
            }  */
            fs.writeFile(path.join(__dirname, '../template/logo' + templatedata['nama_report'] + '.png'), base64Image, {
              encoding: 'base64'
            }, function (err) {
              //console.log(base64Logo);
              // generate report 
              var content = fs.readFileSync(path.resolve(__dirname, '../template/' + templatedata['nama_file']), 'binary');
              // console.log(content)
              var zip = new JSZip(content);
              var doc = new Docxtemplater();
              doc.loadZip(zip);
              //doc.attachModule(imageModule);
              //console.log(data);
              //data.image=path.resolve(__dirname, '../template/logo'+ templatedata['nama_report'] +'.png');
              doc.setData(data);
              try {
                // render the document (replace all occurences of {first_name} by John, {last_name} by Doe, ...)
                doc.render();
              } catch (error) {
                var e = {
                  message: error.message,
                  name: error.name,
                  stack: error.stack,
                  properties: error.properties
                };
                // The error thrown here contains additional information when logged with JSON.stringify (it contains a property object).
                throw error;
              }
              var buf = doc.getZip().generate({
                type: 'nodebuffer'
              });
              // buf is a nodejs buffer, you can either write it to a file or do anything else with it.
              fs.writeFileSync(path.resolve(__dirname, '../template/' + templatedata['nama_report'] + '.docx'), buf);
              var wordBuffer = fs.readFileSync(path.resolve(__dirname, '../template/' + templatedata['nama_report'] + '.docx'));
              // res.send(wordBuffer);
              toPdf(wordBuffer).then(function (pdfBuffer) {
                res.send(pdfBuffer);
                res.end();
                fs.unlinkSync(path.resolve(__dirname, '../template/' + templatedata['nama_report'] + '.docx'));
                //fs.unlinkSync(path.resolve(__dirname, '../template/logo'+ templatedata['nama_report'] +'.png'));
              }, function (err) {
                console.log(err);
              });
            });

            //return res.status(200).send({ 'RC': '00', 'message': message,data});
          case 30:
            _context8.next = 36;
            break;
          case 32:
            _context8.prev = 32;
            _context8.t0 = _context8["catch"](12);
            console.log(_context8.t0);
            return _context8.abrupt("return", res.status(200).send({
              'RC': '99'
            }));
          case 36:
          case "end":
            return _context8.stop();
        }
      }, _callee8, null, [[12, 32]]);
    }))();
  },
  cetakLkhRealisasi: function cetakLkhRealisasi(req, res) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
      var opts, data, templatedata, dataMenimbang, dataDasar, ip, path2, method, findOneQuery, _yield$db$query8, rows, rowCount, message, doc, base64Image;
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            // tarik dat
            opts = {};
            opts.centered = false;
            /* opts.getImage = function (tagValue, tagName) {
              return fs.readFileSync(tagValue);
            }
            */
            opts.getSize = function (img, tagValue, tagName) {
              return [90, 70];
            };
            data = [];
            templatedata = []; //var noImg ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII='
            dataMenimbang = [];
            dataDasar = []; //var imageModule = new ImageModule(opts);
            ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            path2 = '/kepegawaian/lkh/realisasi/cetak';
            method = 'POST';
            findOneQuery = "select * from eoffice.get_data_report($1,$2,$3,$4,$5::json)";
            console.log(findOneQuery, [ip, path2, method, req.user.nip, JSON.stringify(req.body)]);
            _context9.prev = 12;
            _context9.next = 15;
            return _db["default"].query(findOneQuery, [ip, path2, method, req.user.nip, JSON.stringify(req.body)]);
          case 15:
            _yield$db$query8 = _context9.sent;
            rows = _yield$db$query8.rows;
            rowCount = _yield$db$query8.rowCount;
            if (rowCount) {
              _context9.next = 22;
              break;
            }
            return _context9.abrupt("return", res.status(400).send({
              'RC': '07',
              'message': 'Data Tidak Ditemukan'
            }));
          case 22:
            message = rows[0].hasil; //console.log(rows[0].data);
            if (message === 'sukses') {
              data = rows[0].data;
              templatedata = rows[0].templatedata;
              //console.log(templatedata);
              console.log(data);
              //console.log(base64Image);
              /* let menimbangText = '';
              menimbangText = data.m.replace('<ul>','');
              menimbangText = menimbangText.replace(/<li>/g,'');
              menimbangText= menimbangText.replace('</ul>','');
              let arrayMenimbang = menimbangText.split('</li>');
              console.log(arrayMenimbang)
              for(let i = 0; i<(arrayMenimbang.length-1); i++){
                dataMenimbang.push({ "isi": arrayMenimbang[i] });
              }
              let dasarText = '';
              dasarText = data.d.replace('<ol>','');
              dasarText = dasarText.replace(/<li>/g,'');
              dasarText = dasarText.replace('</ol>','');
              let arrayDasar = dasarText.split('</li>');
              for(let i = 0; i<(arrayDasar.length-1); i++){
                dataDasar.push({ "isi": arrayDasar[i] });
              }
                data.m = dataMenimbang;
              data.d = dataDasar; */
            }
            //console.log(templatedata);
            doc = new Docxtemplater(); //res.setHeader('Content-disposition', 'attachment; filename=SuratPendaftaranJamaah.docx');
            res.setHeader('Content-disposition', 'attachment; filename=' + templatedata['nama_report'] + '.pdf');
            res.setHeader('filename', templatedata['nama_report'] + '.pdf');
            res.setHeader('Access-Control-Expose-Headers', 'filename');

            /* var qrCodeImage= await getQrCode(data['url_qr']);*/
            base64Image = "";
            /* try{
              base64Image=qrCodeImage.split(';base64,').pop();
            }catch{
              base64Image=noImg.split(';base64,').pop();
            }  */
            fs.writeFile(path.join(__dirname, '../template/logo' + templatedata['nama_report'] + '.png'), base64Image, {
              encoding: 'base64'
            }, function (err) {
              //console.log(base64Logo);
              // generate report 
              var content = fs.readFileSync(path.resolve(__dirname, '../template/' + templatedata['nama_file']), 'binary');
              // console.log(content)
              var zip = new JSZip(content);
              var doc = new Docxtemplater();
              doc.loadZip(zip);
              //doc.attachModule(imageModule);
              //console.log(data);
              //data.image=path.resolve(__dirname, '../template/logo'+ templatedata['nama_report'] +'.png');
              doc.setData(data);
              try {
                // render the document (replace all occurences of {first_name} by John, {last_name} by Doe, ...)
                doc.render();
              } catch (error) {
                var e = {
                  message: error.message,
                  name: error.name,
                  stack: error.stack,
                  properties: error.properties
                };
                // The error thrown here contains additional information when logged with JSON.stringify (it contains a property object).
                throw error;
              }
              var buf = doc.getZip().generate({
                type: 'nodebuffer'
              });
              // buf is a nodejs buffer, you can either write it to a file or do anything else with it.
              fs.writeFileSync(path.resolve(__dirname, '../template/' + templatedata['nama_report'] + '.docx'), buf);
              var wordBuffer = fs.readFileSync(path.resolve(__dirname, '../template/' + templatedata['nama_report'] + '.docx'));
              // res.send(wordBuffer);
              toPdf(wordBuffer).then(function (pdfBuffer) {
                res.send(pdfBuffer);
                res.end();
                fs.unlinkSync(path.resolve(__dirname, '../template/' + templatedata['nama_report'] + '.docx'));
                //fs.unlinkSync(path.resolve(__dirname, '../template/logo'+ templatedata['nama_report'] +'.png'));
              }, function (err) {
                console.log(err);
              });
            });

            //return res.status(200).send({ 'RC': '00', 'message': message,data});
          case 30:
            _context9.next = 36;
            break;
          case 32:
            _context9.prev = 32;
            _context9.t0 = _context9["catch"](12);
            console.log(_context9.t0);
            return _context9.abrupt("return", res.status(200).send({
              'RC': '99'
            }));
          case 36:
          case "end":
            return _context9.stop();
        }
      }, _callee9, null, [[12, 32]]);
    }))();
  }
};
var _default = exports["default"] = DocX;