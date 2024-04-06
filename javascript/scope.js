// Global Scope
const galaxy = "Milky Way"
const solarSystem = "Sol"

// Block Scope
const stellar = (general = true) => {
  let planet = "Earth";
  return "Test";
};

console.log(stellar());