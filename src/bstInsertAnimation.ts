/* *************************************************** BST Animation ******************** */
// Declare arrays for the nodes and arrows
// Declare arrays for the nodes and arrows
const bstNodeArray: HTMLElement[] = [
    document.getElementById('bstNodeno1')!,    /* ! mark in TypeScript is called the non-null assertion operator.t is used when you are certain that a value will not be null or undefined, even though TypeScript's type-checking cannot guarantee this. */
    document.getElementById('bstNodeno2')!,
    document.getElementById('bstNodeno3')!,
    document.getElementById('bstNodeno4')!,
    document.getElementById('bstNodeno5')!,
    document.getElementById('bstNodeno6')!,
    document.getElementById('bstNodeno7')!
  ];
  
  const bstArrowArray: HTMLElement[] = [
    document.getElementById('bstArrowno1')!,
    document.getElementById('bstArrowno2')!,
    document.getElementById('bstArrowno3')!,
    document.getElementById('bstArrowno4')!,
    document.getElementById('bstArrowno5')!,
    document.getElementById('bstArrowno6')!
  ];
  
  let bstIndex = 0;
  
  // Function to handle Insert button click
  const insertNode = () => {
    if (bstIndex < bstNodeArray.length) {
        // Insert the current node
        bstNodeArray[bstIndex].classList.add(`bstNode${bstIndex + 1}`);
        
        // If the index is greater than 0, display the arrow for the previous node
        if (bstIndex > 0 && bstIndex - 1 < bstArrowArray.length) {
            const previousArrow = bstArrowArray[bstIndex - 1];
            previousArrow.classList.remove('d-none');
            previousArrow.classList.add(`bstArrow${bstIndex}`);
        }
        // Increment the index for the next node
        bstIndex++;
    }
  };
  
  // Function to handle Reset button click
  const resetNodes = () => {
    bstIndex = 0;
  
    // Remove all node and arrow custom classes and reset to initial state
    bstNodeArray.forEach((node) => {
        node.className = 'rounded bg-primary text-white d-flex justify-content-center align-items-center';
    });

    bstArrowArray.forEach((arrow) => {
        arrow.classList.add('d-none');
        arrow.classList.remove('bstArrow1', 'bstArrow2', 'bstArrow3', 'bstArrow4', 'bstArrow5', 'bstArrow6');
    });
  };
  // Attach event listeners to the buttons
  document.getElementById('bstInsertBtn')!.addEventListener('click', insertNode);
  document.getElementById('bstResetBtn')!.addEventListener('click', resetNodes);