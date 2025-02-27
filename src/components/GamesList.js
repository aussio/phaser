import React from 'react';
import GameCard from './GameCard';
import './GamesList.css';

const GamesList = ({ games }) => {
    return (
        <div className="games-list">
            {games.map((game, index) => (
                <GameCard key={index} game={game} />
            ))}
        </div>
    );
};

export default GamesList; 