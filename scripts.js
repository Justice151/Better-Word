document.addEventListener('DOMContentLoaded', function() {
    const editor = document.getElementById('editor');
    const spellCheckButton = document.getElementById('spellCheckButton');

    let typo;
    let misspelledWords = [];

    // Initialize Typo.js with English (US) dictionary
    fetch('https://cdn.jsdelivr.net/npm/typo-js@1.1.2/typo/dictionaries/en_US/en_US.dic')
        .then(response => response.text())
        .then(data => {
            typo = new Typo('en_US', false, false, { dictionary: data });
        })
        .catch(error => {
            console.error('Error loading dictionary:', error);
        });

    // Function to spell check the content of the editor
    function spellCheck() {
        const text = editor.innerText;
        const words = text.split(/\s+/);
        misspelledWords = words.filter(word => !typo.check(word));

        if (misspelledWords.length > 0) {
            // Highlight misspelled words
            misspelledWords.forEach(word => {
                const regex = new RegExp(word, 'gi');
                editor.innerHTML = editor.innerHTML.replace(regex, `<span class="misspelled">${word}</span>`);
            });
        } else {
            alert('No misspelled words found.');
        }
    }

    // Event listener for spell check button
    spellCheckButton.addEventListener('click', spellCheck);
});
