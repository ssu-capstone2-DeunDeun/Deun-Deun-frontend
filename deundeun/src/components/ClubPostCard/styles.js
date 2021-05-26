import styled from '@emotion/styled';

export const Container = styled.div`
	width: 346px;
	height: 436px;

	margin-right: 1.25em;
`;

export const PostImage = styled.div`
	height: 176px;
	background-color: #e8e8e8;
`;
export const PostOverview = styled.div`
	height: 196.6px;
	background-color: #f7f7f7;
	display: flex;
	flex-direction: column;
	padding-top: 1.063em;
	padding-left: 0.938em;
`;

export const TitleKorean = styled.span`
	font-family: 'NotoSansKR';
	font-weight: bold;
	font-size: 1.2rem;
	color: #282828;
	margin-bottom: 0.2em;
`;

export const ContentContainer = styled.div`
	width: 308px;
`;

export const ContentKorean = styled.span`
	font-family: 'NotoSansKR';
	font-size: 1.1rem;
	color: #282828;
`;

export const DetailContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	width: 100%;
	height: 63.4px;
	border-top: solid 1px #d9d9d9;
	background-color: #f7f7f7;
	padding-left: 0.963em;
	padding-right: 1.106em;
`;

export const PostDate = styled.span`
	font-family: 'NotoSansKR';
	font-size: 1rem;
	color: #9b9b9b;
	margin-left: auto;
	margin-right: 1.294em;
	margin-top: auto;
	margin-bottom: 0.3em;
`;

export const ClubName = styled.span`
	font-family: 'NotoSansKR';
	font-weight: 500;
	font-size: 1rem;
	color: #282828;
`;

export const Comment = styled.div`
	margin-left: auto;
	font-family: 'GmarketSansMedium';
	font-weight: 500;
	font-size: 0.95rem;
	color: #282828;
	margin-right: 1em;
`;

export const Like = styled.div`
	margin-left: auto;
	font-family: 'GmarketSansMedium';
	font-weight: 500;
	font-size: 0.95rem;
	color: #282828;
`;
