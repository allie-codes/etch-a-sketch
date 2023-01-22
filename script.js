const DEFAULT_GRID_SIZE = 16;
let gridOn = true;
let eraseModeOn = false;

let currentSize = DEFAULT_GRID_SIZE;
let drawingContainer = document.querySelector(".drawing-container");
let slider = document.querySelector(".slider");
let gridButton = document.querySelector(".grid-toggle");
let clearCanvasButton = document.querySelector(".clear-canvas");
let modeToggleButton = document.querySelector(".mode-toggle");

function createBoard(size) {
  drawingContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  drawingContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  for (let i = 0; i < size * size; i++) {
    let singleSquare = document.createElement("div");
    singleSquare.classList.add("square");
    singleSquare.addEventListener("mouseenter", () => onChange(singleSquare));
    drawingContainer.appendChild(singleSquare);
  }
}

function onChange(singleSquare) {
  if (!eraseModeOn) {
    singleSquare.classList.add("filled");
  } else {
    singleSquare.classList.remove("filled");
  }
}

function sliderChange() {
  console.log(slider.value);
  currentSize = slider.value;
  while (drawingContainer.firstChild) {
    drawingContainer.removeChild(drawingContainer.firstChild);
  }
  createBoard(currentSize);
}

function toggleGrid() {
  let allSquares = document.querySelectorAll(".square");
  for (square of allSquares) {
    gridOn
      ? square.classList.add("grid-on")
      : square.classList.remove("grid-on");
  }
  gridOn = !gridOn;
}

function clearCanvas() {
  let allSquares = document.querySelectorAll(".square");
  for (square of allSquares) {
    square.classList.remove("filled");
  }
}

// function affectAllSquares(){
//   let allSquares = document.querySelectorAll(".square");
//   for (square of allSquares) {
//     square.classList.remove("filled");
//   }
// }

function modeToggle() {
  if (eraseModeOn) {
    modeToggleButton.textContent = "draw mode";
    console.log(modeToggleButton.textContent);
  } else {
    modeToggleButton.textContent = "erase mode";
    console.log(modeToggleButton.textContent);
  }
  eraseModeOn = !eraseModeOn;
}

function init() {
  slider.addEventListener("mouseup", sliderChange);
  gridButton.addEventListener("click", toggleGrid);
  clearCanvasButton.addEventListener("click", clearCanvas);
  modeToggleButton.addEventListener("click", modeToggle);
  createBoard(currentSize);
  toggleGrid();
}

init();
