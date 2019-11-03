import * as Phaser from "phaser";
import Scenes from "./scenes";

const gameConfig: Phaser.Types.Core.GameConfig = {
  title: "Dwarf Quest",

  type: Phaser.AUTO,

  width: 800,
  height: 600,

  scene: Scenes,

  physics: {
    default: "arcade",
    arcade: {
      debug: true
    }
  },

  parent: "game",
  backgroundColor: "#000000"
};

export const game = new Phaser.Game(gameConfig);

window.addEventListener("resize", () => {
  game.scale.resize(window.innerWidth, window.innerHeight);
});
