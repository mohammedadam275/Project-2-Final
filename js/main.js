// API key for accessing Giphy service
const API_KEY = "4M7MoBOsWE3EncxphZbI9UVQWnAAXTof";

// Number of GIFs to show per page
const PAGE_SIZE = 10;

// Tracks current position in search results for pagination
let offset = 0;

// Current active view
let currentView = "home";

// Store the current search term
let currentSearchTerm = "";

// FUNCTION: initializeApp
// WHAT IT DOES: Sets up the application when page loads
// HOW IT WORKS:
// 1. Adds event listeners to navigation buttons
// 2. Sets up form submission handler
// 3. Shows the home view by default
function initializeApp() {
    console.log("Initializing Giphy Search App");
    
    // Navigation event listeners
    document.getElementById('logo-btn').addEventListener('click', resetAndShowHome);
    document.getElementById('nav-home').addEventListener('click', resetAndShowHome);
    document.getElementById('nav-random').addEventListener('click', showRandomView);
    document.getElementById('nav-contact').addEventListener('click', showContactView);
    
    // Search form submission
    document.getElementById('search-form').addEventListener('submit', function(event) {
        event.preventDefault();
        handleClickSingle();
    });
    
    // Contact form submission
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        handleContactSubmit();
    });
