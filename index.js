const container = document.querySelector("#container");

for (let row = 0; row < 16; row++) {
  for (let col = 0; col < 16; col++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("grid-boxes");
    container.appendChild(newDiv);
  }
}
