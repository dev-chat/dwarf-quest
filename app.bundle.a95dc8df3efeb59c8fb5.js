/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/dwarf_knight.jpg":
/*!*************************************!*\
  !*** ./src/assets/dwarf_knight.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"ee120fa61b817d825442aa640dbfa31e.jpg\";\n\n//# sourceURL=webpack:///./src/assets/dwarf_knight.jpg?");

/***/ }),

/***/ "./src/assets/sprites/dwarf_sprite.json":
/*!**********************************************!*\
  !*** ./src/assets/sprites/dwarf_sprite.json ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"d28bb594e06cd6229d6fba11d57f9af0.json\";\n\n//# sourceURL=webpack:///./src/assets/sprites/dwarf_sprite.json?");

/***/ }),

/***/ "./src/assets/sprites/dwarf_sprite.png":
/*!*********************************************!*\
  !*** ./src/assets/sprites/dwarf_sprite.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"0fbf5d6fdcd71e169babf5850f65ef2a.png\";\n\n//# sourceURL=webpack:///./src/assets/sprites/dwarf_sprite.png?");

/***/ }),

/***/ "./src/assets/tilemaps/cave.json":
/*!***************************************!*\
  !*** ./src/assets/tilemaps/cave.json ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"17af2595f691d57dc911763816a84865.json\";\n\n//# sourceURL=webpack:///./src/assets/tilemaps/cave.json?");

/***/ }),

/***/ "./src/assets/tilemaps/mountain.json":
/*!*******************************************!*\
  !*** ./src/assets/tilemaps/mountain.json ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"0229425db65a3d7a2210f84290dfe853.json\";\n\n//# sourceURL=webpack:///./src/assets/tilemaps/mountain.json?");

/***/ }),

/***/ "./src/assets/tilesets/cave.png":
/*!**************************************!*\
  !*** ./src/assets/tilesets/cave.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"1135c9312d46edad607810b3eac23313.png\";\n\n//# sourceURL=webpack:///./src/assets/tilesets/cave.png?");

/***/ }),

/***/ "./src/assets/tilesets/mountain.png":
/*!******************************************!*\
  !*** ./src/assets/tilesets/mountain.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"3afa36eb8d72617c8df0a358f1e6a335.png\";\n\n//# sourceURL=webpack:///./src/assets/tilesets/mountain.png?");

/***/ }),

