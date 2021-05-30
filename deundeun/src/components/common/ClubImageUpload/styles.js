import styled from '@emotion/styled';

export const Container = styled.div`
	border: none;

	width: 50%;
	height: 50%;

	display: flex;
	align-items: center;
	justify-content: center;

	border-radius: 20px;

	&.background {
		width: 50px;
		height: 50px;
	}
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

export const Add = styled.span`
	font-family: 'NotoSansKR';
	font-size: 3rem;
	font-weight: bold;
	color: #c3c3c3;
`;
