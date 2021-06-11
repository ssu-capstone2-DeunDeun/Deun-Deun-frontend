import styled from '@emotion/styled';

export const CreateModal = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background: rgba(0, 0, 0, 0.7);

	& > div {
		position: fixed;
		top: 25%;
		left: 30%;
		width: 782px;
		height: 459px;
		padding-top: 2em;
		background-color: #fff;
	}
`;

export const ModalTitle = styled.span`
	font-family: 'NotoSansKR';
	font-size: 1.6rem;
	font-weight: 900;
	color: #282828;
	margin-right: 19em;
	margin-left: 2em;
`;

export const CloseModalButton = styled.button`
	background: transparent;
	border: none;
	cursor: pointer;
	font-size: 2.3rem;
`;

export const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 3.5em;
`;

export const FormList = styled.div`
	display: flex;
	flex-direction: column;
	width: 86%;
	height: 200px;
	max-height: 300px;
	border-top: solid 3px #282828;
`;

export const ListItem = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;

	width: 670px;
	height: 47.5px;
	border-bottom: solid 1px #d5d5d5;
`;

export const ApplicationTitle = styled.span`
	font-family: 'NotoSansKR';
	font-size: 1rem;
	font-weight: bold;
	color: #282828;
	margin: 0 auto;
`;

export const SubmitButton = styled.button`
	width: 198px;
	height: 51px;
	background-color: #1f1f1f;

	font-family: 'NotoSansKR';
	font-size: 0.875rem;
	font-weight: 500;
	color: white;

	margin: 0 auto;
`;