/***/ "./src/characters/Dwarf.js":
/*!*********************************!*\
  !*** ./src/characters/Dwarf.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Dwarf; });\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/src/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass Dwarf extends phaser__WEBPACK_IMPORTED_MODULE_0___default.a.GameObjects.Sprite {\n  constructor(config) {\n    super(config.scene, config.x, config.y, config.key);\n    config.scene.physics.world.enable(this);\n    config.scene.add.existing(this);\n  }\n}\n\n\n//# sourceURL=webpack:///./src/characters/Dwarf.js?");

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: PLAYER_TARGET_POS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PLAYER_TARGET_POS\", function() { return PLAYER_TARGET_POS; });\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/src/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst PLAYER_TARGET_POS = new phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Math.Vector2();\n\n\n//# sourceURL=webpack:///./src/constants.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/src/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scenes_Boot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scenes/Boot */ \"./src/scenes/Boot.js\");\n/* harmony import */ var _scenes_Cave__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scenes/Cave */ \"./src/scenes/Cave.js\");\n/* harmony import */ var _scenes_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scenes/Menu */ \"./src/scenes/Menu.js\");\n/* harmony import */ var _scenes_Mountain__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scenes/Mountain */ \"./src/scenes/Mountain.js\");\n\n\n\n\n\n\nconst config = {\n  type: phaser__WEBPACK_IMPORTED_MODULE_0__[\"AUTO\"],\n  width: 800,\n  height: 600,\n  parent: 'game-container',\n  pixelArt: true,\n  physics: {\n    default: 'arcade',\n    arcade: {\n      gravity: { y: 0 }\n    }\n  },\n  scene: [_scenes_Boot__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _scenes_Menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _scenes_Cave__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _scenes_Mountain__WEBPACK_IMPORTED_MODULE_4__[\"default\"]]\n};\n\nconst game = new phaser__WEBPACK_IMPORTED_MODULE_0__[\"Game\"](config);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (game);\n\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/scenes/Boot.js":
/*!****************************!*\
  !*** ./src/scenes/Boot.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/src/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_tilesets_mountain_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/tilesets/mountain.png */ \"./src/assets/tilesets/mountain.png\");\n/* harmony import */ var _assets_tilesets_mountain_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_tilesets_mountain_png__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_tilesets_cave_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/tilesets/cave.png */ \"./src/assets/tilesets/cave.png\");\n/* harmony import */ var _assets_tilesets_cave_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_tilesets_cave_png__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_tilemaps_cave_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/tilemaps/cave.json */ \"./src/assets/tilemaps/cave.json\");\n/* harmony import */ var _assets_tilemaps_cave_json__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_tilemaps_cave_json__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_sprites_dwarf_sprite_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/sprites/dwarf_sprite.json */ \"./src/assets/sprites/dwarf_sprite.json\");\n/* harmony import */ var _assets_sprites_dwarf_sprite_json__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_sprites_dwarf_sprite_json__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _assets_sprites_dwarf_sprite_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/sprites/dwarf_sprite.png */ \"./src/assets/sprites/dwarf_sprite.png\");\n/* harmony import */ var _assets_sprites_dwarf_sprite_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_sprites_dwarf_sprite_png__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _assets_dwarf_knight_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/dwarf_knight.jpg */ \"./src/assets/dwarf_knight.jpg\");\n/* harmony import */ var _assets_dwarf_knight_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_dwarf_knight_jpg__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _assets_tilemaps_mountain_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/tilemaps/mountain.json */ \"./src/assets/tilemaps/mountain.json\");\n/* harmony import */ var _assets_tilemaps_mountain_json__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_tilemaps_mountain_json__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\n\n\nclass Boot extends phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Scene {\n  constructor() {\n    super('boot');\n  }\n\n  init() {}\n\n  preload() {\n    const progress = this.add.graphics();\n\n    // Register a load progress event to show a load bar\n    this.load.on('progress', value => {\n      progress.clear();\n      progress.fillStyle(0xffffff, 1);\n      progress.fillRect(\n        0,\n        this.sys.game.config.height / 2,\n        this.sys.game.config.width * value,\n        60\n      );\n    });\n\n    // Register a load complete event to launch the title screen when all files are loaded\n    this.load.on('complete', () => {\n      // prepare all animations, defined in a separate file\n      // makeAnimations(this);\n      progress.destroy();\n      this.scene.start('menu');\n    });\n\n    this.load.image('background', _assets_dwarf_knight_jpg__WEBPACK_IMPORTED_MODULE_6___default.a);\n\n    this.load.image('tiles', _assets_tilesets_cave_png__WEBPACK_IMPORTED_MODULE_2___default.a);\n    this.load.tilemapTiledJSON('map', _assets_tilemaps_cave_json__WEBPACK_IMPORTED_MODULE_3___default.a);\n\n    this.load.image('mountainTiles', _assets_tilesets_mountain_png__WEBPACK_IMPORTED_MODULE_1___default.a);\n    this.load.tilemapTiledJSON('mountain', _assets_tilemaps_mountain_json__WEBPACK_IMPORTED_MODULE_7___default.a);\n\n    this.load.atlas('dwarf', _assets_sprites_dwarf_sprite_png__WEBPACK_IMPORTED_MODULE_5___default.a, _assets_sprites_dwarf_sprite_json__WEBPACK_IMPORTED_MODULE_4___default.a);\n  }\n\n  create() {}\n\n  update() {}\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Boot);\n\n\n//# sourceURL=webpack:///./src/scenes/Boot.js?");

/***/ }),

