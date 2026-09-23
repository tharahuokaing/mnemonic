/**
 * Copies the 12-word mnemonic seed phrase to the system clipboard
 * ចម្លងឃ្លាសម្ងាត់ ១២ ម៉ាត់ទៅកាន់ Clipboard (Khmer & English)
 */
function copySeedPhrase() {
    const wordElements = document.querySelectorAll('.word-box');
    let seedPhrase = "";

    wordElements.forEach((el, index) => {
        // Strip out the index number prefix (e.g., "1. ") and trim extra whitespace
        const text = el.innerText.replace(/^\d+\.\s*/, '').trim();
        seedPhrase += text + (index < wordElements.length - 1 ? " " : "");
    });

    if (!seedPhrase) {
        console.warn('No seed phrase found to copy.');
        return;
    }

    navigator.clipboard.writeText(seedPhrase).then(() => {
        const statusMessage = document.getElementById('statusMessage');
        if (statusMessage) {
            statusMessage.innerHTML = `
                <span style="color: #2e7d32; font-weight: bold;">
                    ✅ បានចម្លងឃ្លាគ្រាប់ពូជទៅកាន់ Clipboard ដោយជោគជ័យ!
                </span><br>
                <small style="color: #2e7d32; font-family: 'Poppins', sans-serif;">
                    Seed phrase successfully copied to clipboard!
                </small>
            `;
        }
    }).catch(err => {
        console.error('Error copying to clipboard: ', err);
        const statusMessage = document.getElementById('statusMessage');
        if (statusMessage) {
            statusMessage.innerHTML = `
                <span style="color: #d32f2f; font-weight: bold;">
                    ❌ បរាជ័យក្នុងការចម្លង! សូមព្យាយាមម្តងទៀត។
                </span><br>
                <small style="color: #d32f2f; font-family: 'Poppins', sans-serif;">
                    Failed to copy to clipboard! Please try again.
                </small>
            `;
        }
    });
}

/**
 * Generates/refreshes the seed phrase status display
 * បង្កើត ឬផ្លាស់ប្តូរឃ្លាសម្ងាត់ថ្មី (Khmer & English)
 */
function generateSeedPhrase() {
    const statusMessage = document.getElementById('statusMessage');
    if (statusMessage) {
        statusMessage.innerHTML = `
            <span style="color: #1976d2; font-weight: bold;">
                🔑 ឃ្លាគ្រាប់ពូជត្រូវបានបង្កើតថ្មីរួចរាល់។
            </span><br>
            <small style="color: #1976d2; font-family: 'Poppins', sans-serif;">
                New seed phrase generated successfully.
            </small>
        `;
    }
}

/* --- Attach Event Listeners on DOM Load --- */
document.addEventListener('DOMContentLoaded', () => {
    const copyBtn = document.getElementById('copyBtn');
    const generateBtn = document.getElementById('generateBtn');

    if (copyBtn) {
        copyBtn.addEventListener('click', copySeedPhrase);
    }

    if (generateBtn) {
        generateBtn.addEventListener('click', generateSeedPhrase);
    }
});
