// 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1'


import { API_OPTIONS } from '../utils/constants'
import  axios  from 'axios'
import {  addUpcomingMovies } from '../utils/moviesSlice'
import {useDispatch} from 'react-redux'
import { useEffect } from 'react'

const useUpcomingMovies=()=>{


    const dispatch=useDispatch();
    const getUpcomingMovies=async()=>{
        const response=await axios.get('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',API_OPTIONS)
        const data=response.data;
        // console.log(data.data.results);
         
        dispatch(addUpcomingMovies(data.results))
    }
    useEffect(() => {
      getUpcomingMovies();
    }, [])
}

export default useUpcomingMovies;