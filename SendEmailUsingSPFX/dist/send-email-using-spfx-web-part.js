define("3ba51b58-be7b-45ea-a974-7d01e8282357_0.0.1", ["@microsoft/sp-property-pane","@microsoft/sp-core-library","@microsoft/sp-webpart-base","react","SendEmailUsingSpfxWebPartStrings","react-dom"], function(__WEBPACK_EXTERNAL_MODULE__26ea__, __WEBPACK_EXTERNAL_MODULE_UWqr__, __WEBPACK_EXTERNAL_MODULE_br4S__, __WEBPACK_EXTERNAL_MODULE_cDcd__, __WEBPACK_EXTERNAL_MODULE_fQVg__, __WEBPACK_EXTERNAL_MODULE_faye__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "k/oi");
/******/ })
/************************************************************************/
/******/ ({

/***/ "26ea":
/*!**********************************************!*\
  !*** external "@microsoft/sp-property-pane" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__26ea__;

/***/ }),

/***/ "IQr+":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??postcss!./lib/webparts/sendEmailUsingSpfx/components/SendEmailUsingSpfx.module.css ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "JPst")(false);
// Module
exports.push([module.i, ".sendEmailUsingSpfx_c2b8ac2e .container_c2b8ac2e{max-width:1000px;margin:0 auto;-webkit-box-shadow:0 2px 4px 0 rgba(0,0,0,.753),0 30px 70px 0 rgba(0,0,1,.1);box-shadow:0 2px 4px 0 rgba(0,0,0,.753),0 30px 70px 0 rgba(0,0,1,.1)}.sendEmailUsingSpfx_c2b8ac2e .row_c2b8ac2e{margin:0 -8px;-webkit-box-sizing:border-box;box-sizing:border-box;color:#fff;background-color:\"[theme: infoBackground, default: #e81123]\";padding:20px}.sendEmailUsingSpfx_c2b8ac2e .row_c2b8ac2e:after,.sendEmailUsingSpfx_c2b8ac2e .row_c2b8ac2e:before{display:table;content:\"\";line-height:0}.sendEmailUsingSpfx_c2b8ac2e .row_c2b8ac2e:after{clear:both}.sendEmailUsingSpfx_c2b8ac2e .inputFile_c2b8ac2e,.sendEmailUsingSpfx_c2b8ac2e .inputFileWraper_c2b8ac2e,.sendEmailUsingSpfx_c2b8ac2e .message_c2b8ac2e,.sendEmailUsingSpfx_c2b8ac2e .subject_c2b8ac2e,.sendEmailUsingSpfx_c2b8ac2e .uploadedFile1_c2b8ac2e,.sendEmailUsingSpfx_c2b8ac2e .uploadedFile2_c2b8ac2e,.sendEmailUsingSpfx_c2b8ac2e .uploadedFile_c2b8ac2e{font-size:17px;font-weight:300;color:#fff}.sendEmailUsingSpfx_c2b8ac2e .column_c2b8ac2e{position:relative;min-height:1px;padding-left:8px;padding-right:8px;-webkit-box-sizing:border-box;box-sizing:border-box}[dir=ltr] .sendEmailUsingSpfx_c2b8ac2e .column_c2b8ac2e{float:left}[dir=rtl] .sendEmailUsingSpfx_c2b8ac2e .column_c2b8ac2e{float:right}.sendEmailUsingSpfx_c2b8ac2e .column_c2b8ac2e .ms-Grid_c2b8ac2e{padding:0}@media (min-width:640px){.sendEmailUsingSpfx_c2b8ac2e .column_c2b8ac2e{width:83.33333333333334%}}@media (min-width:1024px){.sendEmailUsingSpfx_c2b8ac2e .column_c2b8ac2e{width:66.66666666666666%}}@media (min-width:1024px){[dir=ltr] .sendEmailUsingSpfx_c2b8ac2e .column_c2b8ac2e{left:16.66667%}[dir=rtl] .sendEmailUsingSpfx_c2b8ac2e .column_c2b8ac2e{right:16.66667%}}@media (min-width:640px){[dir=ltr] .sendEmailUsingSpfx_c2b8ac2e .column_c2b8ac2e{left:8.33333%}[dir=rtl] .sendEmailUsingSpfx_c2b8ac2e .column_c2b8ac2e{right:8.33333%}}.sendEmailUsingSpfx_c2b8ac2e .title_c2b8ac2e{font-size:21px;font-weight:100;color:#fff}.sendEmailUsingSpfx_c2b8ac2e .description_c2b8ac2e,.sendEmailUsingSpfx_c2b8ac2e .subTitle_c2b8ac2e{font-size:17px;font-weight:300;color:#fff}.sendEmailUsingSpfx_c2b8ac2e .button_c2b8ac2e{text-decoration:none;height:32px;min-width:80px;background-color:#0078d4;border-color:#0078d4;color:#fff;outline:transparent;position:relative;font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;font-weight:400;border-width:0;text-align:center;cursor:pointer;display:inline-block;padding:0 16px}.sendEmailUsingSpfx_c2b8ac2e .button_c2b8ac2e .label_c2b8ac2e{font-weight:600;font-size:14px;height:32px;line-height:32px;margin:0 4px;vertical-align:top;display:inline-block}", ""]);



