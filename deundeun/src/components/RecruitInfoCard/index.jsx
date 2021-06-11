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

const RecruitInfoCard = ({ clubRecruitInfo, clubName }) => {
	const { title, remainDays } = clubRecruitInfo;

	return (
		//
		<Container>
			<InnerContainer>
				<RecruitingInfoContainer>
					<RecruitingInfo>ON</RecruitingInfo>
					<ClubName>{clubName}</ClubName>
				</RecruitingInfoContainer>
				<RecruitTitle>{title}</RecruitTitle>
				<ApplyButtonContainer>
					{
						remainDays < 0 ?
							(
								<>
									<ApplyButton>지원마감</ApplyButton>
								</>
							)
							: (

								<div>
									<Deadline>D-4</Deadline>
									<ApplyButton>지원하기</ApplyButton>
								</div>
							)
					}
				</ApplyButtonContainer>
			</InnerContainer >
		</Container >
	);
};

export default RecruitInfoCard;
