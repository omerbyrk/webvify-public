
var button = document.querySelector("#post-11 > div > div > nav > ul > li.woocommerce-MyAccount-navigation-link.woocommerce-MyAccount-navigation-link--wpf-delete-account > a");

button.onclick = function (e) { e.preventDefault(); confirm("Do you want to delete the account with all the stored data? It will be deleted if you confirm this dialog."); }
