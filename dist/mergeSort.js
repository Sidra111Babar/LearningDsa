"use strict";
function processMergeSortInput() {
    // Get the input value as a string
    const mergeSortInput = document.getElementById('numberInput').value;
    // Split the input string by spaces and filter out empty strings
    const numberArray = mergeSortInput.split(' ').filter(num => num !== '');
    // Convert the strings to numbers using map
    const mergeSortNumberArray = numberArray.map(num => Number(num));
    // Check if all the values are valid numbers
    if (mergeSortNumberArray.some(num => isNaN(num))) {
        document.getElementById('output').textContent = 'Invalid input! Please enter only numbers.';
        return [];
    }
    else {
        // Output the array for display purposes
        document.getElementById('output').textContent = `Array: [${mergeSortNumberArray}]`;
        // Start the merge sort and visualize it
        mergeSort(mergeSortNumberArray, 'visualContainer');
        return mergeSortNumberArray; // Return the number array
    }
}
function mergeSort(array, containerId) {
    if (array.length <= 1) {
        return array;
    }
    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);
    // Update the UI to show the split
    updateUI(containerId, left, right);
    // Recursively sort the left and right arrays
    return merge(mergeSort(left, containerId), mergeSort(right, containerId));
}
function updateUI(containerId, left, right) {
    const container = document.getElementById(containerId);
    if (!container)
        return;
    // Clear the current container
    container.innerHTML = '';
    // Create divs for left and right parts
    const leftDiv = document.createElement('div');
    const rightDiv = document.createElement('div');
    // Add a margin or any class for visual spacing
    leftDiv.classList.add('mx-3');
    rightDiv.classList.add('mx-3');
    // Populate left div with array elements
    left.forEach(num => {
        const span = document.createElement('span');
        span.classList.add('array-element');
        span.textContent = num.toString();
        leftDiv.appendChild(span);
    });
    // Populate right div with array elements
    right.forEach(num => {
        const span = document.createElement('span');
        span.classList.add('array-element');
        span.textContent = num.toString();
        rightDiv.appendChild(span);
    });
    // Append the left and right divs to the container
    container.appendChild(leftDiv);
    container.appendChild(rightDiv);
}
function merge(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        }
        else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return [...result, ...left.slice(leftIndex), ...right.slice(rightIndex)];
}