/***/ "./src/scenes/Cave.js":
/*!****************************!*\
  !*** ./src/scenes/Cave.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/src/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _characters_Dwarf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../characters/Dwarf */ \"./src/characters/Dwarf.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ \"./src/constants.js\");\n\n\n\n\nclass Cave extends phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Scene {\n  constructor() {\n    super('cave');\n\n    this.startingDwarfPositionX = 573;\n    this.startingDwarfPositionY = 376;\n  }\n\n  init(data) {\n    if (data && data.fromMountain) {\n      this.startingDwarfPositionX = 400;\n      this.startingDwarfPositionY = 150;\n    }\n  }\n\n  preload() {}\n\n  create() {\n    const map = this.make.tilemap({ key: 'map' });\n\n    // Parameters are the name you gave the tileset in Tiled and then the key of the tileset image in\n    // Phaser's cache (i.e. the name you used in preload)\n    const tileset = map.addTilesetImage('cave', 'tiles');\n\n    // We can combine layers here to create multi layer levels\n    const worldLayer = map.createStaticLayer('Tile Layer 1', tileset, 0, 0);\n\n    worldLayer.setCollisionByProperty({ collides: true });\n\n    worldLayer.forEachTile(tile => {\n      if (tile.properties.exit) {\n        worldLayer.setTileIndexCallback(tile.index, () => {\n          this.scene.start('mountain');\n        });\n      }\n    });\n\n    // const debug = this.add.graphics();\n\n    this.player = new _characters_Dwarf__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n      scene: this,\n      key: 'dwarf',\n      physics: this.physics,\n      x: this.startingDwarfPositionX,\n      y: this.startingDwarfPositionY\n    });\n\n    // Watch the player and worldLayer for collisions, for the duration of the scene:\n    this.physics.add.collider(this.player, worldLayer);\n\n    // When someone clicks within our game...\n    this.input.on('pointerdown', pointer => {\n      // Set the target position.\n      _constants__WEBPACK_IMPORTED_MODULE_2__[\"PLAYER_TARGET_POS\"].x = pointer.worldX;\n      _constants__WEBPACK_IMPORTED_MODULE_2__[\"PLAYER_TARGET_POS\"].y = pointer.worldY;\n\n      // Move the player to that target position at 120px/s\n      this.physics.moveToObject(this.player, _constants__WEBPACK_IMPORTED_MODULE_2__[\"PLAYER_TARGET_POS\"], 120);\n      // show a line indicating where he will be going\n      // debug.clear().lineStyle(1, 0x00ff00);\n      // debug.lineBetween(0, PLAYER_TARGET_POS.y, 800, PLAYER_TARGET_POS.y);\n      // debug.lineBetween(PLAYER_TARGET_POS.x, 0, PLAYER_TARGET_POS.x, 600);\n    });\n\n    const camera = this.cameras.main;\n    camera.startFollow(this.player);\n    camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);\n  }\n\n  update() {\n    const distance = phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Math.Distance.Between(\n      this.player.x,\n      this.player.y,\n      _constants__WEBPACK_IMPORTED_MODULE_2__[\"PLAYER_TARGET_POS\"].x,\n      _constants__WEBPACK_IMPORTED_MODULE_2__[\"PLAYER_TARGET_POS\"].y\n    );\n\n    // If the player is moving\n    if (this.player.body.speed > 0) {\n      // Check whether or not he is within 5px of the target\n      // If so, place him in his target position and make him stop moving.\n      // http://labs.phaser.io/edit.html?src=src/physics/arcade/move%20and%20stop%20at%20position.js\n      if (distance < 5) {\n        this.player.body.reset(_constants__WEBPACK_IMPORTED_MODULE_2__[\"PLAYER_TARGET_POS\"].x, _constants__WEBPACK_IMPORTED_MODULE_2__[\"PLAYER_TARGET_POS\"].y);\n        this.player.body.setVelocity(0);\n      }\n    }\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cave);\n\n\n//# sourceURL=webpack:///./src/scenes/Cave.js?");

/***/ }),

/***/ "./src/scenes/Menu.js":
/*!****************************!*\
  !*** ./src/scenes/Menu.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/src/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass Menu extends phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Scene {\n  constructor() {\n    super('menu');\n  }\n\n  init() {}\n\n  preload() {}\n\n  create() {\n    this.add.tileSprite(450, 400, 0, 0, 'background');\n    this.add.text(20, 20, 'Welcome to Dwarf Quest!', { fill: '#000' });\n    this.clickButton = this.add\n      .text(100, 100, 'CLICK HERE TO BEGIN YOUR JOURNEY', { fill: '#fff' })\n      .setInteractive({ useHandCursor: true })\n      .on('pointerdown', () => this.startGame())\n      .on('pointerover', () => this.enterButtonHoverState())\n      .on('pointerout', () => this.enterButtonRestState());\n  }\n\n  update() {}\n\n  enterButtonHoverState() {\n    this.clickButton.setStyle({ fill: '#ff0' });\n  }\n\n  enterButtonRestState() {\n    this.clickButton.setStyle({ fill: '#0f0' });\n  }\n\n  startGame() {\n    this.scene.start('cave');\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);\n\n\n//# sourceURL=webpack:///./src/scenes/Menu.js?");

/***/ }),

