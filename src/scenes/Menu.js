import Phaser from 'phaser';

class Menu extends Phaser.Scene {
  constructor() {
    super('menu');
  }

  init() {}

  preload() {}

  create() {
    this.add.tileSprite(450, 400, 0, 0, 'background');
    this.add.text(20, 20, 'Welcome to Dwarf Quest!', { fill: '#000' });
    this.clickButton = this.add
      .text(100, 100, 'CLICK HERE TO BEGIN YOUR JOURNEY', { fill: '#fff' })
      .setInteractive({ useHandCursor: true })
      .on('pointerdown', () => this.startGame())
      .on('pointerover', () => this.enterButtonHoverState())
      .on('pointerout', () => this.enterButtonRestState());
  }

  update() {}

  enterButtonHoverState() {
    this.clickButton.setStyle({ fill: '#ff0' });
  }

  enterButtonRestState() {
    this.clickButton.setStyle({ fill: '#0f0' });
  }

  startGame() {
    this.scene.start('cave');
  }
}

export default Menu;
