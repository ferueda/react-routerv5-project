import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from './Nav';
import Home from './Home';
import Players from './Players';
import Teams from './Teams';
import TeamPage from './TeamPage';
import Articles from './Articles';
import PageNotFound from './PageNotFound';

export default function App() {
	return (
		<Router>
			<Nav />
			<main>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>

					<Route path="/players">
						<Players />
					</Route>

					<Route path="/teams">
						<Teams />
					</Route>

					<Route path="/:teamId" exact>
						<TeamPage />
					</Route>

					<Route path="/:teamId/articles">
						<Articles />
					</Route>

					<Route path="*">
						<PageNotFound />
					</Route>
				</Switch>
			</main>
		</Router>
	);
}
