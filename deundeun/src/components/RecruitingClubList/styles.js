import styled from '@emotion/styled';

export const Container = styled.div`
	width: 653px;
	height: 413px;
	background-color: #f7f7f7;
`;

export const Header = styled.div`
	margin-top: 1em;
	display: flex;
	flex-direction: row;
`;

export const ClubList = styled.ol`
	display: flex;
	flex-direction: column;
	margin-top: 2em;
	margin-left: 1em;
	list-style: none;
`;

export const ClubListItem = styled.li`
	display: flex;
	flex-direction: row;
	font-family: 'NotoSansKR';
	font-size: 1.25rem;
	line-height: 1.45;
	padding-bottom: 0.5em;
	padding-top: 1em;
	&.focus {
		font-weight: 900;
	}
`;

export const RecruitingOrder = styled.span`
	font-family: 'GmarketSansBold';
	font-size: 1.25rem;
	margin-right: 2em;
	&.first {
		font-size: 1.34rem;
	}
`;

export const ClubName = styled.span`
	font-family: 'NotoSansKR';
	margin-right: 1em;
	cursor: pointer;
`;

export const ClubCategory = styled.span`
	font-family: 'NotoSansKR';
`;

export const Deadline = styled.span`
	font-family: 'NotoSansKR';
	margin-left: auto;
	margin-right: 3em;
`;

export const Divider = styled.div`
	width: 537px;
	opacity: 0.21;
	border: solid 1px #707070;
`;