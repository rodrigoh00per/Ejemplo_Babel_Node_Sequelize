"use strict";

var _app = _interopRequireDefault(require("./app"));

require("@babel/polyfill");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function main() {
  await _app.default.listen();
  console.log("servidor levantado en el puerto 3000");
}

main();