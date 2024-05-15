// scripts.js

document.addEventListener('DOMContentLoaded', function () {
    const editor = document.getElementById('editor');

    // Load document content from local storage
    const savedContent = localStorage.getItem('documentContent');
    if (savedContent) {
        editor.innerHTML = savedContent;
    }

    // Save document content to local storage when user stops typing
    let typingTimer;
    editor.addEventListener('input', function () {
        clearTimeout(typingTimer);
        typingTimer = setTimeout(function () {
            const content = editor.innerHTML;
            localStorage.setItem('documentContent', content);
        }, 1000); // Adjust the delay as needed
    });

    // Clear document content and local storage
    const clearButton = document.getElementById('clearButton');
    clearButton.addEventListener('click', function () {
        editor.innerHTML = '';
        localStorage.removeItem('documentContent');
    });
});
