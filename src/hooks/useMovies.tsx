import {useEffect, useState} from 'react';
import movieDB from '../api/moviesDB';
import {Movies, MoviesData} from '../interfaces/moviesInterface';

interface MoviesAll {
  nowPlaying: Movies[];
  popular: Movies[];
  topRated: Movies[];
  upcoming: Movies[];
}

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [moviesState, setMoviesState] = useState<MoviesAll>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
  });

  const getMovies = async () => {
    const nowPlayingPromise = movieDB.get<MoviesData>('/now_playing');
    const popularPromise = movieDB.get<MoviesData>('/popular');
    const topRatedPromise = movieDB.get<MoviesData>('/top_rated');
    const upcomingPromise = movieDB.get<MoviesData>('/upcoming');

    const resps = await Promise.all([
      nowPlayingPromise,
      popularPromise,
      topRatedPromise,
      upcomingPromise,
    ]);

    setMoviesState({
      nowPlaying: resps[0].data.results,
      popular: resps[1].data.results,
      topRated: resps[2].data.results,
      upcoming: resps[3].data.results,
    });

    setIsLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  // eslint-disable-next-line no-trailing-spaces

  return {...moviesState, isLoading};
};
