//-------------------------------------------------------------------------Create an array
const numbers = [];
for(let i = 0; i < 5; i++) {
  numbers.push(Math.round(Math.random() * 100));
}

//-------------------------------------------------------------------------FOR EACH
numbers.forEach(number => number + 10);
console.log(numbers);

//-------------------------------------------------------------------------MAP
const odds = numbers.map(number => {
  if(number % 2 === 0) {
    return number + 1;
  } else {
    return number;
  }
});
console.log(odds);
//-------------------------------------------------------------------------FILTER
const fives = numbers.filter(number => !(number % 5))
console.log(fives);

//-------------------------------------------------------------------------FIND INDEX
let digit = numbers.findIndex(number => number < 10);
console.log(digit);

//-------------------------------------------------------------------------FIND
digit = numbers.find(number => number < 10);
console.log(digit);

//-------------------------------------------------------------------------REDUCE
const sum = numbers.reduce((accumulator, currentVal) => accumulator + currentVal);
console.log(sum);

//-------------------------------------------------------------------------OTHER ITERATOR
