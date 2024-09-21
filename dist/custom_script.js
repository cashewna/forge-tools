/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;
/*!******************************!*\
  !*** ./src/custom_script.ts ***!
  \******************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const originalXHR = XMLHttpRequest.prototype.open;
XMLHttpRequest.prototype.open = function (method, url, async = true, username, password) {
    const args = [
        method,
        url,
        async,
        username,
        password
    ];
    console.log('Request method:', method);
    console.log('Request URL:', url);
    return originalXHR.apply(this, args);
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tX3NjcmlwdC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLE1BQU0sV0FBVyxHQUFHLGNBQWMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO0FBRWxELGNBQWMsQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFHLFVBQzVCLE1BQWMsRUFDZCxHQUFXLEVBQ1gsUUFBaUIsSUFBSSxFQUNyQixRQUF3QixFQUN4QixRQUF3QjtJQUV4QixNQUFNLElBQUksR0FBMEY7UUFDaEcsTUFBTTtRQUNOLEdBQUc7UUFDSCxLQUFLO1FBQ0wsUUFBUTtRQUNSLFFBQVE7S0FDWCxDQUFDO0lBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNqQyxPQUFPLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3pDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb3JnZS10b29scy8uL3NyYy9jdXN0b21fc2NyaXB0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG9yaWdpbmFsWEhSID0gWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlLm9wZW47XG5cblhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24oXG4gICAgbWV0aG9kOiBzdHJpbmcsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXN5bmM6IGJvb2xlYW4gPSB0cnVlLFxuICAgIHVzZXJuYW1lPzogc3RyaW5nIHwgbnVsbCxcbiAgICBwYXNzd29yZD86IHN0cmluZyB8IG51bGxcbik6IHZvaWQge1xuICAgIGNvbnN0IGFyZ3M6IFtzdHJpbmcsIHN0cmluZyB8IFVSTCwgYm9vbGVhbiwgc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCwgc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZF0gPSBbXG4gICAgICAgIG1ldGhvZCxcbiAgICAgICAgdXJsLFxuICAgICAgICBhc3luYyxcbiAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgIHBhc3N3b3JkXG4gICAgXTtcbiAgICBjb25zb2xlLmxvZygnUmVxdWVzdCBtZXRob2Q6JywgbWV0aG9kKTtcbiAgICBjb25zb2xlLmxvZygnUmVxdWVzdCBVUkw6JywgdXJsKTtcbiAgICByZXR1cm4gb3JpZ2luYWxYSFIuYXBwbHkodGhpcywgYXJncyk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9