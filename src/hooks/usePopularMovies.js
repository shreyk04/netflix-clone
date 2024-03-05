
import { API_OPTIONS } from '../utils/constants'
import  axios  from 'axios'
import { addPopularMovies } from '../utils/moviesSlice'
import {useDispatch} from 'react-redux'
import { useEffect } from 'react'

const usePopularMovies=()=>{


    const dispatch=useDispatch();
    const getPopularMovies=async()=>{
        const data=await axios.get("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",API_OPTIONS)
        // console.log(data.data.results);
         
        dispatch(addPopularMovies(data.data.results))
        // console.log("Data is ..." ,data);
    }
    useEffect(() => {
        getPopularMovies();
    }, [])
}

export default usePopularMovies;