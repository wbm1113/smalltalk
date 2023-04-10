import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrent, selectForecast, queryWeatherAsync } from './WeatherSlice';
import { ForecastContainer } from './ForecastContainer';
import './Weather.scss'

export function Weather() {
	const currentWeather = useSelector(selectCurrent);
	const forecast = useSelector(selectForecast);
	const dispatch = useDispatch();

	useEffect(() => {
    const loadData = async () => {
      dispatch(queryWeatherAsync())
    };

    loadData()
	}, [])

	return (
		<div className="weather-root">
			<div className="weather-title">
				Weather
			</div>
			<div className="weather-container">
				<div className="today-weather">
					<div className="today-text-container">
						<span className="today-text">today</span>
					</div>
					<div className="today-condition-container">
						{currentWeather.condition}
					</div>
					<div>
						{currentWeather.temp}
					</div>
				</div>

				<div>
					<ForecastContainer forecast={forecast}/>
				</div>
			</div>
		</div>
	)
}