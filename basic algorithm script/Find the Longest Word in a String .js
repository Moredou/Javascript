// Return the length of the longest word in the provided sentence.

// Your response should be a number.


function findLongestWord(str) {
  var newstr;
  var longest=0;
  newstr = str.split(' ');
  
  for (var i= 0; i<newstr.length; i++){
         if(newstr[i].length>longest){
           longest = newstr[i].length;
         }
  }
  return longest;
}

findLongestWord("The quick brown fox over the lazy dog");
