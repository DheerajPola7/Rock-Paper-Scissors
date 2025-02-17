let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];                     // 3rd function
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    //console.log("Game was draw");
    msg.innerText = "Game was Draw. Play again";
    msg.style.background="#081b31";
}

const showWinner = (userWin , userChoice , compChoice) => {
    if (userWin) {                         // 5th function
        userScore++;
        userScorePara.innerText=userScore;
        //console.log("You Win");
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;          //added text on the display
        msg.style.background="green";
        } else {
        compScore++;
        compScorePara.innerText=compScore;
        //console.log("You Lost");
        msg.innerText = `You Lost! ${compChoice} beats your ${userChoice}`;
        msg.style.background="red";
    }

};

const playGame = (userChoice) => {                                   // 2nd function
    //console.log("user choice =", userChoice);
    const compChoice = genCompChoice();     //added compchoice to userchoice
    //console.log("comp choice =", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {                                         // total else block is 4th function
        let userWin = "true";
        if (userChoice === "rock") {
            //scissors , paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            //rock , scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            //rock , paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin , userChoice , compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");             // 1st function
        playGame(userChoice);
    });
});