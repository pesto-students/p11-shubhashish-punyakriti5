// Time : O(n)
// Space : O(n)

function largestRectangleArea(heights) {
  const stack = [];
  let maxArea = 0;

  const calculateArea = (height, width) => height * width;

  for (let i = 0; i <= heights.length; i++) {
    let currentHeight;

    if (heights.length === 0) {
      currentHeight = 0;
    } else {
      currentHeight = heights[i];
    }

    while (
      stack.length > 0 &&
      currentHeight < heights[stack[stack.length - 1]]
    ) {
      let height = heights[stack.pop()];
      let width;
      if (stack.length === 0) {
        width = i;
      } else {
        width = i - stack[stack.length - 1] - 1;
      }

      maxArea = Math.max(maxArea, calculateArea(height, width));
    }

    stack.push(i);
  }

  return maxArea;
}

const heights = [2, 1, 5, 6, 2, 3];
console.log(largestRectangleArea(heights));
