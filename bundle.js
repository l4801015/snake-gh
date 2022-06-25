/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Canvas.js":
/*!***********************!*\
  !*** ./src/Canvas.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Canvas\": () => (/* binding */ Canvas)\n/* harmony export */ });\nfunction Canvas (width, height) {\n\tthis.width = width;\n\tthis.height = height;\n\tthis.canvas = document.createElement('canvas');\n\tthis.canvas.width = width;\n\tthis.canvas.height = height;\n\tthis.context = this.canvas.getContext('2d');\n}\n\nCanvas.prototype.init = function () {\n\tthis.canvas.style.position = 'absolute';\n\tthis.canvas.style.top = '0px';\n\tthis.canvas.style.left = '0px';\n\tthis.canvas.style.width = '100%';\n\tthis.canvas.style.height = '100%';\n\tthis.clear();\n\tdocument.body.appendChild(this.canvas);\n\treturn this.context;\n}\n\n\nCanvas.prototype.clear = function () {\n\tthis.context.clearRect(0, 0, this.width, this.height);\n\tthis.context.fillStyle = '#333';\n\tthis.context.fillRect(0, 0, this.width, this.height);\n}\n\nCanvas.prototype.drawGrid = function (gridSize) {\n\tthis.context.strokeStyle = 'rgba(255,255,255,0.1)';\n\tthis.context.lineWidth = 1;\n\tfor (var i = 0; i < this.width; i += gridSize) {\n\t\tthis.context.beginPath();\n\t\tthis.context.moveTo(i, 0);\n\t\tthis.context.lineTo(i, this.height);\n\t\tthis.context.stroke();\n\t\tthis.context.closePath();\n\t}\n\tfor (var i = 0; i < this.height; i += gridSize) {\n\t\tthis.context.beginPath();\n\t\tthis.context.moveTo(0, i);\n\t\tthis.context.lineTo(this.width, i);\n\t\tthis.context.stroke();\n\t\tthis.context.closePath();\n\t}\n}\n\n\n\n\n//# sourceURL=webpack://dev/./src/Canvas.js?");

/***/ }),

/***/ "./src/FPS.js":
/*!********************!*\
  !*** ./src/FPS.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FPS\": () => (/* binding */ FPS)\n/* harmony export */ });\nfunction FPS (fps) {\n\tthis.fps = fps\n}\n\nFPS.prototype.setFPS = function (fps) {\n\tthis.fps = fps\n}\n\nFPS.prototype.getFPS = function () {\n\treturn this.fps\n}\n\nFPS.prototype.increment = function () {\n\tthis.fps++\n}\n\nFPS.prototype.decrement = function ()\t{\n\tif (!this.isSmoler()) {\n\t\tthis.fps--\n\t}\n\treturn\n}\n\nFPS.prototype.reset = function () {\n\tthis.fps = 4\n}\n\nFPS.prototype.showFPS = function (ctx) {\n\tctx.fillStyle = \"rgba(255, 255, 255, 0.8)\";\n\tctx.font = \"20px Arial\";\n\tctx.fillText(\"FPS: \" + this.fps, 10, 60);\n}\n\nFPS.prototype.isSmoler = function () {\n\treturn this.fps < 2\n}\n\n\n\n\n//# sourceURL=webpack://dev/./src/FPS.js?");

/***/ }),

/***/ "./src/Food.js":
/*!*********************!*\
  !*** ./src/Food.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Food\": () => (/* binding */ Food)\n/* harmony export */ });\n/* harmony import */ var _Vector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vector.js */ \"./src/Vector.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\n\n\nfunction Food(options) {\n\t\tthis.pos = this.pickLocation(options);\n\t\tthis.size = options.size;\n\t  this.ctx = options.ctx;\n\t  this.options = options;\n}\n\nFood.prototype.show = function() {\n\tthis.ctx.fillStyle = 'red';\n\tthis.ctx.fillRect(this.pos.x, this.pos.y, this.size, this.size);\n}\n\nFood.prototype.pickLocation = function(options) {\n\tconst cols = options.cols;\n\tconst rows = options.rows;\n\tconst size = options.size;\n\tconst x = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.floor)((0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.random)(0, cols));\n\tconst y = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.floor)((0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.random)(0, rows));\n\tconst newPos = new _Vector_js__WEBPACK_IMPORTED_MODULE_0__.Vector(x, y);\n\tnewPos.mul(size);\n\treturn newPos;\n}\n\nFood.prototype.update = function() {\n\tthis.pos = this.pickLocation(this.options);\n}\n\n\n\n\n//# sourceURL=webpack://dev/./src/Food.js?");

