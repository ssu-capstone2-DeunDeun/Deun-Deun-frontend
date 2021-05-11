import styled from '@emotion/styled';

export const Header = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

export const Container = styled.div`
	margin-top: 3em;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const ProfileImage = styled.div`
	/* width: 472px;
	height: 457px; */
	/* width: 24.6vw;
	height: 42.32vh; */
	width: 270.6px;
	height: 262px;

	background-color: #f0f0f0;
	margin-bottom: 1.4em;
`;

export const UserName = styled.span`
	font-family: 'NotoSansKR';
	font-size: 20px;
	font-weight: bold;
	color: #282828;
`;

export const SocialImage = styled.img`
	width: 25px;
	height: 25px;
	border-radius: 5px;
	margin-right: 0.3em;
`;

export const EmailContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-bottom: 3.4em;
`;

export const UserEmail = styled.span`
	font-family: 'NotoSansKR';
	font-size: 20px;
	font-weight: bold;
	color: #282828;
`;

export const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-left: 5.438em;
	/* width: 780px;
	height: 457px; */

	width: 40.625vw;
	height: 25vh;

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
	justify-content: center;
	/* width: 780px;
	height: 61px; */
	width: 40.625vw;
	/* height: 42.32vh; */

	margin-bottom: 1.2em;
`;

export const InputBox = styled.input`
	width: 346px;
	height: 60px;
	background-color: #f7f7f7;
	border: none;
	padding-left: 1.8em;
`;

export const SubmitButton = styled.button`
	/* width: 168px;
	height: 61px; */

	width: 188px;
	background-color: #aaaaaa;
	border: none;
	font-weight: bold;
	font-family: 'NotoSansKR';
	color: #fff;
`;
