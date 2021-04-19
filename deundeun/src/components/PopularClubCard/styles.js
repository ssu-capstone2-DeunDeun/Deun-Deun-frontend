import styled from '@emotion/styled';

export const Container = styled.div`
	width: 680px;
	height: 232px;
	display: flex;
	flex-direction: row;
	margin-bottom: 1.5em;
`;

export const ClubImage = styled.div`
	width: 296px;
	background-color: #e8e8e8;
`;

export const ClubOverview = styled.div`
	width: 384px;
	background-color: #f7f7f7;
	padding-left: 2.125em;
`;

export const ClubName = styled.div`
	margin-top: 2em;
	margin-bottom: 0.5em;
	display: flex;
	flex-direction: row;
`;

export const Divider = styled.div`
	margin-left: 1em;
	margin-right: 1em;
	height: 23px;
	border: solid 1px #000;
`;

export const TitleKorean = styled.span`
	font-family: 'NotoSansKR';
	font-weight: 900;
	font-size: 1.125rem;
`;

export const ContentKorean = styled.span`
	font-size: 1rem;
	line-height: 1.5;
	font-weight: 500;
`;

export const ClubDetail = styled.div`
	width: 277px;
	height: 72px;
	margin-bottom: 2.25em;
`;

export const HashtagAndLike = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-top: 1em;
`;

export const Hashtag = styled.button`
	width: 70px;
	height: 30px;
	background-color: #fff;
	margin-right: 0.5em;
	font-family: 'NotoSansKR';
	font-size: 0.8rem;
	border: solid 1px;
`;

export const Like = styled.span`
	margin-left: auto;
	margin-right: 1.588em;
	font-family: 'GmarketSansMedium';
	font-weight: 500;
	font-size: 1.2rem;
	line-height: 1.17;
`;
