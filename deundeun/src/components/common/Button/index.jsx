import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const buttonStyle = css`
	border: none;
	width: 360px;
	height: 80px;
	padding: 21.8px 119px 21.2px 120px;
	color: white;
	cursor: pointer;
	font-weight: bold;
	border-radius: 4px;
	outline: none;
	background-color: #1f1f1f;
	font-size: 25px;
	text-decoration: none;
	${(props) =>
		props.gray &&
		css`
			background-color: #b9b9b9;
		`}
	${(props) =>
		props.blackgray &&
		css`
			background-color: #7c7c7c;
		`}
    ${(props) =>
		props.right &&
		css`
			margin-right: 20px;
		`}
    ${(props) =>
		props.registerBtn1 &&
		css`
			width: 360px;
			height: 80px;
			padding: 21.8px 134px 21.2px;
		`}
    ${(props) =>
		props.registerBtn2 &&
		css`
			width: 360px;
			height: 80px;
			padding: 21.8px 108px 21.2px;
		`}
    
    ${(props) =>
		props.applyBtn1 &&
		css`
			width: 301.9px;
			height: 67.1px;
			font-size: 21px;
			padding: 18.3px 121.9px 17.8px 121.9px;
		`}
    ${(props) =>
		props.applyBtn2 &&
		css`
			width: 301.9px;
			height: 67.1px;
			font-size: 21px;
			padding: 18.3px 68.9px 17.8px 68.9px;
			margin-left: 30.1px;
		`}
    ${(props) =>
		props.recruitBtn &&
		css`
			width: 201.1px;
			height: 44.7px;
			font-size: 13px;
			color: #ffffff;
			padding: 10px;
		`}
`;

const StyledLink = styled(Link)`
	${buttonStyle}
`;

const StyledButton = styled.button`
	${buttonStyle}
`;

const Button = (props) => {
	return props.to ? <StyledLink {...props} gray={props.gray ? 1 : 0} /> : <StyledButton {...props} />;
};

export default Button;
