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
});
