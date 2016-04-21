var mydice = new Array("img/d_1.jpg","img/d_2.jpg","img/d_3.jpg", "img/d_4.jpg", "img/d_5.jpg", "img/d_6.jpg");

function rollDice(){
    var die1 = document.getElementById("die1");
    var die2 = document.getElementById("die2");
    var status = document.getElementById("status");
    var d1 = Math.floor(Math.random() * 6) + 1;
    var d2 = Math.floor(Math.random() * 6) + 1;
    var diceTotal = d1 + d2;
    die1.innerHTML = d1;
    die2.innerHTML = d2;
	document.images["mydice"].src="../img/"
}