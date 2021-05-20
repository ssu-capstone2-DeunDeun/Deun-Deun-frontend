import styled from '@emotion/styled';

export const HeaderContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Container = styled.div`
	width: 100%;
	height: 120vh;
	display: flex;
	flex-direction: row;
`;

export const ClubImageUploadButton = styled.button`
	width: 36.8px;
	height: 36.8px;
	background-color: #505050;
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.125rem;
	font-weight: bold;

	margin-left: auto;
	margin-top: auto;
`;

export const ClubImageContainer = styled.div`
	width: 345px;
	height: 345px;
	margin-right: 10em;
`;

export const MenuContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Menu = styled.span`
	font-family: 'NotoSansKR';
	font-size: 1rem;
	font-weight: bold;
	color: #282828;
	margin-bottom: 0.7em;
`;

export const UploadedImageContainer = styled.div`
	width: 122px;
	height: 122px;

	margin-right: 0.5em;
	margin-top: 1em;
	margin-bottom: 4em;

	position: relative;
`;

export const InputButtonContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	width: 122px;
	height: 122px;
	background-color: #f7f7f7;

	margin-right: 0.5em;
	margin-top: 1em;
	margin-bottom: 4em;
`;

export const DropdownContainer = styled.div`
	width: 15.9vw;
	height: 6vh;
	background-color: #f7f7f7;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 0.9rem;
	margin-bottom: 3em;
`;

export const ClubNameInput = styled.input`
	border: none;
	background-color: #f7f7f7;
	width: 32vw;
	height: 6vh;
	padding-left: 1em;
	font-size: 0.8rem;
`;

export const DuplicateCheckButton = styled.button`
	border: none;
	width: 8.75vw;
	background-color: #e6e6e6;
	font-size: 0.9rem;
	font-family: 'NotoSansKR';
	font-weight: bold;
	color: #383838;
`;

export const ClubInfoTextarea = styled.textarea`
	padding-top: 1em;
	padding-left: 0.8em;
	height: 17vh;
	font-family: 'NotoSansKR';
	border: none;
	background-color: #f7f7f7;
	font-size: 0.8rem;
	margin-bottom: 2em;
`;

export const AddHashtagButton = styled.button`
	border: none;
	background-color: #f7f7f7;
	width: 8.1vw;
	height: 6vh;
	font-size: 0.8rem;
	color: #9a9a9a;
	margin-right: 0.5em;
`;

export const SubmitButton = styled.button`
	margin-left: auto;
	width: 260px;
	height: 66px;
	background-color: #1f1f1f;
	font-family: 'NotoSansKR';
	font-size: 1rem;
	color: #fff;
	font-weight: bold;
	border: none;
`;

export const Footer = styled.div`
	width: 1px;
	height: 5em;
`;

export const ImageDeleteButton = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 0%;
	right: 0%;
	width: 0.9em;
	height: 0.9em;
	background-color: #f7f7f7;

	z-index: 500;
`;
