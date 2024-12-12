const loadFactor = 0.75; // Load factor for calculating table size
let userNumbers: number[] = []; // Array to store user inputs
let hashTable: number[][] = []; // The hash table
const insertButton = document.createElement('button');
const resetButton = document.createElement('button');

// Add event listener for Add button
document.getElementById('separateChainingAddBtn')!.addEventListener('click', function() {
  const inputElement = document.getElementById('separateChainingInput') as HTMLInputElement;
  const inputValue = parseInt(inputElement.value); // Get input value and convert it to a number
  const errorMessage = document.getElementById('errorMessage') as HTMLElement;
  const inputContainer = document.getElementById('inputContainer') as HTMLElement;
  const separateChainingInputWrapper = document.getElementsByClassName('separateChainingInputWrapper')[0] as HTMLElement;

  // Clear previous inputs and hash table
  inputContainer.innerHTML = '';
  document.getElementById('hashTableContainer')!.innerHTML = ''; // Reset the hash table display
  errorMessage.style.display = 'none'; // Hide error message on reset
  if (isNaN(inputValue) || inputValue < 3 || inputValue > 10) {
    // If the input is not a number or outside the range, show an error message
    errorMessage.style.display = 'block';
  } else {
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
      } else {
        col2.appendChild(newInput); // Remaining inputs go to the second column
      }
    }

    // Append the columns to the row
    row.appendChild(col1);
    row.appendChild(col2);

    // Append the row to the input container
    inputContainer.appendChild(row);

    // Create an "Insert into Hash Table" button
    insertButton.className = 'btn btn-success mt-3';
    insertButton.textContent = 'Insert into Hash Table';
    insertButton.id = 'insertHashTableBtn';
    insertButton.classList.remove('d-none');
    separateChainingInputWrapper.appendChild(insertButton);
    
    // Create a Reset button
    resetButton.className = 'btn btn-warning mt-3 ms-2';
    resetButton.textContent = 'Reset';
    resetButton.id = 'resetHashTableBtn';
    resetButton.classList.remove('d-none');
    separateChainingInputWrapper.appendChild(resetButton);

    // Add event listener for "Insert into Hash Table"
    insertButton.addEventListener('click', insertIntoHashTable);

    // Add event listener for "Reset" button
    resetButton.addEventListener('click', resetHashTable);
  }
});

function insertIntoHashTable(): void {
  const inputElements = document.querySelectorAll('#inputContainer input[type="number"]') as NodeListOf<HTMLInputElement>;
  userNumbers = Array.from(inputElements).map(input => parseInt(input.value));

  // Check if all inputs are filled
  if (userNumbers.some(isNaN)) {
    alert("Please fill all the input boxes with valid numbers.");
    return;
  }

  // Check for duplicate values
  const hasDuplicate = new Set(userNumbers).size !== userNumbers.length;
  if (hasDuplicate) {
    alert("Duplicate values are not allowed.");
    return;
  }

  // Calculate the size of the hash table based on the number of inputs and load factor
  const tableSize = Math.ceil(userNumbers.length / loadFactor);
  hashTable = new Array(tableSize).fill(null).map(() => []); // Initialize hash table as an array of empty arrays (separate chaining)
  // Create the hash table visually
  displayHashTable(tableSize);
  // Insert numbers into the hash table
  insertNextValue();
}

function displayHashTable(size: number): void {
  const hashTableContainer = document.getElementById('hashTableContainer') as HTMLElement;
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

function insertNextValue(): void {
  if (userNumbers.length === 0) return; // Exit when no more numbers are left

  // Take the first number from the list
  const currentNumber = userNumbers.shift()!; // Removes the first element
  const tableSize = hashTable.length;
  const index = currentNumber % tableSize; // Calculate the index using the key % size formula

  // Insert the number into the respective index (with chaining)
  hashTable[index].push(currentNumber);

  // Update the hash table display
  const valueCell = document.getElementById(`hashIndex${index}`) as HTMLElement;
  valueCell.textContent = hashTable[index].join(', '); // Display the values at this index

  // Call the function again for the next number (after a small delay to see the insertion in action)
  setTimeout(insertNextValue, 500);
}

// Reset function to clear inputs and the hash table
function resetHashTable(): void {
  document.getElementById('inputContainer')!.innerHTML = ''; // Clear input boxes
  document.getElementById('hashTableContainer')!.innerHTML = ''; // Clear hash table
  userNumbers = []; // Reset user input array
  hashTable = []; // Reset hash table
  insertButton.classList.add('d-none');
  resetButton.classList.add('d-none');
  (document.getElementById('separateChainingInput') as HTMLInputElement).value = ''; // Clear input for number of boxes
}
