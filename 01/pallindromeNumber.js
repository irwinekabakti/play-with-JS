const pallindromeNum = (angka) => {
  let isPalindrome = false;
  angka++;
  do {
    let angkaStr = String(angka);
    let reversedAngkaStr = "";
    for (let i = angkaStr.length - 1; i >= 0; i--) {
      reversedAngkaStr += angkaStr[i];
    }
    if (angkaStr === reversedAngkaStr) {
      isPalindrome = true;
    } else {
      angka++;
    }
  } while (!isPalindrome);

  return angka;
};

console.log(pallindromeNum(789));
console.log(pallindromeNum(587698));
console.log(pallindromeNum(49));
