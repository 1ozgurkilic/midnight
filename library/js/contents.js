const backButton = document.getElementById('backButton');

backButton.addEventListener('click', function (event) {
    event.preventDefault(); // Varsayılan davranışı engelle
    window.history.back(); // Önceki sayfaya git
});
function handleSearchClick() {
    const query = document.querySelector('.search-box').value; // Arama kutusundaki değeri al
    console.log("Arama yapılıyor:", query); // Arama değerini konsola yaz
    // Buraya arama işlemiyle ilgili kod ekleyebilirsiniz
}
function handleSearchClick() {
    const query = document.querySelector('.search-box').value; // Arama kutusundaki değeri al
    if (query) {
        // Arama işlemi yapılacaksa
        console.log("Arama yapılıyor:", query); // Arama değerini konsola yaz
        // Buraya arama işlemiyle ilgili kod ekleyebilirsiniz (örneğin, bir sayfaya yönlendirme veya bir API çağrısı)
    } else {
        console.log("Lütfen bir şeyler yazın."); // Arama kutusu boşsa
    }
}
