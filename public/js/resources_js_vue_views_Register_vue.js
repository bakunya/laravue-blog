"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_vue_views_Register_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/vue/views/Register.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/vue/views/Register.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vue_reactivity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vue/reactivity */ "./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js");
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vue/runtime-core */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm-bundler.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setup: function setup() {
    var router = (0,vue_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    var store = (0,vuex__WEBPACK_IMPORTED_MODULE_2__.useStore)();
    var email = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_3__.ref)('');
    var password = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_3__.ref)('');
    var username = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_3__.ref)('');
    var loading = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_3__.ref)(false);
    var errors = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_3__.reactive)({
      errorMessage: '',
      errorEmail: '',
      errorPassword: '',
      errorUsername: ''
    });
    var isAuthenticated = computed(function () {
      return store.getters['user/isAuthenticated'];
    });

    var fetchRegister = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var rawRes, res, _res$message, _res$errors$email$joi, _res$errors, _res$errors$email, _res$errors$password$, _res$errors2, _res$errors2$password, _res$errors$username$, _res$errors3, _res$errors3$username, _er$message;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                loading.value = true;
                _context.prev = 1;
                _context.next = 4;
                return fetch("/api/auth/register", {
                  method: "POST",
                  headers: {
                    'Content-Type': "application/json",
                    'Accept': "application/json"
                  },
                  body: JSON.stringify({
                    email: email.value,
                    password: password.value,
                    username: username.value
                  })
                });

              case 4:
                rawRes = _context.sent;
                _context.next = 7;
                return rawRes.json();

              case 7:
                res = _context.sent;

                if (rawRes.ok) {
                  _context.next = 14;
                  break;
                }

                errors.errorMessage = (_res$message = res === null || res === void 0 ? void 0 : res.message) !== null && _res$message !== void 0 ? _res$message : '';
                errors.errorEmail = (_res$errors$email$joi = res === null || res === void 0 ? void 0 : (_res$errors = res.errors) === null || _res$errors === void 0 ? void 0 : (_res$errors$email = _res$errors.email) === null || _res$errors$email === void 0 ? void 0 : _res$errors$email.join(" ")) !== null && _res$errors$email$joi !== void 0 ? _res$errors$email$joi : '';
                errors.errorPassword = (_res$errors$password$ = res === null || res === void 0 ? void 0 : (_res$errors2 = res.errors) === null || _res$errors2 === void 0 ? void 0 : (_res$errors2$password = _res$errors2.password) === null || _res$errors2$password === void 0 ? void 0 : _res$errors2$password.join(" ")) !== null && _res$errors$password$ !== void 0 ? _res$errors$password$ : '';
                errors.errorUsername = (_res$errors$username$ = res === null || res === void 0 ? void 0 : (_res$errors3 = res.errors) === null || _res$errors3 === void 0 ? void 0 : (_res$errors3$username = _res$errors3.username) === null || _res$errors3$username === void 0 ? void 0 : _res$errors3$username.join(" ")) !== null && _res$errors$username$ !== void 0 ? _res$errors$username$ : '';
                return _context.abrupt("return");

              case 14:
                return _context.abrupt("return", store.dispatch('user/setUser', res));

              case 17:
                _context.prev = 17;
                _context.t0 = _context["catch"](1);
                errors.errorMessage = (_er$message = _context.t0.message) !== null && _er$message !== void 0 ? _er$message : '';

              case 20:
                _context.prev = 20;
                loading.value = false;
                return _context.finish(20);

              case 23:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 17, 20, 23]]);
      }));

      return function fetchRegister() {
        return _ref.apply(this, arguments);
      };
    }();

    var handleSubmit = function handleSubmit(e) {
      e.preventDefault();
      fetchRegister();
    };

    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_4__.onMounted)(function () {
      isAuthenticated && router.push({
        name: 'Home'
      });
    });
    return _objectSpread({
      email: email,
      loading: loading,
      password: password,
      username: username,
      handleSubmit: handleSubmit
    }, (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_3__.toRefs)(errors));
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/vue/views/Register.vue?vue&type=template&id=395fc56b":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/vue/views/Register.vue?vue&type=template&id=395fc56b ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "container row justify-content-center mx-auto"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
  "class": "display-6 mb-5"
}, "Register", -1
/* HOISTED */
);

