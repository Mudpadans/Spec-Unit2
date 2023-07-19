// import logo from './logo.svg';
import './App.css';
import { useState, UseEffect, useLayoutEffect } from 'react'

import Header from './Components/Header.jsx'


function App() {
  const [movieList, setMovieList] = useState([]);

  const [watchlist, setWatchlist] = useState([]);

  const [page, setPage] = useState([]);

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;


/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */