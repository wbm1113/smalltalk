import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './ForecastContainer.scss'

const days = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday"
]

export function ForecastContainer(props) {
  let rows = [];
  let today = new Date().getDay();
  let dayNumbers = [];

  for (let i = 0; i < 3; i++) {
    let dayNumber = today + i + 1;
    if (dayNumber > 7) {
      dayNumber -= 7;
    }
    dayNumbers[i] = dayNumber;
  }

  for (let i = 0; i < props.forecast.length; i++) {
    let weather = props.forecast[i];
    rows.push(
      <div key={i} className="forecast-item">
        <div className="forecast-item-weekday-container">
          <span className="forecast-item-weekday">{days[dayNumbers[i]]}</span>
        </div>
        <div className="weather-condition-container">
          {weather.condition}
        </div>
        <div>
          <span>
            <span className="low-temp-text">{weather.tempMin} </span>
             / 
            <span className="high-temp-text"> {weather.tempMax}</span>
          </span>
        </div>
      </div>
    )
  }

  return (
    <div className="forecast-container">
      {rows}
    </div>
  )
}