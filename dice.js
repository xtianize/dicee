function roll() {
var dice1=Math.floor(Math.random()*6)+1;
var dice2=Math.floor(Math.random()*6)+1;
var imgLoc1 = "./images/dice"+dice1+".png";
var imgLoc2 = "./images/dice"+dice2+".png";

document.querySelector(".dice .img1").setAttribute("src", imgLoc1);
document.querySelector(".dice .img2").setAttribute("src",imgLoc2);


if(dice1>dice2){
    document.querySelector("h1").textContent="🚩Player1 Wins";
} else if(dice2>dice1) {
    document.querySelector("h1").textContent="Player2 Wins🚩";
} else {
    document.querySelector("h1").textContent="Draw!";
}

}

roll();