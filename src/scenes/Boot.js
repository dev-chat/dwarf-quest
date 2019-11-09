import Phaser from 'phaser';

import mountainTileset from '../assets/tilesets/mountain.png';
import tiles from '../assets/tilesets/cave.png';
import cave from '../assets/tilemaps/cave.json';
import spriteJson from '../assets/sprites/dwarf_sprite.json';
import dwarf from '../assets/sprites/dwarf_sprite.png';
import dwarfKnight from '../assets/dwarf_knight.jpg';
import mountain from '../assets/tilemaps/mountain.json';

class Boot extends Phaser.Scene {
  constructor() {
    super('boot');
  }

  init() {}

  preload() {
    const progress = this.add.graphics();

    // Register a load progress event to show a load bar
    this.load.on('progress', value => {
      progress.clear();
      progress.fillStyle(0xffffff, 1);
      progress.fillRect(
        0,
        this.sys.game.config.height / 2,
        this.sys.game.config.width * value,
        60
      );
    });

    // Register a load complete event to launch the title screen when all files are loaded
    this.load.on('complete', () => {
      // prepare all animations, defined in a separate file
      // makeAnimations(this);
      progress.destroy();
      this.scene.start('menu');
    });

    this.load.image('background', dwarfKnight);

    this.load.image('tiles', tiles);
    this.load.tilemapTiledJSON('map', cave);

    this.load.image('mountainTiles', mountainTileset);
    this.load.tilemapTiledJSON('mountain', mountain);

    this.load.atlas('dwarf', dwarf, spriteJson);
  }

  create() {}

  update() {}
}

export default Boot;
