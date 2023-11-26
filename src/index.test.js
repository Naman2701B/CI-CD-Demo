// import files
var add = require("./calculator/add");
var subtract = require("./calculator/subtract");
var multiply = require("./calculator/multiply");
var divide = require("./calculator/divide");

// Test Case 1 (Addition)
test("Should add two numbers", () => {
    expect(add(25, 10)).toBe(35);
});

// Test Case 2 (Subtraction)
test("Should subtract two numbers", () => {
    expect(subtract(25, 10)).toBe(15);
});

test("Should multiple two numbers", () => {
    expect(multiply(25, 10)).toBe(250);
});

test("Should divide two numbers", () => {
    expect(divide(25, 5)).toBe(5);
});
// Test Case 3 (Multiplication)

// Test Case 4 (Division)
