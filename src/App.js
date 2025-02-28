import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GamesList from './components/GamesList';
import helloWorldScreenshot from './assets/helloWorld.png';
import './App.css';

function App() {
  // Game data - in a real app, this would come from an API or database
  const games = [
    {
      id: 'hello-world',
      title: 'Hello World',
      description: 'A simple Phaser 3 demo with a bouncing logo and particle effects.',
      screenshot: helloWorldScreenshot,
      path: '/games/helloWorld.html'
    },
    // Add more games here as they are created
  ];

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <main>
              <GamesList games={games} />
            </main>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
