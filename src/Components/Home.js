import React from "react";

//CONFIG
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from "../config";

//COMPONENTS
import HeroImage from "./HeroImage";
import Grid from "./Grid";
import Thumb from "./Thumb";
import Spinner from "./Spinner";
import SearchBar from "./SearchBar";
import Button from "./Button";

//IMAGES
import NoImage from "../images/no_image.jpg";

//HOOK
import { useHomeFetch } from "../Hooks/useHomeFetch";

const Home = () => {
  const { state, loading, error, setSearchTerm, searchTerm, setIsLoadingMore } = useHomeFetch();

  if(error) return <div>Something went wrong ...</div>;

  return (
    <>
      {!searchTerm && state.results[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      ) : null}
      <SearchBar setSearchTerm={setSearchTerm} />
      <Grid header={ searchTerm ? "Search results..." : "Popular Movies"} >
        {state.results.map((movie) => (
          <Thumb
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : NoImage
            }
            movieId={movie.id}
          />
        ))}
      </Grid>
      { loading && <Spinner /> }
      { state.page < state.total_pages && !loading && (
        <Button text="Load more..." callback={ () => setIsLoadingMore(true)} />
      ) }
    </>
  );
};

export default Home;
