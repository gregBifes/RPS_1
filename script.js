let rockBtn = document.getElementById('rock-btn');
let paperBtn = document.getElementById('paper-btn');
let scissorsBtn = document.getElementById('scissors-btn');
let userWeapon = '';
let computerWeapon = '';
let score = {
    'wins': 0,
    'draws': 0,
    'loses': 0,
}
let weapons = {
    0: 'rock',
    1: 'paper',
    2: 'scissors',

}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function playGame(userWeapon) {

    let randomInteger = getRandomInt(3);
    computerWeapon = weapons[randomInteger];

    if (userWeapon === 'rock') {
        if (computerWeapon === 'rock') {
            console.log(`It's a Tie ${userWeapon}   ${computerWeapon}`);
            score.draws += 1;
        }
        else if (computerWeapon === 'paper') {
            console.log(`You Lose! ${userWeapon}   ${computerWeapon}`);
            score.loses += 1;
        }
        else {
            console.log(`You Win! ${userWeapon}   ${computerWeapon}`);
            score.wins += 1;
        }
    }
    if (userWeapon === 'paper') {
        if (computerWeapon === 'paper') {
            console.log(`It's a Tie ${userWeapon}   ${computerWeapon}`);
            score.draws += 1;
        }
        else if (computerWeapon === 'scissors') {
            console.log(`You Lose! ${userWeapon}   ${computerWeapon}`);
            score.loses += 1;
        }
        else {
            console.log(`You Win! ${userWeapon}   ${computerWeapon}`);
            score.wins += 1;
        }
    }
    if (userWeapon === 'scissors') {
        if (computerWeapon === 'scissors') {
            console.log(`It's a Tie ${userWeapon}   ${computerWeapon}`);
            score.draws += 1;
        }
        else if (computerWeapon === 'rock') {
            console.log(`You Lose! ${userWeapon}   ${computerWeapon}`);
            score.loses += 1;
        }
        else {
            console.log(`You Win! ${userWeapon}   ${computerWeapon}`);
            score.wins += 1;
        }
    }
}



