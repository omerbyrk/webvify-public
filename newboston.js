try {
    setInterval(() => document.querySelector("iframe[src*='google.com']").remove(), 500);
} catch (e) {

}