import styled from '@emotion/styled';

export const Container = styled.div`
	width: 100%;
	height: 512px;
	background-color: #a3a3a3;
	border-top: solid 1px #fff;
	color: white;
	display: flex;
	justify-content: center;
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
	margin-top: 3em;
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
