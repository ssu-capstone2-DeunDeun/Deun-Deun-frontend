import styled from '@emotion/styled';

export const Container = styled.div`
	width: 100%;
	height: 120px;

	display: flex;
	align-items: center;
	justify-content: center;

	margin-bottom: 1em;
	background-color: #f3f3f3;
`;

export const InnerContainer = styled.div`
	width: 90%;
	height: 80%;

	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const RecruitingInfoContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

export const RecruitingInfo = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	width: 40px;
	height: 20px;
	border-radius: 14px;
	border: solid 1.5px #04cbac;

	font-family: 'GmarketSans';
	font-size: 0.813rem;
	font-weight: 700;
	color: #04cbac;
`;

export const ClubName = styled.span`
	font-family: 'NotoSansKR';
	font-size: 1.2rem;
	font-weight: bold;
	color: #282828;

	margin-left: 0.5em;
`;

export const RecruitTitle = styled.span`
	font-family: 'NotoSansKR';
	font-weight: bold;
	font-size: 1.3rem;
	color: #282828;
`;

export const ApplyButtonContainer = styled.div`
	display: flex;
	flex-direction: column;

	align-items: center;
`;

export const Deadline = styled.span`
	font-family: 'NotoSansKR';
	font-size: 1rem;
	color: #282828;
	margin-right: 1em;
	font-weight: 700;
`;

export const ApplyButton = styled.button`
	width: 130px;
	height: 45px;

	border-radius: 23px;
	background-color: #06cbad;
	border: none;

	font-size: 1rem;
	font-weight: 700;
	color: #fff;

	&:hover {
		background-color: #26ebcd;
	}
`;
