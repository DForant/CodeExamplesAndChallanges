///////////////////////////////////////////////////////////////
// Create a function to check the uniformity of an array
// 
// If any item in the array is different then return a false.
// otherwise, return true
///////////////////////////////////////////////////////////////
function isUniform(arr){
    // Add the first array item to a variable
    var first = arr[0];
    
    for (var i = 1; i < arr.length; i++){
       if(arr[i] !== first){
          return false;
       }
       return true;
    }
 }
 
 //////////////////////////////////
 // sum function
 //
 // returns the sum of an array
 //////////////////////////////////
 function sum(arr){
    // create a total varaible
    var total = 0;
    // iterated through array
    arr.forEach(function(item){
       total += item;
    });
    // return the total
    return total;
 }
 
 /////////////////////////////////////////////////////
 // max function
 //
 // return the max value from an array
 ////////////////////////////////////////////////////
 function max(arr){
    // Add the first array element to a max variable
    var max = arr[0];
    
    // Loop through the array
    for (var i = 1; i < arr.length; i++){
       // compare the max variable to the array item
       // If the array item is larger then replace it in the 
       // max variable
       if(arr[i] > max){
          max = arr[i];
       }
    }
 
    //return the max variable
    return max;
 }
 
 ///////////////////////////////////////////////////
 // average function
 //
 // return the average of an array
 ///////////////////////////////////////////////////
 function average(arr){
   // create a total variable
   var total = 0;
   
   // create an avg variable
   var avg = 0;
   
   // iterate through the array and sum up the array items
   arr.forEach(function(item){
     total += item;
   });
   
   // get an average from the total
   avg = total/arr.length;
   
   //display results
   return "The total of array is: " + total + " and the average is: " + avg;
 }
 
 ///////////////////////////////////////////////////
 /// Display Output
 //////////////////////////////////////////////////
 
 console.log("--- isUniform() returns true ---");
 console.log(isUniform([1,1,1,1]));
 
 console.log("--- isUniform() returns false ---");
 console.log(isUniform([1,2,1,1]));
 
 console.log("--- sum() returns 8 ---");
 console.log(sum([2,2,2,2]));
 
 console.log("--- max() returns 200 ---");
 console.log(max([2,10,23,12,200,12]));
 
 console.log("--- average() returns 16.833333333333332 ---");
 console.log(average([2,10,23,12,42,12]));
 
 