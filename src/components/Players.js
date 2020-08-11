import React from 'react';
import { Switch, Route, useRouteMatch, useLocation } from 'react-router-dom';
import usePlayers from '../hooks/usePlayers';

import Sidebar from './Sidebar';
import Loading from './Loading';
import Player from './Player';

function Players() {
	const { path } = useRouteMatch();
	const location = useLocation();

	let team = null;

	if (location.search) {
		const params = new URLSearchParams(location.search);
		team = params.get('teamId');
	}

	const { response: players, loading } = usePlayers(team);

	if (loading) {
		return <Loading />;
	}

	return (
		<div className="container two-column">
			<Sidebar list={players.map(player => player.name)} header="Players" />

			<Switch>
				<Route path={`${path}/:playerId`}>
					<Player players={players} />
				</Route>

				<Route path="*">
					<div className="sidebar-instruction">Select a player</div>
				</Route>
			</Switch>
		</div>
	);
}

export default Players;
