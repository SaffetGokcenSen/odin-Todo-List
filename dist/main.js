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

.todoListName {
    padding-left: 1rem;
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,2BAA2B;IAC3B,eAAe;AACnB;;AAEA;IACI,uCAAuC;IACvC,aAAa;IACb,sEAAsE;IACtE,WAAW;IACX;YACQ;IACR,YAAY;IACZ,iDAAiD;IACjD,oBAAoB;IACpB,iBAAiB;IACjB,kBAAkB;IAClB,8BAA8B;IAC9B,WAAW;AACf;;AAEA;IACI,mCAAmC;IACnC,qBAAqB;IACrB,8DAA8D;IAC9D,OAAO;IACP,gDAAgD;IAChD,mBAAmB;IACnB,kBAAkB;IAClB,qBAAqB;IACrB,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,6EAA6E;IAC7E,YAAY;IACZ,oBAAoB;AACxB;;AAEA,2EAA2E;AAC3E;IACI,sBAAsB;AAC1B;;AAEA,kDAAkD;AAClD;IACI,sBAAsB;IACtB,eAAe;AACnB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,sCAAsC;IACtC,wBAAwB;IACxB,8DAA8D;IAC9D,OAAO;IACP,wCAAwC;IACxC,oBAAoB;IACpB,kBAAkB;IAClB,qBAAqB;AACzB","sourcesContent":["html { \n    /* root font size is 16px */\n    font-size: 16px;\n} \n\n.userWindow { \n    /* userWindow class has a flex layout */ \n    display: flex; \n    /* the class implies a width equal to the half of the viewport width */\n    width: 50vw; \n    /* the class implies a hegiht equal to the sevnty percent of the viewport \n    height */ \n    height: 70vh; \n    /* styling of the border of this class elements */\n    border-style: double;\n    border-width: 5px; \n    border-color: blue; \n    /* the gap between the items */\n    gap: 0.2rem;\n} \n\n.projectNamesWindow {\n    /* a solid red border of 3px thick*/ \n    border: solid 3px red; \n    /* the window has a 1 unit width in its parent flex container*/ \n    flex: 1; \n    /* margins of the project names window are set */\n    margin-left: 0.2rem; \n    margin-top: 0.2rem; \n    margin-bottom: 0.2rem; \n    display: flex; \n    flex-direction: column;\n} \n\n.projectNamesWindowHeader {\n    font-weight: bold; \n    padding: 0.5rem;\n} \n\n.projectNamesList { \n    /* project names list takes up the space left by the main size of the header*/\n    flex-grow: 1; \n    padding-left: 0.5rem;\n}\n\n/* the class of the div in which a project name and its todos are written */\n.projectNameListItem {\n    padding-bottom: 0.3rem;\n} \n\n/* the class for project name and cursor styling */\n.projectName:hover {\n    background-color: gold; \n    cursor: pointer;\n} \n\n.todoTitle {\n    font-weight: bold; \n    padding-left: 1rem;\n}\n\n.todoListName {\n    padding-left: 1rem;\n}\n\n.todosWindow {\n    /* a solid orange border of 3px thick*/ \n    border: solid 3px orange; \n    /* the window has a 2 unit width in its parent flex container*/ \n    flex: 2; \n    /* margins of the todos window are set */\n    margin-right: 0.2rem; \n    margin-top: 0.2rem; \n    margin-bottom: 0.2rem;\n}"],"sourceRoot":""}]);
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
        todoNameDiv.textContent = projectArray[i]; 
        todoNameDiv.className = "todoListName";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxPQUFPLHdEQUFPO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBLHVCQUF1Qiw2REFBYTtBQUNwQztBQUNBLElBQUksMkRBQVc7QUFDZjtBQUNBLElBQUkseUVBQXlCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkRBQWE7QUFDYixZQUFZLDBEQUFVOztBQUV0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhFQUE4QjtBQUM5QjtBQUNBO0FBQ0E7O0FBRUEsbUVBQWU7QUFDZiw2RUFBeUIsRyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL21haW5XaW5kb3dzTW9kdWxlLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3Byb2plY3RNb2R1bGUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvdG9kb0xpc3RNb2R1bGUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGh0bWwgeyBcbiAgICAvKiByb290IGZvbnQgc2l6ZSBpcyAxNnB4ICovXG4gICAgZm9udC1zaXplOiAxNnB4O1xufSBcblxuLnVzZXJXaW5kb3cgeyBcbiAgICAvKiB1c2VyV2luZG93IGNsYXNzIGhhcyBhIGZsZXggbGF5b3V0ICovIFxuICAgIGRpc3BsYXk6IGZsZXg7IFxuICAgIC8qIHRoZSBjbGFzcyBpbXBsaWVzIGEgd2lkdGggZXF1YWwgdG8gdGhlIGhhbGYgb2YgdGhlIHZpZXdwb3J0IHdpZHRoICovXG4gICAgd2lkdGg6IDUwdnc7IFxuICAgIC8qIHRoZSBjbGFzcyBpbXBsaWVzIGEgaGVnaWh0IGVxdWFsIHRvIHRoZSBzZXZudHkgcGVyY2VudCBvZiB0aGUgdmlld3BvcnQgXG4gICAgaGVpZ2h0ICovIFxuICAgIGhlaWdodDogNzB2aDsgXG4gICAgLyogc3R5bGluZyBvZiB0aGUgYm9yZGVyIG9mIHRoaXMgY2xhc3MgZWxlbWVudHMgKi9cbiAgICBib3JkZXItc3R5bGU6IGRvdWJsZTtcbiAgICBib3JkZXItd2lkdGg6IDVweDsgXG4gICAgYm9yZGVyLWNvbG9yOiBibHVlOyBcbiAgICAvKiB0aGUgZ2FwIGJldHdlZW4gdGhlIGl0ZW1zICovXG4gICAgZ2FwOiAwLjJyZW07XG59IFxuXG4ucHJvamVjdE5hbWVzV2luZG93IHtcbiAgICAvKiBhIHNvbGlkIHJlZCBib3JkZXIgb2YgM3B4IHRoaWNrKi8gXG4gICAgYm9yZGVyOiBzb2xpZCAzcHggcmVkOyBcbiAgICAvKiB0aGUgd2luZG93IGhhcyBhIDEgdW5pdCB3aWR0aCBpbiBpdHMgcGFyZW50IGZsZXggY29udGFpbmVyKi8gXG4gICAgZmxleDogMTsgXG4gICAgLyogbWFyZ2lucyBvZiB0aGUgcHJvamVjdCBuYW1lcyB3aW5kb3cgYXJlIHNldCAqL1xuICAgIG1hcmdpbi1sZWZ0OiAwLjJyZW07IFxuICAgIG1hcmdpbi10b3A6IDAuMnJlbTsgXG4gICAgbWFyZ2luLWJvdHRvbTogMC4ycmVtOyBcbiAgICBkaXNwbGF5OiBmbGV4OyBcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufSBcblxuLnByb2plY3ROYW1lc1dpbmRvd0hlYWRlciB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcbn0gXG5cbi5wcm9qZWN0TmFtZXNMaXN0IHsgXG4gICAgLyogcHJvamVjdCBuYW1lcyBsaXN0IHRha2VzIHVwIHRoZSBzcGFjZSBsZWZ0IGJ5IHRoZSBtYWluIHNpemUgb2YgdGhlIGhlYWRlciovXG4gICAgZmxleC1ncm93OiAxOyBcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcbn1cblxuLyogdGhlIGNsYXNzIG9mIHRoZSBkaXYgaW4gd2hpY2ggYSBwcm9qZWN0IG5hbWUgYW5kIGl0cyB0b2RvcyBhcmUgd3JpdHRlbiAqL1xuLnByb2plY3ROYW1lTGlzdEl0ZW0ge1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjNyZW07XG59IFxuXG4vKiB0aGUgY2xhc3MgZm9yIHByb2plY3QgbmFtZSBhbmQgY3Vyc29yIHN0eWxpbmcgKi9cbi5wcm9qZWN0TmFtZTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ29sZDsgXG4gICAgY3Vyc29yOiBwb2ludGVyO1xufSBcblxuLnRvZG9UaXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcbn1cblxuLnRvZG9MaXN0TmFtZSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xufVxuXG4udG9kb3NXaW5kb3cge1xuICAgIC8qIGEgc29saWQgb3JhbmdlIGJvcmRlciBvZiAzcHggdGhpY2sqLyBcbiAgICBib3JkZXI6IHNvbGlkIDNweCBvcmFuZ2U7IFxuICAgIC8qIHRoZSB3aW5kb3cgaGFzIGEgMiB1bml0IHdpZHRoIGluIGl0cyBwYXJlbnQgZmxleCBjb250YWluZXIqLyBcbiAgICBmbGV4OiAyOyBcbiAgICAvKiBtYXJnaW5zIG9mIHRoZSB0b2RvcyB3aW5kb3cgYXJlIHNldCAqL1xuICAgIG1hcmdpbi1yaWdodDogMC4ycmVtOyBcbiAgICBtYXJnaW4tdG9wOiAwLjJyZW07IFxuICAgIG1hcmdpbi1ib3R0b206IDAuMnJlbTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSwyQkFBMkI7SUFDM0IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHVDQUF1QztJQUN2QyxhQUFhO0lBQ2Isc0VBQXNFO0lBQ3RFLFdBQVc7SUFDWDtZQUNRO0lBQ1IsWUFBWTtJQUNaLGlEQUFpRDtJQUNqRCxvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQiw4QkFBOEI7SUFDOUIsV0FBVztBQUNmOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLHFCQUFxQjtJQUNyQiw4REFBOEQ7SUFDOUQsT0FBTztJQUNQLGdEQUFnRDtJQUNoRCxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSw2RUFBNkU7SUFDN0UsWUFBWTtJQUNaLG9CQUFvQjtBQUN4Qjs7QUFFQSwyRUFBMkU7QUFDM0U7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUEsa0RBQWtEO0FBQ2xEO0lBQ0ksc0JBQXNCO0lBQ3RCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksc0NBQXNDO0lBQ3RDLHdCQUF3QjtJQUN4Qiw4REFBOEQ7SUFDOUQsT0FBTztJQUNQLHdDQUF3QztJQUN4QyxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sIHsgXFxuICAgIC8qIHJvb3QgZm9udCBzaXplIGlzIDE2cHggKi9cXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn0gXFxuXFxuLnVzZXJXaW5kb3cgeyBcXG4gICAgLyogdXNlcldpbmRvdyBjbGFzcyBoYXMgYSBmbGV4IGxheW91dCAqLyBcXG4gICAgZGlzcGxheTogZmxleDsgXFxuICAgIC8qIHRoZSBjbGFzcyBpbXBsaWVzIGEgd2lkdGggZXF1YWwgdG8gdGhlIGhhbGYgb2YgdGhlIHZpZXdwb3J0IHdpZHRoICovXFxuICAgIHdpZHRoOiA1MHZ3OyBcXG4gICAgLyogdGhlIGNsYXNzIGltcGxpZXMgYSBoZWdpaHQgZXF1YWwgdG8gdGhlIHNldm50eSBwZXJjZW50IG9mIHRoZSB2aWV3cG9ydCBcXG4gICAgaGVpZ2h0ICovIFxcbiAgICBoZWlnaHQ6IDcwdmg7IFxcbiAgICAvKiBzdHlsaW5nIG9mIHRoZSBib3JkZXIgb2YgdGhpcyBjbGFzcyBlbGVtZW50cyAqL1xcbiAgICBib3JkZXItc3R5bGU6IGRvdWJsZTtcXG4gICAgYm9yZGVyLXdpZHRoOiA1cHg7IFxcbiAgICBib3JkZXItY29sb3I6IGJsdWU7IFxcbiAgICAvKiB0aGUgZ2FwIGJldHdlZW4gdGhlIGl0ZW1zICovXFxuICAgIGdhcDogMC4ycmVtO1xcbn0gXFxuXFxuLnByb2plY3ROYW1lc1dpbmRvdyB7XFxuICAgIC8qIGEgc29saWQgcmVkIGJvcmRlciBvZiAzcHggdGhpY2sqLyBcXG4gICAgYm9yZGVyOiBzb2xpZCAzcHggcmVkOyBcXG4gICAgLyogdGhlIHdpbmRvdyBoYXMgYSAxIHVuaXQgd2lkdGggaW4gaXRzIHBhcmVudCBmbGV4IGNvbnRhaW5lciovIFxcbiAgICBmbGV4OiAxOyBcXG4gICAgLyogbWFyZ2lucyBvZiB0aGUgcHJvamVjdCBuYW1lcyB3aW5kb3cgYXJlIHNldCAqL1xcbiAgICBtYXJnaW4tbGVmdDogMC4ycmVtOyBcXG4gICAgbWFyZ2luLXRvcDogMC4ycmVtOyBcXG4gICAgbWFyZ2luLWJvdHRvbTogMC4ycmVtOyBcXG4gICAgZGlzcGxheTogZmxleDsgXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufSBcXG5cXG4ucHJvamVjdE5hbWVzV2luZG93SGVhZGVyIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IFxcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxufSBcXG5cXG4ucHJvamVjdE5hbWVzTGlzdCB7IFxcbiAgICAvKiBwcm9qZWN0IG5hbWVzIGxpc3QgdGFrZXMgdXAgdGhlIHNwYWNlIGxlZnQgYnkgdGhlIG1haW4gc2l6ZSBvZiB0aGUgaGVhZGVyKi9cXG4gICAgZmxleC1ncm93OiAxOyBcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxufVxcblxcbi8qIHRoZSBjbGFzcyBvZiB0aGUgZGl2IGluIHdoaWNoIGEgcHJvamVjdCBuYW1lIGFuZCBpdHMgdG9kb3MgYXJlIHdyaXR0ZW4gKi9cXG4ucHJvamVjdE5hbWVMaXN0SXRlbSB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjNyZW07XFxufSBcXG5cXG4vKiB0aGUgY2xhc3MgZm9yIHByb2plY3QgbmFtZSBhbmQgY3Vyc29yIHN0eWxpbmcgKi9cXG4ucHJvamVjdE5hbWU6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkOyBcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn0gXFxuXFxuLnRvZG9UaXRsZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyBcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbn1cXG5cXG4udG9kb0xpc3ROYW1lIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbn1cXG5cXG4udG9kb3NXaW5kb3cge1xcbiAgICAvKiBhIHNvbGlkIG9yYW5nZSBib3JkZXIgb2YgM3B4IHRoaWNrKi8gXFxuICAgIGJvcmRlcjogc29saWQgM3B4IG9yYW5nZTsgXFxuICAgIC8qIHRoZSB3aW5kb3cgaGFzIGEgMiB1bml0IHdpZHRoIGluIGl0cyBwYXJlbnQgZmxleCBjb250YWluZXIqLyBcXG4gICAgZmxleDogMjsgXFxuICAgIC8qIG1hcmdpbnMgb2YgdGhlIHRvZG9zIHdpbmRvdyBhcmUgc2V0ICovXFxuICAgIG1hcmdpbi1yaWdodDogMC4ycmVtOyBcXG4gICAgbWFyZ2luLXRvcDogMC4ycmVtOyBcXG4gICAgbWFyZ2luLWJvdHRvbTogMC4ycmVtO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7IFxuaW1wb3J0IHsgZ2V0UHJvamVjdCB9IGZyb20gJy4vcHJvamVjdE1vZHVsZSc7XG5cbi8vIHRoZSBmdW5jdGlvbiBmb3Igc2V0dGluZyB1cCB0aGUgbWFpbiBmcmFtZXMgb2YgdGhlIHVzZXIgaW50ZXJmYWNlLiBcbmZ1bmN0aW9uIHNldHVwTWFpbkZyYW1lcygpIHtcbiAgICAvLyB0aGUgd2luZG93IHdpdGggd2hpY2ggdGhlIHVzZXIgaXMgZ29pbmcgdG8gaW50ZXJhY3QgaXMgY3JlYXRlZC5cbiAgICBjb25zdCB1c2VyV2luZG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgXG4gICAgLy8gdGhlIGNsYXNzIG9mIHRoZSB1c2VyIHdpbmRvdyBpcyB1c2VyV2luZG93XG4gICAgdXNlcldpbmRvdy5jbGFzc05hbWUgPSBcInVzZXJXaW5kb3dcIjsgXG4gICAgLy8gdXNlcldpbmRvdyBpcyBhZGRlZCB0byB0aGUgcGFnZVxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodXNlcldpbmRvdyk7IFxuXG4gICAgLy8gdGhlIHdpbmRvdyBpbiB3aGljaCBwcm9qZWN0IG5hbWVzIGFyZSBsaXN0ZWQgXG4gICAgY29uc3QgcHJvamVjdE5hbWVzV2luZG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgXG4gICAgLy8gdGhlIGNsYXNzIG9mIHRoZSBwcm9qZWN0IG5hbWVzIHdpbmRvdyBpcyBwcm9qZWN0TmFtZXNXaW5kb3cgXG4gICAgcHJvamVjdE5hbWVzV2luZG93LmNsYXNzTmFtZSA9IFwicHJvamVjdE5hbWVzV2luZG93XCI7IFxuICAgIC8vIHByb2plY3QgbmFtZXMgd2luZG93IGlzIGFkZGVkIHRvIHRoZSB1c2VyIHdpbmRvd1xuICAgIHVzZXJXaW5kb3cuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVzV2luZG93KTsgXG5cbiAgICAvLyB0aGUgZGl2IGluIHdoaWNoIHRoZSBoZWFkZXIgb2YgdGhlIHByb2plY3QgbmFtZXMgd2luZG93IGlzIHdyaXR0ZW4gXG4gICAgY29uc3QgcHJvamVjdE5hbWVzV2luZG93SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgXG4gICAgLy8gdGhlIGNsYXNzIG9mIHRoZSBwcm9qZWN0IG5hbWVzIHdpbmRvdyBoZWFkZXIgZGl2IFxuICAgIHByb2plY3ROYW1lc1dpbmRvd0hlYWRlci5jbGFzc05hbWUgPSBcInByb2plY3ROYW1lc1dpbmRvd0hlYWRlclwiOyBcbiAgICAvLyBwcm9qZWN0IG5hbWVzIHdpbmRvdyBoZWFkZXIgaXMgd3JpdHRlblxuICAgIHByb2plY3ROYW1lc1dpbmRvd0hlYWRlci50ZXh0Q29udGVudCA9IFwiUFJPSkVDVFNcIjtcbiAgICAvLyBwcm9qZWN0IG5hbWVzIHdpbmRvdyBoZWFkZXIgaXMgYWRkZWQgdG8gdGhlIHByb2plY3QgbmFtZXMgd2luZG93XG4gICAgcHJvamVjdE5hbWVzV2luZG93LmFwcGVuZENoaWxkKHByb2plY3ROYW1lc1dpbmRvd0hlYWRlcik7IFxuXG4gICAgLy8gdGhlIGRpdiBpbiB3aGljaCB0aGUgbGlzdCBvZiBwcm9qZWN0IG5hbWVzIHN0YW5kcyBcbiAgICBjb25zdCBwcm9qZWN0TmFtZXNMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgXG4gICAgLy8gdGhlIGNsYXNzIG9mIHRoZSBwcm9qZWN0IG5hbWVzIGxpc3QgZGl2IFxuICAgIHByb2plY3ROYW1lc0xpc3QuY2xhc3NOYW1lID0gXCJwcm9qZWN0TmFtZXNMaXN0XCI7IFxuICAgIC8vIHByb2plY3QgbmFtZXMgbGlzdCBpcyBhZGRlZCB0byB0aGUgcHJvamVjdCBuYW1lcyB3aW5kb3cgXG4gICAgcHJvamVjdE5hbWVzV2luZG93LmFwcGVuZENoaWxkKHByb2plY3ROYW1lc0xpc3QpO1xuXG4gICAgLy8gdGhlIHdpbmRvdyBpbiB3aGljaCB0aGUgdG9kb3MgYXJlIHNob3duIFxuICAgIGNvbnN0IHRvZG9zV2luZG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgXG4gICAgLy8gdGhlIGNsYXNzIG9mIHRoZSB0b2RvcyB3aW5kb3cgaXMgdG9kb3NXaW5kb3cgXG4gICAgdG9kb3NXaW5kb3cuY2xhc3NOYW1lID0gXCJ0b2Rvc1dpbmRvd1wiOyBcbiAgICAvLyB0b2RvcyB3aW5kb3cgaXMgYWRkZWQgdG8gdGhlIHVzZXIgd2luZG93IFxuICAgIHVzZXJXaW5kb3cuYXBwZW5kQ2hpbGQodG9kb3NXaW5kb3cpO1xufSBcblxuZnVuY3Rpb24gc2hyaW5rUHJvamVjdE5hbWUoKSB7XG4gICAgd2hpbGUgKHRoaXMucGFyZW50Tm9kZS5jaGlsZE5vZGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgdGhpcy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMucGFyZW50Tm9kZS5sYXN0Q2hpbGQpO1xuICAgIH1cbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBleHBhbmRQcm9qZWN0TmFtZSwge29uY2U6IHRydWV9KTtcbn1cblxuZnVuY3Rpb24gZXhwYW5kUHJvamVjdE5hbWUoKSB7XG4gICAgY29uc3QgcHJvamVjdE9iamVjdCA9IGdldFByb2plY3QodGhpcy50ZXh0Q29udGVudCk7IFxuICAgIGNvbnN0IHByb2plY3RBcnJheSA9IHByb2plY3RPYmplY3QucHJvamVjdENvbnRlbnQ7IFxuICAgIGNvbnN0IHRvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IFxuICAgIHRvZG9UaXRsZS50ZXh0Q29udGVudCA9IFwiVG9kb3NcIjtcbiAgICB0b2RvVGl0bGUuY2xhc3NOYW1lID0gXCJ0b2RvVGl0bGVcIjsgXG4gICAgdGhpcy5wYXJlbnROb2RlLmFwcGVuZENoaWxkKHRvZG9UaXRsZSk7XG4gICAgZm9yIChsZXQgaT0wOyBpIDwgcHJvamVjdEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHRvZG9OYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgXG4gICAgICAgIHRvZG9OYW1lRGl2LnRleHRDb250ZW50ID0gcHJvamVjdEFycmF5W2ldOyBcbiAgICAgICAgdG9kb05hbWVEaXYuY2xhc3NOYW1lID0gXCJ0b2RvTGlzdE5hbWVcIjtcbiAgICAgICAgdGhpcy5wYXJlbnROb2RlLmFwcGVuZENoaWxkKHRvZG9OYW1lRGl2KTtcbiAgICB9IFxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNocmlua1Byb2plY3ROYW1lLCB7b25jZTogdHJ1ZX0pO1xufVxuXG5mdW5jdGlvbiBpbXBsZW1lbnRQcm9qZWN0TmFtZXNMaXN0KCkgeyBcbiAgICAvLyBleGlzdGluZyBwcm9qZWN0IG5hbWVzIGlzIGZldGNoZWQgZnJvbSB0aGUgbG9jYWwgc3RvcmFnZVxuICAgIGNvbnN0IGV4aXN0aW5nUHJvamVjdE5hbWVzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImV4aXN0aW5nUHJvamVjdE5hbWVzXCIpKTsgXG4gICAgLy8gZXhpc3RpbmcgcHJvamVjdCBuYW1lcyBhcnJheSBhc3NpZ25lZCB0byBhIGNvbnN0YW50XG4gICAgY29uc3QgbmFtZXNBcnJheSA9IGV4aXN0aW5nUHJvamVjdE5hbWVzLnByb2plY3ROYW1lczsgXG4gICAgLy8gYWNjZXNzIHRvIHRoZSBwcm9qZWN0IG5hbWVzIGxpc3QgZGl2XG4gICAgY29uc3QgcHJvamVjdE5hbWVzTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcm9qZWN0TmFtZXNMaXN0XCIpWzBdOyBcbiAgICAvLyBhIGRpdiBmb3IgZWFjaCBwcm9qZWN0IG5hbWUgaXMgY3JlYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGxpc3Qgd2luZG93LCB0aGUgXG4gICAgLy8gcHJvamVjdCBuYW1lIGlzIHdyaXR0ZW5cbiAgICBmb3IgKGxldCBpPTA7IGkgPCBuYW1lc0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGl0ZW1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyBcbiAgICAgICAgLy8gdGhlIHByb2plY3QgbmFtZSBpcyB3cml0dGVuIGluIHRoZSBzcGFuIGVsZW1lbnRcbiAgICAgICAgY29uc3QgaXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgaXRlbU5hbWUudGV4dENvbnRlbnQgPSBuYW1lc0FycmF5W2ldOyBcbiAgICAgICAgaXRlbU5hbWUuY2xhc3NOYW1lID0gXCJwcm9qZWN0TmFtZVwiO1xuICAgICAgICBpdGVtRGl2LmNsYXNzTmFtZSA9IFwicHJvamVjdE5hbWVMaXN0SXRlbVwiOyBcbiAgICAgICAgaXRlbU5hbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV4cGFuZFByb2plY3ROYW1lLCB7b25jZTogdHJ1ZX0pO1xuICAgICAgICBpdGVtRGl2LmFwcGVuZENoaWxkKGl0ZW1OYW1lKTtcbiAgICAgICAgcHJvamVjdE5hbWVzTGlzdC5hcHBlbmRDaGlsZChpdGVtRGl2KTsgXG4gICAgfSBcbn1cblxuZXhwb3J0IHsgc2V0dXBNYWluRnJhbWVzLCBpbXBsZW1lbnRQcm9qZWN0TmFtZXNMaXN0IH07IiwiLy8gQSBmYWN0b3J5IGZ1bmN0aW9uIHRvIGNyZWF0ZSBhIHByb2plY3Qgb2JqZWN0LiBcbi8vIHByb2plY3RPYmplY3ROYW1lOiBUaGUgbmFtZSBvZiB0aGUgcHJvamVjdCBlbnRlcmVkIGJ5IHRoZSB1c2VyLiBcbi8vIHByb2plY3RDb250ZW50OiBUaGUgdG9kbyBsaXN0cyBjb250YWluZWQgYnkgdGhlIHByb2plY3QuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHByb2plY3RPYmplY3ROYW1lKSB7XG4gICAgLy8gdGhlIGNvbnRlbnQgb2YgdGhlIHByb2plY3QgaXMgaW5pdGlhbGx5IG5vdGhpbmcuIFxuICAgIGNvbnN0IHByb2plY3RDb250ZW50ID0gW107XG4gICAgcmV0dXJuIHsgcHJvamVjdE9iamVjdE5hbWUsIHByb2plY3RDb250ZW50IH07XG59IFxuXG4vLyBBIGZ1bmN0aW9uIHRvIGdldCBhIHByb2plY3QgZnJvbSB0aGUgbG9jYWwgc3RvcmFnZVxuLy8gcHJvamVjdE9iamVjdE5hbWU6IFRoZSBuYW1lIG9mIHRoZSBwcm9qZWN0LiBcbmZ1bmN0aW9uIGdldFByb2plY3QocHJvamVjdE9iamVjdE5hbWUpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcm9qZWN0T2JqZWN0TmFtZSkpO1xufVxuXG4vLyBBIGZ1bmN0aW9uIHRvIGFkZCB0byB0aGUgZXhpc3RpbmcgcHJvamVjdCBuYW1lcy4gXG4vLyB0aGVQcm9qZWN0T2JqZWN0OiBUaGUgcHJvamVjdCBvYmplY3QgdG8gYmUgc2F2ZWQgdG8gdGhlIGxvY2FsIHN0b3JhZ2UuIFxuZnVuY3Rpb24gYWRkVG9FeGlzdGluZ1Byb2plY3ROYW1lcyh0aGVQcm9qZWN0T2JqZWN0KSB7XG4gICAgY29uc3QgdGVtcE9iamVjdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJleGlzdGluZ1Byb2plY3ROYW1lc1wiKSk7IFxuICAgIHRlbXBPYmplY3QucHJvamVjdE5hbWVzLnB1c2godGhlUHJvamVjdE9iamVjdC5wcm9qZWN0T2JqZWN0TmFtZSk7IFxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZXhpc3RpbmdQcm9qZWN0TmFtZXNcIiwgSlNPTi5zdHJpbmdpZnkodGVtcE9iamVjdCkpO1xufVxuXG4vLyBBIGZ1bmN0aW9uIHRvIHNhdmUgdGhlIHByb2plY3Qgb2JqZWN0IHRvIHRoZSBsb2NhbCBzdG9yYWdlLiBcbi8vIHRoZVByb2plY3RPYmplY3Q6IFRoZSBwcm9qZWN0IG9iamVjdCB0byBiZSBzYXZlZCB0byB0aGUgbG9jYWwgc3RvcmFnZS4gXG5mdW5jdGlvbiBzYXZlUHJvamVjdCh0aGVQcm9qZWN0T2JqZWN0KSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhlUHJvamVjdE9iamVjdC5wcm9qZWN0T2JqZWN0TmFtZSwgSlNPTi5zdHJpbmdpZnkodGhlUHJvamVjdE9iamVjdCkpOyBcbn0gXG5cbi8vIEEgZnVuY3Rpb24gdG8gdXBkYXRlIHRoZSBjb250ZW50IG9mIGEgcHJvamVjdCBieSBhZGRpbmcgYSBuZXcgdG9kbyBsaXN0LlxuLy8gcHJvamVjdE9iamVjdE5hbWU6IFRoZSBuYW1lIG9mIHRoZSBwcm9qZWN0LiBcbi8vIHRvZG9MaXN0TmFtZTogVGhlIHRvZG8gbGlzdCB0byBiZSBhZGRlZCB0byB0aGUgY29udGVudCBvZiB0aGUgcHJvamVjdC4gXG5mdW5jdGlvbiBhZGRUb2RvTGlzdE5hbWUocHJvamVjdE9iamVjdE5hbWUsIHRvZG9MaXN0TmFtZSkgeyBcbiAgICAvLyB0aGUgY29udGVudCBvZiB0aGUgcHJvamVjdCB1cGRhdGVkIGJ5IGFkZGluZyB0aGUgdG9kbyBsaXN0LlxuICAgIHByb2plY3RPYmplY3ROYW1lLnByb2plY3RDb250ZW50LnB1c2godG9kb0xpc3ROYW1lKTsgXG4gICAgcmV0dXJuIHByb2plY3RPYmplY3ROYW1lO1xufSBcblxuLy8gQSBmdW5jdGlvbiB0byB1cGRhdGUgdGhlIGNvbnRlbnQgb2YgYSBwcm9qZWN0IGJ5IHJlbW92aW5nIGEgdG9kbyBsaXN0LlxuLy8gcHJvamVjdE9iamVjdE5hbWU6IFRoZSBuYW1lIG9mIHRoZSBwcm9qZWN0LiBcbi8vIHRvZG9MaXN0TmFtZTogVGhlIHRvZG8gbGlzdCB0byBiZSByZW1vdmVkIGZyb20gdGhlIGNvbnRlbnQgb2YgdGhlIHByb2plY3QuIFxuZnVuY3Rpb24gcmVtb3ZlVG9kb0xpc3ROYW1lKHByb2plY3RPYmplY3QsIHRvZG9MaXN0TmFtZSkgeyBcbiAgICAvLyB0aGUgaW5kZXggb2YgdGhlIHRvZG8gaXMgZm91bmRcbiAgICBjb25zdCBpbmRleCA9IHByb2plY3RPYmplY3QucHJvamVjdENvbnRlbnQuaW5kZXhPZih0b2RvTGlzdE5hbWUpOyBcbiAgICAvLyB0aGUgdG9kbyBpcyByZW1vdmVkXG4gICAgcHJvamVjdE9iamVjdC5wcm9qZWN0Q29udGVudC5zcGxpY2UoaW5kZXgsIDEpOyBcbiAgICByZXR1cm4gcHJvamVjdE9iamVjdDtcbn0gXG5cbi8vIEEgZnVuY3Rpb24gdG8gcmVtb3ZlIGEgcHJvamVjdCBuYW1lIGZyb20gdGhlIGV4aXN0aW5nIHByb2plY3QgbmFtZXMuIFxuLy8gdGhlUHJvamVjdE5hbWU6IFRoZSBwcm9qZWN0IG5hbWUgdG8gYmUgcmVtb3ZlZC5cbmZ1bmN0aW9uIHJlbW92ZUZyb21FeGlzdGluZ1Byb2plY3ROYW1lcyh0aGVQcm9qZWN0TmFtZSkge1xuICAgIGNvbnN0IHRlbXBPYmplY3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZXhpc3RpbmdQcm9qZWN0TmFtZXNcIikpOyBcbiAgICAvLyB0aGUgaW5kZXggb2YgdGhlIHByb2plY3QgbmFtZSBpcyBmb3VuZFxuICAgIGNvbnN0IGluZGV4ID0gdGVtcE9iamVjdC5wcm9qZWN0TmFtZXMuaW5kZXhPZih0aGVQcm9qZWN0TmFtZSk7IFxuICAgIC8vIHRoZSBwcm9qZWN0IG5hbWUgaXMgcmVtb3ZlZFxuICAgIHRlbXBPYmplY3QucHJvamVjdE5hbWVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJleGlzdGluZ1Byb2plY3ROYW1lc1wiLCBKU09OLnN0cmluZ2lmeSh0ZW1wT2JqZWN0KSk7XG59XG5cbi8vIEEgZnVuY3Rpb24gdG8gcmVtb3ZlIGEgcHJvamVjdCBmcm9tIHRoZSBsb2NhbCBzdG9yYWdlLiBcbi8vIHByb2plY3RPYmplY3ROYW1lOiBUaGUgbmFtZSBvZiB0aGUgcHJvamVjdC4gXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0KHByb2plY3RPYmplY3ROYW1lKSB7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0ocHJvamVjdE9iamVjdE5hbWUpOyBcbn1cblxuZXhwb3J0IHsgY3JlYXRlUHJvamVjdCwgZ2V0UHJvamVjdCwgYWRkVG9FeGlzdGluZ1Byb2plY3ROYW1lcywgc2F2ZVByb2plY3QsIFxuICAgIGFkZFRvZG9MaXN0TmFtZSwgcmVtb3ZlVG9kb0xpc3ROYW1lLCByZW1vdmVGcm9tRXhpc3RpbmdQcm9qZWN0TmFtZXMsIFxuICAgIGRlbGV0ZVByb2plY3QgfTsiLCIvLyB0aGUgZmFjdG9yeSBmdW5jdGlvbiB0byBjcmVhdGUgYSB0b2RvIGxpc3QuIFxuLy8gdGl0bGU6IFRoZSB0aXRsZSBvZiB0aGUgdG9kbyBsaXN0LCBlbnRlcmVkIGJ5IHRoZSB1c2VyLlxuLy8gZGVzY3JpcHRpb246IFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgdG9kbyBsaXN0LCBlbnRlcmVkIGJ5IHRoZSB1c2VyLiBcbi8vIGR1ZURhdGU6IFRoZSBkdWUgZGF0ZSBvZiB0aGUgdG9kbyBsaXN0LCBlbnRlcmVkIGJ5IHRoZSB1c2VyLiBcbi8vIHByaW9yaXR5OiBUaGUgcHJpb3JpdHkgb2YgdGhlIHRvZG8gbGlzdCwgZW50ZXJlZCBieSB0aGUgdXNlci4gXG4vLyBvd25lclByb2plY3Q6IFRoZSBwcm9qZWN0IHdoaWNoIG93bnMgdGhlIHRvZG8gbGlzdC5cbmZ1bmN0aW9uIGNyZWF0ZVRvZG9MaXN0KHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG93bmVyUHJvamVjdCkge1xuICAgIHJldHVybiB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG93bmVyUHJvamVjdCB9O1xufVxuXG4vLyB0aGUgZnVuY3Rpb24gdG8gc2F2ZSBhIHRvZG8gbGlzdCBpbiBhIHByb2plY3QuIFxuLy8gdGhlVG9kb09iamVjdDogVGhlIHRvZG8gb2JqZWN0IHRvIGJlIHNhdmVkIGluIHRoZSBsb2NhbCBzdG9yYWdlLiBcbi8vIFRoZSBuYW1lIG9mIHRoZSB0b2RvIGluIHRoZSBsb2NhbCBzdG9yYWdlLCBkZXRlcm1pbmVkIGJ5IHRoZSBwcm9ncmFtbWVyLiBcbi8vIHRoZVByb2plY3ROYW1lOiBUaGUgbmFtZSBvZiB0aGUgcHJvamVjdCB0aGUgY29udGVudCBvZiB3aGljaCBpcyB0byBiZSB1cGRhdGVkIFxuLy8gYnkgYWRkaW5nIHRoZSBuZXcgdG9kbyBsaXN0LlxuZnVuY3Rpb24gc2F2ZVRvZG9MaXN0KHRvZG9TdG9yYWdlTmFtZSwgdG9kb09iamVjdCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRvZG9TdG9yYWdlTmFtZSwgSlNPTi5zdHJpbmdpZnkodG9kb09iamVjdCkpOyBcbn1cblxuLy8gdGhlIGZ1bmN0aW9uIHRvIGdldCBhIHRvZG8gbGlzdCBcbi8vIHRvZG9TdG9yYWdlTmFtZTogVGhlIHN0b3JhZ2UgbmFtZSBvZiB0aGUgdG9kbyBsaXN0IFxuZnVuY3Rpb24gZ2V0VG9kbyh0b2RvU3RvcmFnZU5hbWUpIHtcbiAgICBjb25zdCB0ZW1wT2JqZWN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0b2RvU3RvcmFnZU5hbWUpKTsgXG4gICAgcmV0dXJuIHRlbXBPYmplY3Q7XG59IFxuXG4vLyB0aGUgZnVuY3Rpb24gdG8gdXBkYXRlIHRoZSB0aXRsZSBvZiBhIHRvZG8gbGlzdC4gXG4vLyB0b2RvU3RvcmFnZU5hbWU6IFRoZSBzdG9yYWdlIG5hbWUgb2YgdGhlIHRvZG8gbGlzdCBcbi8vIG5ld1RpdGxlOiBUaGUgbmV3IHRpdGxlIG9mIHRoZSB0b2RvIGxpc3RcbmZ1bmN0aW9uIHVwZGF0ZVRvZG9MaXN0VGl0bGUodG9kb09iamVjdCwgbmV3VGl0bGUpIHtcbiAgICB0b2RvT2JqZWN0LnRpdGxlID0gbmV3VGl0bGU7IFxuICAgIHJldHVybiB0b2RvT2JqZWN0O1xufSBcblxuLy8gdGhlIGZ1bmN0aW9uIHRvIHVwZGF0ZSB0aGUgZGVzY3JpcHRpb24gb2YgYSB0b2RvIGxpc3QuIFxuLy8gdG9kb1N0b3JhZ2VOYW1lOiBUaGUgc3RvcmFnZSBuYW1lIG9mIHRoZSB0b2RvIGxpc3QgXG4vLyBuZXdUaXRsZTogVGhlIG5ldyBkZXNjcmlwdGlvbiBvZiB0aGUgdG9kbyBsaXN0XG5mdW5jdGlvbiB1cGRhdGVUb2RvTGlzdERlc2NyaXB0aW9uKHRvZG9PYmplY3QsIG5ld0Rlc2NyaXB0aW9uKSB7XG4gICAgdG9kb09iamVjdC5kZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uOyBcbiAgICByZXR1cm4gdG9kb09iamVjdDtcbn0gXG5cbi8vIHRoZSBmdW5jdGlvbiB0byB1cGRhdGUgdGhlIGR1ZSBkYXRlIG9mIGEgdG9kbyBsaXN0LiBcbi8vIHRvZG9TdG9yYWdlTmFtZTogVGhlIHN0b3JhZ2UgbmFtZSBvZiB0aGUgdG9kbyBsaXN0IFxuLy8gbmV3RHVlRGF0ZTogVGhlIG5ldyBkdWUgZGF0ZSBvZiB0aGUgdG9kbyBsaXN0XG5mdW5jdGlvbiB1cGRhdGVUb2RvTGlzdER1ZURhdGUodG9kb09iamVjdCwgbmV3RHVlRGF0ZSkge1xuICAgIHRvZG9PYmplY3QuZHVlRGF0ZSA9IG5ld0R1ZURhdGU7XG4gICAgcmV0dXJuIHRvZG9PYmplY3Q7XG59IFxuXG4vLyB0aGUgZnVuY3Rpb24gdG8gdXBkYXRlIHRoZSBwcmlvcml0eSBvZiBhIHRvZG8gbGlzdC4gXG4vLyB0b2RvU3RvcmFnZU5hbWU6IFRoZSBzdG9yYWdlIG5hbWUgb2YgdGhlIHRvZG8gbGlzdCBcbi8vIG5ld1ByaW9yaXR5OiBUaGUgbmV3IHByaW9yaXR5IG9mIHRoZSB0b2RvIGxpc3RcbmZ1bmN0aW9uIHVwZGF0ZVRvZG9MaXN0UHJpb3JpdHkodG9kb09iamVjdCwgbmV3UHJpb3JpdHkpIHtcbiAgICB0b2RvT2JqZWN0LnByaW9yaXR5ID0gbmV3UHJpb3JpdHk7IFxuICAgIHJldHVybiB0b2RvT2JqZWN0O1xufSBcblxuLy8gdGhlIGZ1bmN0aW9uIHRvIGRlbGV0ZSBhIHRvZG8gbGlzdCBcbi8vIHRvZG9TdG9yYWdlTmFtZTogVGhlIHN0b3JhZ2UgbmFtZSBvZiB0aGUgdG9kbyBsaXN0IFxuZnVuY3Rpb24gZGVsZXRlVG9kb0xpc3QodG9kb1N0b3JhZ2VOYW1lKSB7IFxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHRvZG9TdG9yYWdlTmFtZSk7IFxufSBcblxuLy8gdGhlIGZ1bmN0aW9uIHRvIHVwZGF0ZSB0aGUgc3RvcmFnZSBuYW1lIG9mIHRoZSB0b2RvIFxuZnVuY3Rpb24gdXBkYXRlVG9kb0xpc3RTdG9yYWdlTmFtZShwcmV2aW91c1N0b3JhZ2VOYW1lLCBuZXdPd25lclByb2plY3ROYW1lKSB7XG4gICAgY29uc3QgdGVtcE9iamVjdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0ocHJldmlvdXNTdG9yYWdlTmFtZSkpOyBcbiAgICB0ZW1wT2JqZWN0Lm93bmVyUHJvamVjdCA9IG5ld093bmVyUHJvamVjdE5hbWU7IFxuICAgIHJldHVybiB0ZW1wT2JqZWN0O1xufVxuXG5leHBvcnQgeyBjcmVhdGVUb2RvTGlzdCwgc2F2ZVRvZG9MaXN0LCB1cGRhdGVUb2RvTGlzdFRpdGxlLCBcbiAgICB1cGRhdGVUb2RvTGlzdERlc2NyaXB0aW9uLCB1cGRhdGVUb2RvTGlzdER1ZURhdGUsIHVwZGF0ZVRvZG9MaXN0UHJpb3JpdHksIFxuICAgIGRlbGV0ZVRvZG9MaXN0LCBnZXRUb2RvLCB1cGRhdGVUb2RvTGlzdFN0b3JhZ2VOYW1lfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGNyZWF0ZVRvZG9MaXN0LCBzYXZlVG9kb0xpc3QsIGdldFRvZG8sIHVwZGF0ZVRvZG9MaXN0U3RvcmFnZU5hbWUsIFxuICAgIGRlbGV0ZVRvZG9MaXN0LCB1cGRhdGVUb2RvTGlzdFRpdGxlLCB1cGRhdGVUb2RvTGlzdERlc2NyaXB0aW9uLCBcbiAgICB1cGRhdGVUb2RvTGlzdER1ZURhdGUsIHVwZGF0ZVRvZG9MaXN0UHJpb3JpdHkgfSBmcm9tIFwiLi90b2RvTGlzdE1vZHVsZVwiO1xuXG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0LCBzYXZlUHJvamVjdCwgYWRkVG9FeGlzdGluZ1Byb2plY3ROYW1lcywgYWRkVG9kb0xpc3ROYW1lLCBcbmdldFByb2plY3QsIHJlbW92ZVRvZG9MaXN0TmFtZSwgZGVsZXRlUHJvamVjdCwgcmVtb3ZlRnJvbUV4aXN0aW5nUHJvamVjdE5hbWVzIH0gXG5mcm9tIFwiLi9wcm9qZWN0TW9kdWxlXCI7XG5cbmltcG9ydCB7IHNldHVwTWFpbkZyYW1lcywgaW1wbGVtZW50UHJvamVjdE5hbWVzTGlzdCB9IGZyb20gXCIuL21haW5XaW5kb3dzTW9kdWxlXCI7XG5cbi8vIFRoZSBmdW5jdGlvbnMgZm9yIGRlYWxpbmcgd2l0aCB0b2RvIGxpc3RzIGFuZCByZWxhdGVkIHByb2plY3RzIGFyZSBub3cgdG8gYmUgXG4vLyB0ZXN0ZWQgdXNpbmcgdGhlIGNvbnNvbGUuIFxuXG4vLyBsb2NhbCBzdG9yYWdlIGlzIGNsZWFyZWRcbmxvY2FsU3RvcmFnZS5jbGVhcigpO1xuXG4vLyB0aGUgdmFyaWFibGUgZm9yIHRoZSBleGlzdGluZyBwcm9qZWN0IG5hbWVzIGlzIGRlY2xhcmVkXG5sZXQgZXhpc3RpbmdQcm9qZWN0TmFtZXM7XG5cbi8vIENoZWNrIGlmIHRoZSBvYmplY3QgXCJleGlzdGluZ1Byb2plY3ROYW1lc1wiIGV4aXN0cyBvbiB0aGUgbG9jYWwgc3RvcmFnZS4gSWYgaXQgXG4vLyBleGlzdHMsIGZldGNoIGl0IGZyb20gdGhlIGxvY2FsIHN0b3JhZ2UuIE90aGVyd2lzZSwgY3JlYXRlIGl0IGFuZCBzdG9yZSBpdCBpbiBcbi8vIHRoZSBsb2NhbCBzdG9yYWdlLiBcbmlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJleGlzdGluZ1Byb2plY3ROYW1lc1wiKSkge1xuICAgIGV4aXN0aW5nUHJvamVjdE5hbWVzID0ge1xuICAgICAgICBwcm9qZWN0TmFtZXM6IFtdLFxuICAgIH07XG4gICAgY29uc29sZS5sb2coXCJObyBleGlzdGluZ1Byb2plY3ROYW1lcyBvYmplY3QgaW4gdGhlIGxvY2FsIHN0b3JhZ2UhXCIpOyBcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImV4aXN0aW5nUHJvamVjdE5hbWVzXCIsIEpTT04uc3RyaW5naWZ5KGV4aXN0aW5nUHJvamVjdE5hbWVzKSk7XG59IFxuZWxzZSB7XG4gICAgY29uc29sZS5sb2coXCJleGlzdGluZ1Byb2plY3ROYW1lcyBvYmplY3QgaW4gdGhlIGxvY2FsIHN0b3JhZ2UhXCIpO1xuICAgIGV4aXN0aW5nUHJvamVjdE5hbWVzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImV4aXN0aW5nUHJvamVjdE5hbWVzXCIpKTsgXG4gICAgY29uc29sZS5sb2coXCJleGlzdGluZyBwcm9qZWN0IG5hbWVzOlwiKTtcbiAgICBjb25zb2xlLmxvZyhleGlzdGluZ1Byb2plY3ROYW1lcyk7XG59IFxuXG4vLyBBc3N1bWUgdGhhdCBhIG5ldyB0b2RvIGxpc3QgaXMgY3JlYXRlZCBhbmQgc2F2ZWQgaW4gdGhlIGxvY2FsIHN0b3JhZ2VcbmxldCB0aXRsZSA9IFwiVGhlIGJvb2sgcmV2aWV3XCI7IFxubGV0IGRlc2NyaXB0aW9uID0gXCJJIGFtIHN0YXJ0aW5nIGEgYm9vayByZXZpZXcuXCI7XG5sZXQgZHVlRGF0ZSA9IFwiMTAuMDQuMjAyNFwiO1xubGV0IHByaW9yaXR5ID0gXCJoaWdoXCI7IFxubGV0IG93bmVyUHJvamVjdCA9IFwiQm9va1Jldmlld1wiO1xuLy8gdG9kbyBpcyBjcmVhdGVkXG5sZXQgdG9kbyA9IGNyZWF0ZVRvZG9MaXN0KHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG93bmVyUHJvamVjdCk7IFxuLy8gc3RvcmFnZSBuYW1lIG9mIHRoZSB0b2RvIGlzIGRldGVybWluZWQgYnkgdGhlIHByb2dyYW1tZXJcbmxldCBzdG9yYWdlTmFtZSA9IG93bmVyUHJvamVjdCArIFwiLVwiICsgdGl0bGU7IFxuY29uc29sZS5sb2coXCJ0aGUgZmlyc3QgdG9kb1wiKTtcbmNvbnNvbGUubG9nKHRvZG8pOyBcbmNvbnNvbGUubG9nKFwiZXhpc3RpbmcgcHJvamVjdCBuYW1lczpcIik7IFxuY29uc29sZS5sb2coZXhpc3RpbmdQcm9qZWN0TmFtZXMpOyBcbi8vIGlzIHRoZSBwcm9qZWN0IGFscmVhZHkgZXhpc3Rpbmc/XG5sZXQgaW5kZXggPSBleGlzdGluZ1Byb2plY3ROYW1lcy5wcm9qZWN0TmFtZXMuaW5kZXhPZihvd25lclByb2plY3QpOyBcbmlmIChpbmRleCA9PT0gLTEpIHsgLy8gdGhlIHByb2plY3QgaXMgbmV3XG4gICAgLy8gSGVuY2UsIGNyZWF0ZSBpdFxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBjcmVhdGVQcm9qZWN0KG93bmVyUHJvamVjdCk7IFxuICAgIC8vIHNhdmUgaXQgaW4gdGhlIGxvY2FsIHN0b3JhZ2VcbiAgICBzYXZlUHJvamVjdChuZXdQcm9qZWN0KTsgXG4gICAgLy8gcmVnaXN0ZXIgaXQgdG8gdGhlIGV4aXN0aW5nIHByb2plY3QgbmFtZXNcbiAgICBhZGRUb0V4aXN0aW5nUHJvamVjdE5hbWVzKG5ld1Byb2plY3QpO1xufSBcbi8vIHRoZSB0b2RvIGlzIHN0b3JlZCBpbiB0aGUgc3RvcmFnZVxuc2F2ZVRvZG9MaXN0KHN0b3JhZ2VOYW1lLCB0b2RvKTsgXG5cbi8vIHJlZ2lzdGVyIHRoZSBuZXcgdG9kbyBsaXN0IHRvIHRoZSBvd25lciBwcm9qZWN0XG5sZXQgb3duZXJQcm9qZWN0T2JqZWN0ID0gZ2V0UHJvamVjdChvd25lclByb2plY3QpOyBcbm93bmVyUHJvamVjdE9iamVjdCA9IGFkZFRvZG9MaXN0TmFtZShvd25lclByb2plY3RPYmplY3QsIHRpdGxlKTsgXG5zYXZlUHJvamVjdChvd25lclByb2plY3RPYmplY3QpO1xuXG5leGlzdGluZ1Byb2plY3ROYW1lcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJleGlzdGluZ1Byb2plY3ROYW1lc1wiKSk7IFxuY29uc29sZS5sb2coXCJleGlzdGluZyBwcm9qZWN0IG5hbWVzIGFmdGVyIHRoZSBwcm9qZWN0IGNyZWF0aW9uOlwiKTtcbmNvbnNvbGUubG9nKGV4aXN0aW5nUHJvamVjdE5hbWVzKTsgXG5sZXQgdGhlT3duZXJQcm9qZWN0ID0gZ2V0UHJvamVjdChvd25lclByb2plY3QpOyBcbmNvbnNvbGUubG9nKFwidGhlIG93bmVyIHByb2plY3Qgb2YgdGhlIGZpcnN0IHRvZG86XCIpO1xuY29uc29sZS5sb2codGhlT3duZXJQcm9qZWN0KTsgXG5cbi8vIEFzc3VtZSB0aGF0IGEgbmV3IHRvZG8gbGlzdCBpcyBjcmVhdGVkIGFuZCBzYXZlZCBpbiBhbiBleGlzdGluZyBwcm9qZWN0IFxudGl0bGUgPSBcIlRoZSByZXZpZXcgZWRpdFwiOyBcbmRlc2NyaXB0aW9uID0gXCJJIGFtIGVkaXRpbmcgdGhlIGJvb2sgcmV2aWV3LlwiO1xuZHVlRGF0ZSA9IFwiMTAuMDUuMjAyNFwiO1xucHJpb3JpdHkgPSBcImhpZ2hcIjsgXG5vd25lclByb2plY3QgPSBcIkJvb2tSZXZpZXdcIjtcbi8vIHRvZG8gaXMgY3JlYXRlZFxudG9kbyA9IGNyZWF0ZVRvZG9MaXN0KHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG93bmVyUHJvamVjdCk7IFxuLy8gc3RvcmFnZSBuYW1lIG9mIHRoZSB0b2RvIGlzIGRldGVybWluZWQgYnkgdGhlIHByb2dyYW1tZXJcbnN0b3JhZ2VOYW1lID0gb3duZXJQcm9qZWN0ICsgXCItXCIgKyB0aXRsZTsgXG5jb25zb2xlLmxvZyhcInRoZSBzZWNvbmQgdG9kb1wiKTtcbmNvbnNvbGUubG9nKHRvZG8pO1xuLy8gdGhlIHRvZG8gaXMgc3RvcmVkIGluIHRoZSBzdG9yYWdlXG5zYXZlVG9kb0xpc3Qoc3RvcmFnZU5hbWUsIHRvZG8pOyBcbi8vIGlzIHRoZSB0b2RvIHN0b3JlZCBpbiB0aGUgbG9jYWwgc3RvcmFnZT8gXG50b2RvID0gZ2V0VG9kbyhzdG9yYWdlTmFtZSk7XG5jb25zb2xlLmxvZyhcImlzIHRoZSB0b2RvIHJlYWxseSBzdG9yZWQgaW4gdGhlIGxvY2FsIHN0b3JhZ2U/XCIpOyBcbmNvbnNvbGUubG9nKHRvZG8pO1xuY29uc29sZS5sb2coXCJleGlzdGluZyBwcm9qZWN0IG5hbWVzOlwiKTsgXG5jb25zb2xlLmxvZyhleGlzdGluZ1Byb2plY3ROYW1lcyk7IFxuLy8gaXMgdGhlIHByb2plY3QgYWxyZWFkeSBleGlzdGluZz9cbmluZGV4ID0gZXhpc3RpbmdQcm9qZWN0TmFtZXMucHJvamVjdE5hbWVzLmluZGV4T2Yob3duZXJQcm9qZWN0KTsgXG5pZiAoaW5kZXggPT09IC0xKSB7IC8vIHRoZSBwcm9qZWN0IGlzIG5ld1xuICAgIC8vIEhlbmNlLCBjcmVhdGUgaXRcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gY3JlYXRlUHJvamVjdChvd25lclByb2plY3QpOyBcbiAgICAvLyBzYXZlIGl0IGluIHRoZSBsb2NhbCBzdG9yYWdlXG4gICAgc2F2ZVByb2plY3QobmV3UHJvamVjdCk7IFxuICAgIC8vIHJlZ2lzdGVyIGl0IHRvIHRoZSBleGlzdGluZyBwcm9qZWN0IG5hbWVzXG4gICAgYWRkVG9FeGlzdGluZ1Byb2plY3ROYW1lcyhuZXdQcm9qZWN0KTtcbn0gXG4vLyByZWdpc3RlciB0aGUgbmV3IHRvZG8gbGlzdCB0byB0aGUgb3duZXIgcHJvamVjdCBcbm93bmVyUHJvamVjdE9iamVjdCA9IGdldFByb2plY3Qob3duZXJQcm9qZWN0KTsgXG5vd25lclByb2plY3RPYmplY3QgPSBhZGRUb2RvTGlzdE5hbWUob3duZXJQcm9qZWN0T2JqZWN0LCB0aXRsZSk7IFxuc2F2ZVByb2plY3Qob3duZXJQcm9qZWN0T2JqZWN0KTtcblxuZXhpc3RpbmdQcm9qZWN0TmFtZXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZXhpc3RpbmdQcm9qZWN0TmFtZXNcIikpOyBcbmNvbnNvbGUubG9nKFwiZXhpc3RpbmcgcHJvamVjdCBuYW1lczpcIik7XG5jb25zb2xlLmxvZyhleGlzdGluZ1Byb2plY3ROYW1lcyk7IFxudGhlT3duZXJQcm9qZWN0ID0gZ2V0UHJvamVjdChvd25lclByb2plY3QpOyBcbmNvbnNvbGUubG9nKFwidGhlIG93bmVyIHByb2plY3Qgb2YgdGhlIHNlY29uZCB0b2RvOlwiKTsgXG5jb25zb2xlLmxvZyh0aGVPd25lclByb2plY3QpOyBcblxuLy8gYSBuZXcgcHJvamVjdCBpcyBjcmVhdGVkXG5jb25zdCBuZXdQcm9qZWN0MiA9IGNyZWF0ZVByb2plY3QoXCJFZGl0c1wiKTsgXG4vLyBzYXZlIGl0IGluIHRoZSBsb2NhbCBzdG9yYWdlXG5zYXZlUHJvamVjdChuZXdQcm9qZWN0Mik7IFxuLy8gcmVnaXN0ZXIgaXQgdG8gdGhlIGV4aXN0aW5nIHByb2plY3QgbmFtZXNcbmFkZFRvRXhpc3RpbmdQcm9qZWN0TmFtZXMobmV3UHJvamVjdDIpOyBcbmV4aXN0aW5nUHJvamVjdE5hbWVzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImV4aXN0aW5nUHJvamVjdE5hbWVzXCIpKTsgXG5jb25zb2xlLmxvZyhcImV4aXN0aW5nIHByb2plY3QgbmFtZXM6XCIpO1xuY29uc29sZS5sb2coZXhpc3RpbmdQcm9qZWN0TmFtZXMpOyBcblxuLy8gdXBkYXRlIHRoZSBzdG9yYWdlIG5hbWUgb2YgdGhlIHRvZG8gXCJUaGUgcmV2aWV3IGVkaXRcIiBcbmxldCBwcmV2aW91c093bmVyUHJvamVjdCA9IFwiQm9va1Jldmlld1wiOyBcbmxldCBwcmV2aW91c1N0b3JhZ2VOYW1lID0gcHJldmlvdXNPd25lclByb2plY3QrXCItXCIrXCJUaGUgcmV2aWV3IGVkaXRcIjtcbmxldCB1cGRhdGVkVG9kbyA9IHVwZGF0ZVRvZG9MaXN0U3RvcmFnZU5hbWUocHJldmlvdXNTdG9yYWdlTmFtZSwgXCJFZGl0c1wiKTsgXG5kZWxldGVUb2RvTGlzdChwcmV2aW91c1N0b3JhZ2VOYW1lKTsgXG5sZXQgcHJldmlvdXNPd25lclByb2plY3RPYmplY3QgPSBnZXRQcm9qZWN0KHByZXZpb3VzT3duZXJQcm9qZWN0KTtcbnByZXZpb3VzT3duZXJQcm9qZWN0T2JqZWN0ID0gcmVtb3ZlVG9kb0xpc3ROYW1lKFxuICAgIHByZXZpb3VzT3duZXJQcm9qZWN0T2JqZWN0LCBwcmV2aW91c1N0b3JhZ2VOYW1lKTsgXG5zYXZlUHJvamVjdChwcmV2aW91c093bmVyUHJvamVjdE9iamVjdCk7IFxuc2F2ZVRvZG9MaXN0KFwiRWRpdHNcIitcIi1cIitcIlRoZSByZXZpZXcgZWRpdFwiLCB1cGRhdGVkVG9kbyk7IFxuXG4vLyBhZGQgdGhlIHRvZG8gdG8gdGhlIGNvbnRlbnQgb2YgdGhlIFwiRWRpdHNcIiBwcm9qZWN0IFxub3duZXJQcm9qZWN0T2JqZWN0ID0gZ2V0UHJvamVjdChcIkVkaXRzXCIpOyBcbm93bmVyUHJvamVjdE9iamVjdCA9IGFkZFRvZG9MaXN0TmFtZShvd25lclByb2plY3RPYmplY3QsIFwiVGhlIHJldmlldyBlZGl0XCIpOyBcbnNhdmVQcm9qZWN0KG93bmVyUHJvamVjdE9iamVjdCk7XG4vLyBIYXMgdXBkYXRlVG9kb0xpc3RTdG9yYWdlTmFtZSBmdW5jdGlvbiB3b3JrZWQgY29ycmVjdGx5P1xudG9kbyA9IGdldFRvZG8oXCJFZGl0cy1UaGUgcmV2aWV3IGVkaXRcIik7XG5jb25zb2xlLmxvZyhcImlzIHRoZSB0b2RvIHJlYWxseSBzdG9yZWQgaW4gdGhlIGxvY2FsIHN0b3JhZ2U/XCIpOyBcbmNvbnNvbGUubG9nKHRvZG8pOyBcbi8vIGl0IGlzIGNoZWNrZWQgaWYgdGhlIHRvZG8gaXMgYWRkZWQgdG8gdGhlIFwiRWRpdHNcIiBwcm9qZWN0XG50aGVPd25lclByb2plY3QgPSBnZXRQcm9qZWN0KFwiRWRpdHNcIik7IFxuY29uc29sZS5sb2coXCJ0aGUgcHJvamVjdCB0byB3aGljaCB0aGUgc2Vjb25kIHRvZG8gaXMgYWRkZWQ6XCIpOyBcbmNvbnNvbGUubG9nKHRoZU93bmVyUHJvamVjdCk7IFxuXG4vLyB0aGUgdGl0bGUgb2YgdGhlIHRvZG8gXCJFZGl0cy1UaGUgcmV2aWV3IGVkaXRcIiBpcyB0byBiZSB1cGRhdGVkIHRvIHRoZSBuZXcgdGl0bGUgXG4vLyBcIkVkaXRzLVRoZSByZXZpZXcgb2YgdGhlIGVkaXRcIiBcbnRvZG8gPSBnZXRUb2RvKFwiRWRpdHMtVGhlIHJldmlldyBlZGl0XCIpOyBcbnRvZG8gPSB1cGRhdGVUb2RvTGlzdFRpdGxlKHRvZG8sIFwiVGhlIHJldmlldyBvZiB0aGUgZWRpdFwiKTtcbnNhdmVUb2RvTGlzdChcIkVkaXRzLVRoZSByZXZpZXcgZWRpdFwiLCB0b2RvKTsgXG4vLyBIYXMgdXBkYXRlVG9kb0xpc3RUaXRsZSBmdW5jdGlvbiB3b3JrZWQgY29ycmVjdGx5P1xudG9kbyA9IGdldFRvZG8oXCJFZGl0cy1UaGUgcmV2aWV3IGVkaXRcIik7XG5jb25zb2xlLmxvZyhcImlzIHRoZSB0b2RvIHRpdGxlIHVwZGF0ZWQgdG8gJ1RoZSByZXZpZXcgb2YgdGhlIGVkaXQnP1wiKTsgXG5jb25zb2xlLmxvZyh0b2RvKTsgXG5cbi8vIHRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgdG9kbyBpcyB0byBiZSB1cGRhdGVkIFxuZGVzY3JpcHRpb24gPSBcIlRoZSBib29rIHJldmlldyBpcyB0byBiZSBlZGl0ZWQuXCI7XG50b2RvID0gZ2V0VG9kbyhcIkVkaXRzLVRoZSByZXZpZXcgZWRpdFwiKTsgXG50b2RvID0gdXBkYXRlVG9kb0xpc3REZXNjcmlwdGlvbih0b2RvLCBkZXNjcmlwdGlvbik7XG5zYXZlVG9kb0xpc3QoXCJFZGl0cy1UaGUgcmV2aWV3IGVkaXRcIiwgdG9kbyk7IFxuLy8gSGFzIHVwZGF0ZVRvZG9MaXN0RGVzY3JpcHRpb24gZnVuY3Rpb24gd29ya2VkIGNvcnJlY3RseT9cbnRvZG8gPSBnZXRUb2RvKFwiRWRpdHMtVGhlIHJldmlldyBlZGl0XCIpO1xuY29uc29sZS5sb2coXCJpcyB0aGUgdG9kbyBkZXNjcmlwdGlvbiB1cGRhdGVkIHByb3Blcmx5P1wiKTsgXG5jb25zb2xlLmxvZyh0b2RvKTsgXG5cbi8vIHRoZSBkdWUgZGF0ZSBvZiB0aGUgdG9kbyBpcyB0byBiZSB1cGRhdGVkIFxuZHVlRGF0ZSA9IFwiMTEuMDUuMjAyNFwiOyBcbnRvZG8gPSBnZXRUb2RvKFwiRWRpdHMtVGhlIHJldmlldyBlZGl0XCIpOyBcbnRvZG8gPSB1cGRhdGVUb2RvTGlzdER1ZURhdGUodG9kbywgZHVlRGF0ZSk7XG5zYXZlVG9kb0xpc3QoXCJFZGl0cy1UaGUgcmV2aWV3IGVkaXRcIiwgdG9kbyk7IFxuLy8gSGFzIHVwZGF0ZVRvZG9MaXN0RHVlRGF0ZSBmdW5jdGlvbiB3b3JrZWQgY29ycmVjdGx5P1xudG9kbyA9IGdldFRvZG8oXCJFZGl0cy1UaGUgcmV2aWV3IGVkaXRcIik7XG5jb25zb2xlLmxvZyhcImlzIHRoZSB0b2RvIGRlc2NyaXB0aW9uIHVwZGF0ZWQgcHJvcGVybHk/XCIpOyBcbmNvbnNvbGUubG9nKHRvZG8pOyBcblxuLy8gdGhlIHByaW9yaXR5IG9mIHRoZSB0b2RvIGlzIHRvIGJlIHVwZGF0ZWQgXG5wcmlvcml0eSA9IFwidmVyeSBoaWdoXCI7IFxudG9kbyA9IGdldFRvZG8oXCJFZGl0cy1UaGUgcmV2aWV3IGVkaXRcIik7IFxudG9kbyA9IHVwZGF0ZVRvZG9MaXN0UHJpb3JpdHkodG9kbywgcHJpb3JpdHkpO1xuc2F2ZVRvZG9MaXN0KFwiRWRpdHMtVGhlIHJldmlldyBlZGl0XCIsIHRvZG8pOyBcbi8vIEhhcyB1cGRhdGVUb2RvTGlzdFByaW9yaXR5IGZ1bmN0aW9uIHdvcmtlZCBjb3JyZWN0bHk/XG50b2RvID0gZ2V0VG9kbyhcIkVkaXRzLVRoZSByZXZpZXcgZWRpdFwiKTtcbmNvbnNvbGUubG9nKFwiaXMgdGhlIHRvZG8gcHJpb3JpdHkgdXBkYXRlZCBwcm9wZXJseT9cIik7IFxuY29uc29sZS5sb2codG9kbyk7IFxuXG4vLyBhIG5ldyBwcm9qZWN0IGlzIGNyZWF0ZWQgXG4vLyBpcyB0aGUgcHJvamVjdCBhbHJlYWR5IGV4aXN0aW5nPyBcbmNvbnN0IG5ld1Byb2plY3ROYW1lID0gXCJXcml0aW5nc1wiOyBcbmluZGV4ID0gZXhpc3RpbmdQcm9qZWN0TmFtZXMucHJvamVjdE5hbWVzLmluZGV4T2YobmV3UHJvamVjdE5hbWUpOyBcbmlmIChpbmRleCA9PT0gLTEpIHsgLy8gdGhlIHByb2plY3QgaXMgbmV3XG4gICAgLy8gSGVuY2UsIGNyZWF0ZSBpdFxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBjcmVhdGVQcm9qZWN0KG5ld1Byb2plY3ROYW1lKTsgXG4gICAgLy8gc2F2ZSBpdCBpbiB0aGUgbG9jYWwgc3RvcmFnZVxuICAgIHNhdmVQcm9qZWN0KG5ld1Byb2plY3QpOyBcbiAgICAvLyByZWdpc3RlciBpdCB0byB0aGUgZXhpc3RpbmcgcHJvamVjdCBuYW1lc1xuICAgIGFkZFRvRXhpc3RpbmdQcm9qZWN0TmFtZXMobmV3UHJvamVjdCk7XG59ICBcbmV4aXN0aW5nUHJvamVjdE5hbWVzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImV4aXN0aW5nUHJvamVjdE5hbWVzXCIpKTsgXG5jb25zb2xlLmxvZyhcImV4aXN0aW5nIHByb2plY3QgbmFtZXM6XCIpO1xuY29uc29sZS5sb2coZXhpc3RpbmdQcm9qZWN0TmFtZXMpOyBcblxuLy8gZGVsZXRlUHJvamVjdCBpcyB0ZXN0ZWRcbmRlbGV0ZVByb2plY3QobmV3UHJvamVjdE5hbWUpOyBcbmNvbnNvbGUubG9nKGdldFByb2plY3QobmV3UHJvamVjdE5hbWUpKTsgXG5cbi8vIHJlbW92ZUZyb21FeGlzdGluZ1Byb2plY3ROYW1lcyBpcyB0ZXN0ZWQgXG5leGlzdGluZ1Byb2plY3ROYW1lcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJleGlzdGluZ1Byb2plY3ROYW1lc1wiKSk7IFxuY29uc29sZS5sb2coXCJleGlzdGluZyBwcm9qZWN0IG5hbWVzOlwiKTtcbmNvbnNvbGUubG9nKGV4aXN0aW5nUHJvamVjdE5hbWVzKTsgXG5yZW1vdmVGcm9tRXhpc3RpbmdQcm9qZWN0TmFtZXMobmV3UHJvamVjdE5hbWUpOyBcbmV4aXN0aW5nUHJvamVjdE5hbWVzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImV4aXN0aW5nUHJvamVjdE5hbWVzXCIpKTsgXG5jb25zb2xlLmxvZyhcImV4aXN0aW5nIHByb2plY3QgbmFtZXM6XCIpO1xuY29uc29sZS5sb2coZXhpc3RpbmdQcm9qZWN0TmFtZXMpOyBcblxuc2V0dXBNYWluRnJhbWVzKCk7IFxuaW1wbGVtZW50UHJvamVjdE5hbWVzTGlzdCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==