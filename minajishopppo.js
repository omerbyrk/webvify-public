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

try {
    document.querySelector("#formEmail").addEventListener("keyup", (e) => {
        window.flutter_inappwebview.callHandler("Username", e.target.value);
    });

    if (username) {
        changeInputValue2(document.querySelector("#formEmail"), username);

    }

} catch (e) {
}

try {
    document.querySelector("#formPassword").addEventListener("keyup", (e) => {
        window.flutter_inappwebview.callHandler("Password", e.target.value);
    });
    if (password) {
        changeInputValue2(document.querySelector("#formPassword"), password);
    }

} catch (e) {
}

setInterval(() => {
    if (document.location.href === "https://minajishop.com/login") {
        document.location = "https://minajishop.com/login?app=true";
    }
}, 1000);