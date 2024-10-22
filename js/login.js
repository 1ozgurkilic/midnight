const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');

togglePassword.addEventListener('click', function () {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    this.textContent = type === 'password' ? 'Göster' : 'Gizle';
});
const backButton = document.getElementById('backButton');

backButton.addEventListener('click', function (event) {
    event.preventDefault(); // Varsayılan davranışı engelle
    window.history.back(); // Önceki sayfaya git
});
const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Varsayılan davranışı engelle

    const email = form.querySelector('input[type="email"]').value;
    const password = passwordInput.value;

    // Burada basit bir kontrol yapabilirsin, örneğin:
    if (!email || !password) {
        alert('Lütfen tüm alanları doldurun!');
        return;
    }

    // Giriş yapma işlemi için burada gerekli kodu ekleyebilirsin.
});
