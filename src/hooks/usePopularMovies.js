//This a CUSTOM HOOK, and it fetches the data from the API and updates it in the store

import { useEffect } from 'react'
import { API_OPTIONS } from '../Utils/Constants';
import { useDispatch } from 'react-redux';
import { addPopularMovies } from '../Utils/movieSlice';

const usePopularMovies = () => {

    const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const data = await fetch ("https://api.themoviedb.org/3/movie/popular?page=1", API_OPTIONS);
    const json = await data.json();
    // console.log(json.results);
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
}

export default usePopularMovies;