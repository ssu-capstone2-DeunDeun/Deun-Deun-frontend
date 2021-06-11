import styled from '@emotion/styled';

export const Container = styled.div`
	width: 100%;
	height: 400px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const RecruitInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 1160px;
	margin-top: 8.75em;
`;

export const RecruitDetail = styled.div`
	height: 38px;
	margin-top: 2.375em;
	margin-bottom: 1.2em;
	display: flex;
	flex-direction: row;
	/* align-items: center; */
`;

export const TitleKorean = styled.span`
	font-family: 'NotoSansKR';
	font-weight: 900;
	font-size: 1.5rem;
`;

export const ContentKorean = styled.span`
	font-size: 1.2rem;
	line-height: 1.5;
	font-weight: 500;
`;

export const SeeAll = styled.span`
	cursor: pointer;
	font-size: 1.2rem;
	font-weight: bold;
	font-family: 'NotoSansKR';
	color: #717171;
	text-decoration: underline;
	margin-left: auto;
`;
