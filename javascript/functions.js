//-------------------------------------------------------------------------FUNCTION DECLARATIONS

// Standard function declaration
function funcInfo(x) {
  const info = `Parameter = x\nArgument = "${x}"\nIdentifier = funcInfo`;
  console.log(info);
}

// Function expression
const addTwo = function(addend) {
  return addend + 2;
}

//-------------------------------------------------------------------------FUNCTION CALLS
funcInfo("Arg")
console.log(addTwo(9));