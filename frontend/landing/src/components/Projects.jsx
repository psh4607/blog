import React, { Suspense, lazy } from 'react';

import Loader from '@elements/Loader/Loader';

import Default from './Default';
const ProjectsContent = lazy(() =>
	import('@elements/Projects/ProjectsContent'),
);

const Projects = () => {
	return (
		<Default
			height='90%'
			heading='Projects'
			resizable={false}
			programName='Projects'
		>
			<Suspense fallback={<Loader />}>
				<ProjectsContent />
			</Suspense>
		</Default>
	);
};

export default Projects;
