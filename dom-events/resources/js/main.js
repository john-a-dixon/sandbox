// Gets the relevant elements
const switcher = document.getElementById("switch");
const colorBox = document.getElementById("color");

// Event handlers


const showRGB = event => {
  const color = getComputedStyle(event.target).backgroundColor;
  event.target.innerHTML = color;
};

const hideRGB = event => {
  event.target.innerHTML = "";
};

// Event listeners
colorBox.addEventListener("mouseenter", showRGB);
colorBox.addEventListener("mouseleave", hideRGB);