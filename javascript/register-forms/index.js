try {
  if (window.location.pathname.includes("login")) {
    const loginForm = document.querySelector(".login-forgotMyPassword-top .w-75");
    const loginButton = document.querySelector(".btn-dark");

    // Yeni butonu oluştur
    const registerButton = loginButton.cloneNode(true);
    registerButton.value = "Register";
    registerButton.innerText = "Register";
    registerButton.id = "register_button";
    registerButton.classList.add("my-3");
    registerButton.setAttribute("type", "button");

    if (!document.querySelector("#register_button")) {
      loginForm.appendChild(registerButton);
    }

    // Modal HTML'ini oluştur
    const modalHtml = `
      <div id="customModal" class="custom-modal">
        <div class="custom-modal-content">
          <span class="custom-close">&times;</span>
          <h3>Register Form</h3>
          <form>
            <label>Email:</label>
            <input type="text" id="email" class="custom-input"><br>
            <label>Password:</label>
            <input type="password" id="password" class="custom-input"><br>
            <label>Re-password:</label>
            <input type="password" id="repassword" class="custom-input"><br>
            <button type="button" class="custom-button" id="registerConfirmBtn">Register</button>
          </form>
        </div>
      </div>
    `;

    // CSS'yi ekle
    const modalStyles = `
      .custom-modal {
        display: none;
        position: fixed;
        z-index: 99999999;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgba(0,0,0,0.4);
      }

      .custom-modal-content {
        background-color: #fff;
        margin: 10% auto;
        padding: 20px;
        border: 1px solid #888;
        width: 300px;
        border-radius: 8px;
        position: relative;
      }

      .custom-close {
        position: absolute;
        top: 10px;
        right: 15px;
        color: #aaa;
        font-size: 28px;
        font-weight: bold;
        cursor: pointer;
      }

      .custom-close:hover {
        color: black;
      }

      .custom-input {
        width: 100%;
        padding: 8px;
        margin: 6px 0;
        box-sizing: border-box;
      }

      .custom-button {
        background-color: #007bff;
        color: white;
        padding: 10px;
        width: 100%;
        border: none;
        border-radius: 4px;
        cursor: pointer;
      }

      .custom-button:hover {
        background-color: #0056b3;
      }
    `;

    if (!document.querySelector("#customModal")) {
      const modalWrapper = document.createElement("div");
      modalWrapper.innerHTML = modalHtml;
      document.body.appendChild(modalWrapper.firstElementChild);

      const styleEl = document.createElement("style");
      styleEl.textContent = modalStyles;
      document.head.appendChild(styleEl);
    }

    // Butona tıklayınca modalı göster
    registerButton.addEventListener("click", function () {
      document.getElementById("customModal").style.display = "block";
    });

    // Modalı kapatma
    document.addEventListener("click", function (e) {
      const modal = document.getElementById("customModal");
      if (e.target.classList.contains("custom-close") || e.target === modal) {
        modal.style.display = "none";
      }
    });

    // Register işlemi (örnek alert)
    document.addEventListener("click", function (e) {
      if (e.target && e.target.id === "registerConfirmBtn") {
        alert("Verification email has been sent. Please verify the account, then login!");
        document.getElementById("customModal").style.display = "none";
      }
    });
  }
} catch { }
