import styled from '@emotion/styled';

export const Header = styled.header`
	width: 100%;
	height: 88px;
	padding: 19px 20px 19px 48px;
	background-color: #f4f4f4;
	display: flex;
	flex-direction: row;
	align-items: center;
`;

export const Logo = styled.div`
	width: 59px;
	height: 24px;
	font-size: 1.3125rem;
	font-weight: bold;
	font-style: normal;
	line-height: 1.19;
	letter-spacing: normal;
	text-align: left;
	color: #282828;
`;

export const IconContainer = styled.div`
	margin-left: auto;
	display: flex;
	flex-direction: row;
	align-items: center;
`;

export const ProfileIcon = styled.div`
	width: 50px;
	height: 50px;
	margin-left: auto;
	background-color: black;
	border-radius: 35px;
	margin-left: 0.8em;
	cursor: pointer;
`;

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
`;

export const MainPage = styled.div`
	width: 75%;
	padding-top: 3em;
	background-color: #fff;
`;

export const SideBar = styled.div`
	width: 25%;
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
	width: 274px;
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

export const Footer = styled.div`
	height: 100px;
	margin-top: 5em;
	background-color: #fff;
`;
