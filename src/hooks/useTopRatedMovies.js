//This a CUSTOM HOOK, and it fetches the data from the API and updates it in the store

import { useEffect } from 'react'
import { API_OPTIONS } from '../Utils/Constants';
import { useDispatch } from 'react-redux';
import { addTopRatedMovies } from '../Utils/movieSlice';

const useTopRatedMovies = () => {

    const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    const data = await fetch ("https://api.themoviedb.org/3/movie/top_rated?page=1", API_OPTIONS);
    const json = await data.json();
    // console.log(json.results);
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
}

export default useTopRatedMovies;