import styled from '@emotion/styled';

export const Container = styled.div`
	width: 370px;
	height: 467px;
`;

export const PostImage = styled.div`
	height: 188px;
	background-color: #e8e8e8;
`;
export const PostOverview = styled.div`
	height: 279px;
	padding-left: 1.25em;
	padding-right: 1.25em;
	background-color: #f7f7f7;
	display: flex;
	flex-direction: column;
`;

export const TitleKorean = styled.span`
	font-family: 'NotoSansKR';
	font-weight: 900;
	font-size: 1.25rem;
	line-height: 1.48;
	margin-top: 1.563em;
	margin-bottom: 0.563em;
`;

export const ContentKorean = styled.span`
	font-family: 'NotoSansKR';
	font-size: 1.125rem;
	line-height: 1.45;
	font-weight: 500;
`;

export const NicknameAndLike = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	height: 68.4px;
	margin-top: 4.163em;
	border-top: solid 1px #d9d9d9;
`;

export const Nickname = styled.span`
	font-family: 'NotoSansKR';
	font-size: 1rem;
`;

export const Like = styled.span`
	margin-left: auto;
	font-family: 'GmarketSansMedium';
	font-weight: 500;
	font-size: 0.75rem;
	line-height: 1.17;
`;
