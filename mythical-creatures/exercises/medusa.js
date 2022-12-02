var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }

  gazeAtVictim(victim) {
    this.statues.push(new Statue(victim.name));
    victim.stoned = true;
    if (this.statues.length > 3) {
      var released = new Person(this.statues[0].name);
      released.mood = 'relieved';
      this.statues.shift();
      return released;
    }
  }
}

module.exports = Medusa;