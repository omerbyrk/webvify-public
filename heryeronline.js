try {

    setInterval(() => {
        document.querySelectorAll("button:has(img[src*='/images/icons/current-education-icon.png'])")[1].remove()
    }, 1000);

} catch (e) {
    console.error("An error occurred in heryeronline.js:", e);
}