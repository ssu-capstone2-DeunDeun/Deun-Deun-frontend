import styled from '@emotion/styled';

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	background-color: #f7f7f7;
	width: 1300px;
	height: 124px;
	color: #b5b5b5;
	margin-top: 32px;
	margin-bottom: 16px;

	&:hover {
		& > .inner {
			background-color: #a1a1a1;
			color: #fff;
		}
	}
`;

export const InnerContainer = styled.div`
	width: 20%;
	height: 40%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	border-radius: 1em;
`;
