import React, { Suspense, lazy } from 'react';

import Default from './Default';

import Loader from '@elements/Loader/Loader';

const Zone = lazy(() => import('@elements/Danger/Zone'));

const VSCode = () => {
	return (
		<Default
			heading='Avicii - The Nights (Official Music Video)'
			programName='YouTube'
		>
			<Suspense fallback={<Loader />}>
				<Zone />
			</Suspense>
		</Default>
	);
};

export default VSCode;
