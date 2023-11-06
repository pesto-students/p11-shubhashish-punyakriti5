// Problem statement : Given an unsorted array of integers, write a function to find the kth largest element in the array using a heap.

// Time : O(k log k+(n-k)log k), O(k) to build minHeap, O(log n) minHeapify function in worst case,(n-k)log k for checking remaing elements is array and heapify if large element is found
// Space : O(k), k sized minHeap 

function minHeapify(arr, i, n) {
  let smallest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < n && arr[left] < arr[smallest]) {
    smallest = left;
  }

  if (right < n && arr[right] < arr[smallest]) {
    smallest = right;
  }
  if (smallest !== i) {
    [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
    minHeapify(arr, smallest, n);
  }
}

function buildMinHeap(arr) {
  let n = arr.length;
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    minHeapify(arr, i, n);
  }
}

function getLargestElement(arr, k) {
  let n = arr.length;
  let minHeap = arr.slice(0, k);
  buildMinHeap(minHeap);

  for (let i = k; i < n; i++) {
    if (minHeap[0] < arr[i]) {
      minHeap[0] = arr[i];
      minHeapify(minHeap, 0, k);
    }
  }
  return minHeap[0];
}

let arr = [4, 15, 3, 7, 23, 17, 6];

console.log(getLargestElement(arr, 4));
