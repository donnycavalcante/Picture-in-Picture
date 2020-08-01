const videoElement = document.getElementById('video');

// Prompt to select media stream, pass to video element, then play
    async function selectMediaStream() {
        try {
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        };
    } catch (error) {
              
    }
}


// On Load
selectMediaStream();
