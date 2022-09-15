import React, { useEffect } from 'react';
import { listDecks } from '../../utils/api';
import DeckCard from './DeckCard';

const DeckList = ({ decks, setDecks}) => {
  
  useEffect(() => {
    async function loadDecks(){
        const loadedDecks = await listDecks();
        setDecks(loadedDecks);
    }
    loadDecks();
  }, [setDecks]);
  
  const deckList = decks.map(deck => {
    return (<DeckCard deck={deck} key={deck.id} />)
  })
  return (
    <div>
        {deckList}
    </div>
  )
}
export default DeckList;