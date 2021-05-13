import React from 'react';
import Slider from 'rc-slider';
import { Button, Switch } from '../../components';

import 'rc-slider/assets/index.css';
import './style.scss';

const Drum = () => {
	const onClickTest = () => {
		console.log('abc');
	};

	return (
		<div className="drum-machine">
			<h1>Drum Machine</h1>
			<div className="switchSet">
				<Switch id="power" onClick={onClickTest} className="switchTest" />
				<Switch id="bank" onClick={onClickTest} className="switchTest" />
			</div>
			<div className="panel">
				<h2>Teste</h2>
			</div>
			<div className="slider-audio">
				<Slider
					min={0}
					max={100}
					progress={0}
					trackStyle={{ backgroundColor: '#f2921a' }}
					railStyle={{ backgroundColor: ' #666472' }}
					handleStyle={{
						borderColor: '#878787',
						borderWidth: 4,
					}}
				/>
			</div>
			<div className="buttonSet">
				<Button id="teste1" onClick={onClickTest} className="drumButton">Q</Button>
				<Button id="teste2" onClick={onClickTest} className="drumButton">W</Button>
				<Button id="teste3" onClick={onClickTest} className="drumButton">E</Button>
				<Button id="teste4" onClick={onClickTest} className="drumButton">A</Button>
				<Button id="teste5" onClick={onClickTest} className="drumButton">S</Button>
				<Button id="teste6" onClick={onClickTest} className="drumButton">D</Button>
				<Button id="teste6" onClick={onClickTest} className="drumButton">Z</Button>
				<Button id="teste6" onClick={onClickTest} className="drumButton">X</Button>
				<Button id="teste6" onClick={onClickTest} className="drumButton">C</Button>
			</div>

		</div>
	);
};

export default Drum;
