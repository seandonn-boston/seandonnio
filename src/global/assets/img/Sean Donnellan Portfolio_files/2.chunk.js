(this["webpackJsonpseandonnio"] = this["webpackJsonpseandonnio"] || []).push([[2],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/features/ContactPage/ContactPage.scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-6-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--6-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-6-4!./src/features/ContactPage/ContactPage.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".ContactPage_Contact__2ZfSI {\n  background-color: red; }\n  .ContactPage_Contact-form__3tb8s {\n    background-color: blue;\n    display: block;\n    margin: auto;\n    text-align: center; }\n    .ContactPage_Contact-form-fieldset__2mECd {\n      display: flex;\n      flex-flow: column;\n      justify-content: center; }\n    .ContactPage_Contact-form-input__3YwXB {\n      background-color: orange;\n      display: inline-block; }\n    .ContactPage_Contact-form-textarea__1UyuM {\n      background-color: yellow;\n      display: inline-block; }\n    .ContactPage_Contact-form-button__N7xWW {\n      cursor: pointer; }\n      .ContactPage_Contact-form-button__N7xWW[type=\"submit\"] {\n        background-color: green; }\n      .ContactPage_Contact-form-button__N7xWW[type=\"reset\"] {\n        background-color: red; }\n\n@media only screen and (max-width: 768px) {\n  .ContactPage_Contact-form-label__1nd3r {\n    border: 0;\n    clip: rect(0, 0, 0, 0);\n    height: 1px;\n    margin: -1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    width: 1px; } }\n\n@media only screen and (min-width: 768px) {\n  .ContactPage_Contact-form-label__1nd3r {\n    display: inline-block;\n    background-color: purple;\n    width: 180px;\n    float: left;\n    text-align: right;\n    margin-right: 16px; } }\n", ""]);
// Exports
exports.locals = {
	"bpS": "480",
	"bpM": "768",
	"bpL": "1024",
	"bpXl": "1200",
	"bpSpx": "480px",
	"bpMpx": "768px",
	"bpLpx": "1024px",
	"bpXlpx": "1200px",
	"toXs": "100",
	"toS": "200",
	"toM": "300",
	"toL": "400",
	"toXl": "500",
	"toXsms": "100ms",
	"toSms": "200ms",
	"toMms": "300ms",
	"toLms": "400ms",
	"toXlms": "500ms",
	"contact": "ContactPage_Contact__2ZfSI",
	"contactForm": "ContactPage_Contact-form__3tb8s",
	"contactFormFieldset": "ContactPage_Contact-form-fieldset__2mECd",
	"contactFormInput": "ContactPage_Contact-form-input__3YwXB",
	"contactFormTextarea": "ContactPage_Contact-form-textarea__1UyuM",
	"contactFormButton": "ContactPage_Contact-form-button__N7xWW",
	"contactFormLabel": "ContactPage_Contact-form-label__1nd3r"
};
module.exports = exports;


/***/ }),

/***/ "./src/features/ContactPage/ContactPage.js":
/*!*************************************************!*\
  !*** ./src/features/ContactPage/ContactPage.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContactPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ContactPage_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContactPage.scss */ "./src/features/ContactPage/ContactPage.scss");
/* harmony import */ var _ContactPage_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ContactPage_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/sean/Codebase/seandonnio/src/features/ContactPage/ContactPage.js";


