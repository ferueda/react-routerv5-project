import React from 'react';
import { Link, useRouteMatch, useLocation } from 'react-router-dom';

const makeSlug = item => item.toLowerCase().split(' ').join('-');

const CustomLink = ({ to, children }) => {
	const match = useRouteMatch(to.pathname);

	return (
		<li style={{ fontWeight: match ? 'bold' : 'normal' }}>
			<Link to={to}>{children}</Link>
		</li>
	);
};

function Sidebar({ list, header }) {
	const { url } = useRouteMatch();
	const location = useLocation();
	return (
		<div>
			<h2 className="header">{header}</h2>
			<ul className="sidebar-list">
				{list.map(item => (
					<CustomLink key={item} to={{ pathname: `${url}/${makeSlug(item)}`, search: location.search }}>
						{item.toUpperCase()}
					</CustomLink>
				))}
			</ul>
		</div>
	);
}

export default Sidebar;
