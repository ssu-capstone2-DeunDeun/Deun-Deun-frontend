import React from 'react';
import { StyledButton, StyledLink } from './styles';

const Button = (props) => {
	return props.to ? (
		<StyledLink {...props} gray={props.gray ? 1 : 0} />
	) : (
			<StyledButton {...props} />
		);
};

export default Button;
