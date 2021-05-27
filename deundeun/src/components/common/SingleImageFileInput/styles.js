import styled from '@emotion/styled';

export const Container = styled.div`
	border: none;
	width: 36.8px;
	height: 36.8px;

	display: flex;
	align-items: center;
	justify-content: center;

	border-radius: 20px;

	position: absolute;
	bottom: 0%;
	right: 0%;
`;

export const Input = styled.input`
	display: none;
`;

export const InputButton = styled.button`
	border: none;
	background-color: #f7f7f7;

	&:hover {
		opacity: 0.5;
	}
`;

export const ClubImageUploadButton = styled.button`
	width: 100%;
	height: 100%;
	background-color: #505050;
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.125rem;
	font-weight: bold;
`;
