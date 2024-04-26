import { capitalize, reverseStr, cal, caesarCi, analyzeArr } from "./script";

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

test("caesarCipher", () => {
  expect(caesarCi("julius")).toBe("mxolxv");
});

test("analyzeArray", () => {
  expect(analyzeArr([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
