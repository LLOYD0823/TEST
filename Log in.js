// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCeSy9qMibAAYCZg5cipJ8097qeh3vwF08",
    authDomain: "testingapp-589a1.firebaseapp.com",
    databaseURL: "https://testingapp-589a1-default-rtdb.firebaseio.com",
    projectId: "testingapp-589a1",
    storageBucket: "testingapp-589a1.appspot.com",
    messagingSenderId: "920622301670",
    appId: "1:920622301670:web:8937030299600fede51627",
    measurementId: "G-ZJP7HRFH98"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Predefined admin credentials
const adminUsername = "Admin@gmail.com";
const adminPassword = "Admin123456789";

// Add event listener for form submission
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get user input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if input matches predefined admin credentials
    if (username === adminUsername && password === adminPassword) {
        alert('Login successful! Redirecting...');
        // Redirect to another page, e.g., pedo.html
        window.location.href = 'pedo.html';
    } else {
        alert('Invalid credentials. Please try again.');
        // Optionally, you can reset the form or clear the input fields
        document.getElementById('login-form').reset();
    }
});
