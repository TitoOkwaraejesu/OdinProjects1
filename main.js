/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js"
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contact: () => (/* binding */ contact)\n/* harmony export */ });\n//contact\n\n\nfunction contact(){\nlet contentBody = document.querySelector('#content');\n\nlet container = document.createElement('div');\n\nlet address = document.createElement('p');\naddress.textContent = 'restaurant address';\n\nlet phoneNumber = document.createElement('p');\nphoneNumber.textContent = '929287390049';\n\nlet email = document.createElement('p');\nemail.textContent = 'gduuehhe@yahoo.com';\n\ncontainer.append(email, phoneNumber, address);\n\n\ncontentBody.append(container);\n\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGFjdC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7OztBQUdPO0FBQ1A7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanM/ZDU2NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvL2NvbnRhY3RcblxuXG5leHBvcnQgZnVuY3Rpb24gY29udGFjdCgpe1xubGV0IGNvbnRlbnRCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxubGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5sZXQgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbmFkZHJlc3MudGV4dENvbnRlbnQgPSAncmVzdGF1cmFudCBhZGRyZXNzJztcblxubGV0IHBob25lTnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xucGhvbmVOdW1iZXIudGV4dENvbnRlbnQgPSAnOTI5Mjg3MzkwMDQ5JztcblxubGV0IGVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuZW1haWwudGV4dENvbnRlbnQgPSAnZ2R1dWVoaGVAeWFob28uY29tJztcblxuY29udGFpbmVyLmFwcGVuZChlbWFpbCwgcGhvbmVOdW1iZXIsIGFkZHJlc3MpO1xuXG5cbmNvbnRlbnRCb2R5LmFwcGVuZChjb250YWluZXIpO1xuXG59XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/contact.js\n\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageLoad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad.js */ \"./src/pageLoad.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\nconsole.log('hello love');\n\n\n\n\n\n(0,_pageLoad_js__WEBPACK_IMPORTED_MODULE_0__.pageLoad)();\n\nlet contentBody = document.querySelector('#content');\n\nlet menuTab = document.querySelector('.menu');\nmenuTab.addEventListener('click', () =>{\n  contentBody.textContent = '';\n  (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.menu)();\n})\nlet contactTab = document.querySelector('.contact');\ncontactTab.addEventListener('click', () =>{\n    contentBody.textContent = '';\n(0,_contact_js__WEBPACK_IMPORTED_MODULE_2__.contact)();\n})\n\nlet homeTab = document.querySelector('.home');\nhomeTab.addEventListener('click', () =>{\n    contentBody.textContent = '';\n(0,_pageLoad_js__WEBPACK_IMPORTED_MODULE_0__.pageLoad)();\n})\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUV1QztBQUNSO0FBQ007O0FBRXJDLHNEQUFROztBQUVSOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsOENBQUk7QUFDTixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0Esb0RBQU87QUFDUCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLHNEQUFRO0FBQ1IsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKCdoZWxsbyBsb3ZlJyk7XG5cbmltcG9ydCB7cGFnZUxvYWR9IGZyb20gJy4vcGFnZUxvYWQuanMnO1xuaW1wb3J0IHttZW51fSBmcm9tICcuL21lbnUuanMnO1xuaW1wb3J0IHtjb250YWN0fSBmcm9tICcuL2NvbnRhY3QuanMnO1xuXG5wYWdlTG9hZCgpO1xuXG5sZXQgY29udGVudEJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG5sZXQgbWVudVRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51Jyk7XG5tZW51VGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG4gIGNvbnRlbnRCb2R5LnRleHRDb250ZW50ID0gJyc7XG4gIG1lbnUoKTtcbn0pXG5sZXQgY29udGFjdFRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0Jyk7XG5jb250YWN0VGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG4gICAgY29udGVudEJvZHkudGV4dENvbnRlbnQgPSAnJztcbmNvbnRhY3QoKTtcbn0pXG5cbmxldCBob21lVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUnKTtcbmhvbWVUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcbiAgICBjb250ZW50Qm9keS50ZXh0Q29udGVudCA9ICcnO1xucGFnZUxvYWQoKTtcbn0pXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n\n}");

/***/ },

