function hideItemsRepeater(callback) {
    var interval = setInterval(callback, 50);
    setTimeout(() => {
        clearInterval(interval);
    }, 500);
}

try {
    document.getElementsByClassName("elementor-location-footer")[0].style.display = "none";
    hideItemsRepeater(() => document.getElementsByClassName("elementor-location-footer")[0].style.display = "none");
} catch { }


try {
    document.getElementsByTagName("footer")[0].style.display = "none";;
    hideItemsRepeater(() => document.getElementsByTagName("footer")[0].style.display = "none");
} catch { }

try {
    document.getElementsByClassName("elementor-element-40112013")[0].style.display = "none";
    hideItemsRepeater(() => document.getElementsByClassName("elementor-element-344851b3")[0].style.display = "none");
} catch { }

try {
    document.getElementsByClassName("elementor-element-227008dd")[0].style.display = "none";
    hideItemsRepeater(() => document.getElementsByClassName("elementor-element-4cc01f6d")[0].style.display = "none");
} catch { }

try {
    document.getElementsByClassName("elementor-element-55907cce")[0].style.display = "none";
    hideItemsRepeater(() => document.getElementsByClassName("elementor-element-55907cce")[0].style.display = "none");
} catch { }
