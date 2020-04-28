class FizzBuzz {
  execute(num) {
    if (num % 3 === 0 && num % 5 === 0) {
      return "fizzbuzz";
    } else if (num % 3 === 0) {
      return "fizz";
    } else if (num % 5 === 0) {
      return "buzz";
    } else {
      return num;
    }
  }

  printNumber() {
    for (let i = 0; i <= 100; i++) {
      console.log(this.execute(i));
    }
  }
}

module.exports.FizzBuzz = FizzBuzz;

let prueba = new FizzBuzz();
prueba.printNumber();
