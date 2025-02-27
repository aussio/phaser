import React from 'react';
import './GameCard.css';

const GameCard = ({ game }) => {
    return (
        <div className="game-card">
            <a href={game.path}>
                <img src={game.screenshot} alt={game.title} className="game-screenshot" />
                <h3 className="game-title">{game.title}</h3>
            </a>
            <p className="game-description">{game.description}</p>
        </div>
    );
};

export default GameCard; 