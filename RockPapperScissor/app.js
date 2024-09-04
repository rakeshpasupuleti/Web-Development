let userscore = 0;
let sysscore = 0;

const choices = document.querySelectorAll(".img-sec");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const sysscorepara = document.querySelector("#sys-score");

const drawgame=()=>{

    msg.innerText = "Game was Draw. Play Again";
    msg.style.backgroundColor = "#081b31";

}

const showwinner = (userwin, userchoice, syschoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerHTML = userscore;
        msg.innerText =`You Win ${userchoice} Beats ${syschoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        sysscore++;
        sysscorepara.innerHTML = sysscore;
        msg.innerText = `You Lost ${syschoice} Beats ${userchoice}`;
        msg.style.backgroundColor = "red";

    }
};
const findsysshoice= ()=>{

    const options = ["rock", "paper", "scissor"] ;
    return options[Math.floor(Math.random()*3)];
};

const playgame = (userchoice, syschoice)=>{

    if(userchoice === syschoice){

        drawgame();
    }
    else {

        let userwin = true;
        if(userchoice === "rock") {
            userwin = syschoice === "paper" ? false : true;

        }
        else if(userchoice === "paper"){
            userwin = syschoice === "scissor" ? false : true;
        }
        else {
            userwin = syschoice === "rock" ? false : true;
        }

        showwinner(userwin, userchoice, syschoice);
    }
};
choices.forEach((choice) =>{

    choice.addEventListener("click", ()=>{

        const userchoice = choice.getAttribute("id")
        const syschoice  = findsysshoice();
        playgame(userchoice, syschoice);
    });
});