import React, { Suspense, lazy } from 'react';

import Loader from '@elements/Loader/Loader';

import Default from './Default';
const LinuxContent = lazy(() => import('@elements/Linux/LinuxContent'));

const Resume = () => {
	return (
		<Default
			heading='qemu'
			contextMenu={true}
			resizable={false}
			programName='Qemu'
		>
			<Suspense fallback={<Loader />}>
				<LinuxContent />
			</Suspense>
		</Default>
	);
};

export default Resume;
