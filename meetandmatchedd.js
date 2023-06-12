/*var style = document.createElement('style');
style.innerText = "body footer { display: block !important; width: unset !important; height: unset !important; }";
document.head.appendChild(style);*/



try {
    var parentElement = document.querySelector("body > section.pt-3.pb-5.mb-5.user-details > div > div.row.d-flex.justify-content-center.mb-3.mb-md-5.d-flex.d-md-none > div");
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
