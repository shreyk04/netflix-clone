import React from 'react'
import MovieCard from './MovieCard'
import ImageHoverCard from './ImageHoverCard';

function MovieList({title,movies}) {
    // console.log(movies);
    if (!movies || movies.length === 0) {
        return <div>No movies available</div>;
    }
   
    

  return (
    <div className='py-8'>
    <h1 className='2xl'>{title}</h1>
    <div className='flex overflow-x-scroll overflow-auto no-scrollbar'>
    <div className='flex gap-2 '>
      
         {movies.map((movie)=>(
          
          
             <MovieCard posterPath={movie.poster_path
             } genresArr={movie.genre_ids}/>
             

         ))}
    </div>
    </div>
    </div>
  )
}

export default MovieList