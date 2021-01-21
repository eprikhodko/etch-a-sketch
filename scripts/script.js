 //select a grid-container div
 let gridContainer = document.getElementById("grid-container");

//create a new div element (Create a <div> node)
 let gridElement = document.createElement("div");
//  set class name
 gridElement.className = "grid-element";
 //create a text node
//  let textNode = document.createTextNode("grid element");
 //append the text to the div element
//  gridElement.appendChild(textNode);


//  gridContainer.appendChild(gridElement);
// gridContainer.appendChild(gridElement.cloneNode(true));


for (let i = 0; i < 256; i++) {
    //append li element to the unordered list
    console.log("loop is working");
    gridContainer.appendChild(gridElement.cloneNode(true));
}