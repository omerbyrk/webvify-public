
try {
  if (window.location.pathname.includes("unauthorized")) {
    var loginForm = document.getElementById("woocommerce-LostPassword"); // enter login form selector
    var loginButton = document.createElement("button");// enter login form button to copy

    function injectBootstrap() {
      var link = document.createElement("link");
      link.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";
      link.type = "text/css";
      link.rel = "stylesheet";
      link.integrity = "sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3";
      link.crossOrigin = "anonymous";
      document.getElementsByTagName("head")[0].appendChild(link);

      var script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js";
      script.integrity = "sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p";
      script.crossOrigin = "anonymous";
      document.getElementsByTagName("head")[0].appendChild(script);
    }

    injectBootstrap();


    // Create register button
    var registerButton = loginButton.cloneNode(true);
    registerButton.value = "Register";
    registerButton.innerText = "Register";
    registerButton.id = "register_button";
    registerButton.classList.add("my-3");
    registerButton.setAttribute("type", "button");
    registerButton.setAttribute("data-bs-toggle", "modal");
    registerButton.setAttribute("data-bs-target", "#registerModal");

    if (document.querySelector("#register_button") === null) {
      loginForm.append(registerButton);
    }

    // create register popup
    var body = document.getElementsByTagName("body")[0];
    var rPopupBody = document.createElement("div");
    rPopupBody.id = "rPopupBody";
    rPopupBody.style.zIndex = "1999999999999";
    rPopupBody.innerHTML =
      `
    <div class="modal" id="registerModal" tabindex="-1" aria-labelledby="registerModalLabel" aria-hidden="true">
    <div class="modal-dialog">
    <div class="modal-content">
    <div class="modal-header">
    <h3 class="modal-title" id="exampleModalLabel">Register Form</h3>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
    <form>
      <div class="mb-3">
        <label for="email" class="col-form-label">Email:</label>
        <input type="text" class="form-control" id="email">
      </div>
      <div class="mb-3">
        <label for="password" class="col-form-label">Password:</label>
        <input type="password" class="form-control" id="password">
      </div>
      <div class="mb-3">
        <label for="repassword" class="col-form-label">Re-password:</label>
        <input type="password" class="form-control" id="repassword">
      </div>
    </form>
    </div>
    <div class="modal-footer">
    <button type="button" class="btn btn-primary" onclick=" alert('Verification email has been sent. Please verify the account, then login!')">Register</button>
    </div>
    </div>
    </div>
    </div>`
      ;
    if (document.querySelector("#rPopupBody") === null) {
      body.append(rPopupBody);
    }
  }
} catch { }


try {
  if (!window.location.pathname.includes("unauthorized")) {
    var loginForm = document.getElementsByClassName("woocommerce-LostPassword")[0]; // enter login form selector
    var loginButton = document.createElement("button");// enter login form button to copy

    function injectBootstrap() {
      var link = document.createElement("link");
      link.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";
      link.type = "text/css";
      link.rel = "stylesheet";
      link.integrity = "sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3";
      link.crossOrigin = "anonymous";
      document.getElementsByTagName("head")[0].appendChild(link);

      var script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js";
      script.integrity = "sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p";
      script.crossOrigin = "anonymous";
      document.getElementsByTagName("head")[0].appendChild(script);
    }

    injectBootstrap();


    // Create register button
    var registerButton = loginButton.cloneNode(true);
    registerButton.value = "Register";
    registerButton.innerText = "Register";
    registerButton.id = "register_button";
    registerButton.classList.add("my-3");
    registerButton.setAttribute("type", "button");
    registerButton.setAttribute("data-bs-toggle", "modal");
    registerButton.setAttribute("data-bs-target", "#registerModal");

    if (document.querySelector("#register_button") === null) {
      loginForm.append(registerButton);
    }

    // create register popup
    var body = document.getElementsByTagName("body")[0];
    var rPopupBody = document.createElement("div");
    rPopupBody.id = "rPopupBody";
    rPopupBody.style.zIndex = "1999999999999";
    rPopupBody.innerHTML =
      `
  <div class="modal" id="registerModal" tabindex="-1" aria-labelledby="registerModalLabel" aria-hidden="true">
  <div class="modal-dialog">
  <div class="modal-content">
  <div class="modal-header">
  <h3 class="modal-title" id="exampleModalLabel">Register Form</h3>
  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  </div>
  <div class="modal-body">
  <form>
    <div class="mb-3">
      <label for="email" class="col-form-label">Email:</label>
      <input type="text" class="form-control" id="email">
    </div>
    <div class="mb-3">
      <label for="password" class="col-form-label">Password:</label>
      <input type="password" class="form-control" id="password">
    </div>
    <div class="mb-3">
      <label for="repassword" class="col-form-label">Re-password:</label>
      <input type="password" class="form-control" id="repassword">
    </div>
  </form>
  </div>
  <div class="modal-footer">
  <button type="button" class="btn btn-primary" onclick=" alert('Verification email has been sent. Please verify the account, then login!')">Register</button>
  </div>
  </div>
  </div>
  </div>`
      ;
    if (document.querySelector("#rPopupBody") === null) {
      body.append(rPopupBody);
    }
  }
} catch { }


// https://cdn.jsdelivr.net/gh/omerbyrk/webvify-public/laroza.js

try {
  var parentElement = document.querySelector("#mepr-account-nav");
  var deleteMyButton = document.createElement("button");
  deleteMyButton.id = "delete_my_account";
  deleteMyButton.innerText = "Delete My Account";
  deleteMyButton.style.marginTop = "10px";
  deleteMyButton.style.marginBottom = "10px";
  deleteMyButton.style.width = "100%";
  deleteMyButton.style.zIndex = 99;
  deleteMyButton.style.background = "red";
  deleteMyButton.style.color = "white";
  deleteMyButton.onclick = (e) => {
    e.preventDefault();
    confirm("Do you want to delete the account with all the stored data? It will be deleted if you confirm this dialog. ")
  };
  if (document.querySelector("#delete_my_account") === null) {
    parentElement.appendChild(deleteMyButton);
  }
} catch {

}




