import { useState, useEffect } from 'react';

import styles from './style.module.scss';

const API_Key = '3fd2be6f0c70a2a598f084ddfb75487c';

const generateUrl = (params, type) =>
  `https://api.themoviedb.org/3/${type}/movie?${new URLSearchParams({
    ...params,
    ['api_key']: API_Key,
  })}`;

const getClassByRate = (vote) => {
  if (vote >= 8) {
    return styles.green;
  } else if (vote >= 5) {
    return styles.orange;
  } else {
    return styles.red;
  }
};

const MovieApp = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  const getMovies = async (params, type) => {
    const res = await fetch(generateUrl(params, type));
    const data = await res.json();
    setMovies(data.results);
  };
  useEffect(() => {
    getMovies({ ['sort_by']: 'popularity.desc', page: 1 }, 'discover');
  }, []);

  return (
    <div className={styles.MovieApp}>
      <header>
        <input
          type="text"
          className={styles.search}
          value={search}
          placeholder="Search"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          onKeyUp={(e) => {
            if (e.keyCode === 13 && e.target.value) {
              getMovies({ query: search }, 'search');
              setSearch('');
            }
          }}
        />
      </header>
      <main>
        {movies.map(({ title, poster_path, vote_average, overview }, i) => (
          <div key={i} className={styles.movie}>
            <img src={'https://image.tmdb.org/t/p/w1280' + poster_path} alt={title} />
            <div className={styles['movie-info']}>
              <h3>{title}</h3>
              <span className={getClassByRate(vote_average)}>{vote_average}</span>
            </div>
            <div className={styles.overview}>
              <h3>Overview</h3>
              {overview}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default MovieApp;
