import React, { Suspense, lazy } from 'react';
// import BrowserLikeWindow from 'electron-as-browser';

import Default from './Default';

import Loader from '@elements/Loader/Loader';

const SafariContent = lazy(() => import('@elements/Safari/SafariContent'));

const Safari = () => {
	return (
		<Default
			heading='Linkedin : seongho.park'
			contextMenu={true}
			resizable={true}
			programName='Git Log'
		>
			<Suspense fallback={<Loader />}>
				<SafariContent />
			</Suspense>
		</Default>
	);
};

export default Safari;
