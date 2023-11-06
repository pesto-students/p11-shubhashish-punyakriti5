// Time: O(log(min(m,n)))
// Space: O(1)

// find kth smallest element from 2 sorted arrays

function findKthElement(arr1,arr2,m,n,k){
    if(m>n){
        return findKthElement(arr2,arr1,n,m,k);
    }
 let low=Math.max(0,k-n);
   let high= Math.min(m,k);

   while(low<=high){
     let cut1= Math.floor((low+high)/2);
     let cut2= k-cut1;

     let l1= cut1== 0 ? -Infinity : arr1[cut1-1];
     let r1= cut1== m ?Infinity : arr1[cut1];
     let l2= cut2== 0 ? -Infinity : arr2[cut2-1];
     let r2= cut2== n ? Infinity :arr2[cut2];

     if(l2<=r1 && l1<=r2){
        return Math.max(l1,l2);
     }
     else if(l1>r2){
        high=cut1-1;
     }
     else{
        low=cut1+1;
     }
   }
   return -1;
}

console.log(findKthElement([1, 3, 7, 9],[2, 3, 6, 8, 9],4,5,5));