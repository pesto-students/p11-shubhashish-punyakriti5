// Time : O(nlogn) [ log n in sorting, n in adding person in result arr  a/indexing]
// Space :O(n)

function queueReconstruction(people) {
  people.sort((a, b) => {
    return a[0] !== b[0] ? b[0] - a[0] : a[1] - b[1];
  });
  let output=[];
  for(let person of people){
    output.splice(person[1],0,person);
    // adding the person [h,k] at idx person[1]=k
  }
  return output;
}
let people=[[7,1],[4,4],[6,1],[5,2],[7,0],[5,0]]
console.log(queueReconstruction(people));


