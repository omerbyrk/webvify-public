try {
    document.querySelector(".et_builder_inner_content").lastElementChild.style.display = "none";
    hideItemsRepeater(() => document.querySelector(".et_builder_inner_content").lastElementChild.style.display = "none");
} catch { }

try {
    document.getElementsByClassName("et_pb_section_video_bg  ")[0].parentElement.style.display = "none";
    hideItemsRepeater(() => document.getElementsByClassName("et_pb_section_video_bg  ")[0].parentElement.style.display = "none");
} catch { }



try {
    document.querySelectorAll(".menu-item-756")[1].style.display = "none";
    hideItemsRepeater(() => document.querySelectorAll(".menu-item-756")[1].style.display = "none");
} catch { }

function hideItemsRepeater(callback) {
    var interval = setInterval(callback, 50);
    setTimeout(() => {
        clearInterval(interval);
    }, 500);
}
