import styled from '@emotion/styled';

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	background-color: #f7f7f7;
	width: 68vw;
	height: 13.15vh;
	margin-bottom: 2.23vh;
	padding-left: 4vw;
	padding-right: 2vw;
`;

export const ApplicationTitle = styled.span`
	font-family: 'NotoSansKR';
	font-weight: bold;
	color: #282828;
	font-size: 1.625rem;
	margin-right: 2.5vw;
	@media (max-width: 1440px) {
		font-size: 1.3rem;
	}
`;

export const ApplicationDetail = styled.span`
	font-family: 'NotoSansKR';
	font-size: 1.25rem;
	color: #606060;
	@media (max-width: 1440px) {
		font-size: 1rem;
	}
`;

export const Divider = styled.div`
	width: 1px;
	height: 25%;
	border-left: 1px solid #606060;
	margin-left: 1vw;
	margin-right: 1vw;
`;
