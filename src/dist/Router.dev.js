"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vueRouter = require("vue-router");

var _About = _interopRequireDefault(require("./components/About"));

var _Books = _interopRequireDefault(require("./components/Books.vue"));
var _comput = _interopRequireDefault(require("./components/comput.vue"));


function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Router = (0, _vueRouter.createRouter)({
  history: (0, _vueRouter.createWebHistory)(),
  routes: [{
    path: "/",
    component: _Books["default"]
  }, {
    path: "/about",
    component: _About["default"]
  }, {
    path: "/comput",
    component: _computed["default"]
  },
]
});
var _default = Router;
exports["default"] = _default;