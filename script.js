let userpoint = 0;
let comppoint = 0;
const choices = document.querySelectorAll(".choice");
const resot = document.querySelector("#ressh");
const usermar = document.querySelector("#user");
const compmar = document.querySelector("#comp");
const compin = () => {
    const array = ["rock", "paper", "scissor"];
    const ind = Math.floor(Math.random()*3);
    return array[ind];
};
const draw = () => {
    resot.innerText = "GAME WAS DRAW";
    resot.computedStyleMap.backgroundColor = "black";    
};
const result = (userwin, computerinput, userinput) => {
    if(userwin){
        userpoint++;
        usermar.innerText = userpoint;
        resot.innerText = `You win ${userinput} beats ${computerinput}` ;
    }
    else {
        comppoint++;
        compmar.innerText = comppoint;
        resot.innerText = `You loose ${computerinput} beats ${userinput}`;
    }
};
const playgame = (userinput) => {
    const computerinput = compin();
    if(computerinput === userinput){
        draw();
    } 
    else {
        let userwin = true;
        if(userinput === 'rock'){
            userwin = computerinput === "paper" ? false : true;
        }
        else if(userinput = "paper"){
            userwin = computerinput === "scissor" ? false : true ;
        }
        else {
            userwin = computerinput === "rock" ? false : true ;
        }
        result(userwin, computerinput, userinput);
    }
};
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
       const userinput = choice.getAttribute("id");
        console.log("enter choice is", userinput);
        playgame(userinput);
    });
});
