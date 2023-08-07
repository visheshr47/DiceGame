var randomNumber1 = Math.floor((Math.random() * 6) + 1);

var numToImage1 = "./images/dice" + randomNumber1 + ".png";

document.querySelector(".img1").setAttribute("src", numToImage1);


var randomNumber2 = Math.floor((Math.random() * 6) + 1);

var numToImage2 = "./images/dice" + randomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src", numToImage2);



if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!!!";
} else if (randomNumber1 > randomNumber2) {
    document.querySelectorAll("h1")[0].innerHTML = "Player1 Wins";
} else {
    document.querySelectorAll("h1")[0].innerHTML = "Player2 Wins"
}