const FIRST_NAME = "firstName";
const LAST_NAME = "lastName";
const EMAIL = "email";
const MESSAGE = "message";
const SUBJECT = "subject";
const RECIPIENT = "sean@seandonn.io";
function ContactPage() {
  const [userInput, setUserInput] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])((state, newState) => ({ ...state,
    ...newState
  }), {
    [FIRST_NAME]: "",
    [LAST_NAME]: "",
    [EMAIL]: "",
    [SUBJECT]: "",
    [MESSAGE]: ""
  });

  const handleChange = evt => {
    const {
      name,
      value
    } = evt.target;
    setUserInput({
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const string = `mailto:${RECIPIENT}&subject=${encodeURI(userInput[SUBJECT])}&body=${encodeURI(userInput[MESSAGE])}`;
    window.open(string);
  }; // TODO: DRY this up


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _ContactPage_scss__WEBPACK_IMPORTED_MODULE_1__["contact"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, "Contact"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: _ContactPage_scss__WEBPACK_IMPORTED_MODULE_1__["contactForm"],
    onSubmit: handleSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("fieldset", {
    className: _ContactPage_scss__WEBPACK_IMPORTED_MODULE_1__["contactFormFieldset"],
    id: "userData",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("legend", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }, "Contact Info"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: _ContactPage_scss__WEBPACK_IMPORTED_MODULE_1__["contactFormLabel"],
    htmlFor: FIRST_NAME,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, "First Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: _ContactPage_scss__WEBPACK_IMPORTED_MODULE_1__["contactFormInput"],
    type: "text",
    name: FIRST_NAME,
    value: userInput[{
      FIRST_NAME
    }],
    onChange: handleChange,
    placeholder: "First name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: _ContactPage_scss__WEBPACK_IMPORTED_MODULE_1__["contactFormLabel"],
    htmlFor: LAST_NAME,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }, "Last Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: _ContactPage_scss__WEBPACK_IMPORTED_MODULE_1__["contactFormInput"],
    type: "text",
    name: LAST_NAME,
    value: userInput[{
      LAST_NAME
    }],
    onChange: handleChange,
    placeholder: "Last name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: _ContactPage_scss__WEBPACK_IMPORTED_MODULE_1__["contactFormLabel"],
    htmlFor: EMAIL,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: _ContactPage_scss__WEBPACK_IMPORTED_MODULE_1__["contactFormInput"],
    type: "email",
    name: EMAIL,
    value: userInput[{
      EMAIL
    }],
    onChange: handleChange,
    placeholder: "Email",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 11
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("fieldset", {
    className: _ContactPage_scss__WEBPACK_IMPORTED_MODULE_1__["contactFormFieldset"],
    id: "userMessage",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("legend", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }
  }, "Message"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: _ContactPage_scss__WEBPACK_IMPORTED_MODULE_1__["contactFormLabel"],
    htmlFor: SUBJECT,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 11
    }
  }, "Subject"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: _ContactPage_scss__WEBPACK_IMPORTED_MODULE_1__["contactFormInput"],
    type: "text",
    name: SUBJECT,
    value: userInput[{
      SUBJECT
    }],
    onChange: handleChange,
    placeholder: "Subject header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: _ContactPage_scss__WEBPACK_IMPORTED_MODULE_1__["contactFormLabel"],
    htmlFor: MESSAGE,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 11
    }
  }, "Message"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
    className: _ContactPage_scss__WEBPACK_IMPORTED_MODULE_1__["contactFormTextarea"],
    type: "text",
    name: MESSAGE,
    value: userInput[{
      MESSAGE
    }],
    onChange: handleChange,
    placeholder: "Hello Sean...",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 11
    }
  })), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: _ContactPage_scss__WEBPACK_IMPORTED_MODULE_1__["contactFormButton"],
    type: "reset",
    value: "Clear",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: _ContactPage_scss__WEBPACK_IMPORTED_MODULE_1__["contactFormButton"],
    type: "submit",
    value: "Send",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }
  })));
}

/***/ }),

/***/ "./src/features/ContactPage/ContactPage.scss":
/*!***************************************************!*\
  !*** ./src/features/ContactPage/ContactPage.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-6-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--6-oneOf-6-3!../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-6-4!./ContactPage.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/features/ContactPage/ContactPage.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-6-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--6-oneOf-6-3!../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-6-4!./ContactPage.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/features/ContactPage/ContactPage.scss", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-6-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--6-oneOf-6-3!../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-6-4!./ContactPage.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/features/ContactPage/ContactPage.scss");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ })

}]);
//# sourceMappingURL=2.chunk.js.map