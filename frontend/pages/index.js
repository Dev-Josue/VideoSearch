import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getTrending, getPopular } from '../services/tmdb';

export default function Home({ tmdbApiKey }) {
  const [trending, setTrending] = useState([]);
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    if (tmdbApiKey) {
      process.env.NEXT_PUBLIC_TMDB_API_KEY = tmdbApiKey;
      getTrending().then(data => setTrending(data.results));
      getPopular().then(data => setPopular(data.results));
    }
  }, [tmdbApiKey]);

  return (
    <div>
      <h1>Discovery</h1>
      <h2>Trending Movies</h2>
      <div style={{ display: 'flex', overflowX: 'auto' }}>
        {trending.map(movie => (
          <div key={movie.id} style={{ marginRight: '1rem' }}>
            <Link href={`/movie/${movie.id}`}>
              <a>
                <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
                <p>{movie.title}</p>
              </a>
            </Link>
          </div>
        ))}
      </div>

      <h2>Popular Movies</h2>
      <div style={{ display: 'flex', overflowX: 'auto' }}>
        {popular.map(movie => (
          <div key={movie.id} style={{ marginRight: '1rem' }}>
            <Link href={`/movie/${movie.id}`}>
              <a>
                <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
                <p>{movie.title}</p>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
