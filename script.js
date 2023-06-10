const sketchArea = document.querySelector('.sketchArea');
const buttonContainer = document.querySelector('.buttonContainer')
const startButton = document.querySelector('#startButton');
let color = document.querySelector("#color");


function generateSquares(){
    let squares = 256;
    for(let i = 0; i < squares; i++){
        const square = document.createElement("div");
        square.classList.add("square");
        square.addEventListener('mousedown', (e)=>{
            e.preventDefault();
            square.style.backgroundColor = color.value;
            });
    
        square.addEventListener('contextmenu', (e)=>{
            e.preventDefault();
            square.style.backgroundColor = "white";
            });        
        
            sketchArea.appendChild(square);};
}

function addResetButton(){
    const squares = document.querySelectorAll(".square")
    const resetButton = document.createElement("button");
    resetButton.textContent = "Reset";
    resetButton.classList.add("button");
    resetButton.addEventListener('click', (e)=> {
        squares.forEach(function(square) {
            square.style.backgroundColor = "white";
        })
})
    buttonContainer.appendChild(resetButton);
};




startButton.addEventListener('click', (e)=>{
    
    generateSquares();
    addResetButton();
    startButton.remove();

    

});