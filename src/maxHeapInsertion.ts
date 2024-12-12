/* *************************************************** BST Animation ******************** */
// Declare arrays for the nodes and arrows
// Declare arrays for the nodes and arrows
const propertyDisturbanceMsgMinHeap = document.querySelector('.propertyDisturbMsg') as HTMLElement;
const minHeapInserNodeArray: HTMLElement[] = [
    document.getElementById('minHeapInsertionNodeno1')!,    /* ! mark in TypeScript is called the non-null assertion operator.t is used when you are certain that a value will not be null or undefined, even though TypeScript's type-checking cannot guarantee this. */
    document.getElementById('minHeapInsertionNodeno2')!,
    document.getElementById('minHeapInsertionNodeno3')!,
    document.getElementById('minHeapInsertionNodeno4')!,
    document.getElementById('minHeapInsertionNodeno5')!,
    document.getElementById('minHeapInsertionNodeno6')!,
    document.getElementById('minHeapInsertionNodeno7')!,
    document.getElementById('minHeapInsertionNodeno8')!
  ];
  const minnHeapInserArrowArray: HTMLElement[] = [
    document.getElementById('minHeapInsertionArrowno1')!,
    document.getElementById('minHeapInsertionArrowno2')!,
    document.getElementById('minHeapInsertionArrowno3')!,
    document.getElementById('minHeapInsertionArrowno4')!,
    document.getElementById('minHeapInsertionArrowno5')!,
    document.getElementById('minHeapInsertionArrowno6')!,
    document.getElementById('minHeapInsertionArrowno7')!,
  ];
  
  let minnHeapInserIndex = 0;
  
  // Function to handle Insert button click
  const minnHeapInserinsertNode = () => {
    if (minnHeapInserIndex < minHeapInserNodeArray.length) {
        // Insert the current node
        minHeapInserNodeArray[minnHeapInserIndex].classList.add(`minHeapInsertionNode${minnHeapInserIndex + 1}`);
        // ----------------------------first point where max heap will disturb
        if(minnHeapInserIndex == 2) {
            propertyDisturbanceMsgMinHeap.classList.remove('d-none');   
            // Highlight the node causing the disturbance
            minHeapInserNodeArray[2].classList.add('bg-danger');         
            // Swap visual classes instead of reassigning fixed node classes
            setTimeout(() => {
                // Swap visual classes instead of reassigning fixed node classes after the delay
                minHeapInserNodeArray[2].classList.remove('minHeapInsertionNode3');
                minHeapInserNodeArray[2].classList.add('minHeapInsertionNode1');
                
                minHeapInserNodeArray[0].classList.remove('minHeapInsertionNode1');
                minHeapInserNodeArray[0].classList.add('minHeapInsertionNode3');
                
                // Remove the highlight after the swap
                minHeapInserNodeArray[2].classList.remove('bg-danger');
               propertyDisturbanceMsgMinHeap.classList.add('d-none');

            }, 1000); // 2000 milliseconds = 2 seconds
        }
        // -----------------------------------2nd point where max heap will disturb
        if(minnHeapInserIndex == 7) {
          propertyDisturbanceMsgMinHeap.classList.remove('d-none');   
          minHeapInserNodeArray[7].classList.add('bg-danger');         
          setTimeout(() => {
            minHeapInserNodeArray[7].classList.remove('minHeapInsertionNode8');
            minHeapInserNodeArray[7].classList.add('minHeapInsertionNode4');
            minHeapInserNodeArray[3].classList.remove('minHeapInsertionNode4');
            minHeapInserNodeArray[3].classList.add('minHeapInsertionNode8');
           
          }, 1000);
               
          setTimeout(() => {
            
            minHeapInserNodeArray[7].classList.remove('minHeapInsertionNode4');
            minHeapInserNodeArray[7].classList.add('minHeapInsertionNode2');
            minHeapInserNodeArray[1].classList.remove('minHeapInsertionNode2');
            minHeapInserNodeArray[1].classList.add('minHeapInsertionNode4');
           
          }, 3000);
          setTimeout(() => {
            
            minHeapInserNodeArray[7].classList.remove('minHeapInsertionNode2');
            minHeapInserNodeArray[7].classList.add('minHeapInsertionNode1');
            minHeapInserNodeArray[2].classList.remove('minHeapInsertionNode1');
            minHeapInserNodeArray[2].classList.add('minHeapInsertionNode2');
            minHeapInserNodeArray[7].classList.remove('bg-danger');
            propertyDisturbanceMsgMinHeap.classList.add('d-none');
          }, 5000);
        }
        // If the index is greater than 0, display the arrow for the previous node
        if (minnHeapInserIndex > 0 && minnHeapInserIndex - 1 < minnHeapInserArrowArray.length) {
            const previousArrow = minnHeapInserArrowArray[minnHeapInserIndex - 1];
            previousArrow.classList.remove('d-none');
            previousArrow.classList.add(`minHeapInsertionArrow${minnHeapInserIndex}`);
        }
        // Increment the index for the next node
        minnHeapInserIndex++;
    }
  };
  
  // Function to handle Reset button click
  const minnHeapInserresetNodes = () => {
    minnHeapInserIndex = 0;
  
    // Remove all node and arrow custom classes and reset to initial state
    minHeapInserNodeArray.forEach((node) => {
        node.className = 'rounded bg-primary text-white d-flex justify-content-center align-items-center';
    });

    minnHeapInserArrowArray.forEach((arrow) => {
        arrow.classList.add('d-none');
        arrow.classList.remove('minHeapInsertionArrow1', 'minHeapInsertionArrow2', 'minHeapInsertionArrow3', 'minHeapInsertionArrow4', 'minHeapInsertionArrow5', 'minHeapInsertionArrow6');
    });
  };
  // Attach event listeners to the buttons
  document.getElementById('minHeapInsertionInsertBtn')!.addEventListener('click', minnHeapInserinsertNode);
  document.getElementById('minHeapInsertionResetBtn')!.addEventListener('click', minnHeapInserresetNodes);