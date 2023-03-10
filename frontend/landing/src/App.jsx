import React from 'react';
import { ThemeProvider } from 'styled-components';

import Routes from '@pages/Routes';

import colors from '@styles/colors';
import DataProvider from '@contexts/Data/DataProvider';

const App = () => {
	return (
		<ThemeProvider theme={colors}>
			<DataProvider>
				<Routes />
			</DataProvider>
		</ThemeProvider>
	);
};

export default App;
