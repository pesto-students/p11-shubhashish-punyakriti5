function findInMatrix( arr,target){
    let n= arr.length;
    let m= arr[0].length;
    if(arr.length==0){
        return false;
    }
     let low=0;
     let high=(n*m)-1;
     while(low<=high){
        let mid= Math.floor((low+high)/2);
        if(arr[Math.floor(mid/m)][mid%m]==target){
            return true;
        }
        else if(arr[Math.floor(mid/m)][mid%m]<target){
            low=mid+1;
        }
        else{
            high=mid-1;
        }
     }
     return false;
    
}
console.log(findInMatrix([[1 ,4],[7, 9]],4));