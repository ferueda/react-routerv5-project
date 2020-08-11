import React from 'react';
import { Link } from 'react-router-dom';
import TeamLogo from './TeamLogo';

function Home() {
	return (
		<div className="container">
			<h1 className="large-header">Hash History Basketball League</h1>
			<h3 className="header text-center">Select a team</h3>
			<div className="home-grid">
				<Link to="/bulls">
					<TeamLogo width="125px" id="bulls" />
				</Link>
				<Link to="/foxes">
					<TeamLogo width="125px" id="foxes" />
				</Link>
				<Link to="/hedgehogs">
					<TeamLogo width="125px" id="hedgehogs" />
				</Link>
				<Link to="/lemurs">
					<TeamLogo width="125px" id="lemurs" />
				</Link>
				<Link to="/koalas">
					<TeamLogo width="125px" id="koalas" />
				</Link>
			</div>
		</div>
	);
}

export default Home;
