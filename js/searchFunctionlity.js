// Predefined list of pages with titles and URLs
const pages = [
    {
      title: "Home",
      url: "index.html",
      keywords: "homepage, welcome, main"
    },
    {
      title: "Notes",
      url: "dsaNotes.html",
      keywords: "AVL Notes, Heap, Hashing,Insertion Sort,Merge Sort,Bsf Graph"
    },
    {
      title: "Animations",
      url: "CreationOfSLL.html",
      keywords: ""
    },
    {
      title: "Single Linked List",
      url: "singleLinkedList.html",
      keywords: "Single Linked List"    // More key words can be added but these key words should unique for each page until now I used one for each page< update in future
    }
    ,
    {
      title: "Double Linked List",
      url: "doubleLinkedList.html",
      keywords: "Double Linked List, Doubly Linked List"
    },
    {
      title: "Circular Linked List",
      url: "CircularLinkedList.html",
      keywords: "Circular Linked List"
    },
    {
        title: "Doubly Circular Linked List",
        url: "CircularLinkedList.html",
        keywords: "Doubly Circular Linked List, Double Circular Linked List"
    }
    ,
    {
        title: "Binary Search Tree",
        url: "BinarySearchTree.html",
        keywords: "BST,Binary Search Tree"
    }
    ,
    {
        title: "Stack",
        url: "stack.html",
        keywords: "Stack, LIFO,push,pop,isEmpty,peek"
    }
    ,
    {
        title: "Queue",
        url: "queue.html",
        keywords: "queue,enqueue,dequeue,FIFO,fifo"
    }
    ,
    {
        title: "Recursion",
        url: "Recursion.html",
        keywords: "Recursion,recursive operations,base case,recursive case"
    }
    ,
    {
        title: "Min Heap",
        url: "deletioninMinHeap.html",
        keywords: "deletion in Min heap,Min heap deletion"
    }
    ,
    {
        title: "Max Heap",
        url: "deletionInMaxHeap.html",
        keywords: "deletion in Max heap,Max heap deletion"
    }
    ,
    {
        title: "Insertion in Min Heap",
        url: "InsertionInMinHeap.html",
        keywords: "Insertion in Min heap,Min heap property,Min heap insertion"
    }
    ,
    {
        title: "Insertion in Max Heap",
        url: "InsertionInMaxHeap.html",
        keywords: "Insertion in Max heap,Max heap property,Max heap insertion"
    }
    ,
    {
        title: "Separate Chaining",
        url: "SeparateChaining.html",
        keywords: "Separate Chaining,Separate Chaining Algorithm"
    },
    {
        title: "Linear Probing",
        url: "linearProbing.html",
        keywords: "Linear Probing,Linear Probing Algorithm"
    },
    {
        title: "Quadratic Probing",
        url: "quadraticProbing.html",
        keywords: "Quadratic Probing,Quadratic Probing Algorithm"
    },
    {
        title: "Double Hashing",
        url: "doubleHashing.html",
        keywords: "Double Hashing,Double Hashing Algorithm"
    }
    

  ];

  // Function to handle the search and redirect
  function handleSearch(event) {
    event.preventDefault(); // Prevent form submission
    
    const query = document.getElementById('searchInput').value.toLowerCase();
    
    // Find the first matching page (either title or keywords)
    const match = pages.find(page => 
      page.title.toLowerCase().includes(query) || 
      page.keywords.toLowerCase().includes(query)
    );

    // If a match is found, redirect to the matched page
    if (match) {
      window.location.href = match.url;
    } else {
      alert('No matching page found');
    }
  }