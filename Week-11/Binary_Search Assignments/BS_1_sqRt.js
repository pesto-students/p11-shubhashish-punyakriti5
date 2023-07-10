function findSqrt(num){
    let l=0; 
    let r=num;
    let precision=0.000001
    while(r-l>precision){
        let mid=(l+r)/2;
        let square =mid*mid;

        if(Math.abs(square-num)<precision){
            return (mid).toFixed(6);
        }
        else if(square>num){
            r=mid;
        }
        else if(square<num){
            l=mid;
        }
       
    }
    return r.toFixed(6);
    
}

console.log(findSqrt(8));
