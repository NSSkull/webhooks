const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 600;

let gameOver = false;

// Player object
const player = {
    x: 400,
    y: 550,
    width: 50,
    height: 50,
    speed: 5,
    dx: 0,
};

// Enemy object
const enemy = {
    x: 400,
    y: 100,
    width: 50,
    height: 50,
    speed: 3,
};

// Bullet object
const bullet = {
    x: player.x + player.width / 2 - 5,
    y: player.y,
    width: 10,
    height: 20,
    speed: 7,
    active: false
};

// Controls
let leftPressed = false;
let rightPressed = false;
let spacePressed = false;

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") leftPressed = true;
    if (e.key === "ArrowRight") rightPressed = true;
    if (e.key === " ") spacePressed = true;
});

document.addEventListener("keyup", (e) => {
    if (e.key === "ArrowLeft") leftPressed = false;
    if (e.key === "ArrowRight") rightPressed = false;
    if (e.key === " ") spacePressed = false;
});

// Game Over animation
const gameOverScreen = document.getElementById("game-over");

function showGameOver() {
    gameOver = true;
    gameOverScreen.style.display = "block";
    setTimeout(() => {
        gameOverScreen.style.opacity = 1;
    }, 0);
}

function movePlayer() {
    if (leftPressed && player.x > 0) player.x -= player.speed;
    if (rightPressed && player.x < canvas.width - player.width) player.x += player.speed;
}

function moveBullet() {
    if (bullet.active) {
        bullet.y -= bullet.speed;
        if (bullet.y < 0) bullet.active = false;
    }
}

function moveEnemy() {
    if (!gameOver) {
        enemy.y += enemy.speed;
        if (enemy.y > canvas.height) {
            enemy.y = -enemy.height;
            enemy.x = Math.random() * (canvas.width - enemy.width);
        }
    }
}

function checkCollision() {
    if (
        bullet.active &&
        bullet.x < enemy.x + enemy.width &&
        bullet.x + bullet.width > enemy.x &&
        bullet.y < enemy.y + enemy.height &&
        bullet.y + bullet.height > enemy.y
    ) {
        bullet.active = false;
        enemy.y = -enemy.height;
        enemy.x = Math.random() * (canvas.width - enemy.width);
    }

    // If the enemy hits the player
    if (
        !gameOver &&
        player.x < enemy.x + enemy.width &&
        player.x + player.width > enemy.x &&
        player.y < enemy.y + enemy.height &&
        player.y + player.height > enemy.y
    ) {
        showGameOver();
    }
}

function drawPlayer() {
    ctx.fillStyle = "#00FF00";
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

function drawBullet() {
    if (bullet.active) {
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
    }
}

function drawEnemy() {
    ctx.fillStyle = "#FF5733";
    ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
}

function drawGameOver() {
    if (gameOver) {
        gameOverScreen.style.display = "block";
    }
}

function update() {
    if (!gameOver) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        movePlayer();
        moveBullet();
        moveEnemy();
        checkCollision();
        drawPlayer();
        drawBullet();
        drawEnemy();
        drawGameOver();
        requestAnimationFrame(update);
    }
}

function shootBullet() {
    if (!bullet.active && spacePressed) {
        bullet.active = true;
        bullet.x = player.x + player.width / 2 - 5;
        bullet.y = player.y;
    }
}

update();
setInterval(shootBullet, 100);
