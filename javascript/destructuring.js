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