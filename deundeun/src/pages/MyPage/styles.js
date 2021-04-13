import styled from '@emotion/styled';

export const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	height: calc(100vh - 38px);
	flex-flow: column;
`;

export const Header = styled.header`
	height: 64px;
	display: flex;
	width: 100%;
	box-shadow: 0 1px 0 var(--saf-0);
	margin-left: 1em;
	font-weight: bold;
	align-items: center;
`;

export const ButtonContainer = styled.div`
	display: flex;
	flex-direction: row;
`;

export const AddQuestionButton = styled.button`
	width: 30px;
	height: 30px;
	margin-right: 3em;
	margin-left: 1em;
`;

export const DeleteQuestionButton = styled.button`
	width: 30px;
	height: 30px;
`;
