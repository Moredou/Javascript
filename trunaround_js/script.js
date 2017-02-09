var lBox = document.getElementById('box1'),
    rBox = document.getElementById('box2'),
    lButton = document.getElementById('button1'),
    pButton = document.getElementById('pause'),
    rButton = document.getElementById('button2');

var str1, str2, arr1, arr2, interval_var;
var clearInter = function(){
    clearInterval(interval_var);
}

var lefttoright = function(arr1,arr2){
    var str0 = arr1.shift();
    arr2.push(str0);
    str1 = arr1.join('');
    str2 = arr2.join('');

}

var righttoleft = function(arr1, arr2){
    var str0 = arr2.pop();
    arr1.unshift(str0);
    str1 = arr1.join('');
    str2 = arr2.join('');
};

lButton.onclick = function(){
    clearInter();
    str1 = lBox.value;
    arr1 = str1.split('');
    str2 = rBox.value;
    arr2 = str2.split('');
    interval_var = setInterval(function(){
        if (str1 !==''){
            lefttoright(arr1,arr2)
            lBox.value = str1;
            rBox.value = str2;

        }else{
        clearInter();}
    },1000);
};

pButton.onclick = clearInter;

rButton.onclick = function(){
    clearInter();
    str1 = lBox.value;
    arr1 = str1.split('');
    str2 = rBox.value;
    arr2 = str2.split('');
    interval_var = setInterval(function(){
        if(str2!==''){
            righttoleft (arr1,arr2);
            lBox.value = str1;
            rBox.value = str2;
        }else{
            clearInter();
        }
    },1000);








}

