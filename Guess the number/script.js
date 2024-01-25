
let randomnumber = parseInt((Math.random())*100+1)


const submit = document.querySelector('#submitt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remanaing = document.querySelector('.lastResult')

//console.log(randomnumber)

const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p  = document.querySelector('p')


let prevGuess = []

let numGuess = 1;

let playGame  = true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault() // it will hold the value
        const guess = parseInt(userInput.value)
        console.log(guess)
        validateGuesses(guess)
    })
}

function validateGuesses (guess){
    if (isNaN(guess)){
        alert('please enter a valid number ')

    }

    else if(guess<1){
        alert('please enter a number more than 1')
    }

    else if (guess>100){
        alert('pleasr enter a number less than 100')
    }
    else{
        prevGuess.push(guess)
        if (numGuess === 11){
            displayMessage(`Game Over. Random number was ${randomnumber}`)
            endGame()

        }
        else{
            displayGuesses(guess)
            chackGuesses(guess)

        }
        
    }
}

function chackGuesses(guess){
    if(guess === randomnumber){
        displayMessage(`You Guess it  Righet `)
        endGame()
    }
    else if(guess < randomnumber){
        displayMessage(`Number is too low`)
    }
    else if (guess > randomnumber){
        displayMessage(`number is too high`)
    }

}

function displayGuesses(guess){
    userInput.value = ''
    guessSlot.innerHTML =  guessSlot.innerHTML + `  ${guess} ,   `
    numGuess ++ ;
    chance = `${11-numGuess}`
    remanaing.innerHTML = chance
    
if(chance === 0){
    alert(' Sorry you last match and your turn is over')
}





}

function displayMessage (message){

    lowOrHi.innerHTML = `<h2>${message}</h2>`

}



function endGame() {
    userInput.setAttribute('disabled', 'true');
    p.innerHTML = `<button id="newGame">Start new Game</button>`;
    startOver.appendChild(p);

      p.removeEventListener('click', newGameButtonClick);
    p.addEventListener('click', newGameButtonClick);
}

function newGameButtonClick() {
    randomnumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = '10';
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
}
