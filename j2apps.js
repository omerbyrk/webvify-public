// https://cdn.jsdelivr.net/gh/omerbyrk/webvify-public/empty.js



function addDeleteMyAccountButton() {
    var parentElement = document.querySelector(".view.list-view .list");
    var deleteMyButton = document.createElement("button");
    deleteMyButton.innerText = "Delete My Account";
    deleteMyButton.id = "deleteMyAccount";
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
    if (!document.getElementById('deleteMyAccount')) {
        parentElement.appendChild(deleteMyButton);
    }
}
setInterval(addDeleteMyAccountButton, 500);
addDeleteMyAccountButton();




