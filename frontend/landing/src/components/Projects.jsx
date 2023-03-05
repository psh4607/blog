import React, { Suspense, lazy } from 'react';

import Default from './Default';

import Loader from '@elements/Loader/Loader';

const ProjectsContent = lazy(() =>
	import('@elements/Projects/ProjectsContent'),
);

const Projects = () => {
	return (
		<Default
			height='90%'
			heading='Projects'
			resizable={true}
			programName='Projects'
		>
			<Suspense fallback={<Loader />}>
				<ProjectsContent />
			</Suspense>
		</Default>
	);
};

export default Projects;
