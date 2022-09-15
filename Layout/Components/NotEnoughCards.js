import React from 'react';
import CreateCardButton from './Buttons/CreateCardButton';

const NotEnoughCards = ({ deck }) => {
    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item"><a href="/">{deck.name}</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Study</li>
                </ol>
            </nav>
            <h2>
                Study: {deck.name}
            </h2>
            <h3>
                Not enough cards.
            </h3>
            <p>You need at least 3 cards to study. There are {deck.cards.length} cards in this deck.</p>
            <CreateCardButton deck={deck} />
        </div>
    );
}

export default NotEnoughCards;