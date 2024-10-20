document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    const body = document.body;
    const header = document.getElementById('header');
    const backButton = document.getElementById('backButton');
    const menuItems = document.querySelectorAll('.menu-item a span');
    const smallTexts = document.querySelectorAll('.small-text');
    const searchContainer = document.querySelector('.search-container');
    const buttons = document.querySelectorAll('.button svg');

    function toggleMode() {
        app.classList.toggle('light-mode');
        if (app.classList.contains('light-mode')) {
            app.style.backgroundColor = 'white';
            app.style.color = 'black';
            menuItems.forEach(item => item.style.color = 'black');
            smallTexts.forEach(text => text.style.color = '#626262');
            searchContainer.style.backgroundColor = '#626262';
            searchContainer.style.color = 'white';
            buttons.forEach(button => button.style.fill = 'black');
        } else {
            app.style.backgroundColor = 'black';
            app.style.color = 'white';
            menuItems.forEach(item => item.style.color = 'white');
            smallTexts.forEach(text => text.style.color = '#626262');
            searchContainer.style.backgroundColor = '#626262';
            searchContainer.style.color = 'white';
            buttons.forEach(button => button.style.fill = 'white');
        }
    }

    function toggleLanguage() {
        const dropdown = document.querySelector('.language-dropdown');
        dropdown.classList.toggle('show');
    }

    backButton.addEventListener('click', () => {
        window.history.back();
    });

    window.toggleMode = toggleMode;
    window.toggleLanguage = toggleLanguage;
});
