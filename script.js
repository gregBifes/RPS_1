let rockBtn = document.getElementById('rock-btn');
let paperBtn = document.getElementById('paper-btn');
let scissorsBtn = document.getElementById('scissors-btn');
let scoreText = document.getElementById('score-text');
let roundDescription = document.getElementById('round-description');
let allGames = document.getElementById('games-counter');
let userWeapon = '';
let computerWeapon = '';
let totalGamePlayed = 0;

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

let colors = {
    0: 'red',
    1: 'green',
    2: 'blue',
    3: 'brown',
    4: 'purple',
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function playGame(userWeapon) {
    let randomInteger = getRandomInt(3);
    let bigerRandomInteger = getRandomInt(5);
    computerWeapon = weapons[randomInteger];
    if (userWeapon === computerWeapon) {
        roundDescription.textContent = `It's a Tie ${userWeapon} vs ${computerWeapon}`;
        score.draws += 1;
    }

    if (userWeapon === 'rock') {
        if (computerWeapon === 'paper') {
            roundDescription.textContent = `You lose ${userWeapon} vs ${computerWeapon}`;
            score.loses += 1;
        }
        else if (computerWeapon === 'scissors') {
            roundDescription.textContent = `You win! ${userWeapon} vs ${computerWeapon}`;
            score.wins += 1;
        }
    }
    if (userWeapon === 'paper') {
        if (computerWeapon === 'scissors') {
            roundDescription.textContent = `You lose ${userWeapon} vs ${computerWeapon}`;
            score.loses += 1;
        }
        else if (computerWeapon === 'rock') {
            roundDescription.textContent = `You win! ${userWeapon} vs ${computerWeapon}`;
            score.wins += 1;
        }
    }
    if (userWeapon === 'scissors') {
        if (computerWeapon === 'rock') {
            roundDescription.textContent = `You lose ${userWeapon} vs ${computerWeapon}`;
            score.loses += 1;
        }
        else if (computerWeapon === 'paper') {
            roundDescription.textContent = `You win! ${userWeapon} vs ${computerWeapon}`;
            score.wins += 1;
        }
    }
    totalGamePlayed += 1;
    scoreText.textContent = `Score: wins: ${score.wins}  draws: ${score.draws}   loses: ${score.loses}`;
    scoreText.style.color = `${colors[bigerRandomInteger]}`;
    allGames.textContent = `Total games played: ${totalGamePlayed}`;
    scoreText.style.visibility = 'visible';
    roundDescription.style.visibility = 'visible';

}



