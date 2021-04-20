import { Container, RecruitInfoContainer, RecruitDetail, ContentKorean, TitleKorean } from './styles';
import React, { useCallback } from 'react';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import RecruitInfoCard from 'components/RecruitInfoCard';

const RecruitAnnounceSection = () => {
	const onClickSeePrev = useCallback((e) => {
		console.log('see prev recruitment');
	}, []);

	return (
		//
		<Container>
			<RecruitInfoContainer>
				<TitleKorean>모집 공고</TitleKorean>
				<RecruitDetail>
					<ContentKorean>1개의 모집 공고가 있습니다.</ContentKorean>
					<CheckCircleIcon
						style={{ marginLeft: 'auto', marginRight: '0.4em', cursor: 'pointer' }}
						onClick={onClickSeePrev}
					/>
					<ContentKorean>이전 공고 모두 보기</ContentKorean>
				</RecruitDetail>
				<RecruitInfoCard />
				<RecruitInfoCard />
			</RecruitInfoContainer>
		</Container>
	);
};

export default RecruitAnnounceSection;
