const gameBoard = document.querySelector("#gameboard");
const infoDisplay = document.querySelector("#info");

const startCells = ["", "", "", "", "", "", "", "", ""];

let go = "circle";
infoDisplay.textContent = "Circle plays first";

function createBoard() {
  startCells.forEach((_cell, index) => {
    const cellElement = document.createElement("div");
    cellElement.classList.add("square");
    cellElement.id = index;
    cellElement.addEventListener("click", addGo);
    gameBoard.append(cellElement);
  });
}

createBoard();

function addGo(e) {
  //   console.log(e.target);
  const goDisplay = document.createElement("div");
  goDisplay.classList.add(go);
  console.log("vlaue of go::", go);
  e.target.append(goDisplay);
  // changing turns here
  go = go == "circle" ? "cross" : "circle";
  infoDisplay.textContent = "it is now" + go + "'s turn";
  e.target.removeEventListener("click", addGo);
}
