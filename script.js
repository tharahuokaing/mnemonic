function copySeedPhrase() {
    const wordElements = document.querySelectorAll('.word-box');
    let seedPhrase = "";

    wordElements.forEach((el, index) => {
        // Remove the number part (e.g., '1. ') and get the word
        const text = el.innerText.replace(/\d+\./, '').trim();
        seedPhrase += text + (index < wordElements.length - 1 ? " " : "");
    });

    navigator.clipboard.writeText(seedPhrase).then(() => {
        const statusMessage = document.getElementById('statusMessage');
        statusMessage.innerText = "បានចម្លងឃ្លាគ្រាប់ពូជទៅកាន់ Clipboard ដោយជោគជ័យ!";
        statusMessage.style.color = "green";
    }).catch(err => {
        console.error('Error in copying: ', err);
    });
}

function generateSeedPhrase() {
    // Placeholder function as per original request
    const statusMessage = document.getElementById('statusMessage');
    statusMessage.innerText = "ឃ្លាគ្រាប់ពូជត្រូវបានបង្កើតថ្មីរួចរាល់។";
    statusMessage.style.color = "blue";
}
