function playRound (playerSelection, computerSelection) {
    let result;
    if (playerSelection === null || playerSelection === undefined || computerSelection === null || computerSelection === undefined) {
        return result = "Что-то пошло не так...";
    }
    if (playerSelection === computerSelection) {
        return result = "Ничья!";
    }
    if ((playerSelection === "rock" && computerSelection === "scissors")
        || (playerSelection === "scissors" && computerSelection === "paper")
        || (playerSelection === "paper" && computerSelection === "rock")) {
        return result = "Игрок выиграл!";
    }
    else {
        return result = "Компьютер выиграл!";
    }
}


function game() {
    let playerScore = 0;
    let computerScore = 0;

    while ((playerScore + computerScore) < 5) {
        let playerSelection = prompt("Сделайте свой ход - выберите rock, paper или scissors. Если введете что-то другое, то проиграете", "rock").toLocaleLowerCase();
        let computerSelection = computerPlay();
        console.log ( "Вы выкинули - " + playerSelection + ". А компьютер - " + computerSelection + "." );
        let result = playRound(playerSelection, computerSelection);
        if (result === "Что-то пошло не так..."
        || result === "Ничья!") {
            continue;
        }
        else if (result === "Игрок выиграл!") {
            console.log (result + "\n Счет: Игрок - " + playerScore + ", компьютер - " + computerScore);
            playerScore++;
            continue;
        }
        else if (playRound(playerSelection, computerSelection) === "Компьютер выиграл!") {
            console.log (result + "\n Счет: Игрок - " + playerScore + ", компьютер - " + computerScore);
            computerScore++;
            continue;
        }
    }

    if (playerScore > computerScore) {
        console.log ("Игрок выиграл со счетом " + playerScore + ":" + computerScore + "!");
    }
    else {
        console.log ("Компьютер выиграл со счетом " + playerScore + ":" + computerScore + "!");
    }
}
