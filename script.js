document.addEventListener("DOMContentLoaded", function() {
    let count = 1;
    document.getElementById("radio1").checked = true;

    setInterval(function() {
        nextImage();
    }, 3000);

    function nextImage() {
        count++;
        if (count > 4) {
            count = 1;
        }
        document.getElementById("radio" + count).checked = true;
    }
});

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    let iconButton = document.querySelector('.material-symbols-outlined');

    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        iconButton.textContent = "menu";
    } else {
        menuMobile.classList.add('open');
        iconButton.textContent = "close";
    }
}