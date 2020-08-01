const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media stream, pass to video element, then play
    async function selectMediaStream() {
        try {
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        };
    } catch (error) {
        // Catch Error Here
        console.log('whooops, error here:', error);
    }
}


// On Load
selectMediaStream();
