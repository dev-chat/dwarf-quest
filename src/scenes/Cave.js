import Phaser from 'phaser';
import Dwarf from '../characters/Dwarf';
import { PLAYER_TARGET_POS } from '../constants';

class Cave extends Phaser.Scene {
  constructor() {
    super('cave');
  }

  init() {}

  preload() {}

  create() {
    const map = this.make.tilemap({ key: 'map' });

    // Parameters are the name you gave the tileset in Tiled and then the key of the tileset image in
    // Phaser's cache (i.e. the name you used in preload)
    const tileset = map.addTilesetImage('cave', 'tiles');

    // We can combine layers here to create multi layer levels
    const worldLayer = map.createStaticLayer('Tile Layer 1', tileset, 0, 0);

    worldLayer.setCollisionByProperty({ collides: true });

    const debug = this.add.graphics();

    this.player = new Dwarf({
      scene: this,
      key: 'dwarf',
      physics: this.physics,
      x: 573,
      y: 376
    });

    // Watch the player and worldLayer for collisions, for the duration of the scene:
    this.physics.add.collider(this.player, worldLayer);

    setTimeout(() => {
      // When someone clicks within our game...
      this.input.on('pointerup', pointer => {
        // Set the target position.
        PLAYER_TARGET_POS.x = pointer.worldX;
        PLAYER_TARGET_POS.y = pointer.worldY;

        // Move the player to that target position at 120px/s
        this.physics.moveToObject(this.player, PLAYER_TARGET_POS, 120);
        // show a line indicating where he will be going
        debug.clear().lineStyle(1, 0x00ff00);
        debug.lineBetween(0, PLAYER_TARGET_POS.y, 800, PLAYER_TARGET_POS.y);
        debug.lineBetween(PLAYER_TARGET_POS.x, 0, PLAYER_TARGET_POS.x, 600);
      });
    }, 500);

    const camera = this.cameras.main;
    camera.startFollow(this.player);
    camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
  }

  update() {
    const distance = Phaser.Math.Distance.Between(
      this.player.x,
      this.player.y,
      PLAYER_TARGET_POS.x,
      PLAYER_TARGET_POS.y
    );

    // If the player is moving
    if (this.player.body.speed > 0) {
      // Check whether or not he is within 5px of the target
      // If so, place him in his target position and make him stop moving.
      // http://labs.phaser.io/edit.html?src=src/physics/arcade/move%20and%20stop%20at%20position.js
      if (distance < 5) {
        this.player.body.reset(PLAYER_TARGET_POS.x, PLAYER_TARGET_POS.y);
        this.player.body.setVelocity(0);
      }
    }
  }
}

export default Cave;
