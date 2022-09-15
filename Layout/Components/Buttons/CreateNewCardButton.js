import React from 'react';
import { useHistory } from 'react-router-dom';
import { createCard } from '../../../utils/api';

const CreateNewCardButton = ({ deckId, card }) => {
    const history = useHistory();
  
    const handleCreate = (event) => {
      event.preventDefault();
      async function postCard() {
        await createCard(deckId, card);
        history.push(`/decks/${deckId}`);
      };
      postCard();
    }

    
    return (
      <button onClick={handleCreate} className="btn btn-primary mx-2">
      Create
      </button>
    )
}

export default CreateNewCardButton;