// Function to get the value of a specific cookie by name
alert("hellow wor");
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

// Retrieve the Firebase token from the cookie
const firebaseToken = getCookie('firebase-token');

// Check if the token exists and display it in an alert
if (firebaseToken) {
    alert(`Firebase Token: ${firebaseToken}`);
} else {
    alert('Firebase Token not found in the cookie.');
}