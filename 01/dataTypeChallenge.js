const dataType = (input) => {
  if (!input && typeof input !== "boolean") {
    return `Invalid input`;
  } else if (typeof input === "string") {
    return `username ${input}`;
  } else if (typeof input === "number") {
    return `age ${input}`;
  } else {
    if (!input) {
      return `cannot proceed without agreement`;
    } else {
      return `thank you for agreeing`;
    }
  }
};

console.log(dataType("Lakaka"));
console.log(dataType(82));
console.log(dataType(0));
console.log(dataType("0"));
console.log(dataType(true));
