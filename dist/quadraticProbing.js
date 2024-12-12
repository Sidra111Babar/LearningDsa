"use strict";
const loadFactorOfQP = 0.7; // Load factor for calculating table size
let userNumbersOfQP = []; // Array to store user inputs
let hashTableOfQP = []; // The hash table
const insertButtonQP = document.createElement('button');
const resetButtonQP = document.createElement('button');
// Add event listener for Add button
document.getElementById('LPAddBtn').addEventListener('click', function () {
    const inputElement = document.getElementById('quadraticProbingInput');
    const inputValue = parseInt(inputElement.value); // Get input value and convert it to a number
    const errorMessage = document.getElementById('errorMessage');
    const inputContainer = document.getElementById('inputContainer');
    const InputWrapperLP = document.getElementsByClassName('InputWrapperLP')[0];
    // Clear previous inputs and hash table
    inputContainer.innerHTML = '';
    document.getElementById('hashTableContainerLP').innerHTML = ''; // Reset the hash table display
    errorMessage.style.display = 'none'; // Hide error message on reset
    if (isNaN(inputValue) || inputValue < 3 || inputValue > 10) {
        // If the input is not a number or outside the range, show an error message
        errorMessage.style.display = 'block';
    }
    else {
        // Hide the error message if input is valid
        errorMessage.style.display = 'none';
        // Create a row for the input boxes (Bootstrap grid)
        const row = document.createElement('div');
        row.className = 'row';
        // Create two columns in the row
        const col1 = document.createElement('div');
        col1.className = 'col-md-6'; // For medium and large screens, this takes half the row
        const col2 = document.createElement('div');
        col2.className = 'col-md-6'; // The other half
        // Dynamically create 'inputValue' number of input boxes
        for (let i = 0; i < inputValue; i++) {
            const newInput = document.createElement('input');
            newInput.type = 'number';
            newInput.className = 'form-control mb-2';
            newInput.id = `input${i + 1}`;
            newInput.placeholder = `Number ${i + 1}`;
            // Distribute the inputs between two columns
            if (i < 5) {
                col1.appendChild(newInput); // First 5 inputs go to the first column
            }
            else {
                col2.appendChild(newInput); // Remaining inputs go to the second column
            }
        }
        // Append the columns to the row
        row.appendChild(col1);
        row.appendChild(col2);
        // Append the row to the input container
        inputContainer.appendChild(row);
        // Create an "Insert into Hash Table" button
        insertButtonQP.className = 'btn btn-success mt-3';
        insertButtonQP.textContent = 'Insert into Hash Table';
        insertButtonQP.id = 'insertHashTableBtn';
        insertButtonQP.classList.remove('d-none');
        InputWrapperLP.appendChild(insertButtonQP);
        // Create a Reset button
        resetButtonQP.className = 'btn btn-warning mt-3 ms-2';
        resetButtonQP.textContent = 'Reset';
        resetButtonQP.id = 'resetHashTableBtn';
        resetButtonQP.classList.remove('d-none');
        InputWrapperLP.appendChild(resetButtonQP);
        // Add event listener for "Insert into Hash Table"
        insertButtonQP.addEventListener('click', insertIntoHashTableQP);
        // Add event listener for "Reset" button
        resetButtonQP.addEventListener('click', resetHashTableQP);
    }
});
function insertIntoHashTableQP() {
    const inputElements = document.querySelectorAll('#inputContainer input[type="number"]');
    userNumbersOfQP = Array.from(inputElements).map(input => parseInt(input.value));
    // Check if all inputs are filled
    if (userNumbersOfQP.some(isNaN)) {
        alert("Please fill all the input boxes with valid numbers.");
        return;
    }
    // Check for duplicate values
    const hasDuplicate = new Set(userNumbersOfQP).size !== userNumbersOfQP.length;
    if (hasDuplicate) {
        alert("Duplicate values are not allowed.");
        return;
    }
    // Calculate the size of the hash table based on the number of inputs and load factor
    const tableSize = Math.ceil(userNumbersOfQP.length / loadFactorOfQP);
    hashTableOfQP = new Array(tableSize).fill(null).map(() => []); // Initialize hash table as an array of empty arrays (separate chaining)
    // Create the hash table visually
    displayHashTableQP(tableSize);
    // Insert numbers into the hash table
    insertNextValueQP();
}
function displayHashTableQP(size) {
    const hashTableContainer = document.getElementById('hashTableContainerLP');
    hashTableContainer.innerHTML = ''; // Clear previous table
    const table = document.createElement('table');
    table.className = 'table table-bordered';
    // Create the table rows and columns for the hash table
    for (let i = 0; i < size; i++) {
        const row = document.createElement('tr');
        const indexCell = document.createElement('td');
        const valueCell = document.createElement('td');
        indexCell.textContent = `Index ${i}`;
        valueCell.id = `hashIndex${i}`; // Assign an id for easier access
        row.appendChild(indexCell);
        row.appendChild(valueCell);
        table.appendChild(row);
    }
    hashTableContainer.appendChild(table);
}
function insertNextValueQP() {
    if (userNumbersOfQP.length === 0)
        return; // Exit when no more numbers are left
    // Take the first number from the list
    const currentNumber = userNumbersOfQP.shift(); // Removes the first element
    const tableSize = hashTableOfQP.length;
    let index = currentNumber % tableSize; // Calculate the initial index using key % size formula
    let i = 0; // Initialize i for quadratic probing
    // Quadratic probing: Check if the index is already occupied
    while (hashTableOfQP[index].length > 0) {
        i++; // Increase the number of collisions
        index = (currentNumber + i * i) % tableSize; // Update index using quadratic probing formula
    }
    // Insert the number into the respective index
    hashTableOfQP[index].push(currentNumber);
    // Update the hash table display
    const valueCell = document.getElementById(`hashIndex${index}`);
    valueCell.textContent = hashTableOfQP[index].join(', '); // Display the value at this index
    // Call the function again for the next number (after a small delay to see the insertion in action)
    setTimeout(insertNextValueQP, 500);
}
// Reset function to clear inputs and the hash table
function resetHashTableQP() {
    document.getElementById('inputContainer').innerHTML = ''; // Clear input boxes
    document.getElementById('hashTableContainerLP').innerHTML = ''; // Clear hash table
    userNumbersOfQP = []; // Reset user input array
    hashTableOfQP = []; // Reset hash table
    insertButtonQP.classList.add('d-none');
    resetButtonQP.classList.add('d-none');
    document.getElementById('quadraticProbingInput').value = ''; // Clear input for number of boxes
}
