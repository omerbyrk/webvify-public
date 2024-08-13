try {
    function changeInputValue2(input, value) {

        var nativeInputValueSetter = Object.getOwnPropertyDescriptor(
            window.HTMLInputElement.prototype,
            "value"
        ).set;
        nativeInputValueSetter.call(input, value);

        var inputEvent = new Event("input", { bubbles: true });
        input.dispatchEvent(inputEvent);
    }
} catch (e) {
}

var usernameInterval = setInterval(() => {
    if (username) {
        changeInputValue2(document.querySelector("#formEmail"), username);
        clearInterval(usernameInterval);
    }
}, 1000);


var passwordInterval = setInterval(() => {
    if (password) {
        changeInputValue2(document.querySelector("#formPassword"), password);
        clearInterval(passwordInterval);
    }
}, 1000);








