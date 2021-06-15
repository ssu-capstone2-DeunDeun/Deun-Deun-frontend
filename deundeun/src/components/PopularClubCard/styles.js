import styled from '@emotion/styled';

export const Container = styled.div`
	width: 232px;
	height: 237px;
	display: flex;
	flex-direction: column;
	margin-bottom: 1.5em;
	background-color: #f7f7f7;
	background-image: url(${(props) => props.imageURL || ''});
	background-size: cover;
	cursor: pointer;
`;

export const RecruitingIcon = styled.div`
	width: 34px;
	height: 20px;
	border-radius: 14px;
	border: solid 1px #ffffff;

	display: flex;
	align-items: center;
	justify-content: center;

	font-family: GmarketSans;
	font-size: 0.7rem;
	font-weight: 500;
	color: #ffffff;

	margin-right: 0.3em;
`;

export const ClubName = styled.span`
	font-family: 'NotoSansKR';
	font-size: 1rem;
	font-weight: 900;
	/* color: #ffffff; */
	/* color:black; */
	color:white;
`;

export const ClubImage = styled.div`
	width: 43%;
	background-color: #e8e8e8;
`;

export const ClubOverview = styled.div`
	width: 57%;
	background-color: #f7f7f7;
	padding-left: 2.125em;
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
	width: 22vw;
	height: 13vh;
	margin-bottom: 2.25em;

	@media (max-width: 1440px) {
		margin-top: 1em;
	}
`;

export const HashtagAndLike = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-top: 1em;

	@media (max-width: 1440px) {
		margin-top: 3em;
	}
`;

export const Hashtag = styled.button`
	width: 6vw;
	height: 4vh;
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

	@media (max-width: 1440px) {
		font-size: 0.9rem;
	}
`;
