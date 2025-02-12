const colArray2 = [["red","#ff0000"],
    ["green","#00ff00"],
    ["yellow","#ffff00"],
    ["purple","#1f35a9"]];

const colorObjects = [{"name" : "reddish", "id" : "#ff0000"},
    {"name" : "green", "id" : "#00ff00"},
    {"name" : "yellow", "id" : "#ffff00"},
    {"name" : "purple", "id" : "#1f35a9"}]

const pbFillDropDown2 = document.getElementById("pbFillDropdown2");
const ddColor2 = document.getElementById("ddColor2");

function fillDropdownObj (item) {
    const el = document.createElement("option");
    el.textContent = item.name;
    el.value = item.id;
    ddColor2.appendChild(el);
}


function addColors2() {
    /*
    colArray2.forEach(fillDropdownObj)
     */
    colorObjects.forEach(fillDropdownObj)
}
/*
function fillDropdown2(item) {
    const el = document.createElement("option");
    el.textContent = item[0];
    el.value = item[1];
    ddColor2.appendChild(el);
}

 */
function setBackgroundColor2() {
    const selindex = ddColor2.selectedIndex;
    const selectedoption = ddColor2.options[selindex];
    const color = selectedoption.value;
    bdy.style.backgroundColor = color;
}

pbFillDropDown2.addEventListener("click", addColors2);
ddColor2.addEventListener("change", setBackgroundColor2)
