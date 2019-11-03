import * as Phaser from 'phaser';
import MenuButton from '../ui/menu-button';

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
  active: false,
  visible: false,
  key: 'MainMenu',
};

/**
 * The initial scene that starts, shows the splash screens, and loads the necessary assets.
 */
export default class MainMenuScene extends Phaser.Scene {
  constructor() {
    super(sceneConfig);
  }

  public create() {
    this.add.text(100, 50, 'Dwarf Quest', { fill: '#FFFFFF' }).setFontSize(72);
    // We should consider this disabler.
    // Might be a headache in future and we should disable the rule entirely. - SF
    // eslint-disable-next-line no-new
    new MenuButton(this, 100, 150, 'Start Game', () => {
      this.scene.start('Game');
    });
  }
}
