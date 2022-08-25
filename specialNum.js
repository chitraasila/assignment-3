function specialNumber(num) {
  let orgNum = num;
  let result = false;
  let sum = 0;
  let temp = 0;
  let fact;
  while (num > 0) {
    temp = num % 10;
    fact = factorial(temp);
    sum = sum + fact;
    num = Math.trunc(num / 10);
  }
  if (orgNum === sum) {
    result = true;
  }
  return result;
}

function factorial(num) {
  if (num == 0 || num == 1) return 1;
  else return num * factorial(num - 1);
}

const number = 145;
if (specialNumber(number)) {
  document.write(`${number} is a special number`);
} else {
  document.write(`${number} is not a special number`);
}
