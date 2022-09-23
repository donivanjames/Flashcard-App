# Flash-Card-Study-App

## Brief Description
An app that allows you to create decks on any topic to study

## Project SetUp 
To run this project on your local machine you will have to: 
  1. Download files
  2. Run nmp install to install the project
  3. Run npm start 
     - Running npm start will start two servers concurrently: 
        1. An API server, powered by json-serve, running on http://localhost:8080
        2. A React application running on http://localhost:3000
     - If you have some difficulty running npm start on Windows, try running the commands in seperate terminals
        1. npm run start:react
        2. npm run start:server

## Functionality 
Application Features:

  1. Create a Deck for a specific topic
  2. Create cards within a deck
  3. Study a Deck by flipping through cards
  4. Delete a specific card 
  5. Delete an entire Deck
