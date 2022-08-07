function hideItemsRepeater(callback) {
    var interval = setInterval(callback, 50);
    setTimeout(() => {
        clearInterval(interval);
    }, 500);
}

try {
    document.getElementById("woocommerce_product_categories-3").style.display = "none";
    hideItemsRepeater(() => document.getElementById("woocommerce_product_categories-3").style.display = "none");
} catch { }
try {
    document.getElementById("pwb_list_widget-3").style.display = "none";
    hideItemsRepeater(() => document.getElementById("pwb_list_widget-3").style.display = "none");
} catch { }
try {
    document.getElementById("nav_menu-5").style.display = "none";
    hideItemsRepeater(() => document.getElementById("nav_menu-5").style.display = "none");
} catch { }

try {
    document.getElementById("flexia-colophon-top").style.display = "none";
    hideItemsRepeater(() => document.getElementById("flexia-colophon-top").style.display = "none");
} catch { }

try {
    document.getElementById("footer-navigation").style.display = "none";
    hideItemsRepeater(() => document.getElementById("copyfooter-navigationright").style.display = "none");
} catch { }