class Magician {
  constructor(attributes) {
    this.name = 'The Great ' + attributes.name;
    this.assistant = attributes.assistant;
    this.favoriteAccessory = attributes.clothing;
    if (this.favoriteAccessory === undefined) {
      this.favoriteAccessory = 'top hat';
    }
    this.confidencePercentage = 10;
  }

  performIncantation(incant) {
    return (incant.toUpperCase() + '!');
  }

  performTrick() {
    this.confidencePercentage += 10;
    if (this.favoriteAccessory === 'top hat') {
      return 'PULL RABBIT FROM TOP HAT';
    } else if (this.favoriteAccessory === 'cape') {
      return 'PULL DOVE FROM SLEEVE';
    }
  }

  performShowStopper() {
    if (this.confidencePercentage >= 100 && this.assistant) {
      return 'WOW! The magician totally just sawed that person in half!';
    } else {
      return 'Oh no, this trick is not ready!'
    }
  }
}

module.exports = Magician;