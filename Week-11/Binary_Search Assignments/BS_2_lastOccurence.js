function findLastOccurence(arr,target){
    let n=arr.length;
    let l=0;
    let r=n-1;
    while(l<=r){
    let mid=Math.floor((l+r)/2);
    if(arr[mid]==target && (arr[mid+1]>arr[mid] || mid==n-1)){
        return mid;
    }
    if(arr[mid]<=target){
        l=mid+1
    }
    if(arr[mid]>target){
        r=mid-1
    }
    }
    return -1;
}
console.log(findLastOccurence([1,2,3,3,4,4,5],10));