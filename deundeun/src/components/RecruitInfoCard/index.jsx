import React from 'react';
import {
	Container,
	RecruitTitle,
	InnerContainer,
	RecruitingInfoContainer,
	RecruitingInfo,
	ClubName,
	ApplyButtonContainer,
	Deadline,
	ApplyButton
} from './styles';

const RecruitInfoCard = ({ }) => {
	return (
		//
		<Container>
			<InnerContainer>
				<RecruitingInfoContainer>
					<RecruitingInfo>ON</RecruitingInfo>
					<ClubName>트와이스</ClubName>
				</RecruitingInfoContainer>
				<RecruitTitle>[3기] 모집 공고 제목 모집 공고 제목</RecruitTitle>
				<ApplyButtonContainer>
					<Deadline>D-4</Deadline>
					<ApplyButton>지원하기</ApplyButton>
				</ApplyButtonContainer>
			</InnerContainer>
		</Container>
	);
};

export default RecruitInfoCard;
