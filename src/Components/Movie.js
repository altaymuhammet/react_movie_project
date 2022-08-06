import React from "react";

import { useParams } from "react-router-dom";

//CONFIG
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";

//COMPONENTS
import Grid from "./Grid";
import Spinner from "./Spinner";

//IMAGES
import NoImage from "../images/no_image.jpg";

//Hooks
import { useMovieFetch } from '../Hooks/useMovieFetch';

const Movie = () => {
  const { movieId } = useParams();

  const { state: movie, loading, error } = useMovieFetch(movieId);

  return (
    <>
      <div>Movie</div>
    </>
  );
};

export default Movie;
