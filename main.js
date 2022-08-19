/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/noise-img.png */ "./src/assets/noise-img.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/cursor.png */ "./src/assets/cursor.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nbody {\r\n    display: inline-block;\r\n}\r\n\r\n#content {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    width: 100vw;\r\n    height: 100vh;\r\n    margin: 0 auto;\r\n    border: 10px groove #c185a4;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\nheader h1 {\r\n    font-family: 'Crafty Girls', serif;\r\n    font-size: 5em;\r\n    font-weight: bold;\r\n    color: white;\r\n    text-shadow: 0 0 15px #0066ef;\r\n}\r\n\r\nnav {\r\n    margin: 0px 5rem;\r\n    align-self: stretch;\r\n    display: flex;\r\n}\r\n\r\nnav button{\r\n    padding: 1rem 0rem;\r\n    color: white;\r\n    cursor: pointer;\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n    font-size: 1rem;\r\n    font-family: Roboto, sans-serif;\r\n    border: ridge 0.5rem white;\r\n    border-radius: 10px;\r\n    text-shadow: 0 0 10px black;\r\n    background-image: linear-gradient(to bottom right, #2323fb, #000066);\r\n    flex-grow: 1;\r\n}\r\n\r\nnav button.active::before{\r\n    content: ' ';\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    background-size: contain;\r\n    display: inline-block;\r\n    height: 1rem;\r\n    width: 1rem;\r\n}\r\n\r\n#tabContent {\r\n    margin: 0px 5rem 5rem 5rem;\r\n    padding: 3rem;\r\n    border: ridge 0.5rem white;\r\n    border-radius: 10px;\r\n    color: white;\r\n    font-family: Roboto, sans-serif;\r\n    text-shadow: 0 0 10px black;\r\n    background-image: linear-gradient(to bottom right, #2323fb, #000066);\r\n    flex-grow: 1;\r\n    align-self: stretch;\r\n}\r\n\r\n.tabSection{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.5rem;\r\n}\r\n\r\n.menuSection{\r\n    display: grid;\r\n    grid-template-columns: repeat(3, minmax(0,1fr));\r\n    gap: 0.5rem;\r\n}\r\n\r\n.menuSection .menuItem {\r\n    border: ridge 0.5rem white;\r\n    border-radius: 10px;\r\n    padding: 0.5rem;\r\n    height: 10rem;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.5rem;\r\n}\r\n\r\n.menuItem .itemText .itemSeperator{\r\n    width: 100%;\r\n    height: 1px;\r\n    background-color: white;\r\n}\r\n\r\n.menuSection .menuItem img {\r\n    max-height: 6rem;\r\n    width: auto;\r\n}\r\n\r\n.menuSection .menuItem .itemText {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.5rem;\r\n    align-self: stretch;\r\n}\r\n\r\n.menuSection .menuItem .itemText .itemName {\r\n    font-size: 1.5vw;\r\n}\r\n\r\n.menuSection .menuItem .itemText .itemDesc {\r\n    font-size: 0.8rem;\r\n    flex-grow: 1;\r\n    white-space: wrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n.menuSection .menuItem .itemText .itemPrice {\r\n    text-align: end;\r\n    justify-self: flex-end;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,yDAA6C;IAC7C,YAAY;IACZ,aAAa;IACb,cAAc;IACd,2BAA2B;IAC3B,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,kCAAkC;IAClC,cAAc;IACd,iBAAiB;IACjB,YAAY;IACZ,6BAA6B;AACjC;;AAEA;IACI,gBAAgB;IAChB,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,eAAe;IACf,yBAAyB;IACzB,iBAAiB;IACjB,eAAe;IACf,+BAA+B;IAC/B,0BAA0B;IAC1B,mBAAmB;IACnB,2BAA2B;IAC3B,oEAAoE;IACpE,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,yDAA0C;IAC1C,4BAA4B;IAC5B,2BAA2B;IAC3B,wBAAwB;IACxB,qBAAqB;IACrB,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,0BAA0B;IAC1B,aAAa;IACb,0BAA0B;IAC1B,mBAAmB;IACnB,YAAY;IACZ,+BAA+B;IAC/B,2BAA2B;IAC3B,oEAAoE;IACpE,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;AACf;;AAEA;IACI,aAAa;IACb,+CAA+C;IAC/C,WAAW;AACf;;AAEA;IACI,0BAA0B;IAC1B,mBAAmB;IACnB,eAAe;IACf,aAAa;IACb,aAAa;IACb,mBAAmB;IACnB,WAAW;AACf;;AAEA;IACI,WAAW;IACX,WAAW;IACX,uBAAuB;AAC3B;;AAEA;IACI,gBAAgB;IAChB,WAAW;AACf;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,YAAY;IACZ,iBAAiB;IACjB,gBAAgB;IAChB,uBAAuB;AAC3B;;AAEA;IACI,eAAe;IACf,sBAAsB;AAC1B","sourcesContent":["* {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nbody {\r\n    display: inline-block;\r\n}\r\n\r\n#content {\r\n    background-image: url(./assets/noise-img.png);\r\n    width: 100vw;\r\n    height: 100vh;\r\n    margin: 0 auto;\r\n    border: 10px groove #c185a4;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\nheader h1 {\r\n    font-family: 'Crafty Girls', serif;\r\n    font-size: 5em;\r\n    font-weight: bold;\r\n    color: white;\r\n    text-shadow: 0 0 15px #0066ef;\r\n}\r\n\r\nnav {\r\n    margin: 0px 5rem;\r\n    align-self: stretch;\r\n    display: flex;\r\n}\r\n\r\nnav button{\r\n    padding: 1rem 0rem;\r\n    color: white;\r\n    cursor: pointer;\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n    font-size: 1rem;\r\n    font-family: Roboto, sans-serif;\r\n    border: ridge 0.5rem white;\r\n    border-radius: 10px;\r\n    text-shadow: 0 0 10px black;\r\n    background-image: linear-gradient(to bottom right, #2323fb, #000066);\r\n    flex-grow: 1;\r\n}\r\n\r\nnav button.active::before{\r\n    content: ' ';\r\n    background-image: url(./assets/cursor.png);\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    background-size: contain;\r\n    display: inline-block;\r\n    height: 1rem;\r\n    width: 1rem;\r\n}\r\n\r\n#tabContent {\r\n    margin: 0px 5rem 5rem 5rem;\r\n    padding: 3rem;\r\n    border: ridge 0.5rem white;\r\n    border-radius: 10px;\r\n    color: white;\r\n    font-family: Roboto, sans-serif;\r\n    text-shadow: 0 0 10px black;\r\n    background-image: linear-gradient(to bottom right, #2323fb, #000066);\r\n    flex-grow: 1;\r\n    align-self: stretch;\r\n}\r\n\r\n.tabSection{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.5rem;\r\n}\r\n\r\n.menuSection{\r\n    display: grid;\r\n    grid-template-columns: repeat(3, minmax(0,1fr));\r\n    gap: 0.5rem;\r\n}\r\n\r\n.menuSection .menuItem {\r\n    border: ridge 0.5rem white;\r\n    border-radius: 10px;\r\n    padding: 0.5rem;\r\n    height: 10rem;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.5rem;\r\n}\r\n\r\n.menuItem .itemText .itemSeperator{\r\n    width: 100%;\r\n    height: 1px;\r\n    background-color: white;\r\n}\r\n\r\n.menuSection .menuItem img {\r\n    max-height: 6rem;\r\n    width: auto;\r\n}\r\n\r\n.menuSection .menuItem .itemText {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.5rem;\r\n    align-self: stretch;\r\n}\r\n\r\n.menuSection .menuItem .itemText .itemName {\r\n    font-size: 1.5vw;\r\n}\r\n\r\n.menuSection .menuItem .itemText .itemDesc {\r\n    font-size: 0.8rem;\r\n    flex-grow: 1;\r\n    white-space: wrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n.menuSection .menuItem .itemText .itemPrice {\r\n    text-align: end;\r\n    justify-self: flex-end;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/buttonEvents.js":
/*!****************************************!*\
  !*** ./src/components/buttonEvents.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function setInactive(){
    const button = document.querySelector('.active');
    if(button){
        button.classList.remove('active');
    }
}

function setActive(element) {
    element.classList.add('active');
    if(element.classList.contains('hover')){
        element.classList.remove('hover');
    }
}

function onClick(){
    setInactive();
    setActive(this);
}

function onMouseOver(){
    if(!this.classList.contains('active')){
        this.classList.add('hover');
    }
}

function onMouseOut(){
    if(this.classList.contains('hover')){
        this.classList.remove('hover');
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({setActive, onClick, onMouseOver, onMouseOut});

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createHeader(name) {
    const header = document.createElement('header');

    const restaurantName = document.createElement('h1');
    restaurantName.classList.add('restaurantName');
    restaurantName.innerHTML = name;

    header.appendChild(restaurantName);

    return header;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHeader);

/***/ }),

