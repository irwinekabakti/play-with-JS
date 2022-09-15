const g = 100;
const random1 = Math.floor(Math.random() * g);
const random2 = Math.floor(Math.random() * g);

const comparisonNumber = (num1, num2) => {
  if (num1 > num2) {
    return `Yah, number ${num1} is greater than ${num2}`;
  } else {
    return `Oh no, number ${num2} is greater than ${num1}`;
  }
};

console.log(comparisonNumber(random1, random2));
