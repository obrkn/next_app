webpackHotUpdate_N_E("pages/_app",{

/***/ "./lib/redux-store.js":
/*!****************************!*\
  !*** ./lib/redux-store.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../store */ \"./store.js\");\n\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/machoair/Desktop/react-test/next_app/lib/redux-store.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\nvar isServer = false;\nvar _NRS_ = '__NEXT_REDUX_STORE__';\n\nfunction getOrCreateStore(initialStore) {\n  if (isServer) {\n    return Object(_store__WEBPACK_IMPORTED_MODULE_10__[\"initStore\"])(initialStore);\n  }\n\n  if (!window[_NRS_]) {\n    window[_NRS_] = Object(_store__WEBPACK_IMPORTED_MODULE_10__[\"initStore\"])(initialState);\n  }\n\n  return window[_NRS_];\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (App) {\n  return /*#__PURE__*/function (_Component) {\n    Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(AppWithRedux, _Component);\n\n    var _super = _createSuper(AppWithRedux);\n\n    Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(AppWithRedux, null, [{\n      key: \"getInitialProps\",\n      value: function () {\n        var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(appContext) {\n          var reduxStore, appProps;\n          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n            while (1) {\n              switch (_context.prev = _context.next) {\n                case 0:\n                  reduxStore = getOrCreateStore();\n                  appContext.ctx.reduxStore = reduxStore;\n                  appProps = {};\n\n                  if (!(typeof App.getInitialProps === 'function')) {\n                    _context.next = 7;\n                    break;\n                  }\n\n                  _context.next = 6;\n                  return App.getInitialProps(appContext);\n\n                case 6:\n                  appProps = _context.sent;\n\n                case 7:\n                  return _context.abrupt(\"return\", _objectSpread(_objectSpread({}, appProps), {}, {\n                    initialReduxState: reduxStore.getState()\n                  }));\n\n                case 8:\n                case \"end\":\n                  return _context.stop();\n              }\n            }\n          }, _callee);\n        }));\n\n        function getInitialProps(_x) {\n          return _getInitialProps.apply(this, arguments);\n        }\n\n        return getInitialProps;\n      }()\n    }]);\n\n    function AppWithRedux(props) {\n      var _this;\n\n      Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, AppWithRedux);\n\n      _this = _super.call(this, props);\n      _this.reduxStore = getOrCreateStore(props.initialReduxState);\n      return _this;\n    }\n\n    Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(AppWithRedux, [{\n      key: \"render\",\n      value: function render() {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__[\"jsxDEV\"])(App, _objectSpread(_objectSpread({}, this.props), {}, {\n          reduxStore: this.reduxStore\n        }), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 14\n        }, this);\n      }\n    }]);\n\n    return AppWithRedux;\n  }(react__WEBPACK_IMPORTED_MODULE_9__[\"Component\"]);\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3JlZHV4LXN0b3JlLmpzP2JlNjMiXSwibmFtZXMiOlsiaXNTZXJ2ZXIiLCJfTlJTXyIsImdldE9yQ3JlYXRlU3RvcmUiLCJpbml0aWFsU3RvcmUiLCJpbml0U3RvcmUiLCJ3aW5kb3ciLCJpbml0aWFsU3RhdGUiLCJBcHAiLCJhcHBDb250ZXh0IiwicmVkdXhTdG9yZSIsImN0eCIsImFwcFByb3BzIiwiZ2V0SW5pdGlhbFByb3BzIiwiaW5pdGlhbFJlZHV4U3RhdGUiLCJnZXRTdGF0ZSIsInByb3BzIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLFFBQVEsUUFBZDtBQUNBLElBQU1DLEtBQUssR0FBRyxzQkFBZDs7QUFFQSxTQUFTQyxnQkFBVCxDQUEyQkMsWUFBM0IsRUFBd0M7QUFDdEMsTUFBSUgsUUFBSixFQUFhO0FBQ1gsV0FBT0kseURBQVMsQ0FBQ0QsWUFBRCxDQUFoQjtBQUNEOztBQUVELE1BQUksQ0FBQ0UsTUFBTSxDQUFDSixLQUFELENBQVgsRUFBbUI7QUFDakJJLFVBQU0sQ0FBQ0osS0FBRCxDQUFOLEdBQWdCRyx5REFBUyxDQUFDRSxZQUFELENBQXpCO0FBQ0Q7O0FBQ0QsU0FBT0QsTUFBTSxDQUFDSixLQUFELENBQWI7QUFDRDs7QUFFYyx5RUFBQ00sR0FBRCxFQUFTO0FBQ3RCO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUEsaU9BRWdDQyxVQUZoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHVUMsNEJBSFYsR0FHdUJQLGdCQUFnQixFQUh2QztBQUlJTSw0QkFBVSxDQUFDRSxHQUFYLENBQWVELFVBQWYsR0FBNEJBLFVBQTVCO0FBQ0lFLDBCQUxSLEdBS21CLEVBTG5COztBQUFBLHdCQU1RLE9BQU9KLEdBQUcsQ0FBQ0ssZUFBWCxLQUErQixVQU52QztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHlCQU91QkwsR0FBRyxDQUFDSyxlQUFKLENBQW9CSixVQUFwQixDQVB2Qjs7QUFBQTtBQU9NRywwQkFQTjs7QUFBQTtBQUFBLG1GQVVTQSxRQVZUO0FBV01FLHFDQUFpQixFQUFFSixVQUFVLENBQUNLLFFBQVg7QUFYekI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFlRSwwQkFBYUMsS0FBYixFQUFvQjtBQUFBOztBQUFBOztBQUNsQixnQ0FBTUEsS0FBTjtBQUNBLFlBQUtOLFVBQUwsR0FBa0JQLGdCQUFnQixDQUFDYSxLQUFLLENBQUNGLGlCQUFQLENBQWxDO0FBRmtCO0FBR25COztBQWxCSDtBQUFBO0FBQUEsK0JBb0JXO0FBQ1AsNEJBQU8scUVBQUMsR0FBRCxrQ0FBUyxLQUFLRSxLQUFkO0FBQXFCLG9CQUFVLEVBQUUsS0FBS047QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBUDtBQUNEO0FBdEJIOztBQUFBO0FBQUEsSUFBa0NPLCtDQUFsQztBQXdCRCxDQXpCRCIsImZpbGUiOiIuL2xpYi9yZWR1eC1zdG9yZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGluaXRTdG9yZSB9IGZyb20gJy4uL3N0b3JlJztcblxuY29uc3QgaXNTZXJ2ZXIgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJ1xuY29uc3QgX05SU18gPSAnX19ORVhUX1JFRFVYX1NUT1JFX18nXG5cbmZ1bmN0aW9uIGdldE9yQ3JlYXRlU3RvcmUgKGluaXRpYWxTdG9yZSl7XG4gIGlmIChpc1NlcnZlcil7XG4gICAgcmV0dXJuIGluaXRTdG9yZShpbml0aWFsU3RvcmUpXG4gIH1cblxuICBpZiAoIXdpbmRvd1tfTlJTX10pe1xuICAgIHdpbmRvd1tfTlJTX10gPSBpbml0U3RvcmUoaW5pdGlhbFN0YXRlKVxuICB9XG4gIHJldHVybiB3aW5kb3dbX05SU19dXG59XG5cbmV4cG9ydCBkZWZhdWx0IChBcHApID0+IHtcbiAgcmV0dXJuIGNsYXNzIEFwcFdpdGhSZWR1eCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyAoYXBwQ29udGV4dCkge1xuICAgICAgY29uc3QgcmVkdXhTdG9yZSA9IGdldE9yQ3JlYXRlU3RvcmUoKVxuICAgICAgYXBwQ29udGV4dC5jdHgucmVkdXhTdG9yZSA9IHJlZHV4U3RvcmVcbiAgICAgIGxldCBhcHBQcm9wcyA9IHt9XG4gICAgICBpZiAodHlwZW9mIEFwcC5nZXRJbml0aWFsUHJvcHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgYXBwUHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGFwcENvbnRleHQpXG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5hcHBQcm9wcyxcbiAgICAgICAgaW5pdGlhbFJlZHV4U3RhdGU6IHJlZHV4U3RvcmUuZ2V0U3RhdGUoKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpXG4gICAgICB0aGlzLnJlZHV4U3RvcmUgPSBnZXRPckNyZWF0ZVN0b3JlKHByb3BzLmluaXRpYWxSZWR1eFN0YXRlKVxuICAgIH1cblxuICAgIHJlbmRlciAoKXtcbiAgICAgIHJldHVybiA8QXBwIHsuLi50aGlzLnByb3BzfSByZWR1eFN0b3JlPXt0aGlzLnJlZHV4U3RvcmV9IC8+XG4gICAgfVxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/redux-store.js\n");

/***/ })

})