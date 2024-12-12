"use strict";
const loadFactorOfLP = 0.75; // Load factor for calculating table size
let userNumbersOfLP = []; // Array to store user inputs
let hashTableOfLP = []; // The hash table
const insertButtonLP = document.createElement('button');
const resetButtonLP = document.createElement('button');
// Add event listener for Add button
document.getElementById('LPAddBtn').addEventListener('click', function () {
    const inputElement = document.getElementById('separateChainingInput');
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
        insertButtonLP.className = 'btn btn-success mt-3';
        insertButtonLP.textContent = 'Insert into Hash Table';
        insertButtonLP.id = 'insertHashTableBtn';
        insertButtonLP.classList.remove('d-none');
        InputWrapperLP.appendChild(insertButtonLP);
        // Create a Reset button
        resetButtonLP.className = 'btn btn-warning mt-3 ms-2';
        resetButtonLP.textContent = 'Reset';
        resetButtonLP.id = 'resetHashTableBtn';
        resetButtonLP.classList.remove('d-none');
        InputWrapperLP.appendChild(resetButtonLP);
        // Add event listener for "Insert into Hash Table"
        insertButtonLP.addEventListener('click', insertIntoHashTableLP);
        // Add event listener for "Reset" button
        resetButtonLP.addEventListener('click', resetHashTableLP);
    }
});
function insertIntoHashTableLP() {
    const inputElements = document.querySelectorAll('#inputContainer input[type="number"]');
    userNumbersOfLP = Array.from(inputElements).map(input => parseInt(input.value));
    // Check if all inputs are filled
    if (userNumbersOfLP.some(isNaN)) {
        alert("Please fill all the input boxes with valid numbers.");
        return;
    }
    // Check for duplicate values
    const hasDuplicate = new Set(userNumbersOfLP).size !== userNumbersOfLP.length;
    if (hasDuplicate) {
        alert("Duplicate values are not allowed.");
        return;
    }
    // Calculate the size of the hash table based on the number of inputs and load factor
    const tableSize = Math.ceil(userNumbersOfLP.length / loadFactorOfLP);
    hashTableOfLP = new Array(tableSize).fill(null).map(() => []); // Initialize hash table as an array of empty arrays (separate chaining)
    // Create the hash table visually
    displayHashTableLP(tableSize);
    // Insert numbers into the hash table
    insertNextValueLP();
}
function displayHashTableLP(size) {
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
function insertNextValueLP() {
    if (userNumbersOfLP.length === 0)
        return; // Exit when no more numbers are left
    // Take the first number from the list
    const currentNumber = userNumbersOfLP.shift(); // Removes the first element
    const tableSize = hashTableOfLP.length;
    let index = currentNumber % tableSize; // Calculate the initial index using key % size formula
    // Linear probing: Check if the index is already occupied
    while (hashTableOfLP[index].length > 0) {
        index = (index + 1) % tableSize; // Move to the next index (wrap around using modulus)
    }
    // Insert the number into the respective index
    hashTableOfLP[index].push(currentNumber);
    // Update the hash table display
    const valueCell = document.getElementById(`hashIndex${index}`);
    valueCell.textContent = hashTableOfLP[index].join(', '); // Display the value at this index
    // Call the function again for the next number (after a small delay to see the insertion in action)
    setTimeout(insertNextValueLP, 500);
}
// Reset function to clear inputs and the hash table
function resetHashTableLP() {
    document.getElementById('inputContainer').innerHTML = ''; // Clear input boxes
    document.getElementById('hashTableContainerLP').innerHTML = ''; // Clear hash table
    userNumbersOfLP = []; // Reset user input array
    hashTableOfLP = []; // Reset hash table
    insertButtonLP.classList.add('d-none');
    resetButtonLP.classList.add('d-none');
    document.getElementById('separateChainingInput').value = ''; // Clear input for number of boxes
}
