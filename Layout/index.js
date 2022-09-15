import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";

import DeckList from "./Components/DeckList";
import Home from "./Components/Home";
import Deck from "./Components/Deck";
import EditDeck from "./Components/EditDeck";
import Study from "./Components/Study";
import EditCard from "./Components/EditCard";
import CreateDeck from "./Components/CreateDeck";
import CreateCard from "./Components/CreateCard";


function Layout() {
  const [decks, setDecks] = useState([]);
  const [deck, setDeck] = useState();
    

  return (
    <React.Fragment>
      <Header />
      <div className="d-flex flex-column px-5">
        <Switch>
          <Route exact path='/'>
            <Home />
            <DeckList decks={decks} setDecks={setDecks}/>
          </Route>
          <Route exact path='/decks/new'>
            <CreateDeck />
          </Route>
          <Route exact path='/decks/:deckId'>
            <Deck deck={deck} setDeck={setDeck}/>
          </Route>
          <Route exact path='/decks/:deckId/edit'>
            <EditDeck deck={deck} setDeck={setDeck}/>
          </Route>          
          <Route exact path='/decks/:deckId/cards/new'>
            <CreateCard deck={deck} setDeck={setDeck}/>
          </Route>
          <Route exact path='/decks/:deckId/cards/:cardId/edit'>
            <EditCard deck={deck} setDeck={setDeck}/>
          </Route>
          <Route exact path='/decks/:deckId/study'>
            <Study deck={deck} setDeck={setDeck}/>
          </Route>
          <Route>
            <NotFound />
          </Route>         
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default Layout;