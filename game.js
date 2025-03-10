const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Set canvas size
canvas.width = 800;
canvas.height = 600;

// Player Object
const player = {
    x: 100,
    y: 300,
    width: 40,
    height: 40,
    speed: 5,
    dx: 0,
    dy: 0,
    color: "#00FF00", // Player's color
    gun: "pistol", // Default weapon
    isShooting: false,
};

// Bullet Object
const bullets = [];
const bulletSpeed = 10;
const bulletWidth = 10;
const bulletHeight = 5;

// Map with obstacles (simple walls)
const map = [
    { x: 200, y: 200, width: 100, height: 10 }, // Wall 1
    { x: 400, y: 300, width: 100, height: 10 }, // Wall 2
];

// Player controls
let leftPressed = false;
let rightPressed = false;
let upPressed = false;
let downPressed = false;
let spacePressed = false;

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") leftPressed = true;
    if (e.key === "ArrowRight") rightPressed = true;
    if (e.key === "ArrowUp") upPressed = true;
    if (e.key === "ArrowDown") downPressed = true;
    if (e.key === " ") spacePressed = true;
});

document.addEventListener("keyup", (e) => {
    if (e.key === "ArrowLeft") leftPressed = false;
    if (e.key === "ArrowRight") rightPressed = false;
    if (e.key === "ArrowUp") upPressed = false;
    if (e.key === "ArrowDown") downPressed = false;
    if (e.key === " ") spacePressed = false;
});

// Move the player
function movePlayer() {
    if (leftPressed && player.x > 0) player.x -= player.speed;
    if (rightPressed && player.x < canvas.width - player.width) player.x += player.speed;
    if (upPressed && player.y > 0) player.y -= player.speed;
    if (downPressed && player.y < canvas.height - player.height) player.y += player.speed;
}

// Create a bullet
function shootBullet() {
    if (spacePressed && !player.isShooting) {
        player.isShooting = true;
        let bullet = {
            x: player.x + player.width / 2 - bulletWidth / 2,
            y: player.y,
            width: bulletWidth,
            height: bulletHeight,
            color: "#FF0000",
        };
        bullets.push(bullet);
    }
}

// Move bullets
function moveBullets() {
    for (let i = 0; i < bullets.length; i++) {
        bullets[i].y -= bulletSpeed;
        // Remove bullets that are off-screen
        if (bullets[i].y < 0) {
            bullets.splice(i, 1);
        }
    }
}

// Draw the player
function drawPlayer() {
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

// Draw the bullets
function drawBullets() {
    bullets.forEach((bullet) => {
        ctx.fillStyle = bullet.color;
        ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
    });
}

// Draw obstacles (walls)
function drawMap() {
    map.forEach((wall) => {
        ctx.fillStyle = "#FFFF00";
        ctx.fillRect(wall.x, wall.y, wall.width, wall.height);
    });
}

// Collision detection
function checkCollision() {
    // Check for collision with walls
    map.forEach((wall) => {
        if (
            player.x < wall.x + wall.width &&
            player.x + player.width > wall.x &&
            player.y < wall.y + wall.height &&
            player.y + player.height > wall.y
        ) {
            // Player collided with wall, stop moving
            player.x -= player.dx;
            player.y -= player.dy;
        }
    });
}

// Game loop
function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    movePlayer();
    shootBullet();
    moveBullets();
    checkCollision();
    drawPlayer();
    drawBullets();
    drawMap();
    requestAnimationFrame(update);
}

update();
