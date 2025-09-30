"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _bcryptNodejs = _interopRequireDefault(require("bcrypt-nodejs"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Helper = {
  /**
   * Hash Password Method
   * @param {string} password
   * @returns {string} returns hashed password
   */
  hashPassword: function hashPassword(password) {
    return _bcryptNodejs["default"].hashSync(password, _bcryptNodejs["default"].genSaltSync(8));
  },
  /**
   * comparePassword
   * @param {string} hashPassword
   * @param {string} password
   * @returns {Boolean} return True or False
   */
  comparePassword: function comparePassword(hashPassword, password) {
    return _bcryptNodejs["default"].compareSync(password, hashPassword);
  },
  /**
   * isValidEmail helper method
   * @param {string} email
   * @returns {Boolean} True or False
   */
  // isValidEmail(email) {
  //   return /\S+@\S+\.\S+/.test(email);
  // },
  /**
   * Gnerate Token
   * @param {string} id
   * @returns {string} token
   */
  generateToken: function generateToken(nip, unker, jabatan, nik) {
    var token = _jsonwebtoken["default"].sign({
      userId: nip,
      unkerId: unker,
      jabatanId: jabatan,
      nik: nik
    }, process.env.SECRET, {
      expiresIn: '7d'
    });
    return token;
  }
};
var _default = exports["default"] = Helper;