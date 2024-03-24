const container = document.querySelector("#container");
btnEraser = document.querySelector("#eraser")
btnClear = document.querySelector("#clear")

for (let row = 0; row < 16; row++) {
  for (let col = 0; col < 16; col++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("grid-boxes");
    container.appendChild(newDiv);
    newDiv.addEventListener("mouseover", () => {
      newDiv.style.backgroundColor = "blue";
    });

  }
}
