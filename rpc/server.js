const express = require("express");
const cors = require("cors");
const RPC = require("discord-rpc");

const scopes = ["rpc", "rpc.api", "messages.read"];
const clientId = "1191821687755391187";

const rpc = new RPC.Client({ transport: "ipc" });

let currentTrack = null;
let originalTrack = null;

const app = express();
app.use(cors());
app.use(express.json());

app.post("/update", (req, res) => {
  currentTrack = req.body;
  
  if (!originalTrack || JSON.stringify(currentTrack) !== JSON.stringify(originalTrack)) {
    updatePresence();
    originalTrack = currentTrack; // Update only when changed
  }

  res.sendStatus(200);
  console.log("Track updated:", currentTrack);
});

function updatePresence() {
  if (!currentTrack) return;

  rpc.setActivity({
    state: currentTrack.artist,
    details: currentTrack.title,
    startTimestamp: Date.now(),
    largeImageKey: "soundcloud",
    largeImageText: "SoundCloud",
  });
  

  console.log("Presence updated:", currentTrack);
}

rpc.login({ clientId }).then(() => {
  console.log("RPC connected");
});

app.listen(3000, () => console.log("Server running on port 3000"));