/***/ }),

/***/ "./src/Snake.js":
/*!**********************!*\
  !*** ./src/Snake.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Snake\": () => (/* binding */ Snake)\n/* harmony export */ });\n/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vector */ \"./src/Vector.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\n\n\nfunction Snake(options) {\n\tthis.pos = new _Vector__WEBPACK_IMPORTED_MODULE_0__.Vector(0, 0);\n\tthis.dir = new _Vector__WEBPACK_IMPORTED_MODULE_0__.Vector(20, 0);\n\tthis.ctx = options.ctx;\n\tthis.size = options.size;\n\tthis.cols = options.cols;\n\tthis.rows = options.rows;\n\tthis.total = 0;\n\tthis.tail = [];\n\n}\n\nSnake.prototype.show = function () {\n\tthis.ctx.fillStyle = \"#fff\";\n\tif (this.pos.x > this.ctx.canvas.width) {\n\t\tthis.pos.x = 0;\n\t}\n\tif (this.pos.x < 0) {\n\t\tthis.pos.x = this.cols * this.size;\n\t}\n\tif (this.pos.y > this.ctx.canvas.height) {\n\t\tthis.pos.y = 0;\n\t}\n\tif (this.pos.y < 0) {\n\t\tthis.pos.y = this.rows * this.size;\n\t}\n\tfor (let i = 0; i < this.tail.length; i++) {\n\t\tthis.ctx.fillRect(this.tail[i].x, this.tail[i].y, this.size, this.size);\n\t}\n\n\n\tthis.ctx.fillRect(this.pos.x, this.pos.y, this.size, this.size);\n};\n\nSnake.prototype.update = function (fps) {\n\tfor (let i = 0; i < this.tail.length - 1; i++) {\n\t\tthis.tail[i] = this.tail[i + 1];\n\t}\n\tif (this.total >= 1) {\n\t\tthis.tail[this.total - 1] = new _Vector__WEBPACK_IMPORTED_MODULE_0__.Vector(this.pos.x, this.pos.y);\n\t}\n\tthis.pos.add(this.dir);\n\tif (this.isDead()) {\n\t\tthis.reset();\n\t\tfps.reset();\n\t}\n};\n\nSnake.prototype.setDirection = function (dir) {\n\tconst opposite = new _Vector__WEBPACK_IMPORTED_MODULE_0__.Vector(this.dir.x, this.dir.y);\n\topposite.mul(-1);\n\tif (!opposite.isEqual(dir)) {\n\t\tthis.dir = dir;\n\t}\n\treturn;\n};\n\nSnake.prototype.isEating = function (food) {\n\tif (!this.pos.isEqual(food.pos)) {\n\t\treturn false;\n\t}\n\tthis.total++;\n\treturn true;\n};\n\nSnake.prototype.isDead = function () {\n\tfor (let i = 0; i < this.tail.length; i++) {\n\t\tif (this.pos.isEqual(this.tail[i])) {\n\t\t\treturn true;\n\t\t}\n\t}\n\treturn false;\n}\n\nSnake.prototype.reset = function () {\n\tthis.total = 0;\n\tthis.tail = [];\n\tthis.pos = new _Vector__WEBPACK_IMPORTED_MODULE_0__.Vector(0, 0);\n\tthis.dir = new _Vector__WEBPACK_IMPORTED_MODULE_0__.Vector(20, 0);\n}\n\nSnake.prototype.showScore = function () {\n\tthis.ctx.fillStyle = \"rgba(255, 255, 255, 0.8)\";\n\tthis.ctx.font = \"20px Arial\";\n\tthis.ctx.fillText(\"Score: \" + this.total, 10, 30);\n}\n\nSnake.prototype.getScore = function () {\n\treturn this.total;\n}\n\n\n//# sourceURL=webpack://dev/./src/Snake.js?");

/***/ }),

