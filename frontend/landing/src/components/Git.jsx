import React, { Suspense, lazy } from 'react';

import Default from './Default';

import Loader from '@elements/Loader/Loader';

const GitContent = lazy(() => import('@elements/Git/GitContent'));

const Git = () => {
	return (
		<Default
			heading='git log'
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

export default Git;
