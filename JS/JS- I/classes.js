"use strict";
const userNames = ["Ivan", "Ana", "David"];
const userAges = [24, 13, 56];

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.adult = age >= 18;
  }
}
class UserList {
  allUsers = [];
  constructor(names, ages) {
    for (let i = 0; i < names.length; i++) {
      this.allUsers.push(new User(names[i], ages[i]));
    }
  }
  getAdultUsers() {
    return this.allUsers.filter(user => user.adult);
  }
}

const myUsers = new UserList(userNames, userAges);
console.log(myUsers, myUsers.getAdultUsers());


---------------------------------------------------------------




class Animal {
  constructor(name, legs) {
    this.name = name;
    this.legs = legs;
  }
  speak() {
    console.log('SILENCIO');
  }
}
class Dog extends Animal {
  constructor(name) {
    super(name, 4);
  }
  speak() {
    console.log('GUAU!');
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name, 4);
  }
  speak() {
    console.log('MIAU');
  }
}

class Spider extends Animal {
  constructor(name) {
    super(name, 8);
  }
}

const myDog = new Dog('Toby');
const myCat = new Cat('Nuddles');
const mySpider = new Spider('Sparky');

console.log(myDog, myCat, mySpider);

