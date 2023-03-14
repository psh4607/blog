import React from 'react';
import styled from 'styled-components';

import BodyContent from '@elements/Window/BodyContent';

export default function NotionContent() {
	return (
		<React.Fragment>
			<BodyContent>
				<Iframe src='https://www.psh4607.com' title='Notion'></Iframe>
			</BodyContent>
		</React.Fragment>
	);
}

const Iframe = styled.iframe`
	width: 100%;
	border: none;
`;
