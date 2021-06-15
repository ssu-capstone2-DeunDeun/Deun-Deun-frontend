import styled from 'styled-components';

export const RegisterFormBlock = styled.div`
	width: 1100px;
	margin: 0 auto;
`;

export const ApplyInfoBox = styled.div`
	font-family: NotoSansKR;
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: normal;
	text-align: left;
	.step {
		font-size: 16px;
		font-weight: 500;
		color: #555555;
		margin-bottom: 4px;
	}
	.info {
		font-size: 32px;
		font-weight: bold;
		color: #282828;
		margin-bottom: 38.1px;
		padding-bottom: 21.9px;
		border-bottom: 3px solid #282828;
	}
`;

export const FormContent = styled.div`
	.name {
		font-family: NotoSansKR;
		font-size: 18px;
		font-weight: bold;
		font-stretch: normal;
		font-style: normal;
		line-height: 1.45;
		letter-spacing: normal;
		text-align: left;
		color: #282828;
	}
`;

export const StyledTextarea = styled.textarea`
	width: 1080px;
	height: 148px;
	margin: 24px 0 48px;
	font-size: 14px;
	border: none;
	background-color: #f7f7f7;
	outline: none;
	padding-left: 20.1px;
	padding-top: 22.1px;
	color: #282828;
`;

export const ButtonBlock = styled.div`
	text-align: center;
	a {
		text-decoration: none;
		color: #ffffff;
	}
`;
