import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '07fc888d9f345e1fa869aa5986278b5a',
    language: 'es-ES',
  },
});

export default movieDB;
