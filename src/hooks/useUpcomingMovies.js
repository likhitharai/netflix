//This a CUSTOM HOOK, and it fetches the data from the API and updates it in the store

import { useEffect } from 'react'
import { API_OPTIONS } from '../Utils/Constants';
import { useDispatch } from 'react-redux';
import { addUpcomingMovies } from '../Utils/movieSlice';

const useUpcomingMovies = () => {

    const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
    const data = await fetch ("https://api.themoviedb.org/3/movie/upcoming?page=1", API_OPTIONS);
    const json = await data.json();
    // console.log(json.results);
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
}

export default useUpcomingMovies;