const videos = document.querySelectorAll('video');

let isRunning = false;
document.addEventListener('scroll', () => {
    if (window.scrollY >= 500 && isRunning === false) {
        videos.forEach(video => video.play());
        isRunning = true;
    }
})

