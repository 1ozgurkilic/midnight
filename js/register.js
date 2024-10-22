const togglePassword = document.getElementById('togglePassword');
const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const form = document.querySelector('form');
const errorMessage = document.getElementById('error-message'); // Uyarı mesajı için yer

togglePassword.addEventListener('click', function () {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    this.textContent = type === 'password' ? 'Göster' : 'Gizle';
});

toggleConfirmPassword.addEventListener('click', function () {
    const type = confirmPasswordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    confirmPasswordInput.setAttribute('type', type);
    this.textContent = type === 'password' ? 'Göster' : 'Gizle';
});

// Form gönderildiğinde parolaları kontrol et
form.addEventListener('submit', function (e) {
    if (passwordInput.value !== confirmPasswordInput.value) {
        e.preventDefault(); // Formun gönderilmesini engelle
        errorMessage.textContent = 'Parolalar eşleşmiyor. Lütfen kontrol edin.'; // Uyarı mesajı
        errorMessage.style.display = 'block'; // Mesajı göster
    } else {
        errorMessage.style.display = 'none'; // Eşleşiyorsa mesajı gizle
    }
});
const backButton = document.getElementById('backButton');

backButton.addEventListener('click', function (event) {
    event.preventDefault(); // Varsayılan davranışı engelle
    window.history.back(); // Önceki sayfaya git
});
