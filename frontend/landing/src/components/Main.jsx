import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import bg from '@static/bg5.jpg';
// import theme from '@styles/theme';
import AlertContent from '@elements/Alert/AlertContent';
import DockContent from '@elements/Dock/DockContent';
import MenuContent from '@elements/Menu/MenuContent';

//
// import Loader from '@elements/Loader/Loader';

// const TerminalContent = lazy(() =>
// 	import('@elements/Terminal/TerminalContent'),
// );

const Main = () => {
	return (
		<Default
			contextMenu={true}
			heading="seongho.park@portfolio: type 'help' for more info"
			programName='Finder'
		/>
	);
};

export default Main;

const Wrapper = styled.div`
	display: grid;
	place-items: center;
	min-height: 100vh;
	background: url(${bg}) no-repeat center center;
	background-size: cover;
	overflow: hidden;
`;

// const dimensionConstraints = css`
// 	width: 75%;
// 	min-width: 20%;
// 	min-height: 25%;
// 	max-height: 90%;
// 	max-width: 90%;
// `;
//
// const emulatorDimensions = css`
// 	width: fit-content;
// 	min-width: 20%;
// 	min-height: 25%;
// 	max-height: 75%;
// 	max-width: 80%;
// `;

const Default = props => {
	const { pathname } = useLocation();

	return (
		<>
			<MenuContent programName={props.programName} />
			<AlertContent
				type={pathname.includes('qemu') ? `qemu` : `hideHelp`}
			/>
			<Wrapper></Wrapper>
			<DockContent />
		</>
	);
};
