import styled from '@emotion/styled';

export const Header = styled.header`
	width: 100%;
	height: 8.15vh;
	padding: 19px 20px 19px 48px;
	background-color: #f4f4f4;
	display: flex;
	flex-direction: row;
	align-items: center;
	&.detail {
		background-color: #a3a3a3;
	}
`;

export const Logo = styled.div`
	width: 2.8125vw;
	height: 2.22vh;
	font-size: 1.3125rem;
	font-weight: bold;
	font-style: normal;
	line-height: 1.19;
	letter-spacing: normal;
	text-align: left;
	color: #282828;
	cursor: pointer;
`;

export const IconContainer = styled.div`
	margin-left: auto;
	display: flex;
	flex-direction: row;
	align-items: center;
`;

export const ProfileIcon = styled.div`
	width: 4.62vh;
	height: 4.62vh;
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
	width: 70vw;
	padding-top: 3em;
	background-color: #fff;
`;

export const SideBar = styled.div`
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

export const Footer = styled.div`
	height: 100px;
	margin-top: 5em;
	background-color: #fff;
`;
