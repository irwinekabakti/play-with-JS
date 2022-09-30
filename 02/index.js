function countMe(arr) {
  // write your code here
  let result = {};

  for (let i = 0; i < arr.length; i++) {
    if (result[arr[i]]) {
      result[arr[i]]++;
    } else {
      result[arr[i]] = 1;
    }
  }
  return result;
}

console.log(countMe([1, 15, 9, 10, 8, 1, 12, 15, 10, 3]));
console.log(countMe(["Sofyan", "Ricky", "Sofyan", "Semmi", "Semmi", "Wika"]));
