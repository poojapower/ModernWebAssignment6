
     var coinFlip=Math.round(Math.random());
    
     console.log(coinFlip);
     var choice = prompt("Please enter your choice 'H' for heads and 'T' for tails", "");
     if(choice!="H" && choice!="T"){
        prompt("Please enter valid choice 'H' for heads and 'T' for tails", "");
     }
     
     if(!coinFlip)
     decision="H";
     else decision="T";

     if(choice==decision){
        alert( "The flip was " +decision+" and you chose "+choice +"...you win!");
     }
     else{
        alert( "The flip was " +decision+" and you chose "+choice +" ..you lose!");
     }
 
