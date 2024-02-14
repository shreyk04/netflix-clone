import React from "react";

import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
function VideoBackground({movieId}) {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);


  

  //fetching trailer video and updating a store
   useMovieTrailer(movieId);

 
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=true&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0`}
       
        title="Badland Hunters | Official Trailer | Netflix"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        
      ></iframe>
    </div>
  );
}

export default VideoBackground;
