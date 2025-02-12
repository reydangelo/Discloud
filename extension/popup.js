document.addEventListener("DOMContentLoaded", () => {
    chrome.storage.local.get("currentTrack", (data) => {
      const trackElement = document.getElementById("track");
      if (data.currentTrack) {
        trackElement.innerText = `${data.currentTrack.artist} - ${data.currentTrack.title}`;
      } else {
        trackElement.innerText = "No track playing.";
      }
    });
  });