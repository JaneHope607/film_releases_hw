import React from 'react';
import './App.css';
import FilmBox from './containers/FilmBox.js';

function App() {
  return (
    <>
      <h1>Upcoming Films in the UK</h1>
      <FilmBox />
      <button>
        <a href="https://www.imdb.com/calendar/?region=gb">View more upcoming releases</a>
      </button>
    </>
  );
}

export default App;
