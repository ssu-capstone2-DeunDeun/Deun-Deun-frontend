import styled from '@emotion/styled';

export const AnswerContainer = styled.div`
	display: flex;
	flex-direction: column;

	width: 100%;
`;

export const ChoiceInput = styled.input`
	padding-left: 1em;
	background-color: #f7f7f7;
	font-size: 1rem;
	border: none;
	width: 1028px;
	height: 60px;

	&::placeholder {
		color: #606060;
	}
`;

export const ChoiceAddButton = styled.div`
	padding-left: 1em;
	background-color: #f7f7f7;
	font-size: 1rem;
	border: none;
	width: 1088px;
	height: 60px;

	display: flex;
	align-items: center;
	color: #606060;
`;

export const ChoiceDeleteButton = styled.div`
	width: 60px;
	height: 60px;
	background-color: #f7f7f7;

	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;

	font-size: 1.5rem;
	color: #606060;
`;

export const Add = styled.span`
	cursor: pointer;
	font-size: 1rem;
	color: #606060;
`;
