// Iteration 1: Making the play button in the index.html functional.
// Description: When the play button is clicked the game.html page should be opened
// Get a reference to the play button
const button=document.getElementById("play-button");
button.addEventListener("click",function(){
    window.location.href="game.html";
})
