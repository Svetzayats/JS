// Code goes here
// генерируем 4хзначное число с неповторяющимися цифрами, которое будут угадывать


function createGuessNumber() {
    let objectGuessNumber = new Set();

    while (objectGuessNumber.size < 4) {
        objectGuessNumber.add(Math.round(Math.random() * 9));
    }

    let guessNumber = Array.from(objectGuessNumber).join('');
    return guessNumber;

}


function game() {
    let guessNumber = createGuessNumber();
    let counterCows;
    let counterBulls;

    do {

        let userAnswer = prompt('Введите 4хзначное число, в котором не повторяются цифры', 1234);


        if (userAnswer === null || userAnswer === '') {
            alert('Вы ничего не ввели, попробуйте еще раз');
            continue;
        }

        else if (userAnswer.length !== 4) {
            alert('Это не 4хзначное число. Должно быть 4 цифры, попробуйте еще раз');
            continue;
        }

        else if (userAnswer == 1111) { //для выхода из игры
            break;
        }

        else {
            counterBulls = 0;
            counterCows = 0;

            for (let i = 0; i <= 3; i++) {
                if (userAnswer[i] == guessNumber[i]) {
                    counterBulls++;
                    continue;
                }

                if (guessNumber.indexOf(userAnswer[i]) != -1) {
                    counterCows++;
                    continue;
                }
            }

            alert('Быков: ' + counterBulls + ', коров: ' + counterCows);
        }

    } while (counterBulls != 4)

}

game();


















