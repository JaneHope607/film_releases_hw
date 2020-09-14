import React from 'react';
import './App.css';
import FilmBox from './containers/FilmBox.js';

function App() {
  return (
    <div className="app">
      <h1 className="title">Upcoming Films in the UK</h1>
      <FilmBox />
    </div>
  );
}

export default App;
