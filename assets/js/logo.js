
var image = document.getElementById('imageLogo');

image.addEventListener('mouseover', function() {
    image.src = 'assets/image/logoNeon.png';
})
image.addEventListener('mouseout', function() {
    image.src = 'assets/image/logo.png';
})