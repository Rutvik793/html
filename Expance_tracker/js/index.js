let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");
var email = document.getElementById('email');
var pw = document.getElementById('pw');

  
signup.addEventListener("click", () => {
    slider.classList.add("moveslider");
    formSection.classList.add("form-section-move");
});
  
login.addEventListener("click", () => {
    slider.classList.remove("moveslider");
    formSection.classList.remove("form-section-move");
});

function store(){
    localStorage.setItem('email',email.vale);
    localStorage.setItem('pw',pw.value);
}
function check() {

    // stored data from the register-form
    var storedName = localStorage.getItem('email');
    var storedPw = localStorage.getItem('pw');

    // entered data from the login-form
    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');

    // check if stored data from register-form is equal to data from login form
    if(userName !== storedName || userPw !== storedPw) {
        alert('ERROR.');
    }else {
        alert('You are loged in.');
    }
}