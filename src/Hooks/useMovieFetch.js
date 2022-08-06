import { useEffect, useState, useCallback } from "react";

import API from "../API";

export const useMovieFetch = (movieId) => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // ******* FONKSIYONU USEEFFECT ICINDE CAGIRMAK YERINE BU SEKILDE USECALLBACK ILE DE CAGIRABILIRIZ. *********

  //   const fetchMovie = useCallback(async () => {
  //     try {
  //       setLoading(true);
  //       setError(false);

  //       const movie = await API.fetchMovie(movieId);
  //       const credits = await API.fetchCredits(movieId);

  //       const directors = credits.crew.filter(
  //         (member) => member.job === "Director"
  //       );

  //       setState({
  //         ...movie,
  //         actors: credits.cast,
  //         directors,
  //       });

  //       setLoading(false);
  //     } catch (error) {
  //       setError(true);
  //     }
  //   }, [movieId]);

  //   useEffect(() => {
  //     fetchMovie();
  //   }, [movieId]);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        setError(false);

        const movie = await API.fetchMovie(movieId);
        const credits = await API.fetchCredits(movieId);

        const directors = credits.crew.filter(
          (member) => member.job === "Director"
        );

        setState({
          ...movie,
          actors: credits.cast,
          directors,
        });

        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    fetchMovie();
  }, [movieId]);

  return { state, loading, error };
};
