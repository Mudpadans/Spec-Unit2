// import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Header from './Components/Header.jsx';
import MovieScreen from './Components/MovieScreen.jsx';
import WatchList from './Components/WatchList';


function App() {
  const [movieList, setMovieList] = useState([]);

  const [list, setList] = useState([]);

  const [page, setPage] = useState(1);

  const addMovie = movie => {
    setList([...list, movie])
  }

   const removeMovie = movie => {
    const newState = list.filter((mov) => {
      return mov !== movie;
    });
    setList(newState);
  }

  const getData = () => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`)
      .then((res) => {
        console.log(res.data.results);
        setMovieList(res.data.results);
      });
  };

  useEffect(() => {
    getData();
  }, [page]);

  return (
    <div className="App">
      <Header />
        <main>
          <MovieScreen 
            addMovie={addMovie}
            removeMovie={removeMovie}
            movieList={movieList}
            page={page}
            setPage={setPage}
            list={list}
          />
          <WatchList 
            list={list}
            removeMovie={removeMovie}
          />
        </main>
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