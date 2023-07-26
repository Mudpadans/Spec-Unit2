import React from "react";
import "../App.css"
import MovieCard from './MovieCard';

const MovieScreen = ({ addMovie, removeMovie, movieList, page, setPage, list }) => {

    const movieDisplay = movieList.map((movie, index) => {
        return <MovieCard key={movie.id} movie={movie} list={list} addMovie={addMovie} removeMovie={removeMovie}/>
    });

    const increment = () => {
        setPage(page + 1);
    }

    const decrement = () => {
        setPage(page - 1);
    }

    return (
        <div className="page">
            <h1>Jonathan's Movie Theatre</h1>
                <h3>Add a movie to your watchlist</h3>
                    <div className="btn-container">
                        <button onClick={page !== 1 && decrement}>Previous</button>
                        <button onClick={increment}>Next</button>
                    </div>
                    <div className="movie-container">
                        {movieDisplay}
                    </div>
        </div>
    )
}

export default MovieScreen;