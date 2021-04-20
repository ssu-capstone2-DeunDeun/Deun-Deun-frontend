import styled from '@emotion/styled';

export const Container = styled.div`
	width: 100%;
	height: 512px;
	background-color: #a3a3a3;
	border-top: solid 1px #fff;
	color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const ContainerInfo = styled.div`
	display: flex;
	flex-direction: column;
	width: 1592px;
`;

export const HeaderInfo = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-top: 3.1em;
`;

export const Category = styled.span`
	font-family: 'NotoSansKR';
	font-weight: 900;
	font-size: 1.5rem;
`;

export const NotificationButton = styled.button`
	width: 198px;
	height: 43px;
	border: solid 1px #fff;
	background-color: transparent;
	color: white;
	font-weight: 900;
	margin-left: auto;
`;

export const ClubName = styled.span`
	font-family: 'NotoSansKR';
	font-weight: 900;
	font-size: 3.4rem;
	line-height: 1.48;
`;

export const ContainerPreview = styled.div`
	height: 108px;
	color: #fff;
`;

export const ClubPreview = styled.div`
	font-family: 'NotoSansKR';
	font-size: 1.5rem;
	line-height: 1.5;
	letter-spacing: normal;
	margin-top: 1.75em;
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
	margin-top: 5.75em;
	margin-right: 0.875em;
	width: 150px;
	height: 43px;
`;

export const ContainerImage = styled.div`
	display: flex;
	flex-direction: row;
	margin-left: auto;
`;

export const ClubImage = styled.div`
	width: 143px;
	height: 144px;
	background-color: #fff;
	margin-left: 1.44em;
`;
