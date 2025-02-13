// Get elements
const terminal = document.querySelector('.terminal');
const commandLine = document.getElementById('command-line');
const bootBtn = document.getElementById('boot-btn');
const usernameInput = document.getElementById('username');

// Function to simulate terminal output (random strings of code)
function generateCode() {
    const chars = ['0', '1', 'ERROR', 'Access Denied', 'Connecting...', 'User Found', 'Invalid Command'];
    return chars[Math.floor(Math.random() * chars.length)];
}

// Function to simulate random terminal code running
function startTerminalEffect() {
    let lineCount = 50; // Number of lines of code
    let codeInterval = setInterval(() => {
        let codeLine = document.createElement('div');
        codeLine.innerText = generateCode();
        terminal.appendChild(codeLine);

        if (--lineCount <= 0) {
            clearInterval(codeInterval); // Stop generating lines
            showCommandLine(); // Show the command line after terminal finishes
        }
    }, 100); // Every 100ms add a new line
}

// Function to show the command line prompt
function showCommandLine() {
    commandLine.classList.remove('hidden');
    document.getElementById("username").focus(); // Focus the input field
}

// Boot-in functionality (after entering username)
bootBtn.addEventListener('click', () => {
    const username = usernameInput.value;
    if (username) {
        alert(`Welcome, ${username}! Booting up the system...`);
        // You can add additional functionality after booting
    } else {
        alert('Please enter a valid username.');
    }
});

// Start terminal simulation on page load
window.onload = () => {
    startTerminalEffect();
};
