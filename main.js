function playVideo() {
    var video = document.getElementById("video-section");
    var playButton = document.getElementById("logo-overlay");

    
    video.play();
    playButton.style.display = "none"; 
}