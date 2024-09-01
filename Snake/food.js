let foodPosition = { x: 16, y: 16 };


const valid = (position) => {
    for (let i = 0; i < snakeBody.length; i++) {
        if (equalPosition(snakeBody[i], position)) {
            return false;
        }
    }
    return true;
}


const equalPosition = (pos1, pos2) => {
    return (pos1.x === pos2.x && pos1.y === pos2.y);
}

const newFoodPosition = () => {
    previousFoodPosition = foodPosition;
    position = randomGridPosition();

    while (!valid(position)) {
        position = randomGridPosition();
    }
    foodPosition = position;
}

const updateFood = () => {
    if (snakeBody[0].x !== foodPosition.x || snakeBody[0].y !== foodPosition.y) {
        return;
    }
    newFoodPosition();
}


const drawFood = (gameBoard) => {
        const segment = foodPosition;
        const foodElement = document.createElement("div");
        foodElement.style.gridRowStart = segment.y;
        foodElement.style.gridColumnStart = segment.x;
        foodElement.classList.add("food");
        gameBoard.appendChild(foodElement);
    }

