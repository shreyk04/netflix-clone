import  axios  from 'axios'
import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';


const useMovieGenres=()=>{
    const getMovieGenres=async()=>{

        const response=await axios.get('https://api.themoviedb.org/3/genre/movie/list?language=en', API_OPTIONS);
    
        const data=response.data;
        console.log(data);
    }
    useEffect(()=>{
     getMovieGenres();
    },[])


}

export default useMovieGenres;