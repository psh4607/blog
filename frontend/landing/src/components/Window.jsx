import React, { Suspense, lazy } from 'react';

import Default from './Default';

import Loader from '@elements/Loader/Loader';

const TerminalContent = lazy(() =>
	import('@elements/Terminal/TerminalContent'),
);

const Terminal = () => {
	return (
		<Default
			contextMenu={true}
			heading="seongho.park@portfolio: type 'help' for more info"
			programName='Terminal'
		>
			<Suspense fallback={<Loader />}>
				{/* <Loader/> */}
				<TerminalContent />
			</Suspense>
		</Default>
	);
};

export default Terminal;
