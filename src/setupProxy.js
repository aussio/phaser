const path = require('path');
const express = require('express');

module.exports = function (app) {
    // Serve the Phaser game files from the games directory
    app.use('/games', express.static(path.join(__dirname, '..', 'games')));
}; 