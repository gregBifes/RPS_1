let rockBtn = document.getElementById('rock-btn');
let paperBtn = document.getElementById('paper-btn');
let scissorsBtn = document.getElementById('scissors-btn');

let score = {
    'wins': 0,
    'draws': 0,
    'loses': 0,
}
let weapons = {
    'rock': 0,
    'paper': 1,
    'scissors': 2,
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
let randomInteger = getRandomInt(3);

