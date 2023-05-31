function generateTransaction(){
    let count=0;
     return function(){
        count++;
        return ( Symbol("Transaction_ID : "+ count));
};}

const getId= generateTransaction();
const t1=getId();
console.log(t1.description);
const t2=getId();
console.log(t2.description);