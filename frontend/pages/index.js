import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getTrending, getPopular } from '../services/tmdb';

export default function Home() {
  const [trending, setTrending] = useState([]);
  const [popular, setPopular] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function checkConfig() {
      try {
        const statusResponse = await fetch('/api/settings/status');
        if (statusResponse.ok) {
          const statusData = await statusResponse.json();
          if (!statusData.configured) {
            router.push('/setup');
            return;
          }

          const keyResponse = await fetch('/api/settings/tmdb_key');
          if (keyResponse.ok) {
            const keyData = await keyResponse.json();
            process.env.NEXT_PUBLIC_TMDB_API_KEY = keyData.tmdb_key;
            const trendingData = await getTrending();
            const popularData = await getPopular();
            setTrending(trendingData.results);
            setPopular(popularData.results);
          } else {
            throw new Error('Failed to fetch TMDB key');
          }
        } else {
          throw new Error('Failed to fetch settings status');
        }
      } catch (error) {
        console.error('Configuration check failed:', error);
        // Optionally, redirect to an error page or show an error message
      } finally {
        setLoading(false);
      }
    }

    checkConfig();
  }, [router]);

  if (loading) {
    return <div>Loading...</div>;
  }

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
