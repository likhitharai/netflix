import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/Constants";
import { addTrailerVideo } from "../Utils/movieSlice";
import { useDispatch } from "react-redux"; 

const useMovieTrailer = (movieID) => {

  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    // const data = await fetch('https://api.themoviedb.org/3/movie/{movieID}/videos', API_OPTIONS);
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+movieID+"/videos",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json);
    // console.log(json.results);

    const filterData = json.results.filter((video) => video.type === "Trailer");
    //If filter data / Trailer is not available, play clips, or featurette videos
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
    // setTrailerid(trailer.key);
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;