/***/ "./src/menu.js"
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menu: () => (/* binding */ menu)\n/* harmony export */ });\n//menu\n\nfunction menu(){\nlet contentBody = document.querySelector('#content');\n\nlet container = document.createElement('div');\n\nlet seaFood =  document.createElement('div');\nseaFood.textContent = 'SEA FOOD';\n\nlet africanDish = document.createElement('div');\nafricanDish.textContent = 'AFRICAN DISH';\n\n\nlet beverages = document.createElement('div');\nbeverages.textContent = 'BEVERAGES';\n\n\nlet pastries = document.createElement('div');\npastries.textContent = 'PASTRIES';\n\ncontainer.append(seaFood, africanDish, beverages, pastries);\n\ncontentBody.append(container);\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVudS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBRU87QUFDUDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzP2FiMDgiXSwic291cmNlc0NvbnRlbnQiOlsiLy9tZW51XG5cbmV4cG9ydCBmdW5jdGlvbiBtZW51KCl7XG5sZXQgY29udGVudEJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG5sZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbmxldCBzZWFGb29kID0gIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuc2VhRm9vZC50ZXh0Q29udGVudCA9ICdTRUEgRk9PRCc7XG5cbmxldCBhZnJpY2FuRGlzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuYWZyaWNhbkRpc2gudGV4dENvbnRlbnQgPSAnQUZSSUNBTiBESVNIJztcblxuXG5sZXQgYmV2ZXJhZ2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5iZXZlcmFnZXMudGV4dENvbnRlbnQgPSAnQkVWRVJBR0VTJztcblxuXG5sZXQgcGFzdHJpZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnBhc3RyaWVzLnRleHRDb250ZW50ID0gJ1BBU1RSSUVTJztcblxuY29udGFpbmVyLmFwcGVuZChzZWFGb29kLCBhZnJpY2FuRGlzaCwgYmV2ZXJhZ2VzLCBwYXN0cmllcyk7XG5cbmNvbnRlbnRCb2R5LmFwcGVuZChjb250YWluZXIpO1xufVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/menu.js\n\n}");

/***/ },

/***/ "./src/pageLoad.js"
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   pageLoad: () => (/* binding */ pageLoad)\n/* harmony export */ });\n/* harmony import */ var _sushi_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sushi.jpg */ \"./src/sushi.jpg\");\n\n\n\n\nfunction pageLoad(){\nlet contentBody = document.querySelector('#content');\n\nlet img = document.createElement('img');\nimg.src = _sushi_jpg__WEBPACK_IMPORTED_MODULE_0__;\n\nlet restaurantName = document.createElement('h1');\nrestaurantName.textContent = 'Peculiar Diner';\n\nlet restaurantTagLine = document.createElement('h2');\nrestaurantTagLine.textContent = 'Experience the best taste in the best place';\n\nlet restaurantDescription = document.createElement('p');\nrestaurantDescription.textContent = 'Health not just taste is our priority. Fresh bakes, freshly juiced drinks, native and global dishes enriched with necessary nutrients to maintain your healthy living.';\n\n\ncontentBody.appendChild(img);\ncontentBody.appendChild(restaurantName);\ncontentBody.appendChild(restaurantTagLine);\ncontentBody.appendChild(restaurantDescription);\n\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZUxvYWQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBcUM7Ozs7QUFJOUI7QUFDUDs7QUFFQTtBQUNBLFVBQVUsdUNBQVU7O0FBRXBCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlTG9hZC5qcz83OTQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdXNoaUltYWdlIGZyb20gJy4vc3VzaGkuanBnJztcblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBwYWdlTG9hZCgpe1xubGV0IGNvbnRlbnRCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxubGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuaW1nLnNyYyA9IHN1c2hpSW1hZ2U7XG5cbmxldCByZXN0YXVyYW50TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5yZXN0YXVyYW50TmFtZS50ZXh0Q29udGVudCA9ICdQZWN1bGlhciBEaW5lcic7XG5cbmxldCByZXN0YXVyYW50VGFnTGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG5yZXN0YXVyYW50VGFnTGluZS50ZXh0Q29udGVudCA9ICdFeHBlcmllbmNlIHRoZSBiZXN0IHRhc3RlIGluIHRoZSBiZXN0IHBsYWNlJztcblxubGV0IHJlc3RhdXJhbnREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbnJlc3RhdXJhbnREZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9ICdIZWFsdGggbm90IGp1c3QgdGFzdGUgaXMgb3VyIHByaW9yaXR5LiBGcmVzaCBiYWtlcywgZnJlc2hseSBqdWljZWQgZHJpbmtzLCBuYXRpdmUgYW5kIGdsb2JhbCBkaXNoZXMgZW5yaWNoZWQgd2l0aCBuZWNlc3NhcnkgbnV0cmllbnRzIHRvIG1haW50YWluIHlvdXIgaGVhbHRoeSBsaXZpbmcuJztcblxuXG5jb250ZW50Qm9keS5hcHBlbmRDaGlsZChpbWcpO1xuY29udGVudEJvZHkuYXBwZW5kQ2hpbGQocmVzdGF1cmFudE5hbWUpO1xuY29udGVudEJvZHkuYXBwZW5kQ2hpbGQocmVzdGF1cmFudFRhZ0xpbmUpO1xuY29udGVudEJvZHkuYXBwZW5kQ2hpbGQocmVzdGF1cmFudERlc2NyaXB0aW9uKTtcblxufTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pageLoad.js\n\n}");

/***/ },

/***/ "./src/sushi.jpg"
/*!***********************!*\
  !*** ./src/sushi.jpg ***!
  \***********************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "11a5004f1f736c406d21.jpg";

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	__webpack_require__.g = (function() {
/******/ 		if (typeof globalThis === 'object') return globalThis;
/******/ 		try {
/******/ 			return this || new Function('return this')();
/******/ 		} catch (e) {
/******/ 			if (typeof window === 'object') return window;
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		let scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		const document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript?.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				const scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					let i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^https?:/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:|[?#].*$/g, "").replace(/\/[^/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;