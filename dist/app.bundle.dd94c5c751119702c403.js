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

eval("module.exports = __webpack_require__.p + \"210029f61c523a80c749f4478dec8338.json\";\n\n//# sourceURL=webpack:///./src/assets/tilemaps/cave.json?");

/***/ }),

/***/ "./src/assets/tilesets/cave.png":
/*!**************************************!*\
  !*** ./src/assets/tilesets/cave.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"1135c9312d46edad607810b3eac23313.png\";\n\n//# sourceURL=webpack:///./src/assets/tilesets/cave.png?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/src/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_tilesets_cave_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/tilesets/cave.png */ \"./src/assets/tilesets/cave.png\");\n/* harmony import */ var _assets_tilesets_cave_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_tilesets_cave_png__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_tilemaps_cave_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/tilemaps/cave.json */ \"./src/assets/tilemaps/cave.json\");\n/* harmony import */ var _assets_tilemaps_cave_json__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_tilemaps_cave_json__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_sprites_dwarf_sprite_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/sprites/dwarf_sprite.json */ \"./src/assets/sprites/dwarf_sprite.json\");\n/* harmony import */ var _assets_sprites_dwarf_sprite_json__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_sprites_dwarf_sprite_json__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_sprites_dwarf_sprite_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/sprites/dwarf_sprite.png */ \"./src/assets/sprites/dwarf_sprite.png\");\n/* harmony import */ var _assets_sprites_dwarf_sprite_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_sprites_dwarf_sprite_png__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n\nlet controls;\nlet cursors;\nlet player;\nlet showDebug = false;\n\nfunction preload() {\n  this.load.image('tiles', _assets_tilesets_cave_png__WEBPACK_IMPORTED_MODULE_1___default.a);\n  this.load.tilemapTiledJSON('map', _assets_tilemaps_cave_json__WEBPACK_IMPORTED_MODULE_2___default.a);\n  // this.load.multiatlas('dwarf', 'assets/sprites/dwarf_sprite.json');\n  this.load.atlas('dwarf', _assets_sprites_dwarf_sprite_png__WEBPACK_IMPORTED_MODULE_4___default.a, _assets_sprites_dwarf_sprite_json__WEBPACK_IMPORTED_MODULE_3___default.a);\n}\nfunction create() {\n  const map = this.make.tilemap({ key: 'map' });\n\n  // Parameters are the name you gave the tileset in Tiled and then the key of the tileset image in\n  // Phaser's cache (i.e. the name you used in preload)\n  const tileset = map.addTilesetImage('cave', 'tiles');\n\n  // We can combine layers here to create multi layer levels\n  const worldLayer = map.createStaticLayer('Tile Layer 1', tileset, 0, 0);\n\n  worldLayer.setCollisionByProperty({ collides: true });\n\n  // Object layers in Tiled let you embed extra info into a map - like a spawn point or custom\n  // collision shapes. In the tmx file, there's an object layer with a point named \"Spawn Point\"\n\n  // TODO: get this working\n  const spawnPoint = map.findObject(\n    'Object',\n    obj => obj.name === 'Spawn Point'\n  );\n\n  // Create a sprite with physics enabled via the physics system. The image used for the sprite has\n  // a bit of whitespace, so I'm using setSize & setOffset to control the size of the player's body.\n  player = this.physics.add\n    .sprite(573, 376, 'dwarf', 'dwarf-front')\n    .setSize(30, 40)\n    .setOffset(0, 24);\n\n  // Watch the player and worldLayer for collisions, for the duration of the scene:\n  this.physics.add.collider(player, worldLayer);\n\n  // Create the player's walking animations from the texture atlas. These are stored in the global\n  // animation manager so any sprite can access them.\n  const anims = this.anims;\n  anims.create({\n    key: 'dwarf-left',\n    frames: anims.generateFrameNames('dwarf-left', {\n      prefix: 'dwarf-left.',\n      start: 0,\n      end: 3,\n      zeroPad: 3\n    }),\n    frameRate: 10,\n    repeat: -1\n  });\n  anims.create({\n    key: 'dwarf-right',\n    frames: anims.generateFrameNames('dwarf', {\n      prefix: 'dwarf-right.',\n      start: 0,\n      end: 3,\n      zeroPad: 3\n    }),\n    frameRate: 10,\n    repeat: -1\n  });\n  anims.create({\n    key: 'dwarf-front-walk',\n    frames: anims.generateFrameNames('dwarf', {\n      prefix: 'dwarf-front-walk.',\n      start: 0,\n      end: 3,\n      zeroPad: 3\n    }),\n    frameRate: 10,\n    repeat: -1\n  });\n  anims.create({\n    key: 'dwarf-back',\n    frames: anims.generateFrameNames('dwarf', {\n      prefix: 'dwarf-back.',\n      start: 0,\n      end: 3,\n      zeroPad: 3\n    }),\n    frameRate: 10,\n    repeat: -1\n  });\n\n  const camera = this.cameras.main;\n  camera.startFollow(player);\n  camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);\n\n  cursors = this.input.keyboard.createCursorKeys();\n}\n\nfunction update(time, delta) {\n  const speed = 175;\n  const prevVelocity = player.body.velocity.clone();\n\n  // Stop any previous movement from the last frame\n  player.body.setVelocity(0);\n\n  // Horizontal movement\n  if (cursors.left.isDown) {\n    player.body.setVelocityX(-speed);\n  } else if (cursors.right.isDown) {\n    player.body.setVelocityX(speed);\n  }\n\n  // Vertical movement\n  if (cursors.up.isDown) {\n    player.body.setVelocityY(-speed);\n  } else if (cursors.down.isDown) {\n    player.body.setVelocityY(speed);\n  }\n\n  // Normalize and scale the velocity so that player can't move faster along a diagonal\n  player.body.velocity.normalize().scale(speed);\n\n  // Update the animation last and give left/right animations precedence over up/down animations\n  if (cursors.left.isDown) {\n    // player.anims.play('dwarf-left', true);\n  } else if (cursors.right.isDown) {\n    // player.anims.play('dwarf-right', true);\n  } else if (cursors.up.isDown) {\n    // player.anims.play('dwarf-back', true);\n  } else if (cursors.down.isDown) {\n    // player.anims.play('dwarf-front', true);\n  } else {\n    player.anims.stop();\n  }\n\n  // If we were moving, pick and idle frame to use\n  if (prevVelocity.x < 0) player.setTexture('dwarf', 'dwarf-left');\n  else if (prevVelocity.x > 0) player.setTexture('dwarf', 'dwarf-right');\n  else if (prevVelocity.y < 0) player.setTexture('dwarf', 'dwarf-back');\n  else if (prevVelocity.y > 0) player.setTexture('dwarf', 'dwarf-front');\n}\n\nconst config = {\n  type: phaser__WEBPACK_IMPORTED_MODULE_0__[\"AUTO\"],\n  width: 800,\n  height: 600,\n  parent: 'game-container',\n  pixelArt: true,\n  physics: {\n    default: 'arcade',\n    arcade: {\n      gravity: { y: 0 }\n    }\n  },\n  scene: {\n    preload,\n    create,\n    update\n  }\n};\n\nconst game = new phaser__WEBPACK_IMPORTED_MODULE_0__[\"Game\"](config);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (game);\n\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });