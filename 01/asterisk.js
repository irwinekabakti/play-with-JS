/*
// LV 1
let rows1 = 5;

for (let i = 0; i < rows1; i++) {
  console.log("*");
}

/** 
=== Expected Output ===
 * 
 * 
 * 
 * 
 * 
=== Expected Output ===
 */

/*
// LV 2
let rows2 = 5;

for (let i = 0; i < rows2; i++) {
  let line = "";
  for (let j = 0; j < rows2; j++) {
    line += "*";
  }
  console.log(line);
}

/** 
=== Expected Output ===
 ******
 ****** 
 ****** 
 ****** 
 ****** 
=== Expected Output ===
 */

/*
// LV 3
let rows3 = 5;

for (let i = 0; i < rows3; i++) {
  let line = "";
  for (let j = rows3 - i; j <= rows3; j++) {
    line += "*";
  }
  console.log(line);
}

/** 
=== Expected Output ===
 *
 ** 
 *** 
 ***** 
 ****** 
=== Expected Output ===
 */

/*
let rows4 = 5;

for (let i = 0; i < rows4; i++) {
  let line = "";
  for (let j = rows4; j > i; j--) {
    line += "*";
  }
  console.log(line);
}

/** 
=== Expected Output ===
 ******
 *****
 ****
 **
 *
=== Expected Output ===
 */
