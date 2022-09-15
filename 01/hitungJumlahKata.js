const hitungKalimat = (kalimat) => {
  let output = 0;
  for (let i = 0; i < kalimat.length; i++) {
    if (
      (kalimat[i] === " " &&
        kalimat[i - 1] !== " " &&
        kalimat[i - 1] !== undefined) ||
      (i === kalimat.length - 1 && kalimat[i] !== " ")
    ) {
      output++;
    }
  }
  return output;
};

console.log(hitungKalimat("Fred udah nemuin touchnya"));

// CONTOH
let contoh = "Gini doang grup neraka ?";

let n_kata = 0;
if (contoh.length !== 0) {
  n_kata = 1;
  for (let j = 0; j < contoh.length; j++) {
    if (contoh[j] === " ") {
      n_kata++;
    }
  }
}

console.log(n_kata);
