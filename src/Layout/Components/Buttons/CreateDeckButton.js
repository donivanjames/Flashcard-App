import React from 'react';
import { useHistory } from 'react-router-dom';
import { createDeck } from '../../../utils/api';

const CreateDeckButton = ({ newDeck }) => {
  
  const history = useHistory();
  
  async function handleCreate(event) {
    event.preventDefault();
    const createdDeck = await createDeck(newDeck);
    history.push(`/decks/${createdDeck.id}`);
}
  
  return (
    <button onClick={handleCreate} className="btn btn-primary mx-2">
    Create
    </button>
  )
}

export default CreateDeckButton;