import styled from '@emotion/styled';

export const Container = styled.div`
	width: 604px;
	height: 160px;

	display: flex;
	flex-direction: row;

	margin-right: 2.375em;
	margin-bottom: 1.75em;
`;

export const ClubImage = styled.img`
	width: 160px;
	height: 160px;

	/* src: url('/images/sample/') */
`;

export const ClubInfo = styled.div`
	width: 444px;

	background-color: #f2f2f2;

	padding-top: 1.125em;
	padding-left: 1.5em;
	padding-right: 1.338em;
`;

export const ClubName = styled.span`
	cursor: pointer;

	font-family: 'NotoSansKR';
	font-size: 1.125rem;
	font-weight: bold;
`;

export const ClubDetail = styled.span`
	font-family: 'NotoSansKR';
	font-size: 0.875rem;
	font-weight: 500;
	color: #282828;

	margin-top: 0.5em;
`;
