// https://cdn.jsdelivr.net/gh/omerbyrk/webvify-public/configuration1.js

try {
    var parentElement = document.querySelector(".account-dropdown");
    var deleteMyButton = document.createElement("li");
    deleteMyButton.id = "delete_my_account";
    deleteMyButton.className = "account-item";
    deleteMyButton.innerHTML = `<a class="link account-action" href="#"><span class="text">Delete My Account</span></a>`;
    deleteMyButton.onclick = (e) => {
        e.preventDefault();
        confirm("Do you want to delete the account with all the stored data? It will be deleted if you confirm this dialog. ")
    };
    if (document.querySelector("#delete_my_account") === null) {
        parentElement.appendChild(deleteMyButton);
    }
} catch { }


