console.log("Hello World!");

// Setup to ensure that your JavaScript code runs only after the entire HTML 
// document has been fully loaded 
document.addEventListener('DOMContentLoaded', () => {


    // Created my thumbnails, large images and and their titles
            const images = [
                {
                    image: `./images/image1.jpg`,
                    thumbnail: `./images/image1.jpg`,
                    altText: `A brown field bathed in warm golden light under a clear morning sky`,
                    titleText: `Golden Light`,
                    titleColor: `#fff`
                },
                {
                    image: `./images/image2.jpg`,
                    thumbnail: `./images/image2.jpg`,
                    altText: `A tranquil and serene green lake with a gentle waterfall flowing into it, surrounded by brown and green trees`,
                    titleText: `Tranquil Greens`,
                    titleColor: `#043b22`
                },
                {
                    image: `./images/image3.jpg`,
                    thumbnail: `./images/image3.jpg`,
                    altText: `rock formation on the calm ocean `,
                    titleText: `Calm Ocean`,
                    titleColor: `#fff`
                },
                {
                    image: `./images/image4.jpg`,
                    thumbnail: `./images/image4.jpg`,
                    altText: `Serene Nature`,
                    titleText: `Serene Nature`,
                    titleColor: `#5FDB0D`
                },
                {
                    image: `./images/image5.jpg`,
                    thumbnail: `./images/image5.jpg`,
                    altText: `A gray concrete bridge over a powerful waterfall, its raw, steady presence cascading water beneath`,
                    titleText: `Bridge Over Water`,
                    titleColor: `#fff`
                },
                {
                    image: `./images/image6.jpg`,
                    thumbnail: `./images/image6.jpg`,
                    altText: `Bed of flowers and high mountains half covered in trees and cloudy day`,
                    titleText: `Daydreaming`,
                    titleColor: `#F8D1A3`
                },
                {
                    image: `./images/image7.jpg`,
                    thumbnail: `./images/image7.jpg`,
                    altText: `Colourful flowers, green grass and gray rocky mountains during daytime`,
                    titleText: `Mountains & Flowers`,
                    titleColor: `#B4C7D6`
                },
            ];
let currentImageIndex = 0;
    
    // DOM elements
    const thumbnailContainer = document.getElementById('thumbnail-container');
    const largeImageContainer = document.getElementById('large-image-container');
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');
    const announcer = document.getElementById('announcer');
    const imageTitle = document.getElementById('image-title');

    // Starting the gallery
    function init() {
        createThumbnails();
        updateLargeImage(images[currentImageIndex]);
    }

    // Function to create and append thumbnail images
    function createThumbnails() {
        images.forEach((image, index) => {
            let thumbnailImg = document.createElement('img');
            thumbnailImg.setAttribute('src', image.thumbnail);
            thumbnailImg.setAttribute('alt', image.altText);
            thumbnailImg.setAttribute('tabindex', '0');
            thumbnailImg.classList.add('thumbnail-image');
            
            thumbnailContainer.appendChild(thumbnailImg);
            
            // Added event listeners for click and keyboard events
            thumbnailImg.addEventListener('click', () => {
                currentImageIndex = index;
                updateLargeImage(images[currentImageIndex]);
            });
            
            thumbnailImg.addEventListener('keydown', (event) => {
                if (event.key === 'Enter') {
                    currentImageIndex = index;
                    updateLargeImage(images[currentImageIndex]);
                }
            });
        });
    }
// Function to update the large image display
    function updateLargeImage(image) {
        let largeImageElement = largeImageContainer.querySelector('img');
        
        if (!largeImageElement) {
            largeImageElement = document.createElement('img');
            largeImageContainer.appendChild(largeImageElement);
        }
        
        largeImageElement.setAttribute('src', image.image);
        largeImageElement.setAttribute('alt', image.altText);

        imageTitle.textContent = image.titleText;
        imageTitle.style.color = image.titleColor;
        
        announcer.textContent = `Now displaying image: ${image.altText}`;
        
        const thumbnails = thumbnailContainer.querySelectorAll('.thumbnail-image');
        thumbnails.forEach((thumbnail, index) => {
            if (index === currentImageIndex) {
                thumbnail.classList.add('active');
                updateScrollBar(thumbnail);
            } else {
                thumbnail.classList.remove('active');
            }
        });
    }

 // Function to scroll the thumbnail container
    function updateScrollBar(activeThumbnail) {
        const containerRect = thumbnailContainer.getBoundingClientRect();
        const thumbnailRect = activeThumbnail.getBoundingClientRect();

        let scrollPos = activeThumbnail.offsetLeft + thumbnailRect.width / 2 - containerRect.width / 2;

        thumbnailContainer.scrollTo({
            left: scrollPos,
            behavior: 'smooth'
        });
    }
        
    // Navigation functions
    function selectNextImage(direction) {
        currentImageIndex = (currentImageIndex + direction + images.length) % images.length;
        updateLargeImage(images[currentImageIndex]);
    }
  // Event listeners for buttons
    nextButton.addEventListener('click', () => selectNextImage(1));
    prevButton.addEventListener('click', () => selectNextImage(-1));

    // Touch and keyboard navigation
    let touchstartX = 0;
    let touchendX = 0;

    largeImageContainer.addEventListener('touchstart', e => {
        touchstartX = e.changedTouches[0].screenX;
    });

    largeImageContainer.addEventListener('touchend', e => {
        touchendX = e.changedTouches[0].screenX;
        let threshold = 50;
        if (touchendX < touchstartX - threshold) {
            selectNextImage(1);
        } else if (touchendX > touchstartX + threshold) {
            selectNextImage(-1);
        }
    });

    window.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight') {
            selectNextImage(1);
        } else if (event.key === 'ArrowLeft') {
            selectNextImage(-1);
        }
    });

    // Start the application
    init();
});

        