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
- `games/template/template.html`
- `games/template/template.js`

To create a new game:

1. Create a new directory for your game in the `games` directory
2. Copy the template files into your game directory and rename them
3. Add your game to the `games` array in `src/App.js`
4. Add a route handler in `server.js` and `src/setupProxy.js`
5. Create a screenshot for your game and add it to `src/assets/`

## File Structure

```
phaser/
├── build/                  # Production build output
├── games/                  # Phaser games
│   ├── game.css            # Shared CSS for games
│   ├── helloWorld/         # Hello World game
│   │   ├── helloWorld.html # Hello World game HTML
│   │   └── helloWorld.js   # Hello World game logic
│   ├── template/           # Template for new games
│   │   ├── template.html   # Template HTML file
│   │   └── template.js     # Template JS file
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

1. Create a new directory for your game in the `games` directory:
   ```bash
   mkdir -p games/your-game
   ```

2. Copy the template files to your game directory and rename them:
   ```bash
   cp games/template/template.html games/your-game/your-game.html
   cp games/template/template.js games/your-game/your-game.js
   ```

3. Update the HTML file to reference your game's JS file:
   ```html
   <script src="/games/your-game/your-game.js"></script>
   ```

4. Add your game to the `games` array in `src/App.js`:
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

5. Add a route handler in `server.js`:
   ```javascript
   app.get('/your-game-id', (req, res) => {
       res.sendFile(path.join(__dirname, 'games', 'your-game', 'your-game.html'));
   });
   ```

6. Add a route handler in `src/setupProxy.js`:
   ```javascript
   app.get('/your-game-id', (req, res) => {
       res.sendFile(path.join(__dirname, '..', 'games', 'your-game', 'your-game.html'));
   });
   ```

## License

MIT
