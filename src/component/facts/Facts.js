import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Facts.scss'
import { selectFact, queryFactOfTheDayAsync } from './FactsSlice';

export function Facts() {
	const fact = useSelector(selectFact);
	const dispatch = useDispatch();

	useEffect(() => {
    const loadData = async () => {
      dispatch(queryFactOfTheDayAsync())
    };

    loadData()
	}, [])

	return (
		<div className="facts-root">
      <div className="facts-title">
        Fact of the day
      </div>
      <div className="spacer-8"></div>
      <div className="fact-text">
        {fact}
      </div>
		</div>
	)
}