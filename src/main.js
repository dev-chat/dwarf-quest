import * as Phaser from 'phaser';

function preload() {
  // Runs once, loads up assets like images and audio
}

function create() {
  // Runs once, after all assets in preload are loaded
}

function update() {
  // Runs once per frame for the duration of the scene
}

const config = {
  type: Phaser.AUTO, // Which renderer to use
  width: 800, // Canvas width in pixels
  height: 600, // Canvas height in pixels
  parent: 'game-container', // ID of the DOM element to add the canvas to
  scene: {
    preload,
    create,
    update,
  },
};

const game = new Phaser.Game(config);

export default game;
