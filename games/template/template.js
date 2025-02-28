// Phaser game template
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-game',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

// Initialize the game when the page loads
window.onload = function () {
    // Create the game instance
    const game = new Phaser.Game(config);
};

function preload() {
    // Load game assets here
    // Example:
    // this.load.image('sky', 'assets/sky.png');
}

function create() {
    // Create game objects here
    // Example:
    // this.add.image(400, 300, 'sky');
}

function update() {
    // Game logic that runs on every frame
    // Example:
    // if (cursors.left.isDown) { player.setVelocityX(-160); }
} 