
(function() {
    addNumbers();
 
 })();


function addNumbers() {
    var first = prompt("Please enter the first digit", "");

    var second = prompt("Please enter the second digit", "");
    if(isNaN(first)||isNaN(second)){
        
        document.write("Invalid Numbers: "+first+" and "+second);
        return;
    }
    if (first>second) 
      document.write("Largest number: "+first);
      else if(first<second)
      document.write("Largest number: "+second);
      else if(first==second)
      document.write("Equal Numbers: "+first);
     
    }
