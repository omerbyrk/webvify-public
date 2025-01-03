var parentElement = document.querySelector(".woocommerce-MyAccount-navigation ul");
var deleteMyButton = document.createElement("button");
deleteMyButton.innerText = "Delete My Account";
deleteMyButton.onclick = (e) => {
    e.preventDefault();
    confirm("Do you want to delete the account with all the stored data? It will be deleted if you confirm this dialog. ")
};
if (parentElement.lastChild.innerText !== deleteMyButton.innerText) {
    parentElement.appendChild(deleteMyButton);
}