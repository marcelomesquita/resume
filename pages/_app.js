import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { logScreenView } from 'adapters/firebaseClient';

import 'assets/styles/globals.scss';

function MyApp({ Component, pageProps }) {
	const router = useRouter();

	useEffect(() => {
		import('bootstrap/dist/js/bootstrap');
	}, []);

	useEffect(() => {
		if (!process.env.NEXT_PUBLIC_PRODUCTION) {
			return;
		}

		router.events.on('routeChangeComplete', logScreenView);
		logScreenView(window.location.pathname);

		return () => {
			router.events.off('routeChangeComplete', logScreenView);
		};
	}, [router.events]);

	return (
		<>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
				<meta name='author' content='Marcelo Mesquita' />
				<meta name='description' content='Desenvolvedor Full Stack de Brasília. Conhecimento em: ReactJs, NextJs, Firebase, PHP, JAVA, Python, Docker, Git, Linux' />

				<title>Marcelo Mesquita - Apenas Mais um Desenvolvedor</title>
				<link rel='icon' type='image/png' href='/favicon.png' />
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
