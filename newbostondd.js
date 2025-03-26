
setInterval(() => {
    try {
        document.querySelector("iframe[src*='google.com']").remove();
    } catch (e) {

    }
}, 1);


