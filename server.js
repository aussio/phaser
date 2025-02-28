const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, 'build')));

// Serve the Phaser game files
app.use('/games', express.static(path.join(__dirname, 'games')));

// For any request that doesn't match one above, send back the index.html file
app.get('*', (req, res) => {
    // Don't redirect /games/* URLs to index.html
    if (req.path.startsWith('/games/')) {
        res.status(404).send('Game not found');
    } else {
        res.sendFile(path.join(__dirname, 'build', 'index.html'));
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); 