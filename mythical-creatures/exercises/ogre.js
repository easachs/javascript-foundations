class Ogre {
  constructor(attributes) {
    this.name = attributes.name;
    this.home = attributes.abode;
    if (this.home == undefined) {
      this.home = 'Swamp';
    }
    this.swings = 0;
  }

  encounter(human) {
    human.encounterCounter += 1;
    if (human.encounterCounter % 3 === 0) {
      this.swings += 1;
      if (this.swings > 1) {
        human.knockedOut = true;
      }
    }
  }

  swingAt(human) {
    this.swings += 1;
  }

  apologize(human) {
    human.knockedOut = false;
  }
}

module.exports = Ogre;