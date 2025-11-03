# Giphy Search Engine

**Author:** Mo (Mohammed Adam)  
**Contact:** mohammedadam275@gmail.com

---

## Overview / Description

This project is a small, single-page Giphy Search Engine demo that allows users to search for GIFs, browse a set of random GIFs, and submit a simple contact message. The application demonstrates client-side API usage, pagination, progressive rendering for parallel network requests, and safe DOM updates. It is intended as a learning demo and is ideal for showing core web development concepts.

---

## Functionality / How to Use

- **Search for GIFs:** Type a query into the search box on the Home view and press **Search**. The app will return a page of GIF results.
- **Pagination:** Use the **Previous** and **Next** buttons at the bottom of the search results to move between pages. Pagination is driven by `offset` and `PAGE_SIZE`.
- **Random GIFs:** Click the **Random** navigation item to fetch and display multiple random GIFs. The app progressively renders each GIF card as results arrive.
- **Contact Form:** Use the **Contact** view to submit a simulated contact message. The form will display an accessible success message and then clear the fields.
- **Local testing:** Serve the project from a static server (for example, run `python -m http.server 8080` from the project folder) and open `http://localhost:8080` in your browser.

> **Important:** The demo includes a placeholder for the Giphy API key. Do not commit a real API key to a public repository. For development, inject the key at runtime (for example, via a small `<script>` that sets `window.GIPHY_API_KEY`) or use a server-side proxy to keep the key secret.

---

## Technologies Used

- **`.html`** — Markup for the app structure and views.  
- **`.css`** — Styling, layout, and responsive rules (flexbox and card-style layout).  

> The client-side logic for this demo is implemented in vanilla JavaScript, but the required coursework section specifically asks you to list `.html` and `.css`.

---

## Ideas for Future Improvement

1. **Move API requests to a secure server-side proxy.**  
   Implement a minimal backend (for example, an Express server) that stores the Giphy API key and proxies requests. This will keep the API key secret and allow you to add usage monitoring and rate limiting.

2. **Add robust error handling and retry/backoff logic.**  
   Handle HTTP error status codes and rate-limiting (429) gracefully with user-friendly messages and an exponential backoff retry strategy.

3. **Improve accessibility and focus management.**  
   Add ARIA attributes, manage focus when views change (move focus to a heading or the first input), and ensure all interactive elements have visible keyboard focus outlines.

4. **Replace `innerHTML` with componentized DOM rendering or a minimal template function.**  
   For better security and maintainability, avoid inserting HTML strings for dynamic content. Use `document.createElement` and `textContent` or a small templating helper instead.

5. **Add caching and use pagination metadata.**  
   Use API pagination metadata (`total_count`, `count`) to disable or hide Next/Prev buttons when appropriate and cache recent queries to speed up subsequent views.

6. **Add unit tests and end-to-end tests.**  
   Add tests for core functions (for example, pagination, URL building, and DOM rendering) and add end-to-end tests (Cypress / Playwright) for user flows.

---

## Notes

- If you accidentally commit an API key to a public repo, rotate and revoke that key immediately.
- For local testing only, you may inject a test key into the page by adding a small script before `main.js`:
  ```html
  <script>
    // For local development only — do NOT commit this to a public repository.
    window.GIPHY_API_KEY = "YOUR_TEST_KEY_HERE";
  </script>
