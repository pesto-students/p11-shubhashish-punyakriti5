// Time = O(log n) 
//  Space = O(1)

function findPeakElement(nums){
    let l=0;
    let r=nums.length-1;
    while(l<=r){
        let mid= Math.floor((l+r)/2);
        if((mid===0 || nums[mid]>nums[mid-1])&& (nums[mid]>nums[mid+1] ||mid== nums.length-1)){
            return mid;
        }
        else if(mid !== nums.length-1 && nums[mid]<nums[mid+1]){
            l=mid+1 
        }
        else{
            r=mid-1
        }
    }
    return -1;
}
console.log(findPeakElement([0, 2, 4,3, 5, 6])); 
