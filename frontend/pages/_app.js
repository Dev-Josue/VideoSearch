import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [configured, setConfigured] = useState(null);
  const [tmdbApiKey, setTmdbApiKey] = useState(null);
  const router = useRouter();

  useEffect(() => {
    async function checkConfig() {
      try {
        const response = await fetch('/api/settings/status');
        const data = await response.json();
        setConfigured(data.configured);
        if (data.configured) {
            const keyResponse = await fetch('/api/settings/tmdb_key');
            const keyData = await keyResponse.json();
            setTmdbApiKey(keyData.tmdb_key);
        }
      } catch (error) {
        console.error('Error checking config:', error);
        setConfigured(false);
      }
    }

    if (router.pathname !== '/setup') {
        checkConfig();
    } else {
        setConfigured(true);
    }
  }, [router.pathname]);

  useEffect(() => {
    if (configured === false && router.pathname !== '/setup') {
      router.push('/setup');
    }
  }, [configured, router]);

  if (configured === null) {
    return <div>Loading...</div>;
  }

  return <Component {...pageProps} tmdbApiKey={tmdbApiKey} />;
}

export default MyApp;
