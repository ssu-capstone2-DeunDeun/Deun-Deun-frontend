import styled from '@emotion/styled';

export const Header = styled.div`
	width: 100%;
	height: 60px;
	border-bottom: solid 1px #d9d9d9;
	background-color: transparent;
	margin-bottom: 1em;

	font-family: 'NotoSansKR';
	font-size: 2rem;
	font-weight: 900;
	color: #282828;
`;

export const ApplicationTitleInput = styled.input`
	border: none;
	background-color: #f7f7f7;
	height: 6vh;
	padding-left: 1em;
	margin-top: 1em;
	margin-bottom: 3em;
`;

export const QuestionNumber = styled.div`
	width: 4.02vw;
	height: 5.8vh;
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: 'NotoSansKR';
	font-weight: 900;
	font-size: 1rem;
	background-color: #f7f7f7;
	margin-bottom: 1.3em;
	margin-right: 0.3em;
`;

export const DropdownContainer = styled.div`
	width: 10vw;
	height: 5.8vh;
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: 'NotoSansKR';
	font-weight: 900;
	font-size: 1rem;
	background-color: #f7f7f7;
	margin-right: 0.3em;
`;

export const AnswerNumber = styled.div`
	width: 4.02vw;
	height: 5.47vh;
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: 'NotoSansKR';
	font-weight: 900;
	font-size: 1rem;
	background-color: #f7f7f7;
	margin-right: 0.3em;
`;

export const QuestionInput = styled.input`
	padding-left: 1em;
	background-color: #f7f7f7;
	font-size: 1rem;
	border: none;
	height: 5.47vh;
	width: 40vw;
	margin-bottom: 0.6em;
	width: calc(68vw - 4.02vw);
	&.select-title {
		width: calc(68vw - 4.02vw - 10vw);
	}
`;

export const AddSelectionButton = styled.div`
	cursor: pointer;
	display: flex;
	height: 5.47vh;
	padding-left: 1em;
	align-items: center;
	background-color: #f7f7f7;
	color: #606060;
`;

export const AddQuestionButton = styled.div`
	margin-top: 1em;
	display: flex;
	align-items: center;
	justify-content: center;
	/* margin-bottom: 10em; */
	height: 20vh;
`;

export const InnerContainer = styled.div`
	display: flex;
	cursor: pointer;
	align-items: center;
	justify-content: center;
	width: 13%;
	height: 20%;
	&:hover {
		background-color: #a1a1a1;
		color: #fff;
	}
	border-radius: 1em;
`;

export const SubmitButton = styled.button`
	width: 250px;
	height: 66px;
	background-color: #1f1f1f;

	font-family: 'NotoSansKR';
	font-size: 1.1rem;
	font-weight: bold;
	color: #fff;

	margin: 0 auto;
`;
