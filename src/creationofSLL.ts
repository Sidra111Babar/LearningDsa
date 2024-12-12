//-------------------------------------------------------- Creation of Singly Linked List
const oneNode = document.querySelector('.oneNode') as HTMLElement;
const nowTwoNodes = document.querySelector('.twoNodes') as HTMLElement;
const nowThreeNodes = document.querySelector('.threeNodes') as HTMLElement;
let currentStep = 1;
const resetAllNodes = () => {
  // Hide all nodes before each cycle to restart the animation
  oneNode.classList.add('d-none');
  oneNode.classList.remove('d-flex');
  nowTwoNodes.classList.add('d-none');
  nowTwoNodes.classList.remove('d-flex');
  nowThreeNodes.classList.add('d-none');
  nowThreeNodes.classList.remove('d-flex');
}
const createSinglyLinkedList = () => {
  // Reset nodes at the beginning of each cycle
  resetAllNodes();
  // Display nodes based on the current step
  if (currentStep === 1) {
    oneNode.classList.remove('d-none');
    oneNode.classList.add('d-flex');
  } else if (currentStep === 2) {
    oneNode.classList.remove('d-none');
    oneNode.classList.add('d-flex');
    nowTwoNodes.classList.remove('d-none');
    nowTwoNodes.classList.add('d-flex');
  } else if (currentStep === 3) {
    oneNode.classList.remove('d-none');
    oneNode.classList.add('d-flex');
    nowTwoNodes.classList.remove('d-none');
    nowTwoNodes.classList.add('d-flex');
    nowThreeNodes.classList.remove('d-none');
    nowThreeNodes.classList.add('d-flex');
  }

  // Increment step and reset if greater than 3 (loop infinitely)
  currentStep = currentStep === 3 ? 1 : currentStep + 1;
}
// Run the createSinglyLinkedList function every 2 seconds
setInterval(createSinglyLinkedList, 2000);