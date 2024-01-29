let defaultNumberOfGridItems = 1;
let defaultTotalGridWidth    = 900;

let defaultGridSize = defaultTotalGridWidth / defaultNumberOfGridItems;


let gridContainer = document.createElement("div");
let gridLine      = document.createElement("div");
let gridItem      = document.createElement("div");



gridItem.style.height = defaultGridSize+"px";
gridItem.style.width  = defaultGridSize+"px";


for (let i=0;i < defaultNumberOfGridItems; i++){

    let gridItem      = document.createElement("div");
    gridItem.style.height = defaultGridSize+"px";
    gridItem.style.width  = defaultGridSize+"px";
    gridItem.className    = "griditem";
    gridLine.className    = "gridline";
    gridLine.appendChild(gridItem);

};
 
 
for (let i=0;i < defaultNumberOfGridItems; i++){
   
    gridContainer.className = "gridcontainer";
    let copyGridItem = gridLine.cloneNode(true);
    gridContainer.appendChild(copyGridItem);

}


console.log(gridContainer)
/* parent.id = "container";
var child = document.createElement("div");
child.id = "data";
parent.appendChild(child); */

/* gridLine.appendChild(gridItem);

gridContainer.appendChild(gridLine);
document.body.appendChild(gridContainer);*/

document.body.appendChild(gridContainer);

