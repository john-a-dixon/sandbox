// Global Scope
const galaxy = "Milky Way"
const solarSystem = "Sol"

// Block Scope
const stellar = (general = true) => {
  let planet = "Earth";

  if(!general) {
    let planet = "Mars"
  }
  return `${galaxy} <- ${solarSystem} <- ${planet}`;
};

console.log(stellar());