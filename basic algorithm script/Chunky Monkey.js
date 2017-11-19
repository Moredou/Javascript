// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  // Break it up.
  var newArr=[];
  // var arrItem=[];
  for(var i=0; i*size<arr.length;i++){
    var arrItem=[];
    arrItem = arr.slice(i*size,size*(i+1));
    newArr.push(arrItem);

  }

  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);