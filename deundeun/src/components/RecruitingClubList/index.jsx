import React from 'react';
import GlobalFonts from 'fonts/fonts';
import { ContentKorean } from 'pages/ClubPage/styles';
import {
	Container,
	Header,
	ClubList,
	Divider,
	RecruitingOrder,
	ClubListItem,
	ClubName,
	ClubCategory,
	Deadline
} from './styles';
const RecruitingClubList = ({ focusClubImage }) => {
	return (
		//
		<Container>
			<Header>
				<GlobalFonts />
				<ContentKorean style={{ marginLeft: 'auto', marginRight: '1em' }}>전체 카테고리</ContentKorean>
				<ContentKorean style={{ marginRight: '1em' }}>최신순</ContentKorean>
			</Header>
			<ClubList>
				<ClubListItem className={`${focusClubImage === 0 ? 'focus' : 'unfocus'}`}>
					<RecruitingOrder className="first">1</RecruitingOrder>
					<ClubName>IT동아리 트와이스</ClubName>
					<ClubCategory>IT / 개발</ClubCategory>
					<Deadline>D-4</Deadline>
				</ClubListItem>
				<Divider />
				<ClubListItem className={`${focusClubImage === 1 ? 'focus' : 'unfocus'}`}>
					<RecruitingOrder>2</RecruitingOrder>
					<ClubName>IT동아리 트와이스</ClubName>
					<ClubCategory>IT / 개발</ClubCategory>
					<Deadline>D-4</Deadline>
				</ClubListItem>
				<Divider />
				<ClubListItem className={`${focusClubImage === 2 ? 'focus' : 'unfocus'}`}>
					<RecruitingOrder>3</RecruitingOrder>
					<ClubName>IT동아리 트와이스</ClubName>
					<ClubCategory>IT / 개발</ClubCategory>
					<Deadline>D-4</Deadline>
				</ClubListItem>
				<Divider />
				<ClubListItem className={`${focusClubImage === 3 ? 'focus' : 'unfocus'}`}>
					<RecruitingOrder>4</RecruitingOrder>
					<ClubName>IT동아리 트와이스</ClubName>
					<ClubCategory>IT / 개발</ClubCategory>
					<Deadline>D-4</Deadline>
				</ClubListItem>
				<Divider />
				<ClubListItem className={`${focusClubImage === 4 ? 'focus' : 'unfocus'}`}>
					<RecruitingOrder>5</RecruitingOrder>
					<ClubName>IT동아리 트와이스</ClubName>
					<ClubCategory>IT / 개발</ClubCategory>
					<Deadline>D-4</Deadline>
				</ClubListItem>
			</ClubList>
		</Container>
	);
};

export default RecruitingClubList;
