setInterval(() => {
    try {
        var buttons = document.querySelectorAll("button:has(img[src*='/images/icons/current-education-icon.png'])");
        if (buttons.length > 1) {
            console.log(buttons.length);
            buttons[1].remove();
        }

    } catch (e) {
    }
}, 50);