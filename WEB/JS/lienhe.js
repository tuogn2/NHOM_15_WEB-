const form = document.querySelector('form[name="myForm"]');

form.addEventListener('submit', function(event) {
  const nameInput = document.querySelector('input[name="name"]');
  const emailInput = document.querySelector('input[name="email"]');
  const messArea = document.querySelector('textarea[name="mess"]');
  
  if (nameInput.value === '') {
    alert('Vui lòng nhập tên của bạn');
    event.preventDefault();
  }
  
  if (emailInput.value === '' || !emailInput.value.includes('@')) {
    alert('Vui lòng nhập địa chỉ email hợp lệ');
    event.preventDefault();
  }

  if (messArea.value === '') {
    alert('Vui lòng nhập nội dung');
    event.preventDefault();
  }
});