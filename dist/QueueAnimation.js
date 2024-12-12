"use strict";
/* ***************************************************Queue Animation*********************** */
document.addEventListener('DOMContentLoaded', () => {
    const pushBtnQueue = document.getElementById('pushBtnQueue');
    const popBtnQueue = document.getElementById('popBtnQueue');
    // Queue array (maximum 4 elements)
    const queue = [
        document.getElementById('box1Queue'),
        document.getElementById('box2Queue'),
        document.getElementById('box3Queue'),
        document.getElementById('box4Queue'),
    ];
    const queueSize = queue.length; // Queue size is 4
    let indexQueue = 0; // Start from index 0 for both push and pop
    // Push function (same as stack)
    const pushQueue = () => {
        if (indexQueue < queueSize) {
            // Add the corresponding class to the box based on the current index
            queue[indexQueue].classList.add(`boxQueueno${indexQueue + 1}`);
            indexQueue++; // Increment the index after the push
        }
        else {
            alert('Queue Overflow!');
        }
    };
    // Pop function (FIFO behavior)
    const popQueue = () => {
        if (indexQueue > 0) {
            // Decrement the index before removing the class for FIFO
            let currentIndex = queueSize - indexQueue;
            // Remove the class from the first element in the queue (FIFO)
            queue[currentIndex].classList.remove(`boxQueueno${currentIndex + 1}`);
            indexQueue--; // Decrease index to shift the elements in the queue
        }
        else {
            alert('Queue Underflow!');
        }
    };
    // Attach event listeners to buttons
    pushBtnQueue.addEventListener('click', pushQueue);
    popBtnQueue.addEventListener('click', popQueue);
});
