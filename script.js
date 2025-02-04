"use strict";
const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.querySelector(".player-display");
const computerDisplay = document.querySelector(".computer-display");
const resultDisplay = document.querySelector(".result-display");
const gameButton = document.querySelector("button");

gameButton.addEventListener("click",function()){
    const playerChoice = choices[Math.floor(Math.random() * choices.length)];
    const computerChoice =choices[Math.floor(Math.random() * choices.length)];
    return playerChoice,computerChoice
}
