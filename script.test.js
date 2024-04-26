import { capitalize, reverseStr, cal } from "./script";

test("Capitalize first letter", () => {
  expect(capitalize("love")).toBe("Love");
});

test("reverseString", () => {
  expect(reverseStr("love")).toBe("evol");
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
  expect(cal(calc.add())).toBe(4);
  expect(cal(calc.subtract())).toBe(4);
  expect(cal(calc.multiply())).toBe(6);
  expect(cal(calc.divide())).toBe(1);
});
