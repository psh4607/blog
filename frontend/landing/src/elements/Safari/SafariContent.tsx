import React from 'react';
import styled from 'styled-components';

import BodyContent from '@elements/Window/BodyContent';

export default function SafariContent() {
	return (
		<React.Fragment>
			<BodyContent>
				<Iframe
					src='https://www.google.com/webhp?igu=1'
					title='Google'
				></Iframe>
			</BodyContent>
		</React.Fragment>
	);
}

const Iframe = styled.iframe`
	width: 100%;
	border: none;
`;
