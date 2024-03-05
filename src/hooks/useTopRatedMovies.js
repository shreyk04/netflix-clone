
import { API_OPTIONS } from '../utils/constants'
import  axios  from 'axios'
import { addTopRatedMovies } from '../utils/moviesSlice'
import {useDispatch} from 'react-redux'
import { useEffect } from 'react'

const useTopRatedMovies=()=>{


    const dispatch=useDispatch();
    const getTopRatedMovies=async()=>{
        const data=await axios.get('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',API_OPTIONS)
        // console.log(data.data.results);
         
        dispatch(addTopRatedMovies(data.data.results))
        // console.log("Data is ..." ,data);
    }
    useEffect(() => {
        getTopRatedMovies();
    }, [])
}

export default useTopRatedMovies;