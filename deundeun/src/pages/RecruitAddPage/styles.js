import styled from '@emotion/styled';

export const TitleKorean = styled.span`
	font-family: 'NotoSansKR';
	font-size: 1.25rem;
	font-weight: bold;
	color: #282828;
`;

export const ContentKorean = styled.span`
	font-family: 'NotoSansKR';
	font-size: 1rem;
	color: #282828;
`;

export const DateInputButton = styled.button`
	width: 192px;
	height: 66px;
	background-color: #f7f7f7;
	border: none;
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

	&:hover {
		& > .inner {
			background-color: #a1a1a1;
			color: #fff;
		}
	}
`;

export const InnerContainer = styled.div`
	width: 15%;
	height: 50%;
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
	width: 130px;
	height: 66px;
	background-color: #f7f7f7;
	margin-right: 0.6vw;
`;

export const RecruitTitleInput = styled.input`
	width: 1215px;
	height: 66px;
	background-color: #f7f7f7;
	border: none;
	padding-left: 1.25em;
`;

export const RecruitInfo = styled.div`
	width: 123px;
	height: 66px;
	background-color: #f7f7f7;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #282828;
	margin-bottom: 0.6em;
	margin-right: 0.5em;
	font-family: 'NotoSansKR';
	font-size: 1rem;
	border: none;
	text-align: center;
`;

export const RecruitDeadline = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 192px;
	height: 66px;
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
	width: 100%;
	min-height: 422px;
	border: none;
	background-color: #f7f7f7;
	color: #9b9b9b;
	padding-left: 1.5em;
	padding-top: 1em;
	margin-top: 1em;
	margin-bottom: 2em;
`;

export const ImageButton = styled.div`
	border: none;
	cursor: pointer;
	background-color: #f7f7f7;
	width: 8vw;
	height: 16vh;

	display: flex;
	align-items: center;
	justify-content: center;

	margin-right: 0.5em;
	margin-top: 1em;
	margin-bottom: 4em;
`;

export const AppTitle = styled.span`
	font-weight: 700;
	color: #282828;
`;
