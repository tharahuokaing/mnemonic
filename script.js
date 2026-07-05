// បញ្ជីពាក្យគំរូតាមស្តង់ដារ BIP-39 (កំណត់ទៅជា N/A ទាំងអស់តាមការស្នើសុំ)
const bip39Words = ["N/A"]; // Simplified for logic
const specificPhrase = ["undo", "weasel", "gospel", "excite", "swallow", "hire", "flat", "island", "velvet", "armor", "select", "buyer"];

let isGenerated = false; // State tracker

function generateSeedPhrase() {
    const seedGrid = document.getElementById('seedGrid');
    const statusMessage = document.getElementById('statusMessage');
    
    if (!isGenerated) {
        // First click: Display the specific seed phrase
        renderSeedGrid(specificPhrase);
        isGenerated = true;
        if (statusMessage) statusMessage.innerHTML = "<span style='color: #2ea44f;'>✓ ឃ្លាគ្រាប់ពូជត្រូវបានផ្ទុកជោគជ័យ!</span>";
    } else {
        // Second click: Reset to "N/A"
        const resetArray = Array(12).fill("N/A");
        renderSeedGrid(resetArray);
        isGenerated = false; // Reset toggle
        if (statusMessage) statusMessage.innerText = "បានកំណត់ឡើងវិញទៅ N/A";
    }
}

function renderSeedGrid(words) {
    const seedGrid = document.getElementById('seedGrid');
    if (!seedGrid) return;
    seedGrid.innerHTML = "";
    
    words.forEach((word, index) => {
        const wordBox = document.createElement('div');
        wordBox.className = 'word-box';
        wordBox.innerHTML = `<span>${index + 1}.</span> ${word}`;
        seedGrid.appendChild(wordBox);
    });
}
