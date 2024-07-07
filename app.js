let player1Turn = true

let plyer1 = prompt('plyer1 name')
let plyer2 = prompt('plyer2 name')

const playerName1 = document.getElementById("playerName1")
playerName1.innerHTML = plyer1

const playerName2 = document.getElementById("playerName2")
playerName2.innerHTML = plyer2


const rollDice = document.getElementById("rollDice")
const diceImage = document.getElementsByTagName("img")[0]
const currentScoreHtml1 = document.getElementById("currentScore1")
const currentScoreHtml2 = document.getElementById("currentScore2")
const totalScoreHtml1 = document.getElementById("totalScore1")
const totalScoreHtml2 = document.getElementById("totalScore2")


// let rollDice = document.getElementById('rollDice')
// let imgTag = document.getElementsByTagName('img')[0]

// let totelScore1Html = document.getElementById('totelScore1')
// let totelScore2Html = document.getElementById('totelScore2')
// let currentScore1Html = document.getElementById('currentScore1')
// let currentScore2Htm2 = document.getElementById('currentScore2')


// let currenScore = 0



// currentScore1Html.textContent = currenScore
//  currentScore2Htm2.textContent = currenScore

let currentScore = 0

currentScoreHtml1.textContent = currentScore
currentScoreHtml2.textContent = currentScore



rollDice.addEventListener('click', () => {
 let  numberOfDice = Math.ceil(Math.random() * 6)

   console.log(numberOfDice)
   diceImage.src = ` assets/${numberOfDice}.png`
   if (numberOfDice == 1) {
      player1Turn = !player1Turn  //not true  // not false
      alert(`Bari change ${player1Turn ? playerName1.textContent : playerName2.textContent}`)
      if (player1Turn) {
        currentScoreHtml1.textContent = currentScore = 0
      } else {
        currentScoreHtml2.textContent = currentScore = 0
      }
  } else {
      if (player1Turn) {
        currentScoreHtml1.textContent = currentScore += numberOfDice
      } else {
        currentScoreHtml2.textContent = currentScore += numberOfDice
      }
  }
})





const holdButton = document.getElementById("holdButton")

holdButton.addEventListener("click", () => {
    player1Turn = !player1Turn  //not true  // not false
    alert(`Bari change ${player1Turn ? playerName1.textContent : playerName2.textContent}`)
    if (!player1Turn) {
        totalScoreHtml1.textContent = +totalScoreHtml1.textContent + currentScore
        currentScoreHtml2.textContent = currentScore = 0
    } else {
        totalScoreHtml2.textContent = +totalScoreHtml2.textContent + currentScore
        currentScoreHtml2.textContent = currentScore = 0
    }
})