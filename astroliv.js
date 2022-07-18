function hideItemsRepeater(callback) {
    var interval = setInterval(callback, 50);
    setTimeout(() => {
        clearInterval(interval);
    }, 500);
}
try {
    document.getElementsByClassName("hs_footer_main_wrapper")[0].style.display = "none";
    hideItemsRepeater(() => document.getElementsByClassName("hs_footer_main_wrapper")[0].style.display = "none");
} catch { }

try {
    document.getElementsByClassName("hs_bottom_footer_main_wrapper")[0].style.display = "none";
    hideItemsRepeater(() => document.getElementsByClassName("hs_bottom_footer_main_wrapper")[0].style.display = "none");
} catch { }
