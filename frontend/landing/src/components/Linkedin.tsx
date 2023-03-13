import React, { Suspense, lazy } from 'react';

import Default from './Default';

import Loader from '@elements/Loader/Loader';

const GitContent = lazy(() => import('@elements/Linkedin/LinkedinContent'));

const Linkedin = () => {
	return (
		<Default
			heading='Linkedin : seongho.park'
			contextMenu={true}
			resizable={true}
			programName='Git Log'
		>
			<Suspense fallback={<Loader />}>
				<GitContent />
			</Suspense>
		</Default>
	);
};

export default Linkedin;
