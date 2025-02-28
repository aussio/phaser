const path = require('path');
const express = require('express');

module.exports = function (app) {
    // Serve the Phaser game files from the games directory
    app.use('/games', express.static(path.join(__dirname, '..', 'games')));

    // Handle vanity URLs for games in development
    app.get('/hello-world', (req, res) => {
        res.sendFile(path.join(__dirname, '..', 'games', 'helloWorld.html'));
    });

    // Add more game routes here as they are created
    // Example: app.get('/game-name', (req, res) => { res.sendFile(path.join(__dirname, '..', 'games', 'gameName.html')); });
}; 