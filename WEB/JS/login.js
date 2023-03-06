
const container = document.querySelector('.container');
const containerbtn = document.querySelector('.container-btn')
function handleclickLogin() {
    containerbtn.innerHTML='';
  container.innerHTML = `
    <div class="login-container">
      <form action="" class="form-login">
        <h1 class="title-login">Login</h1>
        <div class="form-infor">
          <input type="text" class="login-email" placeholder="Name">
          <input type="password" placeholder="Password" class="login-pass">
          <div class="another-choice">
            <div>
              <input type="checkbox" id="remember">
              <label for="remember">Remember me</label>
            </div>
            <a href="#">Forgot password</a>
          </div>
          <button class="btnlogin">Login</button>
          <span>or use your account</span>
          <div class="social-container">
            <a href=""><i class="fa-brands fa-google"></i></a>
            <a href="https://www.facebook.com/"><i class="fa-brands fa-facebook"></i></a>
            <a href=""><i class="fa-brands fa-twitter"></i></a>
          </div>
        </div>
      </form>
    </div>
  `;
}

function handleclicksignin(){
    containerbtn.innerHTML='';
    container.innerHTML=`<div class="login-container">
    <form action="" class="form-login">
        <h1 style="margin-bottom: 10px;" class="title-login">SIGN IN</h1>
        <div class="form-infor">
            <input type="email" class="login-email" placeholder="email">
            <input type="text" class="login-email" placeholder="Name">
            <input type="password" placeholder="Enter Password" class="login-pass signin">
            <input type="password" placeholder="repeap again" value="" class="login-pass repeapsignin">
            <button onclick={checkpass()} class="btnlogin btnsignin">SIGN IN</button>
           
        </div>
    </form>
</div>`
}
const password = document.querySelector('.signin');

const againpasswprd = document.querySelector('.repeapsignin');

const checkpass=()=>{
    if(password.value.length<6){
        alert('pass phải lớn hơn 6')
    }else if(againpasswprd.value.length !== password.value.length){
        alert('mật khẩu mà nhập lại mật khẩu không trùng khớp')
    }
}


