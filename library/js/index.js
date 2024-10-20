const backButton = document.getElementById('backButton');

backButton.addEventListener('click', function (event) {
    event.preventDefault(); // Varsayılan davranışı engelle
    window.history.back(); // Önceki sayfaya git
});
