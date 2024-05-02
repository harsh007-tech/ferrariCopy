// Initial variables

const videoSources = [
    'https://videos.pexels.com/video-files/13643106/13643106-hd_1920_1080_24fps.mp4',
    'https://videos.pexels.com/video-files/5309380/5309380-hd_1920_1080_25fps.mp4',
    'https://media.istockphoto.com/id/1485054898/video/bright-motion-timelapse-of-a-speedy-night-drive-in-a-big-city-windshield-view-hyperlapse-road.mp4?s=mp4-640x640-is&k=20&c=xqgGWv9CQDtdLnimzdexmnKksuqzkryxZH5XjOqtdSs='
];
let currentVideoIndex = 0;

// Function to update video source and play
function updateVideoSource() {
    document.getElementById('video-bg').src = videoSources[currentVideoIndex];
    document.getElementById('video-bg').play(); // Autoplay the new video
}

// Function to show previous video
function showPreviousVideo() {
    currentVideoIndex = (currentVideoIndex - 1 + videoSources.length) % videoSources.length;
    updateVideoSource();
}

// Function to show next video
function showNextVideo() {
    currentVideoIndex = (currentVideoIndex + 1) % videoSources.length;
    updateVideoSource();
}


