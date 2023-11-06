let timerId = null;

window.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("click", startAnimation);
});

function startAnimation(e) {
  // Get mouse coordinates
  let clickX = e.clientX;
  let clickY = e.clientY;

  // TODO: Modify the code below
  if (timerId !== null) {
    clearInterval(timerId);
    timerId = null;
  }

  timerId = setInterval(moveImage(clickX, clickY), 10);

  moveImage(clickX, clickY);
}

function moveImage(x, y) {
  const img = document.querySelector("img");

  // Determine location of image
  let imgX = parseInt(img.style.left);
  let imgY = parseInt(img.style.top);
  console.log(img.style.left, img.style.top);
  console.log(imgX, imgY);

  // Determine (x,y) coordinates that center the image
  // around the clicked (x, y) coords
  const centerX = Math.round(x - img.width / 2);
  const centerY = Math.round(y - img.height / 2);
  console.log("width " + img.width, img.height + " img height"),
    console.log(centerX, centerY);

  // TODO: Add code here
  if (imgX === centerX && imgY === centerY) {
    clearInterval(timerId);
    timerId = null;
    return;
  }

  // Move 1 pixel in both directions toward the click
  if (imgX < centerX) {
    imgX++;
  } else if (imgX > centerX) {
    imgX--;
  }

  if (imgY < centerY) {
    imgY++;
  } else if (imgY > centerY) {
    imgY--;
  }

  img.style.left = imgX + "px";
  img.style.top = imgY + "px";
}
