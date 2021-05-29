import styled from '@emotion/styled';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #f7f7f7;
	width: 1300px;
	height: 180px;
	padding-left: 2.56vw;
	padding-right: 1.1vw;
`;

export const HeaderContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-top: 4vh;
`;

export const RecruitingInfo = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 4vh;
	border-radius: 26px;
	border: solid 1px #707070;
	font-family: 'NotoSansKR';
	color: #606060;
	font-size: 0.75rem;
	margin-right: 1vw;
	&.pending {
		width: 5vw;
	}

	&.order {
		min-width: 3vw;
		max-width: 3.5vw;
	}
`;

export const RecruitDeadline = styled.span`
	font-family: 'NotoSansKR';
	font-size: 0.94rem;
	color: #606060;
`;

export const RecruitTitle = styled.span`
	font-family: 'NotoSansKR';
	font-size: 1.25rem;
	color: #202020;
	font-weight: bold;
`;

export const ButtonContainer = styled.div`
	display: flex;
	flex-direction: row;
	margin-left: auto;
	width: 25%;
	justify-content: space-between;
	margin-top: 0.8vh;
`;
