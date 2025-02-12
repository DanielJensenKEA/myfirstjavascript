let inp = document.querySelector(".inpColor");
console.log(inp);

let pbCol = document.querySelector(".pbSetColor");
console.log(pbCol);

pbCol.textContent="Tryk mig for set color";

let bdy = document.querySelector("body");
console.log(bdy);




let inpColorValue = document.querySelector(".inpColorValue");
const inpColorPicker = document.getElementById("inpColorPicker")

const pTags = document.getElementsByTagName('p')
console.log(pTags)

const pArray = Array.from(pTags);
pArray.forEach(increaseFont)

pbCol.addEventListener('click', setBackgroundColor)
document.addEventListener('keyup', setBackgroundColor)
inpColorPicker.addEventListener('input', useColorPicker)

function increaseFont(element) {
    let fontSize = element.style.fontSize;
    console.log(fontSize)
    element.style.fontSize = 10 + 'px';
    fontSize = element.style.fontSize;
    console.log(fontSize);
}

function useColorPicker() {
    let col = inpColorPicker.value;
    console.log(col);
    bdy.style.background = col;
    pbCol.style.color = col;
    inpColorValue.value = bdy.style.backgroundColor
}

function setBackgroundColor() {
    let col = inp.value;
    console.log(col);
    bdy.style.background = col;
    pbCol.style.color = col;
    inpColorValue.value = bdy.style.backgroundColor
}