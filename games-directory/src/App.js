import React from 'react';
import Header from './components/Header';
import GamesList from './components/GamesList';
import helloWorldScreenshot from './assets/helloWorld.png';
import './App.css';

function App() {
  // Game data - in a real app, this would come from an API or database
  const games = [
    {
      title: 'Hello World',
      description: 'A simple Phaser 3 demo with a bouncing logo and particle effects.',
      screenshot: helloWorldScreenshot,
      path: '/helloWorld.html'
    },
    // Add more games here as they are created
  ];

  return (
    <div className="App">
      <Header />
      <main>
        <GamesList games={games} />
      </main>
      <footer className="footer">
        <p>© 2024 Phaser Games Directory</p>
      </footer>
    </div>
  );
}

export default App;
