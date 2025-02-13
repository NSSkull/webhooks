// Get the elements
const codeLines = document.querySelectorAll('.code-line');
const loginContainer = document.getElementById('login-container');
const bootBtn = document.getElementById('boot-btn');
const usernameInput = document.getElementById('username');

// Simulate the code running down the screen with a delay
let delay = 0;
codeLines.forEach((line, index) => {
    setTimeout(() => {
        line.style.animationDelay = `${delay}s`;
        line.style.opacity = 1;
    }, delay * 1000);
    delay += 2; // Delay for each line
});

// After the "code" finishes, show the username input form
setTimeout(() => {
    loginContainer.style.display = 'flex';
}, delay * 1000);

// Boot-in functionality
bootBtn.addEventListener('click', () => {
    const username = usernameInput.value;
    if (username) {
        alert(`Welcome, ${username}! Booting up the system...`);
        // You can redirect or show other content after "booting"
    } else {
        alert('Please enter a valid username.');
    }
});
