const script = require("./script");

test("Capitalize first letter", () => {
  expect(script("love")).toBe("Evol");
});

test("reverseString", () => {
  expect(script("love")).toBe("Evol");
});

test("calculator", () => {
  const calc = {
    add: () => {
      return 2 + 2;
    },
    subtract: () => {
      return 5 - 1;
    },
    multiply: () => {
      return 3 * 2;
    },
    divide: () => {
      return 2 / 2;
    },
  };
  expect(script(calc.add())).toBe(4);
  expect(script(calc.subtract())).toBe(4);
  expect(script(calc.multiply())).toBe(6);
  expect(script(calc.divide())).toBe(1);
});
