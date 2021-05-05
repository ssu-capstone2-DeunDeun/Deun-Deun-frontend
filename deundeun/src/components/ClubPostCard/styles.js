import styled from '@emotion/styled';

export const Container = styled.div`
	width: 22.35vw;
	height: 70vh;
`;

export const PostImage = styled.div`
	height: 40%;
	background-color: #e8e8e8;
`;
export const PostOverview = styled.div`
	height: 60%;
	padding-left: 1.438em;
	padding-right: 1.438em;
	background-color: #f7f7f7;
	display: flex;
	flex-direction: column;
`;

export const TitleKorean = styled.span`
	font-family: 'NotoSansKR';
	font-weight: 900;
	font-size: 1.438rem;
	line-height: 1.48;
	margin-top: 1.813em;
	margin-bottom: 0.625em;

	@media (max-width: 1440px) {
		font-size: 1.2rem;
	}
`;

export const ContentKorean = styled.span`
	font-family: 'NotoSansKR';
	font-size: 1.25rem;
	line-height: 1.45;
	font-weight: 500;

	@media (max-width: 1440px) {
		font-size: 1.1rem;
	}
`;

export const NicknameAndLike = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	height: 13vh;
	margin-top: 5em;
	border-top: solid 1px #d9d9d9;
`;

export const Nickname = styled.span`
	font-family: 'NotoSansKR';
	font-size: 1.125rem;

	@media (max-width: 1440px) {
		font-size: 0.9rem;
	}
`;

export const Like = styled.span`
	margin-left: auto;
	font-family: 'GmarketSansMedium';
	font-weight: 500;
	font-size: 1.2rem;
	line-height: 1.17;

	@media (max-width: 1440px) {
		font-size: 0.9rem;
	}
`;
