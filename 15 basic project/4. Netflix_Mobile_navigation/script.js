const open_btn = document.querySelector('.open-btn')
const close_btn = document.querySelector('.close-btn')
const nav = document.querySelectorAll('.nav')

open_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.add('visible'))
})

close_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.remove('visible'))
})


// for dark theme and lite theme
const container = document.querySelector('.container');
const modeToggleBtn = document.getElementById('mode-toggle');
const iconLight = document.getElementById('icon-light');
const iconDark = document.getElementById('icon-dark');

modeToggleBtn.addEventListener('click', () => {
    container.classList.toggle('dark-mode');
    container.classList.toggle('light-mode');
    const mode = container.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('mode', mode);
    toggleIcons();
});

// Function to toggle icons
function toggleIcons() {
    iconLight.style.display = container.classList.contains('dark-mode') ? 'none' : 'inline';
    iconDark.style.display = container.classList.contains('dark-mode') ? 'inline' : 'none';

    // Update background color
    if (container.classList.contains('dark-mode')) {
        document.body.style.backgroundColor = '#1a1a1a';
    } else {
        document.body.style.backgroundColor = '#ffffff';
    }
}

// Check for saved mode preference
const savedMode = localStorage.getItem('mode');

if (savedMode) {
    container.classList.add(savedMode + '-mode');
    toggleIcons();
}
