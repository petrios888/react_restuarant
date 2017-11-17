webpackJsonp([0],{

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Header() {

  return _react2.default.createElement(
    'header',
    null,
    _react2.default.createElement(
      'div',
      { className: 'logo' },
      ' Logo '
    ),
    _react2.default.createElement(
      'nav',
      null,
      _react2.default.createElement(
        'a',
        { href: '#' },
        'Home '
      ),
      _react2.default.createElement(
        'a',
        { href: '#' },
        'Party Platters '
      ),
      _react2.default.createElement(
        'a',
        { href: '#' },
        'Locations  '
      ),
      _react2.default.createElement(
        'a',
        { href: '#' },
        'Rewards  '
      ),
      _react2.default.createElement(
        'a',
        { href: '#' },
        'Reservations  '
      ),
      _react2.default.createElement(
        'a',
        { href: '#', className: 'register-btn' },
        ' Register '
      )
    )
  );
}

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Topimg;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Topimg() {
  return _react2.default.createElement(
    "section",
    { className: "Topimg" },
    _react2.default.createElement(
      "div",
      { className: "title" },
      _react2.default.createElement(
        "h5",
        null,
        "Welcome"
      ),
      _react2.default.createElement(
        "h1",
        null,
        "Prime Steak"
      ),
      _react2.default.createElement(
        "div",
        { className: "contact-info" },
        _react2.default.createElement(
          "div",
          { className: "booking" },
          "  Book Table Directly"
        ),
        _react2.default.createElement(
          "h2",
          null,
          "888-888-8888"
        ),
        _react2.default.createElement(
          "div",
          { className: "hours" },
          "Opening Hours ",
          _react2.default.createElement(
            "strong",
            null,
            " Mon- Fir"
          ),
          " 9am -9pm"
        )
      )
    )
  );
}

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(7);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = __webpack_require__(29);

var _Header2 = _interopRequireDefault(_Header);

var _Topimg = __webpack_require__(30);

var _Topimg2 = _interopRequireDefault(_Topimg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Layout = function (_Component) {
  _inherits(Layout, _Component);

  function Layout() {
    _classCallCheck(this, Layout);

    var _this = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this));

    _this.state = {
      name: 'Cephas'
    };
    return _this;
  }

  _createClass(Layout, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
          'section',
          null,
          _react2.default.createElement(_Topimg2.default, null)
        )
      );
    }
  }]);

  return Layout;
}(_react.Component);

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(Layout, null), app);

/***/ })

},[32]);