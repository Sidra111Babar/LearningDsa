/* *************************************************** BST Animation ******************** */
// Declare arrays for the nodes and arrows
// Declare arrays for the nodes and arrows
const propertyDisturbanceMsgMinnHeap = document.querySelector('.propertyDisturbMsg') as HTMLElement;
const minnHeapInserNodeArray: HTMLElement[] = [
    document.getElementById('minHeapInsertionNodeno1')!,    /* ! mark in TypeScript is called the non-null assertion operator.t is used when you are certain that a value will not be null or undefined, even though TypeScript's type-checking cannot guarantee this. */
    document.getElementById('minHeapInsertionNodeno2')!,
    document.getElementById('minHeapInsertionNodeno3')!,
    document.getElementById('minHeapInsertionNodeno4')!,
    document.getElementById('minHeapInsertionNodeno5')!,
    document.getElementById('minHeapInsertionNodeno6')!,
  ];
  const minHeapInserArrowArray: HTMLElement[] = [
    document.getElementById('minHeapInsertionArrowno1')!,
    document.getElementById('minHeapInsertionArrowno2')!,
    document.getElementById('minHeapInsertionArrowno3')!,
    document.getElementById('minHeapInsertionArrowno4')!,
    document.getElementById('minHeapInsertionArrowno5')!,
  ];
  let minHeapInserIndex = 0;
  // Function to handle Insert button click
  const minHeapInserinsertNode = () => {
    if (minHeapInserIndex < minnHeapInserNodeArray.length) {
        // Insert the current node
        minnHeapInserNodeArray[minHeapInserIndex].classList.add(`minHeapInsertionNode${minHeapInserIndex + 1}`);
        // ----------------------------first point where max heap will disturb
        // -----------------------------------2nd point where max heap will disturb
        if(minHeapInserIndex == 3) {
          propertyDisturbanceMsgMinnHeap.classList.remove('d-none');   
          minnHeapInserNodeArray[3].classList.add('bg-danger');         
          setTimeout(() => {
            minnHeapInserNodeArray[3].classList.remove('minHeapInsertionNode4');
            minnHeapInserNodeArray[3].classList.add('minHeapInsertionNode2');
            minnHeapInserNodeArray[1].classList.remove('minHeapInsertionNode2');
            minnHeapInserNodeArray[1].classList.add('minHeapInsertionNode4');
           
          }, 1000);
               
          setTimeout(() => {
            minnHeapInserNodeArray[3].classList.remove('minHeapInsertionNode2');
            minnHeapInserNodeArray[3].classList.add('minHeapInsertionNode1');
            minnHeapInserNodeArray[0].classList.remove('minHeapInsertionNode1');
            minnHeapInserNodeArray[0].classList.add('minHeapInsertionNode2');
            minnHeapInserNodeArray[3].classList.remove('bg-danger');
            propertyDisturbanceMsgMinnHeap.classList.add('d-none');
          }, 3000);
        }
        if(minHeapInserIndex == 5){
            propertyDisturbanceMsgMinnHeap.classList.remove('d-none');   
            minnHeapInserNodeArray[5].classList.add('bg-danger'); 
            setTimeout(() => {
                minnHeapInserNodeArray[5].classList.remove('minHeapInsertionNode6');
                minnHeapInserNodeArray[5].classList.add('minHeapInsertionNode3');
                minnHeapInserNodeArray[2].classList.remove('minHeapInsertionNode3');
                minnHeapInserNodeArray[2].classList.add('minHeapInsertionNode6');
              }, 1000);
              setTimeout(() => {
                minnHeapInserNodeArray[5].classList.remove('minHeapInsertionNode3');
                minnHeapInserNodeArray[5].classList.add('minHeapInsertionNode1');
                minnHeapInserNodeArray[3].classList.remove('minHeapInsertionNode1');
                minnHeapInserNodeArray[3].classList.add('minHeapInsertionNode3');
                minnHeapInserNodeArray[5].classList.remove('bg-danger');
                propertyDisturbanceMsgMinnHeap.classList.add('d-none');
              }, 3000);
        }

        // If the index is greater than 0, display the arrow for the previous node
        if (minHeapInserIndex > 0 && minHeapInserIndex - 1 < minHeapInserArrowArray.length) {
            const previousArrow = minHeapInserArrowArray[minHeapInserIndex - 1];
            previousArrow.classList.remove('d-none');
            previousArrow.classList.add(`minHeapInsertionArrow${minHeapInserIndex}`);
        }
        // Increment the index for the next node
        minHeapInserIndex++;
    }
  };
  
  // Function to handle Reset button click
  const minHeapInserresetNodes = () => {
    minHeapInserIndex = 0;
  
    // Remove all node and arrow custom classes and reset to initial state
    minnHeapInserNodeArray.forEach((node) => {
        node.className = 'rounded bg-primary text-white d-flex justify-content-center align-items-center';
    });

    minHeapInserArrowArray.forEach((arrow) => {
        arrow.classList.add('d-none');
        arrow.classList.remove('minHeapInsertionArrow1', 'minHeapInsertionArrow2', 'minHeapInsertionArrow3', 'minHeapInsertionArrow4', 'minHeapInsertionArrow5', 'minHeapInsertionArrow6');
    });
  };
  // Attach event listeners to the buttons
  document.getElementById('minHeapInsertionInsertBtn')!.addEventListener('click', minHeapInserinsertNode);
  document.getElementById('minHeapInsertionResetBtn')!.addEventListener('click', minHeapInserresetNodes);