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

const randomNumber = number => Math.round(Math.random() * number)
const changeColor = event => {
  console.log(randomNumber(255));
};

// Event listeners
colorBox.addEventListener("mouseenter", showRGB);
colorBox.addEventListener("mouseleave", hideRGB);
switcher.addEventListener("click", changeColor);