import axios from "axios";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer=(movieId)=>{
 console.log("Movie Id is ...",movieId);
    const dispatch = useDispatch();

    const getMovieTrailer = async () => {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
          API_OPTIONS
        );
        const data = response.data;
<<<<<<< HEAD
        // console.log("data is ", data);
=======
        console.log("data is ", data);
>>>>>>> eab811a176b5c517c24fb9d0d8f5c6146e6cc3cd
    
        const filteredVideos = data.results.filter(
          (video) => video.type == "Trailer"
        );
        const trailer = filteredVideos.length ? filteredVideos[0] : data.results[0];
<<<<<<< HEAD
        // console.log("trailer is ", trailer);
=======
        console.log("trailer is ", trailer);
>>>>>>> eab811a176b5c517c24fb9d0d8f5c6146e6cc3cd
        dispatch(addTrailerVideo(trailer));
      };
      useEffect(() => {
        getMovieTrailer();
      }, []);

}

export default useMovieTrailer;