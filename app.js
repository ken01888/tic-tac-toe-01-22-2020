let cells = document.querySelectorAll(".row>div");
let choice = ["X", "O", "X", "O", "X", "O", "X", "O", "X"];

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
function resetO(){
alert("Congragulations PlayerO You've Won!!")
location.reload()
}

function resetX(){
    alert("Congragulations PlayerX You've Won!!")
    location.reload()
    }

function resetDraw(){
        alert("We have a draw!")
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
    cells[0].addEventListener("click",resetO)
    cells[1].addEventListener("click",resetO)
    cells[2].addEventListener("click",resetO)
    cells[3].addEventListener("click",resetO)
    cells[4].addEventListener("click",resetO)
    cells[5].addEventListener("click",resetO)
    cells[6].addEventListener("click",resetO)
    cells[7].addEventListener("click",resetO)
    cells[8].addEventListener("click",resetO)


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
        cells[0].addEventListener("click",resetX)
        cells[1].addEventListener("click",resetX)
        cells[2].addEventListener("click",resetX)
        cells[3].addEventListener("click",resetX)
        cells[4].addEventListener("click",resetX)
        cells[5].addEventListener("click",resetX)
        cells[6].addEventListener("click",resetX)
        cells[7].addEventListener("click",resetX)
        cells[8].addEventListener("click",resetX)
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
        cells[0].addEventListener("click",resetDraw)
        cells[1].addEventListener("click",resetDraw)
        cells[2].addEventListener("click",resetDraw)
        cells[3].addEventListener("click",resetDraw)
        cells[4].addEventListener("click",resetDraw)
        cells[5].addEventListener("click",resetDraw)
        cells[6].addEventListener("click",resetDraw)
        cells[7].addEventListener("click",resetDraw)
        cells[8].addEventListener("click",resetDraw)
}






