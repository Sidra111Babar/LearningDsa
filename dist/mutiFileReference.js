"use strict";
/* **************************************Load Content***************************** */
function loadContent(file, elementId) {
    fetch(file)
        .then((response) => response.text())
        .then((data) => {
        const element = document.getElementById(elementId);
        if (element) {
            element.innerHTML = data;
        }
        else {
            console.error(`Element with id ${elementId} not found.`);
        }
    })
        .catch((error) => console.error('Error loading file:', error));
}
/* **************************************Load Content***************************** */ 
