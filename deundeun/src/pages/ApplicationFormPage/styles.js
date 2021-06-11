import styled from '@emotion/styled';

export const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	height: calc(100vh - 38px);
	flex-flow: column;
	align-items: center;
`;

export const Header = styled.header`
	height: 64px;
	display: flex;
	width: 100%;
	font-weight: bold;
	justify-content: center;
	align-items: center;
`;

export const ButtonContainer = styled.div`
	display: flex;
	flex-direction: row;
`;
