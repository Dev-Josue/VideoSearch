const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const getTrending = async (media_type = 'movie') => {
  const response = await fetch(`${BASE_URL}/trending/${media_type}/week?api_key=${API_KEY}`);
  if (!response.ok) {
    throw new Error('Failed to fetch trending content');
  }
  return response.json();
};

export const getPopular = async (media_type = 'movie') => {
    const response = await fetch(`${BASE_URL}/${media_type}/popular?api_key=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Failed to fetch popular content');
    }
    return response.json();
  };
