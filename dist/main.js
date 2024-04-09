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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html { 
    /* root font size is 16px */
    font-size: 16px;
} 

.userWindow { 
    /* userWindow class has a flex layout */ 
    display: flex; 
    /* the class implies a width equal to the half of the viewport width */
    width: 50vw; 
    /* the class implies a hegiht equal to the sevnty percent of the viewport 
    height */ 
    height: 70vh; 
    /* styling of the border of this class elements */
    border-style: double;
    border-width: 5px; 
    border-color: blue; 
    /* the gap between the items */
    gap: 0.2rem;
} 

.projectNamesWindow {
    /* a solid red border of 3px thick*/ 
    border: solid 3px red; 
    /* the window has a 1 unit width in its parent flex container*/ 
    flex: 1; 
    /* margins of the project names window are set */
    margin-left: 0.2rem; 
    margin-top: 0.2rem; 
    margin-bottom: 0.2rem; 
    display: flex; 
    flex-direction: column;
} 

.projectNamesWindowHeader {
    font-weight: bold; 
    padding: 0.5rem;
} 

.projectNamesList { 
    /* project names list takes up the space left by the main size of the header*/
    flex-grow: 1; 
    padding-left: 0.5rem;
}

/* the class of the div in which a project name and its todos are written */
.projectNameListItem {
    padding-bottom: 0.3rem;
} 

/* the class for project name and cursor styling */
.projectName:hover {
    background-color: gold; 
    cursor: pointer;
} 

.todoTitle {
    font-weight: bold; 
    padding-left: 1rem;
}

/* the class of the div to hold the class name span element*/
.todoListNameDiv {
    padding-left: 1rem;
} 

/* todo name span element is styled*/
.todoListName:hover {
    background-color: greenyellow; 
    cursor: pointer; 
}

.todosWindow {
    /* a solid orange border of 3px thick*/ 
    border: solid 3px orange; 
    /* the window has a 2 unit width in its parent flex container*/ 
    flex: 2; 
    /* margins of the todos window are set */
    margin-right: 0.2rem; 
    margin-top: 0.2rem; 
    margin-bottom: 0.2rem;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,2BAA2B;IAC3B,eAAe;AACnB;;AAEA;IACI,uCAAuC;IACvC,aAAa;IACb,sEAAsE;IACtE,WAAW;IACX;YACQ;IACR,YAAY;IACZ,iDAAiD;IACjD,oBAAoB;IACpB,iBAAiB;IACjB,kBAAkB;IAClB,8BAA8B;IAC9B,WAAW;AACf;;AAEA;IACI,mCAAmC;IACnC,qBAAqB;IACrB,8DAA8D;IAC9D,OAAO;IACP,gDAAgD;IAChD,mBAAmB;IACnB,kBAAkB;IAClB,qBAAqB;IACrB,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,6EAA6E;IAC7E,YAAY;IACZ,oBAAoB;AACxB;;AAEA,2EAA2E;AAC3E;IACI,sBAAsB;AAC1B;;AAEA,kDAAkD;AAClD;IACI,sBAAsB;IACtB,eAAe;AACnB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA,4DAA4D;AAC5D;IACI,kBAAkB;AACtB;;AAEA,oCAAoC;AACpC;IACI,6BAA6B;IAC7B,eAAe;AACnB;;AAEA;IACI,sCAAsC;IACtC,wBAAwB;IACxB,8DAA8D;IAC9D,OAAO;IACP,wCAAwC;IACxC,oBAAoB;IACpB,kBAAkB;IAClB,qBAAqB;AACzB","sourcesContent":["html { \n    /* root font size is 16px */\n    font-size: 16px;\n} \n\n.userWindow { \n    /* userWindow class has a flex layout */ \n    display: flex; \n    /* the class implies a width equal to the half of the viewport width */\n    width: 50vw; \n    /* the class implies a hegiht equal to the sevnty percent of the viewport \n    height */ \n    height: 70vh; \n    /* styling of the border of this class elements */\n    border-style: double;\n    border-width: 5px; \n    border-color: blue; \n    /* the gap between the items */\n    gap: 0.2rem;\n} \n\n.projectNamesWindow {\n    /* a solid red border of 3px thick*/ \n    border: solid 3px red; \n    /* the window has a 1 unit width in its parent flex container*/ \n    flex: 1; \n    /* margins of the project names window are set */\n    margin-left: 0.2rem; \n    margin-top: 0.2rem; \n    margin-bottom: 0.2rem; \n    display: flex; \n    flex-direction: column;\n} \n\n.projectNamesWindowHeader {\n    font-weight: bold; \n    padding: 0.5rem;\n} \n\n.projectNamesList { \n    /* project names list takes up the space left by the main size of the header*/\n    flex-grow: 1; \n    padding-left: 0.5rem;\n}\n\n/* the class of the div in which a project name and its todos are written */\n.projectNameListItem {\n    padding-bottom: 0.3rem;\n} \n\n/* the class for project name and cursor styling */\n.projectName:hover {\n    background-color: gold; \n    cursor: pointer;\n} \n\n.todoTitle {\n    font-weight: bold; \n    padding-left: 1rem;\n}\n\n/* the class of the div to hold the class name span element*/\n.todoListNameDiv {\n    padding-left: 1rem;\n} \n\n/* todo name span element is styled*/\n.todoListName:hover {\n    background-color: greenyellow; \n    cursor: pointer; \n}\n\n.todosWindow {\n    /* a solid orange border of 3px thick*/ \n    border: solid 3px orange; \n    /* the window has a 2 unit width in its parent flex container*/ \n    flex: 2; \n    /* margins of the todos window are set */\n    margin-right: 0.2rem; \n    margin-top: 0.2rem; \n    margin-bottom: 0.2rem;\n}"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/mainWindowsModule.js":
/*!**********************************!*\
  !*** ./src/mainWindowsModule.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   implementProjectNamesList: () => (/* binding */ implementProjectNamesList),
/* harmony export */   setupMainFrames: () => (/* binding */ setupMainFrames)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _projectModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectModule */ "./src/projectModule.js");
/* harmony import */ var _todoWindowModule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoWindowModule */ "./src/todoWindowModule.js");
 
 


// the function for setting up the main frames of the user interface. 
function setupMainFrames() {
    // the window with which the user is going to interact is created.
    const userWindow = document.createElement("div"); 
    // the class of the user window is userWindow
    userWindow.className = "userWindow"; 
    // userWindow is added to the page
    document.body.appendChild(userWindow); 

    // the window in which project names are listed 
    const projectNamesWindow = document.createElement("div"); 
    // the class of the project names window is projectNamesWindow 
    projectNamesWindow.className = "projectNamesWindow"; 
    // project names window is added to the user window
    userWindow.appendChild(projectNamesWindow); 

    // the div in which the header of the project names window is written 
    const projectNamesWindowHeader = document.createElement("div"); 
    // the class of the project names window header div 
    projectNamesWindowHeader.className = "projectNamesWindowHeader"; 
    // project names window header is written
    projectNamesWindowHeader.textContent = "PROJECTS";
    // project names window header is added to the project names window
    projectNamesWindow.appendChild(projectNamesWindowHeader); 

    // the div in which the list of project names stands 
    const projectNamesList = document.createElement("div"); 
    // the class of the project names list div 
    projectNamesList.className = "projectNamesList"; 
    // project names list is added to the project names window 
    projectNamesWindow.appendChild(projectNamesList);

    // the window in which the todos are shown 
    const todosWindow = document.createElement("div"); 
    // the class of the todos window is todosWindow 
    todosWindow.className = "todosWindow"; 
    // todos window is added to the user window 
    userWindow.appendChild(todosWindow);
} 

function shrinkProjectName() {
    while (this.parentNode.childNodes.length > 1) {
        this.parentNode.removeChild(this.parentNode.lastChild);
    }
    this.addEventListener("click", expandProjectName, {once: true});
}

function expandProjectName() {
    const projectObject = (0,_projectModule__WEBPACK_IMPORTED_MODULE_1__.getProject)(this.textContent); 
    const projectArray = projectObject.projectContent; 
    const todoTitle = document.createElement("div"); 
    todoTitle.textContent = "Todos";
    todoTitle.className = "todoTitle"; 
    this.parentNode.appendChild(todoTitle);
    for (let i=0; i < projectArray.length; i++) {
        const todoNameDiv = document.createElement("div"); 
        const todoNameSpan = document.createElement("span"); 
        todoNameSpan.textContent = projectArray[i];
        todoNameSpan.className = "todoListName"; 
        todoNameSpan.addEventListener("click", _todoWindowModule__WEBPACK_IMPORTED_MODULE_2__.printTodo, {once: true});
        todoNameDiv.appendChild(todoNameSpan); 
        todoNameDiv.className = "todoListNameDiv"; 
        this.parentNode.appendChild(todoNameDiv);
    } 
    this.addEventListener("click", shrinkProjectName, {once: true});
}

function implementProjectNamesList() { 
    // existing project names is fetched from the local storage
    const existingProjectNames = JSON.parse(localStorage.getItem("existingProjectNames")); 
    // existing project names array assigned to a constant
    const namesArray = existingProjectNames.projectNames; 
    // access to the project names list div
    const projectNamesList = document.getElementsByClassName("projectNamesList")[0]; 
    // a div for each project name is created and added to the list window, the 
    // project name is written
    for (let i=0; i < namesArray.length; i++) {
        const itemDiv = document.createElement("div"); 
        // the project name is written in the span element
        const itemName = document.createElement("span");
        itemName.textContent = namesArray[i]; 
        itemName.className = "projectName";
        itemDiv.className = "projectNameListItem"; 
        itemName.addEventListener("click", expandProjectName, {once: true});
        itemDiv.appendChild(itemName);
        projectNamesList.appendChild(itemDiv); 
    } 
}



/***/ }),

/***/ "./src/projectModule.js":
/*!******************************!*\
  !*** ./src/projectModule.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addToExistingProjectNames: () => (/* binding */ addToExistingProjectNames),
/* harmony export */   addTodoListName: () => (/* binding */ addTodoListName),
/* harmony export */   createProject: () => (/* binding */ createProject),
/* harmony export */   deleteProject: () => (/* binding */ deleteProject),
/* harmony export */   getProject: () => (/* binding */ getProject),
/* harmony export */   removeFromExistingProjectNames: () => (/* binding */ removeFromExistingProjectNames),
/* harmony export */   removeTodoListName: () => (/* binding */ removeTodoListName),
/* harmony export */   saveProject: () => (/* binding */ saveProject)
/* harmony export */ });
// A factory function to create a project object. 
// projectObjectName: The name of the project entered by the user. 
// projectContent: The todo lists contained by the project.
function createProject(projectObjectName) {
    // the content of the project is initially nothing. 
    const projectContent = [];
    return { projectObjectName, projectContent };
} 

// A function to get a project from the local storage
// projectObjectName: The name of the project. 
function getProject(projectObjectName) {
    return JSON.parse(localStorage.getItem(projectObjectName));
}

// A function to add to the existing project names. 
// theProjectObject: The project object to be saved to the local storage. 
function addToExistingProjectNames(theProjectObject) {
    const tempObject = JSON.parse(localStorage.getItem("existingProjectNames")); 
    tempObject.projectNames.push(theProjectObject.projectObjectName); 
    localStorage.setItem("existingProjectNames", JSON.stringify(tempObject));
}

// A function to save the project object to the local storage. 
// theProjectObject: The project object to be saved to the local storage. 
function saveProject(theProjectObject) {
    localStorage.setItem(theProjectObject.projectObjectName, JSON.stringify(theProjectObject)); 
} 

// A function to update the content of a project by adding a new todo list.
// projectObjectName: The name of the project. 
// todoListName: The todo list to be added to the content of the project. 
function addTodoListName(projectObjectName, todoListName) { 
    // the content of the project updated by adding the todo list.
    projectObjectName.projectContent.push(todoListName); 
    return projectObjectName;
} 

// A function to update the content of a project by removing a todo list.
// projectObjectName: The name of the project. 
// todoListName: The todo list to be removed from the content of the project. 
function removeTodoListName(projectObject, todoListName) { 
    // the index of the todo is found
    const index = projectObject.projectContent.indexOf(todoListName); 
    // the todo is removed
    projectObject.projectContent.splice(index, 1); 
    return projectObject;
} 

// A function to remove a project name from the existing project names. 
// theProjectName: The project name to be removed.
function removeFromExistingProjectNames(theProjectName) {
    const tempObject = JSON.parse(localStorage.getItem("existingProjectNames")); 
    // the index of the project name is found
    const index = tempObject.projectNames.indexOf(theProjectName); 
    // the project name is removed
    tempObject.projectNames.splice(index, 1);
    localStorage.setItem("existingProjectNames", JSON.stringify(tempObject));
}

