const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, 'games-directory/build')));

// Serve the Phaser game files
app.use(express.static(__dirname));

// For any request that doesn't match one above, send back the index.html file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'games-directory/build', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); 