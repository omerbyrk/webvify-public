var parentElement = document.querySelector(".user_page > .navbar > ul");
var deleteMyButton = document.createElement("button");
deleteMyButton.style.marginTop = "10px";
deleteMyButton.style.marginBottom = "10px";
deleteMyButton.innerText = "Delete My Account";
deleteMyButton.onclick = (e) => {
    e.preventDefault();
    confirm("Do you want to delete the account with all the stored data? It will be deleted if you confirm this dialog. ")
};
if (parentElement.lastChild.innerText?.toUpperCase() !== deleteMyButton.innerText?.toUpperCase()) {
    parentElement.appendChild(deleteMyButton);
}