# Phaser Games Directory

A React-based directory for Phaser games with clean URLs and a simple interface.

## Development

### Setup

1. Install dependencies:
   ```bash
   npm install
   ```

### Local Dev

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

The development server includes hot reloading, so changes to React components will update in real-time. Changes to game files will require a page refresh.

### Build

1. Create a production build:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Project Structure

### React

The project uses React for the main application shell and game directory:

- **App.js**: Contains the game directory data and routing setup
- **GamesList.js**: Displays the list of available games
- **GameCard.js**: Individual game card component with screenshot and description

#### Routing

- React Router is used for the main application routes
- Express handles the vanity URLs for games (e.g., `/hello-world`)
- The `setupProxy.js` file configures the development server to handle game routes

### Games

Games are built using Phaser 3.55.2. It's this version just because it's what Cursor's docs shipped with. Can update the version and update Cursor to know about it later.

- An HTML file that loads the Phaser library and game script
- A JavaScript file containing the game logic
- Shared CSS for consistent styling

#### Phaser Documentation

- [Phaser 3 Documentation](https://photonstorm.github.io/phaser3-docs/)
- [Phaser 3 Examples](https://phaser.io/examples)
- [Phaser 3 GitHub](https://github.com/photonstorm/phaser)

#### Game Template

A basic game template is provided in:
- `games/template.html`
- `games/template.js`

To create a new game:

1. Copy the template files and rename them for your game
2. Add your game to the `games` array in `src/App.js`
3. Add a route handler in `server.js` and `src/setupProxy.js`
4. Create a screenshot for your game and add it to `src/assets/`

## File Structure

```
phaser/
├── build/                  # Production build output
├── games/                  # Phaser games
│   ├── game.css            # Shared CSS for games
│   ├── helloWorld.html     # Hello World game HTML
│   ├── helloWorld.js       # Hello World game logic
│   ├── template.html       # Template for new games
│   └── template.js         # Template for new game logic
├── public/                 # Static assets
├── src/                    # React application
│   ├── assets/             # Game screenshots and assets
│   ├── components/         # React components
│   │   ├── GameCard.js     # Game card component
│   │   ├── GameCard.css    # Game card styles
│   │   ├── GamesList.js    # Games list component
│   │   └── GamesList.css   # Games list styles
│   ├── App.js              # Main application component
│   ├── App.css             # Main application styles
│   ├── index.js            # Application entry point
│   └── setupProxy.js       # Development server proxy configuration
├── server.js               # Production server
├── package.json            # Project dependencies and scripts
└── README.md               # Project documentation
```

## Adding a New Game

1. Create a new HTML file in the `games` directory:
   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Your Game Title - Phaser Game</title>
       <link rel="stylesheet" href="/games/game.css">
       <script src="https://cdn.jsdelivr.net/npm/phaser@3.55.2/dist/phaser.min.js"></script>
   </head>
   <body>
       <a href="/" class="back-button">← Back</a>
       <div id="phaser-game"></div>
       <script src="/games/your-game.js"></script>
   </body>
   </html>
   ```

2. Create a new JS file in the `games` directory using the template.js as a starting point

3. Add your game to the `games` array in `src/App.js`:
   ```javascript
   const games = [
     // Existing games...
     {
       id: 'your-game-id',
       title: 'Your Game Title',
       description: 'Description of your awesome game.',
       screenshot: yourGameScreenshot,
       htmlFile: 'your-game.html'
     }
   ];
   ```

4. Add a route handler in `server.js`:
   ```javascript
   app.get('/your-game-id', (req, res) => {
       res.sendFile(path.join(__dirname, 'games', 'your-game.html'));
   });
   ```

5. Add a route handler in `src/setupProxy.js`:
   ```javascript
   app.get('/your-game-id', (req, res) => {
       res.sendFile(path.join(__dirname, '..', 'games', 'your-game.html'));
   });
   ```

## License

MIT
