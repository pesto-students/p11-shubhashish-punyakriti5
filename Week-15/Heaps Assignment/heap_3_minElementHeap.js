// Problem statement : Given a min heap, find the minimum element.

// Time : O(n log n), O(n) build minHeap and O(log n) for heapify n elements
// Space : O(n) , recursive calls for minHeapify function

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

function getMinElementOfHeap(arr) {
  let n = arr.length;
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    minHeapify(arr, i, n);
  }

  return arr[0];
}

let arr = [12, 3, 5, 0, 33, 6, 17];
console.log(getMinElementOfHeap(arr));
