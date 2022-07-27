

function hideItemsRepeater(callback) {
    var interval = setInterval(callback, 50);
    setTimeout(() => {
        clearInterval(interval);
    }, 999999);
}

    try {
    document.getElementById("T1514610365328").style.display = "none";
    hideItemsRepeater(() => document.getElementById("T1514610365328").style.display = "none");
    } catch { }
