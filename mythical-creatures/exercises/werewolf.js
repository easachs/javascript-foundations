class Werewolf {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.form = 'human'
    this.hungry = false;
  }

  completeTransformation() {
    if (this.form == 'human') {
      this.form = 'wolf';
      this.hungry = true;
      return 'Aaa-Woooo!';
    } else {
      this.form = 'human';
      this.hungry = false;
      return 'Where are I?';
    }
  }

  eatVictim(victim) {
    if (this.form == 'wolf') {
      this.hungry = false;
      this.completeTransformation();
      victim.alive = false;
      return 'Yum, Hannah was delicious.';
    } else {
      return 'No way am I eating Baby, I\'d like a burger!';
    }
  }
}

module.exports = Werewolf;