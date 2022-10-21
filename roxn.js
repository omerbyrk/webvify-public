var parentElement = document.querySelector(".account-overview-profile .card-actions");
var clonedElement = document.querySelector(".account-overview-profile .card-actions a").cloneNode();
clonedElement.innerText = "Delete My Account";
clonedElement.onclick = (e) => {
    e.preventDefault();
    confirm("Do you want to delete the account with all the stored data? It will be deleted if you confirm this dialog. ")
};
parentElement.appendChild(clonedElement);


setTimeout(() => document.querySelector(".header-search-toggle-icon").click(), 250);