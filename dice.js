let diceValue1 = Math.floor(Math.random() * 6) + 1;
let diceValue2 = Math.floor(Math.random() * 6) + 1;

document.querySelector(".img1").setAttribute("src", "images/dice" + diceValue1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + diceValue2 + ".png");

if (diceValue1 === diceValue2) {
  document.querySelector("h1").innerHTML = "Draw!";
} else if (diceValue1 > diceValue2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩"
}
