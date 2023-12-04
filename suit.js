let playerScore = 0
let botScore = 0
let roundLimit = 5

alert("Let's play SuitGame(●'◡'●)")

for(let round = 1 ; round <= roundLimit ; round++){
     alert(`Round- ${round}`)
     
     const player = prompt('Choose batu, gunting, kertas')
     const bot = ['batu', 'gunting', 'kertas'][Math.floor(Math.random()*3)];

    if(player == bot){
        alert("Hasilnya Seri😑")
     }
     else if( 
     (player == 'batu' && bot == 'gunting') ||
     (player == 'gunting' && bot == 'kertas') ||
     (player == 'kertas' && bot == 'batu')
     )  {
        alert('Kamu Menang😎')
          playerScore++
     }
     else{
        alert('Kamu kalah🥱')
        botScore++
     }
    
    alert(`You chose: ${player} \nAnd Bot chose: ${bot}`)

}

const score = (win, lose, tie) => {
     if(playerScore > botScore){
          alert(`FINAL SCORE:\nYou: ${playerScore} and Bot: ${botScore}\n\n ${win} \n\nThanks for play ╰(*°▽°*)╯`)
     }else if(playerScore < botScore){
          alert(`FINAL SCORE:\nYou: ${playerScore} and Bot: ${botScore}\n\n ${lose} \n\nThanks for play ╰(*°▽°*)╯`)
     }else{
          alert(`FINAL SCORE:\nYou: ${playerScore} and Bot: ${botScore}\n\n ${tie} \n\nThanks for play ╰(*°▽°*)╯`)
     }
}

score('Congratulation😒', 'Better Luck Next Time😝', 'Well play🫠')

// alert(`FINAL SCORE:\nYou: ${playerScore} and Bot: ${botScore} \n\nThanks for play ╰(*°▽°*)╯`)