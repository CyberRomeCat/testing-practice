import mergeSort from "./mergeSort";

function capitalize(test) {
  let capitalize = test[0].toUpperCase() + test.slice(1);
  return capitalize;
}

function reverseStr(test) {
  let reversed = test.split("").reverse().join("");
  return reversed;
}

function cal(para) {
  return para;
}

function caesarCi() {
  let alphabets = "abcdefghijklmnopqrstuvwxyz";
}

function analyzeArr(arr) {
  let sortArr = mergeSort(arr);
  const initialValue = 0;
  const sum = arr.reduce((acc, currentVal) => acc + currentVal, initialValue);
  let median = sum / sortArr.length;
  let obj = {
    average: Math.round(median),
    min: sortArr[0],
    max: sortArr[sortArr.length - 1],
    length: arr.length,
  };
  return obj;
}

export { capitalize, reverseStr, cal, caesarCi, analyzeArr };
