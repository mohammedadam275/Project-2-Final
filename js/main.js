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
 // Show home view by default
    resetAndShowHome();
}

// FUNCTION: resetAndShowHome
// WHAT IT DOES: Resets the home page and shows it
// HOW IT WORKS:
// 1. Clears any previous search results
// 2. Resets search input field
// 3. Resets pagination
// 4. Shows the home view with default state
function resetAndShowHome() {
    hideAllViews();
    document.getElementById('view-home').classList.remove('hidden');
    currentView = "home";
    
    // Reset everything to initial state
    offset = 0;
    currentSearchTerm = "";
    document.getElementById('search-input').value = "";
    document.getElementById('home-results').innerHTML = "";
}
// FUNCTION: showHomeView
// WHAT IT DOES: Shows the home/search view WITHOUT resetting (for pagination)
// HOW IT WORKS:
// 1. Hides all views
// 2. Shows only the home view
// 3. Keeps current search results intact
function showHomeView() {
    hideAllViews();
    document.getElementById('view-home').classList.remove('hidden');
    currentView = "home";
}
// FUNCTION: showRandomView
// WHAT IT DOES: Shows the random GIFs view
// HOW IT WORKS:
// 1. Hides all views
// 2. Shows the random view
// 3. Loads random GIFs
function showRandomView() {
    hideAllViews();
    document.getElementById('view-random').classList.remove('hidden');
    currentView = "random";
    loadRandomGifs();
}

// FUNCTION: showContactView
// WHAT IT DOES: Shows the contact form view
// HOW IT WORKS:
// 1. Hides all views
// 2. Shows the contact view
function showContactView() {
    hideAllViews();
    document.getElementById('view-contact').classList.remove('hidden');
    currentView = "contact";
}
