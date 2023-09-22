

// https://cdn.jsdelivr.net/gh/omerbyrk/webvify-public/logo.png



try {
    if (window.location.href == 'https://tehs.edublooms.com/user/dashboard' || window.location.href == 'https://tehs.edublooms.com/user/dashboard/') {
        var parentElement = document.querySelector("#mySidenav");
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
    }

} catch {

}

