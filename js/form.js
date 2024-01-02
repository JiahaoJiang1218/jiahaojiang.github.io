var button = document.querySelector('.button')
var email = document.getElementById('email')
var password = document.getElementById('pwd')
var username = document.getElementById('username')
var content1 = document.querySelector('.content1')
var content2 = document.querySelector('.content2')
var content = document.querySelector('.content')
var signup = document.querySelector('.signup')
button.onclick = function() {
    button_box()
}
signup.onclick = function() {
   signup_box()
}
function button_box() {
   if(/[1-9][0-9]{4,}/.test(email.value)&&/^1[0-9]{5}\w{4}/.test(password.value)) {
       location.href = '../HTML/index.html'
       email.style.borderColor = ''
       password.style.borderColor = ''
   }
   else {
       email.style.borderColor = 'red'
       password.style.borderColor = 'red'
       content1.innerHTML = 'Please enter the correct email mode!'
       content2.innerHTML = 'Please enter the appropriate password!'
   }
}
email.addEventListener('blur',function() {
   if(/[1-9][0-9]{4,}/.test(email.value)) {
       email.style.borderColor = ''
   }
   else {
       email.style.borderColor = 'red'
   }
})
password.addEventListener('blur',function(event) {
   if(!(/^1[3|4|5|6|7|8|9][0-9]{9}$/.test(password.value))  && /^[\u4e00-\u9fa5]{0,}$/.test(password.value) && password.value == '') {
           password.style.borderColor = 'red'
   }
   else {
           password.style.borderColor = ''
   }
})