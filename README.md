# Getting started

You can get started by cloning the repository first to your desired directory with:
```git clone https://github.com/reydangelo/Discloud.git```

and then installing the required nodemodules for the express server to change your Discord Rich Presence with:
```cd server rpc```
```npm install```

Go to chrome -> extensions -> load unpacked ( Developer Mode is required ) -> Select the **extension** folder

# Usage

Start the express server by running
```node server.js```

Go to soundcloud website and activate the extension. Play any songs you like and there you go! You have your real-time soundcloud Rich Presence on Discord.

`Note: There maybe delays in the update for the status since the ratelimit is 1 change per second.` 
