let comChoice = document.getElementById('com-choice');
let mychoice = document.getElementById('my-choice');
let result = document.getElementById('result');
let buttons = document.querySelectorAll('button');

buttons.forEach(buttons => buttons.addEventListener('click', (e) => {
    mychoice.innerHTML =  e.target.id;
    computer()
}))

function computer() {
    const randomNumber =  Math.floor(Math.random()*3)+1;
    if(randomNumber === 1)
    {
        comChoice.innerHTML = 'rock';
    }
    if(randomNumber === 2)
    {
        comChoice.innerHTML = 'paper';
    }
    if(randomNumber === 3)
    {
        comChoice.innerHTML = 'scissor';
    }
    checkresult()
}
function checkresult() {
    if(comChoice.innerHTML === mychoice.innerHTML)
    {
        result.innerHTML = 'its a draw';
    }
    if(comChoice.innerHTML === 'rock' && mychoice.innerHTML === 'scissor')
    {
        result.innerHTML = 'You Lose';
    }
    if(comChoice.innerHTML === 'scissor' && mychoice.innerHTML === 'paper')
    {
        result.innerHTML = 'You Lose';
    }
    if(comChoice.innerHTML === 'paper' && mychoice.innerHTML === 'rock')
    {
        result.innerHTML = 'You Lose';
    }
    if(comChoice.innerHTML === 'scissor' && mychoice.innerHTML === 'rock')
    {
        result.innerHTML = 'You Win';
    }
    if(comChoice.innerHTML === 'paper' && mychoice.innerHTML === 'scissor')
    {
        result.innerHTML = 'You Win';
    }
    if(comChoice.innerHTML === 'rock' && mychoice.innerHTML === 'paper')
    {
        result.innerHTML = 'You Win';
    }
}

