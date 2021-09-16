import Head from 'next/head'
import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react'
import { analytics } from '/adapters/firebaseClient';

import '/assets/styles/globals.scss'

function MyApp({ Component, pageProps }) {
  const routers = useRouter();

  useEffect(() => {
    typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null;

    if (process.env.NEXT_PUBLIC_PRODUCTION) {
      const logEvent = (url) => {
        analytics().setCurrentScreen(url);
        analytics().logEvent('screen_view');
      };

      routers.events.on('routeChangeComplete', logEvent);

      logEvent(window.location.pathname);

      return () => {
        routers.events.off('routeChangeComplete', logEvent);
      };
		}
  }, [])

  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
        <meta name='author' content='Marcelo Mesquita' />
        <meta name='description' content='Desenvolvedor Full Stack de Brasília. Conhecimento em: ReactJs, NextJs, Firebase, PHP, JAVA, Python, Docker, Git, Linux' />

        <title>Marcelo Mesquita - Apenas Mais um Desenvolvedor</title>
        <link rel='icon' type='image/x-icon' href='favicon.png' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
