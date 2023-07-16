class Person {
  constructor(name) {
    this.name = name;
  }

  sayMyNamy() {
    return `My name is ${this.name}!`;
  }
}

module.exports = {
  Person,
};
