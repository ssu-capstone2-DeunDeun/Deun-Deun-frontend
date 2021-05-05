import styled from '@emotion/styled';

export const Header = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

export const Content = styled.div`
	display: flex;
	flex-direction: row;
`;

export const TitleKorean = styled.span`
	font-family: 'NotoSansKR';
	font-weight: bold;
	font-size: 1.45rem;

	@media (max-width: 1440px) {
		font-size: 1.3rem;
	}
`;

export const ContentKorean = styled.span`
	font-family: 'NotoSansKR';
`;
