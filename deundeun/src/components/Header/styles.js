import styled from '@emotion/styled';

export const Container = styled.header`
	width: 100%;
	height: 8.15vh;
	padding: 19px 20px 19px 48px;
	background-color: #f4f4f4;
	display: flex;
	flex-direction: row;
	align-items: center;
	&.detail {
		background-color: #a3a3a3;
	}
`;

export const Logo = styled.div`
	width: 2.8125vw;
	height: 2.22vh;
	font-size: 1.3125rem;
	font-weight: bold;
	font-style: normal;
	line-height: 1.19;
	letter-spacing: normal;
	text-align: left;
	color: #282828;
	cursor: pointer;
`;

export const IconContainer = styled.div`
	margin-left: auto;
	display: flex;
	flex-direction: row;
	align-items: center;
`;

export const ProfileIcon = styled.div`
	width: 4.62vh;
	height: 4.62vh;
	margin-left: auto;
	background-color: black;
	border-radius: 35px;
	margin-left: 0.8em;
	cursor: pointer;
`;
