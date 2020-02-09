let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    return computerChoice = choices[Math.floor(Math.random() * 3)];
}

function convertToWord(letter) {
    if (letter == 'r')
        return "Rock";
    if (letter == 'p')
        return "Paper";
    if (letter == 's')
        return "Scissors";
}

function win(userChoice, computerChoice) {
    result_p.innerHTML = convertToWord(userChoice) + " vs " + convertToWord(computerChoice) +  ". You <span style='color: lime;'>win</span>!";
    userScore++;
    userScore_span.innerHTML = userScore;
}

function lose(userChoice, computerChoice) {
    result_p.innerHTML = convertToWord(userChoice) + " vs " + convertToWord(computerChoice) +  ". You <span style='color: red;'>lose</span>!";
    computerScore++;
    computerScore_span.innerHTML = computerScore;
}

function draw(userChoice, computerChoice) {
    result_p.innerHTML = convertToWord(userChoice) + " vs " + convertToWord(computerChoice) +  ".It's a <span style='color: gray;'>draw</span>!";
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    const choices = userChoice + computerChoice;
    //console.log(choices); //COMMENT THIS
    switch (choices) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;

        case "sr":
        case "ps":
        case "rp":
            lose(userChoice, computerChoice);
            break;

        default:
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener("click", function () {
        game("r");
    });

    paper_div.addEventListener("click", function () {
        game("p");
    });

    scissors_div.addEventListener("click", function () {
        game("s");
    });

}
main();
