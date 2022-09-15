const checkPallindrome = (input) => {
  let reverseWord = "";
  for (let i = input.length - 1; i >= 0; i--) {
    reverseWord += input[i];
  }
  //   console.log(reverseWord);
  if (input === reverseWord) {
    return true;
  } else {
    return false;
  }
};

console.log(checkPallindrome("katak"));
console.log(checkPallindrome("lakaka"));
console.log(checkPallindrome("aziza"));
console.log(checkPallindrome("bang jadon"));
