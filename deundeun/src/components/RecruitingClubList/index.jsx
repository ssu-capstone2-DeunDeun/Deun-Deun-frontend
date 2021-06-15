import React, { useCallback, useState } from 'react';
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
	DropdownContainer
} from './styles';
import { useHistory } from 'react-router';
import DropdownMenu from 'components/common/DropdownMenu/index';
import { ContainerRow } from 'styles';
const RecruitingClubList = ({ focusClubImage, recruitingClubDtos }) => {
	const history = useHistory();
	const [categoryIndex, setCategoryIndex] = useState(0);
	console.log("recruiting", recruitingClubDtos);
	const categories = [
		'전체 카테고리',
		'IT(개발)',
		'HEALTH(헬스)',
		'STARTUP(창업)',
		'FRIENDSHIP(친목)',
		'VOLUNTEER(봉사)',
		'CULTURE(문화)',
		'LANGUAGE(어학)',
		'OTHERS(기타)'];

	return (
		//
		<Container>
			<Header>
				<DropdownContainer>
					<ContainerRow style={{ marginLeft: 'auto', alignItems: 'center' }}>
						{`${categories[categoryIndex]}`}
						<DropdownMenu options={categories} selectedIndex={categoryIndex} setSelectedIndex={setCategoryIndex} />
					</ContainerRow>
				</DropdownContainer>
			</Header>
			<ClubList>
				{
					recruitingClubDtos && recruitingClubDtos.map((club, index) =>
						<>
							<ClubListItem className={`${focusClubImage === index ? 'focus' : 'unfocus'}`}>
								<RecruitingOrder className="first">{index + 1}</RecruitingOrder>
								<ClubName id="first" onClick={() => history.push(`club/${club.clubName}`)}>
									IT 동아리 트와이스입니다.
								</ClubName>
								<ClubCategory>{club.categoryType}</ClubCategory>
								<Deadline>D - {club.dday}</Deadline>
							</ClubListItem>
							<Divider />
						</>
					)
				}
				{/* <ClubListItem className={`${focusClubImage === 0 ? 'focus' : 'unfocus'}`}>
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
				</ClubListItem> */}
			</ClubList>
		</Container>
	);
};

export default RecruitingClubList;


// categoryType: "IT"
// clubRecruitId: 1
// content: "든든공고입니다."
// dday: -1
// generation: 2
// recruitingNow: true
// representImageUrl: null
// title: "string"