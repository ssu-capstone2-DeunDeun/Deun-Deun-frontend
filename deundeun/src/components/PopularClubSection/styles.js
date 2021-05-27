import styled from '@emotion/styled';

export const Header = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin-top: 6.5em;
	margin-bottom: 1.75em;
`;

export const CardContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;

	/* @media (max-width: 1440px) {
		flex-direction: column;
	} */
`;

export const ContentKorean = styled.span`
	margin-left: auto;
	cursor: pointer;
	color: #717171;

	font-family: 'NotoSansKR';
	font-size: 1rem;
	font-weight: bold;
	color: #717171;
	text-decoration: underline;
`;
