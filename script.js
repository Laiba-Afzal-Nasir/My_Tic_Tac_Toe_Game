let boxes = document.querySelectorAll(".box");

let resetBtn = document.querySelector(".reset-btn");

let msgContainer = document.querySelector(".msg-container");

let msg = document.querySelector("#msg");

let newBtn = document.querySelector(".new-btn");


let turnO = true ;



const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];



const resetGame = () => {
    turnO = true ;
    enableBoxes();
    msgContainer.classList.add("hide");
};



boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            console.log("O");
            box.innerText = "O"
            turnO = false ;
        }else{
            console.log("X");
            box.innerText = "X";
            turnO = true ;
        }
         box.disabled = true ;
         
         checkWinner();
    });
   
});



const disableBoxes = () => {
    for(box of boxes){
        box.disabled = true ;
    }
};



const enableBoxes = () => {
    for(box of boxes){
        box.disabled = false ;
        box.innerText = "" ;
    }
};



const showWinner = (winner) => {
    msg.innerText = `Congratulations! Winner  ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};



const checkWinner = () => {
    for(pattern of winPatterns){
let  pos1Val =  boxes[pattern[0]].innerText;
let  pos2Val =  boxes[pattern[1]].innerText;    
let  pos3Val =  boxes[pattern[2]].innerText;
              
       
    if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
     if(pos1Val === pos2Val && pos2Val === pos3Val){
       
       showWinner(pos1Val);
    }   
   }                            
  }
};



// to triggered reset button & new game button
/*  
newBtn.addEventListener("click",resetGame); 

resetBtn.addEventListener("click",resetGame);   */
