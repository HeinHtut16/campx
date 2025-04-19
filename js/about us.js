document.getElementById('menu-btn').addEventListener('click', function() {
    let dropdown = document.getElementById('auth-dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

// Toggle the dropdown menu when the menu icon is clicked on mobile view
document.getElementById('menu-btn').addEventListener('click', function() {
    let dropdown = document.getElementById('auth-dropdown');
    dropdown.classList.toggle('show');
});
