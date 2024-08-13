

var usernameInterval = setInterval(() => {
    if (username) {
        changeInputValue(document.querySelector("#formEmail"), username);
        clearInterval(usernameInterval);
    }
}, 1000);


var passwordInterval = setInterval(() => {
    if (password) {
        changeInputValue(document.querySelector("#formPassword"), password);
        clearInterval(passwordInterval);
    }
}, 1000);








