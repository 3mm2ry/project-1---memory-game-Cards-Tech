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
let second
let score
let Duration
let Lives
let Timmer


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

for ( let i = 0;i < ChooseDifficultyButtonsEl.length;i++) {

function stoFunction (){ 
            localStorage.setItem(
                "Difficulty",
                ChooseDifficultyButtonsEl[i].textContent
            )}

 ChooseDifficultyButtonsEl[i].addEventListener("click",stoFunction )
            
     
    

        }
   


/*-------------------------------- Functions --------------------------------*/

//     ChooseDifficultyButtonsEl.forEach(function(button) {

//     button.addEventListener('click', function() {

//         localStorage.setItem("Difficulty", button.textContent);

//     });

// });

// console.log(localStorage.getItem("Difficulty"));
// function init (){


     ////local storage 
     // localStorage.setItem("Difficulty", "Easy");

 



//  BestScore =0 ;
//   Duration =null ;
//   Timmer =0 ;
//   first =null ;
//    second=null ;
   
   // to add function into array
//    imagesArray.sort(function(){

//      return Math.random()-0.5



 
// })
//  for(let i=0 ;i<ChooseDifficultyButtonsEl.length;i++){
//   if(ChooseDifficultyButtonsEl[i].id==="btn1"){
//    console.log(ChooseDifficultyButtonsEl[i].id)
//  }

// }

}

console.log(init() +"call")



/*----------------------------- Event Listeners -----------------------------*/
