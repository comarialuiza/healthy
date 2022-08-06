import { styled } from '@stitches/react';
import type { AppProps } from 'next/app';
import globalStyles from 'styles/global';

globalStyles();

const Main = styled('main', {
    background: '$lilac900',
	padding: '$7',
	borderRadius: '$3',
	height: 'calc(100vh - 36px - 36px)'
});

function MyApp({ Component, pageProps }: AppProps) {
  	return (
		<Main>
			<Component {...pageProps} />
		</Main>
	);
};

export default MyApp;
