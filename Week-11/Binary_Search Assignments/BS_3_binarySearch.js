// Time: O(log n)
// Space: O(1)

function findTarget(arr,target){
    let l=0;
    let r= arr.length-1;
    while(l<=r){
        let mid = Math.floor((l+r)/2);
        if(arr[mid]==target){
            return true;
        }
        else if(target<arr[mid]){
            r=mid-1;
        }
        else{
            l=mid+1
        }
    }
    return false;
}
console.log(findTarget([-6,1,2,3,4,5],-6));