const gridContainer = document.querySelector(".container");
const gridCell = document.querySelector(".square");
const button = document.querySelector(".btn");

let gridSize = 16;

function createGrid(gridSize) {
    for (let i = 1; i <= gridSize**2; i++) {
		let square = document.createElement("div");
		square.classList.add("square");
		gridContainer.appendChild(square);
    }
	gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 2fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 2fr)`;
}

gridContainer.addEventListener("mouseover", (event) => {
	event.target.style.backgroundColor = "orange";
})

button.addEventListener("click", () => {
	while (gridContainer.hasChildNodes()) {
		gridContainer.removeChild(gridContainer.firstChild);
	}
	gridSize = prompt("Choose the size of the new gridCell. Enter side lenght")
	createGrid(gridSize)
  });

createGrid(16)