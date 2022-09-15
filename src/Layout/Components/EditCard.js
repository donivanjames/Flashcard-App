import React, { useState, useEffect } from 'react';
import { readDeck, readCard } from '../../utils/api';
import { useParams } from 'react-router-dom';
import CancelButton from './Buttons/CancelButton';
import SaveButton from './Buttons/SaveButton';
import CardForm from './CardForm';


function EditCard({ deck, setDeck }) {
    const [card, setCard] = useState();
    const { deckId, cardId } = useParams();
    useEffect(() => {
        async function loadDeck() {
            const currDeck = await readDeck(deckId);
            setDeck(currDeck);

        }
        loadDeck()
    }, [deckId, setDeck]);
    
    useEffect(() => {
        async function loadCard() {
            const currCard = await readCard(cardId);
            setCard(currCard);
        }
        loadCard();
    }, [cardId, setCard]);

    if(!deck || !card) {
        return <h1>Please wait, loading...</h1>
    }
    
    const handleFrontChange = (event) => setCard({...card, front:(event.target.value)});
    const handleBackChange = (event) => setCard({...card, back:(event.target.value)})
    return (
        <div>
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item"><a href={`/decks/${deck.id}`}>{deck.name}</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Edit Card #{cardId}</li>
                </ol>
            </nav>        
        </div>
        
        <h2>Edit Card</h2>
        
            <CardForm handleFrontChange={handleFrontChange} handleBackChange={handleBackChange}
            card={card}/>
            <CancelButton deck={deck}/>
            <SaveButton deck={deck} card={card}/>
             
    </div>
);
}

export default EditCard;