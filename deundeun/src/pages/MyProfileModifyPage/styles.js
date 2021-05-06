import styled from '@emotion/styled';

export const Header = styled.div``;

export const Container = styled.div`
	margin-top: 3em;
	display: flex;
	flex-direction: row;
`;

export const ProfileImage = styled.div`
	/* width: 472px;
	height: 457px; */
	width: 24.6vw;
	height: 42.32vh;
	background-color: #f0f0f0;
`;

export const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-left: 5.438em;
	/* width: 780px;
	height: 457px; */

	width: 40.625vw;
	height: 42.32vh;

	@media (max-width: 1440px) {
		margin-left: 2em;
	}
`;

export const TitleKorean = styled.span`
	font-size: 1rem;
	font-family: 'NotoSansKR';
	font-weight: 900;
`;

export const InputBoxContainer = styled.div`
	display: flex;
	flex-direction: row;
	/* width: 780px;
	height: 61px; */
	width: 40.625vw;
	/* height: 42.32vh; */

	margin-bottom: 1.2em;
`;

export const InputBox = styled.input`
	width: 611px;
	height: 61px;
	background-color: #f7f7f7;
	border: none;
	padding-left: 1.8em;
`;

export const SubmitButton = styled.button`
	/* width: 168px;
	height: 61px; */

	width: 15vw;
	background-color: #e6e6e6;
	border: none;
	font-weight: bold;
	font-family: 'NotoSansKR';
`;
