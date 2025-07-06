const comChoiceEl = document.getElementById('com-choice');
const myChoiceEl = document.getElementById('my-choice');
const resultEl = document.getElementById('result');
const buttons = document.querySelectorAll('.choice-btn');

const choices = ['rock', 'paper', 'scissors'];
const emojiMap = {
  rock: '✊',
  paper: '📄',
  scissors: '✂️'
};

buttons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const userChoice = e.target.dataset.choice;
    const computerChoice = getComputerChoice();

    myChoiceEl.textContent = emojiMap[userChoice];
    comChoiceEl.textContent = emojiMap[computerChoice];

    const gameResult = checkResult(userChoice, computerChoice);
    resultEl.textContent = gameResult;
  });
});

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function checkResult(user, computer) {
  if (user === computer) return "It's a Draw!";

  const winMap = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
  };

  return winMap[user] === computer ? '🎉 You Win!' : '😢 You Lose!';
}