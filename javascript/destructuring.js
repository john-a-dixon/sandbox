// Destructuring with arrays
let alpha = ["a", "b", "c"];
let [a, b, c] = alpha
console.log(a, b, c);

const [first] = alpha;
console.log(first);

// Destructuring with objects
const dog = {
  name: "Balto",
  breed: "Siberian Husky",
  age: 9
}

const {breed} = dog;
console.log(breed);

const {name: NAME, breed: BREED} = dog;
console.log(NAME, BREED);

// Destructuring with functions
const getBreed = ({ breed }) => console.log(breed);
getBreed(dog);

// Swapping with destructuring
let x = "Balto";
let y = "Shadow";

[x, y] = [y, x];
console.log(x, y);

// Destructuring and the ...rest property
const {k, ...theRest} = {k: "k", l: "l", u: "u"};
console.log(k, theRest);

const [q, ...after] = [1, 2, 3, 4];
console.log(q, after);