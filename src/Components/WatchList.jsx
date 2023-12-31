import '../App.css'
import MovieCard from './MovieCard'

const WatchList = ({list, removeMovie}) => {
    const movieDisplay = list.map((movie, index) => {
        return (
            <MovieCard 
                movie={movie} 
                list={list} 
                removeMovie={removeMovie}
            />
        );
    });


    return (
        <div className='watchlist'>
            <h1>My Watchlist</h1>
                <div className="movie-container">
                    {movieDisplay}
                </div>
        </div>
    )
}

export default WatchList;