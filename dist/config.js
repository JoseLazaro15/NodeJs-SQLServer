"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _dotenv = require("dotenv");
// import dotenv
(0, _dotenv.config)(); // initialize dotenv
var _default = exports["default"] = {
  port: process.env.PORT || 3000,
  // port for the server}
  dbUser: process.env.DB_USER || '',
  dbPassword: process.env.DB_PASSWORD || '',
  dbServer: process.env.DB_SERVER || '',
  dbDatabase: process.env.DB_DATABASE || ''
};