import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getTrending, getPopular } from '../services/tmdb';

export default function Home() {
  const [trending, setTrending] = useState([]);
  const [popular, setPopular] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    async function checkConfig() {
      setLoading(true);
      setError(null);
      try {
        console.log("Checking application configuration status...");
        const statusResponse = await fetch('/api/settings/status');
        if (!statusResponse.ok) {
          throw new Error(`Failed to fetch status: ${statusResponse.status}`);
        }

        const statusData = await statusResponse.json();
        console.log("Configuration status:", statusData);

        if (!statusData.configured) {
          console.log("Application not configured. Redirecting to /setup");
          router.push('/setup');
          return;
        }

        console.log("Fetching TMDB API key...");
        const keyResponse = await fetch('/api/settings/tmdb_key');
        if (!keyResponse.ok) {
          throw new Error(`Failed to fetch TMDB key: ${keyResponse.status}`);
        }

        const keyData = await keyResponse.json();
        const apiKey = keyData.tmdb_key;
        console.log("TMDB API key loaded.");

        if (!apiKey) {
            throw new Error("TMDB API key is missing or empty. Please configure it in the setup page.");
        }

        console.log("Fetching data from TMDB...");
        const trendingData = await getTrending(apiKey);
        const popularData = await getPopular(apiKey);
        console.log("Data fetched successfully.");

        setTrending(trendingData.results);
        setPopular(popularData.results);

      } catch (error) {
        console.error('An error occurred during startup:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    checkConfig();
  }, [router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
        <div>
            <h1>An Error Occurred</h1>
            <p style={{ color: 'red' }}>{error}</p>
            <p>Please check the console for more details. You may need to visit the <Link href="/setup"><a>setup page</a></Link> to configure your API keys.</p>
        </div>
    );
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
