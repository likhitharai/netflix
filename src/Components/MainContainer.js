import React from 'react'
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);

    //Code is breaking, because the movie list has not yet been fetched from the store. --> early return
    // if (movies === null ) return; ....OR
    if (!movies) return;

    const mainMovie = movies[0];
    // console.log(mainMovie);

    const {title, overview, id} = mainMovie

  return (
    <div>
      <VideoTitle title ={title} overview ={overview} />
      <VideoBackground movieID = {id}/>
    </div>
  )
}

export default MainContainer;
