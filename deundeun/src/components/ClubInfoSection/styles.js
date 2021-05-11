import styled from '@emotion/styled';

export const Container = styled.div`
	width: 100%;
	height: 370px;

	background-color: #a3a3a3;
	background-image: url('/images/sample/club-image/sample-cover.jpeg');
	background-size: cover;
	background-repeat: no-repeat;
	background-position-y: 80%;

	color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Header = styled.div`
	width: 100%;
	height: 69px;
	border-bottom: solid 2px #fff;
	display: flex;
	align-items: center;
	padding-left: 48px;
`;

export const Logo = styled.img`
	width: 110px;
	height: 44px;
	filter: invert(100%);
	z-index: 100;
	cursor: pointer;
`;

export const Background = styled.div`
	background-color: rgba(0, 0, 0, 0.5);
	width: 100%;
	height: 370px;
	position: absolute;
`;

export const ContainerInfo = styled.div`
	display: flex;
	flex-direction: row;
	width: 1160px;
	z-index: 100;
`;

export const ClubLogoImage = styled.img`
	width: 284px;
	height: 284px;

	box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
	z-index: 100;
	margin-top: 2em;
	position: absolute;
`;

export const ContainerContent = styled.div`
	display: flex;
	flex-direction: column;

	width: 100%;
	margin-top: 3.163em;
	padding-left: 20em;
`;

// export const HeaderInfo = styled.div`
// 	display: flex;
// 	flex-direction: row;
// 	align-items: center;
// 	margin-top: 3.1em;
// 	z-index: 100;
// `;

export const Category = styled.span`
	font-family: 'NotoSansKR';
	font-weight: 500;
	font-size: 1.3rem;
`;

export const NotificationButton = styled.button`
	width: 160px;
	height: 32px;
	border: solid 1px #fff;
	background-color: transparent;
	color: white;
	font-weight: 900;
	margin-left: auto;
	font-size: 14px;
`;

export const ClubName = styled.span`
	font-family: 'NotoSansKR';
	font-weight: 900;
	font-size: 2.3rem;
	line-height: 1.48;
`;

export const ContainerPreview = styled.div`
	height: 108px;
	color: #fff;
`;

export const ClubPreview = styled.div`
	font-family: 'NotoSansKR';
	font-size: 1.3rem;
	line-height: 1.5;
	letter-spacing: normal;
`;

export const ContainerHashtag = styled.div`
	display: flex;
	flex-direction: row;
`;

export const Hashtag = styled.button`
	font-family: 'NotoSansKR';
	line-height: 1.48;
	border: solid 1px #fff;
	background-color: transparent;
	color: #fff;
	margin-top: 2em;
	margin-right: 0.875em;
	width: 100px;
	height: 30px;
	font-size: 14px;
`;

export const ContainerImage = styled.div`
	display: flex;
	flex-direction: row;
	margin-left: auto;
`;

export const ClubImage = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 86px;
	height: 86px;
	background-color: #fff;
	margin-left: 1.44em;
	color: #c3c3c3;
	font-size: 1rem;
	font-weight: bold;
	/* font-family: 'GmarketSans'; */
`;
