import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Setup() {
  const [tmdb_key, setTmdbKey] = useState('');
  const [realdebrid_key, setRealdebridKey] = useState('');
  const [premiumize_key, setPremiumizeKey] = useState('');
  const [providers, setProviders] = useState([]);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    async function fetchProviders() {
      try {
        const response = await fetch('/api/settings/providers');
        if (response.ok) {
          const data = await response.json();
          setProviders(data);
        }
      } catch (err) {
        console.error('Failed to fetch providers:', err);
      }
    }
    fetchProviders();
  }, []);

  const handleProviderToggle = (index) => {
    const newProviders = [...providers];
    newProviders[index].enabled = !newProviders[index].enabled;
    setProviders(newProviders);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('/api/settings/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tmdb_key, realdebrid_key, premiumize_key, providers }),
      });

      if (response.ok) {
        router.push('/');
      } else {
        const data = await response.json();
        setError(data.detail || 'Failed to save settings.');
      }
    } catch (err) {
      setError('An unexpected error occurred.');
    }
  };

  return (
    <div>
      <h1>Setup</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="TMDB API Key"
          value={tmdb_key}
          onChange={(e) => setTmdbKey(e.target.value)}
        />
        <input
          type="text"
          placeholder="Real-Debrid API Key"
          value={realdebrid_key}
          onChange={(e) => setRealdebridKey(e.target.value)}
        />
        <input
          type="text"
          placeholder="Premiumize API Key"
          value={premiumize_key}
          onChange={(e) => setPremiumizeKey(e.target.value)}
        />

        <h2>Providers</h2>
        {providers.map((provider, index) => (
          <div key={provider.name}>
            <label>
              <input
                type="checkbox"
                checked={provider.enabled}
                onChange={() => handleProviderToggle(index)}
              />
              {provider.name}
            </label>
          </div>
        ))}

        <button type="submit">Save</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
