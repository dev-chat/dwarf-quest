import * as Phaser from 'phaser';

import tiles from './assets/tilesets/cave.png';
import cave from './assets/tilemaps/cave.json';
import spriteJson from './assets/sprites/dwarf_sprite.json';
import dwarf from './assets/sprites/dwarf_sprite.png';

let player;
const playerTargetPos = new Phaser.Math.Vector2();

// const showDebug = false;

function preload() {
  this.load.image('tiles', tiles);
  this.load.tilemapTiledJSON('map', cave);
  // this.load.multiatlas('dwarf', 'assets/sprites/dwarf_sprite.json');
  this.load.atlas('dwarf', dwarf, spriteJson);
}
function create() {
  const map = this.make.tilemap({ key: 'map' });

  // Parameters are the name you gave the tileset in Tiled and then the key of the tileset image in
  // Phaser's cache (i.e. the name you used in preload)
  const tileset = map.addTilesetImage('cave', 'tiles');

  // We can combine layers here to create multi layer levels
  const worldLayer = map.createStaticLayer('Tile Layer 1', tileset, 0, 0);

  worldLayer.setCollisionByProperty({ collides: true });

  // Object layers in Tiled let you embed extra info into a map - like a spawn point or custom
  // collision shapes. In the tmx file, there's an object layer with a point named "Spawn Point"

  // TODO: get this working
  // const spawnPoint = map.findObject(
  //   'Object',
  //   (obj) => obj.name === 'Spawn Point',
  // );

  const debug = this.add.graphics();
  // Create a sprite with physics enabled via the physics system. The image used for the sprite has
  // a bit of whitespace, so I'm using setSize & setOffset to control the size of the player's body.
  player = this.physics.add
    .sprite(573, 376, 'dwarf', 'dwarf-front')
    .setSize(30, 40)
    .setOffset(0, 24);

  // Watch the player and worldLayer for collisions, for the duration of the scene:
  this.physics.add.collider(player, worldLayer);

  // When someone clicks within our game...
  this.input.on('pointerup', (pointer) => {
    // Set the target position.
    playerTargetPos.x = pointer.worldX;
    playerTargetPos.y = pointer.worldY;

    // Move the player to that target position at 120px/s
    this.physics.moveToObject(player, playerTargetPos, 120);

    // show a line indicating where he will be going
    debug.clear().lineStyle(1, 0x00ff00);
    debug.lineBetween(0, playerTargetPos.y, 800, playerTargetPos.y);
    debug.lineBetween(playerTargetPos.x, 0, playerTargetPos.x, 600);
  });
  // Create the player's walking animations from the texture atlas. These are stored in the global
  // animation manager so any sprite can access them.
  const { anims } = this;
  anims.create({
    key: 'dwarf-left',
    frames: anims.generateFrameNames('dwarf-left', {
      prefix: 'dwarf-left.',
      start: 0,
      end: 3,
      zeroPad: 3,
    }),
    frameRate: 10,
    repeat: -1,
  });
  anims.create({
    key: 'dwarf-right',
    frames: anims.generateFrameNames('dwarf', {
      prefix: 'dwarf-right.',
      start: 0,
      end: 3,
      zeroPad: 3,
    }),
    frameRate: 10,
    repeat: -1,
  });
  anims.create({
    key: 'dwarf-front-walk',
    frames: anims.generateFrameNames('dwarf', {
      prefix: 'dwarf-front-walk.',
      start: 0,
      end: 3,
      zeroPad: 3,
    }),
    frameRate: 10,
    repeat: -1,
  });
  anims.create({
    key: 'dwarf-back',
    frames: anims.generateFrameNames('dwarf', {
      prefix: 'dwarf-back.',
      start: 0,
      end: 3,
      zeroPad: 3,
    }),
    frameRate: 10,
    repeat: -1,
  });

  const camera = this.cameras.main;
  camera.startFollow(player);
  camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
}

function update() {
  const distance = Phaser.Math.Distance.Between(
    player.x,
    player.y,
    playerTargetPos.x,
    playerTargetPos.y,
  );

  if (player.body.speed > 0) {
    if (distance < 5) {
      player.body.reset(playerTargetPos.x, playerTargetPos.y);
      player.body.setVelocity(0);
    }
  }

  // Update the animation last and give left/right animations precedence over up/down animations
  // This should be updated to determine direcetion via player and playerTargetPos
  // x and y coord differences.

  // if (cursors.left.isDown) {
  //   // player.anims.play('dwarf-left', true);
  // } else if (cursors.right.isDown) {
  //   // player.anims.play('dwarf-right', true);
  // } else if (cursors.up.isDown) {
  //   // player.anims.play('dwarf-back', true);
  // } else if (cursors.down.isDown) {
  //   // player.anims.play('dwarf-front', true);
  // } else {
  //   player.anims.stop();
  // }

  // // If we were moving, pick and idle frame to use
  // if (prevVelocity.x < 0) player.setTexture('dwarf', 'dwarf-left');
  // else if (prevVelocity.x > 0) player.setTexture('dwarf', 'dwarf-right');
  // else if (prevVelocity.y < 0) player.setTexture('dwarf', 'dwarf-back');
  // else if (prevVelocity.y > 0) player.setTexture('dwarf', 'dwarf-front');
}

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: 'game-container',
  pixelArt: true,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
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
