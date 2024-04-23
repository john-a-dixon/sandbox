const allCaps = phrase => phrase.toUpperCase();

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

console.log(altCase("LOL"));