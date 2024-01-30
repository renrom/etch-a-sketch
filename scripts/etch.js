// initial gridSize and Width
let gridSize = 16;
let gridWidth = 900;

createGrid(gridSize);

resetButton = document.querySelector(".resetbutton");
gridsizeButton = document.querySelector(".gridsizebutton")

resetButton.addEventListener("click", function () {
    resetGrid();
    createGrid(gridSize);
});

gridsizeButton.addEventListener("click", function () {
        newGridSizePrompt = prompt("Please enter desires gridsize");
        newGridSize = parseInt(newGridSizePrompt);

        if (!newGridSize) {
            alert ("not a number");
            return;
        };

        if (newGridSize > 100 || newGridSize < 1 ) {
            alert (`Sorry but ${newGridSize} is not in my safe boundary`);
            return;
        }
        console.log(newGridSize);

        resetGrid();
        createGrid(newGridSize);

});


function createGrid(gridSize) {

    gridContainer = document.querySelector(".container");
    gridItemSize = gridWidth / gridSize;

    // create gridline depending on gridSize
    for (i = 0; i < gridSize; i++) {
        GridLine = document.createElement("div");
        GridLine.className = "gridline";

        gridContainer.appendChild(GridLine);

        for (j = 0; j < gridSize; j++) {
            newGridItem = document.createElement("div");
            newGridItem.className = "griditem";

            newGridItem.style.width = gridItemSize + "px";
            newGridItem.style.height = gridItemSize + "px";

            newGridItem.style.borderLeft = "1px solid black";
            newGridItem.style.borderTop = "1px solid black";

            // Add a nice afterglow effect
            newGridItem.style.transition = "background 1s";


            // Add borderline to the right if the last item to the right
            if (j === gridSize - 1) {
                newGridItem.style.borderRight = "1px solid black";
            }

            // Add borderline to the bottom if the last line is reached
            if (i === gridSize - 1) {
                newGridItem.style.borderBottom = "1px solid black";
            }

            // Give the corner items a nice round corner
            if (i === 0 && j === 0) {
                newGridItem.style.borderTopLeftRadius = "20%";
            };

            if (i === gridSize - 1 && j === 0) {
                newGridItem.style.borderBottomLeftRadius = "20%";
            };

            if (i === 0 && j === gridSize - 1) {
                newGridItem.style.borderTopRightRadius = "20%";
            };
            if (i === gridSize - 1 && j === gridSize - 1) {
                newGridItem.style.borderBottomRightRadius = "20%";
            };

            GridLine.appendChild(newGridItem);
        };
    };

    // on the new griditems, add 2 eventhandlers, one for entering, one for leaving
    gridAllItems = document.querySelectorAll(".griditem");
    gridAllItems.forEach(gridItem => {
        gridItem.addEventListener("mouseenter", () => {
            gridItem.style.backgroundColor = "black";
            

        });
        gridItem.addEventListener("mouseleave", () => {
            
        });
    });
};

function resetGrid() {
    allGridLines = document.querySelectorAll(".gridline");
    allGridLines.forEach(gridLine => {
        gridLine.remove();
    });

};


