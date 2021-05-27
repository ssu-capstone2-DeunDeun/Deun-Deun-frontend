import styled from '@emotion/styled';

export const Container = styled.div`
	width: 654px;
	height: 176px;

	display: flex;
	flex-direction: row;

	margin-right: 2.375em;
	margin-bottom: 1.75em;

	&.quit {
		background-color: #f0f0f0;
	}
`;

export const ClubImage = styled.img`
	width: 176px;
	height: 176px;

	/* src: url('/images/sample/') */
`;

export const ClubInfo = styled.div`
	width: 481px;

	background-color: #f2f2f2;

	padding-top: 1.125em;
	padding-left: 1.5em;
	padding-right: 1.338em;
`;

export const ClubName = styled.span`
	cursor: pointer;

	font-family: 'NotoSansKR';
	font-size: 1.3rem;
	font-weight: bold;

	margin-right: 0.5em;
`;

export const RecruitingIcon = styled.div`
	width: 34px;
	height: 20px;
	border-radius: 14px;
	border: solid 1px #04cbac;

	display: flex;
	justify-content: center;
	align-items: center;

	font-family: GmarketSans;
	font-size: 0.8rem;
	font-weight: 500;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.22;
	letter-spacing: -0.45px;
	text-align: left;
	color: #04cbac;
`;

export const DetailContainer = styled.div`
	width: 375px;
	margin-top: 0.7em;
`;

export const ClubDetail = styled.span`
	font-family: 'NotoSansKR';
	font-size: 0.9rem;
	font-weight: 500;
	color: #282828;
`;

export const HashtagContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: flex-start;

	margin-top: 1.2em;
`;

export const Hashtag = styled.div`
	width: 99px;
	height: 30px;
	border: solid 1px #9a9a9a;
	font-family: NotoSansKR;
	font-size: 0.9rem;
	font-weight: 500;
	color: #9a9a9a;

	margin-right: 8px;

	display: flex;
	align-items: center;
	justify-content: center;
`;
