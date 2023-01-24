try {

    if (window.location.pathname.includes("login")) {

        varloginForm = document.getElementById("youzify-membership-form");//enterloginformselector
        varloginButton = document.getElementsByName("signin_submit")[0];//enterloginformbuttontocopy

        functioninjectBootstrap(); {
            varlink = document.createElement("link");
            link.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";
            link.type = "text/css";
            link.rel = "stylesheet";
            link.integrity = "sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3";
            link.crossOrigin = "anonymous";
            document.getElementsByTagName("head")[0].appendChild(link);

            varscript = document.createElement("script");
            script.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js";
            script.integrity = "sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p";
            script.crossOrigin = "anonymous";
            document.getElementsByTagName("head")[0].appendChild(script);
        }

        injectBootstrap();


        //Createregisterbutton
        varregisterButton = loginButton.cloneNode(true);
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

        //createregisterpopup
        varbody = document.getElementsByTagName("body")[0];
        varrPopupBody = document.createElement("div");
        rPopupBody.id = "rPopupBody";
        rPopupBody.style.zIndex = "9999";
        rPopupBody.innerHTML =
            `
<divclass="modal"id="registerModal"tabindex="-1"aria-labelledby="registerModalLabel"aria-hidden="true">
<divclass="modal-dialog">
<divclass="modal-content">
<divclass="modal-header">
<h3class="modal-title"id="exampleModalLabel">RegisterForm</h3>
<buttontype="button"class="btn-close"data-bs-dismiss="modal"aria-label="Close"></button>
</div>
<divclass="modal-body">
<form>
<divclass="mb-3">
<labelfor="email"class="col-form-label">Email:</label>
<inputtype="text"class="form-control"id="email">
</div>
<divclass="mb-3">
<labelfor="password"class="col-form-label">Password:</label>
<inputtype="password"class="form-control"id="password">
</div>
<divclass="mb-3">
<labelfor="repassword"class="col-form-label">Re-password:</label>
<inputtype="password"class="form-control"id="repassword">
</div>
</form>
</div>
<divclass="modal-footer">
<buttontype="button"class="btnbtn-primary"onclick="alert('Verificationemailhasbeensent.Pleaseverifytheaccount,thenlogin!')">Register</button>
</div>
</div>
</div>
</div>`
            ;
        if (document.querySelector("#rPopupBody") === null) {
            body.append(rPopupBody);
        }

        try {
            document.getElementById("gp-mobile-header").style.display = "none";
            hideItemsRepeater(() => document.getElementById("gp-mobile-header").style.display = "none");
        } catch { }
    }
} catch { }