/***/ }),

/***/ "JPst":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "TFY9":
/*!**************************************************************************************!*\
  !*** ./lib/webparts/sendEmailUsingSpfx/components/SendEmailUsingSpfx.module.scss.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./SendEmailUsingSpfx.module.css */ "mNYy");
var styles = {
    sendEmailUsingSpfx: 'sendEmailUsingSpfx_c2b8ac2e',
    container: 'container_c2b8ac2e',
    row: 'row_c2b8ac2e',
    title: 'title_c2b8ac2e',
    subject: 'subject_c2b8ac2e',
    message: 'message_c2b8ac2e',
    inputFileWraper: 'inputFileWraper_c2b8ac2e',
    inputFile: 'inputFile_c2b8ac2e',
    uploadedFile: 'uploadedFile_c2b8ac2e',
    uploadedFile1: 'uploadedFile1_c2b8ac2e',
    uploadedFile2: 'uploadedFile2_c2b8ac2e',
    column: 'column_c2b8ac2e',
    'ms-Grid': 'ms-Grid_c2b8ac2e',
    subTitle: 'subTitle_c2b8ac2e',
    description: 'description_c2b8ac2e',
    button: 'button_c2b8ac2e',
    label: 'label_c2b8ac2e'
};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "UWqr":
/*!*********************************************!*\
  !*** external "@microsoft/sp-core-library" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_UWqr__;

/***/ }),

/***/ "br4S":
/*!*********************************************!*\
  !*** external "@microsoft/sp-webpart-base" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_br4S__;

/***/ }),

/***/ "cDcd":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_cDcd__;

/***/ }),

/***/ "fQVg":
/*!***************************************************!*\
  !*** external "SendEmailUsingSpfxWebPartStrings" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_fQVg__;

/***/ }),

/***/ "faye":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_faye__;

/***/ }),

