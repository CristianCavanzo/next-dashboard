import { MainLayout } from '@layout/Main.layout';
import { Fragment } from 'react';
import '../styles/tailwind.css';

function MyApp({ Component, pageProps }) {
	return (
		<Fragment>
			<MainLayout>
				<Component {...pageProps} />;
			</MainLayout>
		</Fragment>
	);
}

export default MyApp;
