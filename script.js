// what I learned. I need something like this. maybe.
'use strict';
// Ok. So how it is all work?

// select reset button
const buttonReset = document.getElementById("button-reset");
// select change size button
const buttonSize = document.getElementById("button-size");
// select a grid-container div
const gridContainer = document.getElementById("grid-container");
// create a new div element (Create a <div> node)
const gridElement = document.createElement("div");
//set class name for this freshly created element
gridElement.className = "grid-element";
// select all grid elements by class-name
const gridElements = document.querySelectorAll('.grid-element');

// create default grid layout which is 16x16 grid-elements.
// Grid size defines by two values. First one exist in styles.css file. It is grid-template-columns: repeat(16, 1fr); property of .grid-container class. Number of 16 can vary and defines amount of grid columns. Number of rows defines by the amount of grid-elements. To make a square grid with square grid-elements, you need to set number of columns in css grid first, then you need to square this number and create corresponding number of grid-elements to fill this grid up.
// for example, if number of grid columns is 16, you need to create a 16x16 = 256 grid elements. FOR Loop will help us to do that. Below you can find a function that will make a default grid for us.
const createDefaultGrid = () => {
  // append new grid element to the parent grid container div for 256 times
  for (let i = 0; i < 256; i++) {
  //append gridElement to the gridContainer
  gridContainer.appendChild(gridElement.cloneNode(true));
  }
  // select all grid elements by class-name
  const gridDefaultElements = document.querySelectorAll('.grid-element');
// add event listener to every element of grid which changing grid-element class to grid-element-black class.
// after we swipe mouse cursor over grid element it will become black color.
// item word can be replaced to anything else
  return gridDefaultElements.forEach(item => {
  item.addEventListener("mouseenter", event => item.className = "grid-element-black");
})
}

// create default grid which is 16x16 divs
createDefaultGrid();

// ask user for a new grid size
const getNewGridSize = () => {
  // declare newGridSize variable
  let newGridSize = parseInt(prompt("How many squares per side to make the new grid?"));
  if (isNaN(newGridSize)) {
    // console.log("not ok");
    newGridSize = parseInt(prompt("Please enter a number between 1 and 50"));
    return newGridSize;
  } else {
    // console.log("we got proper value from prompt, moving on");
    return newGridSize;
  }
}

const changeGridSize = () => {
  let newGridSize = getNewGridSize();
  if (newGridSize === null || newGridSize === "" || isNaN(newGridSize)) {
    return console.log("its null or empty string, or it is not a number, do nothing");
  } else if (isNaN(newGridSize) === false) {
    // remove old elements
    removeAllGridElements();
    // generate new grid
   return generateNewGrid(newGridSize);    
  }
}

const removeAllGridElements = () => {
  // remove old elements
  document.querySelectorAll('.grid-element').forEach(e => e.parentNode.removeChild(e));
  document.querySelectorAll('.grid-element-black').forEach(e => e.parentNode.removeChild(e));
}

const generateNewGrid = (newGridSize) => {
    // generate new grid
    for (let i = 0; i < newGridSize**2; i++) {
      //append gridElement to the gridContainer
      gridContainer.appendChild(gridElement.cloneNode(true));
    }
    changeGridColumns(newGridSize);
    const userGridElements = document.querySelectorAll(".grid-element");
    return userGridElements.forEach(item => {
      item.addEventListener("mouseenter", event => {
      item.className = "grid-element-black";
   });
 })
}

//////////////////////////////////////////// the old way
// // modify grid columns property
// function changeGridColumns() {
//   // change grid columns depending on user input
//   return gridContainer.style.gridTemplateColumns = `repeat(${newGridSize}, 1fr)`;
// } 

///////////////////////////////////// arrow function, v1
// modify grid columns property
const changeGridColumns = (newGridSize) => {
  // change grid columns depending on user input
  return gridContainer.style.gridTemplateColumns = `repeat(${newGridSize}, 1fr)`;
}

// /////////////////////////////////////// arrow function, v2, one line
// // modify grid columns property
// const changeGridColumns = () => gridContainer.style.gridTemplateColumns = `repeat(${newGridSize}, 1fr)`;
//   // change grid columns depending on user input



// add event listener to button change size
buttonSize.addEventListener("click", changeGridSize);

const removeBlackGridElements = () => {
  const markedElements = document.querySelectorAll('.grid-element-black');
  return markedElements.forEach(item => item.className = "grid-element");
}

// add event listener to button reset
// buttonReset.addEventListener("click", event => removeBlackGridElements());
//OR we can write this event that way, and this called a CALLBACK FUNCTION:
buttonReset.addEventListener("click", removeBlackGridElements);





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