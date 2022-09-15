function randomArray(min, max, length) {
  let arr = [];
  for (let i = 0; i < length; i++) {
    let num = Math.floor(Math.random() * (max - min + 1) + min);
    arr.push(num);
  }
  return arr;
}
console.log(randomArray(1, 100, 10));
