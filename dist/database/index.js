"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  queris: true
};
Object.defineProperty(exports, "queris", {
  enumerable: true,
  get: function get() {
    return _querys.queris;
  }
});
var _querys = require("./querys");
var _connection = require("./connection");
Object.keys(_connection).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _connection[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _connection[key];
    }
  });
});