// script.js
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('image-container');
    const imageUrl = 'images/kiss_300px.png'; // Path to your image
    const numImages = 50; // Number of images to generate

    for (let i = 0; i < numImages; i++) {
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = 'Random Image';
        img.style.left = `${Math.random() * 100}vw`; // Random horizontal position
        img.style.top = `${Math.random() * 100}vh`; // Random vertical position
        img.style.transform = `rotate(${Math.random() * 360}deg)`; // Random rotation
        container.appendChild(img);
    }
});
