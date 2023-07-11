// Time: O(n log(n)), n is no.of horses
// Space: O(log(n)), recursive calls of helper function

function findMaxStrengthHelper(horses,n,k,start,end){
    if(start===end){
        return start;
    }
    let mid=Math.floor((start+end)/2);
    let leftWinner= findMaxStrengthHelper(horses,n,k,start,mid);
    let rightWinner=findMaxStrengthHelper(horses,n,k,mid+1,end);

    function compareHorses(horse1,horse2){
        let h1Strength= horses[horse1];
        let h2Strength= horses[horse2];

        if(h1Strength>h2Strength){
            return horse1;
        }
        else{
            return horse2;
        }
    }
    return compareHorses(leftWinner, rightWinner);
        
}


function findMaxStrength(horses, n,k){
    return findMaxStrengthHelper(horses,n,k,0,n-1);
}
const horses = [52, 8, 2, 10, 31];
const n = horses.length;
const k = 3;

console.log(findMaxStrength(horses, n, k))
