import styled from '@emotion/styled';

export const Header = styled.div``;

export const Container = styled.div`
	margin-top: 3em;
	display: flex;
	flex-direction: row;
`;

export const ProfileImage = styled.div`
	width: 472px;
	height: 457px;
	background-color: #f0f0f0;
`;

export const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-left: 5.438em;
	width: 780px;
	height: 457px;
`;

export const TitleKorean = styled.span`
	font-size: 1rem;
	font-family: 'NotoSansKR';
	font-weight: 900;
`;

export const InputBoxContainer = styled.div`
	display: flex;
	flex-direction: row;
	width: 780px;
	height: 61px;
`;

export const InputBox = styled.input`
	width: 611px;
	height: 61px;
	background-color: #f7f7f7;
	border: none;
	padding-left: 1.8em;
`;

export const SubmitButton = styled.button`
	width: 168px;
	height: 61px;
	background-color: #e6e6e6;
	border: none;
	font-weight: bold;
	font-family: 'NotoSansKR';
`;
