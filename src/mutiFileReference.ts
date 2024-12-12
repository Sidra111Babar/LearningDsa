 /* **************************************Load Content***************************** */
 function loadContent(file: string, elementId: string): void {
    fetch(file)
        .then((response: Response) => response.text())
        .then((data: string) => {
            const element = document.getElementById(elementId);
            if (element) {
                element.innerHTML = data;
            } else {
                console.error(`Element with id ${elementId} not found.`);
            }
        })
        .catch((error: Error) => console.error('Error loading file:', error));
}

  /* **************************************Load Content***************************** */