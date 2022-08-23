"use strict";
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
exports.id = "pages/api/blogs";
exports.ids = ["pages/api/blogs"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./pages/api/blogs.js":
/*!****************************!*\
  !*** ./pages/api/blogs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n// Next.js API route support: https://nextjs.org/doecs/api-routes/introduction\n\nasync function handler(req, res) {\n    let data = await fs__WEBPACK_IMPORTED_MODULE_0__.promises.readdir(\"blogdata\");\n    let myfile;\n    let allblogs = [];\n    for(let index = 0; index < data.length; index++){\n        const item = data[index];\n        //  console.log(item);\n        myfile = await fs__WEBPACK_IMPORTED_MODULE_0__.promises.readFile(\"blogdata/\" + item, \"utf-8\");\n        //  console.log(myfile);\n        allblogs.push(JSON.parse(myfile));\n    }\n    res.status(200).json(allblogs);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYmxvZ3MuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsOEVBQThFO0FBRXJEO0FBRVYsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxJQUFJQyxJQUFJLEdBQUcsTUFBTUosZ0RBQW1CLENBQUMsVUFBVSxDQUFDO0lBQ2hELElBQUlPLE1BQU07SUFDVixJQUFJQyxRQUFRLEdBQUUsRUFBRTtJQUNqQixJQUFLLElBQUlDLEtBQUssR0FBRyxDQUFDLEVBQUVBLEtBQUssR0FBR0wsSUFBSSxDQUFDTSxNQUFNLEVBQUVELEtBQUssRUFBRSxDQUFFO1FBQ2hELE1BQU1FLElBQUksR0FBR1AsSUFBSSxDQUFDSyxLQUFLLENBQUM7UUFDekIsc0JBQXNCO1FBQ3JCRixNQUFNLEdBQUcsTUFBTVAsaURBQW9CLENBQUUsV0FBVyxHQUFDVyxJQUFJLEVBQUssT0FBTyxDQUFFLENBQUM7UUFDckUsd0JBQXdCO1FBQ3ZCSCxRQUFRLENBQUNLLElBQUksQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLLENBQUNSLE1BQU0sQ0FBQyxDQUFDLENBQUM7S0FFbkM7SUFDREosR0FBRyxDQUFDYSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ1QsUUFBUSxDQUFDO0NBRTlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29kZXJzLWJsb2cvLi9wYWdlcy9hcGkvYmxvZ3MuanM/ZWM4YyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9lY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cblxuaW1wb3J0ICogYXMgZnMgZnJvbSAnZnMnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGxldCBkYXRhID0gYXdhaXQgZnMucHJvbWlzZXMucmVhZGRpcihcImJsb2dkYXRhXCIpO1xuICBsZXQgbXlmaWxlO1xuICBsZXQgYWxsYmxvZ3MgPVtdO1xuIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkYXRhLmxlbmd0aDsgaW5kZXgrKykge1xuICAgY29uc3QgaXRlbSA9IGRhdGFbaW5kZXhdO1xuICAvLyAgY29uc29sZS5sb2coaXRlbSk7XG4gICBteWZpbGUgPSBhd2FpdCBmcy5wcm9taXNlcy5yZWFkRmlsZSgoJ2Jsb2dkYXRhLycraXRlbSApICwgXCJ1dGYtOFwiICk7XG4gIC8vICBjb25zb2xlLmxvZyhteWZpbGUpO1xuICAgYWxsYmxvZ3MucHVzaChKU09OLnBhcnNlKG15ZmlsZSkpO1xuICAgXG4gfVxuIHJlcy5zdGF0dXMoMjAwKS5qc29uKGFsbGJsb2dzKVxuXG59XG4iXSwibmFtZXMiOlsiZnMiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiZGF0YSIsInByb21pc2VzIiwicmVhZGRpciIsIm15ZmlsZSIsImFsbGJsb2dzIiwiaW5kZXgiLCJsZW5ndGgiLCJpdGVtIiwicmVhZEZpbGUiLCJwdXNoIiwiSlNPTiIsInBhcnNlIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/blogs.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/blogs.js"));
module.exports = __webpack_exports__;

})();