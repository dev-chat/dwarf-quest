import * as Phaser from 'phaser';

let controls;
let cursors;
let player;
let showDebug = false;

function preload() {
  this.load.image('tiles', '../assets/tilesets/cave.png');
  this.load.tilemapTiledJSON('map', '../assets/tilemaps/cave.json');
  // this.load.multiatlas('dwarf', 'assets/sprites/dwarf_sprite.json');
  this.load.atlas(
    'dwarf',
    '../assets/sprites/dwarf_sprite.png',
    '../assets/sprites/dwarf_sprite.json'
  );
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
  const spawnPoint = map.findObject(
    'Object',
    obj => obj.name === 'Spawn Point'
  );

  // Create a sprite with physics enabled via the physics system. The image used for the sprite has
  // a bit of whitespace, so I'm using setSize & setOffset to control the size of the player's body.
  player = this.physics.add
    .sprite(573, 376, 'dwarf', 'dwarf-front')
    .setSize(30, 40)
    .setOffset(0, 24);

  // Watch the player and worldLayer for collisions, for the duration of the scene:
  this.physics.add.collider(player, worldLayer);

  // Create the player's walking animations from the texture atlas. These are stored in the global
  // animation manager so any sprite can access them.
  const anims = this.anims;
  anims.create({
    key: 'dwarf-left',
    frames: anims.generateFrameNames('dwarf-left', {
      prefix: 'dwarf-left.',
      start: 0,
      end: 3,
      zeroPad: 3
    }),
    frameRate: 10,
    repeat: -1
  });
  anims.create({
    key: 'dwarf-right',
    frames: anims.generateFrameNames('dwarf', {
      prefix: 'dwarf-right.',
      start: 0,
      end: 3,
      zeroPad: 3
    }),
    frameRate: 10,
    repeat: -1
  });
  anims.create({
    key: 'dwarf-front-walk',
    frames: anims.generateFrameNames('dwarf', {
      prefix: 'dwarf-front-walk.',
      start: 0,
      end: 3,
      zeroPad: 3
    }),
    frameRate: 10,
    repeat: -1
  });
  anims.create({
    key: 'dwarf-back',
    frames: anims.generateFrameNames('dwarf', {
      prefix: 'dwarf-back.',
      start: 0,
      end: 3,
      zeroPad: 3
    }),
    frameRate: 10,
    repeat: -1
  });

  const camera = this.cameras.main;
  camera.startFollow(player);
  camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

  cursors = this.input.keyboard.createCursorKeys();
}

function update(time, delta) {
  const speed = 175;
  const prevVelocity = player.body.velocity.clone();

  // Stop any previous movement from the last frame
  player.body.setVelocity(0);

  // Horizontal movement
  if (cursors.left.isDown) {
    player.body.setVelocityX(-speed);
  } else if (cursors.right.isDown) {
    player.body.setVelocityX(speed);
  }

  // Vertical movement
  if (cursors.up.isDown) {
    player.body.setVelocityY(-speed);
  } else if (cursors.down.isDown) {
    player.body.setVelocityY(speed);
  }

  // Normalize and scale the velocity so that player can't move faster along a diagonal
  player.body.velocity.normalize().scale(speed);

  // Update the animation last and give left/right animations precedence over up/down animations
  if (cursors.left.isDown) {
    // player.anims.play('dwarf-left', true);
  } else if (cursors.right.isDown) {
    // player.anims.play('dwarf-right', true);
  } else if (cursors.up.isDown) {
    // player.anims.play('dwarf-back', true);
  } else if (cursors.down.isDown) {
    // player.anims.play('dwarf-front', true);
  } else {
    player.anims.stop();
  }

  // If we were moving, pick and idle frame to use
  if (prevVelocity.x < 0) player.setTexture('dwarf', 'dwarf-left');
  else if (prevVelocity.x > 0) player.setTexture('dwarf', 'dwarf-right');
  else if (prevVelocity.y < 0) player.setTexture('dwarf', 'dwarf-back');
  else if (prevVelocity.y > 0) player.setTexture('dwarf', 'dwarf-front');
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
      gravity: { y: 0 }
    }
  },
  scene: {
    preload,
    create,
    update
  }
};

const game = new Phaser.Game(config);

export default game;
