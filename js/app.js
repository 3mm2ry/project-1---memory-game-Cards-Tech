console.log('Technologies Memory Match')

/*-------------------------------- Constants --------------------------------*/



     const imagesArray =[
          "./Images/tech1.png" ,
          "./Images/tech1.png",

          "./Images/tech2.png"
          ,"./Images/tech2.png",

          "./Images/tech3.png",
          "./Images/tech3.png",

          "./Images/tech4.png",
          "./Images/tech4.png",

          "./Images/tech5.png",
          "./Images/tech5.png",

          "./Images/tech6.png",
          "./Images/tech6.png",
     ]


/*-------------------------------- Variables --------------------------------*/


let first
let BestScore
let score
let Duration
let Lives
let Timmer
let Difficulty
let second

/*------------------------ Cached Element References  ------------------------*/

const ChooseDifficultyButtonsEl=document.querySelectorAll('.Difficulty')
const CardsEl =document.querySelectorAll('.sqr')
const GameInfoDifficultyEl =document.querySelector('#Difficulty')
const GameInfoLivesEl =document.querySelector('#Lives')
const GameInfoScoreEl =document.querySelector('#Score')
const GameInfoDurationEl =document.querySelector('#Duration')
const MessageEl =document.querySelector('#Message')
const RestartEl =document.querySelector("#rest")
const StartEl = document.querySelector("#start")

console.log(CardsEl,GameInfoDifficultyEl,ChooseDifficultyButtonsEl,GameInfoLivesEl,GameInfoDurationEl,GameInfoScoreEl,MessageEl,StartEl,RestartEl)



/*------------------------- Difficulty Buttons (local storge) -------------------------*/

// store the  Difficulty chose from users 

for ( let i = 0;i < ChooseDifficultyButtonsEl.length;i++) {

function stoFunction (){ 
            localStorage.setItem("Difficulty",ChooseDifficultyButtonsEl[i].textContent )
        }

 ChooseDifficultyButtonsEl[i].addEventListener("click",stoFunction )   // event click but i add it  here because we need the lop 
            
     
    

        }
   


/*-------------------------------- Functions --------------------------------*/


function init (){

 clearInterval(Timmer) 
 BestScore =0 ;
  Duration =null ;
  Timmer =0 ;
  first =null ;
   second=null ;

// Get Difficulty from localStorage
Difficulty = localStorage.getItem("Difficulty")


    // Default

if (Difficulty === null) {

        Difficulty = "Easy"
     localStorage.setItem("Difficulty",Difficulty)


    }

////--------------------------------
    if (Difficulty === "Easy") {

        Duration = 100
        Lives = 10

    }

    else if (Difficulty === "Medium") {

        Duration = 50
        Lives = 6

    }

    else {

        Duration = 25
        Lives = 3

    }





//    to add function into array and make the cards random
   imagesArray.sort(function(){

     return Math.random()-0.5



 
})


// Show cards
for (let i = 0;i < CardsEl.length;i++ ) {

        CardsEl[i].textContent = ""

        CardsEl[i].style.backgroundImage ="url(" + imagesArray[i] + ")"  // to add the photo by index of array 

        CardsEl[i].style.backgroundSize = "contain"   // image size = card size

        CardsEl[i].style.backgroundPosition ="center"

        CardsEl[i].style.backgroundRepeat ="no-repeat"

        CardsEl[i].style.visibility = "visible"

    }


    
GameInfoScoreEl.textContent ="🏆 Best Score : " + BestScore

       GameInfoDurationEl.textContent ="⏱️ Duration : " + Duration

    GameInfoDifficultyEl.textContent ="🎮 Difficulty : " + Difficulty


    GameInfoLivesEl.textContent ="❤️ Lives : " + Lives

MessageEl.textContent ="Press Start ▶️"

}

    // Game Info





/*----------------------------- Event Listeners -----------------------------*/
