const convertMinute = (detik) => {
  let output = "";
  let minutes = Math.floor(detik / 60);
  let seconds = detik % 60;
  if (seconds < 10) {
    seconds = "0" + seconds;
    return minutes + ":" + seconds;
  }
  return (output = minutes + ":" + seconds);
};

console.log(convertMinute(65));
console.log(convertMinute(66));
console.log(convertMinute(69));
console.log(convertMinute(90));
console.log(convertMinute(100));
