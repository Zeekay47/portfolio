document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    const body = document.body;
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Check for saved theme preference
    const currentTheme = localStorage.getItem('theme');
    
    if (currentTheme) {
        // Apply saved theme
        body.setAttribute('data-theme', currentTheme);
    } else if (prefersDarkScheme.matches) {
        // Apply system preference if no saved theme
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    
    // Toggle dark/light mode with animation
    darkModeToggle.addEventListener('click', function() {
        // Add transition effect
        body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
        
        if (body.getAttribute('data-theme') === 'dark') {
            body.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            
            // Update toggle icon animation
            this.style.transform = 'rotate(180deg)';
            setTimeout(() => {
                this.style.transform = 'rotate(0deg)';
            }, 200);
        } else {
            body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            
            // Update toggle icon animation
            this.style.transform = 'rotate(180deg)';
            setTimeout(() => {
                this.style.transform = 'rotate(0deg)';
            }, 200);
        }
        
        // Update navbar background based on theme
        const navbar = document.getElementById('navbar');
        if (body.getAttribute('data-theme') === 'dark') {
            navbar.style.background = 'rgba(30, 30, 30, 0.95)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    });
    
    // Listen for system theme changes
    prefersDarkScheme.addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            // Only update if user hasn't set a preference
            const newTheme = e.matches ? 'dark' : 'light';
            body.setAttribute('data-theme', newTheme);
        }
    });
    
    // Add keyboard shortcut for dark mode (Ctrl/Cmd + D)
    document.addEventListener('keydown', function(e) {
        if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
            e.preventDefault();
            darkModeToggle.click();
        }
    });
    
    // Add CSS transition to body when theme changes
    body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    
    console.log('Dark mode initialized');
});
