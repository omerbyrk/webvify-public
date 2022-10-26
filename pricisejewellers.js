var parentElement = document.querySelector(".woocommerce-MyAccount-navigation ul");
var clonedElement = document.querySelector(".woocommerce-MyAccount-navigation-link--customer-logout").cloneNode(true);
clonedElement.innerText = "Delete My Account";
clonedElement.onclick = (e) => {
    e.preventDefault();
    confirm("Do you want to delete the account with all the stored data? It will be deleted if you confirm this dialog. ")
};
parentElement.appendChild(clonedElement);
