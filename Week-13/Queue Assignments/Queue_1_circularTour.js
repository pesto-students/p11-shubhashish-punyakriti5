// Time : O(n)
// Space : O(1)

function circularTour(petrolPumps,n){
    let start=0;
    let deficit=0;
    let balance=0;

    for(let i=0;i<n;i++){
        let petrol = petrolPumps[i][0];
        let distance= petrolPumps[i][1];
        
        balance+=petrol-distance;
        if(balance<0){
            deficit+=balance;
            start=i+1;
            balance=0
        }
    }
        if(balance+deficit >= 0){
            return start;
        }
        else{ 
            return -1;
        }
    }

    let petrolPumps=[[6,5],[7,6],[4,7],[10,8],[6,6],[5,4]];
//let petrolPumps=[[4,6],[6,5],[7,3],[4,5]]
console.log(circularTour(petrolPumps,6));