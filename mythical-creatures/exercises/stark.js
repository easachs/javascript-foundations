var Direwolf = require('./direwolf');

class Stark {
  constructor(attributes) {
    this.name = attributes.name;
    this.location = attributes.area;
    if (this.location == undefined) {
      this.location = 'Winterfell';
    }
    this.safe = false;
  }

  sayHouseWords() {
    if (this.safe) {
      return 'The North Remembers';
    } else {
      return 'Winter is Coming';
    }
  }

  callDirewolf(name, location = '') {
    var direwolf = new Direwolf(name, location);
    direwolf.home = this.location;
    direwolf.protect(this);
    return direwolf;
  }
}

module.exports = Stark;