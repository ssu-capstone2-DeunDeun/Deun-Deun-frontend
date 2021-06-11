import { Container, RecruitInfoContainer, RecruitDetail, ContentKorean, TitleKorean, SeeAll } from './styles';
import React, { useCallback } from 'react';
import RecruitInfoCard from 'components/RecruitInfoCard';

const RecruitAnnounceSection = ({ clubRecruitInfo, clubName }) => {
	const onClickSeePrev = useCallback((e) => {
		console.log('see prev recruitment');
	}, []);


	return (
		//
		<Container>
			<RecruitInfoContainer>
				<TitleKorean>모집 공고</TitleKorean>
				<RecruitDetail>
					<ContentKorean>1개의 진행중인 모집 공고가 있습니다.</ContentKorean>
					<SeeAll>전체보기</SeeAll>
				</RecruitDetail>
				{clubRecruitInfo && <RecruitInfoCard clubName={clubName} clubRecruitInfo={clubRecruitInfo} />}
			</RecruitInfoContainer>
		</Container>
	);
};

export default RecruitAnnounceSection;
