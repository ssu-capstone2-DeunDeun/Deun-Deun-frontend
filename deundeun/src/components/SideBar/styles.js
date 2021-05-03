import styled from '@emotion/styled';

export const Container = styled.div`
	width: 30vw;
	height: 100vh;
	background-color: #fff;
	display: flex;
	flex-direction: column;
	padding-top: 3em;
	padding-left: 5em;
`;

export const Button = styled.button`
	@font-face {
		font-family: 'GmarketSansMedium';
		src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
		font-weight: normal;
		font-style: normal;
	}

	@font-face {
		font-family: 'GmarketSansBold';
		src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansBold.woff') format('woff');
		font-weight: normal;
		font-style: normal;
	}

	font-family: 'GmarketSansMedium';
	width: 15vw;
	height: 4em;
	background-color: #fff;
	border: none;
	text-align: left;
	padding-left: 3em;
	&:hover {
		background-color: #e3e3e3;
	}
	&.clicked {
		font-family: 'GmarketSansBold';
		background-color: lightgrey;
	}
	&.category {
		font-family: 'NotoSansKR';
		font-size: 1.125rem;
	}
	&.clicked-category {
		font-family: 'NotoSansKR';
		font-size: 1.125rem;
		font-weight: 900;
	}
`;

export const TitleEnglish = styled.h1`
	font-family: 'GmarketSansBold';
	font-size: 1.563rem;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.2;
	letter-spacing: normal;
	text-align: left;
	color: #282828;
`;

export const TitleKorean = styled.h1`
	font-family: 'NotoSansKR';
	font-weight: 900;
`;

export const ContentKorean = styled.span`
	font-family: 'NotoSansKR';
	font-size: 1.25rem;
`;
