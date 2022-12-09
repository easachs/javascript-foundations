var Material = require('./material');

class Craft {
  constructor(attributes) {
    this.name = attributes.type;
    this.materials = attributes.materials;
    this.completed = false;
  }

  completeCraft() {
    this.completed = true;
    return 'All done! It looks great!';
  }

  calculateProjectTotal() {
    var total = 0;
    for (var i = 0; i < this.materials.length; i++) {
      total += this.materials[i].calculateMaterialCost();
    }
    return total
  }
}

module.exports = Craft;
