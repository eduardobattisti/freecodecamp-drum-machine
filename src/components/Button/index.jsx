import React, { useRef } from 'react';
import propTypes from 'prop-types';

const Button = (props) => {
	const {
		id, onClick, onKeyDown, className, volume, keyCode, keyTrigger, url,
	} = props;

	const audioRef = useRef(new Audio());
	audioRef.current.volume = volume;

	return (
		<button
			type="button"
			id={id}
			keyCode={keyCode}
			url={url}
			onClick={onClick}
			onKeyDown={onKeyDown}
			className={className}
		>
			<audio
				ref={audioRef}
				className="clip"
				id={keyTrigger}
				src={url}
				volume={audioRef.current.volume}
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
	onKeyDown: propTypes.func.isRequired,
	className: propTypes.string.isRequired,
	volume: propTypes.number.isRequired,
};

export default Button;
