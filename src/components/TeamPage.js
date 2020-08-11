import React from 'react';
import { Link, useParams, useRouteMatch } from 'react-router-dom';

import useTeam from '../hooks/useTeam';
import useTeamNames from '../hooks/useTeamNames';
import useTeamsArticles from '../hooks/useTeamsArticles';

import Loading from './Loading';
import TeamLogo from './TeamLogo';

function TeamPage() {
	const { teamId } = useParams();
	const { url } = useRouteMatch();

	const { response: team, loading: loadingTeam } = useTeam(teamId);
	const { response: articles, loading: loadingArticles } = useTeamsArticles(teamId);
	const { response: teamNames, loading: loadingTeamNames } = useTeamNames();

	if (loadingTeam || loadingArticles || loadingTeamNames) {
		return <Loading />;
	}

	if (!teamNames.includes(teamId)) {
		return <h2 className="text-center">The {teamId} is not a valid name</h2>;
	}

	return (
		<div className="panel">
			<TeamLogo id={teamId} />
			<h2 className="medium-header">{team.name}</h2>
			<h4>
				<Link to={{ pathname: '/players', search: `?teamId=${teamId}` }}>View Roaster</Link>
			</h4>
			<h4>Championships</h4>
			<ul className="championships">
				{team.championships.map(championship => (
					<li key={championship}>{championship}</li>
				))}
			</ul>
			<ul className="info-list row" style={{ width: '100%' }}>
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
				<li>
					Record
					<div>
						{team.wins}-{team.losses}
					</div>
				</li>
			</ul>
			<h2>Articles</h2>
			<ul className="articles">
				{articles.map(article => (
					<li key={article.id}>
						<Link to={`${url}/articles/${article.id.toLowerCase()}`}>
							<h4 className="article-title">{article.title}</h4>
							<div className="article-date">{new Date(article.date).toLocaleDateString()}</div>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

export default TeamPage;
