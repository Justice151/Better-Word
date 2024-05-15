// scripts.js

document.addEventListener('DOMContentLoaded', function () {
    const editor = document.getElementById('editor');
    const spellChecker = new Typo('en_US'); // Create a Typo.js instance for English

    // Function to toggle text formatting
    function toggleFormat(command, value) {
        document.execCommand(command, false, value);
    }

    // Function to check spelling and highlight misspelled words
    function checkSpelling() {
        const text = editor.innerText;
        const words = text.split(/\s+/);
        for (const word of words) {
            if (!spellChecker.check(word)) {
                const regex = new RegExp('\\b' + word + '\\b', 'gi');
                const match = text.match(regex);
                if (match) {
                    editor.innerHTML = editor.innerHTML.replace(regex, `<span class="misspelled">${word}</span>`);
                }
            }
        }
    }

    // Event listener to check spelling on input
    editor.addEventListener('input', checkSpelling);

    // Event listener for auto-save
    editor.addEventListener('input', function () {
        saveContent(); // Save content to local storage on every input change
    });

    // Function to save document content to local storage
    function saveContent() {
        const content = editor.innerHTML;
        localStorage.setItem('documentContent', content);
    }

    // Load saved content from local storage
    const savedContent = localStorage.getItem('documentContent');
    if (savedContent) {
        editor.innerHTML = savedContent;
    }

    // Event listeners for toolbar buttons
    document.getElementById('boldButton').addEventListener('click', function () {
        toggleFormat('bold');
    });

    document.getElementById('italicButton').addEventListener('click', function () {
        toggleFormat('italic');
    });

    document.getElementById('underlineButton').addEventListener('click', function () {
        toggleFormat('underline');
    });

    document.getElementById('fontColorPicker').addEventListener('change', function () {
        const color = fontColorPicker.value;
        toggleFormat('foreColor', color);
    });

    document.getElementById('fontSizeInput').addEventListener('change', function () {
        const size = fontSizeInput.value;
        toggleFormat('fontSize', size + 'px');
    });

    document.getElementById('textAlignSelect').addEventListener('change', function () {
        const alignment = textAlignSelect.value;
        toggleFormat('justify', alignment);
    });
});
