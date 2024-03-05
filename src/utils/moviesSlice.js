import {createSlice} from '@reduxjs/toolkit'

const moviesSlice=createSlice({
   name:"movies",
   initialState:{
    nowPlayingMovies:null,
    trailerVideo:null,
<<<<<<< HEAD
    popularMovies:null,
    upcomingMovies:null,
    topRatedMovies:null
=======
>>>>>>> eab811a176b5c517c24fb9d0d8f5c6146e6cc3cd
   },
   reducers:{
    addNowPlayingMovies:(state,action)=>{
      state.nowPlayingMovies=action.payload;
    },
<<<<<<< HEAD
    addPopularMovies:(state,action)=>{
      state.popularMovies=action.payload;
    },
    addUpcomingMovies:(state,action)=>{
      state.upcomingMovies=action.payload;
    },
    addTopRatedMovies:(state,action)=>{
      state.topRatedMovies=action.payload;
    },
=======
>>>>>>> eab811a176b5c517c24fb9d0d8f5c6146e6cc3cd
    addTrailerVideo:(state,action)=>{
       state.trailerVideo=action.payload;
    }
   }
});

<<<<<<< HEAD
export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies,addUpcomingMovies,addTopRatedMovies}=moviesSlice.actions;
=======
export const {addNowPlayingMovies,addTrailerVideo}=moviesSlice.actions;
>>>>>>> eab811a176b5c517c24fb9d0d8f5c6146e6cc3cd

export default moviesSlice.reducer;