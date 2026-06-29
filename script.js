// បញ្ជីពាក្យគំរូតាមស្តង់ដារ BIP-39 (ដកស្រង់ខ្លះៗមកប្រើសម្រាប់ជាឧទាហរណ៍)
const bip39Words = [
    "abandon", "ability", "able", "about", "above", "absent", "absorb", "abstract", "absurd", "abuse",
    "access", "accident", "account", "accuse", "achieve", "acid", "acoustic", "acquire", "across", "act",
    "action", "actor", "actress", "actual", "adapt", "add", "addict", "address", "adjust", "admit",
    "adult", "advance", "advice", "advise", "aerobic", "affair", "afford", "afraid", "again", "age",
    "agent", "agree", "ahead", "aim", "air", "airport", "aisle", "alarm", "album", "alcohol",
    "alert", "alien", "all", "alley", "allow", "almost", "alone", "alpha", "already", "also",
    "alter", "always", "amateur", "amazing", "among", "amount", "amused", "analyst", "anchor", "ancient"
];

const generateBtn = document.getElementById('generateBtn');
const copyBtn = document.getElementById('copyBtn');
const seedGrid = document.getElementById('seedGrid');
const statusMessage = document.getElementById('statusMessage');

let generatedPhrase = "";

// មុខងារបង្កើតឃ្លាគ្រាប់ពូជ ១២ ម៉ាត់ដោយចៃដន្យ
function generateMnemonic() {
    let chosenWords = [];
    
    for (let i = 0; i < 12; i++) {
        // ចាប់យកពាក្យចៃដន្យពី Array bip39Words
        const randomIndex = Math.floor(Math.random() * bip39Words.length);
        chosenWords.push(bip39Words[randomIndex]);
    }

    generatedPhrase = chosenWords.join(" ");
    renderSeedGrid(chosenWords);

    // បើកដំណើរការប៊ូតុង Copy និងកែប្រែស្ថានភាព
    copyBtn.disabled = false;
    statusMessage.innerHTML = "<span style='color: #2ea44f;'>✓ បង្កើតឃ្លាគ្រាប់ពូជជោគជ័យ! សូមរក្សាទុកវាដោយប្រុងប្រយ័ត្ន។</span>";
}

// មុខងារបង្ហាញពាក្យនៅលើអេក្រង់តាមទម្រង់លេខរៀង
function renderSeedGrid(words) {
    seedGrid.innerHTML = ""; // លុបលទ្ធផលចាស់ចោល
    
    words.forEach((word, index) => {
        const wordBox = document.createElement('div');
        wordBox.className = 'word-box';
        wordBox.innerHTML = `<span class="word-number">${index + 1}</span> ${word}`;
        seedGrid.appendChild(wordBox);
    });
}

// មុខងារចម្លងឃ្លាទាំង ១២ ម៉ាត់ចូលទៅក្នុង Clipboard
function copyToClipboard() {
    if (!generatedPhrase) return;

    navigator.clipboard.writeText(generatedPhrase).then(() => {
        const originalText = copyBtn.innerText;
        copyBtn.innerText = "បានចម្លងរួចរាល់! 🔗";
        copyBtn.style.borderColor = "#2ea44f";
        
        setTimeout(() => {
            copyBtn.innerText = originalText;
            copyBtn.style.borderColor = "#30363d";
        }, 2000);
    }).catch(err => {
        statusMessage.innerText = "មិនអាចចម្លងបានទេ៖ " + err;
    });
}

// ភ្ជាប់ព្រឹត្តិការណ៍ចុច (Click Events)
generateBtn.addEventListener('click', generateMnemonic);
copyBtn.addEventListener('click', copyToClipboard);
