import { Container, RecruitInfoContainer, RecruitDetail, ContentKorean, TitleKorean, SeeAll } from './styles';
import React, { useCallback } from 'react';
import RecruitInfoCard from 'components/RecruitInfoCard';
import { ControlPointSharp } from '../../../node_modules/@material-ui/icons/index';

const RecruitAnnounceSection = ({ clubRecruitInfo, clubName }) => {
	const onClickSeePrev = useCallback((e) => {
		console.log('see prev recruitment');
	}, []);
	console.log("clubREcruitinfo", clubRecruitInfo);

	return (
		//
		<Container>
			<RecruitInfoContainer>
				<TitleKorean>모집 공고</TitleKorean>
				<RecruitDetail>
					{
						clubRecruitInfo ?
							(
								<>
									<ContentKorean>아래와 같은 모집 공고 내역이 확인 됩니다.</ContentKorean>
									<SeeAll>전체보기</SeeAll>
								</>
							)
							:
							(<ContentKorean>현재 진행중인 모집 공고가 없습니다.</ContentKorean>)
					}
				</RecruitDetail>
				{clubRecruitInfo && <RecruitInfoCard clubName={clubName} clubRecruitInfo={clubRecruitInfo} />}
			</RecruitInfoContainer>
		</Container>
	);
};

export default RecruitAnnounceSection;
