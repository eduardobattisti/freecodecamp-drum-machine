import React from 'react';
import propTypes from 'prop-types';

const Button = (props) => {
	const {
		id, onClick, onKeyPress, className, keyCode, keyTrigger, url,
	} = props;

	return (
		<button
			type="button"
			id={id}
			keyCode={keyCode}
			url={url}
			onClick={onClick}
			onKeyPress={onKeyPress}
			className={className}
		>
			<audio
				className="clip"
				id={keyTrigger}
				src={url}
			/>
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
	onKeyPress: propTypes.func.isRequired,
	className: propTypes.string.isRequired,
};

export default Button;
