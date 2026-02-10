// Initializing Sneak Peak Environment...

// Set the hidden access token
// The user needs to view the Application/Storage tab to see this.
const _0x452a = "Y2ljc2N0ZntoaWRkZW5faW5fcGxhaW5fc2lnaHRfcHJldmlld30="; // Base64 Encoded Flag

document.cookie = "sneak_peak_preview=" + atob(_0x452a) + "; path=/; secure; samesite=strict";

console.log("Environment loaded. Authorization required to view content.");

function checkFlag() {
    const input = document.getElementById('flagInput');
    const result = document.getElementById('result');

    // Validate against the decoded value
    if (input.value === atob(_0x452a)) {
        result.textContent = "CONGRATULATIONS! ACCESS GRANTED. Welcome to the team.";
        result.className = "result success";
        // Optional: Reveal something or animate
    } else {
        result.textContent = "ACCESS DENIED. Invalid token.";
        result.className = "result failure";
    }
}
