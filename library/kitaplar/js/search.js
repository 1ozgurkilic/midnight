window.addEventListener('load', function() {
    var fontSizeControl = document.getElementById('font-size');
    var bookText = document.getElementById('book-text');
    
    fontSizeControl.addEventListener('input', function() {
        var fontSize = this.value + 'px';
        bookText.style.fontSize = fontSize;
    });

    document.getElementById('text-color').addEventListener('input', function() {
        var textColor = this.value;
        document.getElementById('book-text').style.color = textColor;
    });

    document.getElementById('bg-color').addEventListener('input', function() {
        var bgColor = this.value;
        document.getElementById('book-content').style.backgroundColor = bgColor;
    });

    // Tool container'ı hareket ettirmek için
    dragElement(document.getElementById('tool-container'));
});

function dragElement(element) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    element.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        element.style.top = (element.offsetTop - pos2) + "px";
        element.style.left = (element.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
