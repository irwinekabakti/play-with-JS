const nilaiSiswa = (a, b) => {
  const nilai = (a + b) / nilaiSiswa.length;

  if (nilai >= 90 && nilai <= 100) {
    return `your score is ${nilai}, that was a good one mate`;
  } else if (nilai >= 80 && nilai < 90) {
    return `your score is ${nilai}, nice mate !`;
  } else if (nilai >= 70 && nilai < 80) {
    return `your score is ${nilai}, so so !`;
  } else if (nilai >= 60 && nilai < 70) {
    return `your score is ${nilai}, you need to keep pushing !`;
  } else if (nilai >= 0 && nilai < 60) {
    return `your score is ${nilai}, lu itu tolol !`;
  } else {
    return `Ups! score error !`;
  }
};

console.log(nilaiSiswa(89, 99));
console.log(nilaiSiswa(94, 69));
console.log(nilaiSiswa(58, 82));
console.log(nilaiSiswa(46, 82));
console.log(nilaiSiswa(31, 7));
console.log(nilaiSiswa(-7, -4));
