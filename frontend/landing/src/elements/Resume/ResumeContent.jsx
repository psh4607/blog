import React from 'react';

import styled from 'styled-components';

import MyResume from './resume/MyResume.pdf';

import BodyContent from '@elements/Window/BodyContent';

const Iframe = styled.iframe`
	width: 100%;
	height: 95%;
	border: none;
`;

const ResumeContent = () => {
	return (
		<BodyContent>
			<Iframe src={MyResume} frameBorder='0' title='VsCode'></Iframe>
		</BodyContent>
	);
};

export default ResumeContent;
