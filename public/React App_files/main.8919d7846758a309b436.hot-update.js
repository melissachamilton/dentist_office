webpackHotUpdate("main",{

/***/ "./src/components/SingleUser.js":
/*!**************************************!*\
  !*** ./src/components/SingleUser.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SingleUser; });
/* harmony import */ var _Users_melissahamilton_Desktop_projects_unit_04_dentist_office_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_melissahamilton_Desktop_projects_unit_04_dentist_office_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_melissahamilton_Desktop_projects_unit_04_dentist_office_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_melissahamilton_Desktop_projects_unit_04_dentist_office_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_melissahamilton_Desktop_projects_unit_04_dentist_office_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_melissahamilton_Desktop_projects_unit_04_dentist_office_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_melissahamilton_Desktop_projects_unit_04_dentist_office_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_melissahamilton_Desktop_projects_unit_04_dentist_office_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_melissahamilton_Desktop_projects_unit_04_dentist_office_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);







var _jsxFileName = "/Users/melissahamilton/Desktop/projects/unit_04/dentist_office/client/src/components/SingleUser.js";



var SingleUser =
/*#__PURE__*/
function (_Component) {
  Object(_Users_melissahamilton_Desktop_projects_unit_04_dentist_office_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(SingleUser, _Component);

  function SingleUser() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_melissahamilton_Desktop_projects_unit_04_dentist_office_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, SingleUser);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_melissahamilton_Desktop_projects_unit_04_dentist_office_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_Users_melissahamilton_Desktop_projects_unit_04_dentist_office_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(SingleUser)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      user: {},
      appointments: []
    };

    _this.fetchUsers =
    /*#__PURE__*/
    function () {
      var _ref = Object(_Users_melissahamilton_Desktop_projects_unit_04_dentist_office_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _Users_melissahamilton_Desktop_projects_unit_04_dentist_office_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(id) {
        var response;
        return _Users_melissahamilton_Desktop_projects_unit_04_dentist_office_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_8___default.a.get("/api/users/".concat(id));

              case 2:
                response = _context.sent;
                console.log("This is the response");
                return _context.abrupt("return", response.data);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    _this.fetchAppointments =
    /*#__PURE__*/
    function () {
      var _ref2 = Object(_Users_melissahamilton_Desktop_projects_unit_04_dentist_office_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _Users_melissahamilton_Desktop_projects_unit_04_dentist_office_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(id) {
        var response;
        return _Users_melissahamilton_Desktop_projects_unit_04_dentist_office_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_8___default.a.get("/api/users/".concat(id, "/appointments"));

              case 2:
                response = _context2.sent;
                return _context2.abrupt("return", response.data);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }();

    return _this;
  }

  Object(_Users_melissahamilton_Desktop_projects_unit_04_dentist_office_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(SingleUser, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_Users_melissahamilton_Desktop_projects_unit_04_dentist_office_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _Users_melissahamilton_Desktop_projects_unit_04_dentist_office_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var userId, user, appointments;
        return _Users_melissahamilton_Desktop_projects_unit_04_dentist_office_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                userId = this.props.match.params.id;
                _context3.next = 3;
                return this.fetchUsers(userId);

              case 3:
                user = _context3.sent;
                _context3.next = 6;
                return this.fetchAppointments(userId);

              case 6:
                appointments = _context3.sent;
                this.setState({
                  user: user,
                  appointments: appointments
                });

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      // const user = this.state.user
      // const appointments = this.state.user.map((appointments, i) => {
      //   return (
      //     <div key={i}>
      //       <div>{appointments.date}</div>
      //     </div>
      //   )
      // })
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      });
    }
  }]);

  return SingleUser;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ })

})
//# sourceMappingURL=main.8919d7846758a309b436.hot-update.js.map