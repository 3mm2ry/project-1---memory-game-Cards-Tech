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

let Duration
let Lives
let Timmer
let Difficulty
let second
let pickedDifficulty

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

        pickedDifficulty = ChooseDifficultyButtonsEl[i].textContent
            localStorage.setItem("Difficulty",ChooseDifficultyButtonsEl[i].textContent )
                                     ///key                           ///value 
        }

 ChooseDifficultyButtonsEl[i].addEventListener("click",stoFunction )   // event click but Iam  add it  here because we need the lop 
            
     
    

        }
   


/*-------------------------------- Functions --------------------------------*/


function init (){

 clearInterval(Timmer)  // stop 
 BestScore =0 ;
  Duration =null ;
  Timmer =0 ;
  first =null ;
   second=null ;

// Get Difficulty from localStorage
Difficulty = localStorage.getItem("Difficulty")


    // Default

if (pickedDifficulty === null) {

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
        CardsEl[i].style.backgroundSize = "100% 100%"

        CardsEl[i].style.backgroundRepeat ="no-repeat"

        CardsEl[i].style.visibility = "visible" // to show the style of the cards on css file 

    }


        // Game Info

GameInfoScoreEl.textContent ="🏆 Best Score : " + BestScore

       GameInfoDurationEl.textContent ="⏱️ Duration : " + Duration

    GameInfoDifficultyEl.textContent ="🎮 Difficulty : " + Difficulty


    GameInfoLivesEl.textContent ="❤️ Lives : " + Lives

MessageEl.textContent ="Press Start ▶️"

}

/*-------------------------------- Start Game --------------------------------*/

function startGame() {
                                  // if timer run exit the function -- to avoid  user repate the timer 
        if (Timmer !== 0) {

        return

        }


        // Hide  the cards -- 

    for (let i = 0;i < CardsEl.length;i++) {

        CardsEl[i].style.backgroundImage ="none"

        CardsEl[i].textContent ="💻"

     

    }


    MessageEl.textContent = ( "Choose Two Technologies 💻")


           // Timer

 Timmer = setInterval(function () {   // setInterval()Runs a piece of code repeatedly at a specified time interval.

    Duration = Duration - 1
  

    GameInfoDurationEl.textContent = ("⏱️ Duration : " + Duration)

    if (Duration === 0) {

        clearInterval(Timmer) // stop 

        Timmer = null

        MessageEl.textContent = ("Game Over")

    }
       

}, 1000)
/// run this function every milliseconds 1000
}

/*-------------------------------- Handle Click --------------------------------*/

function handleClick(event) {

    // if there is no timmer -- exit 
    /// if (Timmer === 0) 
  //// timer not working 
    if (!Timmer) {     

        return

    }

     // if second not null -- mean the player chose 2 carde and -- exit to prevent player chose more than 2 card
    if (second !== null) {

        return

    }


    let cardIndex = Number(event.target.id)

  // // Prevent the player from selecting the same card twice
    if (cardIndex === first) {

        return

    }


    // Show image  when  player click on  it 

    event.target.style.backgroundImage ="url(" + imagesArray[cardIndex] + ")"

    event.target.style.backgroundSize ="contain"
    event.target.style.backgroundSize = "100% 100%"


    event.target.style.backgroundPosition ="center"

    event.target.style.backgroundRepeat ="no-repeat"

    event.target.textContent =""


    if (first === null) {

        first = cardIndex

    }

    else {

        second = cardIndex


        ///////////

        // Match

        if ( imagesArray[first] ===imagesArray[second]) {

            BestScore = BestScore + 1

            GameInfoScoreEl.textContent = ("🏆 Best Score : " + BestScore + " / 6")

            MessageEl.textContent = ("Match 🏆")


            if (BestScore === 6) {

                clearInterval(Timmer)

                Timmer = null

                MessageEl.textContent = "You Win "

            }

        }

        else {

            Lives = Lives - 1

            GameInfoLivesEl.textContent ="❤️ Lives : " + Lives

            MessageEl.textContent ="Wrong ❌"


            if (Lives === 0) {

                   clearInterval(Timmer)

                  Timmer = null

                MessageEl.textContent ="Game Over"

            }

        }


         // hide

        /// setTimeout() run the function one time only ----- while setInterval() repate the function 
        // Run the function once after a 1-second delay ----- delayyyy
        setTimeout(function () {

            if (imagesArray[first] ===imagesArray[second]) {

                CardsEl[first].style.visibility = "hidden"

                CardsEl[second].style.visibility ="hidden" // // to hide the style of the cards on css file 


            }

            else {

         CardsEl[first].style.backgroundImage ="none"

                      CardsEl[second].style.backgroundImage ="none"

         CardsEl[first].textContent ="💻"

                CardsEl[second].textContent ="💻"

            }


            first = null

            second = null

        }, 1000) /// wait one second then run function ----1000ms

    }

}

/*----------------------------- Event Listeners -----------------------------*/

for (let i = 0;i < CardsEl.length;i++) {

    CardsEl[i].addEventListener("click",handleClick)

}


if (StartEl) {

StartEl.addEventListener("click",startGame)

}


if (RestartEl) {

    RestartEl.addEventListener("click",init)

}



//////////Start 


    init()

