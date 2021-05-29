import styled from '@emotion/styled';

export const ContainerPage = styled.div`
	width: 1382px;
	margin-top: 3em;
`;

export const HeaderContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Container = styled.div`
	width: 100%;
	height: 120vh;
	max-height: 400vh;
	display: flex;
	flex-direction: row;
`;

export const ClubImageContainer = styled.div`
	width: 345px;
	height: 345px;
	margin-right: 10em;
`;

export const MenuContainer = styled.div`
	width: 780px;
	height: 100%;
	display: flex;
	flex-direction: column;
`;

export const SpinnerContainer = styled.div`
	width: 122px;
	height: 122px;

	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 1em;
`;

export const HashtagContainer = styled.div`
	width: 600px;
	display: flex;
	justify-content: flex-start;
	flex-flow: row wrap;
	/* flex: none; */
`;

export const MenuTitle = styled.span`
	font-family: 'NotoSansKR';
	font-size: 1rem;
	font-weight: bold;
	color: #282828;
	margin-bottom: 0.7em;
`;

export const IntroImageContainer = styled.div`
	width: 122px;
	height: 122px;

	margin-right: 0.5em;
	margin-top: 1em;

	position: relative;

	display: flex;
	align-items: center;
	justify-content: center;
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

	flex: none;
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
	max-width: 100%;
	height: 17vh;
	font-family: 'NotoSansKR';
	border: none;
	background-color: #f7f7f7;
	font-size: 0.8rem;
	margin-bottom: 2em;

	flex: none;
`;

export const AddHashtagButton = styled.button`
	border: none;
	background-color: #f7f7f7;
	width: 154px;
	height: 46px;
	font-size: 15px;
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

	flex: none;
`;

export const Footer = styled.div`
	width: 1px;
	height: 5em;
	flex: none;
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