/***/ "./src/components/initialize.js":
/*!**************************************!*\
  !*** ./src/components/initialize.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./src/components/header.js");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav */ "./src/components/nav.js");
/* harmony import */ var _tabContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabContent */ "./src/components/tabContent.js");
/* harmony import */ var _tabs_home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tabs/home */ "./src/tabs/home.js");
/* harmony import */ var _buttonEvents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./buttonEvents */ "./src/components/buttonEvents.js");






function initialize(){
    const content = document.getElementById('content');

    const header = (0,_header__WEBPACK_IMPORTED_MODULE_0__["default"])('Kupo Bites');
    const nav = (0,_nav__WEBPACK_IMPORTED_MODULE_1__["default"])('nav');
    const tabContent = (0,_tabContent__WEBPACK_IMPORTED_MODULE_2__["default"])('tabContent');

    content.appendChild(header);
    content.appendChild(nav);
    content.appendChild(tabContent);

    const homeButton = document.getElementById('homeButton');

    (0,_tabs_home__WEBPACK_IMPORTED_MODULE_3__["default"])();
    _buttonEvents__WEBPACK_IMPORTED_MODULE_4__["default"].setActive(homeButton);

};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialize);

/***/ }),

/***/ "./src/components/nav.js":
/*!*******************************!*\
  !*** ./src/components/nav.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _navButtons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navButtons */ "./src/components/navButtons.js");


function createNav(id) {
    const nav = document.createElement('nav');
    nav.setAttribute('id', id);

    const homeButton = (0,_navButtons__WEBPACK_IMPORTED_MODULE_0__["default"])('home');
    const menuButton = (0,_navButtons__WEBPACK_IMPORTED_MODULE_0__["default"])('menu');
    const contactButton = (0,_navButtons__WEBPACK_IMPORTED_MODULE_0__["default"])('contact');

    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton);

    return nav;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createNav);

/***/ }),

/***/ "./src/components/navButtons.js":
/*!**************************************!*\
  !*** ./src/components/navButtons.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _buttonEvents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttonEvents */ "./src/components/buttonEvents.js");


