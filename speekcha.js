
function hideItemsRepeater(callback) {

    setInterval(callback, 100);
}

try {
    hideItemsRepeater(() => {
        document.getElementsByClassName("ant-layout-footer")[0].style.display = "none"
    });
} catch { }

try {
    hideItemsRepeater(() => document.getElementsByClassName("btn-tokens")[0].style.display = "none");
} catch { }
try {
    // document.getElementsByClassName("ant-dropdown-menu-item ant-dropdown-menu-item-only-child")[2].style.display = "none";
    hideItemsRepeater(() => {
        document.getElementsByClassName("ant-dropdown-menu-item ant-dropdown-menu-item-only-child")[2].style.display = "none";
    });
} catch { }
try {

    hideItemsRepeater(() => {
        for (var i = 5; i <= 11; i++) {
            try {
                document.getElementsByClassName("ant-menu-item")[i].style.display = "none";
            } catch (error) {

            }

        }
    });
} catch { }

try {
    // document.getElementsByClassName("ant-dropdown-menu-item ant-dropdown-menu-item-only-child")[2].style.display = "none";
    hideItemsRepeater(() => {
        document.querySelector("a[href='/auth/register/model']").parentElement.style.display = "none";
    });

} catch { }


try {
    // document.getElementsByClassName("ant-dropdown-menu-item ant-dropdown-menu-item-only-child")[2].style.display = "none";
    hideItemsRepeater(() => {
        document.querySelector("a[href='/auth/login/performer']").parentElement.style.display = "none";
    });

} catch { }
