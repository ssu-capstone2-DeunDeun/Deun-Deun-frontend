import React from 'react';
import { Container, RecruitInfoImage, RecruitInfoDetail, HeaderDetail, RecruitTitle, RecruitDetail } from './styles';

const RecruitInfoCard = () => {
	return (
		//
		<Container>
			<RecruitInfoImage />
			<RecruitInfoDetail>
				<HeaderDetail>D-4 모집 마감 | 21.01.01 ~ 21.06.01</HeaderDetail>
				<RecruitTitle>[3기] 야! 너도 트와이스 할 수 있어!</RecruitTitle>
				<RecruitDetail>
					동아리 모집 공고 소개. 동아리 모집 공고 소개. 동아리 모집 공고 소개. 동아리 모집 공고 소개. 동아리 모집 공고
					소개.
				</RecruitDetail>
			</RecruitInfoDetail>
		</Container>
	);
};

export default RecruitInfoCard;