function createNavButton(name){

    const button = document.createElement('button');
    button.classList.add("navButton");
    button.setAttribute('type','button');
    button.setAttribute('id', `${name}Button`);
    button.textContent = name;

    button.addEventListener('click', _buttonEvents__WEBPACK_IMPORTED_MODULE_0__["default"].onClick);
    button.addEventListener('mouseover', _buttonEvents__WEBPACK_IMPORTED_MODULE_0__["default"].onMouseOver);
    button.addEventListener('mouseout', _buttonEvents__WEBPACK_IMPORTED_MODULE_0__["default"].onMouseOut);

    return button;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createNavButton);

/***/ }),

/***/ "./src/components/tabContent.js":
/*!**************************************!*\
  !*** ./src/components/tabContent.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createTabContent(id) {
    const tabContent = document.createElement('main');
    tabContent.setAttribute('id', id);
    return tabContent;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTabContent);

/***/ }),

/***/ "./src/tabs/contact.js":
/*!*****************************!*\
  !*** ./src/tabs/contact.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createContact(){
    const contact = document.createElement('section');
    contact.classList.add('tabSection');

    const phoneHeader = document.createElement('h2');
    phoneHeader.textContent = 'Mognet Number';

    const phone = document.createElement('p');
    phone.textContent = '📞7777777';

    const addressHeader = document.createElement('h2');
    addressHeader.textContent = 'Location';

    const address = document.createElement('p');
    address.textContent = `Wherever you need us to be, kupo!`

    contact.appendChild(phoneHeader);
    contact.appendChild(phone);
    contact.appendChild(addressHeader);
    contact.appendChild(address);

    return contact;
}

function loadContact(){
    const tabContent = document.getElementById('tabContent');
    tabContent.innerHTML = '';

    const contact = createContact();

    tabContent.appendChild(contact);

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);

/***/ }),

/***/ "./src/tabs/home.js":
/*!**************************!*\
  !*** ./src/tabs/home.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createHome(){
    const home = document.createElement('section');
    home.classList.add('tabSection');

    const about = document.createElement('h2');
    about.classList.add('tabHeader');
    about.textContent = 'About';

    const aboutParagraph = document.createElement('p');
    aboutParagraph.classList.add('tabParagraph');
    aboutParagraph.textContent = `Welcome to Kupo Bites, where we serve the best bites throughout the mystic timeline, kupo! Whether you're lost or want a break while time travelling, Kupo Bites will always be there for you, kupo!`

    home.appendChild(about);
    home.appendChild(aboutParagraph);

    return home;
}

function loadHome(){
    const tabContent = document.getElementById('tabContent');
    tabContent.innerHTML = '';

    const home = createHome();

    tabContent.appendChild(home);

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);

/***/ }),

/***/ "./src/tabs/menu.js":
/*!**************************!*\
  !*** ./src/tabs/menu.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createMenuItem(src, alt, name, desc, price){
    const item = document.createElement('div');
    item.classList.add('menuItem');

    const img = document.createElement('img');
    img.setAttribute('src', src);
    img.setAttribute('alt', alt);

    const itemText = document.createElement('div');
    itemText.classList.add('itemText');

    const itemName = document.createElement('h3');
    itemName.classList.add('itemName');
    itemName.textContent = name;

    const seperator = document.createElement('div');
    seperator.classList.add('itemSeperator');

    const itemDesc = document.createElement('p')
    itemDesc.classList.add('itemDesc');
    itemDesc.textContent = desc;

    const itemPrice = document.createElement('h3');
    itemPrice.classList.add('itemPrice');
    itemPrice.textContent = price;

    itemText.appendChild(itemName);
    itemText.appendChild(seperator);
    itemText.appendChild(itemDesc);
    itemText.appendChild(itemPrice);
    item.appendChild(img);
    item.appendChild(itemText);

    return item;
}

//ideally the menu would come from a external file (maybe a csv of some sort) which pass through a few functions but for now this will be the method of menu creation

function createMenu(){
    const menu = document.createElement('section');
    menu.classList.add('menuSection');

    const menuItems = [
        createMenuItem(
            'https://fanfest.finalfantasyxiv.com/2021/static/a27663f921f2f2792d72cfa44337ce27/f0a0a/moogle-honey-toast.webp',
            'an image of moogle honey toast',
            'Moogle honey toast',
            'Delicious baked honey toast topped with ice cream, kupo!',
            '900 gil'
        ),

        createMenuItem(
            'https://fanfest.finalfantasyxiv.com/2021/static/82bd7a212e3cb3df160f8c9ffde5fd9b/f0a0a/tonberry-omurice.webp',
            'an image of tonberry omelette rice',
            'Tonberry omelette rice',
            'Creamy omelette with pesto rice, kupopo!',
            '1080 gil'
        ),

        createMenuItem(
            'https://fanfest.finalfantasyxiv.com/2021/static/df6fa1404f414fb8cdec47a1b4178d79/f0a0a/giantbeaver.webp',
            'an image of giant beaver croquettes',
            'Giant Beaver croquettes',
            'Crunchy croquettes that look like giant beavers, kupo!',
            '1200 gil'
        ),

        createMenuItem(
            'https://fanfest.finalfantasyxiv.com/2021/static/4f5c3c7a5f69d34891c9f8b0d6dec262/f0a0a/ardbert.webp',
            'an image of a grape-flavoured drink inspired by Ardbert from FFXIV',
            `Ardbert: The First's Warrior of Light`,
            'A sweet drink like your memories of Ardbert, kupopo!',
            '600 gil'
        )
    ];

    menuItems.forEach((item) => {
        menu.appendChild(item);
    });

    return menu;
}

function loadMenu(){
    const tabContent = document.getElementById('tabContent');
    tabContent.innerHTML = '';

    const menu = createMenu();

    tabContent.appendChild(menu);

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);

/***/ }),

