
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { readDeck } from '../../utils/api';
import CancelButton from './Buttons/CancelButton';
import CreateNewCardButton from './Buttons/CreateNewCardButton';
import CardForm from './CardForm';
const CreateCard = ({ deck, setDeck }) => {
    const [card, setCard] = useState({
        front: "",
        back: "",
    });
    
    const { deckId } = useParams();

   
    useEffect(() => {
        async function loadDeck(){
            const currDeck = await readDeck(deckId);
            setDeck(currDeck);
        }
        loadDeck();
    }, [deckId, setDeck]);

    if(!deck) return <h1>Please wait, loading...</h1>
    
    const handleFrontChange = (event) => setCard({ ...card, front: event.target.value });
    const handleBackChange = (event) => setCard({ ...card, back: event.target.value });

  
    return (
        <div>
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item"><a href={`/decks/${deck.id}`}>{deck.name}</a></li>
                </ol>
            </nav>        
        </div>
        
        <h2>Add Card</h2>
            <CardForm handleFrontChange={handleFrontChange}
            handleBackChange={handleBackChange} card={card}/>
            <CancelButton deck={deck}/>
            <CreateNewCardButton deckId={deckId} card={card} />
             
    </div>
);
}


export default CreateCard;