
import { API_OPTIONS } from '../utils/constants'
import  axios  from 'axios'
import { addNowPlayingMovies } from '../utils/moviesSlice'
import {useDispatch} from 'react-redux'
import { useEffect } from 'react'

const useNowPlayingMovies=()=>{


    const dispatch=useDispatch();
    const getNowPlayingMovies=async()=>{
        const data=await axios.get("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",API_OPTIONS)
        // console.log(data.data.results);
         
        dispatch(addNowPlayingMovies(data.data.results))
    }
    useEffect(() => {
      getNowPlayingMovies();
    }, [])
}

export default useNowPlayingMovies;