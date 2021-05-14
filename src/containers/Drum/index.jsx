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

	const playSound = (id) => {
		const sound = document.getElementById(id);
		sound.currentTime = 0;
		sound.play();
	};

	const keyPress = (event) => {
		const { keyCode, target } = event;
		console.log(target);
		console.log(keyCode);
		if (false) {
			playSound(target.innerText);
		}
	};

	const onClickPad = (event) => {
		const { id, innerText } = event.target;
		const formattedString = stringFormatter(id);
		playSound(innerText);
		setScreenState(formattedString);
	};

	const onClickSwitchDrum = () => {
		if (!isDrum) {
			setScreenState('Heater Kit');
			setIsDrum(!isDrum);
		} else {
			setScreenState('Smooth Piano Kit');
			setIsDrum(!isDrum);
		}
	};

	const onChangeVolume = (event) => {
		const volume = event.toString();
		setScreenState(volume);
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
				onKeyPress={keyPress}
				className="drum-pad"
			/>
		);
	});

	return (
		<div id="drum-machine" className="drum-machine">
			<h1>Drum Machine</h1>
			<div className="switchSet">
				<div>
					<h4>Power</h4>
					<Switch id="power" onClick={onClickSwitchDrum} className="switchTest" />
				</div>
				<div>
					<h4>Bank</h4>
					<Switch id="bank" onClick={onClickSwitchDrum} className="switchTest" />
				</div>
			</div>
			<div id="display" className="panel">
				<h2>{screenState}</h2>
			</div>
			<div className="slider-audio">
				<Slider
					onChange={onChangeVolume}
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
			<audio
				className="clip"
			/>
			<div className="buttonSet">
				{ isDrum
					? drumButtons
					: pianoButtons}
			</div>

		</div>
	);
};

export default Drum;
