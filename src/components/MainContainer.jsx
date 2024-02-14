import React from 'react'
import {useSelector} from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
function MainContainer() {
    const movies=useSelector((store)=>store.movies?.nowPlayingMovies)
if(!movies) return;
const mainMovie=movies[0]

const {title,overview}=mainMovie;
  return (
    <div className=''>
        <VideoTitle title={title} overview={overview}/>
        <VideoBackground movieId={mainMovie.id}/>

    </div>
  )
}

export default MainContainer