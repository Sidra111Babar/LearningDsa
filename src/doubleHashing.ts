const loadFactorOfDH = 0.7; // Load factor for calculating table size
let userNumbersOfDH: number[] = []; // Array to store user inputs
let hashTableOfDH: number[][] = []; // The hash table
const insertButtonDH = document.createElement('button');
const resetButtonDH = document.createElement('button');

// Add event listener for Add button
document.getElementById('DHAddBtn')!.addEventListener('click', function () {
  const inputElement = document.getElementById('quadraticProbingInput') as HTMLInputElement;
  const inputValue = parseInt(inputElement.value); // Get input value and convert it to a number
  const errorMessage = document.getElementById('errorMessage') as HTMLElement;
  const inputContainer = document.getElementById('inputContainer') as HTMLElement;
  const InputWrapperDH = document.getElementsByClassName('InputWrapperDH')[0] as HTMLElement;

  // Clear previous inputs and hash table
  inputContainer.innerHTML = '';
  document.getElementById('hashTableContainerDH')!.innerHTML = ''; // Reset the hash table display
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
    insertButtonDH.className = 'btn btn-success mt-3';
    insertButtonDH.textContent = 'Insert into Hash Table';
    insertButtonDH.id = 'insertHashTableBtn';
    insertButtonDH.classList.remove('d-none');
    InputWrapperDH.appendChild(insertButtonDH);

    // Create a Reset button
    resetButtonDH.className = 'btn btn-warning mt-3 ms-2';
    resetButtonDH.textContent = 'Reset';
    resetButtonDH.id = 'resetHashTableBtn';
    resetButtonDH.classList.remove('d-none');
    InputWrapperDH.appendChild(resetButtonDH);

    // Add event listener for "Insert into Hash Table"
    insertButtonDH.addEventListener('click', insertIntoHashTableDH);

    // Add event listener for "Reset" button
    resetButtonDH.addEventListener('click', resetHashTableDH);
  }
});

function insertIntoHashTableDH(): void {
  const inputElements = document.querySelectorAll('#inputContainer input[type="number"]') as NodeListOf<HTMLInputElement>;
  userNumbersOfDH = Array.from(inputElements).map(input => parseInt(input.value));

  // Check if all inputs are filled
  if (userNumbersOfDH.some(isNaN)) {
    alert("Please fill all the input boxes with valid numbers.");
    return;
  }

  // Check for duplicate values
  const hasDuplicate = new Set(userNumbersOfDH).size !== userNumbersOfDH.length;
  if (hasDuplicate) {
    alert("Duplicate values are not allowed.");
    return;
  }

  // Calculate the size of the hash table based on the number of inputs and load factor
  const tableSize = Math.ceil(userNumbersOfDH.length / loadFactorOfDH);
  hashTableOfDH = new Array(tableSize).fill(null).map(() => []); // Initialize hash table as an array of empty arrays (separate chaining)
  
  // Create the hash table visually
  displayHashTableDH(tableSize);
  
  // Insert numbers into the hash table
  userNumbersOfDH.forEach(number => insertNumberIntoHashTable(number));
}

function displayHashTableDH(size: number): void {
  const hashTableContainer = document.getElementById('hashTableContainerDH') as HTMLElement;
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

function insertNumberIntoHashTable(value: number): void {
  const tableSize = hashTableOfDH.length;
  let index = value % tableSize; // Calculate the initial index using key % size formula
  let step = 1 + (value % (tableSize - 1)); // Step size for double hashing

  // Check for empty slots or collisions using double hashing
  while (hashTableOfDH[index].length > 0) {
    index = (index + step) % tableSize; // Move to the next index (wrap around using modulus)
  }

  // Insert the number into the respective index
  hashTableOfDH[index].push(value);

  // Update the hash table display
  const valueCell = document.getElementById(`hashIndex${index}`) as HTMLElement;
  valueCell.textContent = hashTableOfDH[index].join(', '); // Display the value at this index
}

// Reset function to clear inputs and the hash table
function resetHashTableDH(): void {
  document.getElementById('inputContainer')!.innerHTML = ''; // Clear input boxes
  document.getElementById('hashTableContainerDH')!.innerHTML = ''; // Clear hash table
  userNumbersOfDH = []; // Reset user input array
  hashTableOfDH = []; // Reset hash table
  insertButtonDH.classList.add('d-none');
  resetButtonDH.classList.add('d-none');
  (document.getElementById('quadraticProbingInput') as HTMLInputElement).value = ''; // Clear input for number of boxes
}
