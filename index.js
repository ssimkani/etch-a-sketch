const container = document.querySelector("#container");
const btnEraser = document.querySelector("#eraser");
const btnClear = document.querySelector("#clear");
const btnDraw = document.querySelector("#draw");
const changeGridSize = document.querySelector("#change-grid");
const enterGridSize = document.querySelector("#enter-grid-size");

for (let row = 0; row < 16; row++) {
  for (let col = 0; col < 16; col++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("grid-boxes");
    container.appendChild(newDiv);

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

    enterGridSize.addEventListener("click", () => {
      const inputValue = changeGridSize.value;
    });
  }
}
