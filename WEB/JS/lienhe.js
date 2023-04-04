
var modalbtn = document.querySelector('.modal-btn');
console.log(modalbtn);
var nameInput = document.querySelector('.name');
var emailInput = document.querySelector('.email');
var messArea = document.querySelector('.mess');

//clear
modalbtn.onclick = function(e){
  document.querySelector('.errorName').innerHTML = '';
  document.querySelector('.errorEmail').innerHTML = '';
  document.querySelector('.errorMess').innerHTML = '';
  nameInput.value = '';
  emailInput.value = '';
  messArea.value = '';
}


form = document.querySelector('.myForm')

form.addEventListener('submit', function(event) {
  //Kiểm tra tên
  if (nameInput.value === '') {
    document.querySelector('.errorName').innerHTML = 'Vui lòng nhập tên của bạn';
    event.preventDefault();
  }
  else{
    document.querySelector('.errorName').innerHTML = '';
    event.preventDefault();
  }
  //Kiểm tra mail
  if(emailInput.value === ''){
    document.querySelector('.errorEmail').innerHTML = 'Vui lòng nhập Mail của bạn';
    event.preventDefault();
  }
  else if ( !emailInput.value.includes('@')) {
    document.querySelector('.errorEmail').innerHTML = '';
    event.preventDefault();
  }
  else{
    document.querySelector('.errorEmail').innerHTML = '';
    event.preventDefault();
  }
  //Kiểm tra mess
  if (messArea.value === '') {
    document.querySelector('.errorMess').innerHTML = 'Vui lòng nhập nội dung';
    event.preventDefault();
  }
  else{
    document.querySelector('.errorMess').innerHTML = '';
    event.preventDefault();
  }
});





