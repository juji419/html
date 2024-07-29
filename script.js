document.addEventListener('DOMContentLoaded', () => {
    const editor = CodeMirror.fromTextArea(document.getElementById('code'), {
        mode: "xml",
        lineNumbers: true,
        tabSize: 2,
        autoCloseTags: true
    });

    const previewFrame = document.getElementById('preview');
    const preview = previewFrame.contentDocument || previewFrame.contentWindow.document;

    const runButton = document.getElementById('run');
    const tryAnotherButton = document.getElementById('try-another');
    const exitButton = document.getElementById('exit');

    function updatePreview() {
        preview.open();
        preview.write(editor.getValue());
        preview.close();
    }

    runButton.addEventListener('click', updatePreview);

    tryAnotherButton.addEventListener('click', () => {
     // Try Another as blank    
     editor.setValue('');
     updatePreview();
    });

    exitButton.addEventListener('click', () => {
        window.close(); // Close the current window
    });

    // Initial content as blank
    editor.setValue('');
    updatePreview();
});