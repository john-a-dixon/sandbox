// Not used for TDD example
const altCase = phrase => {
  let altString = ""
  let capIt = true;
  for(let character of phrase) {
    if(capIt) {
      altString += character.toUpperCase();
    } else {
      altString += character.toLowerCase();
    }
    capIt = !capIt;
  }

  return altString;
};

// Used for TDD example
const invertCase = phrase => {
  inverted = ""
  for(let character of phrase) {
    
  }
}

module.exports = { altCase, invertCase };