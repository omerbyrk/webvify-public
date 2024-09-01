

setInterval(() => {

    try {

        var button = document.querySelector("div.select-package:nth-child(7) > a:nth-child(1)");
        if (button) {
            button.click();
        }
    } catch {

    }

}, 0);