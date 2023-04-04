const submit =document.querySelector('.submit');

var password = document.querySelector("#pass");
var loginemail = document.querySelector('#mail')
var usename = document.querySelector('#username')
var repeatpass = document.querySelector('#prepeatpass')



var checkformemail = document.querySelector('.checkformemail')
var checkusername = document.querySelector('.checkusername')
var checkpass = document.querySelectorAll('.checkpass')


console.log(checkpass)

submit.addEventListener('click', (event) => {
  event.preventDefault();
  // Code để xử lý dữ liệu form ở đây
});

function checkform(){
  if(usename.value.trim() < 6  ){
    checkusername.innerHTML="không được rổng và lớn hơn 6 kí tự"
  }
  if(repeatpass.value !== password.value){
    checkpass[0].innerHTML='password không trùng'
    checkpass[1].innerHTML='password không trùng'

  }
}