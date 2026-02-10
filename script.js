// Initializing Sneak Peak Environment...

(function () {
    // We set the cookie here with the plain text flag because that IS the challenge.
    // The user is supposed to find this cookie.
    const _t = "cicsctf{hidden_in_plain_sight_preview}";
    document.cookie = "sneak_peak_preview=" + _t + "; path=/; secure; samesite=strict";
})();

console.log("Environment loaded. Authorization required to view content.");

async function checkFlag() {
    const input = document.getElementById('flagInput').value;
    const result = document.getElementById('result');

    // ONE-WAY HASH VALIDATION
    // The flag is NOT stored in this code in a reversible format.
    // We only store the SHA-256 hash of the valid flag.
    const validHash = "b598f561e27c3184022f23c6827a4fddb77685e682ba14176eff938191cca5740";

    const msgBuffer = new TextEncoder().encode(input);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

    if (hashHex === validHash) {
        result.textContent = "CONGRATULATIONS! ACCESS GRANTED. Welcome to the team.";
        result.className = "result success";
    } else {
        result.textContent = "ACCESS DENIED. Invalid token.";
        result.className = "result failure";
    }
}
