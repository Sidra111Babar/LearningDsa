"use strict";
function downloadNotes(fileName) {
    const link = document.createElement('a');
    link.href = `./notes/${fileName}`; // Correct path to the file
    link.download = fileName;
    document.body.appendChild(link); // Append link to body for Firefox support
    link.click();
    document.body.removeChild(link); // Clean up after download
}
