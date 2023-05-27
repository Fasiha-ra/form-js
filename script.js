function validateForm(){
    let x = document.forms["form"]["name"].value;
    if(x == ""){
        alert("Please name fill out.");
         //return false;
    }
    let y = document.forms["form"]["email"].value;
    if(y == ""){
        alert("Please email fill out.");
        // return false;
    }
    let z = document.forms["form"]["city"].value;
    if(z == ""){
        alert("Please city fill out.");
        // return false;
    }
    
}
var add = document.getElementById("add");
add.addEventListener('click', myDetails);

function myDetails(){
   
    var form = document.getElementById("form");
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var city = document.getElementById("city");
   if(form){
     validateForm();
   }
    // if(!name || !email || !city){
    //     alert("Please filled full form");
    //     return;
    // }

    form.innerHTML= name.value + email.value + city.value;
    
}

