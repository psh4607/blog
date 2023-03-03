import React from 'react';

import '@styles/menubar.scss';
import AppleIcon from '@static/apple.png';
import BatteryIcon from '@static/battery.png';
import WifiIcon from '@static/wifi.png';
import ControlCenterIcon from '@static/controlcenter.png';
import NotifyIcon from '@static/NotifyIcon.png';
// import IcloudIcon from "@static/IcloudIcon.png";

const formatMinutes = min => {
	return min < 10 ? '0' + min : min;
};

const convertToReadableDate = timestamp => {
	const shortenedDaysOfTheWeek = [
		'Sun',
		'Mon',
		'Tue',
		'Wed',
		'Thu',
		'Fri',
		'Sat',
	];
	const shortenedMonth = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	];
	const currentDate = new Date(timestamp);
	return (
		<React.Fragment>
			{shortenedDaysOfTheWeek[currentDate.getDay()]}{' '}
			{currentDate.getDate()} {shortenedMonth[currentDate.getMonth()]}{' '}
			<span className='time'>
				{currentDate.getHours()}:
				{formatMinutes(currentDate.getMinutes())}
			</span>
		</React.Fragment>
	);
};

const MenuContent = props => {
	const leftMenuItems = [
		<img src={AppleIcon} alt='Apple logo' className='apple' key={0} />,
		props.programName,
		'File',
		'Edit',
		'View',
		'Chat',
		'Window',
		'Help',
	];
	const rightMenuItems = [
		// <img src={IcloudIcon} alt="Cloud icon" className="right-icon" />,
		<img
			key={0}
			src={BatteryIcon}
			alt='Battery icon'
			className='right-icon'
		/>,
		<img key={1} src={WifiIcon} alt='Wifi icon' className='right-icon' />,
		<img
			key={2}
			src={ControlCenterIcon}
			alt='Control Center icon'
			className='right-icon'
		/>,
		<img
			key={3}
			src={NotifyIcon}
			alt='Notify icon'
			className='right-icon'
		/>,
		convertToReadableDate(Date.now()),
	];

	return (
		<div className='menu-bar'>
			<div className='app-menus'>
				{leftMenuItems.map((item, index) => {
					return (
						<div
							className={`${
								typeof item !== 'string' ? `img-container` : ``
							}`}
							key={index}
						>
							{item}
						</div>
					);
				})}
			</div>
			<div className='right-side'>
				{rightMenuItems.map((item, index) => {
					return (
						<div
							className={`${
								index !== rightMenuItems.length - 1
									? `img-container`
									: ``
							}`}
							key={index}
						>
							{item}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default MenuContent;
