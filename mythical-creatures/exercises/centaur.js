class Centaur {
  constructor(attributes) {
    this.name = attributes.name;
    this.breed = attributes.type;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    this.activityCount = 0;
  }

  shootBow() {
    this.activityCount += 1;
    if (this.activityCount > 2) {
      this.cranky = true;
      return 'NO!';
    } else if (this.layingDown) {
      return 'NO!';
    } else {
      return 'Twang!!!';
    }
  }

  run() {
    this.activityCount += 1;
    if (this.activityCount >= 3 || this.layingDown) {
      this.cranky = true;
      return 'NO!';
    } else {
      return 'Clop clop clop clop!!!';
    }
  }

  sleep() {
    if (this.standing) {
      return 'NO!';
    } else if (this.layingDown) {
      this.activityCount = 0;
      this.cranky = false;
      return 'ZZZZ';
    }
  }

  layDown() {
    this.standing = false;
    this.layingDown = true;
  }

  standUp() {
    this.standing = true;
    this.layingDown = false;
  }

  drinkPotion() {
    if (this.layingDown) {
      return 'Not while I\'m laying down!';
    } else {
      this.cranky = !this.cranky;
    }
  }
}

module.exports = Centaur;