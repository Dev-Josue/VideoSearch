const BASE_URL = 'https://api.themoviedb.org/3';

export const getTrending = async (apiKey, media_type = 'movie') => {
  const response = await fetch(`${BASE_URL}/trending/${media_type}/week?api_key=${apiKey}`);
  if (!response.ok) {
    throw new Error('Failed to fetch trending content');
  }
  return response.json();
};

export const getPopular = async (apiKey, media_type = 'movie') => {
    const response = await fetch(`${BASE_URL}/${media_type}/popular?api_key=${apiKey}`);
    if (!response.ok) {
      throw new Error('Failed to fetch popular content');
    }
    return response.json();
  };
