import React from 'react'
import {useSelector} from 'react-redux';
import MovieList from './MovieList';
function SecondaryContainer() {
    const movies=useSelector((store)=>store.movies);
    // console.log(movies);
    // console.log('Popular movies ',movies);
  return (
    <div className='text-white bg-black w-full'>
        <div className='-mt-36 relative z-10 w-full'>

        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Popular Movies"} movies={movies.popularMovies}/>
        <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies}/>
        <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies}/>
        </div>
    </div>
  )
}

export default SecondaryContainer