let randomNumber = parseInt(Math.random()*100 + 1);


const userInput = document.querySelector('.box');
const submitButton = document.querySelector('.glow-on-hover');
const prevGuess = document.querySelector('.prev');
const remaining = document.querySelector('.remain');
const lowOrHi= document.querySelector('.result');
// const startOver =document.querySelector('.resultBox');
const btn =document.querySelector('.startOver');

const p = document.createElement('p');

frm1= document.querySelector('.field');
frm1.addEventListener('submit',function(e){
    e.preventDefault();
})

let guessArray =[]
let numGuess = 10;

let playGame =true;

if(playGame){
    submitButton.addEventListener('click',function(e){
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess))
        alert('Please enter a valid number');
    else if(guess < 1)
        alert('Please enter a number gretaer than 1');
    else if(guess>100) 
        alert('Please enter a number less than 100');
    else{
        guessArray.push(guess);
        if(numGuess ===1){
            displayGuess(guess);
            displayMessage(`Game is over. Random number was ${randomNumber}`);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You guessed it right.`);
        endGame();
    }
    else if(guess< randomNumber){
        displayMessage(`Number is tooooo low.`);
    }
    else
        displayMessage(`Number is toooo high.`)
}
function displayGuess(guess){
    userInput.value = '';
    prevGuess.innerHTML += `${guess},  `;
    numGuess--;
    remaining.innerHTML = `${numGuess}`;
}

function displayMessage(message){
    lowOrHi.innerHTML = `${message}`;
}

function endGame(){
    userInput.value ='';
    userInput.setAttribute('disabled', "");
    p.classList.add('button');
    p.innerHTML =`<h2 id="newGame">Start new game.</h2>`;
    btn.append(p);
    playGame=false;
    startGame()
}

function startGame(){
    const newGameBtn = document.querySelector('#newGame');
    newGameBtn.addEventListener('click',function(e){
        randomNumber = parseInt(Math.random()*100 + 1);
        guessArray=[]
        numGuess =10
        prevGuess.innerHTML =''
        remaining.innerHTML = '10';
        lowOrHi.innerHTML = '';
        userInput.removeAttribute('disabled');
        btn.removeChild(p);
        playGame =true;
    })
}