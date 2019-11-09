import * as Phaser from 'phaser';
import Boot from './scenes/Boot';
import Cave from './scenes/Cave';
import Menu from './scenes/Menu';
import Mountain from './scenes/Mountain';

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
  scene: [Boot, Menu, Cave, Mountain]
};

const game = new Phaser.Game(config);

export default game;
