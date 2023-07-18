/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_hamburger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/hamburger */ \"./src/js/modules/hamburger.js\");\n/* harmony import */ var _modules_accordeon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/accordeon */ \"./src/js/modules/accordeon.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/slider */ \"./src/js/modules/slider.js\");\n/* harmony import */ var _modules_scrollSmooth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/scrollSmooth */ \"./src/js/modules/scrollSmooth.js\");\n\r\n\r\n\r\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    'use stricti';\r\n\r\n    (0,_modules_hamburger__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    (0,_modules_accordeon__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    (0,_modules_slider__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n    (0,_modules_scrollSmooth__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n});\n\n//# sourceURL=webpack://gulp-start/./src/js/main.js?");

/***/ }),

/***/ "./src/js/modules/accordeon.js":
/*!*************************************!*\
  !*** ./src/js/modules/accordeon.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction accordeon () {\r\n    const btns = document.querySelectorAll('.doubts__down');\r\n\r\n    btns.forEach(btn => {\r\n        btn.addEventListener('click', function(e) {\r\n            const target = e.currentTarget;\r\n            if (target.classList.contains('down_active')) {\r\n                hidden();\r\n            } else {\r\n                hidden();\r\n                target.classList.add('down_active');\r\n                target.nextElementSibling.classList.add('answer_active');\r\n            }\r\n        })\r\n    });\r\n\r\n    function hidden() {\r\n        btns.forEach(btn => {\r\n            btn.classList.remove('down_active');\r\n            btn.nextElementSibling.classList.remove('answer_active');\r\n        })\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (accordeon);\n\n//# sourceURL=webpack://gulp-start/./src/js/modules/accordeon.js?");

/***/ }),

/***/ "./src/js/modules/hamburger.js":
/*!*************************************!*\
  !*** ./src/js/modules/hamburger.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst hamburger = () => {\r\n    const trigger = document.querySelector('.nav__open'),\r\n          hamburger = document.querySelector('.hamburger'),\r\n          close = document.querySelector('.hamburger__close'),\r\n          lists = document.querySelectorAll('.hamburger__menu li');\r\n\r\n    trigger.addEventListener('click', () => {\r\n        hamburger.style.top = 0;\r\n        hamburger.style.opacity = 1;\r\n    });\r\n    close.addEventListener('click', closeHumburger);\r\n\r\n    lists.forEach(list => {\r\n        list.addEventListener('click', closeHumburger);\r\n    })\r\n\r\n    function closeHumburger() {\r\n        hamburger.style.top = -150 + '%';\r\n        hamburger.style.opacity = 0;\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (hamburger);\n\n//# sourceURL=webpack://gulp-start/./src/js/modules/hamburger.js?");

/***/ }),

/***/ "./src/js/modules/scrollSmooth.js":
/*!****************************************!*\
  !*** ./src/js/modules/scrollSmooth.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst scrollSmooth = () => {\r\n    const links = document.querySelectorAll('[href^=\"#\"]'),\r\n           up = document.querySelector('.up');\r\n\r\n    links.forEach(link => {\r\n        link.addEventListener('click', function(e) {\r\n            e.preventDefault();\r\n            if (this.hash) {\r\n                const el = document.querySelector(this.hash);\r\n                const rect = el.getBoundingClientRect();\r\n                window.scrollTo({\r\n                    left: window.scrollX + rect.left,\r\n                    top: window.scrollY + rect.top,\r\n                    behavior: \"smooth\"\r\n                });\r\n            } else {\r\n                window.scrollTo({\r\n                    left: 0,\r\n                    top: 0,\r\n                    behavior: \"smooth\"\r\n                });\r\n            }\r\n            console.log(this.hash);\r\n        })\r\n    });\r\n\r\n    window.addEventListener('scroll', () => {\r\n        if (document.documentElement.scrollTop > 1000) {\r\n            up.style.cssText = `opacity: 1;\r\n                                cursor: pointer;`\r\n        } else {\r\n            up.style.cssText = `opacity: 0;\r\n                                cursor: none;`\r\n        }\r\n    })\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (scrollSmooth);\n\n//# sourceURL=webpack://gulp-start/./src/js/modules/scrollSmooth.js?");

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst slider = () => {\r\n    const field = document.querySelector('.comments__field'),\r\n          cards = document.querySelectorAll('.comments__card'),\r\n          slides = field.children,\r\n          wrapper = document.querySelector('.comments__inner'),\r\n          prevBtn = document.querySelector('.comments__slider .arrow_prev'),\r\n          nexBtn = document.querySelector('.comments__slider .arrow_next'),\r\n          width = wrapper.getBoundingClientRect(wrapper).width;\r\n    \r\n    let offset = 0;\r\n    resize();\r\n    wrapper.style.overflow = 'hidden';\r\n\r\n\r\n    function resize () {\r\n        if (window.screen.availWidth < 576) {\r\n    \r\n            field.style.width = 100 * slides.length + '%';\r\n            \r\n        } else {\r\n            field.style.width = 100 * (slides.length / 2) + '%';\r\n        }\r\n    }\r\n    window.addEventListener('resize', () => {\r\n        resize();\r\n    })\r\n\r\n    \r\n    cards.forEach(slide => slide.style.width = width);\r\n    \r\n    nexBtn.addEventListener('click', () => {\r\n        next();\r\n    });\r\n\r\n    prevBtn.addEventListener('click', () => {\r\n        prev();\r\n    });\r\n\r\n    function next() {\r\n        offset += parseFloat(width) /2 ;\r\n        field.style.transform = `translateX(-${offset}px)`;\r\n        field.appendChild(slides[0]);\r\n    }\r\n\r\n    function prev() {\r\n        offset -= parseFloat(width) / 2;\r\n        field.style.transform = `translateX(-${offset}px)`;\r\n        const active = slides[slides.length - 1];\r\n            \r\n        field.insertBefore(active, slides[0]);\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (slider);\r\n\r\n\n\n//# sourceURL=webpack://gulp-start/./src/js/modules/slider.js?");

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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;