var _hoisted_3 = {
  "class": "mb-3"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "username",
  "class": "form-label"
}, "Username", -1
/* HOISTED */
);

var _hoisted_5 = {
  key: 0,
  "class": "invalid-feedback"
};
var _hoisted_6 = {
  key: 1,
  id: "usernameHelp",
  "class": "form-text"
};
var _hoisted_7 = {
  "class": "mb-3"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "email",
  "class": "form-label"
}, "Email address", -1
/* HOISTED */
);

var _hoisted_9 = {
  key: 0,
  "class": "invalid-feedback"
};
var _hoisted_10 = {
  key: 1,
  id: "emailHelp",
  "class": "form-text"
};
var _hoisted_11 = {
  "class": "mb-3"
};

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "pass",
  "class": "form-label"
}, "Password", -1
/* HOISTED */
);

var _hoisted_13 = {
  key: 0,
  "class": "invalid-feedback"
};
var _hoisted_14 = {
  key: 1,
  id: "passwordHelp",
  "class": "form-text"
};
var _hoisted_15 = {
  key: 0,
  "class": "text-center text-danger mt-3"
};
var _hoisted_16 = ["disabled"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    "class": "mt-5 col-8",
    onSubmit: _cache[3] || (_cache[3] = function () {
      return $setup.handleSubmit && $setup.handleSubmit.apply($setup, arguments);
    })
  }, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-control", !!_ctx.errorUsername && 'is-invalid']),
    id: "username",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.username = $event;
    })
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.username]]), !!_ctx.errorUsername ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.errorUsername), 1
  /* TEXT */
  )) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_6, "Please input username in here."))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "email",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-control", !!_ctx.errorEmail && 'is-invalid']),
    id: "email",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $setup.email = $event;
    })
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.email]]), !!_ctx.errorEmail ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.errorEmail), 1
  /* TEXT */
  )) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_10, "Please input valid email in here."))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [_hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "password",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-control", !!_ctx.errorPassword && 'is-invalid']),
    id: "pass",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $setup.password = $event;
    })
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.password]]), !!_ctx.errorPassword ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.errorPassword), 1
  /* TEXT */
  )) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_14, "Please input your password in here."))]), !!_ctx.errorMessage ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.errorMessage), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn btn-primary ms-auto d-block",
    disabled: $setup.loading && true,
    type: "submit"
  }, "Register", 8
  /* PROPS */
  , _hoisted_16)], 32
  /* HYDRATE_EVENTS */
  )]);
}

/***/ }),

/***/ "./resources/js/vue/views/Register.vue":
/*!*********************************************!*\
  !*** ./resources/js/vue/views/Register.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Register_vue_vue_type_template_id_395fc56b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=395fc56b */ "./resources/js/vue/views/Register.vue?vue&type=template&id=395fc56b");
/* harmony import */ var _Register_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js */ "./resources/js/vue/views/Register.vue?vue&type=script&lang=js");



_Register_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"].render = _Register_vue_vue_type_template_id_395fc56b__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_Register_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"].__file = "resources/js/vue/views/Register.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Register_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./resources/js/vue/views/Register.vue?vue&type=script&lang=js":
/*!*********************************************************************!*\
  !*** ./resources/js/vue/views/Register.vue?vue&type=script&lang=js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Register_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Register_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Register.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/vue/views/Register.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/vue/views/Register.vue?vue&type=template&id=395fc56b":
/*!***************************************************************************!*\
  !*** ./resources/js/vue/views/Register.vue?vue&type=template&id=395fc56b ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Register_vue_vue_type_template_id_395fc56b__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Register_vue_vue_type_template_id_395fc56b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Register.vue?vue&type=template&id=395fc56b */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/vue/views/Register.vue?vue&type=template&id=395fc56b");


/***/ })

}]);