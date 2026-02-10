// Initializing Sneak Peak Environment...

// Set the hidden access token
// The user needs to view the Application/Storage tab to see this.
const hiddenFlag = "cicsctf{hidden_in_plain_sight_preview}";
document.cookie = "sneak_peak_preview=" + hiddenFlag + "; path=/";

console.log("Environment loaded. Authorization required to view content.");

function checkFlag() {
    const input = document.getElementById('flagInput');
    const result = document.getElementById('result');

    if (input.value === hiddenFlag) {
        result.textContent = "CONGRATULATIONS! ACCESS GRANTED. Welcome to the team.";
        result.className = "result success";
        // Optional: Reveal something or animate
    } else {
        result.textContent = "ACCESS DENIED. Invalid token.";
        result.className = "result failure";
    }
}
