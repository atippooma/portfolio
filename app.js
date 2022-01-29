const contact = document.querySelector(".submit-btn");
const inputs = document.querySelectorAll('form-control');





    contact.addEventListener("click", a => {
    alert("Yes you just contact me")
    contact.forEach(input => input.value = '');
    a.preventDefault();
    a.target.reset();

});

function a() {
    document.getElementById("myForm").reset();
}

  