// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.



function diffArray(arr1, arr2) {
    var newArr=[];
    function OnlyInFirst(first,second){
      for(var i = 0; i< first.length; i++){
       
          if(second.indexOf(first[i])===-1){
          newArr.push(first[i]);
          
        }
      }
    }
  OnlyInFirst(arr1, arr2);
  OnlyInFirst(arr2, arr1);
  // Same, same; but different.
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
