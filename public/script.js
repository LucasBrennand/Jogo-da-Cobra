console.log("Testing")

const board = document.getElementById("game-board");
let snake = [{x: 10, y: 10}];
let food = generateFood();

function draw(){
    board.innerHTML = "";
    drawSnake();
}

function drawSnake(){
    snake.array.forEach(segment => {
        const snakeElement = createGameElement("div", "snake");
        setPosition(snakeElement, segment);
        board.appendChild(snakeElement);
    });
}

function createGameElement(tag, className){
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

function setPosition(element, position){
    element.style.gridColumn = position.x;
    element.style.gridRow = position.y;
}

function drawFood(){
    const foodElement = createGameElement("div","food");
    setPosition(foodElement, food);
}

function generateFood()