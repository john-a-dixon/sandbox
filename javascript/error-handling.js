const err1 = new Error("I am an error");
const err2 = Error("I am also an error");


throw err1;



console.log(err1);
console.log(err2);