import Nav from '@common/Nav';
import Header from '@components/Header';
import { Fragment } from 'react';

const MainLayout = ({ children }) => {
	return (
		<Fragment>
			<Header />
			<Nav />
			<div className="min-h-full">
				<main>
					<div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">{children}</div>
				</main>
			</div>
		</Fragment>
	);
};

export { MainLayout };
