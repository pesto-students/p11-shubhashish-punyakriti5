// Problem statement: You are given k sorted arrays of integers. Write a function to merge these k sorted arrays into a single sorted array using a heap.

// Time: O(k + resultSize *log k), O(k) to build heap, and insertion takes O(log k), extraction takes O(log k), both happened for resultSize times
// Space : O(k + resultSize), O(k) for heap and O(resultSize) for mergers sorted array


class MinHeapNode {
  constructor(element, i, j) {
    this.element = element;
    this.i = i;
    this.j = j;
  }
}

class MinHeap {
  constructor() {
    this.heap = [];
  }

  left(i) {
    return 2 * i + 1;
  }

  right(i) {
    return 2 * i + 2;
  }

  insert(node) {
    this.heap.push(node);
    this.lookUp();
  }

  extractMin() {
    if (this.heap.length === 0) {
      return null;
    }

    if (this.heap.length === 1) {
      return this.heap.pop();
    } else {
      let min = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.lookDown();
      return min;
    }
  }

  lookUp() {
    let idx = this.heap.length - 1;
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      if (this.heap[idx].element < this.heap[parentIdx].element) {
        [this.heap[idx], this.heap[parentIdx]] = [
          this.heap[parentIdx],
          this.heap[idx],
        ];
        idx = parentIdx;
      } else {
        break;
      }
    }
  }

  lookDown() {
    let idx = 0;
    let parent = this.heap[0];

    while (true) {
      let leftIdx = this.left(idx);
      let rightIdx = this.right(idx);

      let leftChild, rightChild;
      let swap = null;

      if (leftIdx < this.heap.length) {
        leftChild = this.heap[leftIdx];
        if (leftChild.element < parent.element) {
          swap = leftIdx;
        }
      }

      if (rightIdx < this.heap.length) {
        rightChild = this.heap[rightIdx];
        if (
          (swap === null && rightChild.element < parent.element) ||
          (swap !== null && rightChild.element < leftChild.element)
        ) {
          swap = rightIdx;
        }
      }

      if (swap === null) {
        break;
      }

      this.heap[idx] = this.heap[swap];
      this.heap[swap] = parent;
      idx = swap;
    }
  }
}

function mergeKSortedArrays(arrays) {
  const k = arrays.length;

  const mh = new MinHeap();
  let resultSize = 0;
  for (let i = 0; i < k; i++) {
    const node = new MinHeapNode(arrays[i][0], i, 1);
    mh.insert(node);
    resultSize += arrays[i].length;
  }

  const result = [];
  
  for (let ele = 0; ele < resultSize; ele++) {
    const root = mh.extractMin();
    
    result.push(root.element);

    //root.j++;
    if (root.j < arrays[root.i].length) {
      const nextValue = arrays[root.i][root.j];
      const nextNode = new MinHeapNode(nextValue, root.i, root.j + 1);
      mh.insert(nextNode);
    }
  }

  return result;
}

const arrays = [
  [2, 6, 12, 34],
  [1, 9, 20, 1000],
  [23, 34, 90, 2000],
];

console.log("Merged array is:");
const mergedArray = mergeKSortedArrays(arrays);
console.log(mergedArray);
