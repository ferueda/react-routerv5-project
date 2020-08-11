import React from 'react';
import { useParams, Switch, Route, useRouteMatch } from 'react-router-dom';
import Sidebar from './Sidebar';

import useTeamArticles from '../hooks/useTeamsArticles';
import useArticle from '../hooks/useArticle';
import Loading from './Loading';

const Article = () => {
	const { teamId, articleId } = useParams();

	const { response: article, loading } = useArticle({ teamId, articleId });

	if (loading) {
		return null;
	}

	return (
		<div className="panel">
			<article className="article">
				<h2 className="header">{article.title}</h2>
				<p>{article.body}</p>
			</article>
		</div>
	);
};

function Articles() {
	const { teamId } = useParams();
	const { path } = useRouteMatch();

	const { response: articles, loading } = useTeamArticles(teamId);

	if (loading) {
		return <Loading />;
	}

	return (
		<div className="container two-column">
			<Sidebar list={articles.map(article => article.title)} header="Articles" />

			<Switch>
				<Route path={`${path}/:articleId`}>
					<Article />
				</Route>

				<Route path="*">
					<div className="sidebar-instruction">Select an Article</div>
				</Route>
			</Switch>
		</div>
	);
}

export default Articles;
