let cells = document.querySelectorAll(".row>div");
let choice = ["O","X", "O", "X", "O", "X", "O", "X", "O", "X"];

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", cellClicked);
    cells[i].addEventListener("click", checkWin); 
    cells[i].addEventListener("click", checkDraw); 


   
//Check For Draw
function checkDraw(){
        if (cells[i].textContent &&
            cells[0].textContent && 
            cells[1].textContent && 
            cells[2].textContent &&
            cells[3].textContent && 
            cells[4].textContent && 
            cells[5].textContent &&
            cells[6].textContent && 
            cells[7].textContent &&
            cells[8].textContent &&
            cells[i].textContent 
            ) {
            draw()
        }}};

//Toggle Player
function cellClicked() {
    event.target.textContent = choice.pop()
};

//Check Cells for Winner 
  function checkWin() {
    if (cells[0].textContent === "X" && 
        cells[1].textContent === "X" && 
        cells[2].textContent === "X") {
        winnerX();

        }else if (cells[3].textContent === "X" && 
            cells[4].textContent === "X" && 
            cells[5].textContent === "X") {
            winnerX();



        }else if (cells[6].textContent === "X" &&
            cells[7].textContent === "X" &&
            cells[8].textContent === "X") {
            winnerX();

        

        }else if (cells[0].textContent=== "X" && 
            cells[3].textContent=== "X" && 
            cells[6].textContent === "X") {
            winnerX();

        

    } else if (cells[1].textContent=== "X" && 
            cells[4].textContent=== "X" && 
            cells[7].textContent === "X") {
            winnerX();


    } else if (cells[2].textContent=== "X" && 
            cells[5].textContent=== "X" && 
            cells[8].textContent === "X") {
            winnerX();

        

    }else if (cells[0].textContent=== "X" && 
            cells[4].textContent=== "X" && 
            cells[8].textContent === "X") {
            winnerX();

        

    } else if (cells[2].textContent === "X" && 
            cells[4].textContent === "X" && 
            cells[6].textContent === "X") {
            winnerX();

        

    }else if (cells[0].textContent === "O" && 
            cells[1].textContent === "O" &&
            cells[2].textContent === "O") {
            winnerO();


    }else if (cells[3].textContent === "O" &&
            cells[4].textContent === "O" && 
            cells[5].textContent === "O") {
            winnerO();


    } else if (cells[6].textContent === "O" &&
            cells[7].textContent === "O"&&
            cells[8].textContent === "O") {
            winnerO();

    } else if (cells[0].textContent=== "O" && 
            cells[3].textContent=== "O" && 
            cells[6].textContent === "O") {
            winnerO();


    } else if (cells[1].textContent=== "O" && 
            cells[4].textContent=== "O" && 
            cells[7].textContent === "O") {
            winnerO();

    } else if (cells[2].textContent=== "O" && 
            cells[5].textContent=== "O" && 
            cells[8].textContent === "O") {
            winnerO();


    }else if (cells[0].textContent=== "O" && 
            cells[4].textContent=== "O" && 
            cells[8].textContent === "O") {
            winnerO();


    } else if (cells[2].textContent === "O" && 
            cells[4].textContent === "O" && 
            cells[6].textContent === "O") {
            winnerO();

    }
};

// reset
function reset(){
 location.reload()
}


function winnerO(){
    cells[0].removeEventListener("click",cellClicked)
    cells[1].removeEventListener("click",cellClicked)
    cells[2].removeEventListener("click",cellClicked)
    cells[3].removeEventListener("click",cellClicked)
    cells[4].removeEventListener("click",cellClicked)
    cells[5].removeEventListener("click",cellClicked)
    cells[6].removeEventListener("click",cellClicked)
    cells[7].removeEventListener("click",cellClicked)
    cells[8].removeEventListener("click",cellClicked)
    alert("Congragulations PlayerO You've Won!!")
    cells[0].addEventListener("click",reset)
    cells[1].addEventListener("click",reset)
    cells[2].addEventListener("click",reset)
    cells[3].addEventListener("click",reset)
    cells[4].addEventListener("click",reset)
    cells[5].addEventListener("click",reset)
    cells[6].addEventListener("click",reset)
    cells[7].addEventListener("click",reset)
    cells[8].addEventListener("click",reset)

}

function winnerX(){
        cells[0].removeEventListener("click",cellClicked)
        cells[1].removeEventListener("click",cellClicked)
        cells[2].removeEventListener("click",cellClicked)
        cells[3].removeEventListener("click",cellClicked)
        cells[4].removeEventListener("click",cellClicked)
        cells[5].removeEventListener("click",cellClicked)
        cells[6].removeEventListener("click",cellClicked)
        cells[7].removeEventListener("click",cellClicked)
        cells[8].removeEventListener("click",cellClicked)
        alert("Congragulations PlayerX You've Won!!")
        cells[0].addEventListener("click",reset)
        cells[1].addEventListener("click",reset)
        cells[2].addEventListener("click",reset)
        cells[3].addEventListener("click",reset)
        cells[4].addEventListener("click",reset)
        cells[5].addEventListener("click",reset)
        cells[6].addEventListener("click",reset)
        cells[7].addEventListener("click",reset)
        cells[8].addEventListener("click",reset)
}

function draw()
{
        cells[0].removeEventListener("click",cellClicked)
        cells[1].removeEventListener("click",cellClicked)
        cells[2].removeEventListener("click",cellClicked)
        cells[3].removeEventListener("click",cellClicked)
        cells[4].removeEventListener("click",cellClicked)
        cells[5].removeEventListener("click",cellClicked)
        cells[6].removeEventListener("click",cellClicked)
        cells[7].removeEventListener("click",cellClicked)
        cells[8].removeEventListener("click",cellClicked)
        alert("Draw")
        cells[0].addEventListener("click",reset)
        cells[1].addEventListener("click",reset)
        cells[2].addEventListener("click",reset)
        cells[3].addEventListener("click",reset)
        cells[4].addEventListener("click",reset)
        cells[5].addEventListener("click",reset)
        cells[6].addEventListener("click",reset)
        cells[7].addEventListener("click",reset)
        cells[8].addEventListener("click",reset)
}









