alert("Damesoo.com - Auto Accept Cookies");
setInterval(() => {
    try {
        document.querySelector(".iubenda-cs-accept-btn").click();
    } catch (e) { }
}, 50);