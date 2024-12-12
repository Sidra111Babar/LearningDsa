"use strict";
const firstNodemaxHeapDel = document.getElementById('maxHeapDelNodeno1');
const lastNodemaxHeapDel = document.getElementById('maxHeapDelNodeno10');
const maxHeapDeleteBtn = document.getElementById('maxHeapDeleteBtn');
const maxHeapDeleteResetBtn = document.getElementById('maxHeapDeleteResetBtn');
const deleteNodeErroMsgMaxHeapDel = document.getElementById('maxHeapDeletionErrorMsg');
const lastarrowMaxheapDel = document.getElementById('maxHeapInsertionArrowno9');
const secInfoMsgMax = document.getElementById('2ndMsgShowMax');
const thirdInfoMsgMax = document.getElementById('3rdMsgShowMax');
const eightyNine = document.getElementById('maxHeapDelNodeno2');
const seventyFive = document.getElementById('maxHeapInsertionNodeno5');
const propertySatisfyMsgMaxHeapDel = document.getElementById('propertySatisfyMsg');
const deltionInProcessMaxHeap = document.getElementById('maxHeapDeleteError');
let isDeletionInProgressMaxHeap = false;
maxHeapDeleteBtn.addEventListener('click', () => {
    if (isDeletionInProgressMaxHeap) {
        deltionInProcessMaxHeap.classList.remove('d-none');
        setTimeout(() => {
            deltionInProcessMaxHeap.classList.add('d-none');
        }, 1000);
        return;
    }
    isDeletionInProgressMaxHeap = true;
    lastNodemaxHeapDel.classList.add('bg-danger');
    lastarrowMaxheapDel.classList.add('d-none');
    firstNodemaxHeapDel.classList.add('d-none');
    lastNodemaxHeapDel.classList.remove('maxHeapInsertionNode10');
    lastNodemaxHeapDel.classList.add('maxHeapInsertionNode1');
    deleteNodeErroMsgMaxHeapDel.classList.remove('d-none');
    setTimeout(() => {
        lastNodemaxHeapDel.classList.remove('maxHeapInsertionNode1');
        lastNodemaxHeapDel.classList.add('maxHeapInsertionNode2');
        eightyNine.classList.remove('maxHeapInsertionNode2');
        eightyNine.classList.add('maxHeapInsertionNode1');
        secInfoMsgMax.classList.remove('d-none');
    }, 3000);
    setTimeout(() => {
        lastNodemaxHeapDel.classList.remove('maxHeapInsertionNode2');
        lastNodemaxHeapDel.classList.add('maxHeapInsertionNode5');
        seventyFive.classList.remove('maxHeapInsertionNode5');
        seventyFive.classList.add('maxHeapInsertionNode2');
        secInfoMsgMax.classList.add('d-none');
        thirdInfoMsgMax.classList.remove('d-none');
        deleteNodeErroMsgMaxHeapDel.classList.add('d-none');
    }, 6000);
    setTimeout(() => {
        thirdInfoMsgMax.classList.add('d-none');
        lastNodemaxHeapDel.classList.remove('bg-danger');
        propertySatisfyMsgMaxHeapDel.classList.remove('d-none');
    }, 8000);
});
maxHeapDeleteResetBtn.addEventListener('click', () => {
    location.reload();
});
