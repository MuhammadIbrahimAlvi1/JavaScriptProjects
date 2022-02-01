console.log("Running");

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
const correctAnswer = randomIntFromInterval(1, 20);
let guessedNumber = document.getElementById('guessed-number');
let checkBtn = document.getElementById('check-btn');

checkBtn.addEventListener('click', () => {
    if (correctAnswer == guessedNumber.value) {
        console.log("Success")
    }else{
        alert('Stop')
    }
})