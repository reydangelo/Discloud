chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.track) {
    chrome.storage.local.set({ currentTrack: message.track });
    fetch("http://localhost:3000/update", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(message.track),
    });
  }
});