
    window.addEventListener('DOMContentLoaded', function () {
        if (!localStorage.getItem('navAnimated')) {
            const navItems = document.querySelectorAll('nav ul li');
            navItems.forEach(item => {
                item.classList.add('animate-nav');
            });
            // Mark that animation has happened
            localStorage.setItem('navAnimated', 'true');
        }
    });
