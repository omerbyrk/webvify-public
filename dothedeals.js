// https://cdn.jsdelivr.net/gh/omerbyrk/webvify-public/empty.js

try {
    var parentElement = document.querySelector(".profile-col .member-emailaddress");
    var deleteMyButton = document.createElement("button");
    deleteMyButton.id = "delete_my_account";
    deleteMyButton.innerText = "Delete My Account";
    deleteMyButton.style.marginTop = "10px";
    deleteMyButton.style.marginBottom = "10px";
    deleteMyButton.style.width = "100%";
    deleteMyButton.style.zIndex = 99;
    deleteMyButton.style.background = "red";
    deleteMyButton.style.color = "white";
    deleteMyButton.onclick = (e) => {
        e.preventDefault();
        confirm("Do you want to delete the account with all the stored data? It will be deleted if you confirm this dialog. ")
    };
    if (document.querySelector("#delete_my_account") === null) {
        parentElement.appendChild(deleteMyButton);
    }
} catch {

}


