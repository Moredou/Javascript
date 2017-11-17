// Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.


function repeatStringNumTimes(str, num) {
  var ans="",
      newstr="";
  if(num > 0){
    for(var i = 0; i< num; i++){
      ans += str; 
    }
    
    return ans;
  }else{
    return newstr;
  }
  
}

repeatStringNumTimes("abc", -2);