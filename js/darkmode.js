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
    
    // Toggle dark/light mode with smooth transition
    darkModeToggle.addEventListener('click', function() {
        const isDark = body.getAttribute('data-theme') === 'dark';
        const newTheme = isDark ? 'light' : 'dark';
        
        // Add rotation animation
        this.style.transform = 'rotate(180deg)';
        
        // Change theme
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Reset rotation
        setTimeout(() => {
            this.style.transform = 'rotate(0deg)';
        }, 200);
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
    
    console.log('Dark mode initialized');
});
