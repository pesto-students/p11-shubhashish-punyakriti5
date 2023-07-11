// Time: O(log min(m,n))
// Space: O(1)

function findMedian(arr1,arr2,m,n){
    if(m>n){
        return findMedian(arr2,arr1,n,m)
    }
    let medianPos=Math.floor((m+n+1)/2);
    let low=0;
    let high=m;

    while(low<=high){
        let cut1= (low + high) >> 1;
        //Math.floor(low+high/2);
        let cut2= medianPos-cut1;

        let l1=cut1===0 ? -Infinity : arr1[cut1-1];
        let r1=cut1===m ? Infinity : arr1[cut1];
        let l2=cut2===0 ? -Infinity : arr2[cut2-1];
        let r2=cut2===n ? Infinity : arr2[cut2];

        if((l1<=r2)&&(l2<=r1)){
            if((n+m)%2==1){
                return Math.max(l1,l2);
            }
            else{
                return (Math.max(l1,l2))+(Math.min(r1,r2))/2.0;
            }
        }
        else if(l1>r2){
            high=cut1-1;
        }
        else{
            low=cut1+1;
        }
    }
return 0.0;

}
console.log(findMedian([0,8],[1,3,4],2,3));