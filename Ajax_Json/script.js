var xhttp = new XMLHttpRequest();
var users_obj;

function showInfo(){
    var p=0,a=0;
    var Users=localStorage.getItem('user');
    xhttp.onreadystatechange = function(){
        if (xhttp.readyState ==4 && xhttp.status ==200){

            var obj = xhttp.responseText;
            var newObj = JSON.parse(obj);
            Users = JSON.parse(Users);
           // localStorage.setItem('user',obj);


            if (Users === null){
                Users = newObj;
            }else{
                for(a in Users){
                if(JSON.stringify(Users[a])==JSON.stringify(newObj[0])){
                    p++;
                }else if(JSON.stringify(Users[a])==JSON.stringify(newObj[1])){
                    p++;
                }
            };
            if(p!==2){
          //  Users=Users.concat(newObj);
             Users=Users;
            }
            }

            var oPut='';
            oPut +='<table border="1px solid black"><thead><tr><td>Name</td><td>Address</td><td>Email</td><td>Phone</td><td>Edit</td><td>View<td>Delete</td></tr></thead>';
            var i;

            for (i in Users){
                var Obj1 = Users[i];
                oPut += '<tr>'
                for (k in Obj1){
                    oPut +='<td>' +Obj1[k] + '</td>'
                }
                oPut+='<td><button>edit</button></td><td><button>view</button></td><td><button>delete</button></td></tr>'
            }


            document.getElementById('abc').innerHTML = oPut;
            Users = JSON.stringify(Users);
            localStorage.setItem('user',Users);

        }
    }
    xhttp.open('GET','1.json');
    xhttp.send();
}

document.getElementById('inputboxs').style.display='none';

function addForm(){
  document.getElementById('inputboxs').style.display='inline';
}

function cancelFrom(){
  document.getElementById('inputboxs').style.display="none";
  document.getElementById('newName').value="";
  document.getElementById('newAddress').value="";
  document.getElementById('newEmail').value="";
  document.getElementById('newPhone').value="";

}

// document.querySelectorAll('p').forEach(function(re) {
//         re.style.display = 'none';
//     });


function addNewInfo(){



    var newname,newaddr,newemail,newphone,User=[];
    newname = document.getElementById('newName').value;
    newaddr = document.getElementById('newAddress').value;
    newemail = document.getElementById('newEmail').value;
    newphone = document.getElementById('newPhone').value;

    if(newname !=='' && newaddr !== '' && newemail !=='' && newphone !==''){
        Users = localStorage.getItem('user');
        var NewUser;
        NewUser = {'Name':newname,'Address':newaddr,'Email':newemail,'Phone':newphone};
        Users= JSON.parse(Users);

        Users=Users.concat(NewUser)

        User = JSON.stringify(Users);
        localStorage.setItem('user',User);


        showInfo();


    }
    // var tagps = document.getElementsByTagName("p");
    // console.log(tagps);
    // // tagps.forEach(function(val){});

// document.querySelectorAll('p').forEach(function(re) {
//         re.style.display = 'none';
//     });
      var c = document.querySelectorAll('p');
      var T = document.getElementById('inputboxs');
       c.forEach(function(value){
         T.removeChild(value);
       })
      if(newname==='') {
              document.getElementById('newName').insertAdjacentHTML('afterend','<p id="np" style="display:block">Please enter your name</p>');
          }
      if(newaddr===''){
              document.getElementById('newAddress').insertAdjacentHTML('afterend','<p id="ap">Please enter your address</p>');
          }
      if(newemail===''){
                  document.getElementById('newEmail').insertAdjacentHTML('afterend','<p id="ep">Please enter your email</p>');
              }
      if(newphone===''){
                    document.getElementById('newPhone').insertAdjacentHTML('afterend','<p id="pp">Please enter your phone number</p>');
                }

}

















