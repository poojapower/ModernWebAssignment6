var coinFlip;
    
do{
    
coinFlip=Math.round(Math.random());
var decision;
if(coinFlip==0){
 decision="Heads";
 
console.log('Heads \n');}
else{
    decision="Tails";
console.log('Tails \n');
}
}while(decision=="Heads");

