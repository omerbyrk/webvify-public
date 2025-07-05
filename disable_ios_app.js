// https://cdn.jsdelivr.net/gh/omerbyrk/webvify-public/disable_ios_app.js

setTimeout(() => {
    if (navigator.userAgent.toLowerCase().includes("ios_mobile_app")) {
        document.addEventListener("DOMContentLoaded", function () {
            document.body.innerHTML = "";
        });
    }
}, 1000);