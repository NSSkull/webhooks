// Get elements
const codeContainer = document.querySelector('.code-container');
const commandLine = document.getElementById('command-line');
const bootBtn = document.getElementById('boot-btn');
const usernameInput = document.getElementById('username');

// Function to generate random 1's and 0's for terminal effect
function generateCode() {
    const chars = ['0', '1'];
    return chars[Math.floor(Math.random() * chars.length)];
}

// Function to simulate the terminal effect
function startTerminalEffect() {
    let lineCount = 100; // Number of lines of code
    let codeInterval = setInterval(() => {
        let codeLine = document.createElement('div');
        codeLine.innerText = generateCode();
        codeLine.style.animation = `randomCode 3s linear infinite`;
        codeContainer.appendChild(codeLine);
        
        if (--lineCount <= 0) {
            clearInterval(codeInterval); // Stop generating lines
            showCommandLine(); // Show the command line after terminal finishes
        }
    }, 50); // Every 50ms add a new line
}

// Function to show the command line prompt after animation
function showCommandLine() {
    commandLine.classList.remove('hidden');
}

// Boot-in functionality
bootBtn.addEventListener('click', () => {
    const username = usernameInput.value;
    if (username) {
        alert(`Welcome, ${username}! Booting up the system...`);
        // Optionally, you can redirect to another page after "booting"
    } else {
        alert('Please enter a valid username.');
    }
});

// Start the terminal effect when the page loads
window.onload = () => {
    startTerminalEffect();
};
