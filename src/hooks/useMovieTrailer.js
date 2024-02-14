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
        console.log("data is ", data);
    
        const filteredVideos = data.results.filter(
          (video) => video.type == "Trailer"
        );
        const trailer = filteredVideos.length ? filteredVideos[0] : data.results[0];
        console.log("trailer is ", trailer);
        dispatch(addTrailerVideo(trailer));
      };
      useEffect(() => {
        getMovieTrailer();
      }, []);

}

export default useMovieTrailer;