/***/ "./src/scenes/Mountain.js":
/*!********************************!*\
  !*** ./src/scenes/Mountain.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/src/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _characters_Dwarf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../characters/Dwarf */ \"./src/characters/Dwarf.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ \"./src/constants.js\");\n\n\n\n\nclass Mountain extends phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Scene {\n  constructor() {\n    super('mountain');\n  }\n\n  init() {}\n\n  preload() {}\n\n  create() {\n    const map = this.make.tilemap({ key: 'mountain' });\n\n    // Parameters are the name you gave the tileset in Tiled and then the key of the tileset image in\n    // Phaser's cache (i.e. the name you used in preload)\n    const tileset = map.addTilesetImage('mountain', 'mountainTiles');\n\n    // // We can combine layers here to create multi layer levels\n    // const worldLayer = map.createStaticLayer('Tile Layer 1', tileset, 0, 0);\n\n    const belowLayer = map.createStaticLayer('Ground', tileset, 0, 0);\n    const worldLayer = map.createStaticLayer('World', tileset, 0, 0);\n\n    worldLayer.setCollisionByProperty({ collides: true });\n    belowLayer.setCollisionByProperty({ collides: true });\n\n    worldLayer.forEachTile(tile => {\n      if (tile.properties.exit) {\n        worldLayer.setTileIndexCallback(tile.index, () => {\n          this.scene.start('cave', { fromMountain: true });\n        });\n      }\n      // attach the listener here\n    });\n\n    // const debug = this.add.graphics();\n\n    this.player = new _characters_Dwarf__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n      scene: this,\n      key: 'dwarf',\n      physics: this.physics,\n      x: 400,\n      y: 150\n    });\n\n    // Watch the player and worldLayer for collisions, for the duration of the scene:\n    this.physics.add.collider(this.player, worldLayer);\n\n    // When someone clicks within our game...\n    this.input.on('pointerdown', pointer => {\n      // Set the target position.\n      _constants__WEBPACK_IMPORTED_MODULE_2__[\"PLAYER_TARGET_POS\"].x = pointer.worldX;\n      _constants__WEBPACK_IMPORTED_MODULE_2__[\"PLAYER_TARGET_POS\"].y = pointer.worldY;\n\n      // Move the player to that target position at 120px/s\n      this.physics.moveToObject(this.player, _constants__WEBPACK_IMPORTED_MODULE_2__[\"PLAYER_TARGET_POS\"], 120);\n      // show a line indicating where he will be going\n      // debug.clear().lineStyle(1, 0x00ff00);\n      // debug.lineBetween(0, PLAYER_TARGET_POS.y, 800, PLAYER_TARGET_POS.y);\n      // debug.lineBetween(PLAYER_TARGET_POS.x, 0, PLAYER_TARGET_POS.x, 600);\n    });\n\n    const camera = this.cameras.main;\n    camera.startFollow(this.player);\n    camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);\n  }\n\n  update() {\n    const distance = phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Math.Distance.Between(\n      this.player.x,\n      this.player.y,\n      _constants__WEBPACK_IMPORTED_MODULE_2__[\"PLAYER_TARGET_POS\"].x,\n      _constants__WEBPACK_IMPORTED_MODULE_2__[\"PLAYER_TARGET_POS\"].y\n    );\n\n    // If the player is moving\n    if (this.player.body.speed > 0) {\n      // Check whether or not he is within 5px of the target\n      // If so, place him in his target position and make him stop moving.\n      // http://labs.phaser.io/edit.html?src=src/physics/arcade/move%20and%20stop%20at%20position.js\n      if (distance < 5) {\n        this.player.body.reset(_constants__WEBPACK_IMPORTED_MODULE_2__[\"PLAYER_TARGET_POS\"].x, _constants__WEBPACK_IMPORTED_MODULE_2__[\"PLAYER_TARGET_POS\"].y);\n        this.player.body.setVelocity(0);\n      }\n    }\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Mountain);\n\n\n//# sourceURL=webpack:///./src/scenes/Mountain.js?");

/***/ })

/******/ });