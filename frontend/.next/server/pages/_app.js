/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    const [configured, setConfigured] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [tmdbApiKey, setTmdbApiKey] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function checkConfig() {\n            try {\n                const response = await fetch(\"/api/settings/status\");\n                const data = await response.json();\n                setConfigured(data.configured);\n                if (data.configured) {\n                    const keyResponse = await fetch(\"/api/settings/tmdb_key\");\n                    const keyData = await keyResponse.json();\n                    setTmdbApiKey(keyData.tmdb_key);\n                }\n            } catch (error) {\n                console.error(\"Error checking config:\", error);\n                setConfigured(false);\n            }\n        }\n        if (router.pathname !== \"/setup\") {\n            checkConfig();\n        } else {\n            setConfigured(true);\n        }\n    }, [\n        router.pathname\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (configured === false && router.pathname !== \"/setup\") {\n            router.push(\"/setup\");\n        }\n    }, [\n        configured,\n        router\n    ]);\n    if (configured === null) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/app/frontend/pages/_app.js\",\n            lineNumber: 41,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps,\n        tmdbApiKey: tmdbApiKey\n    }, void 0, false, {\n        fileName: \"/app/frontend/pages/_app.js\",\n        lineNumber: 44,\n        columnNumber: 10\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFDSjtBQUNUO0FBRS9CLFNBQVNHLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDckMsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdOLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ08sWUFBWUMsY0FBYyxHQUFHUiwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNUyxTQUFTUixzREFBU0E7SUFFeEJGLGdEQUFTQSxDQUFDO1FBQ1IsZUFBZVc7WUFDYixJQUFJO2dCQUNGLE1BQU1DLFdBQVcsTUFBTUMsTUFBTTtnQkFDN0IsTUFBTUMsT0FBTyxNQUFNRixTQUFTRyxJQUFJO2dCQUNoQ1IsY0FBY08sS0FBS1IsVUFBVTtnQkFDN0IsSUFBSVEsS0FBS1IsVUFBVSxFQUFFO29CQUNqQixNQUFNVSxjQUFjLE1BQU1ILE1BQU07b0JBQ2hDLE1BQU1JLFVBQVUsTUFBTUQsWUFBWUQsSUFBSTtvQkFDdENOLGNBQWNRLFFBQVFDLFFBQVE7Z0JBQ2xDO1lBQ0YsRUFBRSxPQUFPQyxPQUFPO2dCQUNkQyxRQUFRRCxLQUFLLENBQUMsMEJBQTBCQTtnQkFDeENaLGNBQWM7WUFDaEI7UUFDRjtRQUVBLElBQUlHLE9BQU9XLFFBQVEsS0FBSyxVQUFVO1lBQzlCVjtRQUNKLE9BQU87WUFDSEosY0FBYztRQUNsQjtJQUNGLEdBQUc7UUFBQ0csT0FBT1csUUFBUTtLQUFDO0lBRXBCckIsZ0RBQVNBLENBQUM7UUFDUixJQUFJTSxlQUFlLFNBQVNJLE9BQU9XLFFBQVEsS0FBSyxVQUFVO1lBQ3hEWCxPQUFPWSxJQUFJLENBQUM7UUFDZDtJQUNGLEdBQUc7UUFBQ2hCO1FBQVlJO0tBQU87SUFFdkIsSUFBSUosZUFBZSxNQUFNO1FBQ3ZCLHFCQUFPLDhEQUFDaUI7c0JBQUk7Ozs7OztJQUNkO0lBRUEscUJBQU8sOERBQUNuQjtRQUFXLEdBQUdDLFNBQVM7UUFBRUcsWUFBWUE7Ozs7OztBQUMvQztBQUVBLGlFQUFlTCxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIGNvbnN0IFtjb25maWd1cmVkLCBzZXRDb25maWd1cmVkXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbdG1kYkFwaUtleSwgc2V0VG1kYkFwaUtleV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBjaGVja0NvbmZpZygpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvc2V0dGluZ3Mvc3RhdHVzJyk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHNldENvbmZpZ3VyZWQoZGF0YS5jb25maWd1cmVkKTtcbiAgICAgICAgaWYgKGRhdGEuY29uZmlndXJlZCkge1xuICAgICAgICAgICAgY29uc3Qga2V5UmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9zZXR0aW5ncy90bWRiX2tleScpO1xuICAgICAgICAgICAgY29uc3Qga2V5RGF0YSA9IGF3YWl0IGtleVJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIHNldFRtZGJBcGlLZXkoa2V5RGF0YS50bWRiX2tleSk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNoZWNraW5nIGNvbmZpZzonLCBlcnJvcik7XG4gICAgICAgIHNldENvbmZpZ3VyZWQoZmFsc2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyb3V0ZXIucGF0aG5hbWUgIT09ICcvc2V0dXAnKSB7XG4gICAgICAgIGNoZWNrQ29uZmlnKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc2V0Q29uZmlndXJlZCh0cnVlKTtcbiAgICB9XG4gIH0sIFtyb3V0ZXIucGF0aG5hbWVdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjb25maWd1cmVkID09PSBmYWxzZSAmJiByb3V0ZXIucGF0aG5hbWUgIT09ICcvc2V0dXAnKSB7XG4gICAgICByb3V0ZXIucHVzaCgnL3NldHVwJyk7XG4gICAgfVxuICB9LCBbY29uZmlndXJlZCwgcm91dGVyXSk7XG5cbiAgaWYgKGNvbmZpZ3VyZWQgPT09IG51bGwpIHtcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xuICB9XG5cbiAgcmV0dXJuIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gdG1kYkFwaUtleT17dG1kYkFwaUtleX0gLz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjb25maWd1cmVkIiwic2V0Q29uZmlndXJlZCIsInRtZGJBcGlLZXkiLCJzZXRUbWRiQXBpS2V5Iiwicm91dGVyIiwiY2hlY2tDb25maWciLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJrZXlSZXNwb25zZSIsImtleURhdGEiLCJ0bWRiX2tleSIsImVycm9yIiwiY29uc29sZSIsInBhdGhuYW1lIiwicHVzaCIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();