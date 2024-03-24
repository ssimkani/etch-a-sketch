const container = document.querySelector("#container");
const btnEraser = document.querySelector("#eraser");
const btnClear = document.querySelector("#clear");
const btnDraw = document.querySelector("#draw");
const changeGridSize = document.querySelector("#change-grid");
const enterGridSize = document.querySelector("#enter-grid-size");

function createGrid(inputValue) {
  container.textContent = "";

  for (let row = 0; row < inputValue; row++) {
    for (let col = 0; col < inputValue; col++) {
      const newDiv = document.createElement("div");
      newDiv.classList.add("grid-boxes");
      container.appendChild(newDiv);

      newDiv.style.cssText = `width: calc(800px / ${inputValue}); height: calc(800px / ${inputValue});`;

      newDiv.addEventListener("mouseover", () => {
        newDiv.style.backgroundColor = "blue";
      });

      btnEraser.addEventListener("click", () => {
        newDiv.addEventListener("mouseover", () => {
          newDiv.style.backgroundColor = "white";
        });
      });

      btnDraw.addEventListener("click", () => {
        newDiv.addEventListener("mouseover", () => {
          newDiv.style.backgroundColor = "blue";
        });
      });

      btnClear.addEventListener("click", () => {
        newDiv.style.backgroundColor = "white";
      });
    }
  }
}
createGrid(16);

enterGridSize.addEventListener("click", () => {
  let inputValue = parseInt(changeGridSize.value);
  createGrid(inputValue);
});
