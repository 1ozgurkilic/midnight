$(document).ready(function () {
    // keyup ile inputa herhangi bir değer girilince fonksiyonu tetikliyoruz
    $("#searchTags").keyup(function(){
        // inputa yazılan değeri alıyoruz
        var value = $("#searchTags").val().toLowerCase();
        // eğer input içinde değer yoksa yani boşsa tüm menüyü çıkartıyoruz
        if(value.length==0){
            $("#menuFull li").show(); // arama yapılmışsa ilk olarak tüm menüyü gizliyoruz ve girilen değer ile eşleşen kısmı çıkarıyoruz
        }else{
            $("#menuFull li").hide();
            $("#menuFull li").filter(function() {
                return $(this).text().toLowerCase().indexOf(value) > -1;
            }).show();
        }
    });
});
