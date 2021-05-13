import React from 'react';
import propTypes from 'prop-types';

const Button = (props) => {
	const {
		id, onClick, className, keyCode, keyTrigger, url,
	} = props;

	return (
		<button
			type="button"
			id={id}
			keyCode={keyCode}
			keyTrigger={keyTrigger}
			url={url}
			onClick={onClick}
			className={className}
		>
			{keyTrigger}
		</button>
	);
};

Button.propTypes = {
	id: propTypes.string.isRequired,
	keyCode: propTypes.number.isRequired,
	keyTrigger: propTypes.string.isRequired,
	url: propTypes.string.isRequired,
	onClick: propTypes.func.isRequired,
	className: propTypes.string.isRequired,
};

export default Button;
