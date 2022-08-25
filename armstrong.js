function armstrong(num) {
  let orgNum = num;
  let result = false;
  let sum = 0;
  let temp = 0;
  let prod;
  while (num > 0) {
    temp = num % 10;
    prod = temp * temp * temp;
    sum = sum + prod;
    num = Math.trunc(num / 10);
  }
  if (orgNum === sum) {
    result = true;
  }
  return result;
}

const number = 407;
const res = armstrong(number);
if (res) {
  document.write(`Number ${number} is armstrong number`);
} else {
  document.write(`Number ${number} is not a armstrong number`);
}
