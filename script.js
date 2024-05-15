// scripts.js

document.addEventListener('DOMContentLoaded', function () {
    const editor = document.getElementById('editor');
    const boldButton = document.getElementById('boldButton');
    const italicButton = document.getElementById('italicButton');
    const underlineButton = document.getElementById('underlineButton');
    const fontColorPicker = document.getElementById('fontColorPicker');
    const fontSizeInput = document.getElementById('fontSizeInput');
    const textAlignSelect = document.getElementById('textAlignSelect');

    // Function to toggle text formatting
    function toggleFormat(command, value) {
        document.execCommand(command, false, value);
    }

    // Event listeners for toolbar buttons
    boldButton.addEventListener('click', function () {
        toggleFormat('bold');
    });

    italicButton.addEventListener('click', function () {
        toggleFormat('italic');
    });

    underlineButton.addEventListener('click', function () {
        toggleFormat('underline');
    });

    fontColorPicker.addEventListener('change', function () {
        const color = fontColorPicker.value;
        toggleFormat('foreColor', color);
    });

    fontSizeInput.addEventListener('change', function () {
        const size = fontSizeInput.value;
        toggleFormat('fontSize', size + 'px');
    });

    textAlignSelect.addEventListener('change', function () {
        const alignment = textAlignSelect.value;
        toggleFormat('justify', alignment);
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', function (event) {
        if (event.ctrlKey || event.metaKey) { // Check if Ctrl or Command key is pressed
            switch (event.key.toLowerCase()) {
                case 'b':
                    toggleFormat('bold');
                    event.preventDefault(); // Prevent default browser behavior
                    break;
                case 'i':
                    toggleFormat('italic');
                    event.preventDefault();
                    break;
                case 'u':
                    toggleFormat('underline');
                    event.preventDefault();
                    break;
                case 'c':
                    document.execCommand('copy');
                    event.preventDefault();
                    break;
                case 'v':
                    document.execCommand('paste');
                    event.preventDefault();
                    break;
                case 'x':
                    document.execCommand('cut');
                    event.preventDefault();
                    break;
                case 'z':
                    document.execCommand('undo');
                    event.preventDefault();
                    break;
                case 'y':
                    document.execCommand('redo');
                    event.preventDefault();
                    break;
            }
        }
    });
});
