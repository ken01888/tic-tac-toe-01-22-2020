let cells = document.querySelectorAll(".row>div");
let button=document.querySelector('.reset')
let choice = ["X", "O", "X", "O", "X", "O", "X", "O", "X"];
button.addEventListener('click',reset)

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
            cells[null].textContent ) {
            alert("Draw!");         
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
         alert("Congragulations PlayerX You've Won!!")



    }else if (cells[3].textContent === "X" && 
                cells[4].textContent === "X" && 
                cells[5].textContent === "X") {
        alert("Congragulations PlayerX You've Won!!")


    } else if (cells[6].textContent === "X" &&
                cells[7].textContent === "X" &&
                cells[8].textContent === "X") {
        alert("Congragulations PlayerX You've Won!!")
        

    } else if (cells[0].textContent=== "X" && 
                cells[3].textContent=== "X" && 
                cells[6].textContent === "X") {
        alert("Congragulations PlayerX You've Won!!")
        

    } else if (cells[1].textContent=== "X" && 
                cells[4].textContent=== "X" && 
                cells[7].textContent === "X") {
        alert("Congragulations PlayerX You've Won!!")

    } else if (cells[2].textContent=== "X" && 
                cells[5].textContent=== "X" && 
                cells[8].textContent === "X") {
        alert("Congragulations PlayerX You've Won!!")
        

    }else if (cells[0].textContent=== "X" && 
                cells[4].textContent=== "X" && 
                cells[8].textContent === "X") {
        alert("Congragulations PlayerX You've Won!!")
        

    } else if (cells[2].textContent === "X" && 
                cells[4].textContent === "X" && 
                cells[6].textContent === "X") {
        alert("Congragulations PlayerX You've Won!!")
        

    }else if (cells[0].textContent === "O" && 
                cells[1].textContent === "O" &&
                cells[2].textContent === "O") {
        alert("Congragulations PlayerO You've Won!!")

    }else if (cells[3].textContent === "O" &&
                cells[4].textContent === "O" && 
                cells[5].textContent === "O") {
        alert("Congragulations PlayerO You've Won!!")

    } else if (cells[6].textContent === "O" &&
                cells[7].textContent === "O"&&
                cells[8].textContent === "O") {
        alert("Congragulations PlayerO You've Won!!")

    } else if (cells[0].textContent=== "O" && 
                cells[3].textContent=== "O" && 
                cells[6].textContent === "O") {
        alert("Congragulations PlayerO You've Won!!")

    } else if (cells[1].textContent=== "O" && 
                cells[4].textContent=== "O" && 
                cells[7].textContent === "O") {
        alert("Congragulations PlayerO You've Won!!")

    } else if (cells[2].textContent=== "O" && 
                cells[5].textContent=== "O" && 
                cells[8].textContent === "O") {
        alert("Congragulations PlayerO You've Won!!")

    }else if (cells[0].textContent=== "O" && 
                cells[4].textContent=== "O" && 
                cells[8].textContent === "O") {
        alert("Congragulations PlayerO You've Won!!")

    } else if (cells[2].textContent === "O" && 
                cells[4].textContent === "O" && 
                cells[6].textContent === "O") {
        alert("Congragulations PlayerO You've Won!!")
    }
};

// reset
function reset(){
 location.reload()
}










