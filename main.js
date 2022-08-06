
document.addEventListener('DOMContentLoaded', () => {
    const COLORS = ["#F72585", "#7209B7", "#3F37C9", "#4895EF", "#4CC9F0", "#4DF096", "#49E349", "#FFF152", "#FF5252"];
    const SQUARES_COUNT = 500;
    const DEFAULT_COLOR = "#000000";
    
    const container = document.getElementById("container");
    const squaresBoard = document.getElementById("squares_board");
    
    for (let i = 0; i < SQUARES_COUNT; i++) {
        const element = document.createElement("div");
        element.classList.add("square");
        element.addEventListener("mouseover", () => setColor(element));
        element.addEventListener("mouseout", () => clearColor(element));
        squaresBoard.appendChild(element);
    }
    
    
    const setColor = (element) => {
        const color = COLORS[Math.floor(Math.random() * COLORS.length)];
        element.style.backgroundColor = color;
        element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
    }
    
    const clearColor = (element) => {
        element.style.backgroundColor = DEFAULT_COLOR;
        element.style.boxShadow = `0 0 2px ${DEFAULT_COLOR}`;
    }
});