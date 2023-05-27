const myForm =[];
const form = document.querySelector('#form');
form.addEventListener('submit', function(event){
    event.preventDefault();
    const fname = document.querySelector('#fname').value;
    const email = document.querySelector('#email').value;
    const city = document.querySelector('#city').value;
    localStorage.setItem('fname', fname);
    localStorage.setItem('email', email);
    localStorage.setItem('city', city);
    if(!fname || !email || !city){
        alert("Please fill full field");
    }
    
    const person = {fname,email,city};
    if (checkEmail(email)) {
        alert("This email already exists!");
        return;
    }
     myForm.push(person);
    form.reset();
    console.log(myForm);
    var table = `<tr>
                  <td>${fname}</td>
                  <td>${email}</td>
                  <td>${city}</td>
    </tr>`;
    document.getElementById('tbl').innerHTML += table
});

function checkEmail(email){
    return myForm.some(person => person.email === email);
}
