var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSorce = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSorce);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber2 + ".png";
var randomImageSorce2 = "images/" + randomDiceImage;

document.querySelectorAll("img")[1].setAttribute("src", randomImageSorce2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1st Win";

} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2nd Win";

} else {
  document.querySelector("h1").innerHTML = "Match is Draw";

}




