const videos = document.querySelectorAll('video');

let isRunning = false;
document.addEventListener('scroll', () => {
    if (window.scrollY >= 500 && isRunning === false) {
        videos.forEach(video => video.play());
        isRunning = true;
    }
})

btn.addEventListener('click', () => {

    fetch('http://localhost:3000', {
        method:"POST",
        header: {
            'Content-type': 'text/plain'
        },
        body: inputText.value,
    }).then(res => res.text())
      .then(console.log)

})
