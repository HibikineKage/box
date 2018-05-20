/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/rooms/ducks.ts":
/*!****************************!*\
  !*** ./src/rooms/ducks.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.REQUEST_ROOM_LIST = 'REQUEST_ROOM_LIST';\nexports.RECEIVE_ROOM_LIST = 'RECEIVE_ROOM_LIST';\nexports.ROOM_LIST_FETCH_FAILED = 'ROOM_LIST_FETCH_FAILED';\nexports.ROOM_LIST_FETCH_SUCCEED = 'ROOM_LIST_FETCH_SUCCEED';\nexports.ADD_ROOM = 'ADD_ROOM';\nexports.ADD_ROOM_FAILED = 'ADD_ROOM_FAILED';\nexports.ADD_ROOM_SUCCEED = 'ADD_ROOM_SUCCEED';\nexports.requestRoomList = () => ({ type: exports.REQUEST_ROOM_LIST });\nconst initialState = {\n    rooms: []\n};\nexports.reducer = (state = initialState, action) => {\n    switch (action.type) {\n        case exports.ROOM_LIST_FETCH_SUCCEED:\n            const roomListFetchAction = action;\n            return Object.assign({}, state, { rooms: roomListFetchAction.payload });\n    }\n    return state;\n};\nexports.default = exports.reducer;\n\n\n//# sourceURL=webpack:///./src/rooms/ducks.ts?");

/***/ }),

/***/ "./src/server/app.ts":
/*!***************************!*\
  !*** ./src/server/app.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst express = __webpack_require__(/*! express */ \"express\");\nconst dotenv = __webpack_require__(/*! dotenv */ \"dotenv\");\nconst socketIO = __webpack_require__(/*! socket.io */ \"socket.io\");\nconst ducks_1 = __webpack_require__(/*! ../rooms/ducks */ \"./src/rooms/ducks.ts\");\ndotenv.config({ path: '.env' });\nconst app = express();\nconst http = __webpack_require__(/*! http */ \"http\").Server(app);\nconst io = socketIO(http, { origins: 'localhost:*' });\nconst rooms = [];\nconst waintingUsers = [];\nlet users = [];\nconst getRoomList = () => rooms.map(room => ({ name: room.name, hostName: room.host.name }));\napp.use((req, res, next) => {\n    res.header('Access-Control-Allow-Origin', 'localhost:*');\n    res.header('Access-Control-Allow-Headers', 'X-Requested-With');\n    res.header('Access-Control-Allow-Headers', 'Content-Type');\n    res.header(\"Access-Control-Allow-Methods\", \"PUT, GET, POST, DELETE, OPTIONS\");\n    next();\n});\napp.use(express.static('public'));\napp.set('port', process.env.PORT || 3000);\nconsole.log(`port set to ${process.env.PORT || 3000}`);\nio.on('connection', (socket) => {\n    console.log('connected');\n    users.push({ name: 'ななしちゃん', socketId: socket.client.id });\n    socket.on(ducks_1.REQUEST_ROOM_LIST, () => {\n        console.log('server room list requested');\n        socket.emit(ducks_1.RECEIVE_ROOM_LIST, getRoomList());\n    });\n    socket.on(ducks_1.ADD_ROOM, ({ roomName }) => {\n        console.log('add new room');\n        rooms.push({\n            name: roomName,\n            host: users.filter(user => user.socketId === socket.client.id)[0]\n        });\n        console.log(rooms);\n        socket.emit(ducks_1.ADD_ROOM_SUCCEED);\n    });\n    socket.on(JOIN_ROOM, () => { });\n    socket.on('disconnect', () => {\n        console.log('user disconnected.');\n        users = users.filter(user => user.socketId !== socket.client.id);\n    });\n});\nhttp.listen(3000, () => {\n    console.log('listening on *:3000');\n});\nexports.default = app;\n\n\n//# sourceURL=webpack:///./src/server/app.ts?");

/***/ }),

/***/ "./src/server/index.ts":
/*!*****************************!*\
  !*** ./src/server/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst app_1 = __webpack_require__(/*! ./app */ \"./src/server/app.ts\");\nconst server = app_1.default.listen(app_1.default.get('port'), () => {\n    console.log('  App is running at http://localhost:%d in %s mode', app_1.default.get('port'), app_1.default.get('env'));\n    console.log('  Press CTRL_C to stop\\n');\n});\nexports.default = server;\n\n\n//# sourceURL=webpack:///./src/server/index.ts?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack:///external_%22http%22?");

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"socket.io\");\n\n//# sourceURL=webpack:///external_%22socket.io%22?");

/***/ })

/******/ });