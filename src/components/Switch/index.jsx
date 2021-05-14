import React from 'react';
import propTypes from 'prop-types';

import './style.scss';

const Switch = (props) => {
	const { id, onClick, className } = props;

	return (

		<div className="mid">
			<label htmlFor={id} className="rocker rocker-small">
				<input id={id} onClick={onClick} type="checkbox" />
				<span className={`switch-left ${className}`}>
					{ className === 'drumPianoSwitch'
						? 'PN'
						: 'On'}
				</span>
				<span className={`switch-right ${className}`}>
					{ className === 'drumPianoSwitch'
						? 'DR'
						: 'Off'}
				</span>
			</label>
		</div>
	);
};

Switch.propTypes = {
	id: propTypes.string.isRequired,
	onClick: propTypes.func.isRequired,
	className: propTypes.string.isRequired,
};

export default Switch;
