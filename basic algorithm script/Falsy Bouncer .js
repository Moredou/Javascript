// Remove all falsy values from an array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.


function bouncer(arr) {

  return arr.filter(Boolean);
  
}

// function bouncer(arr) {
//   // Don't show a false ID to this bouncer.
//   var newArr=[];
//   for(var i=0; i<arr.length;i++){
//     if(arr[i]){
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;

  
// }




bouncer([7, "ate", "", false, 9]);