class Direwolf {
  constructor(name, home = 'Beyond the Wall', size = 'Massive') {
    this.name = name;
    this.home = home;
    this.size = size;
    this.starksToProtect = [];
    this.huntsWhiteWalkers = true;
  }

  protect(stark) {
    if (stark.location === this.home && this.starksToProtect.length < 2)
      this.starksToProtect.push(stark);
    this.huntsWhiteWalkers = false;
    stark.safe = true;
  }

  leave(stark) {
    var index = this.starksToProtect.indexOf(stark);
    if (index > -1) {
      this.starksToProtect.splice(index, 1);
      stark.safe = false;
    }
  }
}

module.exports = Direwolf;