import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectLocation, queryUserPositionAsync } from './MoreFromYourLocationSlice';
import './MoreFromYourLocation.scss'

export function MoreFromYourLocation() {
  const userLocation = useSelector(selectLocation);
  const dispatch = useDispatch();

  let url = 'https://en.wikipedia.org'

  useEffect(() => {
    const loadData = async () => {
      dispatch(queryUserPositionAsync());
    }

    loadData();
  }, [])

  if (userLocation) {
    url = `https://en.wikipedia.org/w/index.php?search=${userLocation.city},${userLocation.state}`
  }

  return (
    <div className="more-from-your-location-root">
      <div className="more-from-your-location-title">
        More from your location
      </div>
      <div className="spacer-8"></div>
      <div>
        <span>The Wikipedia article for </span> 
        <a href={url} target="_blank" className="link-color">{userLocation?.city}</a> 
        <span> may have some interesting conversation points</span>
      </div>
    </div>
  )
}