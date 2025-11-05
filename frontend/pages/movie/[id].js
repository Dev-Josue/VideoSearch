import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const [sources, setSources] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    async function fetchMovieDetails() {
      if (id) {
        // Fetch movie details from TMDB
        const tmdbResponse = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`);
        const movieData = await tmdbResponse.json();
        setMovie(movieData);

        // Fetch sources from our backend
        const sourcesResponse = await fetch(`/api/sources/${id}?media_type=movie`);
        const sourcesData = await sourcesResponse.json();
        setSources(sourcesData);
      }
    }
    fetchMovieDetails();
  }, [id]);

  const handleDownload = async (source) => {
    await fetch('/api/download/initiate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ link: source.link, service: source.service }),
      });
  };

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />

      <h2>Sources</h2>
      <ul>
        {sources.map((source, index) => (
          <li key={index}>
            {source.title} - {source.quality} - {source.size} - {source.service}
            <button onClick={() => handleDownload(source)}>Download</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
