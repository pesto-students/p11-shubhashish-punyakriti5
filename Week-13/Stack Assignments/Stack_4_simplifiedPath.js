// Time : O(n)
//Space :O(n)

function simplifiedPath(str) {
  let stack = [];
  let strArr = str.split("/");
  console.log(strArr);
  let ans = "";
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === "." || strArr[i] === "") continue;
    else if (strArr[i] === "..") {
      stack.pop();
    } else {
      stack.push(strArr[i]);
    }
  }
  while (stack.length > 0) {
    ans = "/" + stack.pop() + ans;
  }
  if (ans === "") {
    ans = "/";
  }
  return ans;
}
console.log(simplifiedPath("/home/.././user//foo/../../bar"));
