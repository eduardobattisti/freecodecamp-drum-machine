import React from 'react';
import propTypes from 'prop-types';

const Button = (props) => {
	const {
		id, children, onClick, className,
	} = props;

	return (
		<button type="button" id={id} onClick={onClick} className={className}>{children}</button>
	);
};

Button.propTypes = {
	id: propTypes.string.isRequired,
	children: propTypes.string.isRequired,
	onClick: propTypes.func.isRequired,
	className: propTypes.string.isRequired,
};

export default Button;
