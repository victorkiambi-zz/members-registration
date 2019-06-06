(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/TableList.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/views/TableList.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      headers: [{
        sortable: false,
        text: 'Name',
        value: 'name'
      }, {
        sortable: false,
        text: 'Country',
        value: 'country'
      }, {
        sortable: false,
        text: 'City',
        value: 'city'
      }, {
        sortable: false,
        text: 'Salary',
        value: 'salary',
        align: 'right'
      }],
      items: [{
        name: 'Dakota Rice',
        country: 'Niger',
        city: 'Oud-Tunrhout',
        salary: '$35,738'
      }, {
        name: 'Minerva Hooper',
        country: 'Curaçao',
        city: 'Sinaai-Waas',
        salary: '$23,738'
      }, {
        name: 'Sage Rodriguez',
        country: 'Netherlands',
        city: 'Overland Park',
        salary: '$56,142'
      }, {
        name: 'Philip Chanley',
        country: 'Korea, South',
        city: 'Gloucester',
        salary: '$38,735'
      }, {
        name: 'Doris Greene',
        country: 'Malawi',
        city: 'Feldkirchen in Kārnten',
        salary: '$63,542'
      }, {
        name: 'Mason Porter',
        country: 'Chile',
        city: 'Gloucester',
        salary: '$78,615'
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/TableList.vue?vue&type=template&id=5e582103&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/views/TableList.vue?vue&type=template&id=5e582103& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    { attrs: { "fill-height": "", fluid: "", "grid-list-xl": "" } },
    [
      _c(
        "v-layout",
        { attrs: { "justify-center": "", wrap: "" } },
        [
          _c(
            "v-flex",
            { attrs: { md12: "" } },
            [
              _c(
                "material-card",
                {
                  attrs: {
                    color: "green",
                    title: "Simple Table",
                    text: "Here is a subtitle for this table"
                  }
                },
                [
                  _c("v-data-table", {
                    attrs: {
                      headers: _vm.headers,
                      items: _vm.items,
                      "hide-actions": ""
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "headerCell",
                        fn: function(ref) {
                          var header = ref.header
                          return [
                            _c("span", {
                              staticClass:
                                "subheading font-weight-light text-success text--darken-3",
                              domProps: { textContent: _vm._s(header.text) }
                            })
                          ]
                        }
                      },
                      {
                        key: "items",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _c("td", [_vm._v(_vm._s(item.name))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(item.country))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(item.city))]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-xs-right" }, [
                              _vm._v(_vm._s(item.salary))
                            ])
                          ]
                        }
                      }
                    ])
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { md12: "" } },
            [
              _c(
                "material-card",
                {
                  attrs: {
                    color: "green",
                    flat: "",
                    "full-width": "",
                    title: "Table on Plain Background",
                    text: "Here is a subtitle for this table"
                  }
                },
                [
                  _c("v-data-table", {
                    attrs: {
                      headers: _vm.headers,
                      items: _vm.items.slice(0, 7),
                      "hide-actions": ""
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "headerCell",
                        fn: function(ref) {
                          var header = ref.header
                          return [
                            _c("span", {
                              staticClass:
                                "subheading font-weight-light text--darken-3",
                              domProps: { textContent: _vm._s(header.text) }
                            })
                          ]
                        }
                      },
                      {
                        key: "items",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _c("td", [_vm._v(_vm._s(item.name))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(item.country))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(item.city))]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-xs-right" }, [
                              _vm._v(_vm._s(item.salary))
                            ])
                          ]
                        }
                      }
                    ])
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/views/TableList.vue":
/*!***************************************!*\
  !*** ./resources/views/TableList.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TableList_vue_vue_type_template_id_5e582103___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TableList.vue?vue&type=template&id=5e582103& */ "./resources/views/TableList.vue?vue&type=template&id=5e582103&");
/* harmony import */ var _TableList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TableList.vue?vue&type=script&lang=js& */ "./resources/views/TableList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TableList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TableList_vue_vue_type_template_id_5e582103___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TableList_vue_vue_type_template_id_5e582103___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/views/TableList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/views/TableList.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./resources/views/TableList.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--4-0!../../node_modules/vue-loader/lib??vue-loader-options!./TableList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/TableList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/views/TableList.vue?vue&type=template&id=5e582103&":
/*!**********************************************************************!*\
  !*** ./resources/views/TableList.vue?vue&type=template&id=5e582103& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableList_vue_vue_type_template_id_5e582103___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./TableList.vue?vue&type=template&id=5e582103& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/TableList.vue?vue&type=template&id=5e582103&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableList_vue_vue_type_template_id_5e582103___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableList_vue_vue_type_template_id_5e582103___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);