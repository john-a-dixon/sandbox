// Global Scope
const galaxy = "Milky Way"
const solarSystem = "Sol"

// Block Scope
const stellar = (general = true) => {
  let planet = "Earth";

  if(!general) {
    let planet = "Mars"
    console.log(planet);
  }
  return `${galaxy} <- ${solarSystem} <- ${planet}`;
};

console.log(stellar(false));
console.log(stellar());