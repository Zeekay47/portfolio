document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    const body = document.body;
    
    // Check for saved theme preference
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        body.setAttribute('data-theme', currentTheme);
    }
    
    // Toggle dark/light mode
    darkModeToggle.addEventListener('click', function() {
        if (body.getAttribute('data-theme') === 'dark') {
            body.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        } else {
            body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    });
});