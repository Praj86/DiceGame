function randomDice() {
    return Math.floor(Math.random() * 6 + 1);
}
//randomize dice image 


const diceImages = document.querySelector(".img1");
const diceImages2 = document.querySelector(".img2");

function randomDiceImage() {
    var ran1 = randomDice();
    var ran2 = randomDice();
    diceImages.src = `images/dice${ran1}.png`;
    diceImages2.src = `images/dice${ran2}.png`;

    /*diceImage.forEach(function(image) {
        diceImage.src = `images/dice${randomDice()}.png`; // Directly calling the function
    });*/
    if (ran1 === ran2) {
        document.querySelector("h1").innerText = "Draw!";
    } else if (ran1 > ran2) {
        document.querySelector("h1").innerText = "Player One Wins!";
    } else {
        document.querySelector("h1").innerText = "Player Two Wins!";
    }
    document.querySelector(".diceRoll").innerText = "Re-Roll";
}
document.querySelector(".diceRoll").addEventListener("click", randomDiceImage);