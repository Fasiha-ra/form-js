var add= document.getElementById("add");
add.addEventListener('click', myDetails);

function myDetails(event){
    event.preventDefault();
    //var form =document.getElementById('form').value;
    var name  =document.getElementById('name').value;
    var email =document.getElementById('email').value;
    var city =document.getElementById('city').value;
    if(!name || !email || !city){
        alert("Please fill full form");
        return;
    }
    var display= document.getElementById('tab');
    var newRow = display.insertRow(0);

    var cell1 =newRow.insertCell(0);
    var cell2 =newRow.insertCell(1);
    var cell3 =newRow.insertCell(2);
    
    cell1.innerHTML = name;
    cell2.innerHTML = email;
    cell3.innerHTML = city;
   
 console.log(newRow);

}




