let arr = [61, 8, 20, 5, 1, 11, 9, 3];

// // sort method
// // compare function as function expression
// arr.sort(function (a, b) {
//   return a - b;
// });
// console.log(arr);

arr.sort((a, b) => {
  return a - b;
});
console.log(arr);
