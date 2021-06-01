import styled from '@emotion/styled';

export const Container = styled.div`
	width: 154px;
	height: 46px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	font-family: NotoSansKR;
	font-size: 15px;
	color: #282828;
	background-color: #f7f7f7;

	margin-right: 0.5em;
	margin-bottom: 0.5em;

	position: relative;
`;

export const DeleteButton = styled.div`
	font-size: 1.2rem;

	cursor: pointer;
	position: absolute;
	top: 23%;
	left: 88%;
	color: #606060;
`;
