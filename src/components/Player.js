import React from 'react';
import { Link, useParams } from 'react-router-dom';

const removeSlug = slug => slug.split('-').join(' ');
const capitzalize = word => word[0].toUpperCase() + word.slice(1);

function Player({ players }) {
	const { playerId } = useParams();
	const player = players.find(({ name }) => name.toLowerCase() === removeSlug(playerId));
	return (
		<div className="panel fade-enter-done">
			<img src={player.avatar} alt={`${player.name} avatar`} className="avatar" />
			<h2 className="medium-header">{player.name}</h2>
			<h3 className="header">{player.number}</h3>
			<div className="row">
				<ul className="info-list" style={{ marginRight: '80px' }}>
					<li>
						Team
						<div>
							<Link to={{ pathname: `/${player.teamId}` }}>{capitzalize(player.teamId)}</Link>
						</div>
					</li>
					<li>
						Position
						<div>{player.position}</div>
					</li>
					<li>
						PPG
						<div>{player.ppg}</div>
					</li>
				</ul>
				<ul className="info-list">
					<li>
						APG
						<div>{player.apg}</div>
					</li>
					<li>
						SPG
						<div>{player.spg}</div>
					</li>
					<li>
						RPG
						<div>{player.rpg}</div>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Player;
