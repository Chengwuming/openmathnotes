let inputDirection = { x: 0, y: 1 };
let lastInputDirection = { x: 0, y: 1 };

window.addEventListener('keydown', (event) => {
    if (event.key === "w" && lastInputDirection.y !== 1) {
        inputDirection = { x: 0, y: -1 };
    } else if (event.key === "s" && lastInputDirection.y !== -1) {
        inputDirection = { x: 0, y: 1 };
    } else if (event.key === "d" && lastInputDirection.x !== -1) {
        inputDirection = { x: 1, y: 0 };
    } else if (event.key === "a" && lastInputDirection.x !== 1) {
        inputDirection = { x: -1, y: 0 };
    }
})

const getInputDirection = () => {
    lastInputDirection = inputDirection;
    return inputDirection;
}