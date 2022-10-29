var parentElement = document.querySelector(".account-page .action-btn");
var deleteMyButton = document.createElement("button");
deleteMyButton.classList.add("btn");
deleteMyButton.innerText = "Delete My Account";
deleteMyButton.onclick = (e) => {
    e.preventDefault();
    confirm("Do you want to delete the account with all the stored data? It will be deleted if you confirm this dialog. ")
};
if (parentElement.lastChild.innerText !== deleteMyButton.innerText.toUpperCase()) {
    parentElement.appendChild(deleteMyButton);
}