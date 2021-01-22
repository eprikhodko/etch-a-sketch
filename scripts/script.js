// what I learned. I need something like this

// select button reset
let buttonReset = document.getElementById("button-reset");

//select a grid-container div
let gridContainer = document.getElementById("grid-container");

//create a new div element (Create a <div> node)
let gridElement = document.createElement("div");

//  set class name
gridElement.className = "grid-element";

// select grid container and set default columns property
// gridContainer.style.gridTemplateColumns = "repeat(8, 1fr)";



// append this element to the parent grid container div X amount of times
for (let i = 0; i < 256; i++) {
    //append gridElement to the gridContainer
    gridContainer.appendChild(gridElement.cloneNode(true));
}

// select all grid elements by class-name
let gridElements = document.querySelectorAll('.grid-element');

// add event listener to every element of grid
// item word can be replaced to anything else
gridElements.forEach(item => {
    item.addEventListener("mouseenter", event => {
    item.className = "grid-element-black";
    console.log("working");
    });
    
})



// set default grid size
let newGridSize = 16;

// ask user for a new grid size
function getNewGridSize() {
  return newGridSize = prompt("How many squares per side to make the new grid?")
}

// let newGridSize = () => prompt("How many squares per side to make the new grid?");

// modify grid columns property
function changeGridColumns() {
  // console.log("hello");
  // change grid columns depending on user input
  return gridContainer.style.gridTemplateColumns = `repeat(${newGridSize}, 1fr)`;
}

// add event listener to button reset and clear the grid
buttonReset.addEventListener("click", event => {
  gridElements.forEach(item => {item.className = "grid-element";});
  // get new grid size
  getNewGridSize();
  // remove old elements
  document.querySelectorAll('.grid-element').forEach(e => e.parentNode.removeChild(e));
  document.querySelectorAll('.grid-element-black').forEach(e => e.parentNode.removeChild(e));

// generate new grid
  for (let i = 0; i < newGridSize*newGridSize; i++) {
    //append gridElement to the gridContainer
    gridContainer.appendChild(gridElement.cloneNode(true));
  }
  changeGridColumns();
  let userGridElements = document.querySelectorAll(".grid-element");
  userGridElements.forEach(item => {
    item.addEventListener("mouseenter", event => {
    item.className = "grid-element-black";
    console.log("working");
    });
    
})
}
)

// we can also write it like this:
// looks like we need event word in arrow function just for proper syntax
// buttonReset.addEventListener("click", function() {
//   console.log("click");
// })

//   gridElements.forEach(function (item) {
//     item.addEventListener("mouseenter", event => {
//     item.className = "grid-element-black";
//         })
//   })

// gridElements.forEach(function (item) {
//     item.addEventListener("mouseenter", function (event) {
//     item.className = "grid-element-black";
//         })
//   })

//  gridContainer.appendChild(gridElement);
// gridContainer.appendChild(gridElement.cloneNode(true));

 //create a text node
//  let textNode = document.createTextNode("grid element");
 //append the text to the div element
//  gridElement.appendChild(textNode);