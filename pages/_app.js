import Head from 'next/head';
import { Manrope, JetBrains_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';

import 'assets/styles/globals.scss';

const manrope = Manrope({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const mono = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono', display: 'swap' });

const siteUrl = 'https://marcelomesquita.com';
const title = 'Marcelo Mesquita · Desenvolvedor Full Stack';
const description = 'Desenvolvedor Full Stack em Brasília com mais de dez anos de experiência. React, Next.js, Angular, PHP, Java, Python, PostgreSQL, Docker e Linux.';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta name='author' content='Marcelo Mesquita' />
				<meta name='description' content={description} />
				<meta name='theme-color' content='#ffffff' media='(prefers-color-scheme: light)' />
				<meta name='theme-color' content='#0d1117' media='(prefers-color-scheme: dark)' />

				<meta property='og:type' content='profile' />
				<meta property='og:locale' content='pt_BR' />
				<meta property='og:url' content={siteUrl} />
				<meta property='og:title' content={title} />
				<meta property='og:description' content={description} />
				<meta property='og:image' content={`${siteUrl}/og.jpg`} />
				<meta name='twitter:card' content='summary' />
				<meta name='twitter:site' content='@marcelomesquita' />

				<title>{title}</title>
				<link rel='canonical' href={siteUrl} />
				<link rel='icon' type='image/png' href='/favicon.png' />
			</Head>
			<div className={`app ${manrope.variable} ${mono.variable}`}>
				<Component {...pageProps} />
			</div>
			<Analytics />
		</>
	);
}

export default MyApp;