/***/ "hfce":
/*!**************************************************************************!*\
  !*** ./lib/webparts/sendEmailUsingSpfx/components/SendEmailUsingSpfx.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SendEmailUsingSpfx_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SendEmailUsingSpfx.module.scss */ "TFY9");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var SendEmailUsingSpfx = /** @class */ (function (_super) {
    __extends(SendEmailUsingSpfx, _super);
    function SendEmailUsingSpfx(props) {
        var _this = _super.call(this, props) || this;
        _this.showUploadedfiles = function () {
            var files = [];
            if (_this.state.files != null) {
                for (var i = 0; i < _this.state.files.length; i++) {
                    files.push(react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { key: i, className: _SendEmailUsingSpfx_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].uploadedFile },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: _SendEmailUsingSpfx_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].uploadedFile1 }, _this.state.files[i].name),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: _SendEmailUsingSpfx_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].uploadedFile2 }, _this.formatBytes(_this.state.files[i].size))));
                }
            }
            return files;
        };
        _this.reader = new FileReader();
        _this.state = {
            email: "",
            subject: "",
            message: "",
            files: null,
            blobs: [],
        };
        _this.showUploadedfiles = _this.showUploadedfiles.bind(_this);
        return _this;
    }
    SendEmailUsingSpfx.prototype.render = function () {
        var _this = this;
        console.log(this.state);
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _SendEmailUsingSpfx_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].sendEmailUsingSpfx },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _SendEmailUsingSpfx_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].container },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _SendEmailUsingSpfx_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].row },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: _SendEmailUsingSpfx_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].title }, "Send Email using Graph API In SharePoint"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { className: _SendEmailUsingSpfx_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].subject, type: "text", onChange: this.emailHandler.bind(this), placeholder: "To:", value: this.state.email, title: "Please enter email address" }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { className: _SendEmailUsingSpfx_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].subject, type: "text", onChange: this.subjectHandler.bind(this), placeholder: "Subject", value: this.state.subject, title: "Subject" }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("textarea", { className: _SendEmailUsingSpfx_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].message, rows: 6, onChange: this.messageHandler.bind(this), placeholder: "Message", value: this.state.message, title: "Message" }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _SendEmailUsingSpfx_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].inputFileWraper },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { className: _SendEmailUsingSpfx_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].inputFile, type: "file", name: "filename", multiple: true, onChange: function (file) { _this.uploadHandler(file); }, title: "Drag & drop files here" })),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, this.showUploadedfiles()),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: _SendEmailUsingSpfx_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].button, onClick: function () { _this.sendMail(); } }, "Send")))));
    };
    SendEmailUsingSpfx.prototype.emailHandler = function (e) {
        this.setState({ email: e.target.value });
    };
    SendEmailUsingSpfx.prototype.subjectHandler = function (e) {
        this.setState({ subject: e.target.value });
    };
    SendEmailUsingSpfx.prototype.messageHandler = function (e) {
        this.setState({ message: e.target.value });
    };
    SendEmailUsingSpfx.prototype.formatBytes = function (bytes, decimals) {
        if (decimals === void 0) { decimals = 2; }
        if (bytes == 0)
            return '0 Bytes';
        var k = 1024, dm = decimals <= 0 ? 0 : decimals || 2, sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'], i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    };
    SendEmailUsingSpfx.prototype.uploadHandler = function (e) {
        this.setState({ files: e.target.files });
        var files = e.target.files;
        for (var i = 0; i < files.length; i++) {
            this.attachFile(files[i]);
        }
    };
    SendEmailUsingSpfx.prototype.attachFile = function (file) {
        var _this = this;
        this.setState({ blobs: [] });
        return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () {
                resolve(reader.result);
                var blobs = _this.state.blobs.slice();
                var bytes = reader.result.toString().substring(reader.result.toString().indexOf(",") + 1);
                blobs.push(bytes);
                _this.setState({ blobs: blobs });
            };
        });
    };
    SendEmailUsingSpfx.prototype.sendMail = function () {
        var _this = this;
        var mail = {
            message: {
                subject: this.state.subject,
                body: {
                    contentType: "Text",
                    content: this.state.message
                },
                toRecipients: [
                    {
                        emailAddress: {
                            address: this.state.email
                        }
                    }
                ],
                attachments: []
            }
        };
        if (this.state.files != null) {
            for (var i = 0; i < this.state.files.length; i++) {
                mail.message.attachments.push({
                    "@odata.type": "#microsoft.graph.fileAttachment",
                    "name": this.state.files[i].name,
                    "contentBytes": this.state.blobs[i],
                    "contentType": this.state.files[i].type
                });
            }
        }
        this.props.graph.getClient().then(function (client) {
            client.api('me/sendMail')
                .post(mail)
                .then(function (response) {
                _this.setState({
                    email: "",
                    subject: "",
                    message: "",
                    files: null,
                    blobs: [],
                });
            }).catch(function (ex) {
                console.log(ex);
                alert("Something went wrong! Please try again later.");
            });
        });
    };
    return SendEmailUsingSpfx;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (SendEmailUsingSpfx);


/***/ }),

/***/ "k/oi":
/*!**********************************************************************!*\
  !*** ./lib/webparts/sendEmailUsingSpfx/SendEmailUsingSpfxWebPart.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "faye");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-property-pane */ "26ea");
