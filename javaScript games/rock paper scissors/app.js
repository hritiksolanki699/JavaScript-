const computerChoiceDisplay =document.getElementById('Computer-Choice')
const userChoiceDisplay = document.getElementById('User-Choice')
const resultDisplay = document.getElementById('result')

const possibleChoices = document.querySelectorAll('button')

let userChoice
let computerChoice



possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e) => {
    userChoice= e.target.id
    userChoiceDisplay.innerHTML= userChoice
    generateComputerChoice()
    getResult()    
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3)+1  //or you can use possibleChoices.length
    if(randomNumber === 1){
        computerChoice = 'rock'
    }
     if(randomNumber === 2){
         computerChoice = 'scissors'
     }
    if(randomNumber ===3){
        computerChoice = 'paper'
    }
  computerChoiceDisplay.innerHTML= computerChoice
}

function getResult() {
    if(computerChoice=== userChoice){
        result= 'its a draw'
    }
    if(computerChoice==='rock' && userChoice==='paper'){
        result= 'You Win!'
    }
    if(computerChoice==='rock' && userChoice==='scissors'){
        result= 'You lost!'
    }
    if(computerChoice==='scissors' && userChoice==='paper'){
        result= 'You lost!'
    }
    if(computerChoice==='scissors' && userChoice==='rock'){
        result= 'You Win!'
    }
    if(computerChoice==='paper' && userChoice==='rock'){
        result= 'You lost!'
    }
    if(computerChoice==='paper' && userChoice==='scissors'){
        result= 'You Win!'
    }
   resultDisplay.innerHTML = result    
}