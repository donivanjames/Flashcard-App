import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { readDeck } from '../../utils/api';
import FlipButton from './Buttons/FlipButton';
import NotEnoughCards from './NotEnoughCards';

const Study = ( { deck, setDeck }) => {
    const history = useHistory();
    const { deckId } = useParams();
    const [display, setDisplay] = useState({
        cards: [],
        currentCard: 0,
        cardsLen: 0,
        front: true,
        flipped: false,
    });


    useEffect(() => {
        async function loadDeck() {
            const currDeck = await readDeck(deckId);
            setDeck(currDeck);
            setDisplay({
                ...display,
                cards: currDeck.cards,
                cardsLen: currDeck.cards.length,
            });
        }
        loadDeck();
    }, [deckId])


    if (!deck) {
        return <h1>Please wait, loading...</h1>
    }

    if (deck) {
        if (display.cards.length < 3) return <NotEnoughCards deck={deck} />;
    }

    const sideCheck = () => {
        return display.front ? display.cards[display.currentCard].front : display.cards[display.currentCard].back;
    }

    const side = () => {
        return display.front ? 'Front' : 'Back';
    }

    const remainingCards = () => {
        return `${display.currentCard + 1} of ${display.cardsLen}`;
    }

    const next = () => {
        return display.flipped ? (
            <button className='btn-primary btn mx-2' onClick={handleNext}>
                Next
            </button>
        ) : null;
    }

    const limit = () => {
        return display.currentCard >= display.cardsLen - 1;
    }

    const handleNext = (event) => {
        if (limit()) {
            if (window.confirm("Study Again? Click cancel to return home.")) {
                setDisplay({
                    ...display,
                    currentCard: 0,
                    front: true,
                    flipped: false,
                });
            } else {
                history.push('/');
            }
        } else {
            setDisplay({
                ...display,
                currentCard: display.currentCard + 1,
                front: true,
                flipped: true,
            });
        }
    }

    return (
        <div>
            <div>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item"><a href={`/decks/${deck.id}`}>{deck.name}</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Study</li>
                    </ol>
                </nav>
            </div>

            <h2>Study: {deck.name}</h2>

            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Card {remainingCards()}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{side()}</h6>
                    <p className="card-text">{sideCheck()}</p>
                    <FlipButton display={display} setDisplay={setDisplay} />
                    {next()}
                </div>
            </div>
        </div>
    )
}

export default Study;