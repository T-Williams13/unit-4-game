var targetNumber;
var wins = 0;
var losses = 0;
var crystalOne;
var crystalTwo;
var crystalThree;
var crystalFour;
var userScore;





$(document).ready(function () {
    resetGame()

    function checkScore() {
        console.log("Checking Score...")
    
    if (userScore === targetNumber) {
        wins++;
        $("#message").text("You won!!");
        resetGame();
    };
    if (userScore > targetNumber) {
        losses++;
        $("#message").text("You lost!");
        resetGame();

    }

}

    function updateDom() {
        $("#your-score").text(userScore);
        $("#wins").text(wins);
        $("#losses").text(losses);
    }

    function resetGame() {
        userScore = 0
        var max = 120;
        var min = 19;
        console.log("Game Start");
        targetNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        userScore = 0;
        // User gets a random number between 19 and 120.
        console.log("Target Number" + targetNumber);
        $("#number-to-guess").text(targetNumber);
        var crystMax = 12;
        var crystMin = 1;
        //     There are 4 crystals, each with arandom value between 1 and 12 attatched. 
        crystalOne = Math.floor(Math.random() * (crystMax - crystMin + 1)) + crystMin;
        crystalTwo = Math.floor(Math.random() * (crystMax - crystMin + 1)) + crystMin;
        crystalThree = Math.floor(Math.random() * (crystMax - crystMin + 1)) + crystMin;
        crystalFour = Math.floor(Math.random() * (crystMax - crystMin + 1)) + crystMin;

        console.log("crystal Number" + crystalOne)
        $("#message").text();
    }
    $(".purple-crystal").on("click", function () {
        userScore = userScore + crystalOne;
        console.log("user score " + userScore);
        checkScore();
        updateDom();

    });
    $(".blue-crystal").on("click", function () {
        userScore = userScore + crystalTwo;
        console.log("user score " + userScore);
        checkScore();
        updateDom();

    });
    $(".green-crystal").on("click", function () {
        userScore = userScore + crystalThree;
        console.log("user score " + userScore);
        checkScore();
        updateDom();

    });
    $(".clear-crystal").on("click", function () {
        userScore = userScore + crystalFour;
        console.log("user score " + userScore);
        checkScore();
        updateDom();

    });
    resetGame()
})



//     User presses the crystals and the value of that crystal is added to "your score".
// If the your score value matches the randomly generated number between 19 and 120, a "you won!" pops up, wins increases and your score, crystal values and random number resets.
// If the score goes over the randomly generated number, a "you lost!" pops up, the losses increases by 1 and everything else resets.