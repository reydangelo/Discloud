function getCurrentTrack() {
    let titleElement = document.querySelector('.playbackSoundBadge__titleLink');
    let artistElement = document.querySelector('.playbackSoundBadge__lightLink');
    let imageUrlElement = document.querySelector('.sc-artwork.sc-artwork-4x');
    let imageUrl = imageUrlElement.style.backgroundImage;

    if (titleElement && artistElement) {
      return {
        title: titleElement.title,
        artist: artistElement.title,
        imageUrl: imageUrl.slice(5, -2),
      };
    }
    return null;
  }
  
  function trackChanges() {
    let lastTrack = null;
    setInterval(() => {
      let track = getCurrentTrack();
      if (track && JSON.stringify(track) !== JSON.stringify(lastTrack)) {
        lastTrack = track;
        chrome.runtime.sendMessage({ track });
      }
    }, 3000);
  }
  
  trackChanges();