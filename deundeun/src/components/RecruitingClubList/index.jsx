import React from 'react';
import GlobalFonts from 'fonts/fonts';
import { ContentKorean } from 'pages/ClubPage/styles';
import { Container, Header, ClubList } from './styles';
const RecruitingClubList = () => {
	return (
		//
		<Container>
			<Header>
				<GlobalFonts />
				<ContentKorean style={{ marginLeft: 'auto', marginRight: '1em' }}>전체 카테고리</ContentKorean>
				<ContentKorean style={{ marginRight: '1em' }}>최신순</ContentKorean>
			</Header>
			<ClubList>
				<li>1 IT동아리 트와이스</li>
				<li>1 IT동아리 트와이스</li>
			</ClubList>
		</Container>
	);
};

export default RecruitingClubList;
