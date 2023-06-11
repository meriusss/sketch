const sketchArea = document.querySelector('.sketchArea');
const buttonContainer = document.querySelector('.buttonContainer')
const startButton = document.querySelector('#startButton');
let color = document.querySelector("#color");
squareArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

function getSquareNumber(){
    
    let squares = document.querySelector("#squaresSelector").value
    if(squareArray.includes(parseInt(squares))){
        console.log(parseInt(squares));
        return parseInt(squares);
    }
    else {
        alert("The number of squares must be between 1 and 16!");
        return 0;
    }
    
};

function updateGridTemplateColumns(number){
    
    sketchArea.style.gridTemplateColumns = "";
    for(let i = 0; i < number; i++){
        sketchArea.style.gridTemplateColumns += " auto";
    }
    console.log(sketchArea.style.gridTemplateColumns);
};


function generateDrawableSquares(number){
    
    console.log("ok");
    removeAllChildNodes(sketchArea);
    for(let i = 0; i < Math.pow(parseInt(number), 2); i++){
        const square = document.createElement("div");
        square.classList.add("square");
        sketchArea.appendChild(square);
        drawSquare(square);}
};

function drawSquare(square){
    
    square.addEventListener('mousedown', (e)=>{
        e.preventDefault();
        square.style.backgroundColor = color.value;
        });

    square.addEventListener('contextmenu', (e)=>{
        e.preventDefault();
        square.style.backgroundColor = "white";
        });
}

function removeAllChildNodes(parent) {
    
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}



startButton.addEventListener('click', (e)=>{
    
    squares = getSquareNumber();
    updateGridTemplateColumns(squares);
    generateDrawableSquares(squares);

});