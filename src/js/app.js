let videoBtn = document.querySelector('.js-video-btn'),
    video = document.querySelector('.js-video');
    

videoBtn.onclick = function () {
    video.play(); 
    this.classList.add('hide');
  
}

video.onclick = function () {
    if (this.paused) {
        this.play();
    } else {
        this.pause();
    }
}

video.addEventListener('ended', videoHandler, false);
function videoHandler() {
    videoBtn.classList.remove('hide')

}