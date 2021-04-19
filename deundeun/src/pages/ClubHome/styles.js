import styled from '@emotion/styled';

export const Header = styled.header`
	width: 100%;
	height: 88px;
	padding: 19px 20px 19px 48px;
	background-color: #f4f4f4;
	display: flex;
	flex-direction: row;
	align-items: center;
`;

export const Title = styled.div`
	width: 59px;
	height: 24px;
	font-size: 1.3125rem;
	font-weight: bold;
	font-style: normal;
	line-height: 1.19;
	letter-spacing: normal;
	text-align: left;
	color: #282828;
`;

export const IconContainer = styled.div`
	margin-left: auto;
	display: flex;
	flex-direction: row;
	align-items: center;
`;

export const ProfileIcon = styled.div`
	width: 50px;
	height: 50px;
	margin-left: auto;
	background-color: black;
	border-radius: 35px;
	margin-left: 0.8em;
	cursor: pointer;
`;

export const SideBar = styled.div`
	width: 440px;
	height: 100vh;
	background-color: #fff;
	display: flex;
	flex-direction: column;
	padding-top: 3em;
	padding-left: 5em;
`;

export const Button = styled.button`
	width: 274px;
	height: 4em;
	background-color: #fff;
	border: none;
	text-align: left;
	padding-left: 3em;
	&:hover {
		background-color: #e3e3e3;
	}
	&.clicked {
		font-weight: bold;
		background-color: lightgrey;
	}
`;
