import styled from '@emotion/styled';

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	width: 1364px;
	height: 142px;
	background-color: #f7f7f7;
	margin-bottom: 1.625em;
	align-items: center;
	padding-left: 2.75em;
	padding-right: 2.4em;
`;

export const ApplicationTitle = styled.span`
	font-family: 'NotoSansKR';
	font-size: 1.625rem;
	font-weight: bold;
	color: #282828;
`;

export const ClubName = styled.span`
	font-family: 'NotoSansKR';
	font-size: 1.25rem;
	color: #606060;
	margin-left: 1.44em;
`;

export const ButtonContainer = styled.div`
	display: flex;
	flex-direction: row;
	margin-left: auto;
`;

export const Button = styled.button`
	width: 146.7px;
	height: 55.2px;
	border: solid 1px #707070;
	background-color: transparent;
	font-family: 'NotoSansKR';
	font-size: 1rem;
	font-weight: bold;
	color: #383838;
	transition: 0.3s;

	&:hover {
		background-color: #d3d3d3;
	}
`;
