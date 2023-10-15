const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');

registerLink.onclick = () => {
    wrapper.classList.add('active')
}

loginLink.onclick = () => {
    wrapper.classList.remove('active')
}

// function validateInfo(){
//     var regUserName = document.getElementById("reg-username").value;
//     var regPassword = document.getElementById("reg-password").value;
//     var logUsername = document.getElementById("log-username").value;
//     var logPassword = document.getElementById("log-password").value;

//     if(regUserName==logUsername && regPassword==logPassword){
//         alert("You are logged in!");
//     }
//     else{
//         alert("Unable to login!");
//     }
// }