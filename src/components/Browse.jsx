<<<<<<< HEAD
import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import Main from "./Main";
import GptSearchPage from "./GptSearchPage";
import { useSelector } from "react-redux";
function Browse() {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();

  useUpcomingMovies();
  useTopRatedMovies();
  return (
    <div className="relative w-full z-100">
      <Header />
      {showGptSearch ? (
        <GptSearchPage />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}

      {/* <Main/> */}
    </div>
  );
=======
import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';

function Browse() {
  
  useNowPlayingMovies();
 
  
  return (
    <div>
      <Header/>
      <MainContainer/>
    </div>
  )
>>>>>>> eab811a176b5c517c24fb9d0d8f5c6146e6cc3cd
}

export default Browse;
