import styled from '@emotion/styled';

export const Container = styled.div`
	width: 100%;
	height: 280px;
	display: flex;
	flex-direction: row;
	margin-bottom: 2.25em;
`;

export const ClubImage = styled.img`
	width: 432px;
	height: 280px;
	background-color: #e8e8e8;
`;

export const ClubInfo = styled.div`
	display: flex;
	flex-direction: column;
	width: 932px;
	height: 280px;
	padding-left: 2.375em;
	background-color: #f7f7f7;
`;

export const HeaderInfo = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	margin-top: 1.75em;
	align-items: center;
`;

export const RecruitDeadline = styled.span`
	font-family: 'GmarketSans';
	font-size: 0.81rem;
	color: #282828;
`;

export const LikeContainer = styled.div`
	margin-left: auto;
	margin-right: 2.59em;
`;

export const ClubName = styled.span`
	font-size: 1.563rem;
	font-family: 'NotoSansKR';
	margin-top: 0.5em;
	font-weight: 900;
	color: #282828;
`;

export const HashtagContainer = styled.div`
	display: flex;
	flex-direction: row;
	width: 400px;
	justify-content: space-between;
`;

export const Hashtag = styled.button`
	font-family: 'NotoSansKR';
	line-height: 1.48;
	border: solid 1px #707070;
	background-color: transparent;
	color: #282828;
	margin-top: 5.75em;
	margin-right: 0.875em;
	width: 123px;
	height: 34px;
`;
