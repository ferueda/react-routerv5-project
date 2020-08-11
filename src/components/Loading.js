import React, { useState, useEffect } from 'react';

function Loading({ text = 'loading' }) {
	const [content, setContent] = useState(text);

	useEffect(() => {
		const int = window.setInterval(() => {
			setContent(content => (content === `${text}...` ? text : `${content}.`));
		}, 300);

		return () => {
			window.clearInterval(int);
		};
	}, [text]);

	return (
		<div>
			<h3 className="text-center header">{content}</h3>
		</div>
	);
}

export default Loading;
