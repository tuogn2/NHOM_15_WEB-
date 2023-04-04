const container = document.querySelector(".container");
const containerbtn = document.querySelector(".container-btn");
const password = document.querySelector(".signin");

const againpasswprd = document.querySelector(".repeapsignin");
var checkformemail =document.getElementsByClassName('checkformemail')

function handleclickLogin() {
  containerbtn.innerHTML = "";
  container.innerHTML = `
  <div class="login-container">
  <form action="" class="form-login">
    <h1 class="title-login">Login</h1>
    <div class="form-infor">
      <input type="text" class="mai" placeholder="Name">
      <input type="password" placeholder="Password" class="pass">
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

var txtemail = "";
var txtusername = "";
var txtpass = "";


