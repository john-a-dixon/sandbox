//-------------------------------------------------------------------------FUNCTION DECLARATIONS

// Standard function declaration
function funcInfo(x) {
  const info = `Parameter = x\nArgument = "${x}"\nIdentifier = funcInfo\n`;
  console.log(info);
}

// Function expression
const addTwo = function(addend) {
  return addend + 2;
}

// Arrow function expression
const isEven = number => number % 0 ? true : false;

//-------------------------------------------------------------------------FUNCTION CALLS
funcInfo("Arg")
console.log(addTwo(9));
console.log(isEven(9));

//-------------------------------------------------------------------------FUNCTIONS AS DATA


//-------------------------------------------------------------------------FUNCTIONS AS PARAMETERS (HIGHER ORDER FUNCTIONS)