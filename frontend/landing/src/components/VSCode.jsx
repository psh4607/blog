import React, { Suspense, lazy } from 'react';

import Loader from '@elements/Loader/Loader';

import Default from './Default';
const VSCodeContent = lazy(() => import('@elements/VSCode/VSCodeContent'));

const VSCode = () => {
	return (
		<Default
			height='90%'
			heading='Visual Studio Code'
			resizable={false}
			programName='Code'
		>
			<Suspense fallback={<Loader />}>
				<VSCodeContent />
			</Suspense>
		</Default>
	);
};

export default VSCode;
