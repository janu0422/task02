document.addEventListener('DOMContentLoaded', function () {
    var navbar = document.getElementById('navbar');

    // Change style when scrolled
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = '#222';
        } else {
            navbar.style.backgroundColor = '#333';
        }
    });

    // Change style when hovering over menu item
    var navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(function (item) {
        item.addEventListener('mouseover', function () {
            item.style.backgroundColor = '#555';
            item.style.color = '#fff';
        });

        item.addEventListener('mouseout', function () {
            item.style.backgroundColor = '';
            item.style.color = '';
        });
    });
});
