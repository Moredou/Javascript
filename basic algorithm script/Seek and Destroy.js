// You will be provided with an initial array (the first argument in the destroyer function), 
// followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.), 
// followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.



function destroyer(arr) {
  var args = [].slice.call(arguments);

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < args.length; j++) {
      if (arr[i] === args[j]) {
        delete arr[i];
      }
    }
  }
  return arr.filter(Boolean);
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);