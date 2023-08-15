let colorTag = document.getElementById("color");
let background = document.getElementById("body");
const colors = [
  "#f0f0f0",
  "blue",
  "red",
  "green",
  "#000",
  "purple",
  "yellow",
  "grey",
];

function changeColor() {
  newColor = colors[randomNumber()];
  console.log(newColor);
  newTag = colorTag.innerText = newColor;
  newbackround = background.style.backgroundColor = newColor;
}


function randomNumber() {
  return Math.floor(Math.random() * colors.length);
}
