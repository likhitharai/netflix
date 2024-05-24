//This a CUSTOM HOOK, and it fetches the data from the API and updates it in the store

import { useEffect } from 'react'
import { API_OPTIONS } from '../Utils/Constants';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../Utils/movieSlice';

const useNowPlayingMovies = () => {

    const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch ("https://api.themoviedb.org/3/movie/now_playing", API_OPTIONS);
    const json = await data.json();
    // console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
}

export default useNowPlayingMovies;