// A function to remove a project from the local storage. 
// projectObjectName: The name of the project. 
function deleteProject(projectObjectName) {
    localStorage.removeItem(projectObjectName); 
}



/***/ }),

/***/ "./src/todoListModule.js":
/*!*******************************!*\
  !*** ./src/todoListModule.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTodoList: () => (/* binding */ createTodoList),
/* harmony export */   deleteTodoList: () => (/* binding */ deleteTodoList),
/* harmony export */   getTodo: () => (/* binding */ getTodo),
/* harmony export */   saveTodoList: () => (/* binding */ saveTodoList),
/* harmony export */   updateTodoListDescription: () => (/* binding */ updateTodoListDescription),
/* harmony export */   updateTodoListDueDate: () => (/* binding */ updateTodoListDueDate),
/* harmony export */   updateTodoListPriority: () => (/* binding */ updateTodoListPriority),
/* harmony export */   updateTodoListStorageName: () => (/* binding */ updateTodoListStorageName),
/* harmony export */   updateTodoListTitle: () => (/* binding */ updateTodoListTitle)
/* harmony export */ });
// the factory function to create a todo list. 
// title: The title of the todo list, entered by the user.
// description: The description of the todo list, entered by the user. 
// dueDate: The due date of the todo list, entered by the user. 
// priority: The priority of the todo list, entered by the user. 
// ownerProject: The project which owns the todo list.
function createTodoList(title, description, dueDate, priority, ownerProject) {
    return { title, description, dueDate, priority, ownerProject };
}

// the function to save a todo list in a project. 
// theTodoObject: The todo object to be saved in the local storage. 
// The name of the todo in the local storage, determined by the programmer. 
// theProjectName: The name of the project the content of which is to be updated 
// by adding the new todo list.
function saveTodoList(todoStorageName, todoObject) {
    localStorage.setItem(todoStorageName, JSON.stringify(todoObject)); 
}

// the function to get a todo list 
// todoStorageName: The storage name of the todo list 
function getTodo(todoStorageName) {
    const tempObject = JSON.parse(localStorage.getItem(todoStorageName)); 
    return tempObject;
} 

// the function to update the title of a todo list. 
// todoStorageName: The storage name of the todo list 
// newTitle: The new title of the todo list
function updateTodoListTitle(todoObject, newTitle) {
    todoObject.title = newTitle; 
    return todoObject;
} 

// the function to update the description of a todo list. 
// todoStorageName: The storage name of the todo list 
// newTitle: The new description of the todo list
function updateTodoListDescription(todoObject, newDescription) {
    todoObject.description = newDescription; 
    return todoObject;
} 

// the function to update the due date of a todo list. 
// todoStorageName: The storage name of the todo list 
// newDueDate: The new due date of the todo list
function updateTodoListDueDate(todoObject, newDueDate) {
    todoObject.dueDate = newDueDate;
    return todoObject;
} 

// the function to update the priority of a todo list. 
// todoStorageName: The storage name of the todo list 
// newPriority: The new priority of the todo list
function updateTodoListPriority(todoObject, newPriority) {
    todoObject.priority = newPriority; 
    return todoObject;
} 

// the function to delete a todo list 
// todoStorageName: The storage name of the todo list 
function deleteTodoList(todoStorageName) { 
    localStorage.removeItem(todoStorageName); 
} 

// the function to update the storage name of the todo 
function updateTodoListStorageName(previousStorageName, newOwnerProjectName) {
    const tempObject = JSON.parse(localStorage.getItem(previousStorageName)); 
    tempObject.ownerProject = newOwnerProjectName; 
    return tempObject;
}



/***/ }),

/***/ "./src/todoWindowModule.js":
/*!*********************************!*\
  !*** ./src/todoWindowModule.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   printTodo: () => (/* binding */ printTodo)
/* harmony export */ });
/* harmony import */ var _todoListModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoListModule */ "./src/todoListModule.js");


function printTodo() {
    // the name of the project which owns the todo
    const projectName = this.parentNode.parentNode.firstChild.textContent; 
    // the name of the todo
    const todoName = this.textContent; 
    // the storage name of the todo
    const todoStorageName = projectName + "-" + todoName; 
    const todoObject = (0,_todoListModule__WEBPACK_IMPORTED_MODULE_0__.getTodo)(todoStorageName); 
    this.addEventListener("click", printTodo, {once: true}); 
    console.log(todoObject);
} 



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
/* harmony import */ var _todoListModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoListModule */ "./src/todoListModule.js");
/* harmony import */ var _projectModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectModule */ "./src/projectModule.js");
/* harmony import */ var _mainWindowsModule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mainWindowsModule */ "./src/mainWindowsModule.js");






// The functions for dealing with todo lists and related projects are now to be 
// tested using the console. 

// local storage is cleared
localStorage.clear();

// the variable for the existing project names is declared
let existingProjectNames;

// Check if the object "existingProjectNames" exists on the local storage. If it 
// exists, fetch it from the local storage. Otherwise, create it and store it in 
// the local storage. 
if (!localStorage.getItem("existingProjectNames")) {
    existingProjectNames = {
        projectNames: [],
    };
    console.log("No existingProjectNames object in the local storage!"); 
    localStorage.setItem("existingProjectNames", JSON.stringify(existingProjectNames));
} 
else {
    console.log("existingProjectNames object in the local storage!");
    existingProjectNames = JSON.parse(localStorage.getItem("existingProjectNames")); 
    console.log("existing project names:");
    console.log(existingProjectNames);
} 

// Assume that a new todo list is created and saved in the local storage
let title = "The book review"; 
let description = "I am starting a book review.";
let dueDate = "10.04.2024";
let priority = "high"; 
let ownerProject = "BookReview";
// todo is created
let todo = (0,_todoListModule__WEBPACK_IMPORTED_MODULE_0__.createTodoList)(title, description, dueDate, priority, ownerProject); 
// storage name of the todo is determined by the programmer
let storageName = ownerProject + "-" + title; 
console.log("the first todo");
console.log(todo); 
console.log("existing project names:"); 
console.log(existingProjectNames); 
// is the project already existing?
let index = existingProjectNames.projectNames.indexOf(ownerProject); 
if (index === -1) { // the project is new
    // Hence, create it
    const newProject = (0,_projectModule__WEBPACK_IMPORTED_MODULE_1__.createProject)(ownerProject); 
    // save it in the local storage
    (0,_projectModule__WEBPACK_IMPORTED_MODULE_1__.saveProject)(newProject); 
    // register it to the existing project names
    (0,_projectModule__WEBPACK_IMPORTED_MODULE_1__.addToExistingProjectNames)(newProject);
} 
// the todo is stored in the storage
(0,_todoListModule__WEBPACK_IMPORTED_MODULE_0__.saveTodoList)(storageName, todo); 

// register the new todo list to the owner project
let ownerProjectObject = (0,_projectModule__WEBPACK_IMPORTED_MODULE_1__.getProject)(ownerProject); 
ownerProjectObject = (0,_projectModule__WEBPACK_IMPORTED_MODULE_1__.addTodoListName)(ownerProjectObject, title); 
(0,_projectModule__WEBPACK_IMPORTED_MODULE_1__.saveProject)(ownerProjectObject);

existingProjectNames = JSON.parse(localStorage.getItem("existingProjectNames")); 
console.log("existing project names after the project creation:");
console.log(existingProjectNames); 
let theOwnerProject = (0,_projectModule__WEBPACK_IMPORTED_MODULE_1__.getProject)(ownerProject); 
console.log("the owner project of the first todo:");
console.log(theOwnerProject); 

// Assume that a new todo list is created and saved in an existing project 
title = "The review edit"; 
description = "I am editing the book review.";
dueDate = "10.05.2024";
priority = "high"; 
ownerProject = "BookReview";
// todo is created
todo = (0,_todoListModule__WEBPACK_IMPORTED_MODULE_0__.createTodoList)(title, description, dueDate, priority, ownerProject); 
// storage name of the todo is determined by the programmer
storageName = ownerProject + "-" + title; 
console.log("the second todo");
console.log(todo);
// the todo is stored in the storage
(0,_todoListModule__WEBPACK_IMPORTED_MODULE_0__.saveTodoList)(storageName, todo); 
// is the todo stored in the local storage? 
todo = (0,_todoListModule__WEBPACK_IMPORTED_MODULE_0__.getTodo)(storageName);
console.log("is the todo really stored in the local storage?"); 
console.log(todo);
console.log("existing project names:"); 
console.log(existingProjectNames); 
// is the project already existing?
index = existingProjectNames.projectNames.indexOf(ownerProject); 
if (index === -1) { // the project is new
    // Hence, create it
    const newProject = (0,_projectModule__WEBPACK_IMPORTED_MODULE_1__.createProject)(ownerProject); 
    // save it in the local storage
    (0,_projectModule__WEBPACK_IMPORTED_MODULE_1__.saveProject)(newProject); 
    // register it to the existing project names
    (0,_projectModule__WEBPACK_IMPORTED_MODULE_1__.addToExistingProjectNames)(newProject);
} 
// register the new todo list to the owner project 
ownerProjectObject = (0,_projectModule__WEBPACK_IMPORTED_MODULE_1__.getProject)(ownerProject); 
ownerProjectObject = (0,_projectModule__WEBPACK_IMPORTED_MODULE_1__.addTodoListName)(ownerProjectObject, title); 
(0,_projectModule__WEBPACK_IMPORTED_MODULE_1__.saveProject)(ownerProjectObject);

existingProjectNames = JSON.parse(localStorage.getItem("existingProjectNames")); 
console.log("existing project names:");
console.log(existingProjectNames); 
theOwnerProject = (0,_projectModule__WEBPACK_IMPORTED_MODULE_1__.getProject)(ownerProject); 
console.log("the owner project of the second todo:"); 
console.log(theOwnerProject); 

// a new project is created
const newProject2 = (0,_projectModule__WEBPACK_IMPORTED_MODULE_1__.createProject)("Edits"); 
// save it in the local storage
(0,_projectModule__WEBPACK_IMPORTED_MODULE_1__.saveProject)(newProject2); 
// register it to the existing project names
(0,_projectModule__WEBPACK_IMPORTED_MODULE_1__.addToExistingProjectNames)(newProject2); 
existingProjectNames = JSON.parse(localStorage.getItem("existingProjectNames")); 
console.log("existing project names:");
console.log(existingProjectNames); 

// update the storage name of the todo "The review edit" 
let previousOwnerProject = "BookReview"; 
let previousStorageName = previousOwnerProject+"-"+"The review edit";
let updatedTodo = (0,_todoListModule__WEBPACK_IMPORTED_MODULE_0__.updateTodoListStorageName)(previousStorageName, "Edits"); 
(0,_todoListModule__WEBPACK_IMPORTED_MODULE_0__.deleteTodoList)(previousStorageName); 
let previousOwnerProjectObject = (0,_projectModule__WEBPACK_IMPORTED_MODULE_1__.getProject)(previousOwnerProject);
previousOwnerProjectObject = (0,_projectModule__WEBPACK_IMPORTED_MODULE_1__.removeTodoListName)(
    previousOwnerProjectObject, previousStorageName); 
(0,_projectModule__WEBPACK_IMPORTED_MODULE_1__.saveProject)(previousOwnerProjectObject); 
(0,_todoListModule__WEBPACK_IMPORTED_MODULE_0__.saveTodoList)("Edits"+"-"+"The review edit", updatedTodo); 

// add the todo to the content of the "Edits" project 
ownerProjectObject = (0,_projectModule__WEBPACK_IMPORTED_MODULE_1__.getProject)("Edits"); 
ownerProjectObject = (0,_projectModule__WEBPACK_IMPORTED_MODULE_1__.addTodoListName)(ownerProjectObject, "The review edit"); 
(0,_projectModule__WEBPACK_IMPORTED_MODULE_1__.saveProject)(ownerProjectObject);
// Has updateTodoListStorageName function worked correctly?
todo = (0,_todoListModule__WEBPACK_IMPORTED_MODULE_0__.getTodo)("Edits-The review edit");
console.log("is the todo really stored in the local storage?"); 
console.log(todo); 
// it is checked if the todo is added to the "Edits" project
theOwnerProject = (0,_projectModule__WEBPACK_IMPORTED_MODULE_1__.getProject)("Edits"); 
console.log("the project to which the second todo is added:"); 
console.log(theOwnerProject); 

// the title of the todo "Edits-The review edit" is to be updated to the new title 
// "Edits-The review of the edit" 
todo = (0,_todoListModule__WEBPACK_IMPORTED_MODULE_0__.getTodo)("Edits-The review edit"); 
todo = (0,_todoListModule__WEBPACK_IMPORTED_MODULE_0__.updateTodoListTitle)(todo, "The review of the edit");
(0,_todoListModule__WEBPACK_IMPORTED_MODULE_0__.saveTodoList)("Edits-The review edit", todo); 
// Has updateTodoListTitle function worked correctly?
todo = (0,_todoListModule__WEBPACK_IMPORTED_MODULE_0__.getTodo)("Edits-The review edit");
console.log("is the todo title updated to 'The review of the edit'?"); 
console.log(todo); 

