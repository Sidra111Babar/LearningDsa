"use strict";
/* ****************************************************** dark mode **************************************** */
// Select the elements safely
console.log("Hello World");
const firstnavHeading = document.querySelector('.firstnavHeading');
const darkModeIcon = document.getElementById('darkLightIcon');
// Wait for the window to fully load
window.addEventListener('load', () => {
    // Check if the elements exist in the DOM before interacting with them
    if (darkModeIcon) {
        const darkMode = localStorage.getItem('dark-mode');
        if (darkMode === 'enabled') {
            document.body.classList.add('dark-mode');
            darkModeIcon.classList.replace('bx-moon', 'bx-sun');
        }
    }
});
/* ****************************************************** dark mode****************************************** */
// Toggle dark mode functionality
const toggleDarkMode = () => {
    if (!darkModeIcon)
        return; // Ensure the icon exists before interacting with it
    const isDarkMode = document.body.classList.toggle('dark-mode');
    if (isDarkMode) {
        localStorage.setItem('dark-mode', 'enabled');
        darkModeIcon.classList.replace('bx-moon', 'bx-sun');
    }
    else {
        localStorage.setItem('dark-mode', 'disabled');
        darkModeIcon.classList.replace('bx-sun', 'bx-moon');
    }
};
// Add event listener only if the icon exists
if (darkModeIcon) {
    darkModeIcon.addEventListener('click', toggleDarkMode);
}
// Mock user database, replace this with an actual database check
const registeredUsers = [
    { email: 'user1@example.com', password: 'password123' },
    { email: 'user2@example.com', password: 'password456' }
];
document.getElementById('signupForm')?.addEventListener('submit', function (event) {
    event.preventDefault();
    // Type assertions to ensure proper element types
    const emailElement = document.getElementById('email');
    const passwordElement = document.getElementById('password');
    const confirmPasswordElement = document.getElementById('confirmPassword');
    const email = emailElement.value;
    const password = passwordElement.value;
    const confirmPassword = confirmPasswordElement.value;
    // Check if user is already registered
    const userExists = registeredUsers.some((user) => user.email === email);
    if (userExists) {
        const loginPrompt = document.getElementById('loginPrompt');
        if (loginPrompt) {
            loginPrompt.innerHTML = '<p>User already registered. <a href="#" id="showLogin">Login</a></p>';
        }
        const signupForm = document.getElementById('signupForm');
        const loginForm = document.getElementById('loginForm');
        if (signupForm && loginForm) {
            signupForm.style.display = 'none';
            loginForm.style.display = 'block';
        }
    }
    else {
        if (password === confirmPassword) {
            // Here you would add code to save the new user to your database
            alert('Successfully signed up!');
        }
        else {
            alert('Passwords do not match.');
        }
    }
});
document.getElementById('loginForm')?.addEventListener('click', function (event) {
    const target = event.target;
    if (target.id === 'showLogin') {
        alert('Redirecting to login page...');
        // Redirect or show login form here
    }
});
/* *********************************************** animations *************************** */
/* ***************************************Insertion in Singly Linked List (At Tail) */
const oneNodeInser = document.querySelector('.oneNodeInsertion');
const nowTwoNodesInser = document.querySelector('.twoNodesInsertion');
const nowThreeNodesInser = document.querySelector('.threeNodesInsertion');
let currentStepInser = 1;
const resetAllNodesInInsertion = () => {
    // Check if elements exist before applying class changes
    if (oneNodeInser) {
        oneNodeInser.classList.add('d-none');
        oneNodeInser.classList.remove('d-flex');
    }
    if (nowTwoNodesInser) {
        nowTwoNodesInser.classList.add('d-none');
        nowTwoNodesInser.classList.remove('d-flex');
    }
    if (nowThreeNodesInser) {
        nowThreeNodesInser.classList.add('d-none');
        nowThreeNodesInser.classList.remove('d-flex');
    }
};
const insertionSinglyLinkedList = () => {
    // First reset all nodes
    resetAllNodesInInsertion();
    // Display nodes based on the current step
    if (currentStepInser === 1 && oneNodeInser) {
        oneNodeInser.classList.remove('d-none');
        oneNodeInser.classList.add('d-flex');
    }
    else if (currentStepInser === 2 && nowTwoNodesInser) {
        nowTwoNodesInser.classList.remove('d-none');
        nowTwoNodesInser.classList.add('d-flex');
    }
    else if (currentStepInser === 3 && nowThreeNodesInser) {
        nowThreeNodesInser.classList.remove('d-none');
        nowThreeNodesInser.classList.add('d-flex');
    }
    // Increment step and reset if greater than 3
    currentStepInser = currentStepInser === 3 ? 1 : currentStepInser + 1;
};
// Run the insertionSinglyLinkedList function every 2 seconds
setInterval(insertionSinglyLinkedList, 2000);
//---------------------------------------Inserion in Singly Linked List(at Head)
window.addEventListener('DOMContentLoaded', () => {
    // Select the element by ID
    const headElement = document.getElementById('headOfNode');
    if (headElement) {
        // Delay of 3 seconds (3000 milliseconds)
        setTimeout(() => {
            // Add the animation class to start the animation
            headElement.style.transform = 'translateX(-70%)';
        }, 3000);
    }
});
/* ***************************************************Stack Animation*********************** */
// HTML elements
document.addEventListener('DOMContentLoaded', () => {
    const pushBtn = document.getElementById('pushBtn');
    const popBtn = document.getElementById('popBtn');
    // Stack array (maximum 4 elements)
    const stack = [
        document.getElementById('bstNode1'),
        document.getElementById('bstNode2'),
        document.getElementById('bstNode3'),
        document.getElementById('bstNode4'),
    ];
    const stackSize = stack.length;
    let index = 0;
    // Push function
    const push = () => {
        if (index < stackSize) {
            stack[index].classList.add(`boxno${index + 1}`);
            index++;
        }
        else {
            alert('Stack Overflow!');
        }
    };
    // Pop function
    const pop = () => {
        if (index > 0) {
            index--;
            stack[index].classList.remove(`boxno${index + 1}`);
        }
        else {
            alert('Stack Underflow!');
        }
    };
    pushBtn.addEventListener('click', push);
    popBtn.addEventListener('click', pop);
});