/* harmony import */ var _microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/sp-webpart-base */ "br4S");
/* harmony import */ var _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var SendEmailUsingSpfxWebPartStrings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! SendEmailUsingSpfxWebPartStrings */ "fQVg");
/* harmony import */ var SendEmailUsingSpfxWebPartStrings__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(SendEmailUsingSpfxWebPartStrings__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_SendEmailUsingSpfx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/SendEmailUsingSpfx */ "hfce");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();







var SendEmailUsingSpfxWebPart = /** @class */ (function (_super) {
    __extends(SendEmailUsingSpfxWebPart, _super);
    function SendEmailUsingSpfxWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SendEmailUsingSpfxWebPart.prototype.render = function () {
        var element = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_SendEmailUsingSpfx__WEBPACK_IMPORTED_MODULE_6__["default"], {
            userEmail: this.context.pageContext.user.email,
            graph: this.context.msGraphClientFactory
        });
        react_dom__WEBPACK_IMPORTED_MODULE_1__["render"](element, this.domElement);
    };
    SendEmailUsingSpfxWebPart.prototype.onDispose = function () {
        react_dom__WEBPACK_IMPORTED_MODULE_1__["unmountComponentAtNode"](this.domElement);
    };
    Object.defineProperty(SendEmailUsingSpfxWebPart.prototype, "dataVersion", {
        get: function () {
            return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Version"].parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    SendEmailUsingSpfxWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: SendEmailUsingSpfxWebPartStrings__WEBPACK_IMPORTED_MODULE_5__["PropertyPaneDescription"]
                    },
                    groups: [
                        {
                            groupName: SendEmailUsingSpfxWebPartStrings__WEBPACK_IMPORTED_MODULE_5__["BasicGroupName"],
                            groupFields: [
                                Object(_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3__["PropertyPaneTextField"])('description', {
                                    label: SendEmailUsingSpfxWebPartStrings__WEBPACK_IMPORTED_MODULE_5__["DescriptionFieldLabel"]
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return SendEmailUsingSpfxWebPart;
}(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_4__["BaseClientSideWebPart"]));
/* harmony default export */ __webpack_exports__["default"] = (SendEmailUsingSpfxWebPart);


/***/ }),

/***/ "mNYy":
/*!**********************************************************************************!*\
  !*** ./lib/webparts/sendEmailUsingSpfx/components/SendEmailUsingSpfx.module.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src??postcss!./SendEmailUsingSpfx.module.css */ "IQr+");
var loader = __webpack_require__(/*! ./node_modules/@microsoft/loader-load-themed-styles/node_modules/@microsoft/load-themed-styles/lib/index.js */ "ruv1");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "ruv1":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/@microsoft/loader-load-themed-styles/node_modules/@microsoft/load-themed-styles/lib/index.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
/**
 * An IThemingInstruction can specify a rawString to be preserved or a theme slot and a default value
 * to use if that slot is not specified by the theme.
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
// Store the theming state in __themeState__ global scope for reuse in the case of duplicate
// load-themed-styles hosted on the page.
var _root = (typeof window === 'undefined') ? global : window; // tslint:disable-line:no-any
// Nonce string to inject into script tag if one provided. This is used in CSP (Content Security Policy).
var _styleNonce = _root && _root.CSPSettings && _root.CSPSettings.nonce;
var _themeState = initializeThemeState();
/**
 * Matches theming tokens. For example, "[theme: themeSlotName, default: #FFF]" (including the quotes).
 */
// tslint:disable-next-line:max-line-length
var _themeTokenRegex = /[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g;
var now = function () { return (typeof performance !== 'undefined' && !!performance.now) ? performance.now() : Date.now(); };
function measure(func) {
    var start = now();
    func();
    var end = now();
    _themeState.perf.duration += end - start;
}
/**
 * initialize global state object
 */
function initializeThemeState() {
    var state = _root.__themeState__ || {
        theme: undefined,
        lastStyleElement: undefined,
        registeredStyles: []
    };
    if (!state.runState) {
        state = __assign({}, (state), { perf: {
                count: 0,
                duration: 0
            }, runState: {
                flushTimer: 0,
                mode: 0 /* sync */,
                buffer: []
            } });
    }
    if (!state.registeredThemableStyles) {
        state = __assign({}, (state), { registeredThemableStyles: [] });
    }
    _root.__themeState__ = state;
    return state;
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load
 * event is fired.
 * @param {string | ThemableArray} styles Themable style text to register.
 * @param {boolean} loadAsync When true, always load styles in async mode, irrespective of current sync mode.
 */
function loadStyles(styles, loadAsync) {
    if (loadAsync === void 0) { loadAsync = false; }
    measure(function () {
        var styleParts = Array.isArray(styles) ? styles : splitStyles(styles);
        var _a = _themeState.runState, mode = _a.mode, buffer = _a.buffer, flushTimer = _a.flushTimer;
        if (loadAsync || mode === 1 /* async */) {
            buffer.push(styleParts);
            if (!flushTimer) {
                _themeState.runState.flushTimer = asyncLoadStyles();
            }
        }
        else {
            applyThemableStyles(styleParts);
        }
    });
}
exports.loadStyles = loadStyles;
/**
 * Allows for customizable loadStyles logic. e.g. for server side rendering application
 * @param {(processedStyles: string, rawStyles?: string | ThemableArray) => void}
 * a loadStyles callback that gets called when styles are loaded or reloaded
 */
function configureLoadStyles(loadStylesFn) {
    _themeState.loadStyles = loadStylesFn;
}
exports.configureLoadStyles = configureLoadStyles;
/**
 * Configure run mode of load-themable-styles
 * @param mode load-themable-styles run mode, async or sync
 */
function configureRunMode(mode) {
    _themeState.runState.mode = mode;
}
exports.configureRunMode = configureRunMode;
/**
 * external code can call flush to synchronously force processing of currently buffered styles
 */
function flush() {
    measure(function () {
        var styleArrays = _themeState.runState.buffer.slice();
        _themeState.runState.buffer = [];
        var mergedStyleArray = [].concat.apply([], styleArrays);
        if (mergedStyleArray.length > 0) {
            applyThemableStyles(mergedStyleArray);
        }
    });
}
exports.flush = flush;
/**
 * register async loadStyles
 */
function asyncLoadStyles() {
    return setTimeout(function () {
        _themeState.runState.flushTimer = 0;
        flush();
    }, 0);
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load event
 * is fired.
 * @param {string} styleText Style to register.
 * @param {IStyleRecord} styleRecord Existing style record to re-apply.
 */
function applyThemableStyles(stylesArray, styleRecord) {
    if (_themeState.loadStyles) {
        _themeState.loadStyles(resolveThemableArray(stylesArray).styleString, stylesArray);
    }
    else {
        registerStyles(stylesArray);
    }
}
/**
 * Registers a set theme tokens to find and replace. If styles were already registered, they will be
 * replaced.
 * @param {theme} theme JSON object of theme tokens to values.
 */
function loadTheme(theme) {
    _themeState.theme = theme;
    // reload styles.
    reloadStyles();
}
exports.loadTheme = loadTheme;
/**
 * Clear already registered style elements and style records in theme_State object
 * @param option - specify which group of registered styles should be cleared.
 * Default to be both themable and non-themable styles will be cleared
 */
function clearStyles(option) {
    if (option === void 0) { option = 3 /* all */; }
    if (option === 3 /* all */ || option === 2 /* onlyNonThemable */) {
        clearStylesInternal(_themeState.registeredStyles);
        _themeState.registeredStyles = [];
    }
    if (option === 3 /* all */ || option === 1 /* onlyThemable */) {
        clearStylesInternal(_themeState.registeredThemableStyles);
        _themeState.registeredThemableStyles = [];
    }
}
exports.clearStyles = clearStyles;
function clearStylesInternal(records) {
    records.forEach(function (styleRecord) {
        var styleElement = styleRecord && styleRecord.styleElement;
        if (styleElement && styleElement.parentElement) {
            styleElement.parentElement.removeChild(styleElement);
        }
    });
}
/**
 * Reloads styles.
 */
function reloadStyles() {
    if (_themeState.theme) {
        var themableStyles = [];
        for (var _i = 0, _a = _themeState.registeredThemableStyles; _i < _a.length; _i++) {
            var styleRecord = _a[_i];
            themableStyles.push(styleRecord.themableStyle);
        }
        if (themableStyles.length > 0) {
            clearStyles(1 /* onlyThemable */);
            applyThemableStyles([].concat.apply([], themableStyles));
        }
    }
}
/**
 * Find theme tokens and replaces them with provided theme values.
 * @param {string} styles Tokenized styles to fix.
 */
function detokenize(styles) {
    if (styles) {
        styles = resolveThemableArray(splitStyles(styles)).styleString;
    }
    return styles;
}
exports.detokenize = detokenize;
/**
 * Resolves ThemingInstruction objects in an array and joins the result into a string.
 * @param {ThemableArray} splitStyleArray ThemableArray to resolve and join.
 */
function resolveThemableArray(splitStyleArray) {
    var theme = _themeState.theme;
    var themable = false;
    // Resolve the array of theming instructions to an array of strings.
    // Then join the array to produce the final CSS string.
    var resolvedArray = (splitStyleArray || []).map(function (currentValue) {
        var themeSlot = currentValue.theme;
        if (themeSlot) {
            themable = true;
            // A theming annotation. Resolve it.
            var themedValue = theme ? theme[themeSlot] : undefined;
            var defaultValue = currentValue.defaultValue || 'inherit';
            // Warn to console if we hit an unthemed value even when themes are provided, but only if "DEBUG" is true.
            // Allow the themedValue to be undefined to explicitly request the default value.
            if (theme && !themedValue && console && !(themeSlot in theme) && "boolean" !== 'undefined' && true) {
                console.warn("Theming value not provided for \"" + themeSlot + "\". Falling back to \"" + defaultValue + "\".");
            }
            return themedValue || defaultValue;
        }
        else {
            // A non-themable string. Preserve it.
            return currentValue.rawString;
        }
    });
    return {
        styleString: resolvedArray.join(''),
        themable: themable
    };
}
/**
 * Split tokenized CSS into an array of strings and theme specification objects
 * @param {string} styles Tokenized styles to split.
 */
function splitStyles(styles) {
    var result = [];
    if (styles) {
        var pos = 0; // Current position in styles.
        var tokenMatch = void 0; // tslint:disable-line:no-null-keyword
        while (tokenMatch = _themeTokenRegex.exec(styles)) {
            var matchIndex = tokenMatch.index;
            if (matchIndex > pos) {
                result.push({
                    rawString: styles.substring(pos, matchIndex)
                });
            }
            result.push({
                theme: tokenMatch[1],
                defaultValue: tokenMatch[2] // May be undefined
            });
            // index of the first character after the current match
            pos = _themeTokenRegex.lastIndex;
        }
        // Push the rest of the string after the last match.
        result.push({
            rawString: styles.substring(pos)
        });
    }
    return result;
}
exports.splitStyles = splitStyles;
/**
 * Registers a set of style text. If it is registered too early, we will register it when the
 * window.load event is fired.
 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
 * @param {IStyleRecord} styleRecord May specify a style Element to update.
 */
function registerStyles(styleArray) {
    if (typeof document === 'undefined') {
        return;
    }
    var head = document.getElementsByTagName('head')[0];
    var styleElement = document.createElement('style');
    var _a = resolveThemableArray(styleArray), styleString = _a.styleString, themable = _a.themable;
    styleElement.setAttribute('data-load-themed-styles', 'true');
    styleElement.type = 'text/css';
    if (_styleNonce) {
        styleElement.setAttribute('nonce', _styleNonce);
    }
    styleElement.appendChild(document.createTextNode(styleString));
    _themeState.perf.count++;
    head.appendChild(styleElement);
    var ev = document.createEvent('HTMLEvents');
    ev.initEvent('styleinsert', true /* bubbleEvent */, false /* cancelable */);
    ev.args = {
        newStyle: styleElement
    };
    document.dispatchEvent(ev);
    var record = {
        styleElement: styleElement,
        themableStyle: styleArray
    };
    if (themable) {
        _themeState.registeredThemableStyles.push(record);
    }
    else {
        _themeState.registeredStyles.push(record);
    }
}
//# sourceMappingURL=index.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../webpack/buildin/global.js */ "yLpj")))

/***/ }),

/***/ "yLpj":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

/******/ })});;
//# sourceMappingURL=send-email-using-spfx-web-part.js.map