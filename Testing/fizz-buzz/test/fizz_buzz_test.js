let assert = require("assert");
let FizzBuzz = require("../src/fizz_buzz").FizzBuzz;

describe("FizzBuzz", function () {
  it("should_return_same_num_when_input_num", function () {
    let fizzBuzz = new FizzBuzz();

    ret = fizzBuzz.execute(1);

    assert.equal(fizzBuzz.execute(1), 1);
    assert.equal(fizzBuzz.execute(2), 2);
  });

  it("should_return_fizz_num_when_input_3", function () {
    let fizzBuzz = new FizzBuzz();

    ret = fizzBuzz.execute(3);

    assert.equal(fizzBuzz.execute(6), "fizz");
    assert.equal(fizzBuzz.execute(9), "fizz");

    assert.equal(ret, "fizz");
  });

  it("should_return_fizz_num_when_input_5", function () {
    let fizzBuzz = new FizzBuzz();

    ret = fizzBuzz.execute(5);

    assert.equal(fizzBuzz.execute(10), "buzz");
    assert.equal(fizzBuzz.execute(20), "buzz");

    assert.equal(ret, "buzz");
  });
  it("should_return_fizzbuzz_num_when_input_5_3", function () {
    let fizzBuzz = new FizzBuzz();

    assert.equal(fizzBuzz.execute(30), "fizzbuzz");
    assert.equal(fizzBuzz.execute(15), "fizzbuzz");
  });
});
