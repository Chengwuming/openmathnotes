const SNAKE_SPEED = 5;

const snakeBody = [
    {x:11, y:11},
    {x:11, y:10},
    {x:11, y:9},
];

const goNext = (head, snakeDirection) => {
    return {
        x: head.x + snakeDirection.x,
        y: head.y + snakeDirection.y
    };
}

const updateSnake = () => {
    const snakeDirection = getInputDirection();
    let snakeHead = snakeBody[0];
    snakeBody.unshift(goNext(snakeHead, snakeDirection));
    if (valid(foodPosition)) {
        snakeBody.pop();
    }
}


const drawSnake = (gameBoard) => {
    for(let i = 0; i < snakeBody.length; i++) {
        const segment = snakeBody[i];
        const snakeElement = document.createElement("div");
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.classList.add("snake");
        gameBoard.appendChild(snakeElement);
    }
}


const onBody = (position) => {
    for (let i = 1; i < snakeBody.length; i++) {
        if (equalPosition(snakeBody[i], position)) {
            return false;
        }
    }
    return true;
}

