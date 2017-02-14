// Code goes here

document.getElementById("img1").addEventListener('dragstart',function(event){
  event.dataTransfer.setData('img_id', this.getAttribute('id'));
});

document.getElementById("img2").addEventListener('dragstart',function(event){
  event.dataTransfer.setData('img_id', this.getAttribute('id'));
});
document.getElementById("img3").addEventListener('dragstart',function(event){
  event.dataTransfer.setData('img_id', this.getAttribute('id'));
});


document.getElementById("divCntr").addEventListener('dragover',function(event){
event.preventDefault();
});

var i = 0;
document.getElementById("divCntr").addEventListener('drop',function(event){
    i++;
var img_id = event.dataTransfer.getData('img_id'),
    img_src = document.getElementById(img_id).getAttribute('src'),
    label = document.getElementById(img_id).getAttribute('value'),

    img_html = '<div id="'+i+'" onclick="deleimg('+i+')">' +
    '<img style="width:150px;"  src="'+img_src+'"  />'+ label  +
    '<input type="button" value="X" id="del" ; >' +
    '</div>';

    document.getElementById('divCntr').insertAdjacentHTML('afterbegin', img_html);
});

function deleimg(i){
  //document.getElementById("divCntr").firstChild.style.display='none';

  var parent = document.getElementById('divCntr');
  var child = document.getElementById(i);
  parent.removeChild(child);

 }