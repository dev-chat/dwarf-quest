import * as Phaser from 'phaser';
import Scenes from './scenes';

const gameConfig: Phaser.Types.Core.GameConfig = {
  title: 'Dwarf Quest',

  type: Phaser.AUTO,

  width: 800,
  height: 600,

  scene: Scenes,

  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
    },
  },

  parent: 'game',
  backgroundColor: '#000000',
};

const game = new Phaser.Game(gameConfig);


// eslint-disable-next-line no-undef
window.addEventListener('resize', () => {
  // eslint-disable-next-line no-undef
  game.scale.resize(window.innerWidth, window.innerHeight);
});

export default game;
