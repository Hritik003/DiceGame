//for dice 1
var randomnumber1= Math.floor(Math.random()*6) + 1;
var randomDiceImage= "dice"+randomnumber1+".png";
var randomImageSrc = "images/"+randomDiceImage;
document.querySelectorAll("img")[0].setAttribute("src",randomImageSrc);

var balls  = document.getElementsByClassName("ball");

//for dice2
var randomnumber2 = Math.floor(Math.random()*6)+1;
var randomDiceImage2 = "dice"+randomnumber2 + ".png";
var randomImageSrc2 = "images/"+randomDiceImage2;
document.querySelectorAll("img")[1].setAttribute("src",randomImageSrc2);

//if dice1 wins
if(randomnumber1>randomnumber2){
  document.querySelector("h1").innerHTML = " 🎷 Player 1 Wins!";
  var x = 0;
  balls[0].style.left = x ;
}
else if(randomnumber1<randomnumber2){
  document.querySelector("h1").innerHTML = " 🎷 Player 2 Wins!";
  var x = 1;
  balls[0].style.left = x;
}
else{
  document.querySelector("h1").innerHTML = "oops!! Draw";

}
