import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
	return (
		<nav className="container navbar">
			<div className="nav-links">
				<Link to="/">Home</Link>
			</div>
			<div className="nav-links">
				<Link to="/players">Players</Link>
				<Link to="/teams">Teams</Link>
			</div>
		</nav>
	);
}

export default Nav;
