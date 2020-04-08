"use strict";
const userNames = ['Ivan', 'Ana', 'David'];
const userAges = [24, 13, 56];

function createUsers(names, ages) {
  return names
    .map((name, index) => {
      return { firstName: name, age: ages[index] };
    })
    .map((user) => {
      user.adult = user.age >= 18;
      return user;
    })
    .filter((user) => {
      return user.adult;
    })
    .reduce((accumulator, currentUser) => {
      return accumulator + currentUser.age;
    }, 0);
}

const users = createUsers(userNames, userAges);

console.log(users);

