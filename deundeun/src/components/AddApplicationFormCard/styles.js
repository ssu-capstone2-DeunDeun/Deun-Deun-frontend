import styled from '@emotion/styled';

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	background-color: #f7f7f7;
	width: 68vw;
	height: 13.15vh;
	color: #b5b5b5;
	margin-top: 5.56vh;
	margin-bottom: 2.23vh;

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
