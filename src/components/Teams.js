import React from 'react';
import { Link, Route, useParams, useRouteMatch, Switch } from 'react-router-dom';

import useTeam from '../hooks/useTeam';
import useTeamNames from '../hooks/useTeamNames';

import Sidebar from './Sidebar';
import Loading from './Loading';
import TeamLogo from './TeamLogo';

function Team() {
	const { teamId } = useParams();
	const { response: team, loading } = useTeam(teamId);
	console.log(team);

	if (loading) {
		return null;
	}

	return (
		<div className="panel">
			<div style={{ width: '100%' }}>
				<TeamLogo id={teamId} className="center" />
				<h2 className="medium-header">{team.name}</h2>
				<ul className="info-list row">
					<li>
						Est.
						<div>{team.established}</div>
					</li>
					<li>
						Manager
						<div>{team.manager}</div>
					</li>
					<li>
						Coach
						<div>{team.coach}</div>
					</li>
				</ul>
				<Link to={{ pathname: `/${teamId}` }} className="center btn-main">
					{team.name} Team Page
				</Link>
			</div>
		</div>
	);
}

function Teams() {
	const { response: teams, loading } = useTeamNames();

	const { path } = useRouteMatch();

	if (loading) {
		return <Loading />;
	}

	return (
		<div className="container two-column">
			<Sidebar list={teams} header="Teams" />

			<Switch>
				<Route path={`${path}/:teamId`}>
					<Team />
				</Route>

				<Route path="*">
					<div className="sidebar-instruction">Select a team</div>
				</Route>
			</Switch>
		</div>
	);
}

export default Teams;
