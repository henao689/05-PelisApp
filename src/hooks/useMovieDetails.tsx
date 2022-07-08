import {useEffect, useState} from 'react';
import movieDB from '../api/moviesDB';
import {CreditsResponse} from '../interfaces/creditsInterface';
import {MovieFullDetails} from '../interfaces/moviesInterface';

interface MovieDetails {
  isLoading: boolean;
  cast: any[];
  movieFull?: MovieFullDetails;
}

export const useMovieDetails = (movieId: number) => {
  const [state, setState] = useState<MovieDetails>({
    isLoading: true,
    movieFull: undefined,
    cast: [],
  });

  const getMovieDetails = async () => {
    const movieDetailsPromise = movieDB.get<MovieFullDetails>(`/${movieId}`);
    const castPromise = movieDB.get<CreditsResponse>(`/${movieId}/credits`);

    const [movieDetailsResp, castPromiseResp] = await Promise.all([
      movieDetailsPromise,
      castPromise,
    ]);

    setState({
      isLoading: false,
      movieFull: movieDetailsResp.data,
      cast: castPromiseResp.data.cast,
    });
  };

  useEffect(() => {
    getMovieDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {...state};
};
