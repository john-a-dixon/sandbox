// Gets the relevant elements
const switcher = document.getElementById("switch");
const colorBox = document.getElementById("color");

// Event handlers


const showRGB = event => {
  const color = getComputedStyle(event.target).color;
  event.target.innerHTML = color;
};

// Event listeners
colorBox.addEventListener("mouseenter", showRGB);