"use strict";
const firstNode = document.getElementById('minHeapInsertionNodeno1');
const lastNode = document.getElementById('minHeapInsertionNodeno11');
const minHeapDeleteBtn = document.getElementById('minHeapDeleteBtn');
const minHeapDeleteResetBtn = document.getElementById('minHeapDeleteResetBtn');
const deleteNodeErroMsg = document.getElementById('minHeapDeletionErrorMsg');
const lastarrowMinheapDel = document.getElementById('minHeapInsertionArrowno10');
const secInfoMsg = document.getElementById('2ndMsgShow');
const thirdInfoMsg = document.getElementById('3rdMsgShow');
const fourthInfoMsg = document.getElementById('4thMsgShow');
const fourteen = document.getElementById('minHeapInsertionNodeno2');
const ninghteen = document.getElementById('minHeapInsertionNodeno4');
const twentysix = document.getElementById('minHeapInsertionNodeno9');
const deltionInProcessMinHeap = document.getElementById('minHeapDeleteError');
let isDeletionInProgress = false;
minHeapDeleteBtn.addEventListener('click', () => {
    if (isDeletionInProgress) {
        deltionInProcessMinHeap.classList.remove('d-none');
        setTimeout(() => {
            deltionInProcessMinHeap.classList.add('d-none');
        }, 1000);
        return;
    }
    isDeletionInProgress = true;
    lastNode.classList.add('bg-danger');
    lastarrowMinheapDel.classList.add('d-none');
    firstNode.classList.add('d-none');
    lastNode.classList.remove('minHeapInsertionNode11');
    lastNode.classList.add('minHeapInsertionNode1');
    deleteNodeErroMsg.classList.remove('d-none');
    setTimeout(() => {
        lastNode.classList.remove('minHeapInsertionNode1');
        lastNode.classList.add('minHeapInsertionNode2');
        fourteen.classList.remove('minHeapInsertionNode2');
        fourteen.classList.add('minHeapInsertionNode1');
        secInfoMsg.classList.remove('d-none');
    }, 3000);
    setTimeout(() => {
        lastNode.classList.remove('minHeapInsertionNode2');
        lastNode.classList.add('minHeapInsertionNode4');
        ninghteen.classList.remove('minHeapInsertionNode4');
        ninghteen.classList.add('minHeapInsertionNode2');
        secInfoMsg.classList.add('d-none');
        thirdInfoMsg.classList.remove('d-none');
    }, 6000);
    setTimeout(() => {
        lastNode.classList.remove('minHeapInsertionNode4');
        lastNode.classList.add('minHeapInsertionNode9');
        twentysix.classList.remove('minHeapInsertionNode9');
        twentysix.classList.add('minHeapInsertionNode4');
        thirdInfoMsg.classList.add('d-none');
        fourthInfoMsg.classList.remove('d-none');
        lastNode.classList.remove('bg-danger');
    }, 10000);
    setTimeout(() => {
        deleteNodeErroMsg.classList.add('d-none');
        fourthInfoMsg.classList.add('d-none');
    }, 13000);
});
minHeapDeleteResetBtn.addEventListener('click', () => {
    location.reload();
});
