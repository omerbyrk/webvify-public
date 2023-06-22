function addDeleteMyAccountButton() {
    var parentElement = document.querySelector("#account-links-popover");
    var deleteMyButton = document.createElement("button");
    deleteMyButton.id = "delete_my_account";
    deleteMyButton.innerText = "Delete My Account";
    deleteMyButton.style.marginTop = "10px";
    deleteMyButton.style.marginBottom = "10px";
    deleteMyButton.style.textAlign = "center";
    deleteMyButton.style.zIndex = 99;
    deleteMyButton.style.background = "red";
    deleteMyButton.style.color = "white";
    deleteMyButton.onclick = (e) => {
        e.preventDefault();
        confirm("Do you want to delete the account with all the stored data? It will be deleted if you confirm this dialog. ")
    };
    if (!document.getElementById('deleteMyAccount')) {
        parentElement.appendChild(deleteMyButton);
    }
}
setInterval(addDeleteMyAccountButton, 200);
addDeleteMyAccountButton();