// huruf vokal ke special character

const ubahHuruf = (kata) => {
  let vocal = "aiueo";
  // let kataBaru = "";
  for (let i = 0; i < kata.length; i++) {
    for (let j = 0; j < vocal.length; j++) {
      if (kata[i] == vocal[j]) {
        kata = kata.replace(kata[i], "*");
      }
    }
  }
  return kata;
};

console.log(ubahHuruf("emyu nih bos senggol dong"));
console.log(ubahHuruf("gini doang grup neraka"));
console.log(ubahHuruf("munyuk tolol"));

// special character to huruf vokal

const ubahCharacter = (word) => {
  if (word === "") {
    console.log("Tidak ada kata yang bisa di proses");
  } else {
    var result = "";
    for (var i = 0; i < word.length; i++) {
      var temp = Number(word[i]);
      if (isNaN(temp) || word[i] === " ") {
        result += word[i];
      } else {
        for (var j = 0; j < temp; j++) {
          result += word[i - 1];
        }
      }
    }
    return result;
  }
};

console.log(ubahCharacter("Munyu4k go3bl1o7k"));
console.log(ubahCharacter("T3e3n Ha4g6"));
console.log(ubahCharacter("Ma4dsi1o10n vi1si ma4i1n2ya4 GG bange3t co8k"));
