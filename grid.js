let sideLength = 16;
const grid = document.querySelector("#grid");
const btn = document.querySelector("#count");

generateCanvas(sideLength);

btn.addEventListener("click", () => {
  let userNumber = +prompt("Please enter a number between 1 ~ 100.");
  if (userNumber > 100) {
    userNumber = 100;
  } else if (userNumber <= 0) {
    userNumber = 1;
  }
  sideLength = userNumber;
  grid.replaceChildren();
  generateCanvas(sideLength);
});

function generateCanvas(sideLength) {
  for (let i = 0; i < sideLength; i++) {
    const canvasLine = document.createElement("div");
    canvasLine.classList.add("line");
    for (let z = 0; z < sideLength; z++) {
      const canvas = document.createElement("div");
      canvas.classList.add("block");
      canvasLine.appendChild(canvas);
    }
    grid.appendChild(canvasLine);
  }
  const trail = document.querySelectorAll(".block");
  trail.forEach((block) => {
    block.addEventListener("mouseover", () => {
      block.style.background = createRandomColour();
    });
  });
}
// set block.style.background = 'black' for only black/white
function createRandomColour() {
    return `rgb(${randomValue()},${randomValue()},${randomValue()})`
}
function randomValue() {
    return Math.floor(Math.random() * 255) + 1;
}
