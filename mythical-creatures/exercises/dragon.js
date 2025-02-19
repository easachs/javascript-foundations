class Dragon {
  constructor(name, rider, color) {
    this.name = name;
    this.rider = rider;
    this.color = color;
    this.hungry = true;
    this.eatCount = 0;
  }

  eat() {
    this.eatCount += 1;
    if (this.eatCount >= 3) {
      this.hungry = false;
    }
  }

  greet() {
    return `Hi, ${this.rider}!`;
  }
}

module.exports = Dragon;