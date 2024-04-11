// Standard for-loop
for(let i = 0; i < 10; i++) {
  console.log(i + 1);
}

// Looping through arrays
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
for(let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// Nested loops
for(let i = 0; i <= 3; i++) {
  for(let j = 0; j <= 3; j++) {
    console.log(i * j);
  }
}

// While loops
let i = 10;
while(i > 0) {
  console.log(i)
  i--;
}

// Do-while loops
i = 5
do {
  console.log(i);
  i--;
} while (i > 0);

// Break keyword
let bob = "Robert";
for(let i = 0; i < bob.length; i++) {
  if(bob[i] === "e") {
    break;
  }
  console.log(bob[i]);
}