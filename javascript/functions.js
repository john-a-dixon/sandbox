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
const functionWithAReallyLongName = () => console.log("I have a really long name.");
functionWithAReallyLongName();
const shrt = functionWithAReallyLongName;
shrt();
console.log(shrt.name);
//-------------------------------------------------------------------------FUNCTIONS AS PARAMETERS (HIGHER ORDER FUNCTIONS)