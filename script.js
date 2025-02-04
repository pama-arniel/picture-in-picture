const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = async () => {
      videoElement.play();

      // Start picture in picture
      await videoElement.requestPictureInPicture();
    };
  } catch (error) {
    // Catch error here
    alert("Error in selecting media screen.");
    console.error("error here: ", error);
  }
}

button.addEventListener("click", async () => {
  // Disable button
  button.disabled = true;

  // Select media stream
  await selectMediaStream();

  // Reset button
  button.disabled = false;
});
