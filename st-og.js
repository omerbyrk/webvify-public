function hideItemsRepeater(callback) {
    var interval = setInterval(callback, 50);
    setTimeout(() => {
        clearInterval(interval);
    }, 500);
}
try {
    document.getElementById("cmplz-cookiebanner-container").style.display = "none";
    hideItemsRepeater(() => document.getElementById("cmplz-cookiebanner-container").style.display = "none");
} catch { }

try {
    document.getElementsByClassName("elementor-328")[0].style.display = "none";
    hideItemsRepeater(() => document.getElementsByClassName("elementor-328")[0].style.display = "none");
} catch { }

try {
    document.getElementsByClassName("site-footer")[0].style.display = "none";
    hideItemsRepeater(() => document.getElementsByClassName("site-footer")[0].style.display = "none");
} catch { }
try {
    document.getElementById("header").style.display = "none";
    hideItemsRepeater(() => document.getElementById("header").style.display = "none");
} catch { }

try {
    document.getElementsByTagName("footer")[0].style.display = "none";
    hideItemsRepeater(() => document.getElementsByTagName("footer")[0].style.display = "none");
} catch { }