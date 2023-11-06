// Time: O(log n), n is arr.length
// Space: O(1)

function findMinCyclic(arr){
    let l=0;
    let r=arr.length-1;
    while(l<=r){
        let mid=Math.floor((l+r)/2);
        if(arr[mid]<arr[mid-1]){
            return arr[mid];
        }
        else if(arr[mid]>arr[0]){
            l=mid+1

        }
        else{
            r=mid-1
        }
    }
    return 0;

}
console.log(findMinCyclic([6,7,8,-3,1,2,3]));