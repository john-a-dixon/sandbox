const err1 = new Error("I am an error");
const err2 = Error("I am also an error");

try {
  throw err1;
} catch(error) {
  console.log(error);
  console.log("In the catch.")
}

console.log(err2);

console.log("Done");