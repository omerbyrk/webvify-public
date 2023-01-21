// https://cdn.jsdelivr.net/gh/omerbyrk/webvify-public/javascript/delete-my-buttons/empty.js



function addDeleteMyAccountButton() {
    var parentElement = document.querySelector("a[href='/account/profile']").parentElement;
    var deleteMyButton = document.createElement("button");
    deleteMyButton.innerText = "Delete My Account";
    deleteMyButton.style.marginTop = "10px";
    deleteMyButton.style.marginBottom = "10px";
    deleteMyButton.style.width = "100%";
    deleteMyButton.style.background = "red";
    deleteMyButton.style.fontSize = "18px";
    deleteMyButton.style.color = "white";
    deleteMyButton.onclick = (e) => {
        e.preventDefault();
        confirm("Do you want to delete the account with all the stored data? It will be deleted if you confirm this dialog. ")
    };
    if (parentElement.lastChild.innerText !== deleteMyButton.innerText) {
        parentElement.appendChild(deleteMyButton);
    }
}
setInterval(addDeleteMyAccountButton, 200);
addDeleteMyAccountButton();

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


