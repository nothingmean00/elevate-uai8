import '../styles/globals.css';

// Simple _app.js implementation to avoid Next.js internal imports
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp; 