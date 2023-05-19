const btnP = document.getElementById("btnP");
const btnR = document.getElementById("btnR");
const btnS = document.getElementById("btnS");
const output = document.getElementById("output");
const output2 = document.getElementById("output2");
const outcomeElm = document.getElementById("outcomeElm");
const comp = document.getElementById("computerElm");
let snd = new Audio("mixkit-arcade-game-jump-coin-216.wav")
let snd2 = new Audio("mixkit-achievement-bell-600.wav")
const pic = document.getElementById("pic")

let win = 0;
let loss = 0;
output.innerText = "Win:" + win
output2.innerText = "Loss:" + win


const items = ["rock", "paper", "scissors"]

//generate random item
function randomGenerate(){
    return items[Math.floor((Math.random() * 3))]
}




//return true if user wins, false if they lose, and 0 if they draw
function outcome(user){
    const name = user
    
    let cpuChoice = randomGenerate()

    if(cpuChoice === "paper"){
        pic.innerHTML = "<img class='out-img' src='paper.png' ></img>"
    }
    else if(cpuChoice ==="rock"){
        pic.innerHTML = "<img class='out-img' src='rock.png' ></img>"
    }
    else{
        pic.innerHTML = "<img class='out-img' src='scissors.png' ></img>"
    }
    
    
       
     
     if(name.toLowerCase() === cpuChoice){
         return 0;  
     }
     
    if(name.toLowerCase() === "paper" && cpuChoice === "rock" || name.toLowerCase() === "rock" && cpuChoice === "paper" ){
    
    
    if(name.toLowerCase() === "paper"){
        
        return true
    }
    return false
    
}

else if(name.toLowerCase() === "rock" && cpuChoice === "scissors" || name.toLowerCase() === "scissors" && cpuChoice === "rock"){
    

    
    if(name.toLowerCase() === "rock"){
          return true
    }
    return false
}

else if(name.toLowerCase() === "paper" && cpuChoice === "scissors" || name.toLowerCase() === "scissors" && cpuChoice === "paper" ){
     
    if(name.toLowerCase() ==="paper"){
         return false
    }
    return true
  
}
}
btnP.addEventListener("mousedown", function sound(){
    playPopSound()
  
    game("paper")

})

btnS.addEventListener("mousedown", function sound(){
    playPopSound()
    game("scissors")

})

btnR.addEventListener("mousedown", function sound(){
    playPopSound()
    game("rock")

})


//output if you win or lose
function game(choice){
    
    
    
    let picked = choice
    
    let value = outcome(picked)


    
    if(value === true){
        outcomeElm.innerText = "You Win!"
        win++;
        output.innerText = "Win:" + win

        if(win % 10 ===0){
            playWinSound()
        }
        
    }
    else if(value=== false){
        outcomeElm.innerText = "You Lose!"
        loss++
        output2.innerText = "Lose:" + loss
        
    }
    else if (value === 0){
        outcomeElm.innerText = "You Draw!"
    }
    
    }




//plays the click sound 
function playPopSound(){
    
    snd.play()
    snd.volume = 0.2;

}

function playWinSound(){
    snd2.play()
    snd2.volume = 0.1;
    
}


