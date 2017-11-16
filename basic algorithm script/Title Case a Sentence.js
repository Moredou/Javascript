// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".



function titleCase(str) {
  var ans;
  ans = str.toLowerCase().split(' ');
  for (var i = 0; i <ans.length; i++){
    ans[i] = ans[i].charAt(0).toUpperCase()+ans[i].slice(1);
  }
  return ans.join(' ');
}

titleCase("I'm a little tea pot");