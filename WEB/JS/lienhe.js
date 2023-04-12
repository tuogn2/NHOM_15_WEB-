const form = document.querySelector('.form');

console.log(form);
var nameInput = document.querySelector('.name');
var emailInput = document.querySelector('.email');
var messArea = document.querySelector('.mess');
var submit = document.querySelector('.submit');

console.log(document.querySelector('.mess-btn'));
 
document.querySelector('.mess-btn').onclick = function(){
  document.querySelector('.errorName').innerHTML = '';
  document.querySelector('.errorEmail').innerHTML = '';
  document.querySelector('.errorMess').innerHTML = '';
}

form.addEventListener('submit', function(event){
  
  console.log(nameInput);

  if(nameInput.value === "")
  {
    console.log(document.querySelector('.errorName').innerHTML);
    document.querySelector('.errorName').innerHTML = 'Vui lòng nhập tên của bạn.';
    event.preventDefault();
  }

  if(emailInput.value == "")
  {
    document.querySelector('.errorEmail').innerHTML = 'Vui lòng nhập email của bạn.';
    event.preventDefault();
  }

  if(messArea.value === "")
  {
    console.log(document.querySelector('.errorName'));
    document.querySelector('.errorMess').innerHTML = 'Vui lòng nhập nội dung.';
    event.preventDefault();
  }
 
  
});


