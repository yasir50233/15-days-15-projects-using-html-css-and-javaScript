document.getElementById('copyButton').addEventListener('click', function() {
    // Get the text from the input field
    const textToCopy = document.getElementById('textToCopy').value;

    // Copy the text to the clipboard
    navigator.clipboard.writeText(textToCopy).then(() => {
        // Show a success message
        const copyMessage = document.getElementById('copyMessage');
        copyMessage.textContent = 'Text copied to clipboard!';
        copyMessage.style.display = 'block';

        // Hide the message after 2 seconds
        setTimeout(() => {
            copyMessage.style.display = 'none';
        }, 2000);
    });
});