/***/ "./src/assets/cursor.png":
/*!*******************************!*\
  !*** ./src/assets/cursor.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1ee9863d5028de6be23c.png";

/***/ }),

/***/ "./src/assets/noise-img.png":
/*!**********************************!*\
  !*** ./src/assets/noise-img.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c012aaa49342c9c63082.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_initialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/initialize */ "./src/components/initialize.js");
/* harmony import */ var _tabs_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs/home */ "./src/tabs/home.js");
/* harmony import */ var _tabs_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs/menu */ "./src/tabs/menu.js");
/* harmony import */ var _tabs_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs/contact */ "./src/tabs/contact.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");






(0,_components_initialize__WEBPACK_IMPORTED_MODULE_0__["default"])();

const homeButton = document.getElementById('homeButton');
const menuButton = document.getElementById('menuButton');
const contactButton = document.getElementById('contactButton');

homeButton.addEventListener('click', _tabs_home__WEBPACK_IMPORTED_MODULE_1__["default"]);
menuButton.addEventListener('click', _tabs_menu__WEBPACK_IMPORTED_MODULE_2__["default"]);
contactButton.addEventListener('click', _tabs_contact__WEBPACK_IMPORTED_MODULE_3__["default"]);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cUNBQXFDLGtEQUFRO0FBQzdDLHdDQUF3QyxxREFBVyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb21wb25lbnRzL2J1dHRvbkV2ZW50cy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9uZW50cy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbXBvbmVudHMvaW5pdGlhbGl6ZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9uZW50cy9uYXYuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbXBvbmVudHMvbmF2QnV0dG9ucy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9uZW50cy90YWJDb250ZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy90YWJzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3RhYnMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvdGFicy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9ub2lzZS1pbWcucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvY3Vyc29yLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIGJvcmRlcjogMTBweCBncm9vdmUgI2MxODVhNDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIGgxIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdDcmFmdHkgR2lybHMnLCBzZXJpZjtcXHJcXG4gICAgZm9udC1zaXplOiA1ZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHRleHQtc2hhZG93OiAwIDAgMTVweCAjMDA2NmVmO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYge1xcclxcbiAgICBtYXJnaW46IDBweCA1cmVtO1xcclxcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgYnV0dG9ue1xcclxcbiAgICBwYWRkaW5nOiAxcmVtIDByZW07XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xcclxcbiAgICBib3JkZXI6IHJpZGdlIDAuNXJlbSB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IDAgMCAxMHB4IGJsYWNrO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjMjMyM2ZiLCAjMDAwMDY2KTtcXHJcXG4gICAgZmxleC1ncm93OiAxO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgYnV0dG9uLmFjdGl2ZTo6YmVmb3Jle1xcclxcbiAgICBjb250ZW50OiAnICc7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGhlaWdodDogMXJlbTtcXHJcXG4gICAgd2lkdGg6IDFyZW07XFxyXFxufVxcclxcblxcclxcbiN0YWJDb250ZW50IHtcXHJcXG4gICAgbWFyZ2luOiAwcHggNXJlbSA1cmVtIDVyZW07XFxyXFxuICAgIHBhZGRpbmc6IDNyZW07XFxyXFxuICAgIGJvcmRlcjogcmlkZ2UgMC41cmVtIHdoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XFxyXFxuICAgIHRleHQtc2hhZG93OiAwIDAgMTBweCBibGFjaztcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgIzIzMjNmYiwgIzAwMDA2Nik7XFxyXFxuICAgIGZsZXgtZ3JvdzogMTtcXHJcXG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYlNlY3Rpb257XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudVNlY3Rpb257XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1pbm1heCgwLDFmcikpO1xcclxcbiAgICBnYXA6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVTZWN0aW9uIC5tZW51SXRlbSB7XFxyXFxuICAgIGJvcmRlcjogcmlkZ2UgMC41cmVtIHdoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICAgIGhlaWdodDogMTByZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudUl0ZW0gLml0ZW1UZXh0IC5pdGVtU2VwZXJhdG9ye1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudVNlY3Rpb24gLm1lbnVJdGVtIGltZyB7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDZyZW07XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudVNlY3Rpb24gLm1lbnVJdGVtIC5pdGVtVGV4dCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMC41cmVtO1xcclxcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudVNlY3Rpb24gLm1lbnVJdGVtIC5pdGVtVGV4dCAuaXRlbU5hbWUge1xcclxcbiAgICBmb250LXNpemU6IDEuNXZ3O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudVNlY3Rpb24gLm1lbnVJdGVtIC5pdGVtVGV4dCAuaXRlbURlc2Mge1xcclxcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gICAgZmxleC1ncm93OiAxO1xcclxcbiAgICB3aGl0ZS1zcGFjZTogd3JhcDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxyXFxufVxcclxcblxcclxcbi5tZW51U2VjdGlvbiAubWVudUl0ZW0gLml0ZW1UZXh0IC5pdGVtUHJpY2Uge1xcclxcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kseURBQTZDO0lBQzdDLFlBQVk7SUFDWixhQUFhO0lBQ2IsY0FBYztJQUNkLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZiwrQkFBK0I7SUFDL0IsMEJBQTBCO0lBQzFCLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0Isb0VBQW9FO0lBQ3BFLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1oseURBQTBDO0lBQzFDLDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0Isd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWiwrQkFBK0I7SUFDL0IsMkJBQTJCO0lBQzNCLG9FQUFvRTtJQUNwRSxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsK0NBQStDO0lBQy9DLFdBQVc7QUFDZjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysc0JBQXNCO0FBQzFCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vYXNzZXRzL25vaXNlLWltZy5wbmcpO1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICBib3JkZXI6IDEwcHggZ3Jvb3ZlICNjMTg1YTQ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBoMSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnQ3JhZnR5IEdpcmxzJywgc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogNWVtO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDE1cHggIzAwNjZlZjtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHtcXHJcXG4gICAgbWFyZ2luOiAwcHggNXJlbTtcXHJcXG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxubmF2IGJ1dHRvbntcXHJcXG4gICAgcGFkZGluZzogMXJlbSAwcmVtO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcXHJcXG4gICAgYm9yZGVyOiByaWRnZSAwLjVyZW0gd2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIHRleHQtc2hhZG93OiAwIDAgMTBweCBibGFjaztcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgIzIzMjNmYiwgIzAwMDA2Nik7XFxyXFxuICAgIGZsZXgtZ3JvdzogMTtcXHJcXG59XFxyXFxuXFxyXFxubmF2IGJ1dHRvbi5hY3RpdmU6OmJlZm9yZXtcXHJcXG4gICAgY29udGVudDogJyAnO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9hc3NldHMvY3Vyc29yLnBuZyk7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGhlaWdodDogMXJlbTtcXHJcXG4gICAgd2lkdGg6IDFyZW07XFxyXFxufVxcclxcblxcclxcbiN0YWJDb250ZW50IHtcXHJcXG4gICAgbWFyZ2luOiAwcHggNXJlbSA1cmVtIDVyZW07XFxyXFxuICAgIHBhZGRpbmc6IDNyZW07XFxyXFxuICAgIGJvcmRlcjogcmlkZ2UgMC41cmVtIHdoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XFxyXFxuICAgIHRleHQtc2hhZG93OiAwIDAgMTBweCBibGFjaztcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgIzIzMjNmYiwgIzAwMDA2Nik7XFxyXFxuICAgIGZsZXgtZ3JvdzogMTtcXHJcXG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYlNlY3Rpb257XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudVNlY3Rpb257XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1pbm1heCgwLDFmcikpO1xcclxcbiAgICBnYXA6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVTZWN0aW9uIC5tZW51SXRlbSB7XFxyXFxuICAgIGJvcmRlcjogcmlkZ2UgMC41cmVtIHdoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICAgIGhlaWdodDogMTByZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudUl0ZW0gLml0ZW1UZXh0IC5pdGVtU2VwZXJhdG9ye1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudVNlY3Rpb24gLm1lbnVJdGVtIGltZyB7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDZyZW07XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudVNlY3Rpb24gLm1lbnVJdGVtIC5pdGVtVGV4dCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMC41cmVtO1xcclxcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudVNlY3Rpb24gLm1lbnVJdGVtIC5pdGVtVGV4dCAuaXRlbU5hbWUge1xcclxcbiAgICBmb250LXNpemU6IDEuNXZ3O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudVNlY3Rpb24gLm1lbnVJdGVtIC5pdGVtVGV4dCAuaXRlbURlc2Mge1xcclxcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gICAgZmxleC1ncm93OiAxO1xcclxcbiAgICB3aGl0ZS1zcGFjZTogd3JhcDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxyXFxufVxcclxcblxcclxcbi5tZW51U2VjdGlvbiAubWVudUl0ZW0gLml0ZW1UZXh0IC5pdGVtUHJpY2Uge1xcclxcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBzZXRJbmFjdGl2ZSgpe1xyXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZScpO1xyXG4gICAgaWYoYnV0dG9uKXtcclxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldEFjdGl2ZShlbGVtZW50KSB7XHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgaWYoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2hvdmVyJykpe1xyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXInKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gb25DbGljaygpe1xyXG4gICAgc2V0SW5hY3RpdmUoKTtcclxuICAgIHNldEFjdGl2ZSh0aGlzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gb25Nb3VzZU92ZXIoKXtcclxuICAgIGlmKCF0aGlzLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpe1xyXG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnaG92ZXInKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gb25Nb3VzZU91dCgpe1xyXG4gICAgaWYodGhpcy5jbGFzc0xpc3QuY29udGFpbnMoJ2hvdmVyJykpe1xyXG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXInKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge3NldEFjdGl2ZSwgb25DbGljaywgb25Nb3VzZU92ZXIsIG9uTW91c2VPdXR9IiwiZnVuY3Rpb24gY3JlYXRlSGVhZGVyKG5hbWUpIHtcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG5cclxuICAgIGNvbnN0IHJlc3RhdXJhbnROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIHJlc3RhdXJhbnROYW1lLmNsYXNzTGlzdC5hZGQoJ3Jlc3RhdXJhbnROYW1lJyk7XHJcbiAgICByZXN0YXVyYW50TmFtZS5pbm5lckhUTUwgPSBuYW1lO1xyXG5cclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChyZXN0YXVyYW50TmFtZSk7XHJcblxyXG4gICAgcmV0dXJuIGhlYWRlcjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSGVhZGVyOyIsImltcG9ydCBjcmVhdGVIZWFkZXIgZnJvbSBcIi4vaGVhZGVyXCI7XHJcbmltcG9ydCBjcmVhdGVOYXYgZnJvbSBcIi4vbmF2XCI7XHJcbmltcG9ydCBjcmVhdGVUYWJDb250ZW50IGZyb20gXCIuL3RhYkNvbnRlbnRcIjtcclxuaW1wb3J0IGxvYWRIb21lIGZyb20gXCIuLi90YWJzL2hvbWVcIjtcclxuaW1wb3J0IGJ1dHRvbkV2ZW50cyBmcm9tIFwiLi9idXR0b25FdmVudHNcIjtcclxuXHJcbmZ1bmN0aW9uIGluaXRpYWxpemUoKXtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG5cclxuICAgIGNvbnN0IGhlYWRlciA9IGNyZWF0ZUhlYWRlcignS3VwbyBCaXRlcycpO1xyXG4gICAgY29uc3QgbmF2ID0gY3JlYXRlTmF2KCduYXYnKTtcclxuICAgIGNvbnN0IHRhYkNvbnRlbnQgPSBjcmVhdGVUYWJDb250ZW50KCd0YWJDb250ZW50Jyk7XHJcblxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChuYXYpO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0YWJDb250ZW50KTtcclxuXHJcbiAgICBjb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWVCdXR0b24nKTtcclxuXHJcbiAgICBsb2FkSG9tZSgpO1xyXG4gICAgYnV0dG9uRXZlbnRzLnNldEFjdGl2ZShob21lQnV0dG9uKTtcclxuXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbml0aWFsaXplOyIsImltcG9ydCBjcmVhdGVOYXZCdXR0b24gZnJvbSBcIi4vbmF2QnV0dG9uc1wiO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlTmF2KGlkKSB7XHJcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcclxuICAgIG5hdi5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpO1xyXG5cclxuICAgIGNvbnN0IGhvbWVCdXR0b24gPSBjcmVhdGVOYXZCdXR0b24oJ2hvbWUnKTtcclxuICAgIGNvbnN0IG1lbnVCdXR0b24gPSBjcmVhdGVOYXZCdXR0b24oJ21lbnUnKTtcclxuICAgIGNvbnN0IGNvbnRhY3RCdXR0b24gPSBjcmVhdGVOYXZCdXR0b24oJ2NvbnRhY3QnKTtcclxuXHJcbiAgICBuYXYuYXBwZW5kQ2hpbGQoaG9tZUJ1dHRvbik7XHJcbiAgICBuYXYuYXBwZW5kQ2hpbGQobWVudUJ1dHRvbik7XHJcbiAgICBuYXYuYXBwZW5kQ2hpbGQoY29udGFjdEJ1dHRvbik7XHJcblxyXG4gICAgcmV0dXJuIG5hdjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTmF2OyIsImltcG9ydCBidXR0b25FdmVudHMgZnJvbSBcIi4vYnV0dG9uRXZlbnRzXCI7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVOYXZCdXR0b24obmFtZSl7XHJcblxyXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcIm5hdkJ1dHRvblwiKTtcclxuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdidXR0b24nKTtcclxuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7bmFtZX1CdXR0b25gKTtcclxuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IG5hbWU7XHJcblxyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYnV0dG9uRXZlbnRzLm9uQ2xpY2spO1xyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGJ1dHRvbkV2ZW50cy5vbk1vdXNlT3Zlcik7XHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBidXR0b25FdmVudHMub25Nb3VzZU91dCk7XHJcblxyXG4gICAgcmV0dXJuIGJ1dHRvbjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTmF2QnV0dG9uOyIsImZ1bmN0aW9uIGNyZWF0ZVRhYkNvbnRlbnQoaWQpIHtcclxuICAgIGNvbnN0IHRhYkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbiAgICB0YWJDb250ZW50LnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XHJcbiAgICByZXR1cm4gdGFiQ29udGVudDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVGFiQ29udGVudDsiLCJmdW5jdGlvbiBjcmVhdGVDb250YWN0KCl7XHJcbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gICAgY29udGFjdC5jbGFzc0xpc3QuYWRkKCd0YWJTZWN0aW9uJyk7XHJcblxyXG4gICAgY29uc3QgcGhvbmVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgcGhvbmVIZWFkZXIudGV4dENvbnRlbnQgPSAnTW9nbmV0IE51bWJlcic7XHJcblxyXG4gICAgY29uc3QgcGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBwaG9uZS50ZXh0Q29udGVudCA9ICfwn5OeNzc3Nzc3Nyc7XHJcblxyXG4gICAgY29uc3QgYWRkcmVzc0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBhZGRyZXNzSGVhZGVyLnRleHRDb250ZW50ID0gJ0xvY2F0aW9uJztcclxuXHJcbiAgICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgYWRkcmVzcy50ZXh0Q29udGVudCA9IGBXaGVyZXZlciB5b3UgbmVlZCB1cyB0byBiZSwga3VwbyFgXHJcblxyXG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChwaG9uZUhlYWRlcik7XHJcbiAgICBjb250YWN0LmFwcGVuZENoaWxkKHBob25lKTtcclxuICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQoYWRkcmVzc0hlYWRlcik7XHJcbiAgICBjb250YWN0LmFwcGVuZENoaWxkKGFkZHJlc3MpO1xyXG5cclxuICAgIHJldHVybiBjb250YWN0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkQ29udGFjdCgpe1xyXG4gICAgY29uc3QgdGFiQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWJDb250ZW50Jyk7XHJcbiAgICB0YWJDb250ZW50LmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAgIGNvbnN0IGNvbnRhY3QgPSBjcmVhdGVDb250YWN0KCk7XHJcblxyXG4gICAgdGFiQ29udGVudC5hcHBlbmRDaGlsZChjb250YWN0KTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvYWRDb250YWN0OyIsImZ1bmN0aW9uIGNyZWF0ZUhvbWUoKXtcclxuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgICBob21lLmNsYXNzTGlzdC5hZGQoJ3RhYlNlY3Rpb24nKTtcclxuXHJcbiAgICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBhYm91dC5jbGFzc0xpc3QuYWRkKCd0YWJIZWFkZXInKTtcclxuICAgIGFib3V0LnRleHRDb250ZW50ID0gJ0Fib3V0JztcclxuXHJcbiAgICBjb25zdCBhYm91dFBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGFib3V0UGFyYWdyYXBoLmNsYXNzTGlzdC5hZGQoJ3RhYlBhcmFncmFwaCcpO1xyXG4gICAgYWJvdXRQYXJhZ3JhcGgudGV4dENvbnRlbnQgPSBgV2VsY29tZSB0byBLdXBvIEJpdGVzLCB3aGVyZSB3ZSBzZXJ2ZSB0aGUgYmVzdCBiaXRlcyB0aHJvdWdob3V0IHRoZSBteXN0aWMgdGltZWxpbmUsIGt1cG8hIFdoZXRoZXIgeW91J3JlIGxvc3Qgb3Igd2FudCBhIGJyZWFrIHdoaWxlIHRpbWUgdHJhdmVsbGluZywgS3VwbyBCaXRlcyB3aWxsIGFsd2F5cyBiZSB0aGVyZSBmb3IgeW91LCBrdXBvIWBcclxuXHJcbiAgICBob21lLmFwcGVuZENoaWxkKGFib3V0KTtcclxuICAgIGhvbWUuYXBwZW5kQ2hpbGQoYWJvdXRQYXJhZ3JhcGgpO1xyXG5cclxuICAgIHJldHVybiBob21lO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkSG9tZSgpe1xyXG4gICAgY29uc3QgdGFiQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWJDb250ZW50Jyk7XHJcbiAgICB0YWJDb250ZW50LmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAgIGNvbnN0IGhvbWUgPSBjcmVhdGVIb21lKCk7XHJcblxyXG4gICAgdGFiQ29udGVudC5hcHBlbmRDaGlsZChob21lKTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvYWRIb21lOyIsImZ1bmN0aW9uIGNyZWF0ZU1lbnVJdGVtKHNyYywgYWx0LCBuYW1lLCBkZXNjLCBwcmljZSl7XHJcbiAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ21lbnVJdGVtJyk7XHJcblxyXG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBzcmMpO1xyXG4gICAgaW1nLnNldEF0dHJpYnV0ZSgnYWx0JywgYWx0KTtcclxuXHJcbiAgICBjb25zdCBpdGVtVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaXRlbVRleHQuY2xhc3NMaXN0LmFkZCgnaXRlbVRleHQnKTtcclxuXHJcbiAgICBjb25zdCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBpdGVtTmFtZS5jbGFzc0xpc3QuYWRkKCdpdGVtTmFtZScpO1xyXG4gICAgaXRlbU5hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xyXG5cclxuICAgIGNvbnN0IHNlcGVyYXRvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgc2VwZXJhdG9yLmNsYXNzTGlzdC5hZGQoJ2l0ZW1TZXBlcmF0b3InKTtcclxuXHJcbiAgICBjb25zdCBpdGVtRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgaXRlbURlc2MuY2xhc3NMaXN0LmFkZCgnaXRlbURlc2MnKTtcclxuICAgIGl0ZW1EZXNjLnRleHRDb250ZW50ID0gZGVzYztcclxuXHJcbiAgICBjb25zdCBpdGVtUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgaXRlbVByaWNlLmNsYXNzTGlzdC5hZGQoJ2l0ZW1QcmljZScpO1xyXG4gICAgaXRlbVByaWNlLnRleHRDb250ZW50ID0gcHJpY2U7XHJcblxyXG4gICAgaXRlbVRleHQuYXBwZW5kQ2hpbGQoaXRlbU5hbWUpO1xyXG4gICAgaXRlbVRleHQuYXBwZW5kQ2hpbGQoc2VwZXJhdG9yKTtcclxuICAgIGl0ZW1UZXh0LmFwcGVuZENoaWxkKGl0ZW1EZXNjKTtcclxuICAgIGl0ZW1UZXh0LmFwcGVuZENoaWxkKGl0ZW1QcmljZSk7XHJcbiAgICBpdGVtLmFwcGVuZENoaWxkKGltZyk7XHJcbiAgICBpdGVtLmFwcGVuZENoaWxkKGl0ZW1UZXh0KTtcclxuXHJcbiAgICByZXR1cm4gaXRlbTtcclxufVxyXG5cclxuLy9pZGVhbGx5IHRoZSBtZW51IHdvdWxkIGNvbWUgZnJvbSBhIGV4dGVybmFsIGZpbGUgKG1heWJlIGEgY3N2IG9mIHNvbWUgc29ydCkgd2hpY2ggcGFzcyB0aHJvdWdoIGEgZmV3IGZ1bmN0aW9ucyBidXQgZm9yIG5vdyB0aGlzIHdpbGwgYmUgdGhlIG1ldGhvZCBvZiBtZW51IGNyZWF0aW9uXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVNZW51KCl7XHJcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKCdtZW51U2VjdGlvbicpO1xyXG5cclxuICAgIGNvbnN0IG1lbnVJdGVtcyA9IFtcclxuICAgICAgICBjcmVhdGVNZW51SXRlbShcclxuICAgICAgICAgICAgJ2h0dHBzOi8vZmFuZmVzdC5maW5hbGZhbnRhc3l4aXYuY29tLzIwMjEvc3RhdGljL2EyNzY2M2Y5MjFmMmYyNzkyZDcyY2ZhNDQzMzdjZTI3L2YwYTBhL21vb2dsZS1ob25leS10b2FzdC53ZWJwJyxcclxuICAgICAgICAgICAgJ2FuIGltYWdlIG9mIG1vb2dsZSBob25leSB0b2FzdCcsXHJcbiAgICAgICAgICAgICdNb29nbGUgaG9uZXkgdG9hc3QnLFxyXG4gICAgICAgICAgICAnRGVsaWNpb3VzIGJha2VkIGhvbmV5IHRvYXN0IHRvcHBlZCB3aXRoIGljZSBjcmVhbSwga3VwbyEnLFxyXG4gICAgICAgICAgICAnOTAwIGdpbCdcclxuICAgICAgICApLFxyXG5cclxuICAgICAgICBjcmVhdGVNZW51SXRlbShcclxuICAgICAgICAgICAgJ2h0dHBzOi8vZmFuZmVzdC5maW5hbGZhbnRhc3l4aXYuY29tLzIwMjEvc3RhdGljLzgyYmQ3YTIxMmUzY2IzZGYxNjBmOGM5ZmZkZTVmZDliL2YwYTBhL3RvbmJlcnJ5LW9tdXJpY2Uud2VicCcsXHJcbiAgICAgICAgICAgICdhbiBpbWFnZSBvZiB0b25iZXJyeSBvbWVsZXR0ZSByaWNlJyxcclxuICAgICAgICAgICAgJ1RvbmJlcnJ5IG9tZWxldHRlIHJpY2UnLFxyXG4gICAgICAgICAgICAnQ3JlYW15IG9tZWxldHRlIHdpdGggcGVzdG8gcmljZSwga3Vwb3BvIScsXHJcbiAgICAgICAgICAgICcxMDgwIGdpbCdcclxuICAgICAgICApLFxyXG5cclxuICAgICAgICBjcmVhdGVNZW51SXRlbShcclxuICAgICAgICAgICAgJ2h0dHBzOi8vZmFuZmVzdC5maW5hbGZhbnRhc3l4aXYuY29tLzIwMjEvc3RhdGljL2RmNmZhMTQwNGY0MTRmYjhjZGVjNDdhMWI0MTc4ZDc5L2YwYTBhL2dpYW50YmVhdmVyLndlYnAnLFxyXG4gICAgICAgICAgICAnYW4gaW1hZ2Ugb2YgZ2lhbnQgYmVhdmVyIGNyb3F1ZXR0ZXMnLFxyXG4gICAgICAgICAgICAnR2lhbnQgQmVhdmVyIGNyb3F1ZXR0ZXMnLFxyXG4gICAgICAgICAgICAnQ3J1bmNoeSBjcm9xdWV0dGVzIHRoYXQgbG9vayBsaWtlIGdpYW50IGJlYXZlcnMsIGt1cG8hJyxcclxuICAgICAgICAgICAgJzEyMDAgZ2lsJ1xyXG4gICAgICAgICksXHJcblxyXG4gICAgICAgIGNyZWF0ZU1lbnVJdGVtKFxyXG4gICAgICAgICAgICAnaHR0cHM6Ly9mYW5mZXN0LmZpbmFsZmFudGFzeXhpdi5jb20vMjAyMS9zdGF0aWMvNGY1YzNjN2E1ZjY5ZDM0ODkxYzlmOGIwZDZkZWMyNjIvZjBhMGEvYXJkYmVydC53ZWJwJyxcclxuICAgICAgICAgICAgJ2FuIGltYWdlIG9mIGEgZ3JhcGUtZmxhdm91cmVkIGRyaW5rIGluc3BpcmVkIGJ5IEFyZGJlcnQgZnJvbSBGRlhJVicsXHJcbiAgICAgICAgICAgIGBBcmRiZXJ0OiBUaGUgRmlyc3QncyBXYXJyaW9yIG9mIExpZ2h0YCxcclxuICAgICAgICAgICAgJ0Egc3dlZXQgZHJpbmsgbGlrZSB5b3VyIG1lbW9yaWVzIG9mIEFyZGJlcnQsIGt1cG9wbyEnLFxyXG4gICAgICAgICAgICAnNjAwIGdpbCdcclxuICAgICAgICApXHJcbiAgICBdO1xyXG5cclxuICAgIG1lbnVJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgbWVudS5hcHBlbmRDaGlsZChpdGVtKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBtZW51O1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkTWVudSgpe1xyXG4gICAgY29uc3QgdGFiQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWJDb250ZW50Jyk7XHJcbiAgICB0YWJDb250ZW50LmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAgIGNvbnN0IG1lbnUgPSBjcmVhdGVNZW51KCk7XHJcblxyXG4gICAgdGFiQ29udGVudC5hcHBlbmRDaGlsZChtZW51KTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvYWRNZW51OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgaW5pdGlhbGl6ZSBmcm9tIFwiLi9jb21wb25lbnRzL2luaXRpYWxpemVcIjtcclxuaW1wb3J0IGxvYWRIb21lIGZyb20gXCIuL3RhYnMvaG9tZVwiO1xyXG5pbXBvcnQgbG9hZE1lbnUgZnJvbSBcIi4vdGFicy9tZW51XCI7XHJcbmltcG9ydCBsb2FkQ29udGFjdCBmcm9tIFwiLi90YWJzL2NvbnRhY3RcIjtcclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5pbml0aWFsaXplKCk7XHJcblxyXG5jb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWVCdXR0b24nKTtcclxuY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51QnV0dG9uJyk7XHJcbmNvbnN0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdEJ1dHRvbicpO1xyXG5cclxuaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRIb21lKTtcclxubWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRNZW51KTtcclxuY29udGFjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRDb250YWN0KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9