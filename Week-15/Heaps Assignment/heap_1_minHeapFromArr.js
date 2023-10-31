// Time : O(n), n is array length as it iterates through it
// Space : O(1)

function isMinHeap(arr) {
  for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (
      (left < arr.length && arr[i] > arr[left]) ||
      (right < arr.length && arr[i] > arr[right])
    ) {
      return false;
    }
  }
  return true;
}

const arr = [0, 5, 17, 8, 9, 10];
console.log(isMinHeap(arr));
