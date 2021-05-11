import styled from '@emotion/styled';

export const TitleKorean = styled.span`
	font-family: 'NotoSansKR';
	font-size: 1.25rem;
	font-weight: bold;
	color: #282828;
`;

export const ApplicationLoadCard = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	background-color: #f7f7f7;
	height: 8vh;
	color: #b5b5b5;
	margin-top: 1em;
	margin-bottom: 2em;

	&:hover {
		& > .inner {
			background-color: #a1a1a1;
			color: #fff;
		}
	}
`;

export const InnerContainer = styled.div`
	width: 15%;
	height: 45%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	border-radius: 1em;
`;

export const RecruitingOrderButton = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	color: #9b9b9b;
	width: 4.1vw;
	height: 6vh;
	background-color: #f7f7f7;
	margin-right: 0.6vw;
`;

export const RecruitTitleInput = styled.input`
	width: 63.99vw;
	height: 6vh;
	background-color: #f7f7f7;
	border: none;
	padding-left: 1.25em;
`;

export const RecruitInfo = styled.div`
	width: 8vw;
	height: 7vh;
	background-color: #f7f7f7;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #9b9b9b;
	margin-bottom: 0.6em;
	margin-right: 0.5em;
	font-family: 'NotoSansKR';
	font-size: 1rem;
`;

export const RecruitDeadline = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 10vw;
	height: 7vh;
	background-color: #f7f7f7;
	color: #9b9b9b;
`;

export const Tilde = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 7vh;
	color: #9b9b9b;
	font-size: 1.125rem;
	margin-left: 0.5em;
	margin-right: 0.5em;
`;

export const RecruitInfoTextarea = styled.textarea`
	width: 68vw;
	min-height: 40vh;
	border: none;
	background-color: #f7f7f7;
	color: #9b9b9b;
	padding-left: 1.5em;
	padding-top: 1em;
	margin-top: 1em;
	margin-bottom: 2em;
`;

export const ImageButton = styled.img`
	border: none;
	cursor: pointer;
	background-color: #f7f7f7;
	width: 8vw;
	height: 16vh;

	&.upload {
	}

	margin-right: 0.5em;
	margin-top: 1em;
	margin-bottom: 4em;
`;
