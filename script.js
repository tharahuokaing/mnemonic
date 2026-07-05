const specificPhrase = [
    "undo", "weasel", "gospel", "excite", "swallow", "hire", 
    "flat", "island", "velvet", "armor", "select", "buyer"
];

let clickCount = 0; // Tracks the number of clicks

function generateSeedPhrase() {
    const seedGrid = document.getElementById('seedGrid');
    const statusMessage = document.getElementById('statusMessage');
    const copyBtn = document.getElementById('copyBtn');
    
    clickCount++; // Increment count on each click

    if (clickCount === 1) {
        // First click: Display the specific seed phrase
        renderSeedGrid(specificPhrase);
        if (statusMessage) statusMessage.innerHTML = "<span style='color: #2ea44f;'>✓ ឃ្លាគ្រាប់ពូជត្រូវបានផ្ទុកជោគជ័យ!</span>";
        if (copyBtn) copyBtn.disabled = false;
    } else {
        // Second click and beyond: Display N/A
        const naArray = Array(12).fill("N/A");
        renderSeedGrid(naArray);
        if (statusMessage) statusMessage.innerText = "បានកំណត់ទៅជា N/A (គ្មានទិន្នន័យ)";
        if (copyBtn) copyBtn.disabled = true; // Disable copy after reset
    }
}

function renderSeedGrid(words) {
    const seedGrid = document.getElementById('seedGrid');
    if (!seedGrid) return;
    
    seedGrid.innerHTML = ""; // Clear existing grid
    
    words.forEach((word, index) => {
        const wordBox = document.createElement('div');
        wordBox.className = 'word-box';
        wordBox.innerHTML = `<span>${index + 1}.</span> ${word}`;
        seedGrid.appendChild(wordBox);
    });
}
