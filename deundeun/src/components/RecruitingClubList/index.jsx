import React, { useCallback } from 'react';
import GlobalFonts from 'fonts/fonts';
import {
	Container,
	Header,
	ClubList,
	Divider,
	RecruitingOrder,
	ClubListItem,
	ClubName,
	ClubCategory,
	Deadline,
	ContentKorean
} from './styles';
import { useHistory } from 'react-router';
const RecruitingClubList = ({ focusClubImage }) => {
	const history = useHistory();

	const onClickClubName = useCallback(
		(e) => {
			history.push('/club/detail');
			console.log(e.target.id);
		},
		[history]
	);

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
					<ClubName id="first" onClick={onClickClubName}>
						IT동아리 트와이스
					</ClubName>
					<ClubCategory>IT / 개발</ClubCategory>
					<Deadline>D-4</Deadline>
				</ClubListItem>
				<Divider />
				<ClubListItem className={`${focusClubImage === 1 ? 'focus' : 'unfocus'}`}>
					<RecruitingOrder>2</RecruitingOrder>
					<ClubName>MARATHON - 러닝 동아리</ClubName>
					<ClubCategory>체육</ClubCategory>
					<Deadline>D-2</Deadline>
				</ClubListItem>
				<Divider />
				<ClubListItem className={`${focusClubImage === 2 ? 'focus' : 'unfocus'}`}>
					<RecruitingOrder>3</RecruitingOrder>
					<ClubName>INSTAGRAM: 사진 동아리</ClubName>
					<ClubCategory>문화 / 예술</ClubCategory>
					<Deadline className="impending">D-1</Deadline>
				</ClubListItem>
				<Divider />
				<ClubListItem className={`${focusClubImage === 3 ? 'focus' : 'unfocus'}`}>
					<RecruitingOrder>4</RecruitingOrder>
					<ClubName>주식투자 동아리 @ELONMUSK</ClubName>
					<ClubCategory>학술 / 교양</ClubCategory>
					<Deadline>D-5</Deadline>
				</ClubListItem>
				<Divider />
				<ClubListItem className={`${focusClubImage === 4 ? 'focus' : 'unfocus'}`}>
					<RecruitingOrder>5</RecruitingOrder>
					<ClubName>경제학술 동아리 Bithumb</ClubName>
					<ClubCategory>학술 / 교양</ClubCategory>
					<Deadline>D-4</Deadline>
				</ClubListItem>
			</ClubList>
		</Container>
	);
};

export default RecruitingClubList;
