const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, 'build')));

// Serve the Phaser game files
app.use('/games', express.static(path.join(__dirname, 'games')));

// Handle vanity URLs for games
app.get('/hello-world', (req, res) => {
    res.sendFile(path.join(__dirname, 'games', 'helloWorld', 'helloWorld.html'));
});

// Add more game routes here as they are created
// Example: app.get('/game-name', (req, res) => { res.sendFile(path.join(__dirname, 'games', 'gameName', 'gameName.html')); });

// For any request that doesn't match one above, send back the index.html file
app.get('*', (req, res) => {
    // Check if this might be a game file request (like JS or CSS)
    const requestPath = req.path.substring(1); // Remove leading slash
    const gamesPath = path.join(__dirname, 'games');

    if (fs.existsSync(path.join(gamesPath, requestPath))) {
        res.sendFile(path.join(gamesPath, requestPath));
    } else {
        res.sendFile(path.join(__dirname, 'build', 'index.html'));
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); 