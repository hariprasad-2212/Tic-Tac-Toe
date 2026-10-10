let g1 = document.querySelector("#b1");
let g2 = document.querySelector("#b2");
let g3 = document.querySelector("#b3");
let g4 = document.querySelector("#b4");
let g5 = document.querySelector("#b5");
let g6 = document.querySelector("#b6");
let g7 = document.querySelector("#b7");
let g8 = document.querySelector("#b8");
let g9 = document.querySelector("#b9");

let Xscore = document.querySelector("#Xscore");
let Yscore = document.querySelector("#Yscore");
let Dscore = document.querySelector("#Draw");

let play = ()=>{
    g1.innerText = "";
    g2.innerText = "";
    g3.innerText = "";
    g4.innerText = "";
    g5.innerText = "";
    g6.innerText = "";
    g7.innerText = "";
    g8.innerText = "";
    g9.innerText = "";
    Xturn = true;
    win = false;
    count = 0;
};
let playAgain = document.querySelector("#Play");
playAgain.addEventListener("click",play);


let X = 0;
let Y = 0;
let D = 0;
let Xturn = true;
let count = 0;
let win = false;

Xscore.innerText = X;
Yscore.innerText = Y;
Dscore.innerText = D;


let turn = (event)=>{
    if(!win && event.target.innerText === ""){
        if(Xturn){
            Xturn = false;
            event.target.innerText = "X";
        }
        else{
            Xturn = true;
            event.target.innerText= "O"
        }
        if(!win){
            check();
        }
    }
};

g1.addEventListener("click",turn);
g2.addEventListener("click",turn);
g3.addEventListener("click",turn);
g4.addEventListener("click",turn);
g5.addEventListener("click",turn);
g6.addEventListener("click",turn);
g7.addEventListener("click",turn);
g8.addEventListener("click",turn);
g9.addEventListener("click",turn);

let message;

let check = ()=>{
    let grid = Array.from({length : 3},()=> Array.from({length : 3},() => 0));

    grid[0][0]  =g1.innerText;
    grid[0][1] = g2.innerText;
    grid[0][2] = g3.innerText;
    grid[1][0] = g4.innerText;
    grid[1][1] = g5.innerText;
    grid[1][2] = g6.innerText;
    grid[2][0] = g7.innerText;
    grid[2][1] = g8.innerText;
    grid[2][2] = g9.innerText;

    for(let i = 0; i < 3; i++){
       if(grid[i][0] != "" && grid[i][0] === grid[i][1] && grid[i][0] === grid[i][2]){
            win = true;
            break;
        }
        else if(grid[0][i] != "" && grid[0][i] === grid[1][i] && grid[0][i] === grid[2][i]){
            win = true;
            break;
        }   
   }
   if(grid[0][0] != "" && grid[0][0] === grid[1][1] && grid[0][0] === grid[2][2]){
        win = true;
   }
   else if(grid[0][2] != "" && grid[0][2] === grid[1][1] && grid[2][0] === grid[0][2]){
        win = true;
   }
   count++;
   if(win){
    score()
   }
   else if(count === 9){
        D++;
        console.log("Draw");
       message = "Draw 😭";
        Dscore.innerText = D;
        showPopup(message);
   }
}

let score = () => {
    if(!Xturn){
        X++;
        console.log("X won")
       message = "X wins!🎉";
        Xscore.innerText = X;
    }
    else{
        Y++;
        console.log("Y won")
        message = "Y wins!🎉";
        Yscore.innerText = Y;
    }
    showPopup(message);
}

let popup = document.querySelector("#popup");
let result = document.querySelector("#result");

let showPopup = (message) => {
    result.innerText = message;
    popup.style.display = "block";

    setTimeout(() => {
        popup.style.display = "none";
    }, 2500);
};