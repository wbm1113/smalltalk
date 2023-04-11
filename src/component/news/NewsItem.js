import React, { useState } from 'react';
import './NewsItem.scss'

export function NewsItem(props) {
	let article = props.article;

	if (! article) {
		return (
			<div>loading...</div>
		)
	}

	return (
		<div className="article-container">
			<div className="article-title">
				<a href={article.url} target="_blank" className="article-link-text">{article.title}</a>
			</div>

			<div className="spacer-8"></div>
			
			<div>
				{article.snippet}
			</div>
		</div>
	)
}