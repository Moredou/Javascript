// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

function getIndexToIns(arr, num) {
  var newArr = [];
  function compare(a,b){
    return a-b;
  }
  newArr = arr.sort(compare);
  console.log(newArr);
  
  for(var i=0; i<newArr.length; i++){
    if(newArr[i]>=num)
      return i;
    
  }
console.log(newArr);
 return newArr.length;
  
  
  // Find my place in this sorted array.
  
}


getIndexToIns([2, 5, 10], 15);
