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
		top: 0%;
		left: 18%;
		width: 1200px;
		height: 800px;
		padding-top: 2em;
		background-color: #fff;
	}

	z-index: 999;

	display: flex;
`;

export const CloseModalButton = styled.button`
	background: transparent;
	border: none;
	cursor: pointer;
	font-size: 2.3rem;

	position: absolute;
	top: 2%;
	right: 3%;
`;

export const Divider = styled.div`
	width: 92%;
	height: 2px;
	border: solid 1px #686868;
	margin: 0 auto;
`;