// the description of the todo is to be updated 
description = "The book review is to be edited.";
todo = (0,_todoListModule__WEBPACK_IMPORTED_MODULE_0__.getTodo)("Edits-The review edit"); 
todo = (0,_todoListModule__WEBPACK_IMPORTED_MODULE_0__.updateTodoListDescription)(todo, description);
(0,_todoListModule__WEBPACK_IMPORTED_MODULE_0__.saveTodoList)("Edits-The review edit", todo); 
// Has updateTodoListDescription function worked correctly?
todo = (0,_todoListModule__WEBPACK_IMPORTED_MODULE_0__.getTodo)("Edits-The review edit");
console.log("is the todo description updated properly?"); 
console.log(todo); 

// the due date of the todo is to be updated 
dueDate = "11.05.2024"; 
todo = (0,_todoListModule__WEBPACK_IMPORTED_MODULE_0__.getTodo)("Edits-The review edit"); 
todo = (0,_todoListModule__WEBPACK_IMPORTED_MODULE_0__.updateTodoListDueDate)(todo, dueDate);
(0,_todoListModule__WEBPACK_IMPORTED_MODULE_0__.saveTodoList)("Edits-The review edit", todo); 
// Has updateTodoListDueDate function worked correctly?
todo = (0,_todoListModule__WEBPACK_IMPORTED_MODULE_0__.getTodo)("Edits-The review edit");
console.log("is the todo description updated properly?"); 
console.log(todo); 

// the priority of the todo is to be updated 
priority = "very high"; 
todo = (0,_todoListModule__WEBPACK_IMPORTED_MODULE_0__.getTodo)("Edits-The review edit"); 
todo = (0,_todoListModule__WEBPACK_IMPORTED_MODULE_0__.updateTodoListPriority)(todo, priority);
(0,_todoListModule__WEBPACK_IMPORTED_MODULE_0__.saveTodoList)("Edits-The review edit", todo); 
// Has updateTodoListPriority function worked correctly?
todo = (0,_todoListModule__WEBPACK_IMPORTED_MODULE_0__.getTodo)("Edits-The review edit");
console.log("is the todo priority updated properly?"); 
console.log(todo); 

// a new project is created 
// is the project already existing? 
const newProjectName = "Writings"; 
index = existingProjectNames.projectNames.indexOf(newProjectName); 
if (index === -1) { // the project is new
    // Hence, create it
    const newProject = (0,_projectModule__WEBPACK_IMPORTED_MODULE_1__.createProject)(newProjectName); 
    // save it in the local storage
    (0,_projectModule__WEBPACK_IMPORTED_MODULE_1__.saveProject)(newProject); 
    // register it to the existing project names
    (0,_projectModule__WEBPACK_IMPORTED_MODULE_1__.addToExistingProjectNames)(newProject);
}  
existingProjectNames = JSON.parse(localStorage.getItem("existingProjectNames")); 
console.log("existing project names:");
console.log(existingProjectNames); 

// deleteProject is tested
(0,_projectModule__WEBPACK_IMPORTED_MODULE_1__.deleteProject)(newProjectName); 
console.log((0,_projectModule__WEBPACK_IMPORTED_MODULE_1__.getProject)(newProjectName)); 

// removeFromExistingProjectNames is tested 
existingProjectNames = JSON.parse(localStorage.getItem("existingProjectNames")); 
console.log("existing project names:");
console.log(existingProjectNames); 
(0,_projectModule__WEBPACK_IMPORTED_MODULE_1__.removeFromExistingProjectNames)(newProjectName); 
existingProjectNames = JSON.parse(localStorage.getItem("existingProjectNames")); 
console.log("existing project names:");
console.log(existingProjectNames); 

(0,_mainWindowsModule__WEBPACK_IMPORTED_MODULE_2__.setupMainFrames)(); 
(0,_mainWindowsModule__WEBPACK_IMPORTED_MODULE_2__.implementProjectNamesList)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTyx3REFBTztBQUNkLE9BQU8sMEVBQXlCO0FBQ2hDLDZEQUFZO0FBQ1o7QUFDQSxPQUFPLHdEQUFPO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTyx3REFBTztBQUNkLE9BQU8sc0VBQXFCO0FBQzVCLDZEQUFZO0FBQ1o7QUFDQSxPQUFPLHdEQUFPO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTyx3REFBTztBQUNkLE9BQU8sdUVBQXNCO0FBQzdCLDZEQUFZO0FBQ1o7QUFDQSxPQUFPLHdEQUFPO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBLHVCQUF1Qiw2REFBYTtBQUNwQztBQUNBLElBQUksMkRBQVc7QUFDZjtBQUNBLElBQUkseUVBQXlCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkRBQWE7QUFDYixZQUFZLDBEQUFVOztBQUV0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhFQUE4QjtBQUM5QjtBQUNBO0FBQ0E7O0FBRUEsbUVBQWU7QUFDZiw2RUFBeUIsRyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL21haW5XaW5kb3dzTW9kdWxlLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3Byb2plY3RNb2R1bGUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvdG9kb0xpc3RNb2R1bGUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvdG9kb1dpbmRvd01vZHVsZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgaHRtbCB7IFxuICAgIC8qIHJvb3QgZm9udCBzaXplIGlzIDE2cHggKi9cbiAgICBmb250LXNpemU6IDE2cHg7XG59IFxuXG4udXNlcldpbmRvdyB7IFxuICAgIC8qIHVzZXJXaW5kb3cgY2xhc3MgaGFzIGEgZmxleCBsYXlvdXQgKi8gXG4gICAgZGlzcGxheTogZmxleDsgXG4gICAgLyogdGhlIGNsYXNzIGltcGxpZXMgYSB3aWR0aCBlcXVhbCB0byB0aGUgaGFsZiBvZiB0aGUgdmlld3BvcnQgd2lkdGggKi9cbiAgICB3aWR0aDogNTB2dzsgXG4gICAgLyogdGhlIGNsYXNzIGltcGxpZXMgYSBoZWdpaHQgZXF1YWwgdG8gdGhlIHNldm50eSBwZXJjZW50IG9mIHRoZSB2aWV3cG9ydCBcbiAgICBoZWlnaHQgKi8gXG4gICAgaGVpZ2h0OiA3MHZoOyBcbiAgICAvKiBzdHlsaW5nIG9mIHRoZSBib3JkZXIgb2YgdGhpcyBjbGFzcyBlbGVtZW50cyAqL1xuICAgIGJvcmRlci1zdHlsZTogZG91YmxlO1xuICAgIGJvcmRlci13aWR0aDogNXB4OyBcbiAgICBib3JkZXItY29sb3I6IGJsdWU7IFxuICAgIC8qIHRoZSBnYXAgYmV0d2VlbiB0aGUgaXRlbXMgKi9cbiAgICBnYXA6IDAuMnJlbTtcbn0gXG5cbi5wcm9qZWN0TmFtZXNXaW5kb3cge1xuICAgIC8qIGEgc29saWQgcmVkIGJvcmRlciBvZiAzcHggdGhpY2sqLyBcbiAgICBib3JkZXI6IHNvbGlkIDNweCByZWQ7IFxuICAgIC8qIHRoZSB3aW5kb3cgaGFzIGEgMSB1bml0IHdpZHRoIGluIGl0cyBwYXJlbnQgZmxleCBjb250YWluZXIqLyBcbiAgICBmbGV4OiAxOyBcbiAgICAvKiBtYXJnaW5zIG9mIHRoZSBwcm9qZWN0IG5hbWVzIHdpbmRvdyBhcmUgc2V0ICovXG4gICAgbWFyZ2luLWxlZnQ6IDAuMnJlbTsgXG4gICAgbWFyZ2luLXRvcDogMC4ycmVtOyBcbiAgICBtYXJnaW4tYm90dG9tOiAwLjJyZW07IFxuICAgIGRpc3BsYXk6IGZsZXg7IFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59IFxuXG4ucHJvamVjdE5hbWVzV2luZG93SGVhZGVyIHtcbiAgICBmb250LXdlaWdodDogYm9sZDsgXG4gICAgcGFkZGluZzogMC41cmVtO1xufSBcblxuLnByb2plY3ROYW1lc0xpc3QgeyBcbiAgICAvKiBwcm9qZWN0IG5hbWVzIGxpc3QgdGFrZXMgdXAgdGhlIHNwYWNlIGxlZnQgYnkgdGhlIG1haW4gc2l6ZSBvZiB0aGUgaGVhZGVyKi9cbiAgICBmbGV4LWdyb3c6IDE7IFxuICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xufVxuXG4vKiB0aGUgY2xhc3Mgb2YgdGhlIGRpdiBpbiB3aGljaCBhIHByb2plY3QgbmFtZSBhbmQgaXRzIHRvZG9zIGFyZSB3cml0dGVuICovXG4ucHJvamVjdE5hbWVMaXN0SXRlbSB7XG4gICAgcGFkZGluZy1ib3R0b206IDAuM3JlbTtcbn0gXG5cbi8qIHRoZSBjbGFzcyBmb3IgcHJvamVjdCBuYW1lIGFuZCBjdXJzb3Igc3R5bGluZyAqL1xuLnByb2plY3ROYW1lOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkOyBcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59IFxuXG4udG9kb1RpdGxlIHtcbiAgICBmb250LXdlaWdodDogYm9sZDsgXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xufVxuXG4vKiB0aGUgY2xhc3Mgb2YgdGhlIGRpdiB0byBob2xkIHRoZSBjbGFzcyBuYW1lIHNwYW4gZWxlbWVudCovXG4udG9kb0xpc3ROYW1lRGl2IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG59IFxuXG4vKiB0b2RvIG5hbWUgc3BhbiBlbGVtZW50IGlzIHN0eWxlZCovXG4udG9kb0xpc3ROYW1lOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbnllbGxvdzsgXG4gICAgY3Vyc29yOiBwb2ludGVyOyBcbn1cblxuLnRvZG9zV2luZG93IHtcbiAgICAvKiBhIHNvbGlkIG9yYW5nZSBib3JkZXIgb2YgM3B4IHRoaWNrKi8gXG4gICAgYm9yZGVyOiBzb2xpZCAzcHggb3JhbmdlOyBcbiAgICAvKiB0aGUgd2luZG93IGhhcyBhIDIgdW5pdCB3aWR0aCBpbiBpdHMgcGFyZW50IGZsZXggY29udGFpbmVyKi8gXG4gICAgZmxleDogMjsgXG4gICAgLyogbWFyZ2lucyBvZiB0aGUgdG9kb3Mgd2luZG93IGFyZSBzZXQgKi9cbiAgICBtYXJnaW4tcmlnaHQ6IDAuMnJlbTsgXG4gICAgbWFyZ2luLXRvcDogMC4ycmVtOyBcbiAgICBtYXJnaW4tYm90dG9tOiAwLjJyZW07XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksMkJBQTJCO0lBQzNCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx1Q0FBdUM7SUFDdkMsYUFBYTtJQUNiLHNFQUFzRTtJQUN0RSxXQUFXO0lBQ1g7WUFDUTtJQUNSLFlBQVk7SUFDWixpREFBaUQ7SUFDakQsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsOEJBQThCO0lBQzlCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyxxQkFBcUI7SUFDckIsOERBQThEO0lBQzlELE9BQU87SUFDUCxnREFBZ0Q7SUFDaEQsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksNkVBQTZFO0lBQzdFLFlBQVk7SUFDWixvQkFBb0I7QUFDeEI7O0FBRUEsMkVBQTJFO0FBQzNFO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBLGtEQUFrRDtBQUNsRDtJQUNJLHNCQUFzQjtJQUN0QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQSw0REFBNEQ7QUFDNUQ7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUEsb0NBQW9DO0FBQ3BDO0lBQ0ksNkJBQTZCO0lBQzdCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxzQ0FBc0M7SUFDdEMsd0JBQXdCO0lBQ3hCLDhEQUE4RDtJQUM5RCxPQUFPO0lBQ1Asd0NBQXdDO0lBQ3hDLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwgeyBcXG4gICAgLyogcm9vdCBmb250IHNpemUgaXMgMTZweCAqL1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufSBcXG5cXG4udXNlcldpbmRvdyB7IFxcbiAgICAvKiB1c2VyV2luZG93IGNsYXNzIGhhcyBhIGZsZXggbGF5b3V0ICovIFxcbiAgICBkaXNwbGF5OiBmbGV4OyBcXG4gICAgLyogdGhlIGNsYXNzIGltcGxpZXMgYSB3aWR0aCBlcXVhbCB0byB0aGUgaGFsZiBvZiB0aGUgdmlld3BvcnQgd2lkdGggKi9cXG4gICAgd2lkdGg6IDUwdnc7IFxcbiAgICAvKiB0aGUgY2xhc3MgaW1wbGllcyBhIGhlZ2lodCBlcXVhbCB0byB0aGUgc2V2bnR5IHBlcmNlbnQgb2YgdGhlIHZpZXdwb3J0IFxcbiAgICBoZWlnaHQgKi8gXFxuICAgIGhlaWdodDogNzB2aDsgXFxuICAgIC8qIHN0eWxpbmcgb2YgdGhlIGJvcmRlciBvZiB0aGlzIGNsYXNzIGVsZW1lbnRzICovXFxuICAgIGJvcmRlci1zdHlsZTogZG91YmxlO1xcbiAgICBib3JkZXItd2lkdGg6IDVweDsgXFxuICAgIGJvcmRlci1jb2xvcjogYmx1ZTsgXFxuICAgIC8qIHRoZSBnYXAgYmV0d2VlbiB0aGUgaXRlbXMgKi9cXG4gICAgZ2FwOiAwLjJyZW07XFxufSBcXG5cXG4ucHJvamVjdE5hbWVzV2luZG93IHtcXG4gICAgLyogYSBzb2xpZCByZWQgYm9yZGVyIG9mIDNweCB0aGljayovIFxcbiAgICBib3JkZXI6IHNvbGlkIDNweCByZWQ7IFxcbiAgICAvKiB0aGUgd2luZG93IGhhcyBhIDEgdW5pdCB3aWR0aCBpbiBpdHMgcGFyZW50IGZsZXggY29udGFpbmVyKi8gXFxuICAgIGZsZXg6IDE7IFxcbiAgICAvKiBtYXJnaW5zIG9mIHRoZSBwcm9qZWN0IG5hbWVzIHdpbmRvdyBhcmUgc2V0ICovXFxuICAgIG1hcmdpbi1sZWZ0OiAwLjJyZW07IFxcbiAgICBtYXJnaW4tdG9wOiAwLjJyZW07IFxcbiAgICBtYXJnaW4tYm90dG9tOiAwLjJyZW07IFxcbiAgICBkaXNwbGF5OiBmbGV4OyBcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59IFxcblxcbi5wcm9qZWN0TmFtZXNXaW5kb3dIZWFkZXIge1xcbiAgICBmb250LXdlaWdodDogYm9sZDsgXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG59IFxcblxcbi5wcm9qZWN0TmFtZXNMaXN0IHsgXFxuICAgIC8qIHByb2plY3QgbmFtZXMgbGlzdCB0YWtlcyB1cCB0aGUgc3BhY2UgbGVmdCBieSB0aGUgbWFpbiBzaXplIG9mIHRoZSBoZWFkZXIqL1xcbiAgICBmbGV4LWdyb3c6IDE7IFxcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXG59XFxuXFxuLyogdGhlIGNsYXNzIG9mIHRoZSBkaXYgaW4gd2hpY2ggYSBwcm9qZWN0IG5hbWUgYW5kIGl0cyB0b2RvcyBhcmUgd3JpdHRlbiAqL1xcbi5wcm9qZWN0TmFtZUxpc3RJdGVtIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDAuM3JlbTtcXG59IFxcblxcbi8qIHRoZSBjbGFzcyBmb3IgcHJvamVjdCBuYW1lIGFuZCBjdXJzb3Igc3R5bGluZyAqL1xcbi5wcm9qZWN0TmFtZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGQ7IFxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufSBcXG5cXG4udG9kb1RpdGxlIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IFxcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxufVxcblxcbi8qIHRoZSBjbGFzcyBvZiB0aGUgZGl2IHRvIGhvbGQgdGhlIGNsYXNzIG5hbWUgc3BhbiBlbGVtZW50Ki9cXG4udG9kb0xpc3ROYW1lRGl2IHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbn0gXFxuXFxuLyogdG9kbyBuYW1lIHNwYW4gZWxlbWVudCBpcyBzdHlsZWQqL1xcbi50b2RvTGlzdE5hbWU6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbnllbGxvdzsgXFxuICAgIGN1cnNvcjogcG9pbnRlcjsgXFxufVxcblxcbi50b2Rvc1dpbmRvdyB7XFxuICAgIC8qIGEgc29saWQgb3JhbmdlIGJvcmRlciBvZiAzcHggdGhpY2sqLyBcXG4gICAgYm9yZGVyOiBzb2xpZCAzcHggb3JhbmdlOyBcXG4gICAgLyogdGhlIHdpbmRvdyBoYXMgYSAyIHVuaXQgd2lkdGggaW4gaXRzIHBhcmVudCBmbGV4IGNvbnRhaW5lciovIFxcbiAgICBmbGV4OiAyOyBcXG4gICAgLyogbWFyZ2lucyBvZiB0aGUgdG9kb3Mgd2luZG93IGFyZSBzZXQgKi9cXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjJyZW07IFxcbiAgICBtYXJnaW4tdG9wOiAwLjJyZW07IFxcbiAgICBtYXJnaW4tYm90dG9tOiAwLjJyZW07XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJzsgXG5pbXBvcnQgeyBnZXRQcm9qZWN0IH0gZnJvbSAnLi9wcm9qZWN0TW9kdWxlJzsgXG5pbXBvcnQgeyBwcmludFRvZG8gfSBmcm9tICcuL3RvZG9XaW5kb3dNb2R1bGUnO1xuXG4vLyB0aGUgZnVuY3Rpb24gZm9yIHNldHRpbmcgdXAgdGhlIG1haW4gZnJhbWVzIG9mIHRoZSB1c2VyIGludGVyZmFjZS4gXG5mdW5jdGlvbiBzZXR1cE1haW5GcmFtZXMoKSB7XG4gICAgLy8gdGhlIHdpbmRvdyB3aXRoIHdoaWNoIHRoZSB1c2VyIGlzIGdvaW5nIHRvIGludGVyYWN0IGlzIGNyZWF0ZWQuXG4gICAgY29uc3QgdXNlcldpbmRvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IFxuICAgIC8vIHRoZSBjbGFzcyBvZiB0aGUgdXNlciB3aW5kb3cgaXMgdXNlcldpbmRvd1xuICAgIHVzZXJXaW5kb3cuY2xhc3NOYW1lID0gXCJ1c2VyV2luZG93XCI7IFxuICAgIC8vIHVzZXJXaW5kb3cgaXMgYWRkZWQgdG8gdGhlIHBhZ2VcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHVzZXJXaW5kb3cpOyBcblxuICAgIC8vIHRoZSB3aW5kb3cgaW4gd2hpY2ggcHJvamVjdCBuYW1lcyBhcmUgbGlzdGVkIFxuICAgIGNvbnN0IHByb2plY3ROYW1lc1dpbmRvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IFxuICAgIC8vIHRoZSBjbGFzcyBvZiB0aGUgcHJvamVjdCBuYW1lcyB3aW5kb3cgaXMgcHJvamVjdE5hbWVzV2luZG93IFxuICAgIHByb2plY3ROYW1lc1dpbmRvdy5jbGFzc05hbWUgPSBcInByb2plY3ROYW1lc1dpbmRvd1wiOyBcbiAgICAvLyBwcm9qZWN0IG5hbWVzIHdpbmRvdyBpcyBhZGRlZCB0byB0aGUgdXNlciB3aW5kb3dcbiAgICB1c2VyV2luZG93LmFwcGVuZENoaWxkKHByb2plY3ROYW1lc1dpbmRvdyk7IFxuXG4gICAgLy8gdGhlIGRpdiBpbiB3aGljaCB0aGUgaGVhZGVyIG9mIHRoZSBwcm9qZWN0IG5hbWVzIHdpbmRvdyBpcyB3cml0dGVuIFxuICAgIGNvbnN0IHByb2plY3ROYW1lc1dpbmRvd0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IFxuICAgIC8vIHRoZSBjbGFzcyBvZiB0aGUgcHJvamVjdCBuYW1lcyB3aW5kb3cgaGVhZGVyIGRpdiBcbiAgICBwcm9qZWN0TmFtZXNXaW5kb3dIZWFkZXIuY2xhc3NOYW1lID0gXCJwcm9qZWN0TmFtZXNXaW5kb3dIZWFkZXJcIjsgXG4gICAgLy8gcHJvamVjdCBuYW1lcyB3aW5kb3cgaGVhZGVyIGlzIHdyaXR0ZW5cbiAgICBwcm9qZWN0TmFtZXNXaW5kb3dIZWFkZXIudGV4dENvbnRlbnQgPSBcIlBST0pFQ1RTXCI7XG4gICAgLy8gcHJvamVjdCBuYW1lcyB3aW5kb3cgaGVhZGVyIGlzIGFkZGVkIHRvIHRoZSBwcm9qZWN0IG5hbWVzIHdpbmRvd1xuICAgIHByb2plY3ROYW1lc1dpbmRvdy5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZXNXaW5kb3dIZWFkZXIpOyBcblxuICAgIC8vIHRoZSBkaXYgaW4gd2hpY2ggdGhlIGxpc3Qgb2YgcHJvamVjdCBuYW1lcyBzdGFuZHMgXG4gICAgY29uc3QgcHJvamVjdE5hbWVzTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IFxuICAgIC8vIHRoZSBjbGFzcyBvZiB0aGUgcHJvamVjdCBuYW1lcyBsaXN0IGRpdiBcbiAgICBwcm9qZWN0TmFtZXNMaXN0LmNsYXNzTmFtZSA9IFwicHJvamVjdE5hbWVzTGlzdFwiOyBcbiAgICAvLyBwcm9qZWN0IG5hbWVzIGxpc3QgaXMgYWRkZWQgdG8gdGhlIHByb2plY3QgbmFtZXMgd2luZG93IFxuICAgIHByb2plY3ROYW1lc1dpbmRvdy5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZXNMaXN0KTtcblxuICAgIC8vIHRoZSB3aW5kb3cgaW4gd2hpY2ggdGhlIHRvZG9zIGFyZSBzaG93biBcbiAgICBjb25zdCB0b2Rvc1dpbmRvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IFxuICAgIC8vIHRoZSBjbGFzcyBvZiB0aGUgdG9kb3Mgd2luZG93IGlzIHRvZG9zV2luZG93IFxuICAgIHRvZG9zV2luZG93LmNsYXNzTmFtZSA9IFwidG9kb3NXaW5kb3dcIjsgXG4gICAgLy8gdG9kb3Mgd2luZG93IGlzIGFkZGVkIHRvIHRoZSB1c2VyIHdpbmRvdyBcbiAgICB1c2VyV2luZG93LmFwcGVuZENoaWxkKHRvZG9zV2luZG93KTtcbn0gXG5cbmZ1bmN0aW9uIHNocmlua1Byb2plY3ROYW1lKCkge1xuICAgIHdoaWxlICh0aGlzLnBhcmVudE5vZGUuY2hpbGROb2Rlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgIHRoaXMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLnBhcmVudE5vZGUubGFzdENoaWxkKTtcbiAgICB9XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXhwYW5kUHJvamVjdE5hbWUsIHtvbmNlOiB0cnVlfSk7XG59XG5cbmZ1bmN0aW9uIGV4cGFuZFByb2plY3ROYW1lKCkge1xuICAgIGNvbnN0IHByb2plY3RPYmplY3QgPSBnZXRQcm9qZWN0KHRoaXMudGV4dENvbnRlbnQpOyBcbiAgICBjb25zdCBwcm9qZWN0QXJyYXkgPSBwcm9qZWN0T2JqZWN0LnByb2plY3RDb250ZW50OyBcbiAgICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyBcbiAgICB0b2RvVGl0bGUudGV4dENvbnRlbnQgPSBcIlRvZG9zXCI7XG4gICAgdG9kb1RpdGxlLmNsYXNzTmFtZSA9IFwidG9kb1RpdGxlXCI7IFxuICAgIHRoaXMucGFyZW50Tm9kZS5hcHBlbmRDaGlsZCh0b2RvVGl0bGUpO1xuICAgIGZvciAobGV0IGk9MDsgaSA8IHByb2plY3RBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB0b2RvTmFtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IFxuICAgICAgICBjb25zdCB0b2RvTmFtZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTsgXG4gICAgICAgIHRvZG9OYW1lU3Bhbi50ZXh0Q29udGVudCA9IHByb2plY3RBcnJheVtpXTtcbiAgICAgICAgdG9kb05hbWVTcGFuLmNsYXNzTmFtZSA9IFwidG9kb0xpc3ROYW1lXCI7IFxuICAgICAgICB0b2RvTmFtZVNwYW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHByaW50VG9kbywge29uY2U6IHRydWV9KTtcbiAgICAgICAgdG9kb05hbWVEaXYuYXBwZW5kQ2hpbGQodG9kb05hbWVTcGFuKTsgXG4gICAgICAgIHRvZG9OYW1lRGl2LmNsYXNzTmFtZSA9IFwidG9kb0xpc3ROYW1lRGl2XCI7IFxuICAgICAgICB0aGlzLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQodG9kb05hbWVEaXYpO1xuICAgIH0gXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hyaW5rUHJvamVjdE5hbWUsIHtvbmNlOiB0cnVlfSk7XG59XG5cbmZ1bmN0aW9uIGltcGxlbWVudFByb2plY3ROYW1lc0xpc3QoKSB7IFxuICAgIC8vIGV4aXN0aW5nIHByb2plY3QgbmFtZXMgaXMgZmV0Y2hlZCBmcm9tIHRoZSBsb2NhbCBzdG9yYWdlXG4gICAgY29uc3QgZXhpc3RpbmdQcm9qZWN0TmFtZXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZXhpc3RpbmdQcm9qZWN0TmFtZXNcIikpOyBcbiAgICAvLyBleGlzdGluZyBwcm9qZWN0IG5hbWVzIGFycmF5IGFzc2lnbmVkIHRvIGEgY29uc3RhbnRcbiAgICBjb25zdCBuYW1lc0FycmF5ID0gZXhpc3RpbmdQcm9qZWN0TmFtZXMucHJvamVjdE5hbWVzOyBcbiAgICAvLyBhY2Nlc3MgdG8gdGhlIHByb2plY3QgbmFtZXMgbGlzdCBkaXZcbiAgICBjb25zdCBwcm9qZWN0TmFtZXNMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInByb2plY3ROYW1lc0xpc3RcIilbMF07IFxuICAgIC8vIGEgZGl2IGZvciBlYWNoIHByb2plY3QgbmFtZSBpcyBjcmVhdGVkIGFuZCBhZGRlZCB0byB0aGUgbGlzdCB3aW5kb3csIHRoZSBcbiAgICAvLyBwcm9qZWN0IG5hbWUgaXMgd3JpdHRlblxuICAgIGZvciAobGV0IGk9MDsgaSA8IG5hbWVzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgaXRlbURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IFxuICAgICAgICAvLyB0aGUgcHJvamVjdCBuYW1lIGlzIHdyaXR0ZW4gaW4gdGhlIHNwYW4gZWxlbWVudFxuICAgICAgICBjb25zdCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICBpdGVtTmFtZS50ZXh0Q29udGVudCA9IG5hbWVzQXJyYXlbaV07IFxuICAgICAgICBpdGVtTmFtZS5jbGFzc05hbWUgPSBcInByb2plY3ROYW1lXCI7XG4gICAgICAgIGl0ZW1EaXYuY2xhc3NOYW1lID0gXCJwcm9qZWN0TmFtZUxpc3RJdGVtXCI7IFxuICAgICAgICBpdGVtTmFtZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXhwYW5kUHJvamVjdE5hbWUsIHtvbmNlOiB0cnVlfSk7XG4gICAgICAgIGl0ZW1EaXYuYXBwZW5kQ2hpbGQoaXRlbU5hbWUpO1xuICAgICAgICBwcm9qZWN0TmFtZXNMaXN0LmFwcGVuZENoaWxkKGl0ZW1EaXYpOyBcbiAgICB9IFxufVxuXG5leHBvcnQgeyBzZXR1cE1haW5GcmFtZXMsIGltcGxlbWVudFByb2plY3ROYW1lc0xpc3QgfTsiLCIvLyBBIGZhY3RvcnkgZnVuY3Rpb24gdG8gY3JlYXRlIGEgcHJvamVjdCBvYmplY3QuIFxuLy8gcHJvamVjdE9iamVjdE5hbWU6IFRoZSBuYW1lIG9mIHRoZSBwcm9qZWN0IGVudGVyZWQgYnkgdGhlIHVzZXIuIFxuLy8gcHJvamVjdENvbnRlbnQ6IFRoZSB0b2RvIGxpc3RzIGNvbnRhaW5lZCBieSB0aGUgcHJvamVjdC5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QocHJvamVjdE9iamVjdE5hbWUpIHtcbiAgICAvLyB0aGUgY29udGVudCBvZiB0aGUgcHJvamVjdCBpcyBpbml0aWFsbHkgbm90aGluZy4gXG4gICAgY29uc3QgcHJvamVjdENvbnRlbnQgPSBbXTtcbiAgICByZXR1cm4geyBwcm9qZWN0T2JqZWN0TmFtZSwgcHJvamVjdENvbnRlbnQgfTtcbn0gXG5cbi8vIEEgZnVuY3Rpb24gdG8gZ2V0IGEgcHJvamVjdCBmcm9tIHRoZSBsb2NhbCBzdG9yYWdlXG4vLyBwcm9qZWN0T2JqZWN0TmFtZTogVGhlIG5hbWUgb2YgdGhlIHByb2plY3QuIFxuZnVuY3Rpb24gZ2V0UHJvamVjdChwcm9qZWN0T2JqZWN0TmFtZSkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByb2plY3RPYmplY3ROYW1lKSk7XG59XG5cbi8vIEEgZnVuY3Rpb24gdG8gYWRkIHRvIHRoZSBleGlzdGluZyBwcm9qZWN0IG5hbWVzLiBcbi8vIHRoZVByb2plY3RPYmplY3Q6IFRoZSBwcm9qZWN0IG9iamVjdCB0byBiZSBzYXZlZCB0byB0aGUgbG9jYWwgc3RvcmFnZS4gXG5mdW5jdGlvbiBhZGRUb0V4aXN0aW5nUHJvamVjdE5hbWVzKHRoZVByb2plY3RPYmplY3QpIHtcbiAgICBjb25zdCB0ZW1wT2JqZWN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImV4aXN0aW5nUHJvamVjdE5hbWVzXCIpKTsgXG4gICAgdGVtcE9iamVjdC5wcm9qZWN0TmFtZXMucHVzaCh0aGVQcm9qZWN0T2JqZWN0LnByb2plY3RPYmplY3ROYW1lKTsgXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJleGlzdGluZ1Byb2plY3ROYW1lc1wiLCBKU09OLnN0cmluZ2lmeSh0ZW1wT2JqZWN0KSk7XG59XG5cbi8vIEEgZnVuY3Rpb24gdG8gc2F2ZSB0aGUgcHJvamVjdCBvYmplY3QgdG8gdGhlIGxvY2FsIHN0b3JhZ2UuIFxuLy8gdGhlUHJvamVjdE9iamVjdDogVGhlIHByb2plY3Qgb2JqZWN0IHRvIGJlIHNhdmVkIHRvIHRoZSBsb2NhbCBzdG9yYWdlLiBcbmZ1bmN0aW9uIHNhdmVQcm9qZWN0KHRoZVByb2plY3RPYmplY3QpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGVQcm9qZWN0T2JqZWN0LnByb2plY3RPYmplY3ROYW1lLCBKU09OLnN0cmluZ2lmeSh0aGVQcm9qZWN0T2JqZWN0KSk7IFxufSBcblxuLy8gQSBmdW5jdGlvbiB0byB1cGRhdGUgdGhlIGNvbnRlbnQgb2YgYSBwcm9qZWN0IGJ5IGFkZGluZyBhIG5ldyB0b2RvIGxpc3QuXG4vLyBwcm9qZWN0T2JqZWN0TmFtZTogVGhlIG5hbWUgb2YgdGhlIHByb2plY3QuIFxuLy8gdG9kb0xpc3ROYW1lOiBUaGUgdG9kbyBsaXN0IHRvIGJlIGFkZGVkIHRvIHRoZSBjb250ZW50IG9mIHRoZSBwcm9qZWN0LiBcbmZ1bmN0aW9uIGFkZFRvZG9MaXN0TmFtZShwcm9qZWN0T2JqZWN0TmFtZSwgdG9kb0xpc3ROYW1lKSB7IFxuICAgIC8vIHRoZSBjb250ZW50IG9mIHRoZSBwcm9qZWN0IHVwZGF0ZWQgYnkgYWRkaW5nIHRoZSB0b2RvIGxpc3QuXG4gICAgcHJvamVjdE9iamVjdE5hbWUucHJvamVjdENvbnRlbnQucHVzaCh0b2RvTGlzdE5hbWUpOyBcbiAgICByZXR1cm4gcHJvamVjdE9iamVjdE5hbWU7XG59IFxuXG4vLyBBIGZ1bmN0aW9uIHRvIHVwZGF0ZSB0aGUgY29udGVudCBvZiBhIHByb2plY3QgYnkgcmVtb3ZpbmcgYSB0b2RvIGxpc3QuXG4vLyBwcm9qZWN0T2JqZWN0TmFtZTogVGhlIG5hbWUgb2YgdGhlIHByb2plY3QuIFxuLy8gdG9kb0xpc3ROYW1lOiBUaGUgdG9kbyBsaXN0IHRvIGJlIHJlbW92ZWQgZnJvbSB0aGUgY29udGVudCBvZiB0aGUgcHJvamVjdC4gXG5mdW5jdGlvbiByZW1vdmVUb2RvTGlzdE5hbWUocHJvamVjdE9iamVjdCwgdG9kb0xpc3ROYW1lKSB7IFxuICAgIC8vIHRoZSBpbmRleCBvZiB0aGUgdG9kbyBpcyBmb3VuZFxuICAgIGNvbnN0IGluZGV4ID0gcHJvamVjdE9iamVjdC5wcm9qZWN0Q29udGVudC5pbmRleE9mKHRvZG9MaXN0TmFtZSk7IFxuICAgIC8vIHRoZSB0b2RvIGlzIHJlbW92ZWRcbiAgICBwcm9qZWN0T2JqZWN0LnByb2plY3RDb250ZW50LnNwbGljZShpbmRleCwgMSk7IFxuICAgIHJldHVybiBwcm9qZWN0T2JqZWN0O1xufSBcblxuLy8gQSBmdW5jdGlvbiB0byByZW1vdmUgYSBwcm9qZWN0IG5hbWUgZnJvbSB0aGUgZXhpc3RpbmcgcHJvamVjdCBuYW1lcy4gXG4vLyB0aGVQcm9qZWN0TmFtZTogVGhlIHByb2plY3QgbmFtZSB0byBiZSByZW1vdmVkLlxuZnVuY3Rpb24gcmVtb3ZlRnJvbUV4aXN0aW5nUHJvamVjdE5hbWVzKHRoZVByb2plY3ROYW1lKSB7XG4gICAgY29uc3QgdGVtcE9iamVjdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJleGlzdGluZ1Byb2plY3ROYW1lc1wiKSk7IFxuICAgIC8vIHRoZSBpbmRleCBvZiB0aGUgcHJvamVjdCBuYW1lIGlzIGZvdW5kXG4gICAgY29uc3QgaW5kZXggPSB0ZW1wT2JqZWN0LnByb2plY3ROYW1lcy5pbmRleE9mKHRoZVByb2plY3ROYW1lKTsgXG4gICAgLy8gdGhlIHByb2plY3QgbmFtZSBpcyByZW1vdmVkXG4gICAgdGVtcE9iamVjdC5wcm9qZWN0TmFtZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImV4aXN0aW5nUHJvamVjdE5hbWVzXCIsIEpTT04uc3RyaW5naWZ5KHRlbXBPYmplY3QpKTtcbn1cblxuLy8gQSBmdW5jdGlvbiB0byByZW1vdmUgYSBwcm9qZWN0IGZyb20gdGhlIGxvY2FsIHN0b3JhZ2UuIFxuLy8gcHJvamVjdE9iamVjdE5hbWU6IFRoZSBuYW1lIG9mIHRoZSBwcm9qZWN0LiBcbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QocHJvamVjdE9iamVjdE5hbWUpIHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShwcm9qZWN0T2JqZWN0TmFtZSk7IFxufVxuXG5leHBvcnQgeyBjcmVhdGVQcm9qZWN0LCBnZXRQcm9qZWN0LCBhZGRUb0V4aXN0aW5nUHJvamVjdE5hbWVzLCBzYXZlUHJvamVjdCwgXG4gICAgYWRkVG9kb0xpc3ROYW1lLCByZW1vdmVUb2RvTGlzdE5hbWUsIHJlbW92ZUZyb21FeGlzdGluZ1Byb2plY3ROYW1lcywgXG4gICAgZGVsZXRlUHJvamVjdCB9OyIsIi8vIHRoZSBmYWN0b3J5IGZ1bmN0aW9uIHRvIGNyZWF0ZSBhIHRvZG8gbGlzdC4gXG4vLyB0aXRsZTogVGhlIHRpdGxlIG9mIHRoZSB0b2RvIGxpc3QsIGVudGVyZWQgYnkgdGhlIHVzZXIuXG4vLyBkZXNjcmlwdGlvbjogVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSB0b2RvIGxpc3QsIGVudGVyZWQgYnkgdGhlIHVzZXIuIFxuLy8gZHVlRGF0ZTogVGhlIGR1ZSBkYXRlIG9mIHRoZSB0b2RvIGxpc3QsIGVudGVyZWQgYnkgdGhlIHVzZXIuIFxuLy8gcHJpb3JpdHk6IFRoZSBwcmlvcml0eSBvZiB0aGUgdG9kbyBsaXN0LCBlbnRlcmVkIGJ5IHRoZSB1c2VyLiBcbi8vIG93bmVyUHJvamVjdDogVGhlIHByb2plY3Qgd2hpY2ggb3ducyB0aGUgdG9kbyBsaXN0LlxuZnVuY3Rpb24gY3JlYXRlVG9kb0xpc3QodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgb3duZXJQcm9qZWN0KSB7XG4gICAgcmV0dXJuIHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgb3duZXJQcm9qZWN0IH07XG59XG5cbi8vIHRoZSBmdW5jdGlvbiB0byBzYXZlIGEgdG9kbyBsaXN0IGluIGEgcHJvamVjdC4gXG4vLyB0aGVUb2RvT2JqZWN0OiBUaGUgdG9kbyBvYmplY3QgdG8gYmUgc2F2ZWQgaW4gdGhlIGxvY2FsIHN0b3JhZ2UuIFxuLy8gVGhlIG5hbWUgb2YgdGhlIHRvZG8gaW4gdGhlIGxvY2FsIHN0b3JhZ2UsIGRldGVybWluZWQgYnkgdGhlIHByb2dyYW1tZXIuIFxuLy8gdGhlUHJvamVjdE5hbWU6IFRoZSBuYW1lIG9mIHRoZSBwcm9qZWN0IHRoZSBjb250ZW50IG9mIHdoaWNoIGlzIHRvIGJlIHVwZGF0ZWQgXG4vLyBieSBhZGRpbmcgdGhlIG5ldyB0b2RvIGxpc3QuXG5mdW5jdGlvbiBzYXZlVG9kb0xpc3QodG9kb1N0b3JhZ2VOYW1lLCB0b2RvT2JqZWN0KSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odG9kb1N0b3JhZ2VOYW1lLCBKU09OLnN0cmluZ2lmeSh0b2RvT2JqZWN0KSk7IFxufVxuXG4vLyB0aGUgZnVuY3Rpb24gdG8gZ2V0IGEgdG9kbyBsaXN0IFxuLy8gdG9kb1N0b3JhZ2VOYW1lOiBUaGUgc3RvcmFnZSBuYW1lIG9mIHRoZSB0b2RvIGxpc3QgXG5mdW5jdGlvbiBnZXRUb2RvKHRvZG9TdG9yYWdlTmFtZSkge1xuICAgIGNvbnN0IHRlbXBPYmplY3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRvZG9TdG9yYWdlTmFtZSkpOyBcbiAgICByZXR1cm4gdGVtcE9iamVjdDtcbn0gXG5cbi8vIHRoZSBmdW5jdGlvbiB0byB1cGRhdGUgdGhlIHRpdGxlIG9mIGEgdG9kbyBsaXN0LiBcbi8vIHRvZG9TdG9yYWdlTmFtZTogVGhlIHN0b3JhZ2UgbmFtZSBvZiB0aGUgdG9kbyBsaXN0IFxuLy8gbmV3VGl0bGU6IFRoZSBuZXcgdGl0bGUgb2YgdGhlIHRvZG8gbGlzdFxuZnVuY3Rpb24gdXBkYXRlVG9kb0xpc3RUaXRsZSh0b2RvT2JqZWN0LCBuZXdUaXRsZSkge1xuICAgIHRvZG9PYmplY3QudGl0bGUgPSBuZXdUaXRsZTsgXG4gICAgcmV0dXJuIHRvZG9PYmplY3Q7XG59IFxuXG4vLyB0aGUgZnVuY3Rpb24gdG8gdXBkYXRlIHRoZSBkZXNjcmlwdGlvbiBvZiBhIHRvZG8gbGlzdC4gXG4vLyB0b2RvU3RvcmFnZU5hbWU6IFRoZSBzdG9yYWdlIG5hbWUgb2YgdGhlIHRvZG8gbGlzdCBcbi8vIG5ld1RpdGxlOiBUaGUgbmV3IGRlc2NyaXB0aW9uIG9mIHRoZSB0b2RvIGxpc3RcbmZ1bmN0aW9uIHVwZGF0ZVRvZG9MaXN0RGVzY3JpcHRpb24odG9kb09iamVjdCwgbmV3RGVzY3JpcHRpb24pIHtcbiAgICB0b2RvT2JqZWN0LmRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247IFxuICAgIHJldHVybiB0b2RvT2JqZWN0O1xufSBcblxuLy8gdGhlIGZ1bmN0aW9uIHRvIHVwZGF0ZSB0aGUgZHVlIGRhdGUgb2YgYSB0b2RvIGxpc3QuIFxuLy8gdG9kb1N0b3JhZ2VOYW1lOiBUaGUgc3RvcmFnZSBuYW1lIG9mIHRoZSB0b2RvIGxpc3QgXG4vLyBuZXdEdWVEYXRlOiBUaGUgbmV3IGR1ZSBkYXRlIG9mIHRoZSB0b2RvIGxpc3RcbmZ1bmN0aW9uIHVwZGF0ZVRvZG9MaXN0RHVlRGF0ZSh0b2RvT2JqZWN0LCBuZXdEdWVEYXRlKSB7XG4gICAgdG9kb09iamVjdC5kdWVEYXRlID0gbmV3RHVlRGF0ZTtcbiAgICByZXR1cm4gdG9kb09iamVjdDtcbn0gXG5cbi8vIHRoZSBmdW5jdGlvbiB0byB1cGRhdGUgdGhlIHByaW9yaXR5IG9mIGEgdG9kbyBsaXN0LiBcbi8vIHRvZG9TdG9yYWdlTmFtZTogVGhlIHN0b3JhZ2UgbmFtZSBvZiB0aGUgdG9kbyBsaXN0IFxuLy8gbmV3UHJpb3JpdHk6IFRoZSBuZXcgcHJpb3JpdHkgb2YgdGhlIHRvZG8gbGlzdFxuZnVuY3Rpb24gdXBkYXRlVG9kb0xpc3RQcmlvcml0eSh0b2RvT2JqZWN0LCBuZXdQcmlvcml0eSkge1xuICAgIHRvZG9PYmplY3QucHJpb3JpdHkgPSBuZXdQcmlvcml0eTsgXG4gICAgcmV0dXJuIHRvZG9PYmplY3Q7XG59IFxuXG4vLyB0aGUgZnVuY3Rpb24gdG8gZGVsZXRlIGEgdG9kbyBsaXN0IFxuLy8gdG9kb1N0b3JhZ2VOYW1lOiBUaGUgc3RvcmFnZSBuYW1lIG9mIHRoZSB0b2RvIGxpc3QgXG5mdW5jdGlvbiBkZWxldGVUb2RvTGlzdCh0b2RvU3RvcmFnZU5hbWUpIHsgXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0odG9kb1N0b3JhZ2VOYW1lKTsgXG59IFxuXG4vLyB0aGUgZnVuY3Rpb24gdG8gdXBkYXRlIHRoZSBzdG9yYWdlIG5hbWUgb2YgdGhlIHRvZG8gXG5mdW5jdGlvbiB1cGRhdGVUb2RvTGlzdFN0b3JhZ2VOYW1lKHByZXZpb3VzU3RvcmFnZU5hbWUsIG5ld093bmVyUHJvamVjdE5hbWUpIHtcbiAgICBjb25zdCB0ZW1wT2JqZWN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcmV2aW91c1N0b3JhZ2VOYW1lKSk7IFxuICAgIHRlbXBPYmplY3Qub3duZXJQcm9qZWN0ID0gbmV3T3duZXJQcm9qZWN0TmFtZTsgXG4gICAgcmV0dXJuIHRlbXBPYmplY3Q7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZVRvZG9MaXN0LCBzYXZlVG9kb0xpc3QsIHVwZGF0ZVRvZG9MaXN0VGl0bGUsIFxuICAgIHVwZGF0ZVRvZG9MaXN0RGVzY3JpcHRpb24sIHVwZGF0ZVRvZG9MaXN0RHVlRGF0ZSwgdXBkYXRlVG9kb0xpc3RQcmlvcml0eSwgXG4gICAgZGVsZXRlVG9kb0xpc3QsIGdldFRvZG8sIHVwZGF0ZVRvZG9MaXN0U3RvcmFnZU5hbWV9IiwiaW1wb3J0IHsgZ2V0VG9kbyB9IGZyb20gXCIuL3RvZG9MaXN0TW9kdWxlXCI7XG5cbmZ1bmN0aW9uIHByaW50VG9kbygpIHtcbiAgICAvLyB0aGUgbmFtZSBvZiB0aGUgcHJvamVjdCB3aGljaCBvd25zIHRoZSB0b2RvXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSB0aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZS5maXJzdENoaWxkLnRleHRDb250ZW50OyBcbiAgICAvLyB0aGUgbmFtZSBvZiB0aGUgdG9kb1xuICAgIGNvbnN0IHRvZG9OYW1lID0gdGhpcy50ZXh0Q29udGVudDsgXG4gICAgLy8gdGhlIHN0b3JhZ2UgbmFtZSBvZiB0aGUgdG9kb1xuICAgIGNvbnN0IHRvZG9TdG9yYWdlTmFtZSA9IHByb2plY3ROYW1lICsgXCItXCIgKyB0b2RvTmFtZTsgXG4gICAgY29uc3QgdG9kb09iamVjdCA9IGdldFRvZG8odG9kb1N0b3JhZ2VOYW1lKTsgXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcHJpbnRUb2RvLCB7b25jZTogdHJ1ZX0pOyBcbiAgICBjb25zb2xlLmxvZyh0b2RvT2JqZWN0KTtcbn0gXG5cbmV4cG9ydCB7IHByaW50VG9kbyB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGNyZWF0ZVRvZG9MaXN0LCBzYXZlVG9kb0xpc3QsIGdldFRvZG8sIHVwZGF0ZVRvZG9MaXN0U3RvcmFnZU5hbWUsIFxuICAgIGRlbGV0ZVRvZG9MaXN0LCB1cGRhdGVUb2RvTGlzdFRpdGxlLCB1cGRhdGVUb2RvTGlzdERlc2NyaXB0aW9uLCBcbiAgICB1cGRhdGVUb2RvTGlzdER1ZURhdGUsIHVwZGF0ZVRvZG9MaXN0UHJpb3JpdHkgfSBmcm9tIFwiLi90b2RvTGlzdE1vZHVsZVwiO1xuXG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0LCBzYXZlUHJvamVjdCwgYWRkVG9FeGlzdGluZ1Byb2plY3ROYW1lcywgYWRkVG9kb0xpc3ROYW1lLCBcbmdldFByb2plY3QsIHJlbW92ZVRvZG9MaXN0TmFtZSwgZGVsZXRlUHJvamVjdCwgcmVtb3ZlRnJvbUV4aXN0aW5nUHJvamVjdE5hbWVzIH0gXG5mcm9tIFwiLi9wcm9qZWN0TW9kdWxlXCI7XG5cbmltcG9ydCB7IHNldHVwTWFpbkZyYW1lcywgaW1wbGVtZW50UHJvamVjdE5hbWVzTGlzdCB9IGZyb20gXCIuL21haW5XaW5kb3dzTW9kdWxlXCI7XG5cbi8vIFRoZSBmdW5jdGlvbnMgZm9yIGRlYWxpbmcgd2l0aCB0b2RvIGxpc3RzIGFuZCByZWxhdGVkIHByb2plY3RzIGFyZSBub3cgdG8gYmUgXG4vLyB0ZXN0ZWQgdXNpbmcgdGhlIGNvbnNvbGUuIFxuXG4vLyBsb2NhbCBzdG9yYWdlIGlzIGNsZWFyZWRcbmxvY2FsU3RvcmFnZS5jbGVhcigpO1xuXG4vLyB0aGUgdmFyaWFibGUgZm9yIHRoZSBleGlzdGluZyBwcm9qZWN0IG5hbWVzIGlzIGRlY2xhcmVkXG5sZXQgZXhpc3RpbmdQcm9qZWN0TmFtZXM7XG5cbi8vIENoZWNrIGlmIHRoZSBvYmplY3QgXCJleGlzdGluZ1Byb2plY3ROYW1lc1wiIGV4aXN0cyBvbiB0aGUgbG9jYWwgc3RvcmFnZS4gSWYgaXQgXG4vLyBleGlzdHMsIGZldGNoIGl0IGZyb20gdGhlIGxvY2FsIHN0b3JhZ2UuIE90aGVyd2lzZSwgY3JlYXRlIGl0IGFuZCBzdG9yZSBpdCBpbiBcbi8vIHRoZSBsb2NhbCBzdG9yYWdlLiBcbmlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJleGlzdGluZ1Byb2plY3ROYW1lc1wiKSkge1xuICAgIGV4aXN0aW5nUHJvamVjdE5hbWVzID0ge1xuICAgICAgICBwcm9qZWN0TmFtZXM6IFtdLFxuICAgIH07XG4gICAgY29uc29sZS5sb2coXCJObyBleGlzdGluZ1Byb2plY3ROYW1lcyBvYmplY3QgaW4gdGhlIGxvY2FsIHN0b3JhZ2UhXCIpOyBcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImV4aXN0aW5nUHJvamVjdE5hbWVzXCIsIEpTT04uc3RyaW5naWZ5KGV4aXN0aW5nUHJvamVjdE5hbWVzKSk7XG59IFxuZWxzZSB7XG4gICAgY29uc29sZS5sb2coXCJleGlzdGluZ1Byb2plY3ROYW1lcyBvYmplY3QgaW4gdGhlIGxvY2FsIHN0b3JhZ2UhXCIpO1xuICAgIGV4aXN0aW5nUHJvamVjdE5hbWVzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImV4aXN0aW5nUHJvamVjdE5hbWVzXCIpKTsgXG4gICAgY29uc29sZS5sb2coXCJleGlzdGluZyBwcm9qZWN0IG5hbWVzOlwiKTtcbiAgICBjb25zb2xlLmxvZyhleGlzdGluZ1Byb2plY3ROYW1lcyk7XG59IFxuXG4vLyBBc3N1bWUgdGhhdCBhIG5ldyB0b2RvIGxpc3QgaXMgY3JlYXRlZCBhbmQgc2F2ZWQgaW4gdGhlIGxvY2FsIHN0b3JhZ2VcbmxldCB0aXRsZSA9IFwiVGhlIGJvb2sgcmV2aWV3XCI7IFxubGV0IGRlc2NyaXB0aW9uID0gXCJJIGFtIHN0YXJ0aW5nIGEgYm9vayByZXZpZXcuXCI7XG5sZXQgZHVlRGF0ZSA9IFwiMTAuMDQuMjAyNFwiO1xubGV0IHByaW9yaXR5ID0gXCJoaWdoXCI7IFxubGV0IG93bmVyUHJvamVjdCA9IFwiQm9va1Jldmlld1wiO1xuLy8gdG9kbyBpcyBjcmVhdGVkXG5sZXQgdG9kbyA9IGNyZWF0ZVRvZG9MaXN0KHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG93bmVyUHJvamVjdCk7IFxuLy8gc3RvcmFnZSBuYW1lIG9mIHRoZSB0b2RvIGlzIGRldGVybWluZWQgYnkgdGhlIHByb2dyYW1tZXJcbmxldCBzdG9yYWdlTmFtZSA9IG93bmVyUHJvamVjdCArIFwiLVwiICsgdGl0bGU7IFxuY29uc29sZS5sb2coXCJ0aGUgZmlyc3QgdG9kb1wiKTtcbmNvbnNvbGUubG9nKHRvZG8pOyBcbmNvbnNvbGUubG9nKFwiZXhpc3RpbmcgcHJvamVjdCBuYW1lczpcIik7IFxuY29uc29sZS5sb2coZXhpc3RpbmdQcm9qZWN0TmFtZXMpOyBcbi8vIGlzIHRoZSBwcm9qZWN0IGFscmVhZHkgZXhpc3Rpbmc/XG5sZXQgaW5kZXggPSBleGlzdGluZ1Byb2plY3ROYW1lcy5wcm9qZWN0TmFtZXMuaW5kZXhPZihvd25lclByb2plY3QpOyBcbmlmIChpbmRleCA9PT0gLTEpIHsgLy8gdGhlIHByb2plY3QgaXMgbmV3XG4gICAgLy8gSGVuY2UsIGNyZWF0ZSBpdFxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBjcmVhdGVQcm9qZWN0KG93bmVyUHJvamVjdCk7IFxuICAgIC8vIHNhdmUgaXQgaW4gdGhlIGxvY2FsIHN0b3JhZ2VcbiAgICBzYXZlUHJvamVjdChuZXdQcm9qZWN0KTsgXG4gICAgLy8gcmVnaXN0ZXIgaXQgdG8gdGhlIGV4aXN0aW5nIHByb2plY3QgbmFtZXNcbiAgICBhZGRUb0V4aXN0aW5nUHJvamVjdE5hbWVzKG5ld1Byb2plY3QpO1xufSBcbi8vIHRoZSB0b2RvIGlzIHN0b3JlZCBpbiB0aGUgc3RvcmFnZVxuc2F2ZVRvZG9MaXN0KHN0b3JhZ2VOYW1lLCB0b2RvKTsgXG5cbi8vIHJlZ2lzdGVyIHRoZSBuZXcgdG9kbyBsaXN0IHRvIHRoZSBvd25lciBwcm9qZWN0XG5sZXQgb3duZXJQcm9qZWN0T2JqZWN0ID0gZ2V0UHJvamVjdChvd25lclByb2plY3QpOyBcbm93bmVyUHJvamVjdE9iamVjdCA9IGFkZFRvZG9MaXN0TmFtZShvd25lclByb2plY3RPYmplY3QsIHRpdGxlKTsgXG5zYXZlUHJvamVjdChvd25lclByb2plY3RPYmplY3QpO1xuXG5leGlzdGluZ1Byb2plY3ROYW1lcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJleGlzdGluZ1Byb2plY3ROYW1lc1wiKSk7IFxuY29uc29sZS5sb2coXCJleGlzdGluZyBwcm9qZWN0IG5hbWVzIGFmdGVyIHRoZSBwcm9qZWN0IGNyZWF0aW9uOlwiKTtcbmNvbnNvbGUubG9nKGV4aXN0aW5nUHJvamVjdE5hbWVzKTsgXG5sZXQgdGhlT3duZXJQcm9qZWN0ID0gZ2V0UHJvamVjdChvd25lclByb2plY3QpOyBcbmNvbnNvbGUubG9nKFwidGhlIG93bmVyIHByb2plY3Qgb2YgdGhlIGZpcnN0IHRvZG86XCIpO1xuY29uc29sZS5sb2codGhlT3duZXJQcm9qZWN0KTsgXG5cbi8vIEFzc3VtZSB0aGF0IGEgbmV3IHRvZG8gbGlzdCBpcyBjcmVhdGVkIGFuZCBzYXZlZCBpbiBhbiBleGlzdGluZyBwcm9qZWN0IFxudGl0bGUgPSBcIlRoZSByZXZpZXcgZWRpdFwiOyBcbmRlc2NyaXB0aW9uID0gXCJJIGFtIGVkaXRpbmcgdGhlIGJvb2sgcmV2aWV3LlwiO1xuZHVlRGF0ZSA9IFwiMTAuMDUuMjAyNFwiO1xucHJpb3JpdHkgPSBcImhpZ2hcIjsgXG5vd25lclByb2plY3QgPSBcIkJvb2tSZXZpZXdcIjtcbi8vIHRvZG8gaXMgY3JlYXRlZFxudG9kbyA9IGNyZWF0ZVRvZG9MaXN0KHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG93bmVyUHJvamVjdCk7IFxuLy8gc3RvcmFnZSBuYW1lIG9mIHRoZSB0b2RvIGlzIGRldGVybWluZWQgYnkgdGhlIHByb2dyYW1tZXJcbnN0b3JhZ2VOYW1lID0gb3duZXJQcm9qZWN0ICsgXCItXCIgKyB0aXRsZTsgXG5jb25zb2xlLmxvZyhcInRoZSBzZWNvbmQgdG9kb1wiKTtcbmNvbnNvbGUubG9nKHRvZG8pO1xuLy8gdGhlIHRvZG8gaXMgc3RvcmVkIGluIHRoZSBzdG9yYWdlXG5zYXZlVG9kb0xpc3Qoc3RvcmFnZU5hbWUsIHRvZG8pOyBcbi8vIGlzIHRoZSB0b2RvIHN0b3JlZCBpbiB0aGUgbG9jYWwgc3RvcmFnZT8gXG50b2RvID0gZ2V0VG9kbyhzdG9yYWdlTmFtZSk7XG5jb25zb2xlLmxvZyhcImlzIHRoZSB0b2RvIHJlYWxseSBzdG9yZWQgaW4gdGhlIGxvY2FsIHN0b3JhZ2U/XCIpOyBcbmNvbnNvbGUubG9nKHRvZG8pO1xuY29uc29sZS5sb2coXCJleGlzdGluZyBwcm9qZWN0IG5hbWVzOlwiKTsgXG5jb25zb2xlLmxvZyhleGlzdGluZ1Byb2plY3ROYW1lcyk7IFxuLy8gaXMgdGhlIHByb2plY3QgYWxyZWFkeSBleGlzdGluZz9cbmluZGV4ID0gZXhpc3RpbmdQcm9qZWN0TmFtZXMucHJvamVjdE5hbWVzLmluZGV4T2Yob3duZXJQcm9qZWN0KTsgXG5pZiAoaW5kZXggPT09IC0xKSB7IC8vIHRoZSBwcm9qZWN0IGlzIG5ld1xuICAgIC8vIEhlbmNlLCBjcmVhdGUgaXRcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gY3JlYXRlUHJvamVjdChvd25lclByb2plY3QpOyBcbiAgICAvLyBzYXZlIGl0IGluIHRoZSBsb2NhbCBzdG9yYWdlXG4gICAgc2F2ZVByb2plY3QobmV3UHJvamVjdCk7IFxuICAgIC8vIHJlZ2lzdGVyIGl0IHRvIHRoZSBleGlzdGluZyBwcm9qZWN0IG5hbWVzXG4gICAgYWRkVG9FeGlzdGluZ1Byb2plY3ROYW1lcyhuZXdQcm9qZWN0KTtcbn0gXG4vLyByZWdpc3RlciB0aGUgbmV3IHRvZG8gbGlzdCB0byB0aGUgb3duZXIgcHJvamVjdCBcbm93bmVyUHJvamVjdE9iamVjdCA9IGdldFByb2plY3Qob3duZXJQcm9qZWN0KTsgXG5vd25lclByb2plY3RPYmplY3QgPSBhZGRUb2RvTGlzdE5hbWUob3duZXJQcm9qZWN0T2JqZWN0LCB0aXRsZSk7IFxuc2F2ZVByb2plY3Qob3duZXJQcm9qZWN0T2JqZWN0KTtcblxuZXhpc3RpbmdQcm9qZWN0TmFtZXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZXhpc3RpbmdQcm9qZWN0TmFtZXNcIikpOyBcbmNvbnNvbGUubG9nKFwiZXhpc3RpbmcgcHJvamVjdCBuYW1lczpcIik7XG5jb25zb2xlLmxvZyhleGlzdGluZ1Byb2plY3ROYW1lcyk7IFxudGhlT3duZXJQcm9qZWN0ID0gZ2V0UHJvamVjdChvd25lclByb2plY3QpOyBcbmNvbnNvbGUubG9nKFwidGhlIG93bmVyIHByb2plY3Qgb2YgdGhlIHNlY29uZCB0b2RvOlwiKTsgXG5jb25zb2xlLmxvZyh0aGVPd25lclByb2plY3QpOyBcblxuLy8gYSBuZXcgcHJvamVjdCBpcyBjcmVhdGVkXG5jb25zdCBuZXdQcm9qZWN0MiA9IGNyZWF0ZVByb2plY3QoXCJFZGl0c1wiKTsgXG4vLyBzYXZlIGl0IGluIHRoZSBsb2NhbCBzdG9yYWdlXG5zYXZlUHJvamVjdChuZXdQcm9qZWN0Mik7IFxuLy8gcmVnaXN0ZXIgaXQgdG8gdGhlIGV4aXN0aW5nIHByb2plY3QgbmFtZXNcbmFkZFRvRXhpc3RpbmdQcm9qZWN0TmFtZXMobmV3UHJvamVjdDIpOyBcbmV4aXN0aW5nUHJvamVjdE5hbWVzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImV4aXN0aW5nUHJvamVjdE5hbWVzXCIpKTsgXG5jb25zb2xlLmxvZyhcImV4aXN0aW5nIHByb2plY3QgbmFtZXM6XCIpO1xuY29uc29sZS5sb2coZXhpc3RpbmdQcm9qZWN0TmFtZXMpOyBcblxuLy8gdXBkYXRlIHRoZSBzdG9yYWdlIG5hbWUgb2YgdGhlIHRvZG8gXCJUaGUgcmV2aWV3IGVkaXRcIiBcbmxldCBwcmV2aW91c093bmVyUHJvamVjdCA9IFwiQm9va1Jldmlld1wiOyBcbmxldCBwcmV2aW91c1N0b3JhZ2VOYW1lID0gcHJldmlvdXNPd25lclByb2plY3QrXCItXCIrXCJUaGUgcmV2aWV3IGVkaXRcIjtcbmxldCB1cGRhdGVkVG9kbyA9IHVwZGF0ZVRvZG9MaXN0U3RvcmFnZU5hbWUocHJldmlvdXNTdG9yYWdlTmFtZSwgXCJFZGl0c1wiKTsgXG5kZWxldGVUb2RvTGlzdChwcmV2aW91c1N0b3JhZ2VOYW1lKTsgXG5sZXQgcHJldmlvdXNPd25lclByb2plY3RPYmplY3QgPSBnZXRQcm9qZWN0KHByZXZpb3VzT3duZXJQcm9qZWN0KTtcbnByZXZpb3VzT3duZXJQcm9qZWN0T2JqZWN0ID0gcmVtb3ZlVG9kb0xpc3ROYW1lKFxuICAgIHByZXZpb3VzT3duZXJQcm9qZWN0T2JqZWN0LCBwcmV2aW91c1N0b3JhZ2VOYW1lKTsgXG5zYXZlUHJvamVjdChwcmV2aW91c093bmVyUHJvamVjdE9iamVjdCk7IFxuc2F2ZVRvZG9MaXN0KFwiRWRpdHNcIitcIi1cIitcIlRoZSByZXZpZXcgZWRpdFwiLCB1cGRhdGVkVG9kbyk7IFxuXG4vLyBhZGQgdGhlIHRvZG8gdG8gdGhlIGNvbnRlbnQgb2YgdGhlIFwiRWRpdHNcIiBwcm9qZWN0IFxub3duZXJQcm9qZWN0T2JqZWN0ID0gZ2V0UHJvamVjdChcIkVkaXRzXCIpOyBcbm93bmVyUHJvamVjdE9iamVjdCA9IGFkZFRvZG9MaXN0TmFtZShvd25lclByb2plY3RPYmplY3QsIFwiVGhlIHJldmlldyBlZGl0XCIpOyBcbnNhdmVQcm9qZWN0KG93bmVyUHJvamVjdE9iamVjdCk7XG4vLyBIYXMgdXBkYXRlVG9kb0xpc3RTdG9yYWdlTmFtZSBmdW5jdGlvbiB3b3JrZWQgY29ycmVjdGx5P1xudG9kbyA9IGdldFRvZG8oXCJFZGl0cy1UaGUgcmV2aWV3IGVkaXRcIik7XG5jb25zb2xlLmxvZyhcImlzIHRoZSB0b2RvIHJlYWxseSBzdG9yZWQgaW4gdGhlIGxvY2FsIHN0b3JhZ2U/XCIpOyBcbmNvbnNvbGUubG9nKHRvZG8pOyBcbi8vIGl0IGlzIGNoZWNrZWQgaWYgdGhlIHRvZG8gaXMgYWRkZWQgdG8gdGhlIFwiRWRpdHNcIiBwcm9qZWN0XG50aGVPd25lclByb2plY3QgPSBnZXRQcm9qZWN0KFwiRWRpdHNcIik7IFxuY29uc29sZS5sb2coXCJ0aGUgcHJvamVjdCB0byB3aGljaCB0aGUgc2Vjb25kIHRvZG8gaXMgYWRkZWQ6XCIpOyBcbmNvbnNvbGUubG9nKHRoZU93bmVyUHJvamVjdCk7IFxuXG4vLyB0aGUgdGl0bGUgb2YgdGhlIHRvZG8gXCJFZGl0cy1UaGUgcmV2aWV3IGVkaXRcIiBpcyB0byBiZSB1cGRhdGVkIHRvIHRoZSBuZXcgdGl0bGUgXG4vLyBcIkVkaXRzLVRoZSByZXZpZXcgb2YgdGhlIGVkaXRcIiBcbnRvZG8gPSBnZXRUb2RvKFwiRWRpdHMtVGhlIHJldmlldyBlZGl0XCIpOyBcbnRvZG8gPSB1cGRhdGVUb2RvTGlzdFRpdGxlKHRvZG8sIFwiVGhlIHJldmlldyBvZiB0aGUgZWRpdFwiKTtcbnNhdmVUb2RvTGlzdChcIkVkaXRzLVRoZSByZXZpZXcgZWRpdFwiLCB0b2RvKTsgXG4vLyBIYXMgdXBkYXRlVG9kb0xpc3RUaXRsZSBmdW5jdGlvbiB3b3JrZWQgY29ycmVjdGx5P1xudG9kbyA9IGdldFRvZG8oXCJFZGl0cy1UaGUgcmV2aWV3IGVkaXRcIik7XG5jb25zb2xlLmxvZyhcImlzIHRoZSB0b2RvIHRpdGxlIHVwZGF0ZWQgdG8gJ1RoZSByZXZpZXcgb2YgdGhlIGVkaXQnP1wiKTsgXG5jb25zb2xlLmxvZyh0b2RvKTsgXG5cbi8vIHRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgdG9kbyBpcyB0byBiZSB1cGRhdGVkIFxuZGVzY3JpcHRpb24gPSBcIlRoZSBib29rIHJldmlldyBpcyB0byBiZSBlZGl0ZWQuXCI7XG50b2RvID0gZ2V0VG9kbyhcIkVkaXRzLVRoZSByZXZpZXcgZWRpdFwiKTsgXG50b2RvID0gdXBkYXRlVG9kb0xpc3REZXNjcmlwdGlvbih0b2RvLCBkZXNjcmlwdGlvbik7XG5zYXZlVG9kb0xpc3QoXCJFZGl0cy1UaGUgcmV2aWV3IGVkaXRcIiwgdG9kbyk7IFxuLy8gSGFzIHVwZGF0ZVRvZG9MaXN0RGVzY3JpcHRpb24gZnVuY3Rpb24gd29ya2VkIGNvcnJlY3RseT9cbnRvZG8gPSBnZXRUb2RvKFwiRWRpdHMtVGhlIHJldmlldyBlZGl0XCIpO1xuY29uc29sZS5sb2coXCJpcyB0aGUgdG9kbyBkZXNjcmlwdGlvbiB1cGRhdGVkIHByb3Blcmx5P1wiKTsgXG5jb25zb2xlLmxvZyh0b2RvKTsgXG5cbi8vIHRoZSBkdWUgZGF0ZSBvZiB0aGUgdG9kbyBpcyB0byBiZSB1cGRhdGVkIFxuZHVlRGF0ZSA9IFwiMTEuMDUuMjAyNFwiOyBcbnRvZG8gPSBnZXRUb2RvKFwiRWRpdHMtVGhlIHJldmlldyBlZGl0XCIpOyBcbnRvZG8gPSB1cGRhdGVUb2RvTGlzdER1ZURhdGUodG9kbywgZHVlRGF0ZSk7XG5zYXZlVG9kb0xpc3QoXCJFZGl0cy1UaGUgcmV2aWV3IGVkaXRcIiwgdG9kbyk7IFxuLy8gSGFzIHVwZGF0ZVRvZG9MaXN0RHVlRGF0ZSBmdW5jdGlvbiB3b3JrZWQgY29ycmVjdGx5P1xudG9kbyA9IGdldFRvZG8oXCJFZGl0cy1UaGUgcmV2aWV3IGVkaXRcIik7XG5jb25zb2xlLmxvZyhcImlzIHRoZSB0b2RvIGRlc2NyaXB0aW9uIHVwZGF0ZWQgcHJvcGVybHk/XCIpOyBcbmNvbnNvbGUubG9nKHRvZG8pOyBcblxuLy8gdGhlIHByaW9yaXR5IG9mIHRoZSB0b2RvIGlzIHRvIGJlIHVwZGF0ZWQgXG5wcmlvcml0eSA9IFwidmVyeSBoaWdoXCI7IFxudG9kbyA9IGdldFRvZG8oXCJFZGl0cy1UaGUgcmV2aWV3IGVkaXRcIik7IFxudG9kbyA9IHVwZGF0ZVRvZG9MaXN0UHJpb3JpdHkodG9kbywgcHJpb3JpdHkpO1xuc2F2ZVRvZG9MaXN0KFwiRWRpdHMtVGhlIHJldmlldyBlZGl0XCIsIHRvZG8pOyBcbi8vIEhhcyB1cGRhdGVUb2RvTGlzdFByaW9yaXR5IGZ1bmN0aW9uIHdvcmtlZCBjb3JyZWN0bHk/XG50b2RvID0gZ2V0VG9kbyhcIkVkaXRzLVRoZSByZXZpZXcgZWRpdFwiKTtcbmNvbnNvbGUubG9nKFwiaXMgdGhlIHRvZG8gcHJpb3JpdHkgdXBkYXRlZCBwcm9wZXJseT9cIik7IFxuY29uc29sZS5sb2codG9kbyk7IFxuXG4vLyBhIG5ldyBwcm9qZWN0IGlzIGNyZWF0ZWQgXG4vLyBpcyB0aGUgcHJvamVjdCBhbHJlYWR5IGV4aXN0aW5nPyBcbmNvbnN0IG5ld1Byb2plY3ROYW1lID0gXCJXcml0aW5nc1wiOyBcbmluZGV4ID0gZXhpc3RpbmdQcm9qZWN0TmFtZXMucHJvamVjdE5hbWVzLmluZGV4T2YobmV3UHJvamVjdE5hbWUpOyBcbmlmIChpbmRleCA9PT0gLTEpIHsgLy8gdGhlIHByb2plY3QgaXMgbmV3XG4gICAgLy8gSGVuY2UsIGNyZWF0ZSBpdFxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBjcmVhdGVQcm9qZWN0KG5ld1Byb2plY3ROYW1lKTsgXG4gICAgLy8gc2F2ZSBpdCBpbiB0aGUgbG9jYWwgc3RvcmFnZVxuICAgIHNhdmVQcm9qZWN0KG5ld1Byb2plY3QpOyBcbiAgICAvLyByZWdpc3RlciBpdCB0byB0aGUgZXhpc3RpbmcgcHJvamVjdCBuYW1lc1xuICAgIGFkZFRvRXhpc3RpbmdQcm9qZWN0TmFtZXMobmV3UHJvamVjdCk7XG59ICBcbmV4aXN0aW5nUHJvamVjdE5hbWVzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImV4aXN0aW5nUHJvamVjdE5hbWVzXCIpKTsgXG5jb25zb2xlLmxvZyhcImV4aXN0aW5nIHByb2plY3QgbmFtZXM6XCIpO1xuY29uc29sZS5sb2coZXhpc3RpbmdQcm9qZWN0TmFtZXMpOyBcblxuLy8gZGVsZXRlUHJvamVjdCBpcyB0ZXN0ZWRcbmRlbGV0ZVByb2plY3QobmV3UHJvamVjdE5hbWUpOyBcbmNvbnNvbGUubG9nKGdldFByb2plY3QobmV3UHJvamVjdE5hbWUpKTsgXG5cbi8vIHJlbW92ZUZyb21FeGlzdGluZ1Byb2plY3ROYW1lcyBpcyB0ZXN0ZWQgXG5leGlzdGluZ1Byb2plY3ROYW1lcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJleGlzdGluZ1Byb2plY3ROYW1lc1wiKSk7IFxuY29uc29sZS5sb2coXCJleGlzdGluZyBwcm9qZWN0IG5hbWVzOlwiKTtcbmNvbnNvbGUubG9nKGV4aXN0aW5nUHJvamVjdE5hbWVzKTsgXG5yZW1vdmVGcm9tRXhpc3RpbmdQcm9qZWN0TmFtZXMobmV3UHJvamVjdE5hbWUpOyBcbmV4aXN0aW5nUHJvamVjdE5hbWVzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImV4aXN0aW5nUHJvamVjdE5hbWVzXCIpKTsgXG5jb25zb2xlLmxvZyhcImV4aXN0aW5nIHByb2plY3QgbmFtZXM6XCIpO1xuY29uc29sZS5sb2coZXhpc3RpbmdQcm9qZWN0TmFtZXMpOyBcblxuc2V0dXBNYWluRnJhbWVzKCk7IFxuaW1wbGVtZW50UHJvamVjdE5hbWVzTGlzdCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==