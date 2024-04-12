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
    // access to the todos window div
    const todosWindow = document.getElementsByClassName("todosWindow")[0];
    // create the input element for the todo title
    const titleInput = document.createElement("input"); 
    // set the type of the input field 
    titleInput.type = "text"; 
    // set the id of the input field 
    titleInput.id = "title"; 
    // set the value of the input field 
    titleInput.value = todoObject.title; 

    // clear the todos window
    while (todosWindow.childNodes.length >= 1) {
        todosWindow.removeChild(todosWindow.lastChild);
    } 
    // print the title of the todo
    todosWindow.appendChild(titleInput);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRUE7QUFDQTtBQUNBLE9BQU8sd0RBQU87QUFDZCxPQUFPLG9FQUFtQjtBQUMxQiw2REFBWTtBQUNaO0FBQ0EsT0FBTyx3REFBTztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU8sd0RBQU87QUFDZCxPQUFPLDBFQUF5QjtBQUNoQyw2REFBWTtBQUNaO0FBQ0EsT0FBTyx3REFBTztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU8sd0RBQU87QUFDZCxPQUFPLHNFQUFxQjtBQUM1Qiw2REFBWTtBQUNaO0FBQ0EsT0FBTyx3REFBTztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU8sd0RBQU87QUFDZCxPQUFPLHVFQUFzQjtBQUM3Qiw2REFBWTtBQUNaO0FBQ0EsT0FBTyx3REFBTztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQSx1QkFBdUIsNkRBQWE7QUFDcEM7QUFDQSxJQUFJLDJEQUFXO0FBQ2Y7QUFDQSxJQUFJLHlFQUF5QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZEQUFhO0FBQ2IsWUFBWSwwREFBVTs7QUFFdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4RUFBOEI7QUFDOUI7QUFDQTtBQUNBOztBQUVBLG1FQUFlO0FBQ2YsNkVBQXlCLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9tYWluV2luZG93c01vZHVsZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9wcm9qZWN0TW9kdWxlLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3RvZG9MaXN0TW9kdWxlLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3RvZG9XaW5kb3dNb2R1bGUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGh0bWwgeyBcbiAgICAvKiByb290IGZvbnQgc2l6ZSBpcyAxNnB4ICovXG4gICAgZm9udC1zaXplOiAxNnB4O1xufSBcblxuLnVzZXJXaW5kb3cgeyBcbiAgICAvKiB1c2VyV2luZG93IGNsYXNzIGhhcyBhIGZsZXggbGF5b3V0ICovIFxuICAgIGRpc3BsYXk6IGZsZXg7IFxuICAgIC8qIHRoZSBjbGFzcyBpbXBsaWVzIGEgd2lkdGggZXF1YWwgdG8gdGhlIGhhbGYgb2YgdGhlIHZpZXdwb3J0IHdpZHRoICovXG4gICAgd2lkdGg6IDUwdnc7IFxuICAgIC8qIHRoZSBjbGFzcyBpbXBsaWVzIGEgaGVnaWh0IGVxdWFsIHRvIHRoZSBzZXZudHkgcGVyY2VudCBvZiB0aGUgdmlld3BvcnQgXG4gICAgaGVpZ2h0ICovIFxuICAgIGhlaWdodDogNzB2aDsgXG4gICAgLyogc3R5bGluZyBvZiB0aGUgYm9yZGVyIG9mIHRoaXMgY2xhc3MgZWxlbWVudHMgKi9cbiAgICBib3JkZXItc3R5bGU6IGRvdWJsZTtcbiAgICBib3JkZXItd2lkdGg6IDVweDsgXG4gICAgYm9yZGVyLWNvbG9yOiBibHVlOyBcbiAgICAvKiB0aGUgZ2FwIGJldHdlZW4gdGhlIGl0ZW1zICovXG4gICAgZ2FwOiAwLjJyZW07XG59IFxuXG4ucHJvamVjdE5hbWVzV2luZG93IHtcbiAgICAvKiBhIHNvbGlkIHJlZCBib3JkZXIgb2YgM3B4IHRoaWNrKi8gXG4gICAgYm9yZGVyOiBzb2xpZCAzcHggcmVkOyBcbiAgICAvKiB0aGUgd2luZG93IGhhcyBhIDEgdW5pdCB3aWR0aCBpbiBpdHMgcGFyZW50IGZsZXggY29udGFpbmVyKi8gXG4gICAgZmxleDogMTsgXG4gICAgLyogbWFyZ2lucyBvZiB0aGUgcHJvamVjdCBuYW1lcyB3aW5kb3cgYXJlIHNldCAqL1xuICAgIG1hcmdpbi1sZWZ0OiAwLjJyZW07IFxuICAgIG1hcmdpbi10b3A6IDAuMnJlbTsgXG4gICAgbWFyZ2luLWJvdHRvbTogMC4ycmVtOyBcbiAgICBkaXNwbGF5OiBmbGV4OyBcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufSBcblxuLnByb2plY3ROYW1lc1dpbmRvd0hlYWRlciB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcbn0gXG5cbi5wcm9qZWN0TmFtZXNMaXN0IHsgXG4gICAgLyogcHJvamVjdCBuYW1lcyBsaXN0IHRha2VzIHVwIHRoZSBzcGFjZSBsZWZ0IGJ5IHRoZSBtYWluIHNpemUgb2YgdGhlIGhlYWRlciovXG4gICAgZmxleC1ncm93OiAxOyBcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcbn1cblxuLyogdGhlIGNsYXNzIG9mIHRoZSBkaXYgaW4gd2hpY2ggYSBwcm9qZWN0IG5hbWUgYW5kIGl0cyB0b2RvcyBhcmUgd3JpdHRlbiAqL1xuLnByb2plY3ROYW1lTGlzdEl0ZW0ge1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjNyZW07XG59IFxuXG4vKiB0aGUgY2xhc3MgZm9yIHByb2plY3QgbmFtZSBhbmQgY3Vyc29yIHN0eWxpbmcgKi9cbi5wcm9qZWN0TmFtZTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ29sZDsgXG4gICAgY3Vyc29yOiBwb2ludGVyO1xufSBcblxuLnRvZG9UaXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcbn1cblxuLyogdGhlIGNsYXNzIG9mIHRoZSBkaXYgdG8gaG9sZCB0aGUgY2xhc3MgbmFtZSBzcGFuIGVsZW1lbnQqL1xuLnRvZG9MaXN0TmFtZURpdiB7XG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xufSBcblxuLyogdG9kbyBuYW1lIHNwYW4gZWxlbWVudCBpcyBzdHlsZWQqL1xuLnRvZG9MaXN0TmFtZTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW55ZWxsb3c7IFxuICAgIGN1cnNvcjogcG9pbnRlcjsgXG59XG5cbi50b2Rvc1dpbmRvdyB7XG4gICAgLyogYSBzb2xpZCBvcmFuZ2UgYm9yZGVyIG9mIDNweCB0aGljayovIFxuICAgIGJvcmRlcjogc29saWQgM3B4IG9yYW5nZTsgXG4gICAgLyogdGhlIHdpbmRvdyBoYXMgYSAyIHVuaXQgd2lkdGggaW4gaXRzIHBhcmVudCBmbGV4IGNvbnRhaW5lciovIFxuICAgIGZsZXg6IDI7IFxuICAgIC8qIG1hcmdpbnMgb2YgdGhlIHRvZG9zIHdpbmRvdyBhcmUgc2V0ICovXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjJyZW07IFxuICAgIG1hcmdpbi10b3A6IDAuMnJlbTsgXG4gICAgbWFyZ2luLWJvdHRvbTogMC4ycmVtO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDJCQUEyQjtJQUMzQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksdUNBQXVDO0lBQ3ZDLGFBQWE7SUFDYixzRUFBc0U7SUFDdEUsV0FBVztJQUNYO1lBQ1E7SUFDUixZQUFZO0lBQ1osaURBQWlEO0lBQ2pELG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLDhCQUE4QjtJQUM5QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMscUJBQXFCO0lBQ3JCLDhEQUE4RDtJQUM5RCxPQUFPO0lBQ1AsZ0RBQWdEO0lBQ2hELG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDZFQUE2RTtJQUM3RSxZQUFZO0lBQ1osb0JBQW9CO0FBQ3hCOztBQUVBLDJFQUEyRTtBQUMzRTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQSxrREFBa0Q7QUFDbEQ7SUFDSSxzQkFBc0I7SUFDdEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUEsNERBQTREO0FBQzVEO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBLG9DQUFvQztBQUNwQztJQUNJLDZCQUE2QjtJQUM3QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksc0NBQXNDO0lBQ3RDLHdCQUF3QjtJQUN4Qiw4REFBOEQ7SUFDOUQsT0FBTztJQUNQLHdDQUF3QztJQUN4QyxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sIHsgXFxuICAgIC8qIHJvb3QgZm9udCBzaXplIGlzIDE2cHggKi9cXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn0gXFxuXFxuLnVzZXJXaW5kb3cgeyBcXG4gICAgLyogdXNlcldpbmRvdyBjbGFzcyBoYXMgYSBmbGV4IGxheW91dCAqLyBcXG4gICAgZGlzcGxheTogZmxleDsgXFxuICAgIC8qIHRoZSBjbGFzcyBpbXBsaWVzIGEgd2lkdGggZXF1YWwgdG8gdGhlIGhhbGYgb2YgdGhlIHZpZXdwb3J0IHdpZHRoICovXFxuICAgIHdpZHRoOiA1MHZ3OyBcXG4gICAgLyogdGhlIGNsYXNzIGltcGxpZXMgYSBoZWdpaHQgZXF1YWwgdG8gdGhlIHNldm50eSBwZXJjZW50IG9mIHRoZSB2aWV3cG9ydCBcXG4gICAgaGVpZ2h0ICovIFxcbiAgICBoZWlnaHQ6IDcwdmg7IFxcbiAgICAvKiBzdHlsaW5nIG9mIHRoZSBib3JkZXIgb2YgdGhpcyBjbGFzcyBlbGVtZW50cyAqL1xcbiAgICBib3JkZXItc3R5bGU6IGRvdWJsZTtcXG4gICAgYm9yZGVyLXdpZHRoOiA1cHg7IFxcbiAgICBib3JkZXItY29sb3I6IGJsdWU7IFxcbiAgICAvKiB0aGUgZ2FwIGJldHdlZW4gdGhlIGl0ZW1zICovXFxuICAgIGdhcDogMC4ycmVtO1xcbn0gXFxuXFxuLnByb2plY3ROYW1lc1dpbmRvdyB7XFxuICAgIC8qIGEgc29saWQgcmVkIGJvcmRlciBvZiAzcHggdGhpY2sqLyBcXG4gICAgYm9yZGVyOiBzb2xpZCAzcHggcmVkOyBcXG4gICAgLyogdGhlIHdpbmRvdyBoYXMgYSAxIHVuaXQgd2lkdGggaW4gaXRzIHBhcmVudCBmbGV4IGNvbnRhaW5lciovIFxcbiAgICBmbGV4OiAxOyBcXG4gICAgLyogbWFyZ2lucyBvZiB0aGUgcHJvamVjdCBuYW1lcyB3aW5kb3cgYXJlIHNldCAqL1xcbiAgICBtYXJnaW4tbGVmdDogMC4ycmVtOyBcXG4gICAgbWFyZ2luLXRvcDogMC4ycmVtOyBcXG4gICAgbWFyZ2luLWJvdHRvbTogMC4ycmVtOyBcXG4gICAgZGlzcGxheTogZmxleDsgXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufSBcXG5cXG4ucHJvamVjdE5hbWVzV2luZG93SGVhZGVyIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IFxcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxufSBcXG5cXG4ucHJvamVjdE5hbWVzTGlzdCB7IFxcbiAgICAvKiBwcm9qZWN0IG5hbWVzIGxpc3QgdGFrZXMgdXAgdGhlIHNwYWNlIGxlZnQgYnkgdGhlIG1haW4gc2l6ZSBvZiB0aGUgaGVhZGVyKi9cXG4gICAgZmxleC1ncm93OiAxOyBcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxufVxcblxcbi8qIHRoZSBjbGFzcyBvZiB0aGUgZGl2IGluIHdoaWNoIGEgcHJvamVjdCBuYW1lIGFuZCBpdHMgdG9kb3MgYXJlIHdyaXR0ZW4gKi9cXG4ucHJvamVjdE5hbWVMaXN0SXRlbSB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjNyZW07XFxufSBcXG5cXG4vKiB0aGUgY2xhc3MgZm9yIHByb2plY3QgbmFtZSBhbmQgY3Vyc29yIHN0eWxpbmcgKi9cXG4ucHJvamVjdE5hbWU6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkOyBcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn0gXFxuXFxuLnRvZG9UaXRsZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyBcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbn1cXG5cXG4vKiB0aGUgY2xhc3Mgb2YgdGhlIGRpdiB0byBob2xkIHRoZSBjbGFzcyBuYW1lIHNwYW4gZWxlbWVudCovXFxuLnRvZG9MaXN0TmFtZURpdiB7XFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXG59IFxcblxcbi8qIHRvZG8gbmFtZSBzcGFuIGVsZW1lbnQgaXMgc3R5bGVkKi9cXG4udG9kb0xpc3ROYW1lOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW55ZWxsb3c7IFxcbiAgICBjdXJzb3I6IHBvaW50ZXI7IFxcbn1cXG5cXG4udG9kb3NXaW5kb3cge1xcbiAgICAvKiBhIHNvbGlkIG9yYW5nZSBib3JkZXIgb2YgM3B4IHRoaWNrKi8gXFxuICAgIGJvcmRlcjogc29saWQgM3B4IG9yYW5nZTsgXFxuICAgIC8qIHRoZSB3aW5kb3cgaGFzIGEgMiB1bml0IHdpZHRoIGluIGl0cyBwYXJlbnQgZmxleCBjb250YWluZXIqLyBcXG4gICAgZmxleDogMjsgXFxuICAgIC8qIG1hcmdpbnMgb2YgdGhlIHRvZG9zIHdpbmRvdyBhcmUgc2V0ICovXFxuICAgIG1hcmdpbi1yaWdodDogMC4ycmVtOyBcXG4gICAgbWFyZ2luLXRvcDogMC4ycmVtOyBcXG4gICAgbWFyZ2luLWJvdHRvbTogMC4ycmVtO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7IFxuaW1wb3J0IHsgZ2V0UHJvamVjdCB9IGZyb20gJy4vcHJvamVjdE1vZHVsZSc7IFxuaW1wb3J0IHsgcHJpbnRUb2RvIH0gZnJvbSAnLi90b2RvV2luZG93TW9kdWxlJztcblxuLy8gdGhlIGZ1bmN0aW9uIGZvciBzZXR0aW5nIHVwIHRoZSBtYWluIGZyYW1lcyBvZiB0aGUgdXNlciBpbnRlcmZhY2UuIFxuZnVuY3Rpb24gc2V0dXBNYWluRnJhbWVzKCkge1xuICAgIC8vIHRoZSB3aW5kb3cgd2l0aCB3aGljaCB0aGUgdXNlciBpcyBnb2luZyB0byBpbnRlcmFjdCBpcyBjcmVhdGVkLlxuICAgIGNvbnN0IHVzZXJXaW5kb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyBcbiAgICAvLyB0aGUgY2xhc3Mgb2YgdGhlIHVzZXIgd2luZG93IGlzIHVzZXJXaW5kb3dcbiAgICB1c2VyV2luZG93LmNsYXNzTmFtZSA9IFwidXNlcldpbmRvd1wiOyBcbiAgICAvLyB1c2VyV2luZG93IGlzIGFkZGVkIHRvIHRoZSBwYWdlXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh1c2VyV2luZG93KTsgXG5cbiAgICAvLyB0aGUgd2luZG93IGluIHdoaWNoIHByb2plY3QgbmFtZXMgYXJlIGxpc3RlZCBcbiAgICBjb25zdCBwcm9qZWN0TmFtZXNXaW5kb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyBcbiAgICAvLyB0aGUgY2xhc3Mgb2YgdGhlIHByb2plY3QgbmFtZXMgd2luZG93IGlzIHByb2plY3ROYW1lc1dpbmRvdyBcbiAgICBwcm9qZWN0TmFtZXNXaW5kb3cuY2xhc3NOYW1lID0gXCJwcm9qZWN0TmFtZXNXaW5kb3dcIjsgXG4gICAgLy8gcHJvamVjdCBuYW1lcyB3aW5kb3cgaXMgYWRkZWQgdG8gdGhlIHVzZXIgd2luZG93XG4gICAgdXNlcldpbmRvdy5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZXNXaW5kb3cpOyBcblxuICAgIC8vIHRoZSBkaXYgaW4gd2hpY2ggdGhlIGhlYWRlciBvZiB0aGUgcHJvamVjdCBuYW1lcyB3aW5kb3cgaXMgd3JpdHRlbiBcbiAgICBjb25zdCBwcm9qZWN0TmFtZXNXaW5kb3dIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyBcbiAgICAvLyB0aGUgY2xhc3Mgb2YgdGhlIHByb2plY3QgbmFtZXMgd2luZG93IGhlYWRlciBkaXYgXG4gICAgcHJvamVjdE5hbWVzV2luZG93SGVhZGVyLmNsYXNzTmFtZSA9IFwicHJvamVjdE5hbWVzV2luZG93SGVhZGVyXCI7IFxuICAgIC8vIHByb2plY3QgbmFtZXMgd2luZG93IGhlYWRlciBpcyB3cml0dGVuXG4gICAgcHJvamVjdE5hbWVzV2luZG93SGVhZGVyLnRleHRDb250ZW50ID0gXCJQUk9KRUNUU1wiO1xuICAgIC8vIHByb2plY3QgbmFtZXMgd2luZG93IGhlYWRlciBpcyBhZGRlZCB0byB0aGUgcHJvamVjdCBuYW1lcyB3aW5kb3dcbiAgICBwcm9qZWN0TmFtZXNXaW5kb3cuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVzV2luZG93SGVhZGVyKTsgXG5cbiAgICAvLyB0aGUgZGl2IGluIHdoaWNoIHRoZSBsaXN0IG9mIHByb2plY3QgbmFtZXMgc3RhbmRzIFxuICAgIGNvbnN0IHByb2plY3ROYW1lc0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyBcbiAgICAvLyB0aGUgY2xhc3Mgb2YgdGhlIHByb2plY3QgbmFtZXMgbGlzdCBkaXYgXG4gICAgcHJvamVjdE5hbWVzTGlzdC5jbGFzc05hbWUgPSBcInByb2plY3ROYW1lc0xpc3RcIjsgXG4gICAgLy8gcHJvamVjdCBuYW1lcyBsaXN0IGlzIGFkZGVkIHRvIHRoZSBwcm9qZWN0IG5hbWVzIHdpbmRvdyBcbiAgICBwcm9qZWN0TmFtZXNXaW5kb3cuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVzTGlzdCk7XG5cbiAgICAvLyB0aGUgd2luZG93IGluIHdoaWNoIHRoZSB0b2RvcyBhcmUgc2hvd24gXG4gICAgY29uc3QgdG9kb3NXaW5kb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyBcbiAgICAvLyB0aGUgY2xhc3Mgb2YgdGhlIHRvZG9zIHdpbmRvdyBpcyB0b2Rvc1dpbmRvdyBcbiAgICB0b2Rvc1dpbmRvdy5jbGFzc05hbWUgPSBcInRvZG9zV2luZG93XCI7IFxuICAgIC8vIHRvZG9zIHdpbmRvdyBpcyBhZGRlZCB0byB0aGUgdXNlciB3aW5kb3cgXG4gICAgdXNlcldpbmRvdy5hcHBlbmRDaGlsZCh0b2Rvc1dpbmRvdyk7XG59IFxuXG5mdW5jdGlvbiBzaHJpbmtQcm9qZWN0TmFtZSgpIHtcbiAgICB3aGlsZSAodGhpcy5wYXJlbnROb2RlLmNoaWxkTm9kZXMubGVuZ3RoID4gMSkge1xuICAgICAgICB0aGlzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5wYXJlbnROb2RlLmxhc3RDaGlsZCk7XG4gICAgfVxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV4cGFuZFByb2plY3ROYW1lLCB7b25jZTogdHJ1ZX0pO1xufVxuXG5mdW5jdGlvbiBleHBhbmRQcm9qZWN0TmFtZSgpIHtcbiAgICBjb25zdCBwcm9qZWN0T2JqZWN0ID0gZ2V0UHJvamVjdCh0aGlzLnRleHRDb250ZW50KTsgXG4gICAgY29uc3QgcHJvamVjdEFycmF5ID0gcHJvamVjdE9iamVjdC5wcm9qZWN0Q29udGVudDsgXG4gICAgY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgXG4gICAgdG9kb1RpdGxlLnRleHRDb250ZW50ID0gXCJUb2Rvc1wiO1xuICAgIHRvZG9UaXRsZS5jbGFzc05hbWUgPSBcInRvZG9UaXRsZVwiOyBcbiAgICB0aGlzLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQodG9kb1RpdGxlKTtcbiAgICBmb3IgKGxldCBpPTA7IGkgPCBwcm9qZWN0QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgdG9kb05hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyBcbiAgICAgICAgY29uc3QgdG9kb05hbWVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7IFxuICAgICAgICB0b2RvTmFtZVNwYW4udGV4dENvbnRlbnQgPSBwcm9qZWN0QXJyYXlbaV07XG4gICAgICAgIHRvZG9OYW1lU3Bhbi5jbGFzc05hbWUgPSBcInRvZG9MaXN0TmFtZVwiOyBcbiAgICAgICAgdG9kb05hbWVTcGFuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwcmludFRvZG8sIHtvbmNlOiB0cnVlfSk7XG4gICAgICAgIHRvZG9OYW1lRGl2LmFwcGVuZENoaWxkKHRvZG9OYW1lU3Bhbik7IFxuICAgICAgICB0b2RvTmFtZURpdi5jbGFzc05hbWUgPSBcInRvZG9MaXN0TmFtZURpdlwiOyBcbiAgICAgICAgdGhpcy5wYXJlbnROb2RlLmFwcGVuZENoaWxkKHRvZG9OYW1lRGl2KTtcbiAgICB9IFxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNocmlua1Byb2plY3ROYW1lLCB7b25jZTogdHJ1ZX0pO1xufVxuXG5mdW5jdGlvbiBpbXBsZW1lbnRQcm9qZWN0TmFtZXNMaXN0KCkgeyBcbiAgICAvLyBleGlzdGluZyBwcm9qZWN0IG5hbWVzIGlzIGZldGNoZWQgZnJvbSB0aGUgbG9jYWwgc3RvcmFnZVxuICAgIGNvbnN0IGV4aXN0aW5nUHJvamVjdE5hbWVzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImV4aXN0aW5nUHJvamVjdE5hbWVzXCIpKTsgXG4gICAgLy8gZXhpc3RpbmcgcHJvamVjdCBuYW1lcyBhcnJheSBhc3NpZ25lZCB0byBhIGNvbnN0YW50XG4gICAgY29uc3QgbmFtZXNBcnJheSA9IGV4aXN0aW5nUHJvamVjdE5hbWVzLnByb2plY3ROYW1lczsgXG4gICAgLy8gYWNjZXNzIHRvIHRoZSBwcm9qZWN0IG5hbWVzIGxpc3QgZGl2XG4gICAgY29uc3QgcHJvamVjdE5hbWVzTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcm9qZWN0TmFtZXNMaXN0XCIpWzBdOyBcbiAgICAvLyBhIGRpdiBmb3IgZWFjaCBwcm9qZWN0IG5hbWUgaXMgY3JlYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGxpc3Qgd2luZG93LCB0aGUgXG4gICAgLy8gcHJvamVjdCBuYW1lIGlzIHdyaXR0ZW5cbiAgICBmb3IgKGxldCBpPTA7IGkgPCBuYW1lc0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGl0ZW1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyBcbiAgICAgICAgLy8gdGhlIHByb2plY3QgbmFtZSBpcyB3cml0dGVuIGluIHRoZSBzcGFuIGVsZW1lbnRcbiAgICAgICAgY29uc3QgaXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgaXRlbU5hbWUudGV4dENvbnRlbnQgPSBuYW1lc0FycmF5W2ldOyBcbiAgICAgICAgaXRlbU5hbWUuY2xhc3NOYW1lID0gXCJwcm9qZWN0TmFtZVwiO1xuICAgICAgICBpdGVtRGl2LmNsYXNzTmFtZSA9IFwicHJvamVjdE5hbWVMaXN0SXRlbVwiOyBcbiAgICAgICAgaXRlbU5hbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV4cGFuZFByb2plY3ROYW1lLCB7b25jZTogdHJ1ZX0pO1xuICAgICAgICBpdGVtRGl2LmFwcGVuZENoaWxkKGl0ZW1OYW1lKTtcbiAgICAgICAgcHJvamVjdE5hbWVzTGlzdC5hcHBlbmRDaGlsZChpdGVtRGl2KTsgXG4gICAgfSBcbn1cblxuZXhwb3J0IHsgc2V0dXBNYWluRnJhbWVzLCBpbXBsZW1lbnRQcm9qZWN0TmFtZXNMaXN0IH07IiwiLy8gQSBmYWN0b3J5IGZ1bmN0aW9uIHRvIGNyZWF0ZSBhIHByb2plY3Qgb2JqZWN0LiBcbi8vIHByb2plY3RPYmplY3ROYW1lOiBUaGUgbmFtZSBvZiB0aGUgcHJvamVjdCBlbnRlcmVkIGJ5IHRoZSB1c2VyLiBcbi8vIHByb2plY3RDb250ZW50OiBUaGUgdG9kbyBsaXN0cyBjb250YWluZWQgYnkgdGhlIHByb2plY3QuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHByb2plY3RPYmplY3ROYW1lKSB7XG4gICAgLy8gdGhlIGNvbnRlbnQgb2YgdGhlIHByb2plY3QgaXMgaW5pdGlhbGx5IG5vdGhpbmcuIFxuICAgIGNvbnN0IHByb2plY3RDb250ZW50ID0gW107XG4gICAgcmV0dXJuIHsgcHJvamVjdE9iamVjdE5hbWUsIHByb2plY3RDb250ZW50IH07XG59IFxuXG4vLyBBIGZ1bmN0aW9uIHRvIGdldCBhIHByb2plY3QgZnJvbSB0aGUgbG9jYWwgc3RvcmFnZVxuLy8gcHJvamVjdE9iamVjdE5hbWU6IFRoZSBuYW1lIG9mIHRoZSBwcm9qZWN0LiBcbmZ1bmN0aW9uIGdldFByb2plY3QocHJvamVjdE9iamVjdE5hbWUpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcm9qZWN0T2JqZWN0TmFtZSkpO1xufVxuXG4vLyBBIGZ1bmN0aW9uIHRvIGFkZCB0byB0aGUgZXhpc3RpbmcgcHJvamVjdCBuYW1lcy4gXG4vLyB0aGVQcm9qZWN0T2JqZWN0OiBUaGUgcHJvamVjdCBvYmplY3QgdG8gYmUgc2F2ZWQgdG8gdGhlIGxvY2FsIHN0b3JhZ2UuIFxuZnVuY3Rpb24gYWRkVG9FeGlzdGluZ1Byb2plY3ROYW1lcyh0aGVQcm9qZWN0T2JqZWN0KSB7XG4gICAgY29uc3QgdGVtcE9iamVjdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJleGlzdGluZ1Byb2plY3ROYW1lc1wiKSk7IFxuICAgIHRlbXBPYmplY3QucHJvamVjdE5hbWVzLnB1c2godGhlUHJvamVjdE9iamVjdC5wcm9qZWN0T2JqZWN0TmFtZSk7IFxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZXhpc3RpbmdQcm9qZWN0TmFtZXNcIiwgSlNPTi5zdHJpbmdpZnkodGVtcE9iamVjdCkpO1xufVxuXG4vLyBBIGZ1bmN0aW9uIHRvIHNhdmUgdGhlIHByb2plY3Qgb2JqZWN0IHRvIHRoZSBsb2NhbCBzdG9yYWdlLiBcbi8vIHRoZVByb2plY3RPYmplY3Q6IFRoZSBwcm9qZWN0IG9iamVjdCB0byBiZSBzYXZlZCB0byB0aGUgbG9jYWwgc3RvcmFnZS4gXG5mdW5jdGlvbiBzYXZlUHJvamVjdCh0aGVQcm9qZWN0T2JqZWN0KSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhlUHJvamVjdE9iamVjdC5wcm9qZWN0T2JqZWN0TmFtZSwgSlNPTi5zdHJpbmdpZnkodGhlUHJvamVjdE9iamVjdCkpOyBcbn0gXG5cbi8vIEEgZnVuY3Rpb24gdG8gdXBkYXRlIHRoZSBjb250ZW50IG9mIGEgcHJvamVjdCBieSBhZGRpbmcgYSBuZXcgdG9kbyBsaXN0LlxuLy8gcHJvamVjdE9iamVjdE5hbWU6IFRoZSBuYW1lIG9mIHRoZSBwcm9qZWN0LiBcbi8vIHRvZG9MaXN0TmFtZTogVGhlIHRvZG8gbGlzdCB0byBiZSBhZGRlZCB0byB0aGUgY29udGVudCBvZiB0aGUgcHJvamVjdC4gXG5mdW5jdGlvbiBhZGRUb2RvTGlzdE5hbWUocHJvamVjdE9iamVjdE5hbWUsIHRvZG9MaXN0TmFtZSkgeyBcbiAgICAvLyB0aGUgY29udGVudCBvZiB0aGUgcHJvamVjdCB1cGRhdGVkIGJ5IGFkZGluZyB0aGUgdG9kbyBsaXN0LlxuICAgIHByb2plY3RPYmplY3ROYW1lLnByb2plY3RDb250ZW50LnB1c2godG9kb0xpc3ROYW1lKTsgXG4gICAgcmV0dXJuIHByb2plY3RPYmplY3ROYW1lO1xufSBcblxuLy8gQSBmdW5jdGlvbiB0byB1cGRhdGUgdGhlIGNvbnRlbnQgb2YgYSBwcm9qZWN0IGJ5IHJlbW92aW5nIGEgdG9kbyBsaXN0LlxuLy8gcHJvamVjdE9iamVjdE5hbWU6IFRoZSBuYW1lIG9mIHRoZSBwcm9qZWN0LiBcbi8vIHRvZG9MaXN0TmFtZTogVGhlIHRvZG8gbGlzdCB0byBiZSByZW1vdmVkIGZyb20gdGhlIGNvbnRlbnQgb2YgdGhlIHByb2plY3QuIFxuZnVuY3Rpb24gcmVtb3ZlVG9kb0xpc3ROYW1lKHByb2plY3RPYmplY3QsIHRvZG9MaXN0TmFtZSkgeyBcbiAgICAvLyB0aGUgaW5kZXggb2YgdGhlIHRvZG8gaXMgZm91bmRcbiAgICBjb25zdCBpbmRleCA9IHByb2plY3RPYmplY3QucHJvamVjdENvbnRlbnQuaW5kZXhPZih0b2RvTGlzdE5hbWUpOyBcbiAgICAvLyB0aGUgdG9kbyBpcyByZW1vdmVkXG4gICAgcHJvamVjdE9iamVjdC5wcm9qZWN0Q29udGVudC5zcGxpY2UoaW5kZXgsIDEpOyBcbiAgICByZXR1cm4gcHJvamVjdE9iamVjdDtcbn0gXG5cbi8vIEEgZnVuY3Rpb24gdG8gcmVtb3ZlIGEgcHJvamVjdCBuYW1lIGZyb20gdGhlIGV4aXN0aW5nIHByb2plY3QgbmFtZXMuIFxuLy8gdGhlUHJvamVjdE5hbWU6IFRoZSBwcm9qZWN0IG5hbWUgdG8gYmUgcmVtb3ZlZC5cbmZ1bmN0aW9uIHJlbW92ZUZyb21FeGlzdGluZ1Byb2plY3ROYW1lcyh0aGVQcm9qZWN0TmFtZSkge1xuICAgIGNvbnN0IHRlbXBPYmplY3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZXhpc3RpbmdQcm9qZWN0TmFtZXNcIikpOyBcbiAgICAvLyB0aGUgaW5kZXggb2YgdGhlIHByb2plY3QgbmFtZSBpcyBmb3VuZFxuICAgIGNvbnN0IGluZGV4ID0gdGVtcE9iamVjdC5wcm9qZWN0TmFtZXMuaW5kZXhPZih0aGVQcm9qZWN0TmFtZSk7IFxuICAgIC8vIHRoZSBwcm9qZWN0IG5hbWUgaXMgcmVtb3ZlZFxuICAgIHRlbXBPYmplY3QucHJvamVjdE5hbWVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJleGlzdGluZ1Byb2plY3ROYW1lc1wiLCBKU09OLnN0cmluZ2lmeSh0ZW1wT2JqZWN0KSk7XG59XG5cbi8vIEEgZnVuY3Rpb24gdG8gcmVtb3ZlIGEgcHJvamVjdCBmcm9tIHRoZSBsb2NhbCBzdG9yYWdlLiBcbi8vIHByb2plY3RPYmplY3ROYW1lOiBUaGUgbmFtZSBvZiB0aGUgcHJvamVjdC4gXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0KHByb2plY3RPYmplY3ROYW1lKSB7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0ocHJvamVjdE9iamVjdE5hbWUpOyBcbn1cblxuZXhwb3J0IHsgY3JlYXRlUHJvamVjdCwgZ2V0UHJvamVjdCwgYWRkVG9FeGlzdGluZ1Byb2plY3ROYW1lcywgc2F2ZVByb2plY3QsIFxuICAgIGFkZFRvZG9MaXN0TmFtZSwgcmVtb3ZlVG9kb0xpc3ROYW1lLCByZW1vdmVGcm9tRXhpc3RpbmdQcm9qZWN0TmFtZXMsIFxuICAgIGRlbGV0ZVByb2plY3QgfTsiLCIvLyB0aGUgZmFjdG9yeSBmdW5jdGlvbiB0byBjcmVhdGUgYSB0b2RvIGxpc3QuIFxuLy8gdGl0bGU6IFRoZSB0aXRsZSBvZiB0aGUgdG9kbyBsaXN0LCBlbnRlcmVkIGJ5IHRoZSB1c2VyLlxuLy8gZGVzY3JpcHRpb246IFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgdG9kbyBsaXN0LCBlbnRlcmVkIGJ5IHRoZSB1c2VyLiBcbi8vIGR1ZURhdGU6IFRoZSBkdWUgZGF0ZSBvZiB0aGUgdG9kbyBsaXN0LCBlbnRlcmVkIGJ5IHRoZSB1c2VyLiBcbi8vIHByaW9yaXR5OiBUaGUgcHJpb3JpdHkgb2YgdGhlIHRvZG8gbGlzdCwgZW50ZXJlZCBieSB0aGUgdXNlci4gXG4vLyBvd25lclByb2plY3Q6IFRoZSBwcm9qZWN0IHdoaWNoIG93bnMgdGhlIHRvZG8gbGlzdC5cbmZ1bmN0aW9uIGNyZWF0ZVRvZG9MaXN0KHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG93bmVyUHJvamVjdCkge1xuICAgIHJldHVybiB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG93bmVyUHJvamVjdCB9O1xufVxuXG4vLyB0aGUgZnVuY3Rpb24gdG8gc2F2ZSBhIHRvZG8gbGlzdCBpbiBhIHByb2plY3QuIFxuLy8gdGhlVG9kb09iamVjdDogVGhlIHRvZG8gb2JqZWN0IHRvIGJlIHNhdmVkIGluIHRoZSBsb2NhbCBzdG9yYWdlLiBcbi8vIFRoZSBuYW1lIG9mIHRoZSB0b2RvIGluIHRoZSBsb2NhbCBzdG9yYWdlLCBkZXRlcm1pbmVkIGJ5IHRoZSBwcm9ncmFtbWVyLiBcbi8vIHRoZVByb2plY3ROYW1lOiBUaGUgbmFtZSBvZiB0aGUgcHJvamVjdCB0aGUgY29udGVudCBvZiB3aGljaCBpcyB0byBiZSB1cGRhdGVkIFxuLy8gYnkgYWRkaW5nIHRoZSBuZXcgdG9kbyBsaXN0LlxuZnVuY3Rpb24gc2F2ZVRvZG9MaXN0KHRvZG9TdG9yYWdlTmFtZSwgdG9kb09iamVjdCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRvZG9TdG9yYWdlTmFtZSwgSlNPTi5zdHJpbmdpZnkodG9kb09iamVjdCkpOyBcbn1cblxuLy8gdGhlIGZ1bmN0aW9uIHRvIGdldCBhIHRvZG8gbGlzdCBcbi8vIHRvZG9TdG9yYWdlTmFtZTogVGhlIHN0b3JhZ2UgbmFtZSBvZiB0aGUgdG9kbyBsaXN0IFxuZnVuY3Rpb24gZ2V0VG9kbyh0b2RvU3RvcmFnZU5hbWUpIHtcbiAgICBjb25zdCB0ZW1wT2JqZWN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0b2RvU3RvcmFnZU5hbWUpKTsgXG4gICAgcmV0dXJuIHRlbXBPYmplY3Q7XG59IFxuXG4vLyB0aGUgZnVuY3Rpb24gdG8gdXBkYXRlIHRoZSB0aXRsZSBvZiBhIHRvZG8gbGlzdC4gXG4vLyB0b2RvU3RvcmFnZU5hbWU6IFRoZSBzdG9yYWdlIG5hbWUgb2YgdGhlIHRvZG8gbGlzdCBcbi8vIG5ld1RpdGxlOiBUaGUgbmV3IHRpdGxlIG9mIHRoZSB0b2RvIGxpc3RcbmZ1bmN0aW9uIHVwZGF0ZVRvZG9MaXN0VGl0bGUodG9kb09iamVjdCwgbmV3VGl0bGUpIHtcbiAgICB0b2RvT2JqZWN0LnRpdGxlID0gbmV3VGl0bGU7IFxuICAgIHJldHVybiB0b2RvT2JqZWN0O1xufSBcblxuLy8gdGhlIGZ1bmN0aW9uIHRvIHVwZGF0ZSB0aGUgZGVzY3JpcHRpb24gb2YgYSB0b2RvIGxpc3QuIFxuLy8gdG9kb1N0b3JhZ2VOYW1lOiBUaGUgc3RvcmFnZSBuYW1lIG9mIHRoZSB0b2RvIGxpc3QgXG4vLyBuZXdUaXRsZTogVGhlIG5ldyBkZXNjcmlwdGlvbiBvZiB0aGUgdG9kbyBsaXN0XG5mdW5jdGlvbiB1cGRhdGVUb2RvTGlzdERlc2NyaXB0aW9uKHRvZG9PYmplY3QsIG5ld0Rlc2NyaXB0aW9uKSB7XG4gICAgdG9kb09iamVjdC5kZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uOyBcbiAgICByZXR1cm4gdG9kb09iamVjdDtcbn0gXG5cbi8vIHRoZSBmdW5jdGlvbiB0byB1cGRhdGUgdGhlIGR1ZSBkYXRlIG9mIGEgdG9kbyBsaXN0LiBcbi8vIHRvZG9TdG9yYWdlTmFtZTogVGhlIHN0b3JhZ2UgbmFtZSBvZiB0aGUgdG9kbyBsaXN0IFxuLy8gbmV3RHVlRGF0ZTogVGhlIG5ldyBkdWUgZGF0ZSBvZiB0aGUgdG9kbyBsaXN0XG5mdW5jdGlvbiB1cGRhdGVUb2RvTGlzdER1ZURhdGUodG9kb09iamVjdCwgbmV3RHVlRGF0ZSkge1xuICAgIHRvZG9PYmplY3QuZHVlRGF0ZSA9IG5ld0R1ZURhdGU7XG4gICAgcmV0dXJuIHRvZG9PYmplY3Q7XG59IFxuXG4vLyB0aGUgZnVuY3Rpb24gdG8gdXBkYXRlIHRoZSBwcmlvcml0eSBvZiBhIHRvZG8gbGlzdC4gXG4vLyB0b2RvU3RvcmFnZU5hbWU6IFRoZSBzdG9yYWdlIG5hbWUgb2YgdGhlIHRvZG8gbGlzdCBcbi8vIG5ld1ByaW9yaXR5OiBUaGUgbmV3IHByaW9yaXR5IG9mIHRoZSB0b2RvIGxpc3RcbmZ1bmN0aW9uIHVwZGF0ZVRvZG9MaXN0UHJpb3JpdHkodG9kb09iamVjdCwgbmV3UHJpb3JpdHkpIHtcbiAgICB0b2RvT2JqZWN0LnByaW9yaXR5ID0gbmV3UHJpb3JpdHk7IFxuICAgIHJldHVybiB0b2RvT2JqZWN0O1xufSBcblxuLy8gdGhlIGZ1bmN0aW9uIHRvIGRlbGV0ZSBhIHRvZG8gbGlzdCBcbi8vIHRvZG9TdG9yYWdlTmFtZTogVGhlIHN0b3JhZ2UgbmFtZSBvZiB0aGUgdG9kbyBsaXN0IFxuZnVuY3Rpb24gZGVsZXRlVG9kb0xpc3QodG9kb1N0b3JhZ2VOYW1lKSB7IFxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHRvZG9TdG9yYWdlTmFtZSk7IFxufSBcblxuLy8gdGhlIGZ1bmN0aW9uIHRvIHVwZGF0ZSB0aGUgc3RvcmFnZSBuYW1lIG9mIHRoZSB0b2RvIFxuZnVuY3Rpb24gdXBkYXRlVG9kb0xpc3RTdG9yYWdlTmFtZShwcmV2aW91c1N0b3JhZ2VOYW1lLCBuZXdPd25lclByb2plY3ROYW1lKSB7XG4gICAgY29uc3QgdGVtcE9iamVjdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0ocHJldmlvdXNTdG9yYWdlTmFtZSkpOyBcbiAgICB0ZW1wT2JqZWN0Lm93bmVyUHJvamVjdCA9IG5ld093bmVyUHJvamVjdE5hbWU7IFxuICAgIHJldHVybiB0ZW1wT2JqZWN0O1xufVxuXG5leHBvcnQgeyBjcmVhdGVUb2RvTGlzdCwgc2F2ZVRvZG9MaXN0LCB1cGRhdGVUb2RvTGlzdFRpdGxlLCBcbiAgICB1cGRhdGVUb2RvTGlzdERlc2NyaXB0aW9uLCB1cGRhdGVUb2RvTGlzdER1ZURhdGUsIHVwZGF0ZVRvZG9MaXN0UHJpb3JpdHksIFxuICAgIGRlbGV0ZVRvZG9MaXN0LCBnZXRUb2RvLCB1cGRhdGVUb2RvTGlzdFN0b3JhZ2VOYW1lfSIsImltcG9ydCB7IGdldFRvZG8gfSBmcm9tIFwiLi90b2RvTGlzdE1vZHVsZVwiO1xuXG5mdW5jdGlvbiBwcmludFRvZG8oKSB7XG4gICAgLy8gdGhlIG5hbWUgb2YgdGhlIHByb2plY3Qgd2hpY2ggb3ducyB0aGUgdG9kb1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gdGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGUuZmlyc3RDaGlsZC50ZXh0Q29udGVudDsgXG4gICAgLy8gdGhlIG5hbWUgb2YgdGhlIHRvZG9cbiAgICBjb25zdCB0b2RvTmFtZSA9IHRoaXMudGV4dENvbnRlbnQ7IFxuICAgIC8vIHRoZSBzdG9yYWdlIG5hbWUgb2YgdGhlIHRvZG9cbiAgICBjb25zdCB0b2RvU3RvcmFnZU5hbWUgPSBwcm9qZWN0TmFtZSArIFwiLVwiICsgdG9kb05hbWU7IFxuICAgIGNvbnN0IHRvZG9PYmplY3QgPSBnZXRUb2RvKHRvZG9TdG9yYWdlTmFtZSk7IFxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHByaW50VG9kbywge29uY2U6IHRydWV9KTsgXG4gICAgY29uc29sZS5sb2codG9kb09iamVjdCk7IFxuICAgIC8vIGFjY2VzcyB0byB0aGUgdG9kb3Mgd2luZG93IGRpdlxuICAgIGNvbnN0IHRvZG9zV2luZG93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRvZG9zV2luZG93XCIpWzBdO1xuICAgIC8vIGNyZWF0ZSB0aGUgaW5wdXQgZWxlbWVudCBmb3IgdGhlIHRvZG8gdGl0bGVcbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpOyBcbiAgICAvLyBzZXQgdGhlIHR5cGUgb2YgdGhlIGlucHV0IGZpZWxkIFxuICAgIHRpdGxlSW5wdXQudHlwZSA9IFwidGV4dFwiOyBcbiAgICAvLyBzZXQgdGhlIGlkIG9mIHRoZSBpbnB1dCBmaWVsZCBcbiAgICB0aXRsZUlucHV0LmlkID0gXCJ0aXRsZVwiOyBcbiAgICAvLyBzZXQgdGhlIHZhbHVlIG9mIHRoZSBpbnB1dCBmaWVsZCBcbiAgICB0aXRsZUlucHV0LnZhbHVlID0gdG9kb09iamVjdC50aXRsZTsgXG5cbiAgICAvLyBjbGVhciB0aGUgdG9kb3Mgd2luZG93XG4gICAgd2hpbGUgKHRvZG9zV2luZG93LmNoaWxkTm9kZXMubGVuZ3RoID49IDEpIHtcbiAgICAgICAgdG9kb3NXaW5kb3cucmVtb3ZlQ2hpbGQodG9kb3NXaW5kb3cubGFzdENoaWxkKTtcbiAgICB9IFxuICAgIC8vIHByaW50IHRoZSB0aXRsZSBvZiB0aGUgdG9kb1xuICAgIHRvZG9zV2luZG93LmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xufSBcblxuZXhwb3J0IHsgcHJpbnRUb2RvIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgY3JlYXRlVG9kb0xpc3QsIHNhdmVUb2RvTGlzdCwgZ2V0VG9kbywgdXBkYXRlVG9kb0xpc3RTdG9yYWdlTmFtZSwgXG4gICAgZGVsZXRlVG9kb0xpc3QsIHVwZGF0ZVRvZG9MaXN0VGl0bGUsIHVwZGF0ZVRvZG9MaXN0RGVzY3JpcHRpb24sIFxuICAgIHVwZGF0ZVRvZG9MaXN0RHVlRGF0ZSwgdXBkYXRlVG9kb0xpc3RQcmlvcml0eSB9IGZyb20gXCIuL3RvZG9MaXN0TW9kdWxlXCI7XG5cbmltcG9ydCB7IGNyZWF0ZVByb2plY3QsIHNhdmVQcm9qZWN0LCBhZGRUb0V4aXN0aW5nUHJvamVjdE5hbWVzLCBhZGRUb2RvTGlzdE5hbWUsIFxuZ2V0UHJvamVjdCwgcmVtb3ZlVG9kb0xpc3ROYW1lLCBkZWxldGVQcm9qZWN0LCByZW1vdmVGcm9tRXhpc3RpbmdQcm9qZWN0TmFtZXMgfSBcbmZyb20gXCIuL3Byb2plY3RNb2R1bGVcIjtcblxuaW1wb3J0IHsgc2V0dXBNYWluRnJhbWVzLCBpbXBsZW1lbnRQcm9qZWN0TmFtZXNMaXN0IH0gZnJvbSBcIi4vbWFpbldpbmRvd3NNb2R1bGVcIjtcblxuLy8gVGhlIGZ1bmN0aW9ucyBmb3IgZGVhbGluZyB3aXRoIHRvZG8gbGlzdHMgYW5kIHJlbGF0ZWQgcHJvamVjdHMgYXJlIG5vdyB0byBiZSBcbi8vIHRlc3RlZCB1c2luZyB0aGUgY29uc29sZS4gXG5cbi8vIGxvY2FsIHN0b3JhZ2UgaXMgY2xlYXJlZFxubG9jYWxTdG9yYWdlLmNsZWFyKCk7XG5cbi8vIHRoZSB2YXJpYWJsZSBmb3IgdGhlIGV4aXN0aW5nIHByb2plY3QgbmFtZXMgaXMgZGVjbGFyZWRcbmxldCBleGlzdGluZ1Byb2plY3ROYW1lcztcblxuLy8gQ2hlY2sgaWYgdGhlIG9iamVjdCBcImV4aXN0aW5nUHJvamVjdE5hbWVzXCIgZXhpc3RzIG9uIHRoZSBsb2NhbCBzdG9yYWdlLiBJZiBpdCBcbi8vIGV4aXN0cywgZmV0Y2ggaXQgZnJvbSB0aGUgbG9jYWwgc3RvcmFnZS4gT3RoZXJ3aXNlLCBjcmVhdGUgaXQgYW5kIHN0b3JlIGl0IGluIFxuLy8gdGhlIGxvY2FsIHN0b3JhZ2UuIFxuaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImV4aXN0aW5nUHJvamVjdE5hbWVzXCIpKSB7XG4gICAgZXhpc3RpbmdQcm9qZWN0TmFtZXMgPSB7XG4gICAgICAgIHByb2plY3ROYW1lczogW10sXG4gICAgfTtcbiAgICBjb25zb2xlLmxvZyhcIk5vIGV4aXN0aW5nUHJvamVjdE5hbWVzIG9iamVjdCBpbiB0aGUgbG9jYWwgc3RvcmFnZSFcIik7IFxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZXhpc3RpbmdQcm9qZWN0TmFtZXNcIiwgSlNPTi5zdHJpbmdpZnkoZXhpc3RpbmdQcm9qZWN0TmFtZXMpKTtcbn0gXG5lbHNlIHtcbiAgICBjb25zb2xlLmxvZyhcImV4aXN0aW5nUHJvamVjdE5hbWVzIG9iamVjdCBpbiB0aGUgbG9jYWwgc3RvcmFnZSFcIik7XG4gICAgZXhpc3RpbmdQcm9qZWN0TmFtZXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZXhpc3RpbmdQcm9qZWN0TmFtZXNcIikpOyBcbiAgICBjb25zb2xlLmxvZyhcImV4aXN0aW5nIHByb2plY3QgbmFtZXM6XCIpO1xuICAgIGNvbnNvbGUubG9nKGV4aXN0aW5nUHJvamVjdE5hbWVzKTtcbn0gXG5cbi8vIEFzc3VtZSB0aGF0IGEgbmV3IHRvZG8gbGlzdCBpcyBjcmVhdGVkIGFuZCBzYXZlZCBpbiB0aGUgbG9jYWwgc3RvcmFnZVxubGV0IHRpdGxlID0gXCJUaGUgYm9vayByZXZpZXdcIjsgXG5sZXQgZGVzY3JpcHRpb24gPSBcIkkgYW0gc3RhcnRpbmcgYSBib29rIHJldmlldy5cIjtcbmxldCBkdWVEYXRlID0gXCIxMC4wNC4yMDI0XCI7XG5sZXQgcHJpb3JpdHkgPSBcImhpZ2hcIjsgXG5sZXQgb3duZXJQcm9qZWN0ID0gXCJCb29rUmV2aWV3XCI7XG4vLyB0b2RvIGlzIGNyZWF0ZWRcbmxldCB0b2RvID0gY3JlYXRlVG9kb0xpc3QodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgb3duZXJQcm9qZWN0KTsgXG4vLyBzdG9yYWdlIG5hbWUgb2YgdGhlIHRvZG8gaXMgZGV0ZXJtaW5lZCBieSB0aGUgcHJvZ3JhbW1lclxubGV0IHN0b3JhZ2VOYW1lID0gb3duZXJQcm9qZWN0ICsgXCItXCIgKyB0aXRsZTsgXG5jb25zb2xlLmxvZyhcInRoZSBmaXJzdCB0b2RvXCIpO1xuY29uc29sZS5sb2codG9kbyk7IFxuY29uc29sZS5sb2coXCJleGlzdGluZyBwcm9qZWN0IG5hbWVzOlwiKTsgXG5jb25zb2xlLmxvZyhleGlzdGluZ1Byb2plY3ROYW1lcyk7IFxuLy8gaXMgdGhlIHByb2plY3QgYWxyZWFkeSBleGlzdGluZz9cbmxldCBpbmRleCA9IGV4aXN0aW5nUHJvamVjdE5hbWVzLnByb2plY3ROYW1lcy5pbmRleE9mKG93bmVyUHJvamVjdCk7IFxuaWYgKGluZGV4ID09PSAtMSkgeyAvLyB0aGUgcHJvamVjdCBpcyBuZXdcbiAgICAvLyBIZW5jZSwgY3JlYXRlIGl0XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IGNyZWF0ZVByb2plY3Qob3duZXJQcm9qZWN0KTsgXG4gICAgLy8gc2F2ZSBpdCBpbiB0aGUgbG9jYWwgc3RvcmFnZVxuICAgIHNhdmVQcm9qZWN0KG5ld1Byb2plY3QpOyBcbiAgICAvLyByZWdpc3RlciBpdCB0byB0aGUgZXhpc3RpbmcgcHJvamVjdCBuYW1lc1xuICAgIGFkZFRvRXhpc3RpbmdQcm9qZWN0TmFtZXMobmV3UHJvamVjdCk7XG59IFxuLy8gdGhlIHRvZG8gaXMgc3RvcmVkIGluIHRoZSBzdG9yYWdlXG5zYXZlVG9kb0xpc3Qoc3RvcmFnZU5hbWUsIHRvZG8pOyBcblxuLy8gcmVnaXN0ZXIgdGhlIG5ldyB0b2RvIGxpc3QgdG8gdGhlIG93bmVyIHByb2plY3RcbmxldCBvd25lclByb2plY3RPYmplY3QgPSBnZXRQcm9qZWN0KG93bmVyUHJvamVjdCk7IFxub3duZXJQcm9qZWN0T2JqZWN0ID0gYWRkVG9kb0xpc3ROYW1lKG93bmVyUHJvamVjdE9iamVjdCwgdGl0bGUpOyBcbnNhdmVQcm9qZWN0KG93bmVyUHJvamVjdE9iamVjdCk7XG5cbmV4aXN0aW5nUHJvamVjdE5hbWVzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImV4aXN0aW5nUHJvamVjdE5hbWVzXCIpKTsgXG5jb25zb2xlLmxvZyhcImV4aXN0aW5nIHByb2plY3QgbmFtZXMgYWZ0ZXIgdGhlIHByb2plY3QgY3JlYXRpb246XCIpO1xuY29uc29sZS5sb2coZXhpc3RpbmdQcm9qZWN0TmFtZXMpOyBcbmxldCB0aGVPd25lclByb2plY3QgPSBnZXRQcm9qZWN0KG93bmVyUHJvamVjdCk7IFxuY29uc29sZS5sb2coXCJ0aGUgb3duZXIgcHJvamVjdCBvZiB0aGUgZmlyc3QgdG9kbzpcIik7XG5jb25zb2xlLmxvZyh0aGVPd25lclByb2plY3QpOyBcblxuLy8gQXNzdW1lIHRoYXQgYSBuZXcgdG9kbyBsaXN0IGlzIGNyZWF0ZWQgYW5kIHNhdmVkIGluIGFuIGV4aXN0aW5nIHByb2plY3QgXG50aXRsZSA9IFwiVGhlIHJldmlldyBlZGl0XCI7IFxuZGVzY3JpcHRpb24gPSBcIkkgYW0gZWRpdGluZyB0aGUgYm9vayByZXZpZXcuXCI7XG5kdWVEYXRlID0gXCIxMC4wNS4yMDI0XCI7XG5wcmlvcml0eSA9IFwiaGlnaFwiOyBcbm93bmVyUHJvamVjdCA9IFwiQm9va1Jldmlld1wiO1xuLy8gdG9kbyBpcyBjcmVhdGVkXG50b2RvID0gY3JlYXRlVG9kb0xpc3QodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgb3duZXJQcm9qZWN0KTsgXG4vLyBzdG9yYWdlIG5hbWUgb2YgdGhlIHRvZG8gaXMgZGV0ZXJtaW5lZCBieSB0aGUgcHJvZ3JhbW1lclxuc3RvcmFnZU5hbWUgPSBvd25lclByb2plY3QgKyBcIi1cIiArIHRpdGxlOyBcbmNvbnNvbGUubG9nKFwidGhlIHNlY29uZCB0b2RvXCIpO1xuY29uc29sZS5sb2codG9kbyk7XG4vLyB0aGUgdG9kbyBpcyBzdG9yZWQgaW4gdGhlIHN0b3JhZ2VcbnNhdmVUb2RvTGlzdChzdG9yYWdlTmFtZSwgdG9kbyk7IFxuLy8gaXMgdGhlIHRvZG8gc3RvcmVkIGluIHRoZSBsb2NhbCBzdG9yYWdlPyBcbnRvZG8gPSBnZXRUb2RvKHN0b3JhZ2VOYW1lKTtcbmNvbnNvbGUubG9nKFwiaXMgdGhlIHRvZG8gcmVhbGx5IHN0b3JlZCBpbiB0aGUgbG9jYWwgc3RvcmFnZT9cIik7IFxuY29uc29sZS5sb2codG9kbyk7XG5jb25zb2xlLmxvZyhcImV4aXN0aW5nIHByb2plY3QgbmFtZXM6XCIpOyBcbmNvbnNvbGUubG9nKGV4aXN0aW5nUHJvamVjdE5hbWVzKTsgXG4vLyBpcyB0aGUgcHJvamVjdCBhbHJlYWR5IGV4aXN0aW5nP1xuaW5kZXggPSBleGlzdGluZ1Byb2plY3ROYW1lcy5wcm9qZWN0TmFtZXMuaW5kZXhPZihvd25lclByb2plY3QpOyBcbmlmIChpbmRleCA9PT0gLTEpIHsgLy8gdGhlIHByb2plY3QgaXMgbmV3XG4gICAgLy8gSGVuY2UsIGNyZWF0ZSBpdFxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBjcmVhdGVQcm9qZWN0KG93bmVyUHJvamVjdCk7IFxuICAgIC8vIHNhdmUgaXQgaW4gdGhlIGxvY2FsIHN0b3JhZ2VcbiAgICBzYXZlUHJvamVjdChuZXdQcm9qZWN0KTsgXG4gICAgLy8gcmVnaXN0ZXIgaXQgdG8gdGhlIGV4aXN0aW5nIHByb2plY3QgbmFtZXNcbiAgICBhZGRUb0V4aXN0aW5nUHJvamVjdE5hbWVzKG5ld1Byb2plY3QpO1xufSBcbi8vIHJlZ2lzdGVyIHRoZSBuZXcgdG9kbyBsaXN0IHRvIHRoZSBvd25lciBwcm9qZWN0IFxub3duZXJQcm9qZWN0T2JqZWN0ID0gZ2V0UHJvamVjdChvd25lclByb2plY3QpOyBcbm93bmVyUHJvamVjdE9iamVjdCA9IGFkZFRvZG9MaXN0TmFtZShvd25lclByb2plY3RPYmplY3QsIHRpdGxlKTsgXG5zYXZlUHJvamVjdChvd25lclByb2plY3RPYmplY3QpO1xuXG5leGlzdGluZ1Byb2plY3ROYW1lcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJleGlzdGluZ1Byb2plY3ROYW1lc1wiKSk7IFxuY29uc29sZS5sb2coXCJleGlzdGluZyBwcm9qZWN0IG5hbWVzOlwiKTtcbmNvbnNvbGUubG9nKGV4aXN0aW5nUHJvamVjdE5hbWVzKTsgXG50aGVPd25lclByb2plY3QgPSBnZXRQcm9qZWN0KG93bmVyUHJvamVjdCk7IFxuY29uc29sZS5sb2coXCJ0aGUgb3duZXIgcHJvamVjdCBvZiB0aGUgc2Vjb25kIHRvZG86XCIpOyBcbmNvbnNvbGUubG9nKHRoZU93bmVyUHJvamVjdCk7IFxuXG4vLyBhIG5ldyBwcm9qZWN0IGlzIGNyZWF0ZWRcbmNvbnN0IG5ld1Byb2plY3QyID0gY3JlYXRlUHJvamVjdChcIkVkaXRzXCIpOyBcbi8vIHNhdmUgaXQgaW4gdGhlIGxvY2FsIHN0b3JhZ2VcbnNhdmVQcm9qZWN0KG5ld1Byb2plY3QyKTsgXG4vLyByZWdpc3RlciBpdCB0byB0aGUgZXhpc3RpbmcgcHJvamVjdCBuYW1lc1xuYWRkVG9FeGlzdGluZ1Byb2plY3ROYW1lcyhuZXdQcm9qZWN0Mik7IFxuZXhpc3RpbmdQcm9qZWN0TmFtZXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZXhpc3RpbmdQcm9qZWN0TmFtZXNcIikpOyBcbmNvbnNvbGUubG9nKFwiZXhpc3RpbmcgcHJvamVjdCBuYW1lczpcIik7XG5jb25zb2xlLmxvZyhleGlzdGluZ1Byb2plY3ROYW1lcyk7IFxuXG4vLyB1cGRhdGUgdGhlIHN0b3JhZ2UgbmFtZSBvZiB0aGUgdG9kbyBcIlRoZSByZXZpZXcgZWRpdFwiIFxubGV0IHByZXZpb3VzT3duZXJQcm9qZWN0ID0gXCJCb29rUmV2aWV3XCI7IFxubGV0IHByZXZpb3VzU3RvcmFnZU5hbWUgPSBwcmV2aW91c093bmVyUHJvamVjdCtcIi1cIitcIlRoZSByZXZpZXcgZWRpdFwiO1xubGV0IHVwZGF0ZWRUb2RvID0gdXBkYXRlVG9kb0xpc3RTdG9yYWdlTmFtZShwcmV2aW91c1N0b3JhZ2VOYW1lLCBcIkVkaXRzXCIpOyBcbmRlbGV0ZVRvZG9MaXN0KHByZXZpb3VzU3RvcmFnZU5hbWUpOyBcbmxldCBwcmV2aW91c093bmVyUHJvamVjdE9iamVjdCA9IGdldFByb2plY3QocHJldmlvdXNPd25lclByb2plY3QpO1xucHJldmlvdXNPd25lclByb2plY3RPYmplY3QgPSByZW1vdmVUb2RvTGlzdE5hbWUoXG4gICAgcHJldmlvdXNPd25lclByb2plY3RPYmplY3QsIHByZXZpb3VzU3RvcmFnZU5hbWUpOyBcbnNhdmVQcm9qZWN0KHByZXZpb3VzT3duZXJQcm9qZWN0T2JqZWN0KTsgXG5zYXZlVG9kb0xpc3QoXCJFZGl0c1wiK1wiLVwiK1wiVGhlIHJldmlldyBlZGl0XCIsIHVwZGF0ZWRUb2RvKTsgXG5cbi8vIGFkZCB0aGUgdG9kbyB0byB0aGUgY29udGVudCBvZiB0aGUgXCJFZGl0c1wiIHByb2plY3QgXG5vd25lclByb2plY3RPYmplY3QgPSBnZXRQcm9qZWN0KFwiRWRpdHNcIik7IFxub3duZXJQcm9qZWN0T2JqZWN0ID0gYWRkVG9kb0xpc3ROYW1lKG93bmVyUHJvamVjdE9iamVjdCwgXCJUaGUgcmV2aWV3IGVkaXRcIik7IFxuc2F2ZVByb2plY3Qob3duZXJQcm9qZWN0T2JqZWN0KTtcbi8vIEhhcyB1cGRhdGVUb2RvTGlzdFN0b3JhZ2VOYW1lIGZ1bmN0aW9uIHdvcmtlZCBjb3JyZWN0bHk/XG50b2RvID0gZ2V0VG9kbyhcIkVkaXRzLVRoZSByZXZpZXcgZWRpdFwiKTtcbmNvbnNvbGUubG9nKFwiaXMgdGhlIHRvZG8gcmVhbGx5IHN0b3JlZCBpbiB0aGUgbG9jYWwgc3RvcmFnZT9cIik7IFxuY29uc29sZS5sb2codG9kbyk7IFxuLy8gaXQgaXMgY2hlY2tlZCBpZiB0aGUgdG9kbyBpcyBhZGRlZCB0byB0aGUgXCJFZGl0c1wiIHByb2plY3RcbnRoZU93bmVyUHJvamVjdCA9IGdldFByb2plY3QoXCJFZGl0c1wiKTsgXG5jb25zb2xlLmxvZyhcInRoZSBwcm9qZWN0IHRvIHdoaWNoIHRoZSBzZWNvbmQgdG9kbyBpcyBhZGRlZDpcIik7IFxuY29uc29sZS5sb2codGhlT3duZXJQcm9qZWN0KTsgXG5cbi8vIHRoZSB0aXRsZSBvZiB0aGUgdG9kbyBcIkVkaXRzLVRoZSByZXZpZXcgZWRpdFwiIGlzIHRvIGJlIHVwZGF0ZWQgdG8gdGhlIG5ldyB0aXRsZSBcbi8vIFwiRWRpdHMtVGhlIHJldmlldyBvZiB0aGUgZWRpdFwiIFxudG9kbyA9IGdldFRvZG8oXCJFZGl0cy1UaGUgcmV2aWV3IGVkaXRcIik7IFxudG9kbyA9IHVwZGF0ZVRvZG9MaXN0VGl0bGUodG9kbywgXCJUaGUgcmV2aWV3IG9mIHRoZSBlZGl0XCIpO1xuc2F2ZVRvZG9MaXN0KFwiRWRpdHMtVGhlIHJldmlldyBlZGl0XCIsIHRvZG8pOyBcbi8vIEhhcyB1cGRhdGVUb2RvTGlzdFRpdGxlIGZ1bmN0aW9uIHdvcmtlZCBjb3JyZWN0bHk/XG50b2RvID0gZ2V0VG9kbyhcIkVkaXRzLVRoZSByZXZpZXcgZWRpdFwiKTtcbmNvbnNvbGUubG9nKFwiaXMgdGhlIHRvZG8gdGl0bGUgdXBkYXRlZCB0byAnVGhlIHJldmlldyBvZiB0aGUgZWRpdCc/XCIpOyBcbmNvbnNvbGUubG9nKHRvZG8pOyBcblxuLy8gdGhlIGRlc2NyaXB0aW9uIG9mIHRoZSB0b2RvIGlzIHRvIGJlIHVwZGF0ZWQgXG5kZXNjcmlwdGlvbiA9IFwiVGhlIGJvb2sgcmV2aWV3IGlzIHRvIGJlIGVkaXRlZC5cIjtcbnRvZG8gPSBnZXRUb2RvKFwiRWRpdHMtVGhlIHJldmlldyBlZGl0XCIpOyBcbnRvZG8gPSB1cGRhdGVUb2RvTGlzdERlc2NyaXB0aW9uKHRvZG8sIGRlc2NyaXB0aW9uKTtcbnNhdmVUb2RvTGlzdChcIkVkaXRzLVRoZSByZXZpZXcgZWRpdFwiLCB0b2RvKTsgXG4vLyBIYXMgdXBkYXRlVG9kb0xpc3REZXNjcmlwdGlvbiBmdW5jdGlvbiB3b3JrZWQgY29ycmVjdGx5P1xudG9kbyA9IGdldFRvZG8oXCJFZGl0cy1UaGUgcmV2aWV3IGVkaXRcIik7XG5jb25zb2xlLmxvZyhcImlzIHRoZSB0b2RvIGRlc2NyaXB0aW9uIHVwZGF0ZWQgcHJvcGVybHk/XCIpOyBcbmNvbnNvbGUubG9nKHRvZG8pOyBcblxuLy8gdGhlIGR1ZSBkYXRlIG9mIHRoZSB0b2RvIGlzIHRvIGJlIHVwZGF0ZWQgXG5kdWVEYXRlID0gXCIxMS4wNS4yMDI0XCI7IFxudG9kbyA9IGdldFRvZG8oXCJFZGl0cy1UaGUgcmV2aWV3IGVkaXRcIik7IFxudG9kbyA9IHVwZGF0ZVRvZG9MaXN0RHVlRGF0ZSh0b2RvLCBkdWVEYXRlKTtcbnNhdmVUb2RvTGlzdChcIkVkaXRzLVRoZSByZXZpZXcgZWRpdFwiLCB0b2RvKTsgXG4vLyBIYXMgdXBkYXRlVG9kb0xpc3REdWVEYXRlIGZ1bmN0aW9uIHdvcmtlZCBjb3JyZWN0bHk/XG50b2RvID0gZ2V0VG9kbyhcIkVkaXRzLVRoZSByZXZpZXcgZWRpdFwiKTtcbmNvbnNvbGUubG9nKFwiaXMgdGhlIHRvZG8gZGVzY3JpcHRpb24gdXBkYXRlZCBwcm9wZXJseT9cIik7IFxuY29uc29sZS5sb2codG9kbyk7IFxuXG4vLyB0aGUgcHJpb3JpdHkgb2YgdGhlIHRvZG8gaXMgdG8gYmUgdXBkYXRlZCBcbnByaW9yaXR5ID0gXCJ2ZXJ5IGhpZ2hcIjsgXG50b2RvID0gZ2V0VG9kbyhcIkVkaXRzLVRoZSByZXZpZXcgZWRpdFwiKTsgXG50b2RvID0gdXBkYXRlVG9kb0xpc3RQcmlvcml0eSh0b2RvLCBwcmlvcml0eSk7XG5zYXZlVG9kb0xpc3QoXCJFZGl0cy1UaGUgcmV2aWV3IGVkaXRcIiwgdG9kbyk7IFxuLy8gSGFzIHVwZGF0ZVRvZG9MaXN0UHJpb3JpdHkgZnVuY3Rpb24gd29ya2VkIGNvcnJlY3RseT9cbnRvZG8gPSBnZXRUb2RvKFwiRWRpdHMtVGhlIHJldmlldyBlZGl0XCIpO1xuY29uc29sZS5sb2coXCJpcyB0aGUgdG9kbyBwcmlvcml0eSB1cGRhdGVkIHByb3Blcmx5P1wiKTsgXG5jb25zb2xlLmxvZyh0b2RvKTsgXG5cbi8vIGEgbmV3IHByb2plY3QgaXMgY3JlYXRlZCBcbi8vIGlzIHRoZSBwcm9qZWN0IGFscmVhZHkgZXhpc3Rpbmc/IFxuY29uc3QgbmV3UHJvamVjdE5hbWUgPSBcIldyaXRpbmdzXCI7IFxuaW5kZXggPSBleGlzdGluZ1Byb2plY3ROYW1lcy5wcm9qZWN0TmFtZXMuaW5kZXhPZihuZXdQcm9qZWN0TmFtZSk7IFxuaWYgKGluZGV4ID09PSAtMSkgeyAvLyB0aGUgcHJvamVjdCBpcyBuZXdcbiAgICAvLyBIZW5jZSwgY3JlYXRlIGl0XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IGNyZWF0ZVByb2plY3QobmV3UHJvamVjdE5hbWUpOyBcbiAgICAvLyBzYXZlIGl0IGluIHRoZSBsb2NhbCBzdG9yYWdlXG4gICAgc2F2ZVByb2plY3QobmV3UHJvamVjdCk7IFxuICAgIC8vIHJlZ2lzdGVyIGl0IHRvIHRoZSBleGlzdGluZyBwcm9qZWN0IG5hbWVzXG4gICAgYWRkVG9FeGlzdGluZ1Byb2plY3ROYW1lcyhuZXdQcm9qZWN0KTtcbn0gIFxuZXhpc3RpbmdQcm9qZWN0TmFtZXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZXhpc3RpbmdQcm9qZWN0TmFtZXNcIikpOyBcbmNvbnNvbGUubG9nKFwiZXhpc3RpbmcgcHJvamVjdCBuYW1lczpcIik7XG5jb25zb2xlLmxvZyhleGlzdGluZ1Byb2plY3ROYW1lcyk7IFxuXG4vLyBkZWxldGVQcm9qZWN0IGlzIHRlc3RlZFxuZGVsZXRlUHJvamVjdChuZXdQcm9qZWN0TmFtZSk7IFxuY29uc29sZS5sb2coZ2V0UHJvamVjdChuZXdQcm9qZWN0TmFtZSkpOyBcblxuLy8gcmVtb3ZlRnJvbUV4aXN0aW5nUHJvamVjdE5hbWVzIGlzIHRlc3RlZCBcbmV4aXN0aW5nUHJvamVjdE5hbWVzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImV4aXN0aW5nUHJvamVjdE5hbWVzXCIpKTsgXG5jb25zb2xlLmxvZyhcImV4aXN0aW5nIHByb2plY3QgbmFtZXM6XCIpO1xuY29uc29sZS5sb2coZXhpc3RpbmdQcm9qZWN0TmFtZXMpOyBcbnJlbW92ZUZyb21FeGlzdGluZ1Byb2plY3ROYW1lcyhuZXdQcm9qZWN0TmFtZSk7IFxuZXhpc3RpbmdQcm9qZWN0TmFtZXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZXhpc3RpbmdQcm9qZWN0TmFtZXNcIikpOyBcbmNvbnNvbGUubG9nKFwiZXhpc3RpbmcgcHJvamVjdCBuYW1lczpcIik7XG5jb25zb2xlLmxvZyhleGlzdGluZ1Byb2plY3ROYW1lcyk7IFxuXG5zZXR1cE1haW5GcmFtZXMoKTsgXG5pbXBsZW1lbnRQcm9qZWN0TmFtZXNMaXN0KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9