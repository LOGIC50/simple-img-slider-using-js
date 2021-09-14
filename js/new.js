const images = [
    'images/g1.jpg',
    'images/g2.jpg',
    'images/g3.jpg',
    'images/g4.jpg',
    'images/g5.jpg',
    'images/g6.jpg',
    'images/g7.jpg',
    'images/g8.jpg',
    'images/g9.jpg'
]
let imgIndex = 0;
const imgElement = document.getElementById('slider-img');
setInterval( () => {
    if(imgIndex >= images.length){
        imgIndex = 0;
    }
    const imgUrl = images[imgIndex];
    imgElement.setAttribute('src', imgUrl);
    imgIndex++;
}, 1000);