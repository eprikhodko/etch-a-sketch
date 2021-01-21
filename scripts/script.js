//select a grid-container div
let gridContainer = document.getElementById("grid-container");

//create a new div element (Create a <div> node)
let gridElement = document.createElement("div");

//  set class name
gridElement.className = "grid-element";


// append this single elements to the parent grid container div
for (let i = 0; i < 256; i++) {
    //append li element to the unordered list
    // console.log("loop is working");
    gridContainer.appendChild(gridElement.cloneNode(true));
}

// select all grid elements
let allGridElements = document.querySelectorAll('.grid-element');

allGridElements.forEach(item => {
    item.addEventListener("mouseenter", event => {
      //  add event listener
 
    console.log("click!");
    item.className = "grid-element-black";
  
    })
  })

// let gridElementTest = document.getElementById("grid-element-test");

// gridElementTest.addEventListener("mouseenter", function() {
//     console.log("click!");
//     gridElementTest.className = "grid-element-black";
//   })


//  gridContainer.appendChild(gridElement);
// gridContainer.appendChild(gridElement.cloneNode(true));

 //create a text node
//  let textNode = document.createTextNode("grid element");
 //append the text to the div element
//  gridElement.appendChild(textNode);