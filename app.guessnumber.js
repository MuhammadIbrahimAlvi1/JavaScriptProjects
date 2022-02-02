// Initial Variables`
let correctAnswer;
let guessedNumber = document.getElementById('guessed-number-field');
let checkBtn = document.getElementById('check-btn');
let score;
let highScore;
let playAgain = document.getElementById('play-again');
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let highScoreCheck = () => {
    correctAnswer = randomIntFromInterval(1, 20);
    score = 20;
    highScore = localStorage.getItem('highscore');
    if (highScore == undefined || highScore == null) {
        document.getElementById('highscore').innerText = "0";
        highScore = 0;
    } else {
        document.getElementById('highscore').innerText = JSON.parse(highScore);
    }
}

checkBtn.addEventListener('click', () => {
    if (guessedNumber.value > 20 || guessedNumber.value == "") {
        alert("Please Enter Number in a range of 1-20");
    } else {
        if (guessedNumber.value == correctAnswer) {
            document.getElementById('number-value').innerText = "Correct Answer";
            document.getElementById('number-value').style.backgroundColor = "green";
            document.getElementById('score').innerHTML = score.toString();
            document.getElementById('guessed-number-field').disabled = true;
        } else {
            score--;
            document.getElementById('score').innerHTML = score.toString();
            document.getElementById('number-value').style.backgroundColor = "red";
            if (guessedNumber.value < correctAnswer) {
                document.getElementById('number-value').innerText = `The Correct Answer >${guessedNumber.value}`
            } else {
                document.getElementById('number-value').innerText = `The Correct Answer <${guessedNumber.value}`
            }
        }
    } if (score == 0) {
        checkBtn.disabled = true;
        document.getElementById('number-value').innerText = "Game Over";
    }

})



playAgain.addEventListener('click', () => {
    if (highScore == undefined || highScore == null) {
        localStorage.setItem('highscore', JSON.stringify(score));
    } else if (highScore !== undefined || highScore !== null) {
        if (score > highScore) {
            localStorage.setItem('highscore', JSON.stringify(score));
        }
    }
    reset();
})


let reset = () => {
    score = 20;
    document.getElementById('score').innerHTML = '20';
    guessedNumber.value = '';
    correctAnswer = randomIntFromInterval(1, 20);
    document.getElementById('guessed-number-field').disabled = false;
    document.getElementById('number-value').innerText = "Number"
    document.getElementById('number-value').style.background = "linear-gradient(#d4f0fa, #e0f7ff 40%, #dcf6ff 3%, #d9f2fa)"
}