import * as Phaser from 'phaser';

let controls;
let hero;

function preload() {
  this.load.image('tiles', '../assets/tilesets/cave.png');
  this.load.tilemapTiledJSON('map', '../assets/tilemaps/cave.json');
  this.load.image('dwarf', '../assets/sprites/dwarf.jpeg');
}

function heroCreate(game) {
  hero = game.physics.add.image(0, 0, 'dwarf');
  hero.width = 10;
  hero.height = 10;
  game.input.on('pointerdown', (pointer) => {
    console.log(`cursorPosition X = ${pointer.x}`);
    console.log(`cursorPosition Y = ${pointer.y}`);

    game.physics.moveToObject(hero, pointer, 240);
  });
}

function create() {
  const map = this.make.tilemap({ key: 'map' });

  // Parameters are the name you gave the tileset in Tiled and then the key of the tileset image in
  // Phaser's cache (i.e. the name you used in preload)
  const tileset = map.addTilesetImage('cave', 'tiles');

  // We can combine layers here to create multi layer levels
  map.createStaticLayer('Tile Layer 1', tileset, 0, 0);

  worldLayer.setCollisionByProperty({ collides: true });

  const debugGraphics = this.add.graphics().setAlpha(0.75);
  worldLayer.renderDebug(debugGraphics, {
    tileColor: null, // Color of non-colliding tiles
    collidingTileColor: new Phaser.Display.Color(255, 192, 203), // Color of colliding tiles
    faceColor: new Phaser.Display.Color(40, 39, 37, 255), // Color of colliding face edges
  });

  const camera = this.cameras.main;

  // Set up the arrows to control the camera
  const cursors = this.input.keyboard.createCursorKeys();
  controls = new Phaser.Cameras.Controls.FixedKeyControl({
    camera,
    left: cursors.left,
    right: cursors.right,
    up: cursors.up,
    down: cursors.down,
    speed: 0.5,
  });

  // Constrain the camera so that it isn't allowed to move outside the width/height of tilemap
  camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
  heroCreate(this);
}

function update(time, delta) {
  // Apply the controls to the camera each update tick of the game
  controls.update(delta);
}

const config = {
  type: Phaser.AUTO, // Which renderer to use
  width: 800, // Canvas width in pixels
  height: 800, // Canvas height in pixels
  parent: 'game-container', // ID of the DOM element to add the canvas to
  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
    },
  },
  scene: {
    preload,
    create,
    update,
  },
};

const game = new Phaser.Game(config);

export default game;
