var doom_username_new = 'input[formcontrolname="username"]';
var doom_password_new = 'input[formcontrolname="password"]';

try {
    function changeInputValue(input, value) {

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

try {
    document.querySelector(doom_username_new).addEventListener("keyup", (e) => {
        window.flutter_inappwebview.callHandler("Username", e.target.value);
    });

    if (username) {
        changeInputValue(document.querySelector(doom_username_new), username);
    }

} catch (e) {
}

try {
    document.querySelector(doom_password_new).addEventListener("keyup", (e) => {
        window.flutter_inappwebview.callHandler("Password", e.target.value);
    });

    if (password) {
        changeInputValue(document.querySelector(doom_password_new), password);
    }
} catch (e) {
}