const rootdata = document.querySelector("#root");
const hitElement = document.querySelector("#hit");
const timerElement = document.querySelector("#timer");
const scoreElement = document.querySelector("#score");

let timer = 60;
let score = 0;

// Make Bubbles
const makeBubbles = () => {
    let newRootdata = "";
    for (let i = 0; i <= 206; i++) {
        const num = Math.floor(Math.random() * 10);
        newRootdata += `<div class="bubble">${num}</div>`;
    }
    rootdata.innerHTML = newRootdata;
}

// Make Hit
const makeHit = () => {
    const num = Math.floor(Math.random() * 10);
    hitElement.textContent = num;
}


// Timer
const runTimer = () => {
    const intervalID = setInterval(() => {
        if (timer > 0) {
            timer--;
            timerElement.textContent = timer;
        } else {
            rootdata.innerHTML = `<h1>Game Over..! Your Score is ${score}</h1>`;
            clearInterval(intervalID);
        }
    }, 1000);
}


// Add Click event listener to the root element
rootdata.addEventListener("click", (e) => {
    const clickedElement = e.target;
    // Check if the clicked element has the "bubble" class
    if (clickedElement.classList.contains("bubble")) {
        handleBubbleClick(clickedElement);
    }
});


// Handle BubbleClick event
const handleBubbleClick = (clickedElement) => {
    const clickedNum = parseInt(clickedElement.textContent);
    const hitNum = parseInt(hitElement.textContent);

    if (clickedNum === hitNum) {
        score += 10;
    }
    makeHit(); // Generate a new hit number
    makeBubbles(); // Generate new bubbles

    // Update the score display
    scoreElement.textContent = score;
}


// Start New Game
const startNewGame= () => {
    runTimer();
    makeHit();
    makeBubbles();
}

startNewGame();





