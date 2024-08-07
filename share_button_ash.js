var share_btn = document.getElementsByClassName("share_button_ash");
var share_title = document.title;
var share_text = "Searching for Original products then Check this out!";

share_btn[0].onclick = () => {
    var share_url = encodeURIComponent(window.location.href);
    window.location = 'https://wa.me/send/?text=' + share_text + '%0A' + share_url + '%0A' + share_title;
};