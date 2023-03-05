// https://cdn.jsdelivr.net/gh/omerbyrk/webvify-public/politicsanswar.js
function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}


docReady(function () {
    try {

        var app_logged_in = document.getElementById("app_logged_in").innerText;
        var app_user_id = document.getElementById("app_user_id").innerText;
        var app_leader_name = document.getElementById("app_leader_name").innerText;
        var app_nation_name = document.getElementById("app_nation_name").innerText;

        window.flutter_inappwebview.callHandler("app_info", { "key": "app_logged_in", "value": app_logged_in }, { "key": "app_user_id", "value": app_user_id }, { "key": "app_leader_name", "value": app_leader_name }, { "key": "app_nation_name", "value": app_nation_name });
    } catch {
        window.flutter_inappwebview.callHandler("app_info", { "key": "app_logged_in", "value": "false" }, { "key": "app_user_id", "value": "" }, { "key": "app_leader_name", "value": "" }, { "key": "app_nation_name", "value": "" });
    }




    try {
        var ios_purchase_history = document.getElementById("ios_purchase_history");
        if (ios_purchase_history && !ios_purchase_history.classList.contains("implemented")) {
            ios_purchase_history.classList.add("implemented");
            ios_purchase_history.removeEventListener("click");
            ios_purchase_history.addEventListener("click", function (e) {
                window.flutter_inappwebview.callHandler("ios_purchase_history", "clicked");
            });
        }
    } catch {

    }


    /***
     * Don't delete below code!!! It is working for [auto form field](username and password). 
     */
    try {
        document.querySelector(doom_username).addEventListener("keyup", (e) => {
            window.flutter_inappwebview.callHandler("Username", e.target.value);
        });
        document.querySelector(doom_password).addEventListener("keyup", (e) => {
            window.flutter_inappwebview.callHandler("Password", e.target.value);
        });

        if (username) {
            document.querySelector(doom_username).value = username;
        }

        if (password) {
            document.querySelector(doom_password).value = password;
        }
    } catch (e) {
    }






    try {
        var in_app_purchase_button = document.getElementById("in_app_purchase");
        if (in_app_purchase_button && !in_app_purchase_button.classList.contains("implemented")) {
            in_app_purchase_button.classList.add("implemented");
            in_app_purchase_button.addEventListener("click", function (e) {
                window.flutter_inappwebview.callHandler("in_app_purchase", "clicked");
            });
        }
    } catch {

    }
});