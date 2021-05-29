import styled from '@emotion/styled';

export const QuestionNumber = styled.div`
	width: 77px;
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: 'NotoSansKR';
	font-weight: 900;
	font-size: 1rem;
	background-color: #f7f7f7;
	margin-right: 6px;
	flex: none;
`;

export const DropdownContainer = styled.div`
	width: 117px;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: 'NotoSansKR';
	font-weight: 900;
	font-size: 1rem;
	background-color: #f7f7f7;
	margin-right: 6px;
`;

export const QuestionInput = styled.input`
	padding-left: 1em;
	background-color: #f7f7f7;
	font-size: 1rem;
	border: none;

	width: 910px;
	height: 100%;

	&.small {
		width: 766px;
	}

	&::placeholder {
		color: #606060;
	}
`;

export const QuestionDeleteButton = styled.div`
	width: 50px;
	height: 100%;
	background-color: #f7f7f7;

	margin-left: auto;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;

	font-size: 1.5rem;
	color: #606060;
`;
