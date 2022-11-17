
try {
    var parentElement = document.querySelector(".woocommerce-MyAccount-navigation ul");
    var deleteMyButton = document.createElement("button");
    deleteMyButton.style.backgroundColor = "#000000";
    deleteMyButton.innerText = "Delete My Account";
    deleteMyButton.onclick = (e) => {
        e.preventDefault();
        confirm("Do you want to delete the account with all the stored data? It will be deleted if you confirm this dialog. ")
    };
    if (parentElement.lastChild.innerText?.toUpperCase() !== deleteMyButton.innerText?.toUpperCase()) {
        parentElement.appendChild(deleteMyButton);
    }

} catch {

}

try {
    document.querySelector(".add_to_cart_button").onclick = (e) => {
        alert("Item is added to the cart");
    };
} catch {

}

