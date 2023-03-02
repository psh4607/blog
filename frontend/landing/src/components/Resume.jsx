import React, { Suspense, lazy } from 'react';

import Loader from '@elements/Loader/Loader';

import Default from './Default';
const ResumeContent = lazy(() => import('@elements/Resume/ResumeContent'));

const Resume = () => {
	return (
		<Default
			height='90%'
			heading='Resume'
			resizable={false}
			programName='Resume'
		>
			<Suspense fallback={<Loader />}>
				<ResumeContent />
			</Suspense>
		</Default>
	);
};

export default Resume;
