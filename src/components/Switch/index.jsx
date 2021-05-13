import React from 'react';
import propTypes from 'prop-types';

import './style.scss';

const Switch = (props) => {
	const { id, onClick } = props;

	return (

		<div className="mid">
			<label htmlFor={id} className="rocker rocker-small">
				<input id={id} onClick={onClick} type="checkbox" />
				<span className="switch-left">On</span>
				<span className="switch-right">Off</span>
			</label>
		</div>
	);
};

Switch.propTypes = {
	id: propTypes.string.isRequired,
	onClick: propTypes.func.isRequired,
};

export default Switch;
