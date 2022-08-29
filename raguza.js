
function hideItemsRepeater(callback) {
    var interval = setInterval(callback, 50);
    setTimeout(() => {
        clearInterval(interval);
    }, 500);
}

try {
    document.getElementsByTagName("footer")[0].style.display = "none";;
    hideItemsRepeater(() => document.getElementsByTagName("footer")[0].style.display = "none");
} catch { }

try {
    document.getElementsByClassName("elementor-element-344851b3")[0].style.display = "none";
    hideItemsRepeater(() => document.getElementsByClassName("elementor-element-344851b3")[0].style.display = "none");
} catch { }

try {
    document.getElementsByClassName("elementor-element-4cc01f6d")[0].style.display = "none";
    hideItemsRepeater(() => document.getElementsByClassName("elementor-element-4cc01f6d")[0].style.display = "none");
} catch { }
