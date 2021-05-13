import React, { useState } from 'react';
import Slider from 'rc-slider';
import { Button, Switch } from '../../components';

import soundDrum from '../../utils/drum.sound-drum';
import soundPiano from '../../utils/drum.sound-piano';

import 'rc-slider/assets/index.css';
import './style.scss';

const Drum = () => {
	const [screenState, setScreenState] = useState('');
	const [isDrum, setIsDrum] = useState(true);

	const onClickPad = (event) => {
		const { target } = event;
		setScreenState(target.innerText);
	};

	const onClickSwitchDrum = () => {
		setIsDrum(!isDrum);
	};

	const onChangeVolume = (event) => {
		const volume = event.toString();
		setScreenState(volume);
	};

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
				className="drumButton"
			>
				Q
			</Button>
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
				className="drumButton"
			>
				Q
			</Button>
		);
	});

	return (
		<div className="drum-machine">
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
			<div className="panel">
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
			<div className="buttonSet">
				{ isDrum
					? drumButtons
					: pianoButtons}
			</div>

		</div>
	);
};

export default Drum;
