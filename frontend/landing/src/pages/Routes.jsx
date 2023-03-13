import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Window from '@components/Window';
import Danger from '@components/Danger';
import VSCode from '@components/VSCode';
import Resume from '@components/Resume';
import Git from '@components/Git';
import Projects from '@components/Projects';
import Linkedin from '@components/Linkedin';
import Safari from '@components/Safari';
import Main from '@components/Main';

const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route path='/' exact component={Main} />
				<Route path='/terminal' exact component={Window} />
				<Route path='/danger-zone' exact component={Danger} />
				<Route path='/vscode' exact component={VSCode} />
				<Route path='/resume' exact component={Resume} />
				<Route path='/git' exact component={Git} />
				<Route path='/linkedin' exact component={Linkedin} />
				<Route path='/safari' exact component={Safari} />
				<Route path='/projects' exact component={Projects} />
			</Switch>
		</Router>
	);
};

export default Routes;
