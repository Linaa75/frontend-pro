const images = [
    './img/1.jpg',
    './img/2.jpg',
    './img/3.jpg',
    './img/4.jpg',
    './img/5.jpg',
    './img/6.jpg',
    './img/7.jpg',
    './img/8.jpg',
    './img/9.jpg'
]

const img = document.getElementById('image');

const randomImg = Math.floor(Math.random() * images.length);

img.src = images[randomImg];
img.style.width = '600px';
img.style.height = '600px';