/***/ "./src/Vector.js":
/*!***********************!*\
  !*** ./src/Vector.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Vector\": () => (/* binding */ Vector)\n/* harmony export */ });\nfunction Vector(x, y) {\n\tthis.x = x;\n\tthis.y = y;\n}\n\nVector.prototype.add = function(v) {\n\tthis.x += v.x;\n\tthis.y += v.y;\n\treturn this;\n}\n\nVector.prototype.sub = function(v) {\n\tthis.x -= v.x;\n\tthis.y -= v.y;\n\treturn this;\n}\n\nVector.prototype.mul = function(n) {\n\tthis.x *= n;\n\tthis.y *= n;\n\treturn this;\n}\n\nVector.prototype.div = function(n) {\n\tthis.x /= n;\n\tthis.y /= n;\n\treturn this;\n}\t\n\nVector.prototype.isEqual = function(v) {\n\tif (this.x == v.x && this.y == v.y) {\n\t\treturn true;\n\t} else {\n\t\treturn false;\n\t}\n}\n\nVector.prototype.length = function() {\n\treturn Math.sqrt(this.x * this.x + this.y * this.y);\n}\n\nVector.prototype.clone = function() {\n\treturn new Vector(this.x, this.y);\n}\n\n\n\n//# sourceURL=webpack://dev/./src/Vector.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Canvas */ \"./src/Canvas.js\");\n/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Vector */ \"./src/Vector.js\");\n/* harmony import */ var _Snake__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Snake */ \"./src/Snake.js\");\n/* harmony import */ var _Food__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Food */ \"./src/Food.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _FPS__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FPS */ \"./src/FPS.js\");\n//import VConsole from \"vconsole\";\r\n//const vConsole = new VConsole();\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst width = window.innerWidth;\r\nconst height = window.innerHeight;\r\nconst size = 20;\r\nconst cols = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.floor)(width / size);\r\nconst rows = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.floor)(height / size);\r\nconst canvas = new _Canvas__WEBPACK_IMPORTED_MODULE_0__.Canvas(width, height);\r\nconst ctx = canvas.init();\r\nconst options = {\r\n\twidth: width,\r\n\theight: height,\r\n\tsize: size,\r\n\tcols: cols,\r\n\trows: rows,\r\n\tctx: ctx,\r\n};\r\nconst snake = new _Snake__WEBPACK_IMPORTED_MODULE_2__.Snake(options);\r\nconst food = new _Food__WEBPACK_IMPORTED_MODULE_3__.Food(options);\r\nconst fps = new _FPS__WEBPACK_IMPORTED_MODULE_5__.FPS(4);\r\n\r\nconst setup = () => {\r\n\tsnake.show();\r\n\tfood.show();\r\n};\r\n\r\nlet then = performance.now();\r\nconst loop = () => {\r\n\tconst interval = 1000 / fps.getFPS();\r\n\tconst now = performance.now();\r\n\tconst delta = now - then;\r\n\tif (delta > interval) {\r\n\t\tthen = now - (delta % interval);\r\n\t\tcanvas.clear();\r\n\t\tcanvas.drawGrid(size);\r\n\t\tsnake.update(fps);\r\n\t\tsnake.show();\r\n\t\tsnake.showScore();\r\n\t\tfps.showFPS(ctx);\r\n\t\tif (snake.isEating(food)) {\r\n\t\t\tfood.update();\r\n\t\t\tif (snake.getScore() % 3 === 0) {\r\n\t\t\t\tfps.increment();\r\n\t\t\t}\r\n\t\t}\r\n\t\tfood.show();\r\n\t}\r\n\r\n\trequestAnimationFrame(loop);\r\n};\r\n\r\nsetup();\r\nloop();\r\n\r\nconst left = document.createElement(\"button\");\r\nleft.innerHTML = \"Left\";\r\nleft.addEventListener(\"click\", () => {\r\n\tsnake.setDirection(new _Vector__WEBPACK_IMPORTED_MODULE_1__.Vector(-20, 0));\r\n});\r\nleft.style.position = \"absolute\";\r\nleft.style.bottom = \"20px\";\r\nleft.style.left = \"10px\";\r\nleft.style.width = \"100px\";\r\nleft.style.padding = \"20px\";\r\nleft.style.backgroundColor = \"rgba(255, 255, 255, 0.5)\";\r\nleft.style.border = \"1px solid #000\";\r\nleft.style.borderRadius = \"5px\";\r\ndocument.body.appendChild(left);\r\n\r\nconst right = document.createElement(\"button\");\r\nright.innerHTML = \"Right\";\r\nright.addEventListener(\"click\", () => {\r\n\tsnake.setDirection(new _Vector__WEBPACK_IMPORTED_MODULE_1__.Vector(20, 0));\r\n});\r\nright.style.position = \"absolute\";\r\nright.style.bottom = \"20px\";\r\nright.style.right = \"10px\";\r\nright.style.width = \"100px\";\r\nright.style.padding = \"20px\";\r\nright.style.backgroundColor = \"rgba(255, 255, 255, 0.4\";\r\nright.style.border = \"1px solid #000\";\r\nright.style.borderRadius = \"5px\";\r\ndocument.body.appendChild(right);\r\n\r\nconst up = document.createElement(\"button\");\r\nup.innerHTML = \"Up\";\r\nup.addEventListener(\"click\", () => {\r\n\tsnake.setDirection(new _Vector__WEBPACK_IMPORTED_MODULE_1__.Vector(0, -20));\r\n});\r\nup.style.position = \"absolute\";\r\nup.style.bottom = \"100px\";\r\nup.style.left = \"10px\";\r\nup.style.width = \"100px\";\r\nup.style.padding = \"20px\";\r\nup.style.backgroundColor = \"rgba(255, 255, 255, 0.4\";\r\nup.style.border = \"1px solid #000\";\r\nup.style.borderRadius = \"5px\";\r\ndocument.body.appendChild(up);\r\n\r\nconst down = document.createElement(\"button\");\r\ndown.innerHTML = \"Down\";\r\ndown.addEventListener(\"click\", () => {\r\n\tsnake.setDirection(new _Vector__WEBPACK_IMPORTED_MODULE_1__.Vector(0, 20));\r\n});\r\ndown.style.position = \"absolute\";\r\ndown.style.bottom = \"100px\";\r\ndown.style.right = \"10px\";\r\ndown.style.width = \"100px\";\r\ndown.style.padding = \"20px\";\r\ndown.style.backgroundColor = \"rgba(255, 255, 255, 0.4\";\r\ndown.style.border = \"1px solid #000\";\r\ndown.style.borderRadius = \"5px\";\r\ndocument.body.appendChild(down);\r\n\r\nconst fpsUp = document.createElement(\"button\");\r\nfpsUp.innerHTML = \"FPS U\";\r\nfpsUp.addEventListener(\"click\", () => {\r\n\tfps.increment();\r\n});\r\nfpsUp.style.position = \"absolute\";\r\nfpsUp.style.top = \"20px\";\r\nfpsUp.style.right = \"10px\";\r\nfpsUp.style.width = \"80px\";\r\nfpsUp.style.padding = \"10px\";\r\nfpsUp.style.backgroundColor = \"rgba(255, 255, 255, 0.4\";\r\nfpsUp.style.border = \"1px solid #000\";\r\nfpsUp.style.borderRadius = \"5px\";\r\ndocument.body.appendChild(fpsUp);\r\n\r\nconst fpsDown = document.createElement(\"button\");\r\nfpsDown.innerHTML = \"FPS D\";\r\nfpsDown.addEventListener(\"click\", () => {\r\n\tfps.decrement();\r\n});\r\nfpsDown.style.position = \"absolute\";\r\nfpsDown.style.top = \"70px\";\r\nfpsDown.style.right = \"10px\";\r\nfpsDown.style.width = \"80px\";\r\nfpsDown.style.padding = \"10px\";\r\nfpsDown.style.backgroundColor = \"rgba(255, 255, 255, 0.4\";\r\nfpsDown.style.border = \"1px solid #000\";\r\nfpsDown.style.borderRadius = \"5px\";\r\ndocument.body.appendChild(fpsDown);\r\n\r\ndocument.addEventListener(\"keydown\", (e) => {\r\n\tif (e.keyCode === 38) {\r\n\t\tsnake.setDirection(new _Vector__WEBPACK_IMPORTED_MODULE_1__.Vector(0, -20));\r\n\t} else if (e.keyCode === 40) {\r\n\t\tsnake.setDirection(new _Vector__WEBPACK_IMPORTED_MODULE_1__.Vector(0, 20));\r\n\t} else if (e.keyCode === 37) {\r\n\t\tsnake.setDirection(new _Vector__WEBPACK_IMPORTED_MODULE_1__.Vector(-20, 0));\r\n\t} else if (e.keyCode === 39) {\r\n\t\tsnake.setDirection(new _Vector__WEBPACK_IMPORTED_MODULE_1__.Vector(20, 0));\r\n\t}\r\n});\r\n\n\n//# sourceURL=webpack://dev/./src/index.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"floor\": () => (/* binding */ floor),\n/* harmony export */   \"map\": () => (/* binding */ map),\n/* harmony export */   \"random\": () => (/* binding */ random)\n/* harmony export */ });\nconst floor = (n) => Math.floor(n);\nconst random = (min, max) => Math.random() * (max - min) + min;\nconst map = (n, start1, stop1, start2, stop2) => (n - start1) / (stop1 - start1) * (stop2 - start2) + start2;\n\n\n//# sourceURL=webpack://dev/./src/utils.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;