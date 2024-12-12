const firstNode = document.getElementById('minHeapInsertionNodeno1') as HTMLElement;
const lastNode = document.getElementById('minHeapInsertionNodeno11') as HTMLElement;
const minHeapDeleteBtn = document.getElementById('minHeapDeleteBtn') as HTMLElement;
const minHeapDeleteResetBtn = document.getElementById('minHeapDeleteResetBtn') as HTMLElement;
const deleteNodeErroMsg = document.getElementById('minHeapDeletionErrorMsg') as HTMLElement;
const lastarrowMinheapDel = document.getElementById('minHeapInsertionArrowno10') as HTMLElement;
const secInfoMsg = document.getElementById('2ndMsgShow') as HTMLElement;
const thirdInfoMsg = document.getElementById('3rdMsgShow') as HTMLElement;
const fourthInfoMsg = document.getElementById('4thMsgShow') as HTMLElement;
const fourteen = document.getElementById('minHeapInsertionNodeno2') as HTMLElement;
const ninghteen = document.getElementById('minHeapInsertionNodeno4') as HTMLElement;
const twentysix = document.getElementById('minHeapInsertionNodeno9') as HTMLElement;
const deltionInProcessMinHeap = document.getElementById('minHeapDeleteError') as HTMLElement;
let isDeletionInProgress = false;
minHeapDeleteBtn.addEventListener('click',()=>{
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

})
minHeapDeleteResetBtn.addEventListener('click', () => {
  location.reload();
});
