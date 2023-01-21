// https://cdn.jsdelivr.net/gh/omerbyrk/webvify-public/javascript/delete-my-buttons/empty.js



function hideItemsRepeater(callback) {
    var interval = setInterval(callback, 50);
    setTimeout(() => {
        clearInterval(interval);
    }, 50000);
}

try {
    document.querySelector("a[href='https://play.google.com/store/apps/details?id=com.embarkmen.app']").parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style.display = "none";
    hideItemsRepeater(() => document.querySelector("a[href='https://play.google.com/store/apps/details?id=com.embarkmen.app']").parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style.display = "none");
} catch { }

try {
    document.querySelector("#footer-sections").style.display = "none";
    hideItemsRepeater(() => document.querySelector("#footer-sections").style.display = "none");
} catch { }


