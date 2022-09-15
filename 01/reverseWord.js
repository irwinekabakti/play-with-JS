const reverseWord = (str) => {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    let eachStr = str[i];
    newStr += eachStr;
  }
  return newStr;
};

console.log(reverseWord("Ampun Bang Jadon"));
console.log(reverseWord("Fred udah nemuin touchnya"));
console.log(reverseWord("Yakin Tsunami Trophy ditangan Ten Hag"));
