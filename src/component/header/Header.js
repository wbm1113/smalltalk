import React, { useState } from 'react';
import './Header.scss'

export function Header() {
	return (
		<div className="header-banner">
			<div className="banner-centerer">
				<span className="banner-text">smalltalk</span>
				<span className="description-text">conversation starters for the socially unprepared</span>
			</div>
		</div>
	)
}