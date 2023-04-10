import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectNews, queryNewsAsync } from './NewsSlice';
import { NewsItem } from './NewsItem';
import './NewsContainer.scss'

export function NewsContainer() {
	const dispatch = useDispatch();
	const news = useSelector(selectNews);

	useEffect(() => {
		const loadData = async () => {
			dispatch(queryNewsAsync());
		}

		loadData();
	}, [])

	let rows = [];

	if (news && news.data) {
		let articleCount = news.data.length;
		articleCount = articleCount > 3 ? 3 : articleCount;

		for (let i = 0; i < articleCount; i++) {
			rows.push(<NewsItem key={i} article={news.data[i]}/>);
		}
	}
	
	return (
		<div className="news-root">
			<div className="news-title">
				News
			</div>
			<div>
				{rows}
			</div>
		</div>
	)
}