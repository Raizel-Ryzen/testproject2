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
exports.id = "pages/api/checkout";
exports.ids = ["pages/api/checkout"];
exports.modules = {

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ "(api)/./src/pages/api/checkout.ts":
/*!***********************************!*\
  !*** ./src/pages/api/checkout.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst stripe = __webpack_require__(/*! stripe */ \"stripe\")(process.env.STRIPE_SECRET_KEY);\nasync function handler(req, res) {\n    const { items, email } = req.body;\n    const modifiedItems = items.map((item)=>({\n            quantity: item.quantity,\n            price_data: {\n                currency: \"usd\",\n                unit_amount: item.price * 100,\n                product_data: {\n                    name: item.title,\n                    description: item.description,\n                    images: [\n                        item.image\n                    ]\n                }\n            }\n        }));\n    const session = await stripe.checkout.sessions.create({\n        payment_method_types: [\n            \"card\"\n        ],\n        shipping_address_collection: {\n            allowed_countries: [\n                \"BD\",\n                \"US\",\n                \"OM\",\n                \"CA\",\n                \"GB\"\n            ]\n        },\n        line_items: modifiedItems,\n        mode: \"payment\",\n        success_url: `${process.env.NEXTAUTH_URL}/success`,\n        cancel_url: `${process.env.NEXTAUTH_URL}/checkout`,\n        metadata: {\n            email,\n            images: JSON.stringify(items.map((item)=>item.image))\n        }\n    });\n    res.status(200).json({\n        id: session.id\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2NoZWNrb3V0LnRzIiwibWFwcGluZ3MiOiI7Ozs7QUFFQSxNQUFNQSxTQUFTQyxtQkFBT0EsQ0FBQyxzQkFBUSxFQUFFQyxRQUFRQyxHQUFHLENBQUNDLGlCQUFpQjtBQUUvQyxlQUFlQyxRQUM1QkMsR0FBbUIsRUFDbkJDLEdBQW9CO0lBRXBCLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUUsR0FBR0gsSUFBSUksSUFBSTtJQUNqQyxNQUFNQyxnQkFBZ0JILE1BQU1JLEdBQUcsQ0FBQyxDQUFDQyxPQUF3QjtZQUN2REMsVUFBVUQsS0FBS0MsUUFBUTtZQUN2QkMsWUFBWTtnQkFDVkMsVUFBVTtnQkFDVkMsYUFBYUosS0FBS0ssS0FBSyxHQUFHO2dCQUMxQkMsY0FBYztvQkFDWkMsTUFBTVAsS0FBS1EsS0FBSztvQkFDaEJDLGFBQWFULEtBQUtTLFdBQVc7b0JBQzdCQyxRQUFRO3dCQUFDVixLQUFLVyxLQUFLO3FCQUFDO2dCQUN0QjtZQUNGO1FBQ0Y7SUFDQSxNQUFNQyxVQUFVLE1BQU16QixPQUFPMEIsUUFBUSxDQUFDQyxRQUFRLENBQUNDLE1BQU0sQ0FBQztRQUNwREMsc0JBQXNCO1lBQUM7U0FBTztRQUM5QkMsNkJBQTZCO1lBQzNCQyxtQkFBbUI7Z0JBQUM7Z0JBQU07Z0JBQU07Z0JBQU07Z0JBQU07YUFBSztRQUNuRDtRQUNBQyxZQUFZckI7UUFDWnNCLE1BQU07UUFDTkMsYUFBYSxDQUFDLEVBQUVoQyxRQUFRQyxHQUFHLENBQUNnQyxZQUFZLENBQUMsUUFBUSxDQUFDO1FBQ2xEQyxZQUFZLENBQUMsRUFBRWxDLFFBQVFDLEdBQUcsQ0FBQ2dDLFlBQVksQ0FBQyxTQUFTLENBQUM7UUFDbERFLFVBQVU7WUFDUjVCO1lBQ0FjLFFBQVFlLEtBQUtDLFNBQVMsQ0FBQy9CLE1BQU1JLEdBQUcsQ0FBQyxDQUFDQyxPQUFjQSxLQUFLVyxLQUFLO1FBQzVEO0lBQ0Y7SUFDQWpCLElBQUlpQyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1FBQ25CQyxJQUFJakIsUUFBUWlCLEVBQUU7SUFDaEI7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRfYW1hem9uX3l0Ly4vc3JjL3BhZ2VzL2FwaS9jaGVja291dC50cz9mMTM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgeyBTdG9yZVByb2R1Y3QgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZVwiO1xyXG5jb25zdCBzdHJpcGUgPSByZXF1aXJlKFwic3RyaXBlXCIpKHByb2Nlc3MuZW52LlNUUklQRV9TRUNSRVRfS0VZKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXHJcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcclxuICByZXM6IE5leHRBcGlSZXNwb25zZVxyXG4pIHtcclxuICBjb25zdCB7IGl0ZW1zLCBlbWFpbCB9ID0gcmVxLmJvZHk7XHJcbiAgY29uc3QgbW9kaWZpZWRJdGVtcyA9IGl0ZW1zLm1hcCgoaXRlbTogU3RvcmVQcm9kdWN0KSA9PiAoe1xyXG4gICAgcXVhbnRpdHk6IGl0ZW0ucXVhbnRpdHksXHJcbiAgICBwcmljZV9kYXRhOiB7XHJcbiAgICAgIGN1cnJlbmN5OiBcInVzZFwiLFxyXG4gICAgICB1bml0X2Ftb3VudDogaXRlbS5wcmljZSAqIDEwMCxcclxuICAgICAgcHJvZHVjdF9kYXRhOiB7XHJcbiAgICAgICAgbmFtZTogaXRlbS50aXRsZSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogaXRlbS5kZXNjcmlwdGlvbixcclxuICAgICAgICBpbWFnZXM6IFtpdGVtLmltYWdlXSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSkpO1xyXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBzdHJpcGUuY2hlY2tvdXQuc2Vzc2lvbnMuY3JlYXRlKHtcclxuICAgIHBheW1lbnRfbWV0aG9kX3R5cGVzOiBbXCJjYXJkXCJdLFxyXG4gICAgc2hpcHBpbmdfYWRkcmVzc19jb2xsZWN0aW9uOiB7XHJcbiAgICAgIGFsbG93ZWRfY291bnRyaWVzOiBbXCJCRFwiLCBcIlVTXCIsIFwiT01cIiwgXCJDQVwiLCBcIkdCXCJdLFxyXG4gICAgfSxcclxuICAgIGxpbmVfaXRlbXM6IG1vZGlmaWVkSXRlbXMsXHJcbiAgICBtb2RlOiBcInBheW1lbnRcIixcclxuICAgIHN1Y2Nlc3NfdXJsOiBgJHtwcm9jZXNzLmVudi5ORVhUQVVUSF9VUkx9L3N1Y2Nlc3NgLFxyXG4gICAgY2FuY2VsX3VybDogYCR7cHJvY2Vzcy5lbnYuTkVYVEFVVEhfVVJMfS9jaGVja291dGAsXHJcbiAgICBtZXRhZGF0YToge1xyXG4gICAgICBlbWFpbCxcclxuICAgICAgaW1hZ2VzOiBKU09OLnN0cmluZ2lmeShpdGVtcy5tYXAoKGl0ZW06IGFueSkgPT4gaXRlbS5pbWFnZSkpLFxyXG4gICAgfSxcclxuICB9KTtcclxuICByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICBpZDogc2Vzc2lvbi5pZCxcclxuICB9KTtcclxufVxyXG4iXSwibmFtZXMiOlsic3RyaXBlIiwicmVxdWlyZSIsInByb2Nlc3MiLCJlbnYiLCJTVFJJUEVfU0VDUkVUX0tFWSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJpdGVtcyIsImVtYWlsIiwiYm9keSIsIm1vZGlmaWVkSXRlbXMiLCJtYXAiLCJpdGVtIiwicXVhbnRpdHkiLCJwcmljZV9kYXRhIiwiY3VycmVuY3kiLCJ1bml0X2Ftb3VudCIsInByaWNlIiwicHJvZHVjdF9kYXRhIiwibmFtZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZXMiLCJpbWFnZSIsInNlc3Npb24iLCJjaGVja291dCIsInNlc3Npb25zIiwiY3JlYXRlIiwicGF5bWVudF9tZXRob2RfdHlwZXMiLCJzaGlwcGluZ19hZGRyZXNzX2NvbGxlY3Rpb24iLCJhbGxvd2VkX2NvdW50cmllcyIsImxpbmVfaXRlbXMiLCJtb2RlIiwic3VjY2Vzc191cmwiLCJORVhUQVVUSF9VUkwiLCJjYW5jZWxfdXJsIiwibWV0YWRhdGEiLCJKU09OIiwic3RyaW5naWZ5Iiwic3RhdHVzIiwianNvbiIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/checkout.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/checkout.ts"));
module.exports = __webpack_exports__;

})();