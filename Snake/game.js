let lastRenderTime = 0;
const gameBoard = document.getElementById("game-board");

let gameOver = false;

const main = (currentTime) => {
    if (gameOver) {
        window.alert("GG");
        return;
    }

    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) {
        return;
    }
    lastRenderTime = currentTime;
    update();
    draw();
}

window.requestAnimationFrame(main);

const update = () => {
    gameOver = isGameOver();
    updateSnake();
    updateFood();
}

const draw = () => {
    gameBoard.innerHTML = "";
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

const isGameOver = () => {
    if (snakeBody[0].x > 21 || snakeBody[0].y > 21 || snakeBody[0].x < 1 || snakeBody[0].y <  1) {
        return true;
    }
    if (!onBody(snakeBody[0])) {
        return true;
    }
    return false;
}