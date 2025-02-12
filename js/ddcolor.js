const colArray = ["red",
    "green",
    "yellow",
    "blue",
    "orange"];


const pbFillDropDown = document.getElementById("pbFillDropdown");
const ddColor = document.getElementById("ddColor");
const bdy = document.querySelector("body");


function addColors() {
    colArray.forEach(fillDropdown)
}

function fillDropdown(item) {
    const el = document.createElement("option");
    el.textContent = item;
    ddColor.appendChild(el);
}

pbFillDropDown.addEventListener("click", addColors)
ddColor.addEventListener("change", dropdownSetColor)
pbFillDropDown.addEventListener('click', setInitialColorWhenFilled)

function dropdownSetColor() {
    let col = ddColor.value;
    bdy.style.background = col;
}

function setInitialColorWhenFilled() {
    bdy.style.background = "red";
}