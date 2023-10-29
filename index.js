var randomNumber1 = Math.floor(Math.random()*6) +1;

var randomImage1 = "dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomImage1);

var randomnumber2 = Math.floor(Math.random()*6)+1;

var randomImage2 = "dice" + randomnumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImage2);

if (randomNumber1 > randomnumber2){
    document.querySelector("h1").innerHTML= "Plyer 1 wins😀"
}
else if (randomnumber2> randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 wins😀"
}
else{
    document.querySelector("h1").innerHTML = "Draw🙂"
}