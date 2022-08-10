/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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





function initialize(){
    const content = document.getElementById('content');

    const header = (0,_header__WEBPACK_IMPORTED_MODULE_0__["default"])('Kupo Bites');
    const nav = (0,_nav__WEBPACK_IMPORTED_MODULE_1__["default"])('nav');
    const tabContent = (0,_tabContent__WEBPACK_IMPORTED_MODULE_2__["default"])('tabContent');

    content.appendChild(header);
    content.appendChild(nav);
    content.appendChild(tabContent);

    (0,_tabs_home__WEBPACK_IMPORTED_MODULE_3__["default"])();
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
function createNavButton(name){

    const button = document.createElement('button');
    button.classList.add("navButton");
    button.setAttribute('type','button');
    button.setAttribute('id', `${name}Button`);
    button.textContent = name;

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_initialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/initialize */ "./src/components/initialize.js");


(0,_components_initialize__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pTO0FBQ047QUFDYztBQUNSO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLG1EQUFZO0FBQy9CLGdCQUFnQixnREFBUztBQUN6Qix1QkFBdUIsdURBQWdCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNEQUFRO0FBQ1o7QUFDQTtBQUNBLGlFQUFlLFVBQVU7Ozs7Ozs7Ozs7Ozs7OztBQ25Ca0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix1REFBZTtBQUN0Qyx1QkFBdUIsdURBQWU7QUFDdEMsMEJBQTBCLHVEQUFlO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxTQUFTOzs7Ozs7Ozs7Ozs7OztBQ2pCeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxLQUFLO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxlQUFlOzs7Ozs7Ozs7Ozs7OztBQ1g5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxnQkFBZ0I7Ozs7Ozs7Ozs7Ozs7O0FDTi9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsUUFBUTs7Ozs7O1VDNUJ2QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTmlEO0FBQ2pEO0FBQ0Esa0VBQVUsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb21wb25lbnRzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9uZW50cy9pbml0aWFsaXplLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb21wb25lbnRzL25hdi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9uZW50cy9uYXZCdXR0b25zLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb21wb25lbnRzL3RhYkNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3RhYnMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY3JlYXRlSGVhZGVyKG5hbWUpIHtcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG5cclxuICAgIGNvbnN0IHJlc3RhdXJhbnROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIHJlc3RhdXJhbnROYW1lLmNsYXNzTGlzdC5hZGQoJ3Jlc3RhdXJhbnROYW1lJyk7XHJcbiAgICByZXN0YXVyYW50TmFtZS5pbm5lckhUTUwgPSBuYW1lO1xyXG5cclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChyZXN0YXVyYW50TmFtZSk7XHJcblxyXG4gICAgcmV0dXJuIGhlYWRlcjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSGVhZGVyOyIsImltcG9ydCBjcmVhdGVIZWFkZXIgZnJvbSBcIi4vaGVhZGVyXCI7XHJcbmltcG9ydCBjcmVhdGVOYXYgZnJvbSBcIi4vbmF2XCI7XHJcbmltcG9ydCBjcmVhdGVUYWJDb250ZW50IGZyb20gXCIuL3RhYkNvbnRlbnRcIjtcclxuaW1wb3J0IGxvYWRIb21lIGZyb20gXCIuLi90YWJzL2hvbWVcIjtcclxuXHJcbmZ1bmN0aW9uIGluaXRpYWxpemUoKXtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG5cclxuICAgIGNvbnN0IGhlYWRlciA9IGNyZWF0ZUhlYWRlcignS3VwbyBCaXRlcycpO1xyXG4gICAgY29uc3QgbmF2ID0gY3JlYXRlTmF2KCduYXYnKTtcclxuICAgIGNvbnN0IHRhYkNvbnRlbnQgPSBjcmVhdGVUYWJDb250ZW50KCd0YWJDb250ZW50Jyk7XHJcblxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChuYXYpO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0YWJDb250ZW50KTtcclxuXHJcbiAgICBsb2FkSG9tZSgpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbGl6ZTsiLCJpbXBvcnQgY3JlYXRlTmF2QnV0dG9uIGZyb20gXCIuL25hdkJ1dHRvbnNcIjtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU5hdihpZCkge1xyXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XHJcbiAgICBuYXYuc2V0QXR0cmlidXRlKCdpZCcsIGlkKTtcclxuXHJcbiAgICBjb25zdCBob21lQnV0dG9uID0gY3JlYXRlTmF2QnV0dG9uKCdob21lJyk7XHJcbiAgICBjb25zdCBtZW51QnV0dG9uID0gY3JlYXRlTmF2QnV0dG9uKCdtZW51Jyk7XHJcbiAgICBjb25zdCBjb250YWN0QnV0dG9uID0gY3JlYXRlTmF2QnV0dG9uKCdjb250YWN0Jyk7XHJcblxyXG4gICAgbmF2LmFwcGVuZENoaWxkKGhvbWVCdXR0b24pO1xyXG4gICAgbmF2LmFwcGVuZENoaWxkKG1lbnVCdXR0b24pO1xyXG4gICAgbmF2LmFwcGVuZENoaWxkKGNvbnRhY3RCdXR0b24pO1xyXG5cclxuICAgIHJldHVybiBuYXY7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU5hdjsiLCJmdW5jdGlvbiBjcmVhdGVOYXZCdXR0b24obmFtZSl7XHJcblxyXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcIm5hdkJ1dHRvblwiKTtcclxuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdidXR0b24nKTtcclxuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7bmFtZX1CdXR0b25gKTtcclxuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IG5hbWU7XHJcblxyXG4gICAgcmV0dXJuIGJ1dHRvbjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTmF2QnV0dG9uOyIsImZ1bmN0aW9uIGNyZWF0ZVRhYkNvbnRlbnQoaWQpIHtcclxuICAgIGNvbnN0IHRhYkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbiAgICB0YWJDb250ZW50LnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XHJcbiAgICByZXR1cm4gdGFiQ29udGVudDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVGFiQ29udGVudDsiLCJmdW5jdGlvbiBjcmVhdGVIb21lKCl7XHJcbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gICAgaG9tZS5jbGFzc0xpc3QuYWRkKCd0YWJTZWN0aW9uJyk7XHJcblxyXG4gICAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgYWJvdXQuY2xhc3NMaXN0LmFkZCgndGFiSGVhZGVyJyk7XHJcbiAgICBhYm91dC50ZXh0Q29udGVudCA9ICdBYm91dCc7XHJcblxyXG4gICAgY29uc3QgYWJvdXRQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBhYm91dFBhcmFncmFwaC5jbGFzc0xpc3QuYWRkKCd0YWJQYXJhZ3JhcGgnKTtcclxuICAgIGFib3V0UGFyYWdyYXBoLnRleHRDb250ZW50ID0gYFdlbGNvbWUgdG8gS3VwbyBCaXRlcywgd2hlcmUgd2Ugc2VydmUgdGhlIGJlc3QgYml0ZXMgdGhyb3VnaG91dCB0aGUgbXlzdGljIHRpbWVsaW5lLCBrdXBvISBXaGV0aGVyIHlvdSdyZSBsb3N0IG9yIHdhbnQgYSBicmVhayB3aGlsZSB0aW1lIHRyYXZlbGxpbmcsIEt1cG8gQml0ZXMgd2lsbCBhbHdheXMgYmUgdGhlcmUgZm9yIHlvdSwga3VwbyFgXHJcblxyXG4gICAgaG9tZS5hcHBlbmRDaGlsZChhYm91dCk7XHJcbiAgICBob21lLmFwcGVuZENoaWxkKGFib3V0UGFyYWdyYXBoKTtcclxuXHJcbiAgICByZXR1cm4gaG9tZTtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZEhvbWUoKXtcclxuICAgIGNvbnN0IHRhYkNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFiQ29udGVudCcpO1xyXG4gICAgdGFiQ29udGVudC5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgICBjb25zdCBob21lID0gY3JlYXRlSG9tZSgpO1xyXG5cclxuICAgIHRhYkNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZSk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2FkSG9tZTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBpbml0aWFsaXplIGZyb20gXCIuL2NvbXBvbmVudHMvaW5pdGlhbGl6ZVwiO1xyXG5cclxuaW5pdGlhbGl6ZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==