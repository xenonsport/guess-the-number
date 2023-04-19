"use strict";

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = '';

document.querySelector(".check").addEventListener("click", function () {
  const guessingNumber = Number(document.querySelector(".number-input").value);
  console.log(guessingNumber, typeof guessingNumber);

  //No input
  if (!guessingNumber) {
    document.querySelector(".guess-message").textContent = "Введите число!";

    //Player won
  } else if (guessingNumber === secretNumber) {
    document.querySelector(".question").textContent = secretNumber;
    document.querySelector(".guess-message").textContent = "Правильно!";
    document.querySelector('body').style.backgroundColor = '#00FF00';
    document.querySelector('.question').style.fontSize = '6rem';
    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = score;
    }
    //Too high
  } else if (guessingNumber > secretNumber) {
    if (score > 1) {
      document.querySelector(".guess-message").textContent = "Слишком много!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".guess-message").textContent = "GAME OVER!";
      document.querySelector(".score").textContent = 0;
    }

    //Too low
  } else if (guessingNumber < secretNumber) {
    if (score > 1) {
      document.querySelector(".guess-message").textContent = "Слишком мало!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".guess-message").textContent = "GAME OVER!";
      document.querySelector(".score").textContent = 0;
    };
  }
});

document.querySelector('.again').addEventListener('click', function() {
  document.querySelector('body').style.backgroundColor = '#000000';
  document.querySelector('.question').style.fontSize = '4rem';
  document.querySelector(".guess-message").textContent = "Начни угадывать!";
  document.querySelector(".question").textContent = '???';
  document.querySelector(".score").textContent = '20';
  document.querySelector('.number-input').value = '';

  secretNumber = Math.floor(Math.random() * 20) + 1;
  score = 20;
});

