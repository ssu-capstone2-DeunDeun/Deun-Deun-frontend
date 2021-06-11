import styled from '@emotion/styled';

export const Container = styled.div`
	width: 100%;
	height: 700px;

	display: flex;
	justify-content: center;
	cursor:pointer;
	margin-top: 4.375em;
`;

export const PostContainer = styled.div`
	width: 1160px;
	height: 100%;
`;

export const Header = styled.div`
	display: flex;
	flex-direction: row;
`;

export const TitleKorean = styled.span`
	font-family: 'NotoSansKR';
	font-weight: 900;
	font-size: 1.25rem;
`;

export const CardContainer = styled.div`
	display: flex;
	flex-direction: row;
	/* justify-content: space-between; */
	
	margin-top: 1.6em;
`;

export const ButtonContainer = styled.div`
	margin-top: 4em;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const SubmitButton = styled.button`
	width: 300px;
	height: 66px;
	background-color: #1f1f1f;
	color: #fff;

	font-family: 'NotoSansKR';
	font-weight: bold;
	font-size: 1.125rem;
`;

export const Footer = styled.div`
	height: 10em;
`;
