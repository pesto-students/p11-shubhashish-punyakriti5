// Problem statement : Find the kth Smallest Element in a Row-wise and Column-wise Sorted Matrix using a Min Heap

// Time : O(n log n), minHeapify and building heap
// Space : O(n), matrix length is n, as it has to take rows and cols, so 2n elements in minheap

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
  for (let i = Math.floor(n / 2); i >= 0; i--) {
    minHeapify(arr, i, n);
  }
}

function getMinRowColWise(arr, i, j) {
  let n = arr.length;

  let minHeap = [];
  for (let ele = 0; ele < n; ele++) {
    minHeap.push(arr[i][ele]);
  }
  buildMinHeap(minHeap);
  console.log("rowMin", minHeap[0]);

  for (let ele = 0; ele < n; ele++) {
    minHeap.push(arr[ele][j]);
  }
  buildMinHeap(minHeap);
  console.log("colMin", minHeap[0]);
  
  return minHeap[0];
}

let arr = [
  [71, 2, 11],
  [8, 1, 12],
  [0, 17, 3],
];

console.log(getMinRowColWise(arr, 1, 0));
