import React, { useState, useEffect } from 'react';
import Slider from 'rc-slider';
import { Button, Switch } from '../../components';

import soundDrum from '../../utils/drum.sound-drum';
import soundPiano from '../../utils/drum.sound-piano';

import { stringFormatter } from '../../utils/string_formatter';

import 'rc-slider/assets/index.css';
import './style.scss';

const Drum = () => {
	const [screenState, setScreenState] = useState('');
	const [isDrum, setIsDrum] = useState(false);
	const [volume, setVolume] = useState(0.5);
	const [isOn, setIsOn] = useState(false);

	const playSound = (id) => {
		if (isOn) {
			const sound = document.getElementById(id);
			sound.currentTime = 0;
			sound.play();
		}
	};

	const keyPress = (event) => {
		if (isOn) {
			const { key, keyCode } = event;
			const uppercaseKey = key.toUpperCase();
			const button = document.querySelector(`button[keycode="${keyCode}"]`) || null;
			const hasKey = document.getElementById(uppercaseKey) || null;
			if (hasKey) {
				setScreenState(button.id);
				playSound(uppercaseKey);
			}
		}
	};

	const onClickPad = (event) => {
		if (isOn) {
			const { id, innerText } = event.target;
			const formattedString = stringFormatter(id);
			playSound(innerText);
			setScreenState(formattedString);
		}
	};

	const switchOnOff = () => {
		if (!isOn) {
			setIsOn(!isOn);
			setScreenState('On');
			setTimeout(() => {
				setScreenState('');
			}, 1000);
		} else {
			setIsOn(!isOn);
			setScreenState('Off');
			setTimeout(() => {
				setScreenState('');
			}, 1000);
		}
	};

	const onClickSwitchDrum = () => {
		if (isOn) {
			if (!isDrum) {
				setScreenState('Heater Kit');
				setIsDrum(!isDrum);
			} else {
				setScreenState('Smooth Piano Kit');
				setIsDrum(!isDrum);
			}
		}
	};

	const onChangeVolume = (event) => {
		if (isOn) {
			const volume = event.toString();
			setVolume((event/100));
			setScreenState(volume);
		}
	};

	useEffect(() => {
		document.addEventListener('keydown', keyPress);

		return () => {
			document.removeEventListener('keydown', keyPress);
		};
	}, []);

	const drumButtons = soundDrum.map((current) => {
		const {
			id, keyCode, keyTrigger, url,
		} = current;
		return (
			<Button
				key={`drum-button-${id}`}
				id={id}
				keyCode={keyCode}
				keyTrigger={keyTrigger}
				url={url}
				onClick={onClickPad}
				onKeyPress={keyPress}
				className="drum-pad"
				volume={volume}
			/>
		);
	});

	const pianoButtons = soundPiano.map((current) => {
		const {
			id, keyCode, keyTrigger, url,
		} = current;
		return (
			<Button
				key={`piano-button-${id}`}
				id={id}
				keyCode={keyCode}
				keyTrigger={keyTrigger}
				url={url}
				onClick={onClickPad}
				onKeyDown={keyPress}
				className="drum-pad"
				volume={volume}
			/>
		);
	});

	return (
		<div id="drum-machine" className="drum-machine">
			<h1>Drum Machine</h1>
			<div className="switchSet">
				<div>
					<h4>Power</h4>
					<Switch id="power" onClick={switchOnOff} className="onOffSwitch" />
				</div>
				<div>
					<h4>Bank</h4>
					<Switch id="bank" onClick={onClickSwitchDrum} className="drumPianoSwitch" />
				</div>
			</div>
			<div id="display" className="panel">
				<h2>{screenState}</h2>
			</div>
			<div className="slider-audio">
				<Slider
					onChange={onChangeVolume}
					defaultValue={50}
					min={0}
					max={100}
					trackStyle={{ backgroundColor: '#f2921a' }}
					railStyle={{ backgroundColor: ' #666472' }}
					handleStyle={{
						borderColor: '#878787',
						borderWidth: 4,
					}}
				/>
			</div>
			<div className="buttonSet">
				{ isDrum
					? drumButtons
					: pianoButtons}
			</div>

		</div>
	);
};

export default